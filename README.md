# Student project dashboard

## Auteurs

Tanguy DEBACKER (M1 Génie Logiciel)

Alexandre Perseval (M1 E-Services)

## Présentation

L'application "Student project dashboard" a pour but la consultation et l'analyse des projets Git (actuellement GitLab) universitaires d'un professeur. Cela se présente sous la forme d'un tableau de bord avec différents graphes permettant de visualiser l'analyse du projet.

## Outils utilisés

Pour la partie serveur, nous utilisons Spring boot avec une base de données Derby embedded. Cela nous permet notamment via une API d'envoyer des données aux components React.

Pour la partie client, nous utilisons React, Bootstrap et Chart.js (react-chartjs-2) afin de ne pas avoir de raffraichissements et de créer une expérience agréable pour l'utilisateur.

Pour analyser les projets Git, nous utilisons SonarQube.

## Arborescence du projet

- page d'accueil avec une courte présentation
- page avec la liste des projets, une barre de recherche et un bouton pour ajouter de nouveaux projets dans la base de données
- page avec les détails d'un projet: ses informations générales et son analyse majoritairement sous la forme de graphes
- API qui ne doit pas être accessible pour les clients (actuellement accessible)

## Fonctionnement du mapping avec Spring et React

Le mapping de Spring (`@RestController` dans `AppRestController.java`) sert à créer l'API.

Le mapping de React (react-router dans `App.js` et `ProjectList.js`) sert à naviguer à travers l'application.

Le mapping lié à thymeleaf (`@Controller` dans `MappingController.java`) sert à rediriger les différentes routes vers le document home.html. Celui-ci est lié à React et va donner la main au routing React. Actuellement, il est également utilisé pour mapper la page /addProject à des fins de tests.

## Contenu de l'analyse d'un projet

L'analyse d'un projet doit montrer un certain nombre d'informations:

- la répartition des commits sous la forme d'un camembert
- La pertinence des commits (nombre d'ajouts/suppressions par commit)
- la fréquence des commits
- l'historique des commits sous la forme d'un tableau
- des éléments de l'analyse de SonarQube comme la duplication du code, le nombre de bug, la présence de documentation, etc...

---

## Sonarqube

Comme indiqué plus haut, nous utilisons l'outil Sonarqube pour analyser un projet.
Pour récupérer une analyse d'un projet Git, deux éléments sont nécéssaires :

- un serveur Sonarqube : 

Le serveur Sonarqube doit être accessible depuis l'extérieur (plus précisément depuis GitLab). Ainsi deux options sont possibles, soit vous lancez votre serveur Sonarqube sur un serveur distant (type AWS) avec docker. Soit vous lancer un serveur Sonarqube en local sur votre machine et vous ouvrez le port 9000. <https://docs.sonarqube.org/latest/setup/get-started-2-minutes/>

Une fois votre serveur démarré, vous pouvez vous y connecter et explorer l'interface. Pour l'application, un token de connection à Sonarqube est nécéssaire. Vous pouvez générer le token dans **User > My Account > Security**

- un scanner Sonarqube : 

Le scanner Sonarqube sert à scanner un projet et à envoyer le résultat vers le serveur Sonarqube. Pour cette application, le scanner est exécuté directement sur GitLab via l'intégration continue (CI/CD). 

Le scanner ne fonctionne pour l'instant que sur <GitLab.com>, les clients GitLab tels que <gitlab-etu.fil.univ-lille1.fr> ou <gitlab.univ-lille.fr> ne possède pas d'image SonarScanner (sonarsource/sonar-scanner-cli) pour l'intégration continue donc le scanner ne peut pas s'exécuter dessus.

Pour exécuter le scanner, il faut ajouter deux fichiers à la racine du projet dans GitLab.
Cette étape est à faire une fois l'application démarrée. Allez sur la page du projet récemment ajouté à l'application et vous trouverez les deux fichiers à insérer dans le Git de votre projet (**.gitlab-ci.yml** et **sonar-project.properties**).

Une fois les deux fichiers ajoutés, le Git sera analysé automatiquement à chaque push/merge et le résultat de l'analyse sera envoyé sur le serveur Sonarqube. Vous pouvez suivre le bon déroulement de l'analyse dans la partie intégration continue (CI/CD) de votre projet Git.

La récupération des analyses des différents projets ajoutés sur l'application se fait automatiquement grâce à l'API Sonarqube.


## Exécution

Si le serveur Sonarqube fonctionne correctement, il faudra modifier le fichier de config > **properties.js (Application/src/main/js/properties.js)**. Modifier les trois propriétés :

- sonar_url : l'addresse du serveur Sonarqube
- sonar_token : le token Sonarqube générer précédement
- web_server_url : l'addresse de votre serveur Spring (localhost:8080) en local ou (X.X.X.X:8080) sur un serveur distant

(Si vous n'avez pas de serveur Sonarqube vous pouvez tout de même exécuter l'application, mais l'analyse Sonarqube ne sera pas prise en compte.)

Lancer les deux commandes suivantes dans des terminaux différents à la racine du projet :

- mvn spring-boot:run
- npm run watch

La première lance le serveur Spring et la deuxième crée le bundle utilisé par React. L'alias watch permet à React de se mettre à jour automatiquement en cas de modification du code (ne fonctionne que pour la partie React).

<http://localhost:8080/> pour accéder à l'application.

## Documentations

- <https://github.com/reactchartjs/react-chartjs-2>
- <https://reactrouter.com/web/guides/quick-start>
- <https://www.w3schools.com/bootstrap4/>
- <https://spring.io/guides>
- <https://www.w3schools.com/react/>
- <https://docs.sonarqube.org/latest/>
- <https://docs.sonarqube.org/latest/extend/web-api/>
