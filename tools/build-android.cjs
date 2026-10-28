const fs=require('node:fs');const path=require('node:path');const os=require('node:os');const crypto=require('node:crypto');const {spawn,spawnSync}=require('node:child_process');
const root=path.resolve(__dirname,'..');const home=os.homedir();
const javaHome=process.env.DINO_JAVA_HOME||path.join(home,'.jdks','jbr-21.0.11');
const sdk=process.env.ANDROID_HOME||process.env.ANDROID_SDK_ROOT||path.join(home,'AppData','Local','Android','Sdk');
const keyRoot=path.join(root,'.android-signing');const delivery=path.join(root,'livraison');const buildTools=path.join(sdk,'build-tools','36.0.0');
function run(executable,args,options={}){const result=spawnSync(executable,args,{cwd:root,stdio:'inherit',...options});if(result.error)throw result.error;if(result.status!==0)throw Error(path.basename(executable)+' a échoué ('+result.status+').');}
async function main(){
  for(const file of [path.join(javaHome,'bin','java.exe'),path.join(sdk,'platforms','android-36','android.jar'),path.join(buildTools,'lib','apksigner.jar')])if(!fs.existsSync(file))throw Error('Composant Android/Java manquant : '+file);
  fs.writeFileSync(path.join(root,'android','local.properties'),'sdk.dir='+sdk.replaceAll('\\','/').replaceAll(':','\\:')+'\n');
  fs.mkdirSync(keyRoot,{recursive:true});fs.mkdirSync(delivery,{recursive:true});
  const credentialsFile=path.join(keyRoot,'credentials.json');const keyFile=path.join(keyRoot,'dino-frigo-release.p12');
  let password;
  if(fs.existsSync(credentialsFile))password=JSON.parse(fs.readFileSync(credentialsFile,'utf8')).password;
  else{password=crypto.randomBytes(32).toString('hex');fs.writeFileSync(credentialsFile,JSON.stringify({alias:'dinofrigo',password},null,2));}
  const env={...process.env,JAVA_HOME:javaHome,ANDROID_HOME:sdk,DINO_KEYSTORE_PASSWORD:password};
  if(!fs.existsSync(keyFile))run(path.join(javaHome,'bin','keytool.exe'),['-genkeypair','-noprompt','-keystore',keyFile,'-storetype','PKCS12','-alias','dinofrigo','-keyalg','RSA','-keysize','3072','-validity','10000','-dname','CN=Dino Frigo, OU=Application locale, O=Dino Frigo, C=FR','-storepass:env','DINO_KEYSTORE_PASSWORD','-keypass:env','DINO_KEYSTORE_PASSWORD'],{env});
  console.log('Compilation Android release et vérification lint…');
  await new Promise((resolve,reject)=>{const child=spawn('cmd.exe',['/d','/s','/c','gradlew.bat :app:assembleRelease :app:lintRelease --no-daemon --console=plain'],{cwd:path.join(root,'android'),env,stdio:'inherit'});child.on('error',reject);child.on('exit',code=>code===0?resolve():reject(Error('Gradle a échoué ('+code+').')));});
  const unsigned=path.join(root,'android','app','build','outputs','apk','release','app-release-unsigned.apk');
  const aligned=path.join(root,'.build','app-release-aligned.apk');fs.mkdirSync(path.dirname(aligned),{recursive:true});
  run(path.join(buildTools,'zipalign.exe'),['-f','-p','4',unsigned,aligned]);
  const apk=path.join(delivery,'Dino-Frigo-2.3.0.apk');
  run(path.join(javaHome,'bin','java.exe'),['-jar',path.join(buildTools,'lib','apksigner.jar'),'sign','--ks',keyFile,'--ks-key-alias','dinofrigo','--ks-pass','env:DINO_KEYSTORE_PASSWORD','--out',apk,aligned],{env});
  run(path.join(javaHome,'bin','java.exe'),['-jar',path.join(buildTools,'lib','apksigner.jar'),'verify','--verbose','--print-certs',apk]);
  const hash=crypto.createHash('sha256').update(fs.readFileSync(apk)).digest('hex');fs.writeFileSync(path.join(delivery,'SHA256.txt'),hash+'  '+path.basename(apk)+'\n');
  fs.copyFileSync(path.join(root,'ANDROID-INSTALLATION.md'),path.join(delivery,'INSTALLATION.md'));
  console.log('APK prêt à installer : '+apk);console.log('SHA256 : '+hash);
}
main().catch(error=>{console.error(error.message);process.exitCode=1;});
