# Dino Frigo

Application Android locale et version web installable (PWA), en français.

## Android : APK prêt à installer

Le fichier signé `livraison/Dino-Frigo-2.3.0.apk` s’installe directement sur Android 7 ou supérieur. Il intègre le catalogue et les polices, fonctionne hors connexion et ne nécessite aucun serveur ni compte. Voir [ANDROID-INSTALLATION.md](ANDROID-INSTALLATION.md).

La version Android utilise Capacitor, une sauvegarde native Preferences en plus de la copie WebView, l’export via Filesystem et le menu de partage Android, et le bouton Retour système. Les images importées restent intégrées aux données locales. Les photos externes fournies par URL nécessitent une connexion.

Pour recompiler avec Node.js 22+, Java 21 et le SDK Android 36 / Build Tools 36 : `npm ci` puis `npm run android:build`. La clé de mise à jour est conservée dans `.android-signing`, ignoré par Git et exclu de l’APK. Ne pas perdre cette clé : les mises à jour doivent être signées avec la même clé pour conserver les données.

## Lancer et vérifier

Avec Node.js 22 ou supérieur (lancer `npm ci` à la première utilisation) :

```sh
npm start
npm test
npm run build
```

Ouvrir http://localhost:3000. `npm run build` prépare le dossier `dist` pour un hébergement statique HTTPS et génère [CATALOGUE.md](CATALOGUE.md) et [catalogue-import.js](catalogue-import.js).

## Catalogue et activation

- **358 idées et 197 ingrédients**, avec des emojis alimentaires adaptés, éventuellement partagés ou combinés. Le catalogue inclut plats, entrées, desserts, sauces, accompagnements et aliments à consommer seuls.
- **Aucun stock initial et aucun plat activé** au premier démarrage.
- **Configuration** affiche le catalogue avec recherche par plat ou ingrédient, filtres par famille et activation, interrupteurs et activation/désactivation des résultats filtrés.
- Les ingrédients actifs sont l’union des ingrédients des plats activés. Un ingrédient partagé reste visible tant qu’au moins un plat activé l’utilise.
- Chaque élément est principal, occasionnel ou bonus. Les nouveaux éléments sont principaux par défaut. Mes plats, Stock et Courses proposent deux boutons pour inclure indépendamment les occasionnels et les bonus. L’importance compte les éléments sélectionnés dans le périmètre affiché qui utilisent chaque ingrédient.
- L’onglet Ingrédients de Configuration permet une activation directe, indépendante des plats. Les ingrédients requis par un plat activé restent actifs. Leur présence dans une liste dépend du type du plat ou de leur activation directe.
- Configuration peut chercher dans tout le catalogue ou proposer les idées non activées dont tous les ingrédients sont déjà activés, sans condition de stock.
- Désactiver un plat masque les ingrédients devenus inutiles, tout en conservant leurs quantités réelles pour une réactivation ultérieure.
- Les recettes créées dans Édition commencent désactivées. Leur modification conserve leur activation.
- Les compositions proposent des bases simples pour **2 portions**, modifiables ; elles ne constituent pas des fiches de cuisson complètes. Dans l’éditeur, les ingrédients sont triés alphabétiquement et recherchables sans perdre les sélections masquées.

## Quantités et données

Les ingrédients comptables utilisent des unités entières ; les autres utilisent ABSENT=0, PEU=1, MOYEN=2, BEAUCOUP=3, ENORMEMENT=4. PEU indique qu’une petite réserve est nécessaire, pas un dosage en grammes. Cuisiner retire ces valeurs après confirmation ; les niveaux qualitatifs peuvent être ajustés manuellement ensuite.

Le tri des courses compare la proportion du stock idéal ou le nombre de recettes utilisant chaque ingrédient, du plus important au moins important. Les boutons +/− changent uniquement la quantité et sa barre. L’ordre reste fixe jusqu’à Actualiser, un changement de filtre ou la prochaine ouverture de la page. La copie respecte la recherche et les filtres occasionnel et bonus et inclut les ingrédients sous leur stock idéal.

La version 2 utilise `dino-data-v2` dans localStorage. L’ancien catalogue de démonstration et ses faux stocks ne sont jamais chargés automatiquement. Les anciennes données `dino-data` restent intactes dans le navigateur ; une ancienne sauvegarde peut être importée volontairement.

## Import JavaScript et export

Le fichier JS contient `export default` puis un objet **JSON strict** : clés entre guillemets, aucune fonction ni expression JavaScript. `const catalogue = {…};` et `module.exports = {…};` sont aussi acceptés avec un objet JSON. Aucun code importé n’est exécuté.

```js
export default {
  "version": 2,
  "ingredients": [
    {"id":"oeuf","nom":"Œufs","image":"🥚","typeQuantite":"NOMBRE","stock":0,"target":12}
  ],
  "plats": [
    {"id":"omelette","nom":"Omelette","image":"🍳","enabled":false,"category":"Œufs","servings":2,"ingredients":[{"id":"oeuf","quantity":4}]}
  ]
};
```

`enabled: true` active un plat ou active directement un ingrédient. Un champ absent vaut `false`. `kind` vaut `principal`, `occasionnel` ou `bonus`, avec `principal` par défaut. Les identifiants, références, quantités, métadonnées et illustrations sont validés. L’import remplace le catalogue, la sélection et le stock après confirmation. L’export conserve ces données pour un transfert ou une sauvegarde.

La configuration personnelle importable est dans `livraison/Dino-Frigo-ma-configuration-2.3.json` : 34 ingrédients directement activés, 70 éléments sélectionnés et tous les stocks à zéro. Les recettes sélectionnées utilisent uniquement les ingrédients indiqués par l’utilisateur. Pain et baguette sont unifiés ; yaourt et fromage blanc sont sélectionnés seuls comme bonus. Voir [MES-RECETTES.md](MES-RECETTES.md). Ce fichier est facultatif et n’est jamais appliqué automatiquement à l’installation.

L’édition accepte un à trois emojis ou des images personnalisées (PNG/JPEG/WebP/GIF, maximum 3 Mo). Le stockage local dépend du navigateur. La mise à jour conserve les stocks et activations ; elle simplifie les compositions du catalogue restées inchangées et conserve les recettes personnalisées.

## Installation

Pour Android, installer l’APK : aucun hébergement n’est nécessaire. [ANDROID-INSTALLATION.md](ANDROID-INSTALLATION.md) contient le guide. Pour la variante web/PWA uniquement, voir [INSTALLATION.md](INSTALLATION.md) : elle nécessite une origine HTTPS pour l’installation dans un navigateur. Aucun hébergement ni store n’est requis pour l’APK local.

Le stock et la sélection restent locaux. Pas de compte ni de synchronisation automatique. Dans l’APK, les fichiers et les polices sont embarqués ; dans la PWA, ils sont mis en cache après un premier chargement complet. Seules les images externes nécessitent une connexion.
