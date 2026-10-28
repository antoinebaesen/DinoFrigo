# Installer Dino Frigo sur Android

## Installation sur le téléphone

1. Copier **Dino-Frigo-2.3.0.apk** sur le téléphone (câble USB, transfert de fichier ou téléchargement).
2. Ouvrir ce fichier dans l’application **Fichiers** du téléphone.
3. Si Android le demande, autoriser **cette application** à installer une application depuis cette source, puis revenir à l’installation.
4. Appuyer sur **Installer**, puis **Ouvrir**.

L’APK est une version **release signée**, pas un projet à compiler. Aucun serveur, compte ou Play Store n’est nécessaire. Android **7.0 ou supérieur** est requis.

## Première utilisation

Le catalogue de **303 recettes et 184 ingrédients**, les polices et les illustrations sont intégrés dans l’application. Aucune connexion n’est nécessaire pour le catalogue ou le stock. Tous les plats commencent désactivés et tous les stocks à zéro.

Ouvrir **Configuration**, activer les plats souhaités, puis renseigner les quantités réellement présentes dans **Stock**. Seuls les ingrédients d’au moins un plat activé apparaissent dans le stock et les courses.

Le bouton Retour Android ramène au dashboard ; depuis le dashboard, il réduit l’application.

## Sauvegarder et restaurer

Dans **Paramètres → Exporter mes données**, le menu de partage Android permet d’enregistrer ou transférer le fichier JSON. Choisir une destination disponible sur votre téléphone. **Importer le catalogue** permet de sélectionner ce fichier pour restaurer la configuration et le stock.

La sélection, le stock et le thème sont sauvegardés sur l’appareil. Les images importées sont conservées dans les données de l’application. Les images fournies par URL externe restent dépendantes du réseau ; préférez les emojis ou les images importées pour un usage hors connexion.

Désinstaller l’application ou effacer ses données efface les données locales : exporter une sauvegarde avant ces opérations.

## Mises à jour

Installer une nouvelle version **avec le même identifiant et la même clé de signature** sur l’ancienne conserve les données. Le paquet utilise l’identifiant `fr.dinofrigo.app` et la version `2.3.0`.

Pour le développeur : conserver le dossier privé `.android-signing` du projet et ses deux fichiers. Il contient la clé nécessaire pour signer les futures mises à jour ; il ne doit pas être publié ou transmis avec l’APK.

## Recompiler depuis le projet

Node.js 22+, Android SDK 36 avec Build Tools 36 et Java 21 sont nécessaires. Installer les dépendances avec `npm ci`, puis :

```sh
npm run android:build
```

Le script détecte le SDK à partir de `ANDROID_HOME` ou de son emplacement Windows standard. `DINO_JAVA_HOME` permet de choisir Java 21. Le résultat est écrit dans `livraison`, avec son empreinte SHA-256 et ce guide.
