const fs=require('node:fs');const path=require('node:path');
const root=path.resolve(__dirname,'..');
async function main(){
  const fontRoot=path.join(root,'fonts');fs.mkdirSync(fontRoot,{recursive:true});
  const response=await fetch('https://fonts.googleapis.com/css2?family=DM+Sans:wght@100..900&family=Manrope:wght@200..800&display=swap',{headers:{'User-Agent':'Mozilla/5.0 Chrome/131.0.0.0 Safari/537.36'}});
  if(!response.ok)throw Error('Téléchargement des polices : '+response.status);
  const css=await response.text();const urls=[...new Set([...css.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g)].map(m=>m[1]))];
  let localCss=css;let index=0;
  for(const url of urls){const name=`font-${++index}.woff2`;const font=await fetch(url);if(!font.ok)throw Error('Police introuvable : '+font.status);fs.writeFileSync(path.join(fontRoot,name),Buffer.from(await font.arrayBuffer()));localCss=localCss.replaceAll(url,`fonts/${name}`);}
  fs.writeFileSync(path.join(root,'fonts.css'),localCss);
  for(const [font,folder] of [['dmsans','dmsans'],['manrope','manrope']]){const r=await fetch(`https://raw.githubusercontent.com/google/fonts/main/ofl/${folder}/OFL.txt`);if(!r.ok)throw Error('Licence de police introuvable');fs.writeFileSync(path.join(fontRoot,`${font}-OFL.txt`),await r.text());}
  const style=fs.readFileSync(path.join(root,'style.css'),'utf8').replace(/^\s*@import url\([^\n]+\);\s*/,'');fs.writeFileSync(path.join(root,'style.css'),style);
  console.log(`${urls.length} fichiers de police intégrés localement.`);
}
main().catch(error=>{console.error(error.message);process.exitCode=1;});
