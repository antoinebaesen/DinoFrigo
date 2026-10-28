# 🦕 Dino Frigo

**Dino Frigo aide à savoir quoi préparer avec ce que l’on a et quoi acheter pour ses prochains repas.** L’application réunit un catalogue d’idées, un stock d’ingrédients, une liste de courses et un éditeur de recettes personnelles, dans une interface en français.

Elle est disponible comme **application Android** et comme **application web installable (PWA)**. Les données restent sur l’appareil : aucun compte ni synchronisation automatique ne sont nécessaires.

## Présentation et usages

### Choisir les plats qui correspondent à ses habitudes

Le catalogue contient **358 idées et 197 ingrédients** : plats, entrées, desserts, sauces, accompagnements et aliments à consommer seuls. Au premier démarrage, aucun plat n’est activé et tous les stocks sont à zéro.

Dans **Configuration**, active les idées qui t’intéressent. Recherche un plat ou un ingrédient, filtre par famille ou par état d’activation, puis active individuellement les résultats ou toute une sélection filtrée.

Les ingrédients utiles apparaissent automatiquement dans **Stock** et **Courses**. Tu peux également activer un ingrédient directement, indépendamment des plats. Un ingrédient partagé reste actif tant qu’au moins un plat activé en a besoin ; désactiver un plat conserve les quantités pour une réactivation ultérieure.

Les éléments peuvent être classés **principaux**, **occasionnels** ou **bonus**. Dans Mes plats, Stock et Courses, deux filtres permettent d’inclure séparément les occasionnels et les bonus.

### Voir ce que l’on peut préparer

Renseigne les quantités disponibles dans **Stock**, puis consulte **Mes plats** pour identifier les compositions réalisables avec les réserves indiquées. Après confirmation, l’action de cuisiner retire les quantités correspondantes du stock.

Les compositions du catalogue sont des **bases simples pour deux portions**, personnalisables. Elles indiquent les ingrédients nécessaires, sans constituer des fiches de cuisson complètes.

Configuration permet aussi de découvrir les idées non activées dont tous les ingrédients font déjà partie de ta sélection, indépendamment des quantités en stock.

### Préparer ses courses

La page **Courses** rassemble les ingrédients actifs. Tu peux les trier selon leur niveau de stock par rapport à la réserve souhaitée, ou selon le nombre de plats qui les utilisent.

Les boutons **+ / −** ajustent les quantités sans déplacer immédiatement les lignes. L’ordre est recalculé avec **Actualiser**, au changement de filtre ou à la prochaine ouverture de la page. La copie de la liste respecte la recherche et les filtres ; elle inclut les ingrédients sous leur stock idéal.

### Adapter le catalogue à ses recettes

Dans **Édition**, crée ou modifie tes compositions, leur nombre de portions et leurs ingrédients. Les ingrédients sont triés alphabétiquement et peuvent être recherchés sans perdre les sélections masquées.

Une nouvelle recette commence désactivée ; modifier une recette existante conserve son activation. Pour les illustrations, tu peux choisir un à trois emojis ou importer une image PNG, JPEG, WebP ou GIF de 3 Mo maximum.

### Garder et transférer ses données

L’export conserve le catalogue, les sélections et le stock dans un fichier réimportable. Il permet de faire une sauvegarde ou de transférer ses données entre appareils.

**L’import remplace le catalogue, la sélection et le stock après confirmation.** Exporte une sauvegarde avant de remplacer tes données. Désinstaller l’application, effacer ses données ou effacer le stockage du navigateur peut supprimer les informations locales.

## Utilisation

### Première configuration

1. Ouvre **Configuration** et active les plats qui correspondent à tes habitudes.
2. Dans l’onglet **Ingrédients**, active si besoin des produits supplémentaires.
3. Ouvre **Stock** et renseigne les quantités réellement présentes.
4. Consulte **Mes plats** pour choisir une idée à préparer.
5. Utilise **Courses** pour repérer et copier les achats à prévoir.
6. Dans **Paramètres**, exporte régulièrement tes données.

### Comprendre les quantités

| Type | Fonctionnement |
| --- | --- |
| Nombre | Quantités entières, par exemple un nombre d’œufs |
| Niveau de réserve | Absent, Peu, Moyen, Beaucoup ou Énormément |

Les niveaux de réserve servent de repères : **Peu n’est pas un dosage en grammes**. Après avoir cuisiné, ajuste manuellement le stock si nécessaire pour qu’il corresponde aux réserves réelles.

### Utiliser une configuration personnelle

Le fichier facultatif **[Dino-Frigo-ma-configuration-2.3.json](livraison/Dino-Frigo-ma-configuration-2.3.json)** contient 34 ingrédients directement activés, 70 éléments sélectionnés et tous les stocks à zéro. Il n’est jamais appliqué automatiquement à l’installation.

Pour l’utiliser, passe par **Paramètres → Importer le catalogue**. Le détail de cette sélection est décrit dans [MES-RECETTES.md](MES-RECETTES.md). Le catalogue complet est présenté dans [CATALOGUE.md](CATALOGUE.md).

## Installation

### Sur Android : installer l’APK

L’application prête à installer est disponible dans **[Dino-Frigo-2.3.0.apk](livraison/Dino-Frigo-2.3.0.apk)**. Elle nécessite **Android 7.0 ou version ultérieure**.

1. Transfère l’APK sur le téléphone ou la tablette.
2. Ouvre-le depuis l’application de gestion des fichiers.
3. Si Android le demande, autorise cette source à installer des applications.
4. Termine l’installation, puis ouvre Dino Frigo.

L’APK est une **version release signée** : aucun serveur, compte ou Play Store n’est nécessaire. Le catalogue, les polices et les ressources de l’interface sont embarqués. Les images importées sont conservées dans les données ; seules les images fournies par une URL externe nécessitent une connexion.

Le bouton Retour Android ramène au tableau de bord ; depuis celui-ci, il réduit l’application. Pour les détails d’installation et de sauvegarde, voir [ANDROID-INSTALLATION.md](ANDROID-INSTALLATION.md).

### Version web et PWA

Pour lancer l’application sur un ordinateur avec **Node.js 22 ou version ultérieure** :

```sh
npm ci
npm start
```

Ouvre ensuite **http://localhost:3000** dans le navigateur.

Pour préparer la version à héberger :

```sh
npm run build
```

Le dossier **`dist/`** contient les fichiers publics à placer sur un hébergement statique HTTPS. Ouvre son adresse sur le téléphone, puis utilise la fonction d’installation du navigateur ou l’ajout à l’écran d’accueil. Le guide [INSTALLATION.md](INSTALLATION.md) détaille la variante web/PWA.

La PWA met ses ressources en cache après un premier chargement complet. Les données restent propres au navigateur et à l’adresse utilisée : changer de domaine ou d’appareil ne transfère pas les stocks. Pour transférer les données, utilise l’export et l’import.

Un test sur le réseau local en HTTP est possible avec l’adresse IP du PC, mais ne remplace pas les conditions HTTPS nécessaires à l’installation PWA complète.

### Compiler l’application Android

La chaîne de compilation fournie cible **Windows** et nécessite :

- **Node.js 22 ou version ultérieure** et npm ;
- **Java 21** ;
- le **SDK Android 36** et les **Build Tools 36.0.0**.

Depuis la racine du projet :

```sh
npm ci
npm run android:build
```

La commande prépare la distribution web, synchronise Capacitor, compile la version Android release, lance Android lint, puis signe et vérifie l’APK. Le résultat est placé dans **`livraison/`**, avec son empreinte SHA-256 et le guide d’installation.

Le script cherche le SDK via `ANDROID_HOME`, `ANDROID_SDK_ROOT` ou l’emplacement Windows standard. **`DINO_JAVA_HOME`** permet d’indiquer le dossier de Java 21 ; sans cette variable, le script utilise le chemin local prévu dans `tools/build-android.cjs`.

## Partie technique

### Technologies et organisation

L’interface est écrite en **HTML, CSS et JavaScript**, avec une logique métier séparée. **Capacitor 8** assure l’intégration Android et **esbuild** prépare la passerelle native embarquée.

| Emplacement | Rôle |
| --- | --- |
| `index.html`, `app.js` | Interface et parcours utilisateur |
| `style.css`, `mobile23.css` | Présentation et adaptation mobile |
| `logic.js` | Stock, disponibilité, filtres, validation et migrations |
| `catalogue.js` | Catalogue de référence |
| `catalogue-import.js`, `CATALOGUE.md` | Export importable et documentation générés du catalogue |
| `native-entry.js` | Stockage natif, export, partage, thème et bouton Retour Android |
| `manifest.webmanifest`, `sw.js` | Installation web et cache hors connexion |
| `tools/build.cjs` | Préparation de la distribution dans `dist/` |
| `tools/android-release.cjs`, `tools/build-android.cjs` | Compilation et signature Android |
| `android/` | Projet Android Capacitor |
| `livraison/` | APK, configuration facultative et fichiers de vérification |

### Stockage local et sauvegardes

La version actuelle utilise la clé **`dino-data-v2`** dans `localStorage`. Sur Android, **Capacitor Preferences** conserve une copie native des données en complément du stockage WebView. Le thème est également conservé localement.

L’export Android passe par **Filesystem** puis par le menu de partage du système. Les images importées restent intégrées aux données locales. Les images externes restent dépendantes de leur adresse et du réseau.

Il n’existe pas de synchronisation automatique entre appareils. Les anciennes données de démonstration `dino-data` ne sont pas chargées automatiquement ; une ancienne sauvegarde peut être importée volontairement. Les migrations conservent les stocks et activations et préservent les recettes personnalisées lors de la mise à jour des compositions standard restées inchangées.

### Modèle du catalogue et import

Les données contiennent une liste **`ingredients`** et une liste **`plats`**. Les ingrédients comptables utilisent `NOMBRE` ; les réserves qualitatives utilisent `ENUM`, avec les valeurs de 0 à 4 correspondant aux cinq niveaux.

Exemple minimal de fichier importable :

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

L’objet doit être du **JSON strict** : clés entre guillemets, aucune fonction ni expression JavaScript. L’import accepte aussi un objet JSON seul et les enveloppes `const catalogue = {…};` ou `module.exports = {…};`. **Aucun code importé n’est exécuté.** Les identifiants, références, quantités, métadonnées et illustrations sont validés.

- `enabled: true` active un plat ou active directement un ingrédient ; une valeur absente vaut `false`.
- `kind` accepte `principal`, `occasionnel` ou `bonus`, avec `principal` par défaut.
- Les ingrédients actifs proviennent des plats activés et des activations directes, en tenant compte des filtres d’affichage.
- Les niveaux qualitatifs servent à suivre une réserve, sans prétendre mesurer précisément une consommation.

### Commandes de développement

| Commande | Fonction |
| --- | --- |
| `npm start` | Lancer le serveur local sur le port 3000 |
| `npm test` | Exécuter les tests automatisés avec le lanceur de tests Node.js |
| `npm run build` | Valider le catalogue, générer sa documentation et préparer `dist/` |
| `npm run android:sync` | Synchroniser la distribution existante avec Android |
| `npm run android:build` | Préparer, compiler, contrôler et signer la livraison Android |

Après une modification des sources web, reconstruire la distribution avant une simple synchronisation Android. `npm run android:build` effectue cette reconstruction automatiquement.

### Signature et mises à jour Android

L’identifiant de l’application est **`fr.dinofrigo.app`**. Une mise à jour doit conserver cet identifiant et être signée avec la même clé pour être installée sur la version existante en conservant ses données.

Le dossier privé **`.android-signing/`** contient la clé et ses informations de signature. Il est ignoré par Git et ne doit pas être publié ni transmis avec l’APK. Conserve une sauvegarde privée de ce dossier pour pouvoir signer les futures mises à jour.

### Vérifications de la livraison

Le fichier [livraison/VERIFICATION.txt](livraison/VERIFICATION.txt) consigne les contrôles de la version 2.3.0 : compilation release, Android lint, vérification de signature, cohérence du contenu embarqué et tests du catalogue et de la passerelle native. Aucun essai sur téléphone physique n’a été effectué pendant cette compilation.

Cette mise à jour du README porte uniquement sur la documentation ; elle ne reconstruit pas l’APK.

### Licence

Copyright © 2026 Antoine Baesen.

Ce projet est un logiciel libre et open source sous licence **GNU General Public License, version 3 ou ultérieure (GPL-3.0-or-later)**. Le texte intégral est disponible dans [LICENSE](LICENSE).

Les dépendances et composants tiers conservent leurs licences respectives. Cette licence ne réattribue pas les droits sur les musiques, images ou autres contenus tiers utilisés avec l’application.

## Transparence sur la réalisation

Ce projet a été réalisé avec l’aide de **Codex, l’assistant de développement d’OpenAI**, pour la rédaction et la modification du code, la documentation et certaines vérifications. Les fonctionnalités ont été définies et orientées par le porteur du projet. L’assistance de Codex ne remplace pas les essais sur les appareils utilisés.
