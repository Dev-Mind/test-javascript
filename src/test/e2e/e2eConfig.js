//  Add e2e module to main pb module
angular.module('jt').requires.push('jt.e2e');

angular.module('jt.e2e', ['ngMockE2E']).run(function ($httpBackend) {

  var data = {
    talks: [ {
    "idSession" : 631,
    "votes" : 212,
    "positiveVotes" : 204,
    "nbConsults" : 1158,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Microplugins avec Docker",
    "summary" : "Envie de mettre en place une architecture de plugins ? mais vous hésitez: quelle solution utiliser, dans quel langage ? La solution: Docker!",
    "description" : "Si vous n’avez pas passé les 18 derniers mois dans une hutte en Mongolie, alors vous n’avez pas d’excuses pour ne pas avoir entendu parler de Docker. Désormais, vous connaissez sûrement cet “outil” indispensable à tout bon développeur. Mais savez-vous bien quand le dégainer ? \r\n\r\nAu delà des usages classiques de packaging, intégration/déploiement continu qui résultent souvent dans le déploiement de services persistants (Serveurs Web, APIs, Microservices…), Docker se révèle très efficace et pertinent pour des résoudre des problématiques de “workload”, à grand échelle ou tout simplement “micro”.\r\n\r\nNous vous proposons dans cette présentation d’aborder un nouvel aspect de Docker, réaliser une architecture logicielle modulaire, agnostique du langage, dont les composants seraient tout simplement des conteneurs Docker. Nous parlerons de “meta-conteneurs”, ces containers qui manipulent d’autres conteneurs sur la même machine, mais aussi de Docker-in-Docker, d'orchestration de conteneurs... Tout ceci en s’appuyant sur des exemples de code et des démonstrations.\r\n",
    "ideaForNow" : "Une nouvelle excuse pour convaincre votre chef de vous laisser mettre Docker en prod !",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "DevOps", "Docker" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/631"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/1371"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/592"
    } ]
  }, {
    "idSession" : 711,
    "votes" : 224,
    "positiveVotes" : 216,
    "nbConsults" : 681,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "24 Minutes chrono pour bâtir une appli mobile",
    "summary" : "Bâtir une appli mobile multi plateforme avec son backend Java EE, le tout sécurisé,  en 24 minutes, tel est le défi de cette session",
    "description" : "Accrochez vos ceintures et plongez dans le monde merveilleux du développement mobile ! Dans cette session 100% Live Coding nous verrons comment bâtir une application mobile robuste, sécurisés et multiplateforme.\r\n\r\nPour cela nous utiliserons un environnement de travail entièrement Open Source et familier aux développeurs. En utilisant l'approche hybride avec Cordova couplé avec le framework Ionic, nous pourrons facilement déployer cette application sur les différentes plateformes : iOS, Android, FirefoxOS et même, tenez vous bien, Windows Phone.\r\n\r\nCoté serveur, étant donné que nous ne disposant que de 24 minutes chrono, nous verrons comment des outils RAD (Rapid Application Development) intégrés à notre IDE peuvent nous faciliter la vie pour élaborer notre API.\r\n\r\nCerise sur le gâteau, nous sécuriserons tout ce beau monde de manière non intrusive grâce au serveur d’authentification Keycloak, également Open Source.\r\n\r\nBref, une session dynamique, teintée d'humour mais surtout très pragmatique, le but étant que spectateur puisse mettre en pratique le soir même ce qu'il aura vu.",
    "ideaForNow" : "In this really pragmatic session, attendees will be able to try out immediatly what they saw since it's all Open Source and use familiar tooling. ",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "Java EE", "cordova", "JBossForge", "Eclipse" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/711"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/1461"
    } ]
  }, {
    "idSession" : 761,
    "votes" : 39,
    "positiveVotes" : 33,
    "nbConsults" : 313,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Ceylon d’ici à l’infini : tour d’horizon et futur",
    "summary" : "Découverte du language et de son écosystème au travers de démos.",
    "description" : "Ceylon est un nouveau langage de programmation élégant pour la JVM et les VMs JavaScript, fait pour le travail en équipe. Mais plus que ça, c‘est une plate-forme complète avec modularité, un SDK, des outils et IDEs.\r\n\r\nNous allons présenter le langage, la plate-forme et son écosystème. Vous allez tout voir : du nouveau projet dans l‘IDE à la publication dans Herd, notre dépôt de modules, y compris le SDK. Nous présenterons également les projets Ceylon en cours tels que le système de build, l‘intégration Vert.x ou Cayla, le nouveau framework Web.\r\n\r\nEnfin nous présenterons les plans pour Ceylon 1.2 et au delà.",
    "ideaForNow" : "Pourquoi le langage existe, ce qu’il apporte, les outils, les frameworks.",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "JVM", "languages", "Ceylon" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/761"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/36"
    } ]
  }, {
    "idSession" : 771,
    "votes" : 75,
    "positiveVotes" : 60,
    "nbConsults" : 704,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Sirius : un schéma vaut mieux qu'un long discours",
    "summary" : "Ce talk \"dont vous êtes le héros\" permettra de montrer en live l'intérêt de fabriquer un DSL graphique avec le projet OpenSource Sirius.",
    "description" : "Sirius est un nouveau projet OpenSource releasé au sein du dernier Eclipse Luna.\r\nSirius un framework permettant de créer ses propres modeleurs ou vues graphiques en laissant toute liberté au développeur pour customiser les représentations graphiques, choisir le format de stockage et les comportements des palettes d'outils. Et tout cela se fait juste par configuration, sans besoin de coder.\r\n\r\nCe talk sera sous un format original, à la mode des livres dont vous êtes le héros : ce sera la salle qui décidera en live des thèmes à aborder.\r\nLe talk pourra ainsi expliquer à la fois les cas d'usage d'une telle technologie (fabriquer un Airbus, donner une vue graphique du métier pour du Domain Driven Design, faire des outils d'architecture de plus en plus visuel, etc.) et laissera une grande part à la démo avec notamment la promesse de la fabrication d'un modeleur from scratch en seulement 10 minutes.   ",
    "ideaForNow" : "* Éditer un fichier de paramétrage de votre logiciel via un modeleur graphique\r\n* Concevoir une architecture puis la valider\r\n* Remplacer des tonnes de papier de cahiers de charges Word et de schémas PowerPoint par des modèles simples et outillés\r\n* Créer son propre modeleur intégré à Eclipse",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "open source", "Eclipse", "Domain Driven Design", "Domain Specific Language", "live coding demo" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/771"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/1531"
    } ]
  }, {
    "idSession" : 791,
    "votes" : 1540,
    "positiveVotes" : 1500,
    "nbConsults" : 884,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Si le TDD est mort, alors pratiquons une autopsie",
    "summary" : "Quelle place occupe nos modèles mentaux lorsque nous développons? Si Michel-Ange avait été développeur…",
    "description" : "Dans cette session, nous analyserons pourquoi de nombreux développeurs ont finalement jeté l’éponge du test-first face à la difficulté de faire émerger du code.\r\n\r\nPar comparaison, si Michel-Ange avait été développeur quels auraient été ses secrets. Quelle était la posture de cet artiste ?\r\n\r\nEn effet, comment concilier nos intuitions et projections mentales avec cette approche a priori minimaliste et contre-intuitive ?\r\n\r\nExemples à l'appui, 2 craftsmen vous montreront comment sauter le pas... ou tout simplement optimiser votre efficacité dans ce dispositif sans jamais tomber dans le dogmatisme.",
    "ideaForNow" : "- Une appétence exacerbée pour comprendre le contexte fonctionnel de votre projet.\r\n- Une envie compulsive de faire des code kata dans votre quotidien.\r\n- Des astuces pour pratiquer un design émergeant décomplexé.\r\n- Une confiance accrue dans vos capacités de développement.\r\n",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "BDD", "TDD", "code kata", "développeur", "design", "développement", "algos", "craft", "modèles mentaux", "design émergeant" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/791"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/1541"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/1401"
    } ]
  }, {
    "idSession" : 801,
    "votes" : 110,
    "positiveVotes" : 80,
    "nbConsults" : 658,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Apprenez les ficelles de Marionette",
    "summary" : "Venez découvrir en live coding le plugin indispensable pour booster votre application Backbone.js, j'ai nommé Marionette.js !",
    "description" : "Problèmes de fuites mémoires ? D’organisation du code ? Manque de composants haut-niveau ? Et j’en passe pour les nombreux retours d'xp sur Backbone… Ce genre d’inconvénients vous ont peut-être fait basculer trop rapidement vers Angular.js ou Ember.js.\r\n\r\nCes galères, je ne les ai jamais connues ! Promis je ne trolle pas :) Une solution sur-mesure existe déjà : Marionette.js !\r\n\r\nJe vous propose de redécouvrir Backbone à travers cette librairie : points forts/faibles, avant/après, bonnes pratiques… le tout en live coding.",
    "ideaForNow" : "Des composants puissants, des bonnes pratiques et une furieuse envie de le tester dès la fin de la session !",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "Live Coding", "Backbone", "Web", "JavaScript", "Marionette" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/801"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/263"
    } ]
  }, {
    "idSession" : 821,
    "votes" : 116,
    "positiveVotes" : 108,
    "nbConsults" : 552,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "RxJava, les mains dans le Code",
    "summary" : "Vous souhaitez découvrir RxJava par une approche pratique et concrète? Cet atelier est fait pour vous :)",
    "description" : "Vous avez déjà entendu parler de RxJava mais souhaiteriez une approche pratique et concrète ? Vous souhaitez découvrir la programmation réactive fonctionnelle (FRP) ? Cet atelier est fait pour vous.\r\n\r\nNous découvrions ReactiveX en développant une application cliente composant des résultats de multiples services pas toujours fiables. Nous verrons quelles bonnes pratique mettre en place pour qu'elle soit prête pour la prod (retry, backpressure, exponential backoff...).\r\n\r\nL'application sera enfin connectée à un système de persistence NoSQL, lui aussi asynchrone et réactif.\r\n\r\nVenir avec IDE, Maven, **JDK 8**.",
    "ideaForNow" : "RxJava et la Programmation Reactive Fonctionnelle en pratique",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "reactive programming", "RxJava" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/821"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/929"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/1581"
    } ]
  }, {
    "idSession" : 951,
    "votes" : 31,
    "positiveVotes" : 25,
    "nbConsults" : 429,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Intégration web : qualité & productivité FTW",
    "summary" : "Intégration web : Bonnes pratiques et outils à connaître pour ne plus sacrifier la qualité du code sur l'autel de la productivité.",
    "description" : "Mettre en ligne une nouvelle image, corriger un bogue CSS, ajouter une fonctionnalité JavaScript, ou encore mettre à jour un bout de code HTML sont autant de problématiques d'intégration que de nombreux développeurs doivent gérer au quotidien. *Mais lorsque les demandes s’amoncellent, il s'agit d'être productif avant tout…*\r\nFort heureusement, il existe un certain nombre de bonnes pratiques faciles à appliquer et pléthore d'outils sur lesquels s'appuyer pour déléguer les tâches répétitives chronophages.\r\n\r\nCette session se propose de faire le tour de quelques éléments incontournables dans la boîte à outils de l'intégrateur (normalize, emmet, autoprefixer et autres linters/validateurs...) afin de voir comment **gagner en qualité sans pour autant faire une croix sur la rapidité d'exécution**.\r\n",
    "ideaForNow" : "- Compléter la palette de DevTools utilisés ;\r\n- Mettre en place ou renforcer le Workflow ;\r\n- Déléguer les tâches répétitives sans valeur ajoutée",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/951"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/1711"
    } ]
  }, {
    "idSession" : 971,
    "votes" : 188,
    "positiveVotes" : 180,
    "nbConsults" : 599,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Look Ma, I'm a core developper",
    "summary" : "Venez découvrir la vie de développeur sur un gros projet opensource de l'intérieur.",
    "description" : "Les projets opensource font intervenir de **larges équipes distribuées** pourtant cela fonctionne.\r\nOn m'a souvent rétorqué que c'était dû à la nature du projet, que les développeurs travaillaient sur leur temps libre, qu'ils étaient meilleurs qu'ailleurs, qu'ils n'avaient pas à développer un produit, qu'il n'y a aucune contrainte de temps, etc.\r\n\r\nLa réalité est bien plus simple, bien avant qu'Agile ne devienne le buzzword managérial les développeurs de ces projets ont dû s'auto-organiser, définir des roadmaps, sortir des versions, assurer un haut niveau de qualité, prendre en compte les retours des utilisateurs bref faire ce que font les équipes de développement tous les jours.\r\n\r\nC'est donc le fruit d'années de développement opensource que je viens vous présenter en vous dévoilant les **\"secrets\"** (puisque tout est ouvert) du développement du serveur d'application libre WildFly et de JBoss EAP par les équipes de Red Hat entre autres.",
    "ideaForNow" : "Je peux gérer mes développements comme des projets opensource et donc profiter de ces années d'expériences.\r\nRetour d'expérience concret.",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "open source", "développement", "retours d'expérience", "Agile" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/971"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/103"
    } ]
  }, {
    "idSession" : 1011,
    "votes" : 50,
    "positiveVotes" : 45,
    "nbConsults" : 339,
    "lang" : "en",
    "format" : "Talk",
    "title" : "Entangling artefacts",
    "summary" : "Learn how to evolve your tools to embody continuous improvement.",
    "description" : "When developing in an agile fashion, we use artefacts every day as a support for communication and production, to measure and learn. Even though we prefer to think about interactions rather than tools, the latter end up mediating the former.\r\n\r\nRather than denying this aspect, I will put forward a proposal on how we can use it to our advantage, and we'll explore it together.\r\n\r\nBased on 18 months of experiments in a startup and analysis through cognitive anthropology and system models, we'll see how the system of production can be entangled with the artefacts that represent it. You will thus be presented both with an abstract definition of what makes an artefact powerful enough to embody continuous improvement; and concrete, tested examples of how to do it, such as the a Guide Board, or the set of operations you can apply to a Task Board for it to evolve.\r\n\r\nThis will be the basis for a research workshop where we'll find out the limitations of this approach by applying it to your own artefacts.",
    "ideaForNow" : "- Consider artefacts as first-class members of the production system.\r\n- Modify artefacts to leverage the power of Emergent Semiotics, Reflexive Mapping and Friction Isomorphism.",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "continuous improvement", "Amélioration continue", "System Thinking", "Artefacts", "Agile" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1011"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/1005"
    } ]
  }, {
    "idSession" : 1021,
    "votes" : 340,
    "positiveVotes" : 310,
    "nbConsults" : 594,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Jeu des prénoms revisité",
    "summary" : "L'urgence, le retard, la (non) performance, la (non) qualité, pas/peu d'amélioration... Découvrez votre principal problème et sa solution !",
    "description" : "# Est-ce que cet atelier est pour moi ? #\r\n\r\nSi votre équipe de travail ou votre organisation se reconnaissent dans au moins 1 des critères suivants, alors cet atelier est fait pour vous :\r\n\r\n- chaque demande est plus urgente que les autres,\r\n- nous avons du mal à tenir nos engagements et nos délais,\r\n- nous essayons d'augmenter notre performance, mais en vain,\r\n- nous n'avons jamais le temps de faire un travail de qualité,\r\n- tout le monde est à 100%, y compris les dernières recrues censées nous soulager.\r\n\r\n# \"Tu bluffes Martoni !\" #\r\n\r\nComme le disait Deming : 95 % des performances d'un système viennent de la conception du système et non des capacités des personnes qui travaillent dans le système.\r\n\r\nCe qui signifie que toute équipe et toute organisation peut améliorer considérablement sa performance avec les mêmes personnes : il suffit de changer sa méthode de travail et d'amélioration.\r\n\r\nCet atelier vous informe sur le principal problème de votre organisation, et vous donne la solution à appliquer. Vous pourrez ensuite animer cet atelier dans votre organisation pour permettre à vos collègues d'avoir la même révélation !\r\n\r\nEn attendant, si vous pensez bien faire en recrutant 1 personne de plus pour vous aider à contenir le volume de demandes, vous ne ferez qu'amplifier le problème ! Même si cela peut paraître contre-intuitif.\r\n\r\nCet atelier a été créé et partagé par Henrik Kniberg, un coach agile suédois. Je l'ai revisité afin de le compléter par une introduction à certains principes de Kanban et du Lean Product Development.",
    "ideaForNow" : "Voici les principaux bénéfices de cet atelier :\r\n\r\n- une prise de conscience et 1 solution sur l'un des pires dysfonctionnements de nos organisations,\r\n- un nouveau point de vue sur les notions de performance et d'amélioration continue,\r\n- une introduction à certains principes de Kanban et du Lean Product Development,\r\n- un atelier que vous pourrez animer dans vos organisations (les supports sont libres et disponibles sur Internet).\r\n",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "cost of delay", "délai", "Kanban", "Flux", "lean product development", "Management", "performance", "WIP", "gestion de projet", "coût du retard" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1021"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/13"
    } ]
  }, {
    "idSession" : 1041,
    "votes" : 680,
    "positiveVotes" : 640,
    "nbConsults" : 1632,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Agilité par le code grâce à CQRS et EventSourcing",
    "summary" : "Et si la complexité d'un logiciel reflétait la complexité fonctionnelle et non technique ?",
    "description" : "Le but de cet atelier est de vous montrer une méthode de développement qui se focalise sur les problématiques métiers et non technique.\r\nPas besoin d'un langage de programmation ou d'un Framework spécifique.\r\nNous ferons émerger une application pendant l’atelier. Et nous verrons comment l'event sourcing et CQRS se présentent d’eux même pour supprimer les problématiques techniques que nous rencontrons souvent dans une application en couche, même de petite taille.\r\n\r\nUn pc avec son environnement de développement et de test opérationnel est obligatoire. Nous fournirons une base de code dans les langages/plateformes suivantes :\r\n\r\n* Java 8/Maven, \r\n* C#/.NET4.5.1/VS2013, \r\n* JS/Node,\r\n* PHP5.5/Composer",
    "ideaForNow" : "Constater que derrière les gros mots event sourcing et CQRS, il y’a des concepts simple et addictif à implémenter.",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "CQRS", "event sourcing", "architecture émergente", "DDD", "EventStorming" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1041"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/631"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/701"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/704"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/389"
    } ]
  }, {
    "idSession" : 1051,
    "votes" : 260,
    "positiveVotes" : 230,
    "nbConsults" : 566,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Lean Takeoff : plongez dans un monde incertain !",
    "summary" : "Comment développer un produit innovant et construire un modèle économique viable de façon empirique ?",
    "description" : "La communauté du Lean Startup invente et met en œuvre un grand nombre de pratiques, en lien avec d'autres approches empiriques : agilité, lean UX, customer development, kanban, ...\r\nMais, comme pour l'agilité, tout commence par un nouvel état d'esprit.\r\n\r\nDécouvrez par le jeu la posture de l'entrepreneur et du lanceur de produit innovant, et plus généralement l'approche du Lean Startup.\r\n\r\nLe support du jeu est téléchargeable en ligne : http://leantakeoff.com/",
    "ideaForNow" : "Après avoir joué, vous ne serez plus comme avant :\r\n\r\n- attitude face au risque et à l'incertitude\r\n- prise de décision rapide basée sur des données scientifiques\r\n- focalisation et adaptation\r\n- émergence du modèle économique\r\n- pivoter OR NOT pivoter ?",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "customer development", "adéquation problème solution", "pivot", "problem solution fit", "Lean Startup" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1051"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/13"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/452"
    } ]
  }, {
    "idSession" : 1071,
    "votes" : 99,
    "positiveVotes" : 78,
    "nbConsults" : 412,
    "lang" : "en",
    "format" : "Talk",
    "title" : "Ramping up your DevOps-fu for big data developers",
    "summary" : "Reproducible setups for test & deployment are hard. Harder on a cluster. This talk presents lessons learned making a Spark distribution.",
    "description" : "We developers work hard on applications that we sometimes like to forget when they ship. Yet not only are modern applications part of a stack, but when dealing with big data, cluster deployment can become a headache.\r\n\r\nTypesafe recently developed a distribution of Spark, a next-generation distributed computation engine. This meant testing it with a dizzying array of persistence layers, cluster managers, and input sources. Not to mention versioning hell.\r\n\r\nThis talk will explain the lessons we learned, and which tools helped us make the test and deployment process easy. We'll see how orchestration scripts helped us manage many machines at once, both on the cloud and on premises. We'll see how virtualization let us create reproducible configurations, without tying us with a vendor. We will also explain how containers and fine-grained resource managers helped us make the best use of our machines.\r\n\r\nAnd while this tour will show famous tools like Docker in action, it will also report on niche tools that perform great in critical parts.\r\n\r\nModern DevOps tools let developers test and deploy their App on a cluster, in an automated and reproducible way. The audience should come for a better grasp of that fast-moving environment.",
    "ideaForNow" : "- how to use virtualization with heterogeneous deployment targets,\r\n- the role of a cluster resource manager in a big data stack, \r\n- containers are the new virtualization : why, how do we leverage them ?\r\n- simplifying tips in provisioning and network for the hybrid cloud",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "cluster", "DevOps", "spark" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1071"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/1831"
    } ]
  }, {
    "idSession" : 1121,
    "votes" : 108,
    "positiveVotes" : 96,
    "nbConsults" : 635,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Initiation à la facilitation graphique",
    "summary" : "Venez découvrir en quoi la pensée visuelle aide à la compréhension entre les individus et à créer des cadres interactifs fun et sérieux",
    "description" : "Vous devez animer une réunion avec votre(vos) client(s), votre équipe et/ou vos collègues que faites-vous ? \r\n\r\n1. Vous présentez vos idées à partir d’un PowerPoint au risque que tout le monde ne vous écoute pas\r\n2. Vous donnez un paquet de Post-It à chacun et animez une séance de brainstorming avec le risque que trop d’idées se dégagent\r\n3. Vous organisez un jeu d’Innovation, c’est ludique, c’est fun mais certains auraient préféré une bonne réunion descendante (voir réponse 1)\r\n4. Vous restez silencieux, à l’écoute et illustrer la complexité des idées exprimées à la seule force de votre crayon\r\n\r\nJe vous propose de découvrir cette 4ème option : la facilitation graphique. Vous ne savez pas dessiner ? C’est possible mais vous avez d’autres qualités innées qui feront de vous un bon « architecte visuels des idées »\r\n\r\nNote pour les organisateurs : possibilité de faire décliner l'atelier en anglais",
    "ideaForNow" : "Pendant cet atelier pratique, vous :\r\n\r\n- Serez initié aux techniques de base de la facilitation graphique des interactions de groupe, \r\n- Apprendrez comment capturer visuellement l’information et établir des connexions simples,\r\n- Découvrirez pourquoi la facilitation graphique apporte une dynamique interactive et innovante dans les réunions,\r\n- Amènerez votre assistance à libérer ses idées et à les ancrer dans les esprits de tous.\r\n",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "facilitation graphique", "Facilitation", "Visual facilitation" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1121"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/5"
    } ]
  }, {
    "idSession" : 1131,
    "votes" : 282,
    "positiveVotes" : 264,
    "nbConsults" : 536,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Kanban pour tous",
    "summary" : "Entrez dans un flux de retours d'expérience de déploiement de Kanban dans une grande variété d'environnements. ",
    "description" : "Pour toutes celles et ceux qui entendent parler de Kanban ou qui découvrent, je vous propose une compilation de retours d’expériences de mise en place de Kanban dans plusieurs environnements dont certains n’ont rien à voir avec l’agilité. \r\n\r\nCes équipiers, responsables produits, manager, ont profité de la puissance de Kanban pour organiser leur travail et améliorer leurs prises de décisions. Chacun à leur niveau et à leur rythme, ils ont pris conscience des processus de travail dans lesquels ils évoluaient et de quels indicateurs ils avaient besoin pour développer leur amélioration continue. Révolution pour les uns, « rupture douce » pour les autres, il existe mille et une façons d’utiliser Kanban et d’en tirer profit. Une chose est certaine, vous aussi pouvez déployer Kanban dans votre environnement, quelle que soit votre place dans l’entreprise. Pour cela il faudra vous concentrer sur vos bonnes unités de valeur. \r\n\r\nMes supports en ligne : http://www.slideshare.net/calton13/kanban-pour-tous \r\n",
    "ideaForNow" : "Découvrir des applications de Kanban variées et en dehors du logiciel pur\r\n- Comprendre ce qu'est une unité de valeur et comment la voir\r\n- Comment désigner un premier Kanban en 5 minutes\r\n- Comprendre en quoi Kanban est un vecteur d’implication des équipiers, quel que soit leur place dans l’organisation\r\n- Utiliser Kanban pour bâtir des indicateurs décisionnels",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "Kanban", "flux commercial", "personnal Kanban", "valeur", "Gouvernance", "retours d'expérience" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1131"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/5"
    } ]
  }, {
    "idSession" : 1241,
    "votes" : 66,
    "positiveVotes" : 60,
    "nbConsults" : 400,
    "lang" : "en",
    "format" : "Talk",
    "title" : "Tips and tricks for clean relational db schemas",
    "summary" : "Cleanly design your schemas. Learn to use your RDBMS to its full power.",
    "description" : "It can be usual for software developers to let the ORM take care of the\r\ndatabase schema. In many cases it's a bad idea as it makes the data stored in\r\nyour database brittle and hard to use confidently. I'll show a few tricks\r\nwhich will help you cleanly store and query data by using your database engine\r\nto its full power.\r\n\r\nIn some cases, using an ORM brings more problems than solutions. I'll explore\r\nthese cases (they are more common than you think) and how to use the freedom\r\ngiven by having complete control over your schema and your queries:\r\n\r\n- indexes\r\n- semantic data types\r\n- query composition\r\n- window functions\r\n\r\nI'll show how to still be efficient and concise when going this path (with Jooq / Slick / Anorm)\r\n",
    "ideaForNow" : "- data polyglotism\r\n- SQL strengths\r\n- Relational DB schema design",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "design", "sql" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1241"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/1951"
    } ]
  }, {
    "idSession" : 1301,
    "votes" : 51,
    "positiveVotes" : 45,
    "nbConsults" : 304,
    "lang" : "en",
    "format" : "Talk",
    "title" : "Communicating Across the Skills Gap",
    "summary" : "This talk will focus on practical, real-world ways to bridge the communication divide between technical and non-technical team members.",
    "description" : "As developers, we’re often tasked with collaborating with non-technical teams and partners to build our products. Communication with these teams and partners can be limited by a lack of shared vocabulary, scope and perspective. This workshop will explore ways that development professionals can better recognize when a gap in technical understanding is limiting communication and offer strategies to better communicate with a diverse range of backgrounds.\r\n\r\nWe’ll be working in short groups throughout this workshop, testing proposed communication strategies and developing new approaches based on participants’ backgrounds and experience.\r\n\r\nWhile focusing on way that developers can better communicate across a range of technical skill levels, this workshop will also touch on ways in which those outside of development roles can work to elicit clearer communication from technical team members. Managers of mixed teams may also benefit from participation. Programming knowledge will not be required for this workshop. \r\n",
    "ideaForNow" : "How to recognize skills gaps that may impact communication.\r\nHow to address skills gaps in comfortable, non-judgemental context.\r\nHow to check for mutual understanding.\r\nWays to frame technical concepts for wider understanding.\r\n",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "Project Management", "technical skills gap", "communication skills" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1301"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2031"
    } ]
  }, {
    "idSession" : 1311,
    "votes" : 140,
    "positiveVotes" : 105,
    "nbConsults" : 604,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Tous différents et nous formons une superbe équipe",
    "summary" : "Nous sommes tous différents,  et c’est pour cette raison que nous formons une bonne équipe\r\n",
    "description" : "Ce serait facile si tout le monde pensait comme moi, je me dis parfois\r\n\r\nCe serait surtout ennuyeux si nous étions tous pareils\r\n\r\nCet atelier, basé sur le modèle du cerveau entier (whole brain) de Hermann, vous aide à prendre conscience de votre style de pensée dominant, à connaître celui des autres  et ensuite à savoir chercher le meilleur de chacun pour en faire quelque chose de merveilleux. La diversité des pensées est une richesse pour explorer, décider et faire ensemble.\r\n\r\nObjectif est que, en sortant de l’atelier, vous vous regardez  autrement, vous regardez autrement les autres et vous savez mieux mobiliser vos équipes.\r\n",
    "ideaForNow" : "",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "mobiliser", "diversité", "intelligence collective", "style de pensée", "modèle Hermann" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1311"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2051"
    } ]
  }, {
    "idSession" : 1341,
    "votes" : 430,
    "positiveVotes" : 410,
    "nbConsults" : 649,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Initiation au Machine Learning avec Spark\t",
    "summary" : "Initiation au machine learning avec le framework Spark. Développement d'algorithmes simples et utilisation de la librairie MLlib.",
    "description" : "Savoir faire du machine learning est une compétence de plus en plus recherchée de nos jours, pourtant cette discipline est loin d'être la plus simple à acquérir. Le but de cette université est donc de vous initier progressivement au machine learning et à Spark. Nous utiliserons les outils plus récents des data-scientists au travers de la librairie MLlib de Apache Spark, framework reconnu dans le domaine du machine learning et du traitement de gros volume dans l'éco-système Java. Nous utiliserons Scala tout au long du hand's on (à un niveau très basique, n'ayez pas peur si vous débutez !). Vous serez guidé par un tutoriel (en plus des animateurs) tout au long des exercices.\r\n\r\nA installer (plug-in de votre IDE préféré) : \r\n - SBT\r\n - Scala\r\n\r\nNous fournirons le projet et les dépendances via des clés USB.",
    "ideaForNow" : "La mise en place d'algorithmes de machine learning pour l'analyse de leurs données, l'envie d'utiliser le framework Spark pour découvrir de manière simple et interactive une technologie Big Data qui tend à devenir la référence.",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "Data Science", "spark", "Scala", "Big Data", "Machine Learning" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1341"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2071"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2061"
    } ]
  }, {
    "idSession" : 1351,
    "votes" : 468,
    "positiveVotes" : 414,
    "nbConsults" : 698,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Changez d'avis sur JavaScript",
    "summary" : "ES6 (ES2015) est une (r)évolution du JS : plus fiable, plus productif, voyons ensemble comment l'utiliser dès à présent",
    "description" : "**EcmaScript-6** (ES2015) est la prochaine version du langage JavaScript. En quoi ça nous concerne ?\r\n\r\nC'est une (r)évolution majeure de la syntaxe, qui pourrait bien changer votre opinion de ce langage...\r\n\r\nCar vous pensez peut-être que c'est un outil de *bricolos*, pour du code *quick and dirty* ?\r\n\r\nAlors nous verrons comment :\r\n\r\n- Faire des imports/exports sans RequireJS\r\n- Eviter `arguments` et `x = x || ‘default value’ ; `\r\n- Faire des fonctions anonymes sans `function` ni `return`\r\n- Ne plus perdre `this`.\r\n- Ne plus utiliser le prototype pour faire de l’héritage !\r\n- Se simplifier la vie avec un code plus concis et plus clair\r\n\r\nRien compris ? Venez découvrir de quoi il en retourne.\r\nConnu dans d’autres langages ? Venez voir comment cela se décline en JavaScript.\r\n\r\nQue vous travaillez dans un navigateur, sur NodeJS ou sur Vert.x, soyez prêt à les utiliser, et à pouvoir dire enfin\r\n\r\n> Oui, le JS est un langage de professionnels\r\n\r\n",
    "ideaForNow" : "1. Je veux faire de l'ES6 ! MAINTENANT !\r\n2. J'ai compris les killer features et leurs avantages\r\n3. Je connait des transpiller pour utiliser ES6 dès a présent",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "Langage dynamique", "Web", "JavaScript", "ES6", "ES2015", "Node.js" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1351"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/497"
    } ]
  }, {
    "idSession" : 1361,
    "votes" : 72,
    "positiveVotes" : 56,
    "nbConsults" : 913,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Réussissez vos projets IT grâce à l'Obeya",
    "summary" : "Livrer des projets de qualité, dans les délais et les coûts impartis, c’est possible ! Découvrez comment l'Obeya vous permettra de réussir",
    "description" : "Le non respect des délais des projets informatiques grands ou petits n'est pas une fatalité ! \r\nLe Lean management propose de résoudre les problèmes de délais, coût et qualité en 4 temps :\r\n1- Visualiser la production pour révéler les problèmes\r\n2- Réagir immédiatement\r\n3- Résoudre les problèmes un par un\r\n4- Pour améliorer durablement les pratiques de travail\r\nLa pratique lean permettant de visualiser la production s’appelle l’Obeya ou le management visuel de projet, dont l’animation permet de réagir immédiatement aux incidents qui surviennent dans la vie du projet, de résoudre un par un les problèmes identifiés à partir des écarts à la performance afin d’améliorer les pratiques de travail. Cette approche permet ainsi de piloter précisément le projet afin de réagir au plus tôt pour garantir le respect de la qualité, des délais et des coûts du projet. \r\n\r\nEn 2 heures, vous comprendrez :\r\n- les principes de base de la mise en place d'une Obeya,\r\n- les pratiques d'animation, \r\n- les ingrédients indispensables à la réussite de ce type de management visuel de projet \r\n- et surtout pourquoi ça marche : ce qui fait la différence avec les autres méthodes de gestion de projet...!",
    "ideaForNow" : "Des pistes pour mettre en place une obeya chez vous, les principes de base à respecter pour l'animer et les étapes cruciales à ne pas rater pour réussir votre projet IT.",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "Lean IT", "IT", "gestion de projet", "Obeya" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1361"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/3411"
    } ]
  }, {
    "idSession" : 1381,
    "votes" : 145,
    "positiveVotes" : 110,
    "nbConsults" : 603,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Prise en main des outils JDK:jstat, jstack et jmap",
    "summary" : "jstat, jstack et jmap sont des outils du JDK trop peu connu et pourtant utiles pour la prod ! Venez les découvrir et les pratiquer.",
    "description" : "## Description de l'atelier\r\n\r\nL’objectif de l’atelier est de prendre en main **des outils trop peu connu du JDK** comme **jstack** ou **jstat** et qui pourtant permettent de diagnostiquer assez rapidement les problèmes de production car ils ne nécessitent pas d’interface graphique.\r\n\r\nPour les travaux pratiques, les participants ont a disposition un environnement **linux**, un **projet java** de type web et un **tomcat** pre-configuré sur lequel le war est déployé. Le projet java contient des points de contentions et des problèmes de performances que les participants vont découvrir et corriger au fur et à mesure de leur avancée.\r\n\r\n*A noter que l’atelier étant basé sur une Machine Virtuelle (VM), pour le confort d’utilisation, les participants doivent posséder un ordinateur ayant au moins 8 Go de RAM. Tous les systèmes d’exploitation sont acceptés, vous pouvez préparer l'atelier en installant la dernière version de VirtualBox*\r\n\r\n## Contenu de l'atelier\r\n\r\n* Introduction\r\n* Installations\r\n * Copie/téléchargement du contenu de l’atelier\r\n * Installation de virtualbox (si necéssaire)\r\n * Import de la VM linux/tomcat\r\n\r\n* Travaux pratiques\r\n * Comment trouver le process id du tomcat et les logs\r\n * Quelques outils linux pour avoir des informations sur la consommation des ressources: top, sar, free...\r\n * Utilisation de l’outil de la JDK **jstack** afin de d’analyser les threads java\r\n * Quelques explications sur la mémoire java, le Garbage Collector\r\n * Utilisation de l’outil de la JDK **jstat** afin d’analyser la consommation mémoire\r\n * Ajout des **options de JVM** pour logger les GC\r\n * Utilisation de l’outil **jmap** conjointement a eclipse MAT afin d’analyser à froid le contenu de la mémoire java et de trouver la source de la fuite mémoire.",
    "ideaForNow" : "De meilleures armes pour analyser les problèmes de production java de demain.",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "jmap", "jstack", "Java", "jstat", "analyse de la production" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1381"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/113"
    } ]
  }, {
    "idSession" : 1411,
    "votes" : 144,
    "positiveVotes" : 128,
    "nbConsults" : 459,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Apprentissage agile ludique : Mindstorm4Scrum",
    "summary" : "Mindstorm4Scrum ou comment découvrir une méthodologie agile (SCRUM) de manière créative avec des Legos programmables",
    "description" : "## Déroulé\r\nNous proposons ici de relever un challenge simple en construisant un robot qui est capable de mouvement.\r\nLes personnes qui veulent être fonctionnels définiront les US (User Story).\r\nLes personnes qui veulent être développeurs/testeurs programmeront le robot et le construirons.\r\nBien sur, le tout sans plan et en appliquant SCRUM ...\r\nSeul pré-requis : avoir 10 ans ou plus.\r\n\r\n## Les points abordés sont :\r\n* utilisation d'un support innovant les Legos ... enfin ... les Legos programmables.\r\n* mise en oeuvre d'une approche SCRUM.\r\n* les participants pratiquent :\r\n\r\n> Détail des US avec un animateur dédié pour les PO (Product Owner).\r\n\r\n> Planification.\r\n\r\n> Construction du robot avec un animateur dédié pour SCRUM et le langage de programmation.\r\n\r\n##Le tout :\r\n* de manière itérative\r\n* de manière créative : pas de plan\r\n* de manière collaborative : l'envie de se surpasser\r\n\r\n## Genèse\r\nEn fait, la genèse de cet atelier est simple : nous avons trop utilisé l'excellentissime Lego4Scrum d'Alexey Krivitsky. Avec du coup énormément de feedback, nous avons cherché à créer quelque chose qui implique tous les acteurs, qui utilise toujours autant la créativité et qui peut plus facilement se rattacher aux problématiques de l'IT. Aurélien a sorti \"et si on utilisait les Lego mindstorms, ca ne demande pas un ticket d'entrée trop gros\". Et depuis, cet atelier est notre support de formation. Ici, nous vous proposons de le jouer dans un format 2h, donc nous simplifierons l’exercice.\r\n\r\nAu final, nous le jouons aussi bien dans le monde de l'IT que dans d'autres contextes.\r\n\r\nNous voulons donc le partager avec le plus grand nombre.\r\nIdem, quand Aurélien aura un peu de temps, le déroulé sera disponible sous licence creative commons pour que le plus grand nombre puisse le jouer.\r\n\r\n## Remarques\r\n* English speaking people are welcomed ... just be nice with our \"french\" accent :)\r\n* Nous pouvons aller jusqu'à 25-30 personnes. Cela va être éprouvant.\r\n* Pour pouvoir réaliser l'atelier dans de bonnes conditions, il est important que chacune des équipes soit en possession d'un ordinateur. Nous mettrons 4 ordinateurs à disposition.\r\nSi vous venez avec le votre, pensez à installer le logiciel EV3 que vous trouverez ici : http://www.lego.com/fr-fr/mindstorms/downloads/download-software\r\n",
    "ideaForNow" : "Mise à part conforter l'idée que les Lego(r) sont intéressants comme support, les participants auront :\r\n\r\n> Découvert une méthode par la pratique.\r\n\r\n> Se seront challengés sur leur créativité.",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "Lego", "développement", "Scrum", "Agile" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1411"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2131"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2111"
    } ]
  }, {
    "idSession" : 1431,
    "votes" : 37,
    "positiveVotes" : 30,
    "nbConsults" : 449,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Venez découvrir CDI, la perle de Java EE !",
    "summary" : "Contexte & Dependency Injection (CDI) ne fait pas que de l'injection de dépendance. Vous avez des doutes ?",
    "description" : "Dans cette session, je présenterai CDI (Contexte & Dependency Injection), expliquerai la plupart des concepts (injection, alternatives, producteurs, intercepteurs, décorateurs, événements ...), mais aussi vous montrerai pourquoi CDI est devenu la spécification principale de Java EE (tout simplement car elle utilisée dans la plupart des spécifications Java EE ;o). Tout ceci avec un doux mélange de slides et de démos qui fonctionnent (aidé de JBoss Forge et JRebel). CDI 2.0 étant dans les starting blocks, je terminerai la session en vous donnant la feuille de route de cette nouvelle version.",
    "ideaForNow" : "Comment je peux intégrer CDI dans mon projet",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "CDI" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1431"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2141"
    } ]
  }, {
    "idSession" : 1461,
    "votes" : 300,
    "positiveVotes" : 272,
    "nbConsults" : 739,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Du Web hors-ligne avec les Services Workers",
    "summary" : "Les Services Workers arrivent dans nos navigateurs Web et nous promettent du lourd : hors-ligne, notifis push, synchro en background...",
    "description" : "Les Services Workers arrivent dans nos navigateurs Web et nous promettent une petite révolution : hors-ligne, notifications push, synchro en background...\r\n\r\nAu cours de cette session, je vous propose de découvrir en détails ces Service Workers. Nous verrons comment les utiliser sur une application Web mobile pour développer une expérience “offline-first”. Nous aurons également l'occasion d'aborder les autres technos modernes utiles pour ce genre d'approche : AppCache, Promises, cache, fetch, IndexedDB...",
    "ideaForNow" : "Rendre son application Web disponible hors-ligne et améliorer les performances.",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "offline", "JavaScript", "performance", "Mobile" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1461"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2171"
    } ]
  }, {
    "idSession" : 1491,
    "votes" : 156,
    "positiveVotes" : 140,
    "nbConsults" : 514,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Rétrospective et intelligence collective",
    "summary" : "Faire émerger le meilleur d'une équipe lors des rétrospective en utilisant des outils collaboratifs et l'intelligence collective",
    "description" : "Cette session sera un mix entre une conférence et un atelier.\r\nLa rétrospective est un moment privilégié dans la vie d'une équipe agile, il faut en prendre soin.\r\nEn tant que coach agile et facilitateur au sein d'Orange, j'interviens auprès de plusieurs projets tout au long de l'année. \r\nJe facilite en moyenne 3 rétrospectives par mois. Cette profusion m'a obligé à repenser ma façon de mener ces moments. A expérimenter, échouer, réussir de nouveaux ateliers. A m'adapter à des situations, des contextes radicalement différents.\r\n\r\nPour trouver les actions qui permettrons à l'équipe de s'améliorer, celle dernière va devoir entamer un voyage. Qu'il soit d'1heure ou de 3heures, les étapes à franchir sont toujours les mêmes. Pour les découvrir ou les re-découvrir, je vous proposerai plusieurs leviers pour permettre de passer ces différentes étapes en toute quiétudes : \r\nlibérer la parole au sein du groupe, faire jouer l'intelligence collective, utiliser des outils collaboratifs et s'améliorer !\r\nUn peu de théorie et beaucoup de pratique pour expérimenter ces outils.\r\n\r\nLien de la présentation : http://prezi.com/dm3eacbpf2zc/?utm_campaign=share&utm_medium=copy\r\n",
    "ideaForNow" : "Des séquences d'atelier utilisables de suite pour mener à bien une rétrospective.",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "Inte", "Outils collaboratifs", "Am", "Rétr" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1491"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2191"
    } ]
  }, {
    "idSession" : 1511,
    "votes" : 145,
    "positiveVotes" : 140,
    "nbConsults" : 402,
    "lang" : "en",
    "format" : "Talk",
    "title" : "OrientDB - the 2nd generation of (MultiModel)NoSQL",
    "summary" : "NoSQL claim was to use the right database model for the right domain. Bad news, in most cases a single database model is not enough!",
    "description" : "In last years NoSQL experienced a huge upward trend, offering new data models (Document, Graph, Key-Value...) to solve problems where old RDBMS failed.\r\nNow people who have chosen NoSQL as an architecture component, realize that a single data model (even when richer that relational), is not enough for average needs.\r\nToday's next generation solutions scale horizontally and provide enterprise-grade availability and security whilst simplifying development through multiple APIs. \r\nLuigi Dell'Aquila, Director of Consulting at Orient Technologies Ltd (the company behind OrientDB, the first ever multi-model database), discusses the latest technology innovations and the market's demand for databases that combine more than one NoSQL model (ex. GraphDB, DocumentDB, Key/Value, Objects). \r\nIn this lecture, we will discuss why graph databases are at the heart of the multi-model revolution and why we're approaching the end of NoSQL's fragmented ecosystem where customers are forced to use multiple tools in their architectures. Benefits and compromises of this approach along with real world use cases will also be shared. ",
    "ideaForNow" : "",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "NoSQL", "Document Databases", "Big Data", "Graph Databases", "Multi-Model Databases" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1511"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2311"
    } ]
  }, {
    "idSession" : 1581,
    "votes" : 208,
    "positiveVotes" : 176,
    "nbConsults" : 788,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Solution Focus in Team + déjeuner",
    "summary" : "L’amélioration continue en équipe avec le Solution Focus in Team : utilisez votre équipe comme un coach !",
    "description" : "Atelier de 20 participants maximum.\r\n\r\nVous êtes Manager (de Managers) ou Scrum Master et vous retrouvez bloqué dans la mise en oeuvre d’axes d’améliorations, par exemples définis en rétrospectives. Les obstacles paraissent insurmontables dans votre contexte, \"sur ce projet avec cette équipe ce n’est pas possible\". \r\n\r\nCette session va vous permettre de ré-enclencher des actions concrètes et de gagner en confiance. La session s’adresse aussi à ceux qui ont l’impression de ne plus avoir besoin ni envie de changer quoi que ce soit. \r\n\r\nAprès une courte introduction à la posture de coach, je vous présenterai les principaux outils du coach. Ensuite, nous regarderons plus en détail la technique Solution Focus ainsi que ces étapes concrètes avec le partage d’un exemple d’utilisation sur un cas réel. \r\n\r\nEnfin, nous mettrons en pratique, à la manière d’un coaching dojo :\r\n- exposé de la demande\r\n- clarification (questions ouvertes)\r\n- le groupe échange sur des solutions possibles, des idées (le demandeur n’intervient pas, il écoute)\r\n- le demandeur donne un feedback sur ce qui l’a intéressé, ce qu’il pense pouvoir faire.\r\n\r\nA noter que le déjeuner sera sous forme de buffet dans la salle même de l'atelier.\r\n",
    "ideaForNow" : "Vous repartirez avec : une idée plus claire de ce qu’est le coaching, une nouvelle technique puissante à mettre en oeuvre avec vos équipes (par exemple en rétrospective), un retour d’expérience, une mise en pratique collective.\r\n",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "Facilitation", "approche appréciative", "coaching d'équipe", "Agile" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1581"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/601"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/160"
    } ]
  }, {
    "idSession" : 1651,
    "votes" : 105,
    "positiveVotes" : 84,
    "nbConsults" : 843,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Le JavaScript du futur au bout des doigts",
    "summary" : "Découverte de ce que va nous apporter les nouveautés EcmaScript mais surtout comment l'utiliser et le mettre en oeuvre au quotidien.",
    "description" : "> \"J'ai fais un rêve\r\n\r\n> Un rêve, où nous codions en ES6 / ES7.\r\n\r\n> Un rêve, où les navigateurs les supporteraient\"\r\n\r\n***\r\n\r\nComme pour HTML5 vers les années 2009 / 2010, nous sommes beaucoup à nous demander si nous devons d'ors et déjà se lancer à l'aventure. Certains disaient: \"Les navigateurs ne sont pas encore prêts, attendons\". D'autres pensaient plutôt: \"Nous allons de toute manière aller vers cette direction, autant anticiper!\".\r\n\r\nPersonnellement, je suis plutôt dans ce deuxième mode de pensées. Mais cela implique de savoir:\r\n\r\n* Quelles fonctionnalités ES sont présentes au sein de nos navigateurs ?\r\n* Devons-nous mettre en oeuvre des polyfills ?\r\n* Quels outils utilisés ?\r\n\r\nBref, tout simplement, comment moi développeur je peux concevoir une application du futur avec les outils d'aujourd'hui ?\r\n\r\n***\r\nCet atelier aura donc pour vocation:\r\n\r\n* De faire un bref historique de EcmaScript\r\n* De parler des nouveautés phares \r\n* De créer \"from scratch\" une petite application (vraiment petite) et cela afin de voir les étapes pour arriver à basculer vers ES6 / ES2015\r\n* De voir les outils à notre disposition\r\n\r\n--------------------------------------------------------------------------------------------------------------------\r\n\r\nAfin que la session se passe au mieux (en cas de non connexion Internet ou autre), je vous propose dès maintenant d'installer les outils suivants sur votre machine:\r\n\r\n* NodeJs: https://nodejs.org/\r\n* Chrome: https://www.google.com/chrome/browser/desktop/index.html\r\n* Firefox: https://www.mozilla.org/fr/firefox/new/\r\n* Git: https://msysgit.github.io/\r\n* Webstorm (version d'évaluationd e 30 jours): https://www.jetbrains.com/webstorm/\r\n\r\nUne fois que tout cela est prêt, ouvrez un shell et tapez la commande suivante:\r\n> npm install -g less babel@4.5.3 es6-module-loader@0.11.2 systemjs@0.11.3\r\n\r\nCela installera des modules nodes nécessaires à l'atelier afin que vous puissiez la suivre même sans connexion Internet.\r\n\r\nA très bientôt !",
    "ideaForNow" : "",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "industrialisation", "ES6", "ES2015" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1651"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/285"
    } ]
  }, {
    "idSession" : 1701,
    "votes" : 129,
    "positiveVotes" : 114,
    "nbConsults" : 478,
    "lang" : "en",
    "format" : "Talk",
    "title" : "Write in AsciiDoc, Publish Everywhere!",
    "summary" : "Using AsciiDoc, you can write once and publish everywhere. Discover even more ways you can benefit from using AsciiDoc for documentation!",
    "description" : "By using AsciiDoc, you're already following one of the best practices we recommend. You can write once and publish everywhere!\r\n\r\nAsciiDoc takes a lot of the pain out of writing documentation and keeps it DRY. As with any tool, you need to learn the best practices to use it effectively, such as:\r\n\r\n* How to organize your documentation\r\n* How to make your documentation approachable to contributors\r\n* How to make your documentation easy to maintain\r\n* What tools to use to simplify collaboration & maximize reuse\r\n\r\nI'll address some of the challenges we've come across writing documentation in AsciiDoc, offer a set of tips and recommendations that have helped us improve our writing flow and provide advice about how to keep presentation from leaking into your content...and why it matters.",
    "ideaForNow" : "* Techniques for organizing your documentation\r\n* Tools for using AsciiDoc more effectively\r\n* How to get others to help you write content",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "documentation", "AsciiDoc", "Tools" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1701"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2441"
    } ]
  }, {
    "idSession" : 1771,
    "votes" : 66,
    "positiveVotes" : 48,
    "nbConsults" : 394,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Switch to Swift",
    "summary" : "D’un langage dynamique, orienté objet à un langage statique fortement typé avec de la programmation fonctionnelle n’y a-t-il qu’un pas?",
    "description" : "Révélé au public en Juin dernier lors de la conférence WWDC, Swift est déjà classé 22ème au RedMonk index. Adopter Swift ce n’est pas juste faire un relooking de votre code Objective-C avec un syntaxe plus jolie. C’est un réel changement de paradigme: d’un langage dynamique, orienté objet à un langage statique fortement typé ouvrant la voix de la programmation fonctionnelle n’y a-t-il qu’un pas?\r\n\r\nEn travaillant avec Swift (depuis le premier jour, coup de foudre oblige) sur les librairies open source d’AeroGear, en tant que développeur, j’ai enrichi ma boite à outils d’un nouveau couteau suisse plein de super-pouvoirs. J’aimerais partager avec vous mon expérience en illustrant mon propos avec quelques dessins, des extraits de code, des bouts de playground et un soupçon d’Xcode. C’est sûr on va bien s’amuser.\r\n",
    "ideaForNow" : "Get a feel of Swift",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "Swift", "iOS", "Mobile" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1771"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2521"
    } ]
  }, {
    "idSession" : 1791,
    "votes" : 135,
    "positiveVotes" : 125,
    "nbConsults" : 469,
    "lang" : "en",
    "format" : "Talk",
    "title" : "The Social Coding Contract",
    "summary" : "Dependency management tools make life easier than ever for developers but let's pause to consider the unintended consequences of open source",
    "description" : "Social coding revolutionized how we share useful code with others. Bundler, npm, and Github made publishing and consuming code so convenient that our dependencies have become smaller and more numerous. Nowadays, most projects quickly resemble a Jenga tower, with layer upon layer of poorly understood single points of failure.\r\n\r\nDespite our progress, we'd benefit from pausing to reflect on our relationship with open source. Convenience and ego drive most open source adoption, but these shortsighted motivations raise long-term problems we need to clearly identify if we can ever hope to solve them.",
    "ideaForNow" : "",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "open source", "design", "Node.js", "Ruby", "architecture" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1791"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2531"
    } ]
  }, {
    "idSession" : 1801,
    "votes" : 444,
    "positiveVotes" : 420,
    "nbConsults" : 516,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Disruptive hackers, le pouvoir de changer le monde",
    "summary" : "A l’image de super héros nous avons des supers pouvoirs et comme tous super héros à grands pouvoirs, grandes responsabilités",
    "description" : "Ce n’est pas un hasard si 2 des plus grandes companies IT au monde sont détenues par des développeurs, le logiciel dévore le monde et nous, les développeurs et hackers, en sommes les instigateurs. \r\nA l’image de super héros nous avons des supers pouvoirs et comme tous super héros à grands pouvoirs, grandes responsabilités ainsi nous devons être en mesure de créer des innovations au service des gens et en rupture avec leurs anciennes habitudes. ",
    "ideaForNow" : "",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "customer development", "culture hacking", "DDD", "JavaScript", "offline-first", "MVP", "Amélioration continue", "user-first", "no-backend", "mobile-first", "Lean Startup", "prétotyping" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1801"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/1611"
    } ]
  }, {
    "idSession" : 1821,
    "votes" : 104,
    "positiveVotes" : 96,
    "nbConsults" : 1568,
    "lang" : "en",
    "format" : "Talk",
    "title" : "lichess.org: open source success story",
    "summary" : "The second most popular chess server is free, open source, and maintained by volunteers only. \r\nHow do we do it?",
    "description" : "Most programmers have side projects. They're usually short lived, but once in a while,\r\none of them gets some traction and amazing things start happening.\r\nStarted 5 years ago as a real-time web app experiment, lichess.org is now one of\r\nthe most popular chess servers and websites around.\r\n\r\nMany things have changed, but the core philosophy remains the same: \r\nit's free for everyone, there will never be ads, all source code is open sourced under MIT.\r\n\r\nWe'll discuss the challenges faced during lichess outstanding growth.\r\n\r\nHow to keep the codebase efficient and maintainable.\r\nHow to leverage the community energy to solve problems.\r\nHow to outperform million dollars companies, without raising a cent.\r\nHow to host more than 5 million new chess games per month, for 183$ of server costs.\r\n\r\nThis talk will go through several aspects of building a successful web service,\r\nfrom the backend, frontend, architecture, sysadmin, and community management perspectives.\r\n\r\nSource code: https://github.com/ornicar/lila\r\n\r\nStack: scala, mongodb, elasticsearch, nginx, mithril.js, websocket.\r\n\r\nFancy representation of lichess real-time network: http://lichess.org/network",
    "ideaForNow" : "Build a modern, real-time system.\r\nTry hard to keep things simple.\r\nSee users as contributors rather than credit cards.\r\nFight the system.\r\nHave fun.",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "open source", "free  software", "community", "scalability" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1821"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2391"
    } ]
  }, {
    "idSession" : 1881,
    "votes" : 760,
    "positiveVotes" : 640,
    "nbConsults" : 894,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Fabriquez votre devbox portable avec Docker",
    "summary" : "Comment éviter aux collègues le \"Y'a qu'à installer [longue liste d'outils], mais ça marche pas sauf avec [autre longue liste d'outils]\" ?",
    "description" : "Tu l'as sûrement deja vécu, ami développeur/Full stack Engineer.  Lors de l'accueil un nouveau collègue ou un stagiaire, il te faut consacrer 2 jours et une énergie sans précédent avant qu'il puisse  \"vraiment\" travailler sur le projet.\r\n\r\nMettre au point et surtout maintenir un environnement de développement efficace et adapté a l'écosystème de votre équipe met du temps. Mais son apprentissage par le nouvel arrivant aussi. Et de plus la courbe d'apprentissage n'est pas linéaire. Conséquences: démotivation, planning décalé, frustration.\r\n\r\nEt si on repensait tout cela avec les outils de notre métier ? L’environnement de développement comme une brique logicielle ?\r\n\r\n* une brique versionnée,\r\n* testée continuellement,\r\n* Extensible,\r\n* Portable,\r\n* Partageable.\r\n\r\nL'outil Docker, capable de solutionner ce type de problèmes pour les applications classiques, ouvre la voie à des approches novatrices: pourquoi ne pas mettre son environnement de développement dans un container portable ?\r\n\r\nAu travers d'un workflow \"classique\" de développement, cette session présente :\r\n\r\n* Comment assembler un environnement de dév. graphique dans un containeur Docker\r\n* Comment l'utiliser efficacement\r\n* Comment le partager sur un autre OS (Mac -> Linux) à un autre dévelopeur\r\n* Des paradigmes nouveaux permis par Docker : \"devbox in the cloud\", \"continously testing my devbox\", etc.\r\n",
    "ideaForNow" : "* Je peux monter ma propre devbox dans un Dockerfile dès maintenant\r\n* Je peux partager ma devbox avec mes collègues, indépendamment de leur PC de dév (Mac, Linux, Windows...)\r\n* Je peux appliquer mon processus de développement (SCM, TDD/BDD, Continous*) à ma devbox\r\n* Je ne vais plus vivre l'\"onboarding\" et le \"project switching\" comme des contraintes",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "continous", "DevOps", "development", "Docker", "devbox" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1881"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2351"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/618"
    } ]
  }, {
    "idSession" : 1941,
    "votes" : 128,
    "positiveVotes" : 112,
    "nbConsults" : 396,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Material Design implementation in Android",
    "summary" : "Comment implémenter un Design d'inspiration Material dans une application Android.",
    "description" : "En juin dernier, lors de la Google IO, Google a présenté une nouvelle approche dans le design des ses différents produits : Material Design. Cette approche est appliquée à la fois sur Android, iOS et le web.\r\n\r\nMaterial a introduit de nombreux nouveaux éléments visuels tels que les ripples, les Floating Action Button, etc. Dans cette session, nous allons voir quels sont les outils à notre disposition sur Android pour implémenter à l'aide de ces différents éléments une application au style Material Design. Tout en prenant en compte la question de la compatibilité en montrant des solutions pour que ceci ne soit pas uniquement disponible sur Lollipop, la dernière version du système, mais aussi sur les plus anciennes version d'Android.",
    "ideaForNow" : "Plusieurs petites étapes relativement faciles à implémenter pour faire un rapide lifting de son app Android seront présentées.",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "Material Design", "design", "Mobile", "Android" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1941"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/7"
    } ]
  }, {
    "idSession" : 1971,
    "votes" : 119,
    "positiveVotes" : 112,
    "nbConsults" : 667,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Le panda roux est mon nouvel ami.",
    "summary" : "J'ai développé une application pour Firefox OS et j'ai aimé ça. Ça vous tente aussi ? Venez découvrir mon expérience.",
    "description" : "On parle beaucoup de **Firefox OS** mais encore peu de monde a vraiment joué avec. Durant plusieurs mois, j’ai développé une application de lecture d’eBooks qui sera bientôt disponible sur le Marketplace de Firefox. Je suis là pour vous faire un **retour d’expérience** sur le sujet.\r\n\r\nVous êtes intéressés par cette plate-forme, mais vous vous posez des questions sur ce qui est réalisable et comment ? Nous verrons ce qu’est réellement une application pour Firefox OS, les technologies employées pour réaliser son développement et les problèmes que j’ai pu rencontrer.",
    "ideaForNow" : "Pourquoi partir sur Firefox OS ?\r\n\r\n- j’ai des ressources pour démarrer le développement de mon application\r\n- j’ai vu certains risques et comment les éviter\r\n- je peux mieux estimer le coût d’une telle application\r\n",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "Application Web", "panda", "Web", "HTML5", "JavaScript", "Firefox OS", "Retour d'expérience" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1971"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/451"
    } ]
  }, {
    "idSession" : 1981,
    "votes" : 270,
    "positiveVotes" : 245,
    "nbConsults" : 606,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Application isomorphique avec ReactJS et Flux",
    "summary" : "Comment répondre aux problématiques de performance et de SEO des applications single-page grâce à l’isomorphisme avec React et Flux ?",
    "description" : "React est énorme et mérite largement son buzz ! Mais React seul ne suffit pas à coder une application single-page : il libère sa quintessence lors de son utilisation dans un environnement CommonJS (modularisation des applications JS) en lui adjoignant le modèle Flux (alternative au modèle MVC). Et il devient alors possible de l’utiliser dans un contexte projet, avec de vraies problématiques (tests, performances, productivité, ...).\r\n\r\nMalheureusement, à ce stade les articles et tutoriaux deviennent rares. Les retours d’expérience des géants du web (Facebook, Instagram, Netflix) ne correspondent pas forcément à nos réalités projet. Tout cela rend difficile le choix d’adopter React par rapport à ses concurrents bien implantés.\r\n\r\nLe jeu en vaut pourtant la chandelle et c’est ce qu’un live-coding “from scratch” d’une application basée sur React va essayer de montrer.\r\n\r\nLes lignes directrices du live-coding sont :\r\n\r\n - Construire une application de base (listing des photos récentes uploadées sur Flickr) avec des composants React simples, testés par Jest (le lanceur de test “officiel”)\r\n - Implémenter Flux brique par brique pour en comprendre les principes\r\n - Rendre l’application isomorphique et répondre aux problématiques inhérentes aux applications single-page, à savoir le chargement initial et le SEO.\r\n",
    "ideaForNow" : " - La connaissance d’une stack de développement éprouvée basée sur React, \r\n - Un ensemble de bonnes pratiques,\r\n - L’enthousiasme autour de la technologie !",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "Live Coding", "isomorphisme", "JavaScript", "Flux", "React" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1981"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/114"
    } ]
  }, {
    "idSession" : 1991,
    "votes" : 423,
    "positiveVotes" : 387,
    "nbConsults" : 801,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "ReactJS pour les néophytes",
    "summary" : "Venez découvrir React, la librairie web du moment dans un atelier 100% JS, le vrai JS, celui qui marche, celui qui fait plaisir à coder !",
    "description" : "Vous le savez sans doute, le javascript ne sert plus à faire tomber des flocons ou afficher des étoiles qui suivent les mouvements du curseur. De vrais frameworks JS tels que Backbone, AngularJS, etc. ont vu le jour et permettent de contrôler partiellement ou complètement les pages de nos applications web. Avec NodeJS, le langage s’est également déporté coté serveur.\r\n\r\nDepuis quelques mois, React fait parler de lui avec ses bonnes idées et sa volonté de réécrire les standards. \r\n\r\nOn vous propose de le mettre en oeuvre après une présentation courte sur l’environnement de développement et en commençant par les bases.\r\n\r\nLe but est d’arriver à construire une application basée sur React avec une implémentation de Flux existante (Note: sans doute Reflux).\r\n\r\nL’approche sera progressive et autant que possible dirigée par les tests (TDD).\r\n\r\nPrérequis : \r\n\r\n - Une connaissance, même faible, dans un framework javascript (ne serait-ce que jQuery)\r\n - Un poste avec NodeJS et un éditeur web (Webstorm, Atom, Sublime, Bracket, …)\r\n - Validation des prérequis techniques du poste [ici](https://github.com/flepretre/prerequis-atelier-react)\r\n",
    "ideaForNow" : " - La connaissance de l’API React, \r\n - La compréhension du modèle Flux\r\n - Un peu moins d’idées, justement, préconçues sur le JS (qui a dit trolls ?)",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "JavaScript", "Flux", "React" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/1991"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/114"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2651"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/105"
    } ]
  }, {
    "idSession" : 2061,
    "votes" : 114,
    "positiveVotes" : 108,
    "nbConsults" : 338,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Applications Concurrentes Polyglottes avec Vert.x",
    "summary" : "Vert.x est une plateforme pour créer des applications concurrentes, performantes et polyglottes sur la JVM.",
    "description" : "Cette session parlera des choix faits par Vert.x, de son modèle de concurrence et explique comment écrire des applications concurrentes et performantes de manière très simple. Nous aborderons quelques aspects clés de Vert.x comme le bus d'évènement distribué ou la haute disponibilité. La présentation parlera de Vert.x 3.0, de ses nouvelles fonctionnalités et montrera des exemples dans plusieurs languages tels que Java, Javascript, Groovy ou Ruby.\r\n",
    "ideaForNow" : "",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "JVM platform", "reactive", "polyglot" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/2061"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/973"
    } ]
  }, {
    "idSession" : 2081,
    "votes" : 172,
    "positiveVotes" : 172,
    "nbConsults" : 547,
    "lang" : "en",
    "format" : "Talk",
    "title" : "Microservices with Spring Cloud and Netflix OSS",
    "summary" : "How can you build today a microservice oriented architecture with Spring Boot, Spring Cloud and Netflix OSS?",
    "description" : "Microservices and distributed architectures are all the hype right now; more than just buzzwords, we're actually refreshing our approach to application architecture - and it works.\r\n\r\nBut how does one build a microservice architecture?\r\n\r\nJoin this session and learn how we can do that with Spring Boot and the new Spring Cloud project incorporating Netflix OSS. We'll talk about:\r\n\r\n* Distributed/versioned configuration\r\n* Service registration and discovery\r\n* Routing\r\n* Service-to-service calls\r\n* Load balancing\r\n* Circuit Breakers\r\n* Async programming\r\n* Distributed messaging\r\n\r\nYou'll leave this session with a better understanding of **microservices and distributed application problems** and **concrete examples with Netflix OSS and their integration with Spring Boot**.",
    "ideaForNow" : "* better understanding of microservices architectures\r\n* how to apply those concepts today with Spring Boot and Spring Cloud",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "netflix", "Spring Boot", "microservices", "Spring" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/2081"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/62"
    } ]
  }, {
    "idSession" : 2141,
    "votes" : 53,
    "positiveVotes" : 50,
    "nbConsults" : 596,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Broker de messages Kafka, retour d'expérience",
    "summary" : "Retour d'expérience sur Kafka, un broker de messages très performant, scalable, distribué et persistant",
    "description" : "Cette session est l'occasion de découvrir Kafka : un broker de messages de nouvelle génération avec des performances impressionnantes, une garantie de persistance et de réplication des messages.\r\nKafka est sorti de l'ombre ces deux dernières années et est désormais utilisé chez beaucoup de grands comme LinkedIn, Twitter, Loggly ou OVH.\r\n\r\nOn est pas forcément confronté tous les jours à des besoins nécessitant d'avoir des throughput dépassant les 10 000 messages par seconde et avec des latences de quelques millisecondes, mais les nouveaux usages liés au BigData, à la collecte de logs, ou autres nous y amènent vite.\r\n\r\nVous verrez :\r\n\r\n* quels sont les concepts de Kafka\r\n* quels sont les cas d'usages potentiels\r\n* l'architecture de Kafka\r\n* comment faire scaler horizontalement un cluster Kafka\r\n* quels sont les compromis à faire\r\n* quelles performances attendre, y compris sur du petit matériel\r\n* dans quel écosystème BigData Kafka s'inscrit (architecture Lambda, Storm, Hadoop, HBase, ...)\r\n\r\nBref, outre les points précédents, vous aurez un vrai retour d'expérience sur Kafka.",
    "ideaForNow" : "Vous aurez compris ce qu'est Kafka, pourquoi il est performant.\r\nVous saurez dans quel écosystème il peut s'intégrer et si il est applicable à votre contexte ?",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "broker performance scalabilité distribué BigData" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/2141"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/1072"
    } ]
  }, {
    "idSession" : 2161,
    "votes" : 260,
    "positiveVotes" : 210,
    "nbConsults" : 442,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Atelier Fruit Shop, la vie d'un projet en 2h",
    "summary" : "Atelier de programmation qui simule la vie d'un projet en 2h. Changement de direction, de deadline. Votre code va t'il y survivre ?",
    "description" : "Nous vous proposons de venir participer avec un atelier qui vise à vous faire revivre la vie d'un projet en 2h.\r\n\r\nRebondissement inattendu, changement de direction, souhaits des utilisateurs, architecture technique style tour d'ivoire... Votre code va t'il y survivre ?\r\n\r\nC'est un atelier technique où il vous faudra faire un programme très simple dans le langage de votre choix (java, c#, JavaScript ou autre).\r\n\r\nL'atelier est en 2 parties, une ou nous codons le projet qui dure environ 1h30 et une rétrospective afin que nous partagions ce que nous avons découvert.\r\n\r\nVous endosserez le rôle d'un programmeur travaillant pour la startup FruitsShop.io et qui va sortir un logiciel révolutionnaire grâce au deux Product Owners que sont Bruno Boucard & Jean-Laurent de Morlhon fraîchement sortie de SupDeCo Aurillac.\r\n\r\nA vos claviers ! (Amener un laptop avec votre environnement de programmation favori, un ordinateur pour 2 personnes, est suffisant).",
    "ideaForNow" : "Comment produire du code utile en moins de 10 minutes.",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "Clean Code", "code smells", "Test", "architecture émergeante", "simple" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/2161"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/1541"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/597"
    } ]
  }, {
    "idSession" : 2181,
    "votes" : 560,
    "positiveVotes" : 512,
    "nbConsults" : 622,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "(Re)Cadrage en équipe agile",
    "summary" : "Lean start up et Design Thinking : qu'est ce que ça change pour ma phase de cadrage agile ?",
    "description" : "C'est en nous inspirant des philosophies du Design Thinking et du Lean Start-up que nous avons décidé d'associer nos compétences et expériences de Product onwer et UX Designer.\r\nNous cherchons des façons concrètes de les appliquer sur des projets avec des contraintes fortes tels que les projets agiles.\r\n\r\nC'est sur ces premières expériences et premiers succès, que se basent nos principes et astuces de cadrage que nous partageons avec vous.\r\n\r\nNous donnerons un ensemble de pistes à suivre pour utiliser au mieux les philosophies du Design Thinking et du Lean Start-Up lors de votre cadrage. \r\nCelles-ci vous permettront de construire rapidement :\r\n- Une vision commune du produit,\r\n- Démarrer les sprints avec une compréhension des besoins utilisateurs partagée par tous les membres de l'équipe,\r\n- Créer une conscience d'équipe étendue.\r\n\r\nCette conférence est destinée à public d'agilistes, managers, designer, et développeurs.",
    "ideaForNow" : "- Savoir quels profils sélectionner pour participer à une phase de préparation d'un projet agile.\r\n- Comment faire travailler ensemble ces différents profils (développeurs, business, UX, graphistes... ).\r\n- Comment exploiter au mieux les délais et les contraintes de temps dans cette phase.\r\n- Comment lever un maximum de risques en fonction des contraintes projet.",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "risques", "lean start-up", "Agile User Experience", "product ownership", "cadrage", "agile UX", "design thinking", "Agile" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/2181"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2771"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2541"
    } ]
  }, {
    "idSession" : 2191,
    "votes" : 224,
    "positiveVotes" : 189,
    "nbConsults" : 557,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Le pourquoi du pourquoi de l’agilité",
    "summary" : "Et si on examinait les maux des organisations non (encore:) agiles via les prismes historique, culturelle, anthropologique, psychologique?..",
    "description" : "Pourquoi l'agilité serait une solution ?  \r\nRéponse-type : pour contrer des projets qui échouent, des individus désengagés, des organisations dysfonctionnelles, etc.  \r\nMais ne serait-il pas intéressant d’essayer de diagnostiquer pourquoi ces symptômes émergent, c'est-à-dire \"Le pourquoi du pourquoi de l'agilité\" ?  \r\nEt bien, à travers plusieurs grilles de lecture (historique, culturelle, anthropologique, psychologique...) nous irons à la racine pour voir en quoi l'agilité a du sens.",
    "ideaForNow" : "Des éléments de compréhension historique, culturelle, anthropologique, psychologique pour \"voir\" (format Prezi aidant :) en quoi l'agilité a du sens ; bref, des \"idées pour demain à la machine à café\" afin de re-contextualiser notre situation dans le monde de l'entreprise, et notamment dans l'I.T.",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "pourquoi", "psychologique", "anthropologie", "diagnostic", "culturelle", "Agile", "historique" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/2191"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2081"
    } ]
  }, {
    "idSession" : 2211,
    "votes" : 378,
    "positiveVotes" : 336,
    "nbConsults" : 516,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Comment préparer les interview utilisateurs ?",
    "summary" : "Outil de base du Design Thinking et du Lean Start-Up, l'interview utilisateur ne s'improvise pas. Venez apprendre comment les préparer !",
    "description" : "C'est en nous inspirant des philosophies du Design Thinking et du Lean Start-up que nous avons décidé d'associer nos compétences et expériences de Product onwer et UX Designer. Nous cherchons des façons concrètes de les appliquer sur des projets avec des contraintes fortes tels que les projets agiles.\r\nL'interview  utilisateur est un outil de base, pourtant elle doit être minutieusement préparée pour être efficace.\r\n\r\nNous vous proposons de partager avec vous nos techniques pour préparer une interview lors de cet atelier, dans le contexte d'une problématique précise.\r\nChaque équipe préparera son interview et la réalisera afin de gagner un maximum d'informations pertinentes sur l'utilisateur et son environnement en levant un maximum de risques projets avec un investissement réduit.\r\n\r\nCet atelier est ouvert à des profils  Product Owner débutants, Marketing, Métier, agilistes, entrepreneurs.",
    "ideaForNow" : "Les participants auront expérimenté :\r\nLa collaboration en équipe de profils divers, pratique au coeur du Design Thinking.\r\nLa création d'une trame d'interview utilisateurs en fonction d'un objectif donné.\r\nL'affinage/ le test d'une interview.\r\n\r\nIl auront les outils pour mettre en pratique en situation réelle une interview utilisateur en sortie d'atelier.",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "Product Owner", "lean start-up", "Interview utilisateurs", "product ownership", "UX design", "design thinking", "Agile" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/2211"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2771"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2541"
    } ]
  }, {
    "idSession" : 2281,
    "votes" : 28,
    "positiveVotes" : 26,
    "nbConsults" : 576,
    "lang" : "en",
    "format" : "Talk",
    "title" : "Driving Open Source Adoption with Documentation",
    "summary" : "Conquer the complexity of creating documentation. Learn how to plan, structure, and write documentation for all types of users.",
    "description" : "Documentation is crucial to increasing an open source project's adoption and growth. But once you consider your users' needs as well as their backgrounds, environments, and constraints, writing the documentation can feel overwhelming.\r\n\r\nIn this workshop, we'll conquer this complexity by breaking down the planning, organization, and creation of documentation into basic, repeatable steps.\r\n\r\nSpecifically, we'll learn how to:\r\n\r\n• Determine your project’s audiences\r\n\r\n• Select and prioritize the types of documentation each audience needs\r\n\r\n• Outline and write the text\r\n\r\n• Brainstorm and create useful and interesting examples\r\n\r\n• Use the documentation to improve your project\r\n\r\n**This workshop is hands on!**\r\n\r\nWe will sort through user data, analyze the user data, and discover how the results will help us determine what documentation we should write. Then we will work through a horrible tutorial and figure out how to make it better.\r\n\r\n**You do not need any specific hardware, software, or programming knowledge to participate in this workshop.**",
    "ideaForNow" : "",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "documentation", "user research" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/2281"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2431"
    } ]
  }, {
    "idSession" : 2291,
    "votes" : 208,
    "positiveVotes" : 200,
    "nbConsults" : 721,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Introduction à l’IoT: du capteur à la donnée.",
    "summary" : "Vous voulez lancer un projet IoT ? A travers des exemples, découvrez comment connecter vos capteurs, récolter la donnée et l’analyser !",
    "description" : "De nos jours, l’Internet des Objets (IoT) est devenue un buzz word mais pour certains ça reste une boite noire. Cette conférence est une introduction à l’Internet des Objets. D’aboard, nous expliquerons ce que c’est que l’IoT, les usages et nous présenterons les différentes briques qui constituent  son écosystème: de la partie hardware à la partie donnée. Ensuite, à travers des retours d’experiences, des exemples et du code, nous présenterons les outils nécessaires pour débuter un projet IoT. De l’utilisation de carte embarquée pour connecter les capteurs, à la collecte de donnée avec MQTT, à la gestion des données avec Amazon Kinesis. L’Internet des Objets n’aura plus de secret pour vous!",
    "ideaForNow" : "-J’ai compris l’écosystème de l’Internet des Objets.\r\n-Je connais les outils nécessaires pour se lancer dans un projet IoT.\r\n-J’ai des exemples de code pour commencer rapidement à connecter mes capteurs et analyser la donnée.",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "Big Data", "iot" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/2291"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2781"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/596"
    } ]
  }, {
    "idSession" : 2311,
    "votes" : 180,
    "positiveVotes" : 160,
    "nbConsults" : 660,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Quand Dev et QA ne font plus qu'un",
    "summary" : "Délivrer très régulièrement peut rapidement devenir un cauchemar : quand le rêve devient réalité",
    "description" : "Partons de l'exemple d'une organisation tentant d'appliquer une méthode Agile ( Scrum dans notre cas ) sans revoir les fondements de son cycle de développement :\r\n\r\nSi bien souvent l’équipe de dev parvient à mener à bien ses itérations avec plus ou moins de difficultés, il n'en demeure pas moins que ceci n'est qu'une première étape. S'en suit alors une itération de qualification/tests en tout genre ( et oui car cette organisation est Agile ! :) ) qui SI elle est concluante et elle même suivit par une phase de release...\r\nTraduire ce type d'organisation par un joli dessin nous permettra de réaliser qu'en définitive cette organisation applique toujours un cycle en V à l'ancienne d'autrefois avec quasiment toutes les lenteurs et lourdeurs que cela implique.\r\n\r\nA contrario prenons l'exemple d'une organisation désirant faire l'impasse sur une réelle qualification (et oui tester c'est douter :) ) :\r\n\r\nCe type d'approche sur des projets complexes peut rapidement se traduire par empiler des problèmes de plus en plus inextricables au fils des itérations et inévitablement entamer le moral général ( dont celui du client, d'ailleurs n'est ce pas aussi un peu pour lui que nous sommes là  ? ).\r\n\r\nPartant de ces deux cas un petit peu \"extrêmes\" mais tellement représentatif de ce qui peut se pratiquer, je vous propose un retour d’expérience sur une organisation qui nous permet d'allier aujourd'hui rapidité et qualité pour le bonheur de tous !",
    "ideaForNow" : "Nouvelle vision de la qualification ou comment réconcilier Dev et QA\r\nQuelques conseils pour une meilleure préparation de l’itération\r\nQuelques conseils pour mettre en place un continuous deployment efficace\r\nNouvelle définition de \"l'engagement\" ?\r\nL’amélioration continue n'est pas un vain mot",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "delivery", "Qualité", "Continuous Deployment", "Agile" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/2311"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2821"
    } ]
  }, {
    "idSession" : 2321,
    "votes" : 105,
    "positiveVotes" : 98,
    "nbConsults" : 385,
    "lang" : "en",
    "format" : "Talk",
    "title" : "Build native mobile apps using JS and Appcelerator",
    "summary" : "Introduction workshop to Appcelerator Titanium where we will code a true native cross-platform app using JavaScript and the Alloy framework",
    "description" : "After a brief overview of what Titanium is, we will be coding our very first fully native cross-platform app. The session is mostly a \"live-coding\" formatted workshop where we will build an application aplication structure to improve upon.\r\n\r\nThe goal of the workshop is for attendees to leave with the code for their own app.\r\n\r\n##Come prepared:\r\n- Have the latest version of **Node.js** installed *(this will also install the `npm` package manager)* [ [Official Website](http://nodejs.org/download/) ]\r\n\r\n###Bring a Mac (if you can)\r\n- The latest version of **Xcode** from the Mac AppStore *(this is a pretty big download, so better download it before the session)*\r\n\r\n###If you run Windows (you are not second class citizens)\r\n- Windows 7 and up\r\n- The Oracle JDK *(32-bit version, this is important)* [ [Official Website](http://www.oracle.com/technetwork/java/javase/downloads/index.html) ] \r\n- Android SDK [ [ Official Website ](http://developer.android.com/sdk/index.html) ]\r\n\t- Once installed\tyou will need to download the following APIs using the **Android SDK Manager**\r\n\t\t- 4.0.x (API 14)\r\n\t\t- 5.0.1 (API 21) \r\n\r\n##BYOD\r\nIf you have your own Android device (sorry but iOS devices require you to give Apple money) and a USB cable, bu sure to bring it. This will allow you to show your friends and collegues what you have accomplished.\r\n",
    "ideaForNow" : "Developers can leverage their JavaScript knowledge to develop full native mobile cross-platform applications.",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "appcelerator", "native", "JavaScript", "titanium", "iOS", "Mobile", "Android" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/2321"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2831"
    } ]
  }, {
    "idSession" : 2331,
    "votes" : 23,
    "positiveVotes" : 21,
    "nbConsults" : 605,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Coding Dojo et Mob Programming dans les tranchées",
    "summary" : "Nous avons utilisé des Coding Dojo et le Mob programming pour partager le savoir faire dans l'équipe et augmenter la productivité.",
    "description" : "Nous présenterons un retour d'expérience d'un projet dans lequel nous avons utilisé des coding Dojo et le Mob programming pour former l'équipe de développement, et augmenter sa vélocité.\r\n\r\nLe projet: refonte du Système d'Information d'un organisme financier sur 1 an L'équipe: 6 développeurs dont 3 débutants sur la technologie (ASP.NET MVC)\r\n\r\nNous avons mis en place un cycle de formations au rythme de 2 à 3 sessions par semaine. Les sujets traités couvraient entre autre .Net/MVC, Test Driven Development et Fitnesse.\r\n\r\nChaque formation dure 2h, elle a lieu de préférence le matin. Elle est préparée à l'avance, et contient un exercice à réaliser, accompagné d'un document détaillant l'ensemble des tâches à faire.\r\n\r\nLes formateurs font l'exercice en projetant le code et en expliquant ce qu'ils font pendant 30 minutes (mode Kata). Ensuite on refait l'exercice en mode Randori par binome, chacun tient le clavier pendant 10 minutes. Le document sert de support.\r\n\r\nLe temps qui reste permet le débrief / perfection game et de choisir le prochain sujet ainsi que ceux qui prépareront la formation.\r\n\r\nEn parallèle nous livrons les contenus des sprints (1 sprint = 1 semaine), et nous faisons des sessions de Mob Programming: 6 développeurs, 1 clavier, 1 PO occasionnellement. Le but est que chacun code, le clavier change de main toutes les 15/20 minutes.\r\n\r\nNous présenterons durant notre session les résultats obtenus sur le projet. ",
    "ideaForNow" : "* Création d'un cycle de Dojo au sein même de votre équipe\r\n* Démarrer le Mob Programming",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/2331"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2861"
    } ]
  }, {
    "idSession" : 2361,
    "votes" : 93,
    "positiveVotes" : 78,
    "nbConsults" : 522,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Gradle Plugin, prenez le controle du build!",
    "summary" : "Vous utilisez Gradle et bidouillez vos scripts pour l'adapter a vos besoins. Passez au plugin pour prendre le contrôle du build !",
    "description" : "Apres plusieurs semaines de pratique de Gradle vous commencez à apprivoiser la bête et entrevoyez toute sa puissance.\r\nVos petits scripts fonctionnent bien et vous vous demandez maintenant comment améliorer encore votre système de build, proprement. Il est temps pour vous d'ajouter votre propre plugin Gradle à vos outils.\r\n\r\nEn prenant un exemple simple nous verrons ensemble à quel point il est facile de prendre le contrôle de son build !\r\n\r\nVoici quelques points abordés :\r\n- Créer un plugin Gradle et le controler depuis le build.gradle\r\n- Bien Tester son plugin\r\n- Gérer les builds incrémentaux\r\n- ...",
    "ideaForNow" : "Comment penser, développer et publier leur plugin Gradle",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "Plugins", "build", "Gradle" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/2361"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/654"
    } ]
  }, {
    "idSession" : 2371,
    "votes" : 42,
    "positiveVotes" : 42,
    "nbConsults" : 720,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Startups d'état",
    "summary" : "Innover, ce n'est pas avoir de nouvelles idées, c'est surtout abandonner des anciennes",
    "description" : "Comment ont donc été fabriqués dans l’état des outils aussi divers que data.gouv.fr, Marchés Publics Simplifiés, ou mes-aides.gouv.fr ? Saviez-vous qu’il s’agissait toujours d’équipes de 4 personnes et de mise en marché en moins de 6 mois. Etonnant non ?\r\n\r\nPlus vraiment. Car nous avons développé une méthode, inspirée des méthodes agiles, du mouvement lean startup, et de recettes de ma grand-mère et d'autres, dont nous nous inspirerons pour ce talk dédié à la fabrication d'outils numériques réellement utiles aux citoyens.",
    "ideaForNow" : "- trouver un sujet, un marché pour un outil numérique\r\n- créer un contexte favorable pour le réaliser, en particulier au sein des grandes structures",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "Lean" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/2371"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/965"
    } ]
  }, {
    "idSession" : 2391,
    "votes" : 234,
    "positiveVotes" : 182,
    "nbConsults" : 1605,
    "lang" : "en",
    "format" : "Talk",
    "title" : "The Mental Leaps at Ericsson 3G",
    "summary" : "Ways of Working in the Networked Society - how we made the transition to Lean, Agile & Flow \"stick\".",
    "description" : "In this session, I’ll share how we made three very important mental leaps to make the transition to Agile and Lean ”stick” including concrete examples of what we have done.\r\n\r\nLeap #1: From Methods & Tools to Principles & Mindset \r\nTools and methods can work in some contexts and not in others. If you have your own principles and mindset, then you can adapt or create your own methods and tools that fit your context. When realizing this, we made a mental leap from a focus on methods and tools to a focus on principles and mindset.\r\n\r\nLeap #2: From Resource Efficiency to Flow Efficiency\r\nWith a need reduce both costs and time-to-market we were looking for alternatives to “resource efficiency” focus (keeping people and equipment fully utilized at all times). We realized that our ability to innovate around state-of-the art algorithms for optimizing packet data flow in mobile radio networks is also applicable for our product development processes. We made a mental leap from “resource efficiency” to “flow efficiency”, i e a focus on keeping work items moving through the process without waiting times, delivering value as quickly as possible\r\n\r\nLeap #3: From Scattered Experiences to Continuous Innovation\r\nWe were solving problems as they occurred using task forces in fire-fighting mode, lacking corporate memory and a common direction. By creating a shared direction and a common purpose around the need to improve, we made the leap from scattered experiences to a culture of continuous innovation.\r\n\r\nEricsson is the driving force behind the Networked Society - a world leader in communications technology and services. Our long-term relationships with every major telecom operator in the world allow people, business and society to fulfill their potential and create a more sustainable future. With approximately 115,000 professionals and customers in 180 countries, we combine global scale with technology and services leadership. We support networks that connect more than 2.5 billion subscribers. Forty percent of the world's mobile traffic is carried over Ericsson networks. Net sales in 2014 were EUR 23.4 billion.",
    "ideaForNow" : "Ideas and inspiration on what concrete experiments to try in their own organizations to make their Lean/Agile/Flow transformations \"stick\"",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "ways of working", "Lean", "innovation", "process", "processes", "Tools", "process improvement", "queues", "change", "principles", "mindset", "improvements", "accelerated learning", "methods", "Visualization", "learning", "agile Scrum Kanban product Lean", "change management", "story-telling", "resource efficiency", "Kanban", "agile adoption", "flow efficiency", "Scrum", "flow", "Agile" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/2391"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2881"
    } ]
  }, {
    "idSession" : 2411,
    "votes" : 108,
    "positiveVotes" : 105,
    "nbConsults" : 1046,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Cloud et vie privée",
    "summary" : "Quelles solutions Cloud à l'heure où Snowden et la nouvelle loi Renseignement démontrent comment notre vie privée est menacée ?",
    "description" : "Aux débuts de l'informatique, l'utilisateur maitrisait le logiciel qu'il utilisait, les données étaient sur son PC et le réseau était inexistant.\r\n\r\nEn 2015, avec le Cloud (façon élégante de dire \"ordinateur de quelqu'un d'autre), nous ne maitrisons plus rien : nos données sont dans des silos dont le business model consiste à tout savoir sur nous. On sait depuis les révélations Snowden que les agences de renseignement se frottent les mains de cette situation, et la récente loi Renseignement démontre que c'est aussi le cas en France.\r\n\r\nComment pouvons-nous inverser la tendance ? Comment retrouver la maîtrise de notre informatique ? Tristan Nitot, dans le cadre de son livre sur le sujet, a développé 7 principes qu'ils présentera.",
    "ideaForNow" : "Comment je peux reprendre le contrôle sur mes données personnelles. Comment limiter ma dépendance aux grands silos numériques.",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "liberté", "Cloud", "vie privée" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/2411"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/994"
    } ]
  }, {
    "idSession" : 2421,
    "votes" : 117,
    "positiveVotes" : 111,
    "nbConsults" : 584,
    "lang" : "en",
    "format" : "Talk",
    "title" : "Selling BDD to the Business",
    "summary" : "How do you explain BDD to non-technical stakeholders: business sponsors, clients or senior management?",
    "description" : "\"I don't care how you do it - I just want it better, faster and cheaper and I don't want you to keep bugging me...!\"\r\n\r\nSoftware delivery shouldn't be a zero sum game where you have to choose between writing quality software, showing bottom line results and having fun. In this talk, Dan shares his experiences of introducing BDD and agile principles to senior stakeholders and business executives.",
    "ideaForNow" : "Ways to talk about methodology with non-technical stakeholders. Understanding of software delivery from a business perspective.",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "BDD", "business", "methodology" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/2421"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2841"
    } ]
  }, {
    "idSession" : 2451,
    "votes" : 33,
    "positiveVotes" : 26,
    "nbConsults" : 486,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "De zéro à héros avec Spring Boot",
    "summary" : "Utiliser Spring Boot, c'est un peu faire du pair programming avec l'équipe Spring. Venez découvrir Spring Boot par la pratique!",
    "description" : "Ensemble, nous partirons de zéro pour découvrir Spring Boot par la pratique, en construisant une application étape par étape :\r\n\r\n* démarrer un nouveau projet Boot facilement\r\n* créer des services REST\r\n* intégrer un datastore\r\n* sécuriser l’application\r\n* configurer l’application selon les environnements\r\n* utiliser hypermedia dans vos APIs REST\r\n* ajouter des “health checks”\r\n* préparer l’application pour la production (devops)\r\n* et plus encore!\r\n\r\nA la fin de cette session, vous connaîtrez les possibilités de Spring Boot et repartirez peut-être avec votre application dans le cloud!\r\n\r\nPour ce workshop, vous aurez besoin:\r\n\r\n* d'un JDK6+ (JDK8 si vous voulez faire des lambdas!)\r\n* de Maven 3.2+\r\n* de git\r\n* de votre IDE préféré",
    "ideaForNow" : "* démarrer un projet avec Spring Boot\r\n* découvrir les apports des projets du portfolio Spring\r\n* préparer une application Spring pour la production",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "Spring Boot" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/2451"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/62"
    } ]
  }, {
    "idSession" : 2461,
    "votes" : 240,
    "positiveVotes" : 228,
    "nbConsults" : 717,
    "lang" : "en",
    "format" : "Talk",
    "title" : "Reading Code Good",
    "summary" : "As a new programmer, reading code is a powerful exercise that will help you grow as a developer, and this talk outlines how.",
    "description" : "As a new programmer, everyone tells you to build. But just as important is reading. Reading code is a powerful exercise - dissecting the source code of gems and libraries used in your preferred framework offers the opportunity to examine patterns and design choices, while building confidence in new developers. But good code reading isn’t as simple as scanning the source. The concrete guidelines outlined in this talk can maximize the benefits of your future code reading sessions and help you grow as a developer.",
    "ideaForNow" : "How to start a code reading club to grow as a developer.",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "reading code", "learning to code", "beginner", "developer", "novice", "éducation" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/2461"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2911"
    } ]
  }, {
    "idSession" : 2471,
    "votes" : 50,
    "positiveVotes" : 48,
    "nbConsults" : 847,
    "lang" : "en",
    "format" : "Talk",
    "title" : "The Three Ages of Innovation",
    "summary" : "There are distinct ages in the growth of an idea or a product, and innovation can and should occur in all of these, and involve everyone.",
    "description" : "Innovation isn’t a separate activity that happens once at the beginning of a project. It isn’t the exclusive domain of an Innovation Director or a “Creative” team. Innovation is the ability to continually see things through fresh eyes, however familiar they become; to apply a different perspective to something you have done a hundred times; to challenge your hard-won assumptions and to believe you may be wrong, however right you feel.\r\n\r\nDan argues that there are three distinct ages in the growth of an idea or a product, and that innovation can and should occur in all of these. It should be the responsibility of everyone involved, all the time. He wants you to be as excited about the possibility of innovation as he is.",
    "ideaForNow" : "Understand there are different distinct modes of working, and that each of these have different goals. Seek opportunities to innovate even in situations that seem unexciting.",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/2471"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/2841"
    } ]
  }, {
    "idSession" : 2521,
    "votes" : 35,
    "positiveVotes" : 33,
    "nbConsults" : 709,
    "lang" : "en",
    "format" : "Talk",
    "title" : "10 ways to kill your startup",
    "summary" : "Learn how to kill a project or startup most effectively with the help of technology.",
    "description" : "If you've been trying to kill your startup or project but never achieved the right level of destructive power, this talk is for you. I'll teach you how to properly shut down all operations and make your product suck so hard it hurts, in just 10 easy steps.\r\n\r\nThis talk is for all of you, regardless of your job function (but especially if you manage or code). Come join.",
    "ideaForNow" : "",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/2521"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/3241"
    } ]
  }, {
    "idSession" : 2531,
    "votes" : 72,
    "positiveVotes" : 66,
    "nbConsults" : 1059,
    "lang" : "en",
    "format" : "Talk",
    "title" : "Designing with Chrome DevTools",
    "summary" : "Learn the latest of hottest in the world of Chrome DevTools, and how we can improve iterating and design for all.",
    "description" : "Paul and his team are currently working on many design-specific features with the ultimate goal to make DevTools a tool for designers, as much as for developers. Come by for a sneak preview of crazy new things, such as improved responsive design controls, rich live editing of animations and more and more fun with colors.\r\n\r\nEspecially come by for an exclusive preview of the new Layout Mode – never before seen before at a conference or across the web.",
    "ideaForNow" : "",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "design", "productivity", "Tools" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/2531"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/3241"
    } ]
  }, {
    "idSession" : 2541,
    "votes" : 132,
    "positiveVotes" : 128,
    "nbConsults" : 929,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "Aller sur Mars... ou presque",
    "summary" : "Où en est-on de l'exploration habitée de Mars ? Cette destination fait rêver mais l'échéance est sans cesse repoussée... ",
    "description" : "La planète Mars a toujours fasciné l'Humanité. Je la présenterai d'abord succinctement avant de faire un point sur l'exploration martienne : robotique pour le moment, où en est-on des projets d'exploration privée ? Ce genre d'expédition coûtant extrêmement cher, il est souhaitable que les agences gouvernementales s'unissent entre elles et avec le secteur privé - je ferai un état des lieux. \r\nParmi les initiatives visant à envoyer des femmes et des hommes sur Mars, il y a le projet Mars One pour lequel je m'étais portée candidate. Je ne suis plus dans la course mais je le présenterai rapidement avant de présenter la mission de simulation martienne à laquelle j'ai participé en début d'année dans le désert de l'Utah au sein de la Mars Society.",
    "ideaForNow" : "",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "science", "espace", "exploration spatiale", "mars" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/2541"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/3031"
    } ]
  }, {
    "idSession" : 2551,
    "votes" : 27,
    "positiveVotes" : 27,
    "nbConsults" : 1107,
    "lang" : "fr",
    "format" : "Talk",
    "title" : "\"Come to the dark side\"",
    "summary" : "L'informatique est partout. Ceux qui la maîtrisent ont donc de fait un grand pouvoir. Comment utiliser ce pouvoir, notre pouvoir ?",
    "description" : "À quoi et à qui servent nos compétences ? Aujourd'hui, l'informatique est partout. Ceux qui la maîtrisent ont donc de fait un grand pouvoir. Ce pouvoir n'est pas complètement neutre mais il peut certainement être utilisé pour des causes très différentes.\r\n\r\nDes informaticiens travaillent à développer du logiciel libre, d'autres bossent pour la NSA à développer l'espionnage, d'autres pour Vupen afin de vendre les failles de sécurité le plus cher possible\r\naux gouvernements. Certains obéissent, d'autres prennent des risques pour révéler au citoyen ce qu'on lui fait.\r\n\r\nQuelle est votre responsabilité ? Quels sont vos critères de choix (d'une filière, d'une entreprise, etc) ?\r\n",
    "ideaForNow" : "Réfléchir à leurs choix, et aux utilisations qui vont être faites de leur travail.",
    "room" : null,
    "start" : null,
    "end" : null,
    "interests" : [ "liberté responsabilité" ],
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/api/session/2551"
    }, {
      "rel" : "speaker",
      "href" : "http://localhost:8080/api/member/3721"
    } ]
  } ]};

  //For template we don't use $httpBackend
  $httpBackend.whenGET(/^views\//).passThrough();

  //We mock the remote calls
  $httpBackend.whenGET('api/session/talk?year=2015').respond(data.talks);
  $httpBackend.whenGET('api/member/speaker?year=2015').respond([]);
});
