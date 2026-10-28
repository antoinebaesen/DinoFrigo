const fs=require('node:fs');const path=require('node:path');
const esbuild=require('esbuild');
const root=path.resolve(__dirname,'..');const catalogue=require('../catalogue');require('../logic').validate(catalogue);
fs.writeFileSync(path.join(root,'catalogue-import.js'),'export default '+JSON.stringify(catalogue,null,2)+';\n');
const lines=['# Catalogue Dino Frigo','',`**${catalogue.plats.length} recettes · ${catalogue.ingredients.length} ingrédients.** Tous les plats sont désactivés et les stocks sont à zéro au premier démarrage.`,'','Ce catalogue étendu reste enrichissable : il ne prétend pas couvrir toutes les cuisines du monde. Les compositions sont des versions usuelles pour 2 personnes, personnalisables dans Édition. Les niveaux indiquent une réserve à prévoir, pas un dosage de recette. Le sel, le poivre et les matières grasses peuvent être ajoutés selon vos habitudes. Les emojis représentent les aliments ou leur famille. Les recettes partent de bases simples à enrichir dans Édition. Les plats principaux et occasionnels sont sélectionnables séparément.','','## Ingrédients',''];
for(const i of catalogue.ingredients)lines.push(`- ${i.image} **${i.nom}** — ${i.typeQuantite==='NOMBRE'?'nombre d’unités':'absent / peu / moyen / beaucoup / énormément'}`);
for(const category of [...new Set(catalogue.plats.map(d=>d.category))]){lines.push('','## '+category,'');for(const d of catalogue.plats.filter(d=>d.category===category)){const list=d.ingredients.map(r=>{const i=catalogue.ingredients.find(i=>i.id===r.id);return `${i.image} ${i.nom}${i.typeQuantite==='NOMBRE'?' × '+r.quantity:''}`;}).join(', ');lines.push(`- ${d.image} **${d.nom}** : ${list}`);}}
fs.writeFileSync(path.join(root,'CATALOGUE.md'),lines.join('\n')+'\n');
const dist=path.join(root,'dist');fs.mkdirSync(path.join(dist,'icons'),{recursive:true});
const files=['index.html','app.js','logic.js','catalogue.js','catalogue-import.js','style.css','mobile23.css','icon.svg','manifest.webmanifest','sw.js','INSTALLATION.md','CATALOGUE.md','icons/icon-180.png','icons/icon-192.png','icons/icon-512.png','icons/icon-maskable-512.png'];
for(const file of files)fs.copyFileSync(path.join(root,file),path.join(dist,file));
esbuild.buildSync({entryPoints:[path.join(root,'native-entry.js')],bundle:true,format:'iife',globalName:'DinoNative',outfile:path.join(dist,'native.js'),target:['chrome100'],minify:true});
if(fs.existsSync(path.join(root,'fonts.css'))){fs.copyFileSync(path.join(root,'fonts.css'),path.join(dist,'fonts.css'));fs.mkdirSync(path.join(dist,'fonts'),{recursive:true});for(const file of fs.readdirSync(path.join(root,'fonts')))fs.copyFileSync(path.join(root,'fonts',file),path.join(dist,'fonts',file));}
const cached=['./','./native.js',...files.map(file=>'./'+file)];
if(fs.existsSync(path.join(root,'fonts.css')))cached.push('./fonts.css',...fs.readdirSync(path.join(root,'fonts')).filter(file=>file.endsWith('.woff2')).map(file=>'./fonts/'+file));
fs.writeFileSync(path.join(dist,'sw.js'),fs.readFileSync(path.join(root,'sw.js'),'utf8').replace(/const FILES=\[[^\n]*\];/,'const FILES='+JSON.stringify(cached)+';'));
console.log(`Distribution prête : ${dist}\n${catalogue.plats.length} recettes, ${catalogue.ingredients.length} ingrédients, aucun stock et aucun plat activé par défaut.`);
