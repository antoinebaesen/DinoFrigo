/* Catalogue de recettes usuelles. Les niveaux qualitatifs indiquent la présence
 * d'une petite réserve, pas un poids en grammes. Toutes les recettes : 2 portions.
 * Aucun plat activé et aucun stock initial. Des emojis alimentaires adaptés, partagés si nécessaire. */
(function(root){
const ingredientRows = `
tomate|Tomates|🍅|N|6
carotte|Carottes|🥕|N|6
pomme-terre|Pommes de terre|🥔|N|8
oignon|Oignons|🧅|N|4
ail|Ail|🧄|N|2
aubergine|Aubergines|🍆|N|2
concombre|Concombres|🥒|N|2
courgette|Courgettes|🥒|N|3
poivron|Poivrons|🫑|N|3
brocoli|Brocoli|🥦|N|2
salade|Salade verte|🥬|E
champignon|Champignons|🍄|E
mais|Maïs|🌽|E
avocat|Avocats|🥑|N|2
potiron|Potiron|🎃|E
patate-douce|Patates douces|🍠|N|3
poireau|Poireaux|🥬|N|3
epinard|Épinards|🥬|E
chou-fleur|Chou-fleur|🥬|N|1
chou|Chou blanc|🥬|E
chou-rouge|Chou rouge|🥬|E
chou-bruxelles|Choux de Bruxelles|🥬|E
haricot-vert|Haricots verts|🌿|E
petit-pois|Petits pois|🫛|E
celeri|Céleri|🥬|E
navet|Navets|🥕|N|3
radis|Radis|🥕|E
betterave|Betteraves|🥕|N|2
asperge|Asperges|🥬|E
fenouil|Fenouil|🥬|N|2
endive|Endives|🥬|N|3
artichaut|Artichauts|🥬|N|2
echalote|Échalotes|🧅|N|4
gingembre|Gingembre|🫚|E
citron|Citrons|🍋|N|3
citron-vert|Citrons verts|🍋‍🟩|N|2
pomme|Pommes|🍎|N|4
poire|Poires|🍐|N|4
banane|Bananes|🍌|N|4
fraise|Fraises|🍓|E
framboise|Framboises|🍓|E
myrtille|Myrtilles|🫐|E
orange|Oranges|🍊|N|4
ananas|Ananas|🍍|N|1
mangue|Mangues|🥭|N|2
peche|Pêches|🍑|N|3
abricot|Abricots|🍑|E
raisin|Raisins|🍇|E
melon|Melon|🍈|N|1
pasteque|Pastèque|🍉|E
kiwi|Kiwis|🥝|N|4
cerise|Cerises|🍒|E
datte|Dattes|🍇|E
raisin-sec|Raisins secs|🍇|E
olive|Olives|🫒|E
noix|Noix|🌰|E
amande|Amandes|🌰|E
noisette|Noisettes|🌰|E
cacahuete|Cacahuètes|🥜|E
noix-cajou|Noix de cajou|🌰|E
noix-coco|Noix de coco râpée|🥥|E
sesame|Graines de sésame|🌱|E
chia|Graines de chia|🌱|E
oeuf|Œufs|🥚|N|12
lait|Lait|🥛|E
beurre|Beurre|🧈|E
creme|Crème fraîche|🥛|E
yaourt|Yaourt nature|🥛|E
fromage-blanc|Fromage blanc|🥛|E
emmental|Emmental râpé|🧀|E
parmesan|Parmesan|🧀|E
mozzarella|Mozzarella|🧀|E
feta|Feta|🧀|E
chevre|Fromage de chèvre|🧀|E
roquefort|Roquefort|🧀|E
reblochon|Reblochon|🧀|E
raclette|Fromage à raclette|🧀|E
mascarpone|Mascarpone|🥛|E
ricotta|Ricotta|🥛|E
camembert|Camembert|🧀|E
poulet|Poulet|🍗|E
boeuf|Bœuf|🥩|E
boeuf-hache|Bœuf haché|🥩|E
porc|Porc|🥩|E
veau|Veau|🥩|E
agneau|Agneau|🥩|E
dinde|Dinde|🍗|E
canard|Canard|🍗|E
jambon|Jambon|🥩|E
lardon|Lardons|🥓|E
saucisse|Saucisses|🌭|E
chorizo|Chorizo|🥓|E
saumon|Saumon|🐟|E
saumon-fume|Saumon fumé|🐟|E
thon|Thon en conserve|🥫|E
cabillaud|Cabillaud|🐟|E
sardine|Sardines|🐟|E
crevette|Crevettes|🦐|E
moule|Moules|🐚|E
calamar|Calamars|🦑|E
tofu|Tofu|🫘|E
lentille|Lentilles vertes|🫘|E
lentille-corail|Lentilles corail|🫘|E
pois-chiche|Pois chiches|🫘|E
haricot-rouge|Haricots rouges|🫘|E
haricot-blanc|Haricots blancs|🫘|E
pates|Pâtes|🍝|E
riz|Riz|🍚|E
riz-risotto|Riz à risotto|🍚|E
semoule|Semoule de couscous|🍚|E
quinoa|Quinoa|🍚|E
boulgour|Boulgour|🍚|E
nouille|Nouilles asiatiques|🍜|E
vermicelle-riz|Vermicelles de riz|🍜|E
gnocchi|Gnocchis|🥔|E
farine|Farine de blé|🌾|E
farine-sarrasin|Farine de sarrasin|🌾|E
flocon-avoine|Flocons d’avoine|🌾|E
pain|Pain|🍞|E
pain-mie|Pain de mie|🍞|E
baguette|Baguette|🥖|E
tortilla|Tortillas|🫓|E
pain-burger|Pains à burger|🍔|E
pate-brisee|Pâte brisée|🥧|E
pate-feuilletee|Pâte feuilletée|🥐|E
pate-pizza|Pâte à pizza|🍕|E
feuille-lasagne|Feuilles de lasagne|🍝|E
feuille-brick|Feuilles de brick|🫓|E
feuille-riz|Feuilles de riz|🫓|E
chapelure|Chapelure|🍞|E
tomate-concassee|Tomates concassées|🍅|E
concentre-tomate|Concentré de tomate|🍅|E
lait-coco|Lait de coco|🥥|E
bouillon|Bouillon de légumes|🍲|E
huile-olive|Huile d’olive|🫒|E
huile-neutre|Huile neutre|🫙|E
vinaigre|Vinaigre|🫙|E
vinaigre-balsamique|Vinaigre balsamique|🫙|E
moutarde|Moutarde|🫙|E
mayonnaise|Mayonnaise|🫙|E
sauce-soja|Sauce soja|🫙|E
pesto|Pesto|🌿|E
tahini|Tahini|🫙|E
sel|Sel|🧂|E
poivre|Poivre|🧂|E
paprika|Paprika|🌶️|E
curry|Curry|🍛|E
cumin|Cumin|🧂|E
curcuma|Curcuma|🧂|E
cannelle|Cannelle|🧂|E
muscade|Muscade|🧂|E
piment|Piment|🌶️|E
herbes-provence|Herbes de Provence|🌿|E
basilic|Basilic|🌿|E
persil|Persil|🌿|E
coriandre|Coriandre|🌿|E
menthe|Menthe|🌿|E
ciboulette|Ciboulette|🌿|E
aneth|Aneth|🌿|E
thym|Thym|🌿|E
romarin|Romarin|🌿|E
laurier|Laurier|🌿|E
sucre|Sucre|🍬|E
sucre-glace|Sucre glace|🍬|E
miel|Miel|🍯|E
sirop-erable|Sirop d’érable|🍯|E
chocolat|Chocolat noir|🍫|E
cacao|Cacao|🍫|E
vanille|Vanille|🧂|E
levure|Levure chimique|🍞|E
levure-boulanger|Levure de boulanger|🍞|E
maizena|Fécule de maïs|🌽|E
gelatine|Gélatine|🍮|E
cafe|Café|☕|E
biscuit|Biscuits secs|🍪|E
biscuit-cuillere|Biscuits à la cuillère|🍪|E
confiture|Confiture|🫙|E
vin-blanc|Vin blanc de cuisine|🥂|E
vin-rouge|Vin rouge de cuisine|🍷|E
cidre|Cidre de cuisine|🍺|E
cornichon|Cornichons|🥒|E
capre|Câpres|🫒|E
anchois|Anchois|🐟|E
eau-fleur-oranger|Eau de fleur d’oranger|🍊|E
`;
const ingredients=ingredientRows.trim().split('\n').map(row=>{const [id,nom,image,type,target]=row.split('|');return {id,nom,image,typeQuantite:type==='N'?'NOMBRE':'ENUM',stock:0,target:type==='N'?Number(target):4};});
// Chaque ligne : nom | ingrédients (id:quantité, valeur 1 par défaut).
const groups={
'Salades et entrées':`
Salade de tomates|tomate:3,oignon,basilic,huile-olive,vinaigre,sel
Salade grecque|tomate:2,concombre,feta,olive,oignon,huile-olive
Salade niçoise|salade,tomate:2,oeuf:2,thon,haricot-vert,olive,huile-olive
Salade César|salade,poulet,pain,parmesan,oeuf,citron,huile-olive,anchois
Salade de lentilles|lentille,carotte,oignon,moutarde,vinaigre,huile-olive
Salade de quinoa|quinoa,tomate:2,concombre,pois-chiche,citron,huile-olive
Salade de pâtes|pates,tomate:2,mais,thon,huile-olive
Salade de riz|riz,thon,mais,tomate:2,oeuf:2,huile-olive
Salade de pommes de terre|pomme-terre:4,oignon,moutarde,vinaigre,huile-olive
Salade de betteraves|betterave:2,chevre,noix,vinaigre-balsamique,huile-olive
Salade d’endives aux noix|endive:3,roquefort,noix,pomme,huile-olive,vinaigre
Salade de chou|chou,carotte:2,mayonnaise,vinaigre
Taboulé au boulgour|boulgour,tomate:2,concombre,persil,menthe,citron,huile-olive
Carottes râpées|carotte:3,citron,huile-olive,sel
Concombres au yaourt|concombre,yaourt,menthe,citron,sel
Avocats aux crevettes|avocat:2,crevette,mayonnaise,citron
Œufs mimosa|oeuf:4,mayonnaise,ciboulette
Houmous|pois-chiche,tahini,citron,ail,huile-olive,cumin
Caviar d’aubergine|aubergine:2,ail,citron,huile-olive
Tzatziki|concombre,yaourt,ail,aneth,huile-olive
Guacamole|avocat:2,tomate,oignon,citron-vert,coriandre,sel
Bruschetta|baguette,tomate:2,ail,basilic,huile-olive
Artichauts vinaigrette|artichaut:2,moutarde,vinaigre,huile-olive
Radis au beurre|radis,beurre,pain,sel
Melon au jambon|melon,jambon
Salade de fenouil à l’orange|fenouil,orange:2,olive,huile-olive
Salade de chou rouge|chou-rouge,pomme,noix,vinaigre,huile-olive
Salade de pois chiches|pois-chiche,tomate:2,concombre,citron,persil,huile-olive
`,
'Soupes et veloutés':`
Soupe de légumes|carotte:2,pomme-terre:2,poireau,oignon,bouillon
Velouté de potiron|potiron,oignon,creme,bouillon,muscade
Velouté de courgettes|courgette:3,oignon,creme,bouillon
Velouté de champignons|champignon,echalote,creme,bouillon,beurre
Soupe de tomates|tomate:5,oignon,ail,basilic,bouillon,huile-olive
Soupe de poireaux|poireau:3,pomme-terre:2,bouillon,creme
Soupe à l’oignon|oignon:4,beurre,bouillon,pain,emmental
Velouté de carottes au cumin|carotte:5,oignon,cumin,bouillon,creme
Soupe de lentilles corail|lentille-corail,carotte:2,oignon,curry,lait-coco,bouillon
Minestrone|haricot-blanc,pates,carotte:2,celeri,courgette,tomate-concassee,bouillon
Gaspacho|tomate:4,concombre,poivron,ail,huile-olive,vinaigre
Velouté de petits pois|petit-pois,menthe,creme,bouillon
Velouté de brocoli|brocoli,pomme-terre,oignon,bouillon,creme
Velouté de chou-fleur|chou-fleur,creme,bouillon,muscade
Soupe de patates douces|patate-douce:2,carotte:2,gingembre,lait-coco,bouillon
Soupe au pistou|haricot-blanc,haricot-vert,courgette,carotte,pates,basilic,ail,huile-olive
Bouillon de nouilles au poulet|nouille,poulet,carotte,gingembre,sauce-soja,bouillon
Soupe de pois chiches|pois-chiche,tomate-concassee,celeri,oignon,cumin,bouillon
`,
'Pâtes, gnocchis et lasagnes':`
Spaghetti à la tomate|pates,tomate-concassee,ail,basilic,huile-olive,parmesan
Spaghetti bolognaise|pates,boeuf-hache,tomate-concassee,carotte,oignon,huile-olive
Pâtes carbonara à la française|pates,lardon,oeuf:2,creme,parmesan,poivre
Pâtes au pesto|pates,pesto,parmesan
Pâtes au saumon|pates,saumon,creme,citron,aneth
Pâtes au thon|pates,thon,tomate-concassee,oignon,huile-olive
Pâtes aux champignons|pates,champignon,creme,ail,persil,beurre
Pâtes aux épinards|pates,epinard,ricotta,ail,huile-olive
Pâtes aux courgettes|pates,courgette:2,ail,parmesan,huile-olive
Pâtes arrabbiata|pates,tomate-concassee,ail,piment,huile-olive
Pâtes aux quatre fromages|pates,emmental,parmesan,roquefort,chevre,creme
Pâtes aux crevettes|pates,crevette,ail,citron,huile-olive,persil
Pâtes à la puttanesca|pates,tomate-concassee,olive,capre,anchois,ail,huile-olive
Lasagnes bolognaises|feuille-lasagne,boeuf-hache,tomate-concassee,oignon,lait,farine,beurre,emmental
Lasagnes aux légumes|feuille-lasagne,courgette,aubergine,poivron,tomate-concassee,lait,farine,beurre,emmental
Lasagnes épinards ricotta|feuille-lasagne,epinard,ricotta,lait,farine,beurre,parmesan
Gnocchis au beurre et aux herbes|gnocchi,beurre,herbes-provence,parmesan
Gnocchis à la tomate|gnocchi,tomate-concassee,mozzarella,basilic,huile-olive
Gnocchis aux champignons|gnocchi,champignon,creme,ail,parmesan
Gratin de pâtes au jambon|pates,jambon,creme,emmental
Gratin de pâtes au brocoli|pates,brocoli,creme,emmental
Pâtes aux aubergines|pates,aubergine,tomate-concassee,ail,basilic,huile-olive
`,
'Riz et céréales':`
Risotto aux champignons|riz-risotto,champignon,oignon,bouillon,parmesan,beurre
Risotto aux asperges|riz-risotto,asperge,echalote,bouillon,parmesan,beurre
Risotto aux petits pois|riz-risotto,petit-pois,oignon,bouillon,parmesan,beurre
Risotto au potiron|riz-risotto,potiron,oignon,bouillon,parmesan,beurre
Riz cantonais|riz,oeuf:2,jambon,petit-pois,sauce-soja,huile-neutre
Riz sauté aux légumes|riz,carotte,courgette,petit-pois,sauce-soja,huile-neutre
Riz au poulet|riz,poulet,oignon,poivron,bouillon,huile-olive
Riz à la tomate|riz,tomate-concassee,oignon,ail,bouillon,huile-olive
Paëlla simplifiée|riz,poulet,crevette,moule,poivron,petit-pois,paprika,bouillon,huile-olive
Pilaf de boulgour|boulgour,tomate-concassee,oignon,poivron,bouillon,huile-olive
Quinoa aux légumes rôtis|quinoa,courgette,carotte:2,poivron,huile-olive,herbes-provence
Couscous végétarien|semoule,pois-chiche,carotte:2,courgette,navet:2,tomate-concassee,cumin,bouillon
Couscous au poulet|semoule,poulet,pois-chiche,carotte:2,courgette,cumin,bouillon
Bowl au saumon|riz,saumon,avocat,concombre,sauce-soja,sesame
Bowl au tofu|quinoa,tofu,carotte,brocoli,sauce-soja,sesame,huile-neutre
Riz aux haricots rouges|riz,haricot-rouge,tomate-concassee,oignon,cumin,huile-olive
`,
'Œufs et repas rapides':`
Omelette nature|oeuf:4,beurre,sel,poivre
Omelette au fromage|oeuf:4,emmental,beurre,sel
Omelette aux champignons|oeuf:4,champignon,beurre,persil
Omelette aux pommes de terre|oeuf:4,pomme-terre:3,oignon,huile-olive
Omelette aux épinards|oeuf:4,epinard,feta,huile-olive
Œufs brouillés|oeuf:4,beurre,creme,sel
Œufs cocotte au jambon|oeuf:2,jambon,creme,emmental
Œufs cocotte aux champignons|oeuf:2,champignon,creme,beurre
Chakchouka|oeuf:4,poivron:2,tomate-concassee,oignon,cumin,huile-olive
Tortilla espagnole|oeuf:4,pomme-terre:4,oignon,huile-olive,sel
Frittata aux légumes|oeuf:4,courgette,poivron,petit-pois,parmesan,huile-olive
Croque-monsieur|pain-mie,jambon,emmental,beurre
Croque-madame|pain-mie,jambon,emmental,beurre,oeuf:2
Tartines avocat œuf|pain,avocat,oeuf:2,citron,sel
Tartines chèvre miel|pain,chevre,miel,noix
Tartines saumon fromage blanc|pain,saumon-fume,fromage-blanc,citron,aneth
Sandwich jambon beurre|baguette,jambon,beurre,cornichon
Sandwich au thon|pain-mie,thon,mayonnaise,salade,tomate
Wrap au poulet|tortilla,poulet,salade,tomate,yaourt
Wrap végétarien|tortilla,pois-chiche,avocat,carotte,yaourt,citron
Burger maison|pain-burger,boeuf-hache,salade,tomate,emmental,oignon
Burger végétarien aux haricots|pain-burger,haricot-rouge,oeuf,chapelure,salade,tomate,cumin
Quesadillas au fromage|tortilla,emmental,poivron,oignon
Hot-dog|baguette,saucisse,moutarde,oignon
`,
'Tartes, pizzas et feuilletés':`
Quiche lorraine|pate-brisee,lardon,oeuf:3,creme,lait,muscade
Quiche aux poireaux|pate-brisee,poireau:3,oeuf:3,creme,emmental
Quiche épinards chèvre|pate-brisee,epinard,chevre,oeuf:3,creme
Quiche saumon brocoli|pate-brisee,saumon,brocoli,oeuf:3,creme
Tarte à la tomate|pate-feuilletee,tomate:4,moutarde,emmental,herbes-provence
Tarte aux courgettes|pate-brisee,courgette:3,chevre,oeuf:2,creme
Tarte aux oignons|pate-brisee,oignon:4,oeuf:2,creme,beurre
Tarte champignons ricotta|pate-brisee,champignon,ricotta,oeuf:2,ail
Pizza Margherita|pate-pizza,tomate-concassee,mozzarella,basilic
Pizza jambon champignons|pate-pizza,tomate-concassee,jambon,champignon,mozzarella
Pizza quatre fromages|pate-pizza,mozzarella,emmental,roquefort,chevre,creme
Pizza végétarienne|pate-pizza,tomate-concassee,courgette,poivron,champignon,mozzarella
Pizza au thon|pate-pizza,tomate-concassee,thon,oignon,olive,mozzarella
Pizza au chorizo|pate-pizza,tomate-concassee,chorizo,poivron,mozzarella
Feuilletés chèvre miel|pate-feuilletee,chevre,miel,oeuf
Feuilletés aux saucisses|pate-feuilletee,saucisse,moutarde,oeuf
Feuilletés épinards feta|pate-feuilletee,epinard,feta,oeuf
Bricks au thon|feuille-brick,thon,oeuf:2,pomme-terre:2,persil,huile-neutre
Bricks au fromage|feuille-brick,feta,oeuf,persil,huile-neutre
Galette complète|farine-sarrasin,oeuf:3,jambon,emmental,beurre,sel
`,
'Légumes et gratins':`
Ratatouille|courgette:2,aubergine,poivron:2,tomate:3,oignon,ail,huile-olive,herbes-provence
Gratin dauphinois|pomme-terre:6,creme,lait,ail,muscade,beurre
Gratin de courgettes|courgette:3,creme,oeuf:2,emmental
Gratin de chou-fleur|chou-fleur,lait,farine,beurre,emmental,muscade
Gratin de brocoli|brocoli,lait,farine,beurre,emmental
Gratin de poireaux|poireau:3,creme,emmental,beurre
Gratin de patates douces|patate-douce:3,creme,emmental,muscade
Purée de pommes de terre|pomme-terre:5,lait,beurre,sel
Purée de carottes|carotte:5,pomme-terre:2,beurre,creme
Purée de patates douces|patate-douce:3,beurre,lait
Pommes de terre rôties|pomme-terre:5,huile-olive,romarin,ail,sel
Carottes glacées|carotte:5,beurre,sucre,sel
Fondue de poireaux|poireau:3,beurre,creme,citron
Haricots verts à l’ail|haricot-vert,ail,huile-olive,persil
Poêlée de champignons|champignon,ail,persil,beurre
Épinards à la crème|epinard,creme,beurre,muscade
Courgettes farcies|courgette:2,boeuf-hache,oignon,tomate-concassee,emmental
Tomates farcies|tomate:4,porc,oignon,ail,pain,persil
Poivrons farcis au riz|poivron:2,riz,tomate-concassee,oignon,feta,huile-olive
Aubergines gratinées|aubergine:2,tomate-concassee,mozzarella,parmesan,huile-olive
Endives au jambon|endive:3,jambon,lait,farine,beurre,emmental
Choux de Bruxelles rôtis|chou-bruxelles,huile-olive,ail,vinaigre-balsamique
Asperges au citron|asperge,citron,beurre,sel
Fenouil braisé|fenouil:2,huile-olive,bouillon,citron
Tian de légumes|courgette,aubergine,tomate:3,oignon,huile-olive,thym
Galettes de légumes|courgette,carotte:2,oeuf:2,farine,huile-neutre
`,
'Viandes et plats familiaux':`
Poulet rôti aux pommes de terre|poulet,pomme-terre:5,ail,huile-olive,thym
Poulet à la crème|poulet,creme,champignon,echalote,beurre
Poulet au curry|poulet,oignon,curry,lait-coco,riz,huile-neutre
Poulet basquaise|poulet,poivron:2,tomate-concassee,oignon,ail,huile-olive
Poulet au citron|poulet,citron:2,ail,huile-olive,thym
Poulet à la moutarde|poulet,moutarde,creme,echalote,huile-olive
Poulet aux olives|poulet,olive,citron,oignon,cumin,huile-olive
Poulet au miel|poulet,miel,sauce-soja,ail,riz,huile-neutre
Dinde à la crème|dinde,creme,champignon,echalote,beurre
Escalopes de dinde panées|dinde,oeuf,farine,chapelure,huile-neutre,citron
Escalopes de veau au citron|veau,citron,beurre,farine
Blanquette de veau simplifiée|veau,carotte:3,champignon,oignon,creme,bouillon,farine,beurre
Bœuf bourguignon|boeuf,vin-rouge,carotte:3,oignon,champignon,lardon,farine,thym,laurier
Hachis parmentier|boeuf-hache,pomme-terre:5,oignon,lait,beurre,emmental
Boulettes de bœuf à la tomate|boeuf-hache,oeuf,chapelure,tomate-concassee,oignon,ail,huile-olive
Chili con carne|boeuf-hache,haricot-rouge,tomate-concassee,oignon,poivron,cumin,piment
Steak aux échalotes|boeuf,echalote,beurre,poivre
Sauté de porc à la moutarde|porc,moutarde,creme,oignon,huile-olive
Porc au caramel|porc,sucre,sauce-soja,gingembre,riz,huile-neutre
Filet de porc aux pommes|porc,pomme:2,cidre,creme,beurre
Saucisses aux lentilles|saucisse,lentille,carotte:2,oignon,laurier
Tartiflette|pomme-terre:5,lardon,oignon,reblochon,creme
Raclette|raclette,pomme-terre:5,jambon,cornichon
Magret de canard au miel|canard,miel,vinaigre-balsamique,sel
Parmentier de canard|canard,pomme-terre:5,lait,beurre,echalote
Navarin d’agneau|agneau,carotte:2,navet:2,pomme-terre:3,petit-pois,oignon,bouillon
Agneau au romarin|agneau,romarin,ail,huile-olive,pomme-terre:4
Moussaka simplifiée|aubergine:2,boeuf-hache,tomate-concassee,oignon,lait,farine,beurre,emmental
`,
'Poissons et fruits de mer':`
Saumon au four|saumon,citron,huile-olive,aneth
Saumon à la crème|saumon,creme,citron,echalote,beurre
Saumon teriyaki simplifié|saumon,sauce-soja,miel,gingembre,riz,sesame
Papillote de cabillaud|cabillaud,courgette,tomate,citron,huile-olive
Cabillaud à la tomate|cabillaud,tomate-concassee,oignon,ail,huile-olive
Poisson pané maison|cabillaud,oeuf,farine,chapelure,huile-neutre,citron
Brandade simplifiée au cabillaud|cabillaud,pomme-terre:4,lait,ail,huile-olive
Crevettes à l’ail|crevette,ail,persil,citron,huile-olive
Curry de crevettes|crevette,lait-coco,curry,oignon,riz,huile-neutre
Moules marinières|moule,vin-blanc,echalote,persil,beurre
Moules à la crème|moule,creme,vin-blanc,echalote,beurre
Calamars à la tomate|calamar,tomate-concassee,oignon,ail,huile-olive
Sardines sur tartines|sardine,pain,citron,persil
Rillettes de thon|thon,fromage-blanc,citron,ciboulette,pain
Galettes de thon|thon,oeuf,chapelure,oignon,persil,huile-neutre
`,
'Végétarien et cuisines du monde':`
Dahl de lentilles corail|lentille-corail,lait-coco,tomate-concassee,oignon,curry,cumin,riz
Chili sin carne|haricot-rouge,mais,tomate-concassee,oignon,poivron,cumin,piment
Curry de pois chiches|pois-chiche,lait-coco,tomate-concassee,oignon,curry,epinard
Curry de légumes|carotte:2,courgette,brocoli,lait-coco,curry,riz
Tofu sauté aux légumes|tofu,brocoli,carotte,sauce-soja,gingembre,huile-neutre
Tofu croustillant|tofu,maizena,sauce-soja,sesame,huile-neutre
Falafels au four|pois-chiche,oignon,ail,persil,cumin,farine,huile-olive
Lentilles à la tomate|lentille,tomate-concassee,carotte,oignon,bouillon
Haricots blancs à la tomate|haricot-blanc,tomate-concassee,ail,oignon,huile-olive
Nouilles sautées au poulet|nouille,poulet,carotte,poivron,sauce-soja,huile-neutre
Nouilles sautées au tofu|nouille,tofu,carotte,chou,sauce-soja,huile-neutre
Nouilles aux crevettes|nouille,crevette,carotte,sauce-soja,gingembre,huile-neutre
Pad thaï simplifié|nouille,crevette,oeuf:2,cacahuete,citron-vert,sauce-soja,sucre
Rouleaux de printemps|feuille-riz,vermicelle-riz,crevette,salade,carotte,menthe
Nems au porc simplifiés|feuille-riz,porc,vermicelle-riz,carotte,oignon,oeuf,huile-neutre
Samoussas aux légumes|feuille-brick,pomme-terre:2,petit-pois,carotte,curry,huile-neutre
Tajine de légumes|carotte:2,courgette,patate-douce,pois-chiche,abricot,cumin,cannelle,bouillon
Tajine de poulet aux abricots|poulet,abricot,amande,oignon,cannelle,cumin,bouillon
Poulet aux noix de cajou|poulet,noix-cajou,poivron,oignon,sauce-soja,huile-neutre
Poulet à l’ananas|poulet,ananas,poivron,sauce-soja,miel,riz,huile-neutre
Keftas|boeuf-hache,oignon,persil,cumin,paprika,huile-olive
Fajitas au poulet|tortilla,poulet,poivron:2,oignon,paprika,huile-olive
Tacos aux haricots|tortilla,haricot-rouge,avocat,tomate,cumin,citron-vert
Burritos végétariens|tortilla,riz,haricot-rouge,mais,tomate,emmental
Poké bowl au tofu|riz,tofu,avocat,concombre,mangue,sauce-soja,sesame
`,
'Petits déjeuners et goûters':`
Porridge nature|flocon-avoine,lait,miel
Porridge banane chocolat|flocon-avoine,lait,banane,chocolat
Porridge pomme cannelle|flocon-avoine,lait,pomme,cannelle,miel
Overnight oats aux fruits rouges|flocon-avoine,yaourt,lait,fraise,chia
Granola maison|flocon-avoine,amande,noisette,miel,huile-neutre
Pancakes|farine,oeuf:2,lait,levure,sucre,beurre
Pancakes à la banane|banane:2,oeuf:2,farine,lait,levure
Crêpes|farine,oeuf:3,lait,beurre,sucre
Gaufres|farine,oeuf:2,lait,beurre,sucre,levure
Pain perdu|pain,oeuf:2,lait,sucre,beurre
Yaourt fruits et granola|yaourt,flocon-avoine,miel,fraise,amande
Smoothie banane fraise|banane,fraise,lait
Smoothie mangue coco|mangue,lait-coco,banane
Smoothie kiwi pomme|kiwi:2,pomme,yaourt
Compote de pommes|pomme:4,sucre,cannelle
Compote pomme poire|pomme:2,poire:2,vanille
Tartines beurre confiture|pain,beurre,confiture
Pudding de chia|chia,lait,miel,myrtille
Fromage blanc miel noix|fromage-blanc,miel,noix
Barres d’avoine aux dattes|flocon-avoine,datte,cacahuete,miel
`,
'Desserts':`
Gâteau au yaourt|yaourt,farine,oeuf:3,sucre,huile-neutre,levure
Gâteau au chocolat|chocolat,beurre,oeuf:3,farine,sucre
Fondant au chocolat|chocolat,beurre,oeuf:3,farine,sucre
Brownies aux noix|chocolat,beurre,oeuf:2,farine,sucre,noix
Cookies au chocolat|farine,beurre,oeuf,sucre,chocolat,levure
Cookies aux noisettes|farine,beurre,oeuf,sucre,noisette,chocolat
Banana bread|banane:3,farine,oeuf:2,beurre,sucre,levure
Cake au citron|farine,oeuf:3,beurre,sucre,citron:2,levure
Cake aux fruits secs|farine,oeuf:3,beurre,sucre,raisin-sec,abricot,levure
Muffins aux myrtilles|farine,oeuf:2,lait,beurre,sucre,myrtille,levure
Muffins au chocolat|farine,oeuf:2,lait,beurre,sucre,chocolat,levure
Crumble aux pommes|pomme:4,farine,beurre,sucre,cannelle
Crumble poire chocolat|poire:3,chocolat,farine,beurre,sucre
Crumble aux fruits rouges|fraise,framboise,myrtille,farine,beurre,sucre
Tarte aux pommes|pate-brisee,pomme:4,sucre,beurre
Tarte aux poires amandine|pate-brisee,poire:3,amande,oeuf:2,beurre,sucre
Tarte au citron|pate-brisee,citron:3,oeuf:3,sucre,beurre
Tarte aux fraises|pate-brisee,fraise,lait,oeuf:2,sucre,maizena,vanille
Clafoutis aux cerises|cerise,farine,oeuf:3,lait,sucre,beurre
Clafoutis aux pêches|peche:3,farine,oeuf:3,lait,sucre
Mousse au chocolat|chocolat,oeuf:3,sucre
Riz au lait|riz,lait,sucre,vanille
Semoule au lait|semoule,lait,sucre,vanille
Crème à la vanille|lait,oeuf:2,sucre,maizena,vanille
Crème au chocolat|lait,chocolat,sucre,maizena
Crème brûlée|creme,oeuf:3,sucre,vanille
Panna cotta|creme,sucre,gelatine,vanille
Tiramisu|mascarpone,oeuf:3,sucre,cafe,biscuit-cuillere,cacao
Cheesecake sans cuisson|biscuit,beurre,fromage-blanc,creme,sucre,gelatine,citron
Madeleines|farine,oeuf:2,beurre,sucre,levure,citron
Financiers|amande,farine,oeuf:3,beurre,sucre-glace
Sablés|farine,beurre,sucre,oeuf,vanille
Rochers coco|noix-coco,oeuf:2,sucre
Salade de fruits|pomme,banane,orange,kiwi:2,raisin
Pommes au four|pomme:2,miel,beurre,cannelle
Poires au chocolat|poire:2,chocolat,creme
Ananas rôti|ananas,beurre,sucre,vanille
Pêches rôties au miel|peche:2,miel,beurre,amande
Flan pâtissier|pate-brisee,lait,oeuf:3,sucre,maizena,vanille
Îles flottantes|lait,oeuf:3,sucre,vanille
Gâteau de semoule|semoule,lait,oeuf:2,sucre,raisin-sec,vanille
Oranges à la cannelle|orange:3,cannelle,eau-fleur-oranger,sucre
`,
'Pains, sauces et accompagnements':`
Pain maison|farine,levure-boulanger,sel
Focaccia|farine,levure-boulanger,huile-olive,romarin,sel
Pain aux noix|farine,levure-boulanger,noix,sel
Sauce béchamel|lait,beurre,farine,muscade,sel
Sauce tomate maison|tomate:5,oignon,ail,huile-olive,basilic,sel
Pesto maison aux amandes|basilic,amande,parmesan,ail,huile-olive
Sauce au yaourt|yaourt,citron,ciboulette,sel
Mayonnaise maison|oeuf,huile-neutre,moutarde,vinaigre,sel
Vinaigrette|moutarde,vinaigre,huile-olive,sel,poivre
Tapenade|olive,anchois,capre,ail,huile-olive
Sauce aux champignons|champignon,creme,echalote,beurre
Sauce au poivre|creme,poivre,bouillon,beurre
Sauce au roquefort|roquefort,creme
Camembert rôti|camembert,miel,thym,pain
Purée de pois chiches|pois-chiche,huile-olive,citron,ail
Salade pastèque feta|pasteque,feta,menthe,huile-olive,citron
Sauce tomate au concentré|concentre-tomate,oignon,ail,huile-olive,bouillon,herbes-provence
Riz au curcuma|riz,curcuma,oignon,bouillon,huile-olive
Pancakes au sirop d’érable|farine,oeuf:2,lait,levure,beurre,sirop-erable
`};
const legacyDishes={"salade-de-tomates":{"image":"🥗","ingredients":[{"id":"tomate","quantity":3},{"id":"oignon","quantity":1},{"id":"basilic","quantity":1},{"id":"huile-olive","quantity":1},{"id":"vinaigre","quantity":1},{"id":"sel","quantity":1}]},"salade-grecque":{"image":"🍳","ingredients":[{"id":"tomate","quantity":2},{"id":"concombre","quantity":1},{"id":"feta","quantity":1},{"id":"olive","quantity":1},{"id":"oignon","quantity":1},{"id":"huile-olive","quantity":1}]},"salade-nicoise":{"image":"🥘","ingredients":[{"id":"salade","quantity":1},{"id":"tomate","quantity":2},{"id":"oeuf","quantity":2},{"id":"thon","quantity":1},{"id":"haricot-vert","quantity":1},{"id":"olive","quantity":1},{"id":"huile-olive","quantity":1}]},"salade-cesar":{"image":"🍲","ingredients":[{"id":"salade","quantity":1},{"id":"poulet","quantity":1},{"id":"pain","quantity":1},{"id":"parmesan","quantity":1},{"id":"oeuf","quantity":1},{"id":"citron","quantity":1},{"id":"huile-olive","quantity":1},{"id":"anchois","quantity":1}]},"salade-de-lentilles":{"image":"🥙","ingredients":[{"id":"lentille","quantity":1},{"id":"carotte","quantity":1},{"id":"oignon","quantity":1},{"id":"moutarde","quantity":1},{"id":"vinaigre","quantity":1},{"id":"huile-olive","quantity":1}]},"salade-de-quinoa":{"image":"🌮","ingredients":[{"id":"quinoa","quantity":1},{"id":"tomate","quantity":2},{"id":"concombre","quantity":1},{"id":"pois-chiche","quantity":1},{"id":"citron","quantity":1},{"id":"huile-olive","quantity":1}]},"salade-de-pates":{"image":"🌯","ingredients":[{"id":"pates","quantity":1},{"id":"tomate","quantity":2},{"id":"mais","quantity":1},{"id":"thon","quantity":1},{"id":"huile-olive","quantity":1}]},"salade-de-riz":{"image":"🫔","ingredients":[{"id":"riz","quantity":1},{"id":"thon","quantity":1},{"id":"mais","quantity":1},{"id":"tomate","quantity":2},{"id":"oeuf","quantity":2},{"id":"huile-olive","quantity":1}]},"salade-de-pommes-de-terre":{"image":"🥪","ingredients":[{"id":"pomme-terre","quantity":4},{"id":"oignon","quantity":1},{"id":"moutarde","quantity":1},{"id":"vinaigre","quantity":1},{"id":"huile-olive","quantity":1}]},"salade-de-betteraves":{"image":"🥟","ingredients":[{"id":"betterave","quantity":2},{"id":"chevre","quantity":1},{"id":"noix","quantity":1},{"id":"vinaigre-balsamique","quantity":1},{"id":"huile-olive","quantity":1}]},"salade-d-endives-aux-noix":{"image":"🍤","ingredients":[{"id":"endive","quantity":3},{"id":"roquefort","quantity":1},{"id":"noix","quantity":1},{"id":"pomme","quantity":1},{"id":"huile-olive","quantity":1},{"id":"vinaigre","quantity":1}]},"salade-de-chou":{"image":"🍣","ingredients":[{"id":"chou","quantity":1},{"id":"carotte","quantity":2},{"id":"mayonnaise","quantity":1},{"id":"vinaigre","quantity":1}]},"taboule-au-boulgour":{"image":"🍥","ingredients":[{"id":"boulgour","quantity":1},{"id":"tomate","quantity":2},{"id":"concombre","quantity":1},{"id":"persil","quantity":1},{"id":"menthe","quantity":1},{"id":"citron","quantity":1},{"id":"huile-olive","quantity":1}]},"carottes-rapees":{"image":"🍢","ingredients":[{"id":"carotte","quantity":3},{"id":"citron","quantity":1},{"id":"huile-olive","quantity":1},{"id":"sel","quantity":1}]},"concombres-au-yaourt":{"image":"🍡","ingredients":[{"id":"concombre","quantity":1},{"id":"yaourt","quantity":1},{"id":"menthe","quantity":1},{"id":"citron","quantity":1},{"id":"sel","quantity":1}]},"avocats-aux-crevettes":{"image":"🥮","ingredients":[{"id":"avocat","quantity":2},{"id":"crevette","quantity":1},{"id":"mayonnaise","quantity":1},{"id":"citron","quantity":1}]},"ufs-mimosa":{"image":"🍧","ingredients":[{"id":"oeuf","quantity":4},{"id":"mayonnaise","quantity":1},{"id":"ciboulette","quantity":1}]},"houmous":{"image":"🍨","ingredients":[{"id":"pois-chiche","quantity":1},{"id":"tahini","quantity":1},{"id":"citron","quantity":1},{"id":"ail","quantity":1},{"id":"huile-olive","quantity":1},{"id":"cumin","quantity":1}]},"caviar-d-aubergine":{"image":"🍦","ingredients":[{"id":"aubergine","quantity":2},{"id":"ail","quantity":1},{"id":"citron","quantity":1},{"id":"huile-olive","quantity":1}]},"tzatziki":{"image":"🍰","ingredients":[{"id":"concombre","quantity":1},{"id":"yaourt","quantity":1},{"id":"ail","quantity":1},{"id":"aneth","quantity":1},{"id":"huile-olive","quantity":1}]},"guacamole":{"image":"🎂","ingredients":[{"id":"avocat","quantity":2},{"id":"tomate","quantity":1},{"id":"oignon","quantity":1},{"id":"citron-vert","quantity":1},{"id":"coriandre","quantity":1},{"id":"sel","quantity":1}]},"bruschetta":{"image":"🍮","ingredients":[{"id":"baguette","quantity":1},{"id":"tomate","quantity":2},{"id":"ail","quantity":1},{"id":"basilic","quantity":1},{"id":"huile-olive","quantity":1}]},"artichauts-vinaigrette":{"image":"🍩","ingredients":[{"id":"artichaut","quantity":2},{"id":"moutarde","quantity":1},{"id":"vinaigre","quantity":1},{"id":"huile-olive","quantity":1}]},"radis-au-beurre":{"image":"🧇","ingredients":[{"id":"radis","quantity":1},{"id":"beurre","quantity":1},{"id":"pain","quantity":1},{"id":"sel","quantity":1}]},"melon-au-jambon":{"image":"🥞","ingredients":[{"id":"melon","quantity":1},{"id":"jambon","quantity":1}]},"salade-de-fenouil-a-l-orange":{"image":"🥨","ingredients":[{"id":"fenouil","quantity":1},{"id":"orange","quantity":2},{"id":"olive","quantity":1},{"id":"huile-olive","quantity":1}]},"salade-de-chou-rouge":{"image":"🥯","ingredients":[{"id":"chou-rouge","quantity":1},{"id":"pomme","quantity":1},{"id":"noix","quantity":1},{"id":"vinaigre","quantity":1},{"id":"huile-olive","quantity":1}]},"salade-de-pois-chiches":{"image":"🫕","ingredients":[{"id":"pois-chiche","quantity":1},{"id":"tomate","quantity":2},{"id":"concombre","quantity":1},{"id":"citron","quantity":1},{"id":"persil","quantity":1},{"id":"huile-olive","quantity":1}]},"soupe-de-legumes":{"image":"🥣","ingredients":[{"id":"carotte","quantity":2},{"id":"pomme-terre","quantity":2},{"id":"poireau","quantity":1},{"id":"oignon","quantity":1},{"id":"bouillon","quantity":1}]},"veloute-de-potiron":{"image":"🧆","ingredients":[{"id":"potiron","quantity":1},{"id":"oignon","quantity":1},{"id":"creme","quantity":1},{"id":"bouillon","quantity":1},{"id":"muscade","quantity":1}]},"veloute-de-courgettes":{"image":"🥠","ingredients":[{"id":"courgette","quantity":3},{"id":"oignon","quantity":1},{"id":"creme","quantity":1},{"id":"bouillon","quantity":1}]},"veloute-de-champignons":{"image":"🫗","ingredients":[{"id":"champignon","quantity":1},{"id":"echalote","quantity":1},{"id":"creme","quantity":1},{"id":"bouillon","quantity":1},{"id":"beurre","quantity":1}]},"soupe-de-tomates":{"image":"🧋","ingredients":[{"id":"tomate","quantity":5},{"id":"oignon","quantity":1},{"id":"ail","quantity":1},{"id":"basilic","quantity":1},{"id":"bouillon","quantity":1},{"id":"huile-olive","quantity":1}]},"soupe-de-poireaux":{"image":"🍵","ingredients":[{"id":"poireau","quantity":3},{"id":"pomme-terre","quantity":2},{"id":"bouillon","quantity":1},{"id":"creme","quantity":1}]},"soupe-a-l-oignon":{"image":"🫖","ingredients":[{"id":"oignon","quantity":4},{"id":"beurre","quantity":1},{"id":"bouillon","quantity":1},{"id":"pain","quantity":1},{"id":"emmental","quantity":1}]},"veloute-de-carottes-au-cumin":{"image":"🧃","ingredients":[{"id":"carotte","quantity":5},{"id":"oignon","quantity":1},{"id":"cumin","quantity":1},{"id":"bouillon","quantity":1},{"id":"creme","quantity":1}]},"soupe-de-lentilles-corail":{"image":"🍹","ingredients":[{"id":"lentille-corail","quantity":1},{"id":"carotte","quantity":2},{"id":"oignon","quantity":1},{"id":"curry","quantity":1},{"id":"lait-coco","quantity":1},{"id":"bouillon","quantity":1}]},"minestrone":{"image":"🍸","ingredients":[{"id":"haricot-blanc","quantity":1},{"id":"pates","quantity":1},{"id":"carotte","quantity":2},{"id":"celeri","quantity":1},{"id":"courgette","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"bouillon","quantity":1}]},"gaspacho":{"image":"🧉","ingredients":[{"id":"tomate","quantity":4},{"id":"concombre","quantity":1},{"id":"poivron","quantity":1},{"id":"ail","quantity":1},{"id":"huile-olive","quantity":1},{"id":"vinaigre","quantity":1}]},"veloute-de-petits-pois":{"image":"🍼","ingredients":[{"id":"petit-pois","quantity":1},{"id":"menthe","quantity":1},{"id":"creme","quantity":1},{"id":"bouillon","quantity":1}]},"veloute-de-brocoli":{"image":"🥡","ingredients":[{"id":"brocoli","quantity":1},{"id":"pomme-terre","quantity":1},{"id":"oignon","quantity":1},{"id":"bouillon","quantity":1},{"id":"creme","quantity":1}]},"veloute-de-chou-fleur":{"image":"🍽️","ingredients":[{"id":"chou-fleur","quantity":1},{"id":"creme","quantity":1},{"id":"bouillon","quantity":1},{"id":"muscade","quantity":1}]},"soupe-de-patates-douces":{"image":"🍴","ingredients":[{"id":"patate-douce","quantity":2},{"id":"carotte","quantity":2},{"id":"gingembre","quantity":1},{"id":"lait-coco","quantity":1},{"id":"bouillon","quantity":1}]},"soupe-au-pistou":{"image":"🔪","ingredients":[{"id":"haricot-blanc","quantity":1},{"id":"haricot-vert","quantity":1},{"id":"courgette","quantity":1},{"id":"carotte","quantity":1},{"id":"pates","quantity":1},{"id":"basilic","quantity":1},{"id":"ail","quantity":1},{"id":"huile-olive","quantity":1}]},"bouillon-de-nouilles-au-poulet":{"image":"🥢","ingredients":[{"id":"nouille","quantity":1},{"id":"poulet","quantity":1},{"id":"carotte","quantity":1},{"id":"gingembre","quantity":1},{"id":"sauce-soja","quantity":1},{"id":"bouillon","quantity":1}]},"soupe-de-pois-chiches":{"image":"🧑‍🍳","ingredients":[{"id":"pois-chiche","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"celeri","quantity":1},{"id":"oignon","quantity":1},{"id":"cumin","quantity":1},{"id":"bouillon","quantity":1}]},"spaghetti-a-la-tomate":{"image":"👨‍🍳","ingredients":[{"id":"pates","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"ail","quantity":1},{"id":"basilic","quantity":1},{"id":"huile-olive","quantity":1},{"id":"parmesan","quantity":1}]},"spaghetti-bolognaise":{"image":"👩‍🍳","ingredients":[{"id":"pates","quantity":1},{"id":"boeuf-hache","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"carotte","quantity":1},{"id":"oignon","quantity":1},{"id":"huile-olive","quantity":1}]},"pates-carbonara-a-la-francaise":{"image":"🧑‍🌾","ingredients":[{"id":"pates","quantity":1},{"id":"lardon","quantity":1},{"id":"oeuf","quantity":2},{"id":"creme","quantity":1},{"id":"parmesan","quantity":1},{"id":"poivre","quantity":1}]},"pates-au-pesto":{"image":"👨‍🌾","ingredients":[{"id":"pates","quantity":1},{"id":"pesto","quantity":1},{"id":"parmesan","quantity":1}]},"pates-au-saumon":{"image":"👩‍🌾","ingredients":[{"id":"pates","quantity":1},{"id":"saumon","quantity":1},{"id":"creme","quantity":1},{"id":"citron","quantity":1},{"id":"aneth","quantity":1}]},"pates-au-thon":{"image":"🧺","ingredients":[{"id":"pates","quantity":1},{"id":"thon","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"oignon","quantity":1},{"id":"huile-olive","quantity":1}]},"pates-aux-champignons":{"image":"🛒","ingredients":[{"id":"pates","quantity":1},{"id":"champignon","quantity":1},{"id":"creme","quantity":1},{"id":"ail","quantity":1},{"id":"persil","quantity":1},{"id":"beurre","quantity":1}]},"pates-aux-epinards":{"image":"🏪","ingredients":[{"id":"pates","quantity":1},{"id":"epinard","quantity":1},{"id":"ricotta","quantity":1},{"id":"ail","quantity":1},{"id":"huile-olive","quantity":1}]},"pates-aux-courgettes":{"image":"🏡","ingredients":[{"id":"pates","quantity":1},{"id":"courgette","quantity":2},{"id":"ail","quantity":1},{"id":"parmesan","quantity":1},{"id":"huile-olive","quantity":1}]},"pates-arrabbiata":{"image":"🏠","ingredients":[{"id":"pates","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"ail","quantity":1},{"id":"piment","quantity":1},{"id":"huile-olive","quantity":1}]},"pates-aux-quatre-fromages":{"image":"🏰","ingredients":[{"id":"pates","quantity":1},{"id":"emmental","quantity":1},{"id":"parmesan","quantity":1},{"id":"roquefort","quantity":1},{"id":"chevre","quantity":1},{"id":"creme","quantity":1}]},"pates-aux-crevettes":{"image":"🏯","ingredients":[{"id":"pates","quantity":1},{"id":"crevette","quantity":1},{"id":"ail","quantity":1},{"id":"citron","quantity":1},{"id":"huile-olive","quantity":1},{"id":"persil","quantity":1}]},"pates-a-la-puttanesca":{"image":"🗼","ingredients":[{"id":"pates","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"olive","quantity":1},{"id":"capre","quantity":1},{"id":"anchois","quantity":1},{"id":"ail","quantity":1},{"id":"huile-olive","quantity":1}]},"lasagnes-bolognaises":{"image":"🗽","ingredients":[{"id":"feuille-lasagne","quantity":1},{"id":"boeuf-hache","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"oignon","quantity":1},{"id":"lait","quantity":1},{"id":"farine","quantity":1},{"id":"beurre","quantity":1},{"id":"emmental","quantity":1}]},"lasagnes-aux-legumes":{"image":"🗿","ingredients":[{"id":"feuille-lasagne","quantity":1},{"id":"courgette","quantity":1},{"id":"aubergine","quantity":1},{"id":"poivron","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"lait","quantity":1},{"id":"farine","quantity":1},{"id":"beurre","quantity":1},{"id":"emmental","quantity":1}]},"lasagnes-epinards-ricotta":{"image":"🏛️","ingredients":[{"id":"feuille-lasagne","quantity":1},{"id":"epinard","quantity":1},{"id":"ricotta","quantity":1},{"id":"lait","quantity":1},{"id":"farine","quantity":1},{"id":"beurre","quantity":1},{"id":"parmesan","quantity":1}]},"gnocchis-au-beurre-et-aux-herbes":{"image":"🕌","ingredients":[{"id":"gnocchi","quantity":1},{"id":"beurre","quantity":1},{"id":"herbes-provence","quantity":1},{"id":"parmesan","quantity":1}]},"gnocchis-a-la-tomate":{"image":"🕍","ingredients":[{"id":"gnocchi","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"mozzarella","quantity":1},{"id":"basilic","quantity":1},{"id":"huile-olive","quantity":1}]},"gnocchis-aux-champignons":{"image":"⛪","ingredients":[{"id":"gnocchi","quantity":1},{"id":"champignon","quantity":1},{"id":"creme","quantity":1},{"id":"ail","quantity":1},{"id":"parmesan","quantity":1}]},"gratin-de-pates-au-jambon":{"image":"🛕","ingredients":[{"id":"pates","quantity":1},{"id":"jambon","quantity":1},{"id":"creme","quantity":1},{"id":"emmental","quantity":1}]},"gratin-de-pates-au-brocoli":{"image":"⛩️","ingredients":[{"id":"pates","quantity":1},{"id":"brocoli","quantity":1},{"id":"creme","quantity":1},{"id":"emmental","quantity":1}]},"pates-aux-aubergines":{"image":"🏟️","ingredients":[{"id":"pates","quantity":1},{"id":"aubergine","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"ail","quantity":1},{"id":"basilic","quantity":1},{"id":"huile-olive","quantity":1}]},"risotto-aux-champignons":{"image":"🎪","ingredients":[{"id":"riz-risotto","quantity":1},{"id":"champignon","quantity":1},{"id":"oignon","quantity":1},{"id":"bouillon","quantity":1},{"id":"parmesan","quantity":1},{"id":"beurre","quantity":1}]},"risotto-aux-asperges":{"image":"🎭","ingredients":[{"id":"riz-risotto","quantity":1},{"id":"asperge","quantity":1},{"id":"echalote","quantity":1},{"id":"bouillon","quantity":1},{"id":"parmesan","quantity":1},{"id":"beurre","quantity":1}]},"risotto-aux-petits-pois":{"image":"🎨","ingredients":[{"id":"riz-risotto","quantity":1},{"id":"petit-pois","quantity":1},{"id":"oignon","quantity":1},{"id":"bouillon","quantity":1},{"id":"parmesan","quantity":1},{"id":"beurre","quantity":1}]},"risotto-au-potiron":{"image":"🖼️","ingredients":[{"id":"riz-risotto","quantity":1},{"id":"potiron","quantity":1},{"id":"oignon","quantity":1},{"id":"bouillon","quantity":1},{"id":"parmesan","quantity":1},{"id":"beurre","quantity":1}]},"riz-cantonais":{"image":"🎬","ingredients":[{"id":"riz","quantity":1},{"id":"oeuf","quantity":2},{"id":"jambon","quantity":1},{"id":"petit-pois","quantity":1},{"id":"sauce-soja","quantity":1},{"id":"huile-neutre","quantity":1}]},"riz-saute-aux-legumes":{"image":"🎤","ingredients":[{"id":"riz","quantity":1},{"id":"carotte","quantity":1},{"id":"courgette","quantity":1},{"id":"petit-pois","quantity":1},{"id":"sauce-soja","quantity":1},{"id":"huile-neutre","quantity":1}]},"riz-au-poulet":{"image":"🎧","ingredients":[{"id":"riz","quantity":1},{"id":"poulet","quantity":1},{"id":"oignon","quantity":1},{"id":"poivron","quantity":1},{"id":"bouillon","quantity":1},{"id":"huile-olive","quantity":1}]},"riz-a-la-tomate":{"image":"🎼","ingredients":[{"id":"riz","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"oignon","quantity":1},{"id":"ail","quantity":1},{"id":"bouillon","quantity":1},{"id":"huile-olive","quantity":1}]},"paella-simplifiee":{"image":"🎹","ingredients":[{"id":"riz","quantity":1},{"id":"poulet","quantity":1},{"id":"crevette","quantity":1},{"id":"moule","quantity":1},{"id":"poivron","quantity":1},{"id":"petit-pois","quantity":1},{"id":"paprika","quantity":1},{"id":"bouillon","quantity":1},{"id":"huile-olive","quantity":1}]},"pilaf-de-boulgour":{"image":"🥁","ingredients":[{"id":"boulgour","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"oignon","quantity":1},{"id":"poivron","quantity":1},{"id":"bouillon","quantity":1},{"id":"huile-olive","quantity":1}]},"quinoa-aux-legumes-rotis":{"image":"🪘","ingredients":[{"id":"quinoa","quantity":1},{"id":"courgette","quantity":1},{"id":"carotte","quantity":2},{"id":"poivron","quantity":1},{"id":"huile-olive","quantity":1},{"id":"herbes-provence","quantity":1}]},"couscous-vegetarien":{"image":"🎷","ingredients":[{"id":"semoule","quantity":1},{"id":"pois-chiche","quantity":1},{"id":"carotte","quantity":2},{"id":"courgette","quantity":1},{"id":"navet","quantity":2},{"id":"tomate-concassee","quantity":1},{"id":"cumin","quantity":1},{"id":"bouillon","quantity":1}]},"couscous-au-poulet":{"image":"🎺","ingredients":[{"id":"semoule","quantity":1},{"id":"poulet","quantity":1},{"id":"pois-chiche","quantity":1},{"id":"carotte","quantity":2},{"id":"courgette","quantity":1},{"id":"cumin","quantity":1},{"id":"bouillon","quantity":1}]},"bowl-au-saumon":{"image":"🪗","ingredients":[{"id":"riz","quantity":1},{"id":"saumon","quantity":1},{"id":"avocat","quantity":1},{"id":"concombre","quantity":1},{"id":"sauce-soja","quantity":1},{"id":"sesame","quantity":1}]},"bowl-au-tofu":{"image":"🎸","ingredients":[{"id":"quinoa","quantity":1},{"id":"tofu","quantity":1},{"id":"carotte","quantity":1},{"id":"brocoli","quantity":1},{"id":"sauce-soja","quantity":1},{"id":"sesame","quantity":1},{"id":"huile-neutre","quantity":1}]},"riz-aux-haricots-rouges":{"image":"🪕","ingredients":[{"id":"riz","quantity":1},{"id":"haricot-rouge","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"oignon","quantity":1},{"id":"cumin","quantity":1},{"id":"huile-olive","quantity":1}]},"omelette-nature":{"image":"🎻","ingredients":[{"id":"oeuf","quantity":4},{"id":"beurre","quantity":1},{"id":"sel","quantity":1},{"id":"poivre","quantity":1}]},"omelette-au-fromage":{"image":"🪈","ingredients":[{"id":"oeuf","quantity":4},{"id":"emmental","quantity":1},{"id":"beurre","quantity":1},{"id":"sel","quantity":1}]},"omelette-aux-champignons":{"image":"🪇","ingredients":[{"id":"oeuf","quantity":4},{"id":"champignon","quantity":1},{"id":"beurre","quantity":1},{"id":"persil","quantity":1}]},"omelette-aux-pommes-de-terre":{"image":"🎲","ingredients":[{"id":"oeuf","quantity":4},{"id":"pomme-terre","quantity":3},{"id":"oignon","quantity":1},{"id":"huile-olive","quantity":1}]},"omelette-aux-epinards":{"image":"♟️","ingredients":[{"id":"oeuf","quantity":4},{"id":"epinard","quantity":1},{"id":"feta","quantity":1},{"id":"huile-olive","quantity":1}]},"ufs-brouilles":{"image":"🎯","ingredients":[{"id":"oeuf","quantity":4},{"id":"beurre","quantity":1},{"id":"creme","quantity":1},{"id":"sel","quantity":1}]},"ufs-cocotte-au-jambon":{"image":"🎳","ingredients":[{"id":"oeuf","quantity":2},{"id":"jambon","quantity":1},{"id":"creme","quantity":1},{"id":"emmental","quantity":1}]},"ufs-cocotte-aux-champignons":{"image":"🎮","ingredients":[{"id":"oeuf","quantity":2},{"id":"champignon","quantity":1},{"id":"creme","quantity":1},{"id":"beurre","quantity":1}]},"chakchouka":{"image":"🕹️","ingredients":[{"id":"oeuf","quantity":4},{"id":"poivron","quantity":2},{"id":"tomate-concassee","quantity":1},{"id":"oignon","quantity":1},{"id":"cumin","quantity":1},{"id":"huile-olive","quantity":1}]},"tortilla-espagnole":{"image":"🧩","ingredients":[{"id":"oeuf","quantity":4},{"id":"pomme-terre","quantity":4},{"id":"oignon","quantity":1},{"id":"huile-olive","quantity":1},{"id":"sel","quantity":1}]},"frittata-aux-legumes":{"image":"🪁","ingredients":[{"id":"oeuf","quantity":4},{"id":"courgette","quantity":1},{"id":"poivron","quantity":1},{"id":"petit-pois","quantity":1},{"id":"parmesan","quantity":1},{"id":"huile-olive","quantity":1}]},"croque-monsieur":{"image":"🎊","ingredients":[{"id":"pain-mie","quantity":1},{"id":"jambon","quantity":1},{"id":"emmental","quantity":1},{"id":"beurre","quantity":1}]},"croque-madame":{"image":"🎉","ingredients":[{"id":"pain-mie","quantity":1},{"id":"jambon","quantity":1},{"id":"emmental","quantity":1},{"id":"beurre","quantity":1},{"id":"oeuf","quantity":2}]},"tartines-avocat-uf":{"image":"🎁","ingredients":[{"id":"pain","quantity":1},{"id":"avocat","quantity":1},{"id":"oeuf","quantity":2},{"id":"citron","quantity":1},{"id":"sel","quantity":1}]},"tartines-chevre-miel":{"image":"🎐","ingredients":[{"id":"pain","quantity":1},{"id":"chevre","quantity":1},{"id":"miel","quantity":1},{"id":"noix","quantity":1}]},"tartines-saumon-fromage-blanc":{"image":"🎏","ingredients":[{"id":"pain","quantity":1},{"id":"saumon-fume","quantity":1},{"id":"fromage-blanc","quantity":1},{"id":"citron","quantity":1},{"id":"aneth","quantity":1}]},"sandwich-jambon-beurre":{"image":"🎎","ingredients":[{"id":"baguette","quantity":1},{"id":"jambon","quantity":1},{"id":"beurre","quantity":1},{"id":"cornichon","quantity":1}]},"sandwich-au-thon":{"image":"🪭","ingredients":[{"id":"pain-mie","quantity":1},{"id":"thon","quantity":1},{"id":"mayonnaise","quantity":1},{"id":"salade","quantity":1},{"id":"tomate","quantity":1}]},"wrap-au-poulet":{"image":"🪩","ingredients":[{"id":"tortilla","quantity":1},{"id":"poulet","quantity":1},{"id":"salade","quantity":1},{"id":"tomate","quantity":1},{"id":"yaourt","quantity":1}]},"wrap-vegetarien":{"image":"🧧","ingredients":[{"id":"tortilla","quantity":1},{"id":"pois-chiche","quantity":1},{"id":"avocat","quantity":1},{"id":"carotte","quantity":1},{"id":"yaourt","quantity":1},{"id":"citron","quantity":1}]},"burger-maison":{"image":"🧨","ingredients":[{"id":"pain-burger","quantity":1},{"id":"boeuf-hache","quantity":1},{"id":"salade","quantity":1},{"id":"tomate","quantity":1},{"id":"emmental","quantity":1},{"id":"oignon","quantity":1}]},"burger-vegetarien-aux-haricots":{"image":"🎆","ingredients":[{"id":"pain-burger","quantity":1},{"id":"haricot-rouge","quantity":1},{"id":"oeuf","quantity":1},{"id":"chapelure","quantity":1},{"id":"salade","quantity":1},{"id":"tomate","quantity":1},{"id":"cumin","quantity":1}]},"quesadillas-au-fromage":{"image":"🎇","ingredients":[{"id":"tortilla","quantity":1},{"id":"emmental","quantity":1},{"id":"poivron","quantity":1},{"id":"oignon","quantity":1}]},"hot-dog":{"image":"✨","ingredients":[{"id":"baguette","quantity":1},{"id":"saucisse","quantity":1},{"id":"moutarde","quantity":1},{"id":"oignon","quantity":1}]},"quiche-lorraine":{"image":"⭐","ingredients":[{"id":"pate-brisee","quantity":1},{"id":"lardon","quantity":1},{"id":"oeuf","quantity":3},{"id":"creme","quantity":1},{"id":"lait","quantity":1},{"id":"muscade","quantity":1}]},"quiche-aux-poireaux":{"image":"🌟","ingredients":[{"id":"pate-brisee","quantity":1},{"id":"poireau","quantity":3},{"id":"oeuf","quantity":3},{"id":"creme","quantity":1},{"id":"emmental","quantity":1}]},"quiche-epinards-chevre":{"image":"💫","ingredients":[{"id":"pate-brisee","quantity":1},{"id":"epinard","quantity":1},{"id":"chevre","quantity":1},{"id":"oeuf","quantity":3},{"id":"creme","quantity":1}]},"quiche-saumon-brocoli":{"image":"🌠","ingredients":[{"id":"pate-brisee","quantity":1},{"id":"saumon","quantity":1},{"id":"brocoli","quantity":1},{"id":"oeuf","quantity":3},{"id":"creme","quantity":1}]},"tarte-a-la-tomate":{"image":"🌌","ingredients":[{"id":"pate-feuilletee","quantity":1},{"id":"tomate","quantity":4},{"id":"moutarde","quantity":1},{"id":"emmental","quantity":1},{"id":"herbes-provence","quantity":1}]},"tarte-aux-courgettes":{"image":"🌈","ingredients":[{"id":"pate-brisee","quantity":1},{"id":"courgette","quantity":3},{"id":"chevre","quantity":1},{"id":"oeuf","quantity":2},{"id":"creme","quantity":1}]},"tarte-aux-oignons":{"image":"🌤️","ingredients":[{"id":"pate-brisee","quantity":1},{"id":"oignon","quantity":4},{"id":"oeuf","quantity":2},{"id":"creme","quantity":1},{"id":"beurre","quantity":1}]},"tarte-champignons-ricotta":{"image":"🌥️","ingredients":[{"id":"pate-brisee","quantity":1},{"id":"champignon","quantity":1},{"id":"ricotta","quantity":1},{"id":"oeuf","quantity":2},{"id":"ail","quantity":1}]},"pizza-margherita":{"image":"⛅","ingredients":[{"id":"pate-pizza","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"mozzarella","quantity":1},{"id":"basilic","quantity":1}]},"pizza-jambon-champignons":{"image":"🌦️","ingredients":[{"id":"pate-pizza","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"jambon","quantity":1},{"id":"champignon","quantity":1},{"id":"mozzarella","quantity":1}]},"pizza-quatre-fromages":{"image":"🌧️","ingredients":[{"id":"pate-pizza","quantity":1},{"id":"mozzarella","quantity":1},{"id":"emmental","quantity":1},{"id":"roquefort","quantity":1},{"id":"chevre","quantity":1},{"id":"creme","quantity":1}]},"pizza-vegetarienne":{"image":"⛈️","ingredients":[{"id":"pate-pizza","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"courgette","quantity":1},{"id":"poivron","quantity":1},{"id":"champignon","quantity":1},{"id":"mozzarella","quantity":1}]},"pizza-au-thon":{"image":"🌩️","ingredients":[{"id":"pate-pizza","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"thon","quantity":1},{"id":"oignon","quantity":1},{"id":"olive","quantity":1},{"id":"mozzarella","quantity":1}]},"pizza-au-chorizo":{"image":"🌪️","ingredients":[{"id":"pate-pizza","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"chorizo","quantity":1},{"id":"poivron","quantity":1},{"id":"mozzarella","quantity":1}]},"feuilletes-chevre-miel":{"image":"🌬️","ingredients":[{"id":"pate-feuilletee","quantity":1},{"id":"chevre","quantity":1},{"id":"miel","quantity":1},{"id":"oeuf","quantity":1}]},"feuilletes-aux-saucisses":{"image":"🌀","ingredients":[{"id":"pate-feuilletee","quantity":1},{"id":"saucisse","quantity":1},{"id":"moutarde","quantity":1},{"id":"oeuf","quantity":1}]},"feuilletes-epinards-feta":{"image":"🌞","ingredients":[{"id":"pate-feuilletee","quantity":1},{"id":"epinard","quantity":1},{"id":"feta","quantity":1},{"id":"oeuf","quantity":1}]},"bricks-au-thon":{"image":"🌝","ingredients":[{"id":"feuille-brick","quantity":1},{"id":"thon","quantity":1},{"id":"oeuf","quantity":2},{"id":"pomme-terre","quantity":2},{"id":"persil","quantity":1},{"id":"huile-neutre","quantity":1}]},"bricks-au-fromage":{"image":"🌛","ingredients":[{"id":"feuille-brick","quantity":1},{"id":"feta","quantity":1},{"id":"oeuf","quantity":1},{"id":"persil","quantity":1},{"id":"huile-neutre","quantity":1}]},"galette-complete":{"image":"🌜","ingredients":[{"id":"farine-sarrasin","quantity":1},{"id":"oeuf","quantity":3},{"id":"jambon","quantity":1},{"id":"emmental","quantity":1},{"id":"beurre","quantity":1},{"id":"sel","quantity":1}]},"ratatouille":{"image":"🌚","ingredients":[{"id":"courgette","quantity":2},{"id":"aubergine","quantity":1},{"id":"poivron","quantity":2},{"id":"tomate","quantity":3},{"id":"oignon","quantity":1},{"id":"ail","quantity":1},{"id":"huile-olive","quantity":1},{"id":"herbes-provence","quantity":1}]},"gratin-dauphinois":{"image":"🌔","ingredients":[{"id":"pomme-terre","quantity":6},{"id":"creme","quantity":1},{"id":"lait","quantity":1},{"id":"ail","quantity":1},{"id":"muscade","quantity":1},{"id":"beurre","quantity":1}]},"gratin-de-courgettes":{"image":"🌓","ingredients":[{"id":"courgette","quantity":3},{"id":"creme","quantity":1},{"id":"oeuf","quantity":2},{"id":"emmental","quantity":1}]},"gratin-de-chou-fleur":{"image":"🌒","ingredients":[{"id":"chou-fleur","quantity":1},{"id":"lait","quantity":1},{"id":"farine","quantity":1},{"id":"beurre","quantity":1},{"id":"emmental","quantity":1},{"id":"muscade","quantity":1}]},"gratin-de-brocoli":{"image":"🌘","ingredients":[{"id":"brocoli","quantity":1},{"id":"lait","quantity":1},{"id":"farine","quantity":1},{"id":"beurre","quantity":1},{"id":"emmental","quantity":1}]},"gratin-de-poireaux":{"image":"🌗","ingredients":[{"id":"poireau","quantity":3},{"id":"creme","quantity":1},{"id":"emmental","quantity":1},{"id":"beurre","quantity":1}]},"gratin-de-patates-douces":{"image":"🌖","ingredients":[{"id":"patate-douce","quantity":3},{"id":"creme","quantity":1},{"id":"emmental","quantity":1},{"id":"muscade","quantity":1}]},"puree-de-pommes-de-terre":{"image":"🪐","ingredients":[{"id":"pomme-terre","quantity":5},{"id":"lait","quantity":1},{"id":"beurre","quantity":1},{"id":"sel","quantity":1}]},"puree-de-carottes":{"image":"🌍","ingredients":[{"id":"carotte","quantity":5},{"id":"pomme-terre","quantity":2},{"id":"beurre","quantity":1},{"id":"creme","quantity":1}]},"puree-de-patates-douces":{"image":"🌎","ingredients":[{"id":"patate-douce","quantity":3},{"id":"beurre","quantity":1},{"id":"lait","quantity":1}]},"pommes-de-terre-roties":{"image":"🌏","ingredients":[{"id":"pomme-terre","quantity":5},{"id":"huile-olive","quantity":1},{"id":"romarin","quantity":1},{"id":"ail","quantity":1},{"id":"sel","quantity":1}]},"carottes-glacees":{"image":"🌐","ingredients":[{"id":"carotte","quantity":5},{"id":"beurre","quantity":1},{"id":"sucre","quantity":1},{"id":"sel","quantity":1}]},"fondue-de-poireaux":{"image":"🗺️","ingredients":[{"id":"poireau","quantity":3},{"id":"beurre","quantity":1},{"id":"creme","quantity":1},{"id":"citron","quantity":1}]},"haricots-verts-a-l-ail":{"image":"🧳","ingredients":[{"id":"haricot-vert","quantity":1},{"id":"ail","quantity":1},{"id":"huile-olive","quantity":1},{"id":"persil","quantity":1}]},"poelee-de-champignons":{"image":"🧿","ingredients":[{"id":"champignon","quantity":1},{"id":"ail","quantity":1},{"id":"persil","quantity":1},{"id":"beurre","quantity":1}]},"epinards-a-la-creme":{"image":"🔮","ingredients":[{"id":"epinard","quantity":1},{"id":"creme","quantity":1},{"id":"beurre","quantity":1},{"id":"muscade","quantity":1}]},"courgettes-farcies":{"image":"🪬","ingredients":[{"id":"courgette","quantity":2},{"id":"boeuf-hache","quantity":1},{"id":"oignon","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"emmental","quantity":1}]},"tomates-farcies":{"image":"🧸","ingredients":[{"id":"tomate","quantity":4},{"id":"porc","quantity":1},{"id":"oignon","quantity":1},{"id":"ail","quantity":1},{"id":"pain","quantity":1},{"id":"persil","quantity":1}]},"poivrons-farcis-au-riz":{"image":"🪆","ingredients":[{"id":"poivron","quantity":2},{"id":"riz","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"oignon","quantity":1},{"id":"feta","quantity":1},{"id":"huile-olive","quantity":1}]},"aubergines-gratinees":{"image":"🪅","ingredients":[{"id":"aubergine","quantity":2},{"id":"tomate-concassee","quantity":1},{"id":"mozzarella","quantity":1},{"id":"parmesan","quantity":1},{"id":"huile-olive","quantity":1}]},"endives-au-jambon":{"image":"🛎️","ingredients":[{"id":"endive","quantity":3},{"id":"jambon","quantity":1},{"id":"lait","quantity":1},{"id":"farine","quantity":1},{"id":"beurre","quantity":1},{"id":"emmental","quantity":1}]},"choux-de-bruxelles-rotis":{"image":"🕰️","ingredients":[{"id":"chou-bruxelles","quantity":1},{"id":"huile-olive","quantity":1},{"id":"ail","quantity":1},{"id":"vinaigre-balsamique","quantity":1}]},"asperges-au-citron":{"image":"⏰","ingredients":[{"id":"asperge","quantity":1},{"id":"citron","quantity":1},{"id":"beurre","quantity":1},{"id":"sel","quantity":1}]},"fenouil-braise":{"image":"⏳","ingredients":[{"id":"fenouil","quantity":2},{"id":"huile-olive","quantity":1},{"id":"bouillon","quantity":1},{"id":"citron","quantity":1}]},"tian-de-legumes":{"image":"⌛","ingredients":[{"id":"courgette","quantity":1},{"id":"aubergine","quantity":1},{"id":"tomate","quantity":3},{"id":"oignon","quantity":1},{"id":"huile-olive","quantity":1},{"id":"thym","quantity":1}]},"galettes-de-legumes":{"image":"⌚","ingredients":[{"id":"courgette","quantity":1},{"id":"carotte","quantity":2},{"id":"oeuf","quantity":2},{"id":"farine","quantity":1},{"id":"huile-neutre","quantity":1}]},"poulet-roti-aux-pommes-de-terre":{"image":"🕯️","ingredients":[{"id":"poulet","quantity":1},{"id":"pomme-terre","quantity":5},{"id":"ail","quantity":1},{"id":"huile-olive","quantity":1},{"id":"thym","quantity":1}]},"poulet-a-la-creme":{"image":"💡","ingredients":[{"id":"poulet","quantity":1},{"id":"creme","quantity":1},{"id":"champignon","quantity":1},{"id":"echalote","quantity":1},{"id":"beurre","quantity":1}]},"poulet-au-curry":{"image":"🔦","ingredients":[{"id":"poulet","quantity":1},{"id":"oignon","quantity":1},{"id":"curry","quantity":1},{"id":"lait-coco","quantity":1},{"id":"riz","quantity":1},{"id":"huile-neutre","quantity":1}]},"poulet-basquaise":{"image":"🏮","ingredients":[{"id":"poulet","quantity":1},{"id":"poivron","quantity":2},{"id":"tomate-concassee","quantity":1},{"id":"oignon","quantity":1},{"id":"ail","quantity":1},{"id":"huile-olive","quantity":1}]},"poulet-au-citron":{"image":"📔","ingredients":[{"id":"poulet","quantity":1},{"id":"citron","quantity":2},{"id":"ail","quantity":1},{"id":"huile-olive","quantity":1},{"id":"thym","quantity":1}]},"poulet-a-la-moutarde":{"image":"📕","ingredients":[{"id":"poulet","quantity":1},{"id":"moutarde","quantity":1},{"id":"creme","quantity":1},{"id":"echalote","quantity":1},{"id":"huile-olive","quantity":1}]},"poulet-aux-olives":{"image":"📗","ingredients":[{"id":"poulet","quantity":1},{"id":"olive","quantity":1},{"id":"citron","quantity":1},{"id":"oignon","quantity":1},{"id":"cumin","quantity":1},{"id":"huile-olive","quantity":1}]},"poulet-au-miel":{"image":"📘","ingredients":[{"id":"poulet","quantity":1},{"id":"miel","quantity":1},{"id":"sauce-soja","quantity":1},{"id":"ail","quantity":1},{"id":"riz","quantity":1},{"id":"huile-neutre","quantity":1}]},"dinde-a-la-creme":{"image":"📙","ingredients":[{"id":"dinde","quantity":1},{"id":"creme","quantity":1},{"id":"champignon","quantity":1},{"id":"echalote","quantity":1},{"id":"beurre","quantity":1}]},"escalopes-de-dinde-panees":{"image":"📚","ingredients":[{"id":"dinde","quantity":1},{"id":"oeuf","quantity":1},{"id":"farine","quantity":1},{"id":"chapelure","quantity":1},{"id":"huile-neutre","quantity":1},{"id":"citron","quantity":1}]},"escalopes-de-veau-au-citron":{"image":"📖","ingredients":[{"id":"veau","quantity":1},{"id":"citron","quantity":1},{"id":"beurre","quantity":1},{"id":"farine","quantity":1}]},"blanquette-de-veau-simplifiee":{"image":"🔖","ingredients":[{"id":"veau","quantity":1},{"id":"carotte","quantity":3},{"id":"champignon","quantity":1},{"id":"oignon","quantity":1},{"id":"creme","quantity":1},{"id":"bouillon","quantity":1},{"id":"farine","quantity":1},{"id":"beurre","quantity":1}]},"b-uf-bourguignon":{"image":"🏷️","ingredients":[{"id":"boeuf","quantity":1},{"id":"vin-rouge","quantity":1},{"id":"carotte","quantity":3},{"id":"oignon","quantity":1},{"id":"champignon","quantity":1},{"id":"lardon","quantity":1},{"id":"farine","quantity":1},{"id":"thym","quantity":1},{"id":"laurier","quantity":1}]},"hachis-parmentier":{"image":"✉️","ingredients":[{"id":"boeuf-hache","quantity":1},{"id":"pomme-terre","quantity":5},{"id":"oignon","quantity":1},{"id":"lait","quantity":1},{"id":"beurre","quantity":1},{"id":"emmental","quantity":1}]},"boulettes-de-b-uf-a-la-tomate":{"image":"💌","ingredients":[{"id":"boeuf-hache","quantity":1},{"id":"oeuf","quantity":1},{"id":"chapelure","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"oignon","quantity":1},{"id":"ail","quantity":1},{"id":"huile-olive","quantity":1}]},"chili-con-carne":{"image":"📮","ingredients":[{"id":"boeuf-hache","quantity":1},{"id":"haricot-rouge","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"oignon","quantity":1},{"id":"poivron","quantity":1},{"id":"cumin","quantity":1},{"id":"piment","quantity":1}]},"steak-aux-echalotes":{"image":"📬","ingredients":[{"id":"boeuf","quantity":1},{"id":"echalote","quantity":1},{"id":"beurre","quantity":1},{"id":"poivre","quantity":1}]},"saute-de-porc-a-la-moutarde":{"image":"📭","ingredients":[{"id":"porc","quantity":1},{"id":"moutarde","quantity":1},{"id":"creme","quantity":1},{"id":"oignon","quantity":1},{"id":"huile-olive","quantity":1}]},"porc-au-caramel":{"image":"📪","ingredients":[{"id":"porc","quantity":1},{"id":"sucre","quantity":1},{"id":"sauce-soja","quantity":1},{"id":"gingembre","quantity":1},{"id":"riz","quantity":1},{"id":"huile-neutre","quantity":1}]},"filet-de-porc-aux-pommes":{"image":"📫","ingredients":[{"id":"porc","quantity":1},{"id":"pomme","quantity":2},{"id":"cidre","quantity":1},{"id":"creme","quantity":1},{"id":"beurre","quantity":1}]},"saucisses-aux-lentilles":{"image":"📯","ingredients":[{"id":"saucisse","quantity":1},{"id":"lentille","quantity":1},{"id":"carotte","quantity":2},{"id":"oignon","quantity":1},{"id":"laurier","quantity":1}]},"tartiflette":{"image":"📰","ingredients":[{"id":"pomme-terre","quantity":5},{"id":"lardon","quantity":1},{"id":"oignon","quantity":1},{"id":"reblochon","quantity":1},{"id":"creme","quantity":1}]},"raclette":{"image":"🗞️","ingredients":[{"id":"raclette","quantity":1},{"id":"pomme-terre","quantity":5},{"id":"jambon","quantity":1},{"id":"cornichon","quantity":1}]},"magret-de-canard-au-miel":{"image":"🪙","ingredients":[{"id":"canard","quantity":1},{"id":"miel","quantity":1},{"id":"vinaigre-balsamique","quantity":1},{"id":"sel","quantity":1}]},"parmentier-de-canard":{"image":"💎","ingredients":[{"id":"canard","quantity":1},{"id":"pomme-terre","quantity":5},{"id":"lait","quantity":1},{"id":"beurre","quantity":1},{"id":"echalote","quantity":1}]},"navarin-d-agneau":{"image":"👑","ingredients":[{"id":"agneau","quantity":1},{"id":"carotte","quantity":2},{"id":"navet","quantity":2},{"id":"pomme-terre","quantity":3},{"id":"petit-pois","quantity":1},{"id":"oignon","quantity":1},{"id":"bouillon","quantity":1}]},"agneau-au-romarin":{"image":"🎩","ingredients":[{"id":"agneau","quantity":1},{"id":"romarin","quantity":1},{"id":"ail","quantity":1},{"id":"huile-olive","quantity":1},{"id":"pomme-terre","quantity":4}]},"moussaka-simplifiee":{"image":"🧢","ingredients":[{"id":"aubergine","quantity":2},{"id":"boeuf-hache","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"oignon","quantity":1},{"id":"lait","quantity":1},{"id":"farine","quantity":1},{"id":"beurre","quantity":1},{"id":"emmental","quantity":1}]},"saumon-au-four":{"image":"👒","ingredients":[{"id":"saumon","quantity":1},{"id":"citron","quantity":1},{"id":"huile-olive","quantity":1},{"id":"aneth","quantity":1}]},"saumon-a-la-creme":{"image":"🎓","ingredients":[{"id":"saumon","quantity":1},{"id":"creme","quantity":1},{"id":"citron","quantity":1},{"id":"echalote","quantity":1},{"id":"beurre","quantity":1}]},"saumon-teriyaki-simplifie":{"image":"⛑️","ingredients":[{"id":"saumon","quantity":1},{"id":"sauce-soja","quantity":1},{"id":"miel","quantity":1},{"id":"gingembre","quantity":1},{"id":"riz","quantity":1},{"id":"sesame","quantity":1}]},"papillote-de-cabillaud":{"image":"🪖","ingredients":[{"id":"cabillaud","quantity":1},{"id":"courgette","quantity":1},{"id":"tomate","quantity":1},{"id":"citron","quantity":1},{"id":"huile-olive","quantity":1}]},"cabillaud-a-la-tomate":{"image":"🧣","ingredients":[{"id":"cabillaud","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"oignon","quantity":1},{"id":"ail","quantity":1},{"id":"huile-olive","quantity":1}]},"poisson-pane-maison":{"image":"🧤","ingredients":[{"id":"cabillaud","quantity":1},{"id":"oeuf","quantity":1},{"id":"farine","quantity":1},{"id":"chapelure","quantity":1},{"id":"huile-neutre","quantity":1},{"id":"citron","quantity":1}]},"brandade-simplifiee-au-cabillaud":{"image":"🧥","ingredients":[{"id":"cabillaud","quantity":1},{"id":"pomme-terre","quantity":4},{"id":"lait","quantity":1},{"id":"ail","quantity":1},{"id":"huile-olive","quantity":1}]},"crevettes-a-l-ail":{"image":"🧦","ingredients":[{"id":"crevette","quantity":1},{"id":"ail","quantity":1},{"id":"persil","quantity":1},{"id":"citron","quantity":1},{"id":"huile-olive","quantity":1}]},"curry-de-crevettes":{"image":"👗","ingredients":[{"id":"crevette","quantity":1},{"id":"lait-coco","quantity":1},{"id":"curry","quantity":1},{"id":"oignon","quantity":1},{"id":"riz","quantity":1},{"id":"huile-neutre","quantity":1}]},"moules-marinieres":{"image":"👘","ingredients":[{"id":"moule","quantity":1},{"id":"vin-blanc","quantity":1},{"id":"echalote","quantity":1},{"id":"persil","quantity":1},{"id":"beurre","quantity":1}]},"moules-a-la-creme":{"image":"🥻","ingredients":[{"id":"moule","quantity":1},{"id":"creme","quantity":1},{"id":"vin-blanc","quantity":1},{"id":"echalote","quantity":1},{"id":"beurre","quantity":1}]},"calamars-a-la-tomate":{"image":"👚","ingredients":[{"id":"calamar","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"oignon","quantity":1},{"id":"ail","quantity":1},{"id":"huile-olive","quantity":1}]},"sardines-sur-tartines":{"image":"👕","ingredients":[{"id":"sardine","quantity":1},{"id":"pain","quantity":1},{"id":"citron","quantity":1},{"id":"persil","quantity":1}]},"rillettes-de-thon":{"image":"👜","ingredients":[{"id":"thon","quantity":1},{"id":"fromage-blanc","quantity":1},{"id":"citron","quantity":1},{"id":"ciboulette","quantity":1},{"id":"pain","quantity":1}]},"galettes-de-thon":{"image":"👛","ingredients":[{"id":"thon","quantity":1},{"id":"oeuf","quantity":1},{"id":"chapelure","quantity":1},{"id":"oignon","quantity":1},{"id":"persil","quantity":1},{"id":"huile-neutre","quantity":1}]},"dahl-de-lentilles-corail":{"image":"👝","ingredients":[{"id":"lentille-corail","quantity":1},{"id":"lait-coco","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"oignon","quantity":1},{"id":"curry","quantity":1},{"id":"cumin","quantity":1},{"id":"riz","quantity":1}]},"chili-sin-carne":{"image":"🎒","ingredients":[{"id":"haricot-rouge","quantity":1},{"id":"mais","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"oignon","quantity":1},{"id":"poivron","quantity":1},{"id":"cumin","quantity":1},{"id":"piment","quantity":1}]},"curry-de-pois-chiches":{"image":"🧵","ingredients":[{"id":"pois-chiche","quantity":1},{"id":"lait-coco","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"oignon","quantity":1},{"id":"curry","quantity":1},{"id":"epinard","quantity":1}]},"curry-de-legumes":{"image":"🪡","ingredients":[{"id":"carotte","quantity":2},{"id":"courgette","quantity":1},{"id":"brocoli","quantity":1},{"id":"lait-coco","quantity":1},{"id":"curry","quantity":1},{"id":"riz","quantity":1}]},"tofu-saute-aux-legumes":{"image":"🧶","ingredients":[{"id":"tofu","quantity":1},{"id":"brocoli","quantity":1},{"id":"carotte","quantity":1},{"id":"sauce-soja","quantity":1},{"id":"gingembre","quantity":1},{"id":"huile-neutre","quantity":1}]},"tofu-croustillant":{"image":"🪮","ingredients":[{"id":"tofu","quantity":1},{"id":"maizena","quantity":1},{"id":"sauce-soja","quantity":1},{"id":"sesame","quantity":1},{"id":"huile-neutre","quantity":1}]},"falafels-au-four":{"image":"🧷","ingredients":[{"id":"pois-chiche","quantity":1},{"id":"oignon","quantity":1},{"id":"ail","quantity":1},{"id":"persil","quantity":1},{"id":"cumin","quantity":1},{"id":"farine","quantity":1},{"id":"huile-olive","quantity":1}]},"lentilles-a-la-tomate":{"image":"🪒","ingredients":[{"id":"lentille","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"carotte","quantity":1},{"id":"oignon","quantity":1},{"id":"bouillon","quantity":1}]},"haricots-blancs-a-la-tomate":{"image":"🧼","ingredients":[{"id":"haricot-blanc","quantity":1},{"id":"tomate-concassee","quantity":1},{"id":"ail","quantity":1},{"id":"oignon","quantity":1},{"id":"huile-olive","quantity":1}]},"nouilles-sautees-au-poulet":{"image":"🪥","ingredients":[{"id":"nouille","quantity":1},{"id":"poulet","quantity":1},{"id":"carotte","quantity":1},{"id":"poivron","quantity":1},{"id":"sauce-soja","quantity":1},{"id":"huile-neutre","quantity":1}]},"nouilles-sautees-au-tofu":{"image":"🧽","ingredients":[{"id":"nouille","quantity":1},{"id":"tofu","quantity":1},{"id":"carotte","quantity":1},{"id":"chou","quantity":1},{"id":"sauce-soja","quantity":1},{"id":"huile-neutre","quantity":1}]},"nouilles-aux-crevettes":{"image":"🧴","ingredients":[{"id":"nouille","quantity":1},{"id":"crevette","quantity":1},{"id":"carotte","quantity":1},{"id":"sauce-soja","quantity":1},{"id":"gingembre","quantity":1},{"id":"huile-neutre","quantity":1}]},"pad-thai-simplifie":{"image":"🛁","ingredients":[{"id":"nouille","quantity":1},{"id":"crevette","quantity":1},{"id":"oeuf","quantity":2},{"id":"cacahuete","quantity":1},{"id":"citron-vert","quantity":1},{"id":"sauce-soja","quantity":1},{"id":"sucre","quantity":1}]},"rouleaux-de-printemps":{"image":"🪣","ingredients":[{"id":"feuille-riz","quantity":1},{"id":"vermicelle-riz","quantity":1},{"id":"crevette","quantity":1},{"id":"salade","quantity":1},{"id":"carotte","quantity":1},{"id":"menthe","quantity":1}]},"nems-au-porc-simplifies":{"image":"🪜","ingredients":[{"id":"feuille-riz","quantity":1},{"id":"porc","quantity":1},{"id":"vermicelle-riz","quantity":1},{"id":"carotte","quantity":1},{"id":"oignon","quantity":1},{"id":"oeuf","quantity":1},{"id":"huile-neutre","quantity":1}]},"samoussas-aux-legumes":{"image":"🧰","ingredients":[{"id":"feuille-brick","quantity":1},{"id":"pomme-terre","quantity":2},{"id":"petit-pois","quantity":1},{"id":"carotte","quantity":1},{"id":"curry","quantity":1},{"id":"huile-neutre","quantity":1}]},"tajine-de-legumes":{"image":"🔧","ingredients":[{"id":"carotte","quantity":2},{"id":"courgette","quantity":1},{"id":"patate-douce","quantity":1},{"id":"pois-chiche","quantity":1},{"id":"abricot","quantity":1},{"id":"cumin","quantity":1},{"id":"cannelle","quantity":1},{"id":"bouillon","quantity":1}]},"tajine-de-poulet-aux-abricots":{"image":"🔨","ingredients":[{"id":"poulet","quantity":1},{"id":"abricot","quantity":1},{"id":"amande","quantity":1},{"id":"oignon","quantity":1},{"id":"cannelle","quantity":1},{"id":"cumin","quantity":1},{"id":"bouillon","quantity":1}]},"poulet-aux-noix-de-cajou":{"image":"⚒️","ingredients":[{"id":"poulet","quantity":1},{"id":"noix-cajou","quantity":1},{"id":"poivron","quantity":1},{"id":"oignon","quantity":1},{"id":"sauce-soja","quantity":1},{"id":"huile-neutre","quantity":1}]},"poulet-a-l-ananas":{"image":"🛠️","ingredients":[{"id":"poulet","quantity":1},{"id":"ananas","quantity":1},{"id":"poivron","quantity":1},{"id":"sauce-soja","quantity":1},{"id":"miel","quantity":1},{"id":"riz","quantity":1},{"id":"huile-neutre","quantity":1}]},"keftas":{"image":"⛏️","ingredients":[{"id":"boeuf-hache","quantity":1},{"id":"oignon","quantity":1},{"id":"persil","quantity":1},{"id":"cumin","quantity":1},{"id":"paprika","quantity":1},{"id":"huile-olive","quantity":1}]},"fajitas-au-poulet":{"image":"🪚","ingredients":[{"id":"tortilla","quantity":1},{"id":"poulet","quantity":1},{"id":"poivron","quantity":2},{"id":"oignon","quantity":1},{"id":"paprika","quantity":1},{"id":"huile-olive","quantity":1}]},"tacos-aux-haricots":{"image":"🪛","ingredients":[{"id":"tortilla","quantity":1},{"id":"haricot-rouge","quantity":1},{"id":"avocat","quantity":1},{"id":"tomate","quantity":1},{"id":"cumin","quantity":1},{"id":"citron-vert","quantity":1}]},"burritos-vegetariens":{"image":"🗜️","ingredients":[{"id":"tortilla","quantity":1},{"id":"riz","quantity":1},{"id":"haricot-rouge","quantity":1},{"id":"mais","quantity":1},{"id":"tomate","quantity":1},{"id":"emmental","quantity":1}]},"poke-bowl-au-tofu":{"image":"🔩","ingredients":[{"id":"riz","quantity":1},{"id":"tofu","quantity":1},{"id":"avocat","quantity":1},{"id":"concombre","quantity":1},{"id":"mangue","quantity":1},{"id":"sauce-soja","quantity":1},{"id":"sesame","quantity":1}]},"porridge-nature":{"image":"🧲","ingredients":[{"id":"flocon-avoine","quantity":1},{"id":"lait","quantity":1},{"id":"miel","quantity":1}]},"porridge-banane-chocolat":{"image":"🪝","ingredients":[{"id":"flocon-avoine","quantity":1},{"id":"lait","quantity":1},{"id":"banane","quantity":1},{"id":"chocolat","quantity":1}]},"porridge-pomme-cannelle":{"image":"🛡️","ingredients":[{"id":"flocon-avoine","quantity":1},{"id":"lait","quantity":1},{"id":"pomme","quantity":1},{"id":"cannelle","quantity":1},{"id":"miel","quantity":1}]},"overnight-oats-aux-fruits-rouges":{"image":"🗝️","ingredients":[{"id":"flocon-avoine","quantity":1},{"id":"yaourt","quantity":1},{"id":"lait","quantity":1},{"id":"fraise","quantity":1},{"id":"chia","quantity":1}]},"granola-maison":{"image":"🔑","ingredients":[{"id":"flocon-avoine","quantity":1},{"id":"amande","quantity":1},{"id":"noisette","quantity":1},{"id":"miel","quantity":1},{"id":"huile-neutre","quantity":1}]},"pancakes":{"image":"🔐","ingredients":[{"id":"farine","quantity":1},{"id":"oeuf","quantity":2},{"id":"lait","quantity":1},{"id":"levure","quantity":1},{"id":"sucre","quantity":1},{"id":"beurre","quantity":1}]},"pancakes-a-la-banane":{"image":"🔒","ingredients":[{"id":"banane","quantity":2},{"id":"oeuf","quantity":2},{"id":"farine","quantity":1},{"id":"lait","quantity":1},{"id":"levure","quantity":1}]},"crepes":{"image":"🔓","ingredients":[{"id":"farine","quantity":1},{"id":"oeuf","quantity":3},{"id":"lait","quantity":1},{"id":"beurre","quantity":1},{"id":"sucre","quantity":1}]},"gaufres":{"image":"🚪","ingredients":[{"id":"farine","quantity":1},{"id":"oeuf","quantity":2},{"id":"lait","quantity":1},{"id":"beurre","quantity":1},{"id":"sucre","quantity":1},{"id":"levure","quantity":1}]},"pain-perdu":{"image":"🪑","ingredients":[{"id":"pain","quantity":1},{"id":"oeuf","quantity":2},{"id":"lait","quantity":1},{"id":"sucre","quantity":1},{"id":"beurre","quantity":1}]},"yaourt-fruits-et-granola":{"image":"🛋️","ingredients":[{"id":"yaourt","quantity":1},{"id":"flocon-avoine","quantity":1},{"id":"miel","quantity":1},{"id":"fraise","quantity":1},{"id":"amande","quantity":1}]},"smoothie-banane-fraise":{"image":"🛏️","ingredients":[{"id":"banane","quantity":1},{"id":"fraise","quantity":1},{"id":"lait","quantity":1}]},"smoothie-mangue-coco":{"image":"🪞","ingredients":[{"id":"mangue","quantity":1},{"id":"lait-coco","quantity":1},{"id":"banane","quantity":1}]},"smoothie-kiwi-pomme":{"image":"🪟","ingredients":[{"id":"kiwi","quantity":2},{"id":"pomme","quantity":1},{"id":"yaourt","quantity":1}]},"compote-de-pommes":{"image":"🧹","ingredients":[{"id":"pomme","quantity":4},{"id":"sucre","quantity":1},{"id":"cannelle","quantity":1}]},"compote-pomme-poire":{"image":"🪠","ingredients":[{"id":"pomme","quantity":2},{"id":"poire","quantity":2},{"id":"vanille","quantity":1}]},"tartines-beurre-confiture":{"image":"🚿","ingredients":[{"id":"pain","quantity":1},{"id":"beurre","quantity":1},{"id":"confiture","quantity":1}]},"pudding-de-chia":{"image":"🚰","ingredients":[{"id":"chia","quantity":1},{"id":"lait","quantity":1},{"id":"miel","quantity":1},{"id":"myrtille","quantity":1}]},"fromage-blanc-miel-noix":{"image":"🛶","ingredients":[{"id":"fromage-blanc","quantity":1},{"id":"miel","quantity":1},{"id":"noix","quantity":1}]},"barres-d-avoine-aux-dattes":{"image":"⛵","ingredients":[{"id":"flocon-avoine","quantity":1},{"id":"datte","quantity":1},{"id":"cacahuete","quantity":1},{"id":"miel","quantity":1}]},"gateau-au-yaourt":{"image":"🚤","ingredients":[{"id":"yaourt","quantity":1},{"id":"farine","quantity":1},{"id":"oeuf","quantity":3},{"id":"sucre","quantity":1},{"id":"huile-neutre","quantity":1},{"id":"levure","quantity":1}]},"gateau-au-chocolat":{"image":"🛳️","ingredients":[{"id":"chocolat","quantity":1},{"id":"beurre","quantity":1},{"id":"oeuf","quantity":3},{"id":"farine","quantity":1},{"id":"sucre","quantity":1}]},"fondant-au-chocolat":{"image":"🚢","ingredients":[{"id":"chocolat","quantity":1},{"id":"beurre","quantity":1},{"id":"oeuf","quantity":3},{"id":"farine","quantity":1},{"id":"sucre","quantity":1}]},"brownies-aux-noix":{"image":"🛥️","ingredients":[{"id":"chocolat","quantity":1},{"id":"beurre","quantity":1},{"id":"oeuf","quantity":2},{"id":"farine","quantity":1},{"id":"sucre","quantity":1},{"id":"noix","quantity":1}]},"cookies-au-chocolat":{"image":"⛴️","ingredients":[{"id":"farine","quantity":1},{"id":"beurre","quantity":1},{"id":"oeuf","quantity":1},{"id":"sucre","quantity":1},{"id":"chocolat","quantity":1},{"id":"levure","quantity":1}]},"cookies-aux-noisettes":{"image":"🚲","ingredients":[{"id":"farine","quantity":1},{"id":"beurre","quantity":1},{"id":"oeuf","quantity":1},{"id":"sucre","quantity":1},{"id":"noisette","quantity":1},{"id":"chocolat","quantity":1}]},"banana-bread":{"image":"🛴","ingredients":[{"id":"banane","quantity":3},{"id":"farine","quantity":1},{"id":"oeuf","quantity":2},{"id":"beurre","quantity":1},{"id":"sucre","quantity":1},{"id":"levure","quantity":1}]},"cake-au-citron":{"image":"🛵","ingredients":[{"id":"farine","quantity":1},{"id":"oeuf","quantity":3},{"id":"beurre","quantity":1},{"id":"sucre","quantity":1},{"id":"citron","quantity":2},{"id":"levure","quantity":1}]},"cake-aux-fruits-secs":{"image":"🏍️","ingredients":[{"id":"farine","quantity":1},{"id":"oeuf","quantity":3},{"id":"beurre","quantity":1},{"id":"sucre","quantity":1},{"id":"raisin-sec","quantity":1},{"id":"abricot","quantity":1},{"id":"levure","quantity":1}]},"muffins-aux-myrtilles":{"image":"🚗","ingredients":[{"id":"farine","quantity":1},{"id":"oeuf","quantity":2},{"id":"lait","quantity":1},{"id":"beurre","quantity":1},{"id":"sucre","quantity":1},{"id":"myrtille","quantity":1},{"id":"levure","quantity":1}]},"muffins-au-chocolat":{"image":"🚕","ingredients":[{"id":"farine","quantity":1},{"id":"oeuf","quantity":2},{"id":"lait","quantity":1},{"id":"beurre","quantity":1},{"id":"sucre","quantity":1},{"id":"chocolat","quantity":1},{"id":"levure","quantity":1}]},"crumble-aux-pommes":{"image":"🚙","ingredients":[{"id":"pomme","quantity":4},{"id":"farine","quantity":1},{"id":"beurre","quantity":1},{"id":"sucre","quantity":1},{"id":"cannelle","quantity":1}]},"crumble-poire-chocolat":{"image":"🚌","ingredients":[{"id":"poire","quantity":3},{"id":"chocolat","quantity":1},{"id":"farine","quantity":1},{"id":"beurre","quantity":1},{"id":"sucre","quantity":1}]},"crumble-aux-fruits-rouges":{"image":"🚎","ingredients":[{"id":"fraise","quantity":1},{"id":"framboise","quantity":1},{"id":"myrtille","quantity":1},{"id":"farine","quantity":1},{"id":"beurre","quantity":1},{"id":"sucre","quantity":1}]},"tarte-aux-pommes":{"image":"🚐","ingredients":[{"id":"pate-brisee","quantity":1},{"id":"pomme","quantity":4},{"id":"sucre","quantity":1},{"id":"beurre","quantity":1}]},"tarte-aux-poires-amandine":{"image":"🚑","ingredients":[{"id":"pate-brisee","quantity":1},{"id":"poire","quantity":3},{"id":"amande","quantity":1},{"id":"oeuf","quantity":2},{"id":"beurre","quantity":1},{"id":"sucre","quantity":1}]},"tarte-au-citron":{"image":"🚒","ingredients":[{"id":"pate-brisee","quantity":1},{"id":"citron","quantity":3},{"id":"oeuf","quantity":3},{"id":"sucre","quantity":1},{"id":"beurre","quantity":1}]},"tarte-aux-fraises":{"image":"🚚","ingredients":[{"id":"pate-brisee","quantity":1},{"id":"fraise","quantity":1},{"id":"lait","quantity":1},{"id":"oeuf","quantity":2},{"id":"sucre","quantity":1},{"id":"maizena","quantity":1},{"id":"vanille","quantity":1}]},"clafoutis-aux-cerises":{"image":"🚛","ingredients":[{"id":"cerise","quantity":1},{"id":"farine","quantity":1},{"id":"oeuf","quantity":3},{"id":"lait","quantity":1},{"id":"sucre","quantity":1},{"id":"beurre","quantity":1}]},"clafoutis-aux-peches":{"image":"🚜","ingredients":[{"id":"peche","quantity":3},{"id":"farine","quantity":1},{"id":"oeuf","quantity":3},{"id":"lait","quantity":1},{"id":"sucre","quantity":1}]},"mousse-au-chocolat":{"image":"🏎️","ingredients":[{"id":"chocolat","quantity":1},{"id":"oeuf","quantity":3},{"id":"sucre","quantity":1}]},"riz-au-lait":{"image":"🛺","ingredients":[{"id":"riz","quantity":1},{"id":"lait","quantity":1},{"id":"sucre","quantity":1},{"id":"vanille","quantity":1}]},"semoule-au-lait":{"image":"🚂","ingredients":[{"id":"semoule","quantity":1},{"id":"lait","quantity":1},{"id":"sucre","quantity":1},{"id":"vanille","quantity":1}]},"creme-a-la-vanille":{"image":"🚃","ingredients":[{"id":"lait","quantity":1},{"id":"oeuf","quantity":2},{"id":"sucre","quantity":1},{"id":"maizena","quantity":1},{"id":"vanille","quantity":1}]},"creme-au-chocolat":{"image":"🚄","ingredients":[{"id":"lait","quantity":1},{"id":"chocolat","quantity":1},{"id":"sucre","quantity":1},{"id":"maizena","quantity":1}]},"creme-brulee":{"image":"🚅","ingredients":[{"id":"creme","quantity":1},{"id":"oeuf","quantity":3},{"id":"sucre","quantity":1},{"id":"vanille","quantity":1}]},"panna-cotta":{"image":"🚆","ingredients":[{"id":"creme","quantity":1},{"id":"sucre","quantity":1},{"id":"gelatine","quantity":1},{"id":"vanille","quantity":1}]},"tiramisu":{"image":"🚇","ingredients":[{"id":"mascarpone","quantity":1},{"id":"oeuf","quantity":3},{"id":"sucre","quantity":1},{"id":"cafe","quantity":1},{"id":"biscuit-cuillere","quantity":1},{"id":"cacao","quantity":1}]},"cheesecake-sans-cuisson":{"image":"🚈","ingredients":[{"id":"biscuit","quantity":1},{"id":"beurre","quantity":1},{"id":"fromage-blanc","quantity":1},{"id":"creme","quantity":1},{"id":"sucre","quantity":1},{"id":"gelatine","quantity":1},{"id":"citron","quantity":1}]},"madeleines":{"image":"🚉","ingredients":[{"id":"farine","quantity":1},{"id":"oeuf","quantity":2},{"id":"beurre","quantity":1},{"id":"sucre","quantity":1},{"id":"levure","quantity":1},{"id":"citron","quantity":1}]},"financiers":{"image":"🚊","ingredients":[{"id":"amande","quantity":1},{"id":"farine","quantity":1},{"id":"oeuf","quantity":3},{"id":"beurre","quantity":1},{"id":"sucre-glace","quantity":1}]},"sables":{"image":"🚝","ingredients":[{"id":"farine","quantity":1},{"id":"beurre","quantity":1},{"id":"sucre","quantity":1},{"id":"oeuf","quantity":1},{"id":"vanille","quantity":1}]},"rochers-coco":{"image":"🚞","ingredients":[{"id":"noix-coco","quantity":1},{"id":"oeuf","quantity":2},{"id":"sucre","quantity":1}]},"salade-de-fruits":{"image":"🚋","ingredients":[{"id":"pomme","quantity":1},{"id":"banane","quantity":1},{"id":"orange","quantity":1},{"id":"kiwi","quantity":2},{"id":"raisin","quantity":1}]},"pommes-au-four":{"image":"🚀","ingredients":[{"id":"pomme","quantity":2},{"id":"miel","quantity":1},{"id":"beurre","quantity":1},{"id":"cannelle","quantity":1}]},"poires-au-chocolat":{"image":"🛸","ingredients":[{"id":"poire","quantity":2},{"id":"chocolat","quantity":1},{"id":"creme","quantity":1}]},"ananas-roti":{"image":"🚁","ingredients":[{"id":"ananas","quantity":1},{"id":"beurre","quantity":1},{"id":"sucre","quantity":1},{"id":"vanille","quantity":1}]},"peches-roties-au-miel":{"image":"✈️","ingredients":[{"id":"peche","quantity":2},{"id":"miel","quantity":1},{"id":"beurre","quantity":1},{"id":"amande","quantity":1}]},"flan-patissier":{"image":"🛩️","ingredients":[{"id":"pate-brisee","quantity":1},{"id":"lait","quantity":1},{"id":"oeuf","quantity":3},{"id":"sucre","quantity":1},{"id":"maizena","quantity":1},{"id":"vanille","quantity":1}]},"iles-flottantes":{"image":"🛫","ingredients":[{"id":"lait","quantity":1},{"id":"oeuf","quantity":3},{"id":"sucre","quantity":1},{"id":"vanille","quantity":1}]},"gateau-de-semoule":{"image":"🛬","ingredients":[{"id":"semoule","quantity":1},{"id":"lait","quantity":1},{"id":"oeuf","quantity":2},{"id":"sucre","quantity":1},{"id":"raisin-sec","quantity":1},{"id":"vanille","quantity":1}]},"oranges-a-la-cannelle":{"image":"🪂","ingredients":[{"id":"orange","quantity":3},{"id":"cannelle","quantity":1},{"id":"eau-fleur-oranger","quantity":1},{"id":"sucre","quantity":1}]},"pain-maison":{"image":"🎠","ingredients":[{"id":"farine","quantity":1},{"id":"levure-boulanger","quantity":1},{"id":"sel","quantity":1}]},"focaccia":{"image":"🎡","ingredients":[{"id":"farine","quantity":1},{"id":"levure-boulanger","quantity":1},{"id":"huile-olive","quantity":1},{"id":"romarin","quantity":1},{"id":"sel","quantity":1}]},"pain-aux-noix":{"image":"🎢","ingredients":[{"id":"farine","quantity":1},{"id":"levure-boulanger","quantity":1},{"id":"noix","quantity":1},{"id":"sel","quantity":1}]},"sauce-bechamel":{"image":"🛝","ingredients":[{"id":"lait","quantity":1},{"id":"beurre","quantity":1},{"id":"farine","quantity":1},{"id":"muscade","quantity":1},{"id":"sel","quantity":1}]},"sauce-tomate-maison":{"image":"🏐","ingredients":[{"id":"tomate","quantity":5},{"id":"oignon","quantity":1},{"id":"ail","quantity":1},{"id":"huile-olive","quantity":1},{"id":"basilic","quantity":1},{"id":"sel","quantity":1}]},"pesto-maison-aux-amandes":{"image":"🏀","ingredients":[{"id":"basilic","quantity":1},{"id":"amande","quantity":1},{"id":"parmesan","quantity":1},{"id":"ail","quantity":1},{"id":"huile-olive","quantity":1}]},"sauce-au-yaourt":{"image":"⚽","ingredients":[{"id":"yaourt","quantity":1},{"id":"citron","quantity":1},{"id":"ciboulette","quantity":1},{"id":"sel","quantity":1}]},"mayonnaise-maison":{"image":"⚾","ingredients":[{"id":"oeuf","quantity":1},{"id":"huile-neutre","quantity":1},{"id":"moutarde","quantity":1},{"id":"vinaigre","quantity":1},{"id":"sel","quantity":1}]},"vinaigrette":{"image":"🥎","ingredients":[{"id":"moutarde","quantity":1},{"id":"vinaigre","quantity":1},{"id":"huile-olive","quantity":1},{"id":"sel","quantity":1},{"id":"poivre","quantity":1}]},"tapenade":{"image":"🏈","ingredients":[{"id":"olive","quantity":1},{"id":"anchois","quantity":1},{"id":"capre","quantity":1},{"id":"ail","quantity":1},{"id":"huile-olive","quantity":1}]},"sauce-aux-champignons":{"image":"🏉","ingredients":[{"id":"champignon","quantity":1},{"id":"creme","quantity":1},{"id":"echalote","quantity":1},{"id":"beurre","quantity":1}]},"sauce-au-poivre":{"image":"🎾","ingredients":[{"id":"creme","quantity":1},{"id":"poivre","quantity":1},{"id":"bouillon","quantity":1},{"id":"beurre","quantity":1}]},"sauce-au-roquefort":{"image":"🥏","ingredients":[{"id":"roquefort","quantity":1},{"id":"creme","quantity":1}]},"camembert-roti":{"image":"🏓","ingredients":[{"id":"camembert","quantity":1},{"id":"miel","quantity":1},{"id":"thym","quantity":1},{"id":"pain","quantity":1}]},"puree-de-pois-chiches":{"image":"🏸","ingredients":[{"id":"pois-chiche","quantity":1},{"id":"huile-olive","quantity":1},{"id":"citron","quantity":1},{"id":"ail","quantity":1}]},"salade-pasteque-feta":{"image":"🏒","ingredients":[{"id":"pasteque","quantity":1},{"id":"feta","quantity":1},{"id":"menthe","quantity":1},{"id":"huile-olive","quantity":1},{"id":"citron","quantity":1}]},"sauce-tomate-au-concentre":{"image":"🏑","ingredients":[{"id":"concentre-tomate","quantity":1},{"id":"oignon","quantity":1},{"id":"ail","quantity":1},{"id":"huile-olive","quantity":1},{"id":"bouillon","quantity":1},{"id":"herbes-provence","quantity":1}]},"riz-au-curcuma":{"image":"🥍","ingredients":[{"id":"riz","quantity":1},{"id":"curcuma","quantity":1},{"id":"oignon","quantity":1},{"id":"bouillon","quantity":1},{"id":"huile-olive","quantity":1}]},"pancakes-au-sirop-d-erable":{"image":"🏏","ingredients":[{"id":"farine","quantity":1},{"id":"oeuf","quantity":2},{"id":"lait","quantity":1},{"id":"levure","quantity":1},{"id":"beurre","quantity":1},{"id":"sirop-erable","quantity":1}]}};
const legacyImages={"tomate":"🍅","carotte":"🥕","pomme-terre":"🥔","oignon":"🧅","ail":"🧄","aubergine":"🍆","concombre":"🥒","courgette":"🪴","poivron":"🫑","brocoli":"🥦","salade":"🥬","champignon":"🍄","mais":"🌽","avocat":"🥑","potiron":"🎃","patate-douce":"🍠","poireau":"🎋","epinard":"🍃","chou-fleur":"🌼","chou":"☘️","chou-rouge":"💜","chou-bruxelles":"🌳","haricot-vert":"🌿","petit-pois":"🫛","celeri":"🌾","navet":"⚪","radis":"🌺","betterave":"🪷","asperge":"🎍","fenouil":"🌴","endive":"💮","artichaut":"🌵","echalote":"🪻","gingembre":"🫚","citron":"🍋","citron-vert":"🍋‍🟩","pomme":"🍎","poire":"🍐","banane":"🍌","fraise":"🍓","framboise":"🩷","myrtille":"🫐","orange":"🍊","ananas":"🍍","mangue":"🥭","peche":"🍑","abricot":"🌅","raisin":"🍇","melon":"🍈","pasteque":"🍉","kiwi":"🥝","cerise":"🍒","datte":"🏜️","raisin-sec":"🟣","olive":"🫒","noix":"🌰","amande":"🌸","noisette":"🐿️","cacahuete":"🥜","noix-cajou":"🌙","noix-coco":"🥥","sesame":"⚫","chia":"🟤","oeuf":"🥚","lait":"🥛","beurre":"🧈","creme":"🍶","yaourt":"🫙","fromage-blanc":"🏔️","emmental":"🧀","parmesan":"🔺","mozzarella":"🤍","feta":"🇬🇷","chevre":"🐐","roquefort":"🔵","reblochon":"🏞️","raclette":"🟨","mascarpone":"🧁","ricotta":"🕊️","camembert":"🌕","poulet":"🍗","boeuf":"🥩","boeuf-hache":"🐂","porc":"🐖","veau":"🐄","agneau":"🐑","dinde":"🦃","canard":"🦆","jambon":"🐷","lardon":"🥓","saucisse":"🌭","chorizo":"🔥","saumon":"🐟","saumon-fume":"🌊","thon":"🥫","cabillaud":"🎣","sardine":"🐠","crevette":"🦐","moule":"🐚","calamar":"🦑","tofu":"⬜","lentille":"🟢","lentille-corail":"🟠","pois-chiche":"🟡","haricot-rouge":"🔴","haricot-blanc":"⚙️","pates":"🍝","riz":"🍚","riz-risotto":"🍘","semoule":"🏖️","quinoa":"🍂","boulgour":"🌻","nouille":"🍜","vermicelle-riz":"🪢","gnocchi":"🪨","farine":"🌨️","farine-sarrasin":"🍁","flocon-avoine":"🐎","pain":"🍞","pain-mie":"📦","baguette":"🥖","tortilla":"🫓","pain-burger":"🍔","pate-brisee":"🥧","pate-feuilletee":"🥐","pate-pizza":"🍕","feuille-lasagne":"📜","feuille-brick":"📄","feuille-riz":"📃","chapelure":"🪵","tomate-concassee":"🧱","concentre-tomate":"🧯","lait-coco":"🏝️","bouillon":"🧊","huile-olive":"🏺","huile-neutre":"💧","vinaigre":"🧪","vinaigre-balsamique":"🖤","moutarde":"🟧","mayonnaise":"🟫","sauce-soja":"🍱","pesto":"💚","tahini":"🪔","sel":"🧂","poivre":"🌑","paprika":"❤️","curry":"🍛","cumin":"🧭","curcuma":"☀️","cannelle":"🪶","muscade":"🔸","piment":"🌶️","herbes-provence":"💐","basilic":"🌱","persil":"🍀","coriandre":"🌲","menthe":"❄️","ciboulette":"🪸","aneth":"🦚","thym":"🌷","romarin":"🌹","laurier":"🏅","sucre":"🍬","sucre-glace":"☁️","miel":"🍯","sirop-erable":"🇨🇦","chocolat":"🍫","cacao":"🤎","vanille":"🪄","levure":"🎈","levure-boulanger":"🫧","maizena":"🌫️","gelatine":"🔹","cafe":"☕","biscuit":"🍪","biscuit-cuillere":"🥄","confiture":"🎀","vin-blanc":"🥂","vin-rouge":"🍷","cidre":"🍺","cornichon":"🦎","capre":"🪺","anchois":"⚓","eau-fleur-oranger":"🏵️"};

function slug(name){return name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');}
const optional=new Set('sel poivre huile-olive huile-neutre vinaigre vinaigre-balsamique herbes-provence persil coriandre ciboulette aneth thym romarin laurier muscade'.split(' '));
const basic={
 'salade-de-tomates':['tomate'], 'salade-de-lentilles':['lentille'], 'salade-de-quinoa':['quinoa','tomate','concombre'],
 'omelette-nature':['oeuf'], 'ufs-brouilles':['oeuf'], 'ufs-au-plat':['oeuf'],
 'puree-de-pommes-de-terre':['pomme-terre','lait'], 'compote-de-pommes':['pomme'],
 'salade-grecque':['tomate','concombre','feta','olive'], 'spaghetti-a-la-tomate':['pates','tomate-concassee'],
};
function baseRecipe(id,nom,category,requirements){
 if(basic[id])return requirements.filter(r=>basic[id].includes(r.id));
 const text=slug(nom);
 let result=requirements.filter(r=>!optional.has(r.id)||text.includes(r.id)||/sauce|vinaigrette|pesto|pain|pate-a|mayonnaise|houmous/.test(text));
 if(/Soupes/.test(category))result=result.filter(r=>!['creme','beurre','oignon','ail'].includes(r.id)||text.includes(r.id));
 if(/Salades/.test(category))result=result.filter(r=>!['oignon','ail','citron','moutarde','basilic','menthe'].includes(r.id)||text.includes(r.id));
 if(!/Desserts|Petits déjeuners|Pains, sauces/.test(category))result=result.filter(r=>!['beurre','ail'].includes(r.id)||text.includes(r.id));
 return result.length?result:requirements;
}
function dishEmoji(nom,category,requirements){
 const text=slug(nom);let emoji;
 const rules=[[/pizza/,'🍕'],[/burger/,'🍔'],[/sandwich|croque|tartine/,'🥪'],[/crepe|pancake/,'🥞'],[/gaufre/,'🧇'],[/omelette|oeuf/,'🍳'],[/salade|taboule/,'🥗'],[/soupe|veloute|bouillon/,'🍲'],[/pates|spaghetti|tagliatelle|lasagne|macaroni|penne/,'🍝'],[/nouille|ramen/,'🍜'],[/riz|risotto/,'🍚'],[/curry/,'🍛'],[/taco/,'🌮'],[/wrap|burrito/,'🌯'],[/quiche|tarte|tourte/,'🥧'],[/cookie|biscuit/,'🍪'],[/muffin|cupcake/,'🧁'],[/gateau|cake|fondant|brownie|tiramisu/,'🍰'],[/creme|flan|panna|mousse/,'🍮'],[/glace|sorbet/,'🍨'],[/pain|brioche/,'🍞'],[/compote/,'🍎'],[/sauce|pesto|vinaigrette/,'🫙']];
 for(const [re,value] of rules)if(re.test(text)){emoji=value;break;}
 emoji=emoji||(/Poissons/.test(category)?'🐟':/Viandes/.test(category)?'🥩':/Desserts/.test(category)?'🍰':/Légumes/.test(category)?'🥬':'🥘');
 const named=requirements.find(r=>text.includes(r.id)&&!['pates','riz','oeuf','pain','farine','lait','creme'].includes(r.id));
 const accent=named&&ingredients.find(i=>i.id===named.id)?.image;
 return emoji+(accent&&accent!==emoji?accent:'');
}
const plats=Object.entries(groups).flatMap(([category,rows])=>rows.trim().split('\n').map(row=>{const [nom,requirements]=row.split('|');const id=slug(nom);const full=requirements.split(',').map(token=>{const [id,q]=token.split(':');return {id,quantity:Number(q||1)};});const required=baseRecipe(id,nom,category,full);return {id,nom,image:dishEmoji(nom,category,required),category,kind:'principal',servings:2,enabled:false,ingredients:required};}));

const patch23Ingredients=["brioche","pate-tartiner","tartinade-thon","jambon-sec","saucisson","nugget","batonnet-poisson","steak","ketchup","poisson","viande","fromage","bonbon"];
for(const [id,nom,image] of [["brioche","Brioche","🍞"],["pate-tartiner","Pâte à tartiner","🍫"],["tartinade-thon","Tartinade de thon","🐟"],["jambon-sec","Jambon sec","🥩"],["saucisson","Saucisson","🥩"],["nugget","Nuggets","🍗"],["batonnet-poisson","Bâtonnets de poisson","🐟"],["steak","Steak","🥩"],["ketchup","Ketchup","🍅"],["poisson","Poisson","🐟"],["viande","Viande","🥩"],["fromage","Fromage","🧀"],["bonbon","Bonbons","🍬"]])ingredients.push({id,nom,image,typeQuantite:'ENUM',stock:0,target:4,enabled:false,kind:'principal'});
const patch23Dishes=[];
for(const row of "Sandwich thon mayonnaise|thon,mayonnaise,pain\nSandwich à la tartinade de thon|tartinade-thon,pain\nSandwich jambon fromage|pain,jambon,fromage\nSandwich jambon sec beurre|pain,jambon-sec,beurre\nSandwich saucisson cornichons|pain,saucisson,cornichon\nCroque jambon fromage simple|pain-mie,jambon,emmental\nCroque au thon et fromage|pain-mie,thon,emmental\nCroque banane chocolat|pain-mie,banane,chocolat\nTartines beurre chocolat|pain,beurre,chocolat\nTartines à la pâte à tartiner|pain,pate-tartiner\nBrioche à la pâte à tartiner|brioche,pate-tartiner\nBrioche perdue|brioche,oeuf:2,lait,beurre\nPain perdu sans sucre ajouté|pain,oeuf:2,lait,beurre\nBurger steak fromage ketchup|pain-burger,steak,fromage,ketchup\nBurger nuggets mayonnaise|pain-burger,nugget,mayonnaise\nBurger poisson fromage|pain-burger,batonnet-poisson,fromage\nPâtes beurre fromage râpé|pates,beurre,emmental\nPâtes au thon et à la crème|pates,thon,creme\nPâtes jambon crème fromage|pates,jambon,creme,emmental\nPâtes champignons crème|pates,champignon,creme\nPâtes viande crème|pates,viande,creme\nRiz au thon|riz,thon\nRiz jambon fromage|riz,jambon,emmental\nRiz aux champignons et à la crème|riz,champignon,creme\nRiz au bouillon cube|riz,bouillon\nRiz aux œufs simple|riz,oeuf:2\nSemoule au beurre|semoule,beurre\nSemoule au thon|semoule,thon\nSemoule jambon fromage|semoule,jambon,emmental\nSemoule au bouillon cube|semoule,bouillon\nNuggets et riz|nugget,riz\nNuggets et purée|nugget,pomme-terre:4,lait,beurre\nBâtonnets de poisson et riz|batonnet-poisson,riz\nBâtonnets de poisson et pommes de terre|batonnet-poisson,pomme-terre:4\nSteak et pommes de terre|steak,pomme-terre:4\nSteak et pâtes|steak,pates\nPoisson à la crème et riz|poisson,creme,riz\nPoisson et semoule|poisson,semoule\nViande et riz|viande,riz\nPommes de terre jambon fromage|pomme-terre:4,jambon,emmental\nGratin pommes de terre crème fromage|pomme-terre:4,creme,emmental\nPommes de terre et mayonnaise|pomme-terre:4,mayonnaise\nŒufs jambon fromage|oeuf:4,jambon,emmental\nOmelette champignons crème simple|oeuf:4,champignon,creme\nŒufs brouillés au fromage|oeuf:4,emmental\nBanane au chocolat|banane:2,chocolat\nBanane à la pâte à tartiner|banane:2,pate-tartiner\nLait chocolaté sans sucre ajouté|lait,chocolat\nBonbons seuls|bonbon\nChocolat à croquer|chocolat\nYaourt nature seul|yaourt\nFromage blanc nature seul|fromage-blanc\nFromage à déguster|fromage\nSaucisson à déguster|saucisson\nBrioche nature|brioche".split('\n')){const [nom,requirements]=row.split('|'),id=slug(nom);if(plats.some(d=>d.id===id))continue;patch23Dishes.push(id);const required=requirements.split(',').map(token=>{const [id,q]=token.split(':');return {id,quantity:Number(q||1)};});plats.push({id,nom,image:required.length===1?ingredients.find(i=>i.id===required[0].id).image:dishEmoji(nom,'Vos idées simples',required),category:'Vos idées simples',kind:'principal',enabled:false,servings:required.length===1?1:2,ingredients:required});}
const catalogue={version:2,catalogRevision:4,ingredients,plats};
Object.defineProperties(catalogue,{patch23Ingredients:{value:patch23Ingredients},patch23Dishes:{value:patch23Dishes},legacyDishes:{value:legacyDishes},legacyImages:{value:legacyImages}});
if(typeof module!=='undefined')module.exports=catalogue;else root.DinoCatalogue=catalogue;
})(globalThis);
