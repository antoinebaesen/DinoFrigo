const {test}=require('node:test');const assert=require('node:assert/strict');const seed=require('./catalogue');const {shoppingList,migrateCatalogue,normalize}=require('./logic');
test('Importance comptée selon les recettes sélectionnées et les occasionnels inclus',()=>{
 const data=structuredClone(seed);const a=data.plats[0],b=data.plats[1];a.enabled=b.enabled=true;a.kind='principal';b.kind='occasionnel';
 const first=shoppingList(data,{sort:'importance'});assert.ok(first.every(i=>i.importance===1));assert.equal(first.length,a.ingredients.length);
 const all=shoppingList(data,{sort:'importance',includeOccasional:true});assert.equal(all.find(i=>i.id==='tomate').importance,2);assert.equal(all[0].importance,2);
 b.enabled=false;assert.ok(shoppingList(data,{includeOccasional:true}).every(i=>i.importance===1));
});
test('Migration conserve stocks, sélection, images et compositions personnalisées',()=>{
 const data=structuredClone(seed);delete data.catalogRevision;const dish=data.plats[0];dish.ingredients=structuredClone(seed.legacyDishes[dish.id].ingredients);dish.image=seed.legacyDishes[dish.id].image;dish.enabled=true;delete dish.kind;data.ingredients[0].stock=4;
 const custom=data.plats[1];custom.ingredients=[{id:'oeuf',quantity:2}];custom.image='🥚';
 const next=normalize(migrateCatalogue(data,seed));assert.equal(next.ingredients[0].stock,4);assert.equal(next.plats[0].enabled,true);assert.deepEqual(next.plats[0].ingredients,seed.plats[0].ingredients);assert.deepEqual(next.plats[1].ingredients,custom.ingredients);assert.equal(next.plats[1].image,'🥚');assert.deepEqual(migrateCatalogue(next,seed),next);
});
test('Recettes élémentaires : salade de tomates et omelette sans garnitures imposées',()=>{
 assert.deepEqual(seed.plats.find(d=>d.id==='salade-de-tomates').ingredients,[{id:'tomate',quantity:3}]);assert.deepEqual(seed.plats.find(d=>d.id==='omelette-nature').ingredients.map(r=>r.id),['oeuf']);
});
