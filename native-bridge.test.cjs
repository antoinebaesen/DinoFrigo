const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');const vm=require('node:vm');
function bridge(native=true,overrides={}){
  const calls=[];const values=new Map();
  const Preferences={configure:async o=>calls.push(['configure',o]),get:async({key})=>({value:values.get(key)||null}),set:async({key,value})=>{values.set(key,value);calls.push(['save',key,value]);}};
  const context=vm.createContext({Capacitor:{isNativePlatform:()=>native},Preferences,Filesystem:{writeFile:async o=>calls.push(['file',o]),getUri:async()=>({uri:'content://fr.dinofrigo.app/export.json'})},Directory:{Cache:'CACHE'},Encoding:{UTF8:'utf8'},Share:{share:async o=>calls.push(['share',o])},App:{addListener:async(e,cb)=>calls.push(['listener',e,cb]),minimizeApp:async()=>calls.push(['minimize'])},StatusBar:{setStyle:async o=>calls.push(['style',o]),setBackgroundColor:async o=>calls.push(['background',o])},Style:{Dark:'DARK',Light:'LIGHT'},...overrides});
  const source=fs.readFileSync('native-entry.js','utf8').replace(/^import .*;\s*$/gm,'').replace(/^export /gm,'');vm.runInContext(source,context);
  const api=vm.runInContext('({isNative,ready,saveState,setTheme,exportFile,attachBackButton,minimize})',context);return {api,calls,values};
}
test('La sauvegarde native sérialise les écritures pour conserver la dernière modification',async()=>{
  let stored=null;const writes=[];const prefs={configure:async()=>{},get:async()=>({value:null}),set:async({value})=>{const state=JSON.parse(value);await new Promise(r=>setTimeout(r,state.number===1?20:1));stored=state;writes.push(state.number);}};
  const {api}=bridge(true,{Preferences:prefs});await api.ready;await Promise.all([api.saveState({number:1}),api.saveState({number:2})]);assert.equal(stored.number,2);assert.deepEqual(writes,[1,2]);
});
test('Une erreur de sauvegarde native ne bloque pas les sauvegardes suivantes',async()=>{
  let attempts=0;const prefs={configure:async()=>{},get:async()=>({value:null}),set:async()=>{if(++attempts===1)throw Error('disk');}};
  const {api}=bridge(true,{Preferences:prefs});await api.ready;await assert.rejects(api.saveState({number:1}));await api.saveState({number:2});assert.equal(attempts,2);
});
test('Exporter crée un fichier privé puis partage son URI Android',async()=>{
  const {api,calls}=bridge();await api.ready;await api.exportFile('{"stock":0}','dino-frigo.json');const file=calls.find(c=>c[0]==='file')[1],share=calls.find(c=>c[0]==='share')[1];assert.equal(file.directory,'CACHE');assert.equal(file.path,'exports/dino-frigo.json');assert.equal(file.data,'{"stock":0}');assert.equal(share.files[0],'content://fr.dinofrigo.app/export.json');
});
test('Le navigateur ne déclenche pas de stockage natif',async()=>{
  const {api,calls}=bridge(false);await api.ready;await api.saveState({stock:0});await api.setTheme(true);assert.equal(calls.length,0);
});
test('Le thème et le bouton Retour utilisent les fonctions Android',async()=>{
  const {api,calls}=bridge();await api.ready;await api.setTheme(true);const back=()=>{};await api.attachBackButton(back);await api.minimize();assert.equal(calls.find(c=>c[0]==='style')[1].style,'DARK');assert.equal(calls.find(c=>c[0]==='background')[1].color,'#19221c');assert.equal(calls.find(c=>c[0]==='listener')[1],'backButton');assert.equal(calls.find(c=>c[0]==='listener')[2],back);assert.ok(calls.some(c=>c[0]==='minimize'));
});
