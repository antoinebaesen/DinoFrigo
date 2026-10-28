const {test}=require('node:test');const assert=require('node:assert/strict');
const catalogue=require('./catalogue');const {validate,normalize,activeDishes,activeIngredients,available,parseImport}=require('./logic');
test('Le catalogue complet est cohérent et ses illustrations sont des emojis',()=>{
  validate(catalogue);assert.equal(catalogue.plats.length,358);assert.equal(catalogue.ingredients.length,197);
  const elements=[...catalogue.ingredients,...catalogue.plats];
  normalize(structuredClone(catalogue));
  for(const i of elements)assert.ok(!/[🚗🎲🏰🎸🔑🪑]/u.test(i.image),i.nom);
  assert.equal(new Set(catalogue.plats.map(d=>d.nom)).size,catalogue.plats.length);
});
test('Premier démarrage : aucun stock et aucune sélection',()=>{
  const data=normalize(structuredClone(catalogue));assert.equal(activeDishes(data).length,0);assert.equal(activeIngredients(data).length,0);
  assert.ok(data.ingredients.every(i=>i.stock===0));assert.ok(data.plats.every(d=>!available(d,data.ingredients)));
});
test('Activer un plat active exactement les ingrédients de ce plat',()=>{
  const data=structuredClone(catalogue);data.plats[0].enabled=true;
  assert.deepEqual(activeIngredients(data).map(i=>i.id).sort(),data.plats[0].ingredients.map(r=>r.id).sort());
});
test('Un ingrédient partagé reste actif jusqu’à la désactivation du dernier plat',()=>{
  const data=structuredClone(catalogue);data.plats[0].enabled=true;data.plats[1].enabled=true;
  const tomato=data.ingredients.find(i=>i.id==='tomate');tomato.stock=3;
  data.plats[0].enabled=false;assert.ok(activeIngredients(data).some(i=>i.id==='tomate'));assert.equal(activeIngredients(data).some(i=>i.id==='basilic'),false);
  data.plats[1].enabled=false;assert.equal(activeIngredients(data).length,0);assert.equal(tomato.stock,3);
  data.plats[0].enabled=true;assert.equal(activeIngredients(data).find(i=>i.id==='tomate').stock,3);
});
test('Export et import conservent la sélection et le stock ; un ancien import reste désactivé',()=>{
  const data=structuredClone(catalogue);data.plats[2].enabled=true;data.ingredients[0].stock=5;
  const restored=normalize(parseImport('export default '+JSON.stringify(data)+';'));
  assert.deepEqual(activeDishes(restored).map(d=>d.id),[data.plats[2].id]);assert.equal(restored.ingredients[0].stock,5);
  delete data.plats[2].enabled;assert.equal(activeDishes(normalize(data)).length,0);
});
test('Import refuse une activation textuelle ou des métadonnées invalides',()=>{
  for(const change of [{enabled:'true'},{category:123},{servings:0}]){const data=structuredClone(catalogue);Object.assign(data.plats[0],change);assert.throws(()=>normalize(data));}
});
test('Des emojis alimentaires partagés et combinés sont acceptés',()=>{
  const data=structuredClone(catalogue);data.plats[0].image='🥗🍅';data.plats[1].image='🥗🍅';assert.doesNotThrow(()=>normalize(data));data.plats[0].image='texte';assert.throws(()=>normalize(data));
});
