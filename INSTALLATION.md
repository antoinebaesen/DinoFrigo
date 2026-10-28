# Installer Dino Frigo sur un téléphone

La solution proposée est une **PWA** : une application web ajoutée à l’écran d’accueil. Elle s’ouvre dans sa propre fenêtre et peut fonctionner hors connexion après son premier chargement. Aucun store n’est nécessaire.

## 1. Donner une adresse HTTPS à l’application

Le dossier `dist` est prêt à héberger : il contient uniquement les fichiers publics nécessaires. Pour le régénérer, lancer `npm run build` sur le PC.

Une possibilité simple est un déploiement manuel sur Netlify :

1. Ouvrir https://app.netlify.com/drop et utiliser un compte Netlify.
2. Glisser le dossier **dist** dans la zone de déploiement (le dossier doit contenir index.html à sa racine).
3. Netlify fournit une adresse HTTPS. Ouvrir cette adresse sur le téléphone.

Tout autre hébergeur de fichiers statiques avec HTTPS convient. Le catalogue est public sur cette adresse ; la sélection des plats et le stock restent enregistrés dans le navigateur de chaque utilisateur. Aucune donnée de stock n’est envoyée à un serveur.

Ce projet n’a pas encore été publié : il faut effectuer ce déploiement pour obtenir une adresse utilisable sur votre téléphone. Consulter les conditions et les quotas de l’hébergeur au moment de l’inscription.

Documentation : https://docs.netlify.com/deploy/create-deploys/

## 2. Installer sur Android

1. Ouvrir l’adresse HTTPS dans **Chrome**.
2. Appuyer sur **⋮ → Installer et créer un raccourci → Installer**. Selon la version de Chrome, le menu peut afficher **Ajouter à l’écran d’accueil → Installer**.
3. Confirmer puis ouvrir Dino Frigo depuis l’écran d’accueil.

Si Chrome propose une invite native, le bouton « Installer Dino Frigo » apparaît également dans les Paramètres de l’application.

Documentation : https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DAndroid&hl=fr

## 3. Installer sur iPhone

1. Ouvrir l’adresse HTTPS dans **Safari**.
2. Ouvrir le **menu de partage**, puis choisir **Sur l’écran d’accueil**.
3. Activer **Ouvrir comme app web** si cette option apparaît, puis toucher **Ajouter**.
4. Ouvrir Dino Frigo depuis son icône.

Documentation : https://support.apple.com/fr-fr/guide/iphone/iph42ab2f3a7/ios

## 4. Premier démarrage et transfert de données

1. Ouvrir **Configuration** et activer vos plats favoris. Rien n’est activé par défaut.
2. Ouvrir **Stock** et renseigner les quantités réellement présentes. Tous les stocks commencent à zéro.
3. L’application n’affiche que les ingrédients utilisés par au moins un plat activé.

Pour transférer une sélection existante depuis le PC : **Paramètres → Exporter mes données**, envoyer ce fichier sur le téléphone, puis **Paramètres → Importer le catalogue** depuis l’application installée. Les navigateurs et les appareils n’ont pas de synchronisation automatique.

Conservez la même adresse HTTPS pour les mises à jour : changer de domaine change l’espace de stockage du navigateur. Exportez régulièrement vos données ; effacer les données du navigateur peut effacer le stock.

## Essayer en Wi-Fi local

Avec `npm start`, un téléphone sur le même réseau peut visiter `http://ADRESSE-IP-DU-PC:3000` si le pare-feu autorise ce port. Le PC doit rester allumé. **localhost désigne toujours l’appareil qui ouvre l’adresse** : le localhost du PC n’est donc pas accessible tel quel depuis le téléphone.

Une adresse IP en HTTP permet de tester l’interface, mais ne fournit pas les conditions HTTPS nécessaires au service worker et à l’installation PWA complète. Pour une utilisation quotidienne, utiliser l’adresse HTTPS de l’hébergement.
