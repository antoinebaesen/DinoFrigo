const path=require('node:path');const {spawnSync}=require('node:child_process');const root=path.resolve(__dirname,'..');
for(const command of ['npm run build','npx cap sync android','node tools/build-android.cjs']){
  const result=spawnSync('cmd.exe',['/d','/s','/c',command],{cwd:root,stdio:'inherit'});
  if(result.error)throw result.error;if(result.status!==0)process.exit(result.status||1);
}
