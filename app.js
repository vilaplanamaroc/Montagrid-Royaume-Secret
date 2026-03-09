const chapters = [
  {
    id: 1,
    title: "Chapitre 1 – La nuit du secret",
    image: "vivre-montagrid/chapitre01.jpg",
    text: `Il y a quinze ans, dans un royaume où les châteaux touchaient les nuages, le roi Robert Valmont vivait avec sa famille dans un palais rempli de rires et de secrets magiques. Mais une nuit sombre, tout changea. Darron, un homme ambitieux, entra dans le palais par une trahison cachée. Les gardes fidèles au roi se battaient avec courage, leurs épées claquant comme des éclairs dans la tempête. Le roi se tenait au centre de la grande salle, robe de chambre flottant au vent des portes ouvertes. Il regarda Darron sans peur et refusa de donner son trône. Avec un grand rire courageux, il dit : « Un trône volé n’est qu’un siège de bois ! » Il voulait protéger sa famille, ses enfants qui jouaient encore dans les jardins l’après-midi même. Il fit tout pour qu’ils s’échappent, tenant les ennemis à distance avec son épée qui brillait à la lumière des torches.

Deux princesses, Ellerys l’aînée au regard sage et Serrena la joyeuse, furent sauvées par leur tante Iselda. Elle les emmena en hâte à Montagride, un endroit sûr avec des montagnes hautes comme des géants. Là, elles pouvaient se cacher et grandir en sécurité. Théo, le prince de 13 ans, fut caché par Daghota, un ami fidèle du roi. Ils coururent dans un passage secret rempli d’échos, le cœur de Théo battant comme un tambour. Daghota échangea ses vêtements avec ceux d’un autre enfant qui avait été touché dans la confusion. Darron crut que Théo était parti pour toujours. Mais Théo vivait, prêt à apprendre et à attendre le bon moment pour revenir.`,
    intro: "Lis l’histoire, puis teste ta mémoire avec les jeux du chapitre 1.",
    quiz: [
      { q: "Qui attaque le palais ?", options: ["Aldric", "Darron", "Léo"], answer: 1 },
      { q: "Qui aide les princesses à s’enfuir ?", options: ["Iselda", "Melissa", "Mira"], answer: 0 },
      { q: "Qui cache Théo ?", options: ["Daghota", "Robert", "Goliath"], answer: 0 }
    ],
    tf: [
      { q: "Le roi Robert abandonne son trône.", answer: false },
      { q: "Théo est sauvé par Daghota.", answer: true },
      { q: "Les princesses partent avec Iselda.", answer: true },
      { q: "Darron croit que Théo est vivant.", answer: false }
    ],
    quote: {
      sentence: "« Un trône volé n’est qu’un siège de bois ! »",
      options: ["Robert Valmont", "Darron", "Théo"],
      answer: 0
    },
    riddles: [
      { q: "Quel est l’objet qui est précieux mais qui n’a pas de prix ?", a: "Une famille" },
      { q: "Je suis un roi sans couronne, qui rit dans la nuit. Qui suis-je ?", a: "Un lion courageux" }
    ],
    wordsearchWords: ["ROBERT", "DARRON", "THEO", "ISELDA", "SECRET", "TRONE"]
  },
  {
    id: 2,
    title: "Chapitre 2 – Les maîtres de Théo",
    image: "vivre-montagrid/chapitre02.jpg",
    text: `Théo grandit dans une ferme isolée, entourée de forêts où les oiseaux chantaient des chansons d’aventure. Daghota, grand et fort comme un arbre, l’entraîna chaque jour. Au lever du soleil, Théo courait dans la boue, épée en bois à la main, apprenant à être courageux. « La force vient du cœur », disait Daghota en lui montrant comment parer un coup. Théo trébuchait souvent au début, mais il riait et se relevait, muscles qui se durcissaient un peu plus chaque fois. Aldric, le moine sage avec sa robe qui flottait au vent, lui apprit la patience. Ils s’asseyaient sous un arbre géant, et Aldric racontait des histoires de rois qui attendaient le bon moment pour agir. « La sagesse est comme un arbre : elle grandit lentement mais dure pour toujours », expliquait-il.

Le Fantôme, un homme mystérieux qui apparaissait comme par magie, lui apprit à être rapide et malin. Il arrivait sans bruit, et Théo devait deviner où il était. « Utilise tes sens, pas seulement tes yeux », disait-il. Théo grandit avec son ami Léo, qui s’entraînait avec lui. Léa, la petite sœur de Léo, disait souvent : « Théo, un jour je me marierai avec toi ! » Théo riait, et Mira, plus tard, devint elle aussi une amie précieuse, capable de soigner et de défendre les blessés.`,
    intro: "Découvre comment Théo apprend la force, la sagesse et la ruse.",
    quiz: [
      { q: "Qui apprend le combat à Théo ?", options: ["Daghota", "Mira", "Léo"], answer: 0 },
      { q: "Qui enseigne la patience ?", options: ["Le Fantôme", "Aldric", "Léa"], answer: 1 },
      { q: "Qui est la petite sœur de Léo ?", options: ["Serrena", "Léa", "Elora"], answer: 1 }
    ],
    tf: [
      { q: "Théo s’entraîne tous les jours.", answer: true },
      { q: "Le Fantôme est toujours facile à voir.", answer: false },
      { q: "Mira soigne les blessés.", answer: true },
      { q: "Aldric apprend à courir très vite.", answer: false }
    ],
    quote: {
      sentence: "« La force vient du cœur »",
      options: ["Daghota", "Aldric", "Théo"],
      answer: 0
    },
    riddles: [
      { q: "Je suis invisible mais je fais bouger les choses. Qui suis-je ?", a: "Le vent" },
      { q: "Je suis un maître qui disparaît, mais je ne suis pas un magicien. Qui suis-je ?", a: "Le Fantôme" }
    ],
    wordsearchWords: ["DAGHOTA", "ALDRIC", "FANTOME", "LEO", "LEA", "MIRA"]
  },
  {
    id: 3,
    title: "Chapitre 3 – La vie à Montagride",
    image: "vivre-montagrid/chapitre03.jpg",
    text: `Montagride était comme un château enchanté au sommet d’une montagne, avec des jardins pleins d’iris violets et blancs qui dansaient au vent. Ellerys, Serrena et Martha vivaient chez tante Iselda. Chaque jour, les trois filles descendaient au village avec des paniers remplis de bonnes choses. Elles apportaient de la nourriture, des couvertures, et surtout des sourires qui réchauffaient les cœurs. Ellerys organisait les distributions, Serrena racontait des histoires pour faire rire, et Martha jouait avec les petits.

Elles s’entraînaient aussi avec des épées en bois dans le jardin. Ellerys était la plus sérieuse. Serrena tournoyait avec grâce, et Martha riait souvent de sa maladresse. « Nous protégeons avec le cœur », disait Ellerys. C’était leur force secrète : l’amitié, la tendresse et le courage.`,
    intro: "À Montagride, les sœurs aident le village et grandissent ensemble.",
    quiz: [
      { q: "Qui organise l’aide au village ?", options: ["Martha", "Ellerys", "Léa"], answer: 1 },
      { q: "Avec quoi s’entraînent-elles ?", options: ["Des épées en bois", "Des flèches", "Des lances"], answer: 0 },
      { q: "Qui joue souvent avec les petits ?", options: ["Serrena", "Martha", "Iselda"], answer: 1 }
    ],
    tf: [
      { q: "Les sœurs vivent chez Iselda.", answer: true },
      { q: "Elles refusent d’aider le village.", answer: false },
      { q: "Elles s’entraînent dans le jardin.", answer: true },
      { q: "Leur vraie force est l’amitié.", answer: true }
    ],
    quote: {
      sentence: "« Nous protégeons avec le cœur »",
      options: ["Ellerys", "Serrena", "Martha"],
      answer: 0
    },
    riddles: [
      { q: "Je suis doux mais je peux réchauffer, je suis donné avec amour. Qui suis-je ?", a: "Un sourire" },
      { q: "Je suis une épée en bois qui fait rire. Qui suis-je ?", a: "Une épée magique de princesse" }
    ],
    wordsearchWords: ["ELLERYS", "SERRENA", "MARTHA", "ISELDA", "VILLAGE", "COEUR"]
  },
  {
    id: 4,
    title: "Chapitre 4 – Le marché et la gifle",
    image: "vivre-montagrid/chapitre04.jpg",
    text: `Le marché était un endroit magique plein de couleurs et d’odeurs. Des fruits rouges brillaient au soleil, les tissus claquaient au vent, et Ellerys avançait avec assurance. Un garçon rapide vola sa sacoche. Elle ne paniqua pas. Elle demanda au soldat de rattraper le voleur, mais le soldat se moqua d’elle. Il attrapa même son bras. Ellerys le gifla pour lui apprendre la politesse.

Melissa, en cape rouge, sauta du toit comme une héroïne de légende et arrêta le soldat sans le blesser. « Nous sommes toujours là pour toi, princesse », dit-elle avant de disparaître. Un officier gentil arriva, punit le soldat, et le petit garçon du marché regarda toute la scène comme si une légende était née devant lui.`,
    intro: "Au marché, Ellerys montre qu’elle sait réagir avec courage.",
    quiz: [
      { q: "Qui vole la sacoche ?", options: ["Un soldat", "Un garçon", "Un marchand"], answer: 1 },
      { q: "Qui saute du toit ?", options: ["Melissa", "Mira", "Serrena"], answer: 0 },
      { q: "Qui punit le soldat ?", options: ["Darron", "L’officier", "Théo"], answer: 1 }
    ],
    tf: [
      { q: "Ellerys panique au marché.", answer: false },
      { q: "Melissa intervient.", answer: true },
      { q: "Le soldat aide tout de suite Ellerys.", answer: false },
      { q: "Un officier règle la situation.", answer: true }
    ],
    quote: {
      sentence: "« Nous sommes toujours là pour toi, princesse »",
      options: ["Melissa", "Mira", "Ellerys"],
      answer: 0
    },
    riddles: [
      { q: "Je suis rouge et je vole sans ailes. Qui suis-je ?", a: "La cape de Melissa" },
      { q: "Je suis un garçon du marché qui surprend tout le monde. Qui suis-je ?", a: "Le petit témoin courageux" }
    ],
    wordsearchWords: ["MELISSA", "MARCHE", "SOLDAT", "OFFICIER", "CAPE", "ELLERYS"]
  },
  {
    id: 5,
    title: "Chapitre 5 – L’étau",
    image: "vivre-montagrid/chapitre05.jpg",
    text: `Darron voulait tout savoir. Il envoya des gardes discrets pour surveiller les temples, les routes et les ports. Ils notaient tout sans faire de bruit. Il fit arrêter le moine Aldric, parce qu’il soupçonnait quelque chose. Théo, malin, prévint les capuchonnés avec un message secret. Ils se réunirent et décidèrent de sauver Aldric. Théo dit : « Je vous aide de l’intérieur. » Ils préparèrent un plan astucieux, comme un jeu de cache-cache géant, mais rempli de courage.`,
    intro: "Darron surveille tout, mais Théo agit en secret.",
    quiz: [
      { q: "Qui est arrêté ?", options: ["Aldric", "Léo", "Mira"], answer: 0 },
      { q: "Qui prévient les capuchonnés ?", options: ["Darron", "Théo", "Iselda"], answer: 1 },
      { q: "Que préparent-ils ?", options: ["Une fête", "Un plan de sauvetage", "Un voyage en bateau"], answer: 1 }
    ],
    tf: [
      { q: "Darron veut tout savoir.", answer: true },
      { q: "Les gardes surveillent discrètement.", answer: true },
      { q: "Théo oublie Aldric.", answer: false },
      { q: "Ils décident de sauver Aldric.", answer: true }
    ],
    quote: {
      sentence: "« Je vous aide de l’intérieur. »",
      options: ["Théo", "Darron", "Aldric"],
      answer: 0
    },
    riddles: [
      { q: "Je suis discret comme une souris, mais je protège les amis. Qui suis-je ?", a: "Un secret" },
      { q: "Je suis un moine calme et sage. Qui suis-je ?", a: "Aldric" }
    ],
    wordsearchWords: ["ALDRIC", "SECRET", "PLAN", "GARDE", "TEMPLE", "DARRON"]
  },
  {
    id: 6,
    title: "Chapitre 6 – Le sauvetage",
    image: "vivre-montagrid/chapitre06.jpg",
    text: `Les capuchonnés entrèrent par un passage secret comme des ombres rapides. Ils trouvèrent Aldric dans sa cellule. Il refusa de partir : « Si je sors, ils sauront que nous existons. Restez cachés et soyez courageux. » Des gardes arrivèrent. Un petit combat éclata. Elora fut blessée à l’épaule, mais Théo la sauva et l’emmena chez Mira. Là, on découvrit le tatouage. Mira ouvrit de grands yeux et dit : « C’est ta sœur, Théo ! » Alors la joie entra dans la maison comme une lumière nouvelle.`,
    intro: "Le sauvetage d’Aldric mène à une découverte incroyable.",
    quiz: [
      { q: "Par où entrent les capuchonnés ?", options: ["Par un passage secret", "Par le pont", "Par la fenêtre du roi"], answer: 0 },
      { q: "Qui est blessée ?", options: ["Serrena", "Elora", "Melissa"], answer: 1 },
      { q: "Qui reconnaît le tatouage ?", options: ["Léo", "Mira", "Darron"], answer: 1 }
    ],
    tf: [
      { q: "Aldric veut partir tout de suite.", answer: false },
      { q: "Il y a un petit combat.", answer: true },
      { q: "Théo abandonne Elora.", answer: false },
      { q: "Elora est la sœur de Théo.", answer: true }
    ],
    quote: {
      sentence: "« C’est ta sœur, Théo ! »",
      options: ["Mira", "Iselda", "Elora"],
      answer: 0
    },
    riddles: [
      { q: "Je suis une marque magique sur la peau, qui unit la famille. Qui suis-je ?", a: "Le tatouage" },
      { q: "Je suis un passage qui mène au secret. Qui suis-je ?", a: "Le tunnel caché" }
    ],
    wordsearchWords: ["ELORA", "MIRA", "TATOUAGE", "THEO", "ALDRIC", "TUNNEL"]
  },
  {
    id: 7,
    title: "Chapitre 7 – Réunion chez Iselda",
    image: "vivre-montagrid/chapitre07.jpg",
    text: `Ellerys, Serrena et Martha descendirent les escaliers, curieuses. Elles virent Théo avec Elora. Elles touchèrent les tatouages qui brillaient presque comme une promesse. « Nous sommes trois sœurs et une cousine », dit Ellerys avec un grand sourire. Elles s’enlacèrent, rirent et pleurèrent de joie. Mira aida à soigner Elora. Léo et Léa arrivèrent à leur tour, et Léa sauta dans les bras de Théo. Toute la maison vibra d’un bonheur rare.`,
    intro: "Chez Iselda, les retrouvailles remplissent la maison de joie.",
    quiz: [
      { q: "Qui est la cousine ?", options: ["Martha", "Léa", "Mira"], answer: 0 },
      { q: "Qui aide à soigner Elora ?", options: ["Mira", "Darron", "Melissa"], answer: 0 },
      { q: "Qui saute dans les bras de Théo ?", options: ["Ellerys", "Léa", "Serrena"], answer: 1 }
    ],
    tf: [
      { q: "Les sœurs se retrouvent.", answer: true },
      { q: "Elora est ignorée.", answer: false },
      { q: "Léo et Léa arrivent.", answer: true },
      { q: "La scène est triste du début à la fin.", answer: false }
    ],
    quote: {
      sentence: "« Nous sommes trois sœurs et une cousine »",
      options: ["Ellerys", "Martha", "Elora"],
      answer: 0
    },
    riddles: [
      { q: "Nous sommes plusieurs, mais nous battons comme un seul cœur. Qui sommes-nous ?", a: "La famille" },
      { q: "Je saute dans les bras de Théo avec joie. Qui suis-je ?", a: "Léa" }
    ],
    wordsearchWords: ["FAMILLE", "SOEURS", "LEA", "LEO", "ELORA", "ISELDA"]
  },
  {
    id: 8,
    title: "Chapitre 8 – Serment des quatre sœurs",
    image: "vivre-montagrid/chapitre08.jpg",
    text: `Les trois sœurs et Martha se réunirent dans le jardin fleuri. Elles posèrent les mains ensemble. « Nous ne nous cacherons plus », dit Ellerys. « Nous aiderons le royaume », ajouta Serrena. « Avec du courage et des rires », conclut Martha. Un cercle lumineux apparut autour d’elles comme une promesse. Le vent lui-même sembla répondre à leur serment.`,
    intro: "Dans le jardin, les quatre jeunes filles font un beau serment.",
    quiz: [
      { q: "Où se réunissent-elles ?", options: ["Au marché", "Dans le jardin", "Au port"], answer: 1 },
      { q: "Que veulent-elles faire ?", options: ["Se cacher encore", "Aider le royaume", "Quitter Montagride"], answer: 1 },
      { q: "Que forme la lumière autour d’elles ?", options: ["Un cercle lumineux", "Une tour", "Un bateau"], answer: 0 }
    ],
    tf: [
      { q: "Ellerys veut continuer à se cacher.", answer: false },
      { q: "Serrena veut aider le royaume.", answer: true },
      { q: "Martha parle de courage et de rires.", answer: true },
      { q: "Le vent accompagne la promesse.", answer: true }
    ],
    quote: {
      sentence: "« Nous aiderons le royaume »",
      options: ["Serrena", "Ellerys", "Martha"],
      answer: 0
    },
    riddles: [
      { q: "Je suis lumineux et je scelle un serment. Qui suis-je ?", a: "Le cercle magique" },
      { q: "Je suis un vent qui approuve. Qui suis-je ?", a: "Une promesse du royaume" }
    ],
    wordsearchWords: ["SERMENT", "MAGIE", "VENT", "FLEUR", "ROYAUME", "MARTHA"]
  },
  {
    id: 9,
    title: "Chapitre 9 – Batailles et retour",
    image: "vivre-montagrid/chapitre09.jpg",
    text: `Théo partit avec l’armée pour protéger le royaume. Il gagna la bataille navale avec Léo en utilisant des plans malins, sans blesser inutilement. Il gagna aussi la bataille terrestre en montrant qu’il était le fils de Robert. Le roi du Nord reconnut le tatouage et ordonna le repli. La guerre s’arrêta comme par enchantement.`,
    intro: "Théo gagne par intelligence et non par violence inutile.",
    quiz: [
      { q: "Qui accompagne Théo dans la bataille navale ?", options: ["Léo", "Darron", "Mira"], answer: 0 },
      { q: "Comment Théo gagne-t-il ?", options: ["Avec des plans malins", "En détruisant tout", "En fuyant"], answer: 0 },
      { q: "Que reconnaît le roi du Nord ?", options: ["Un bateau", "Le tatouage royal", "Une épée en bois"], answer: 1 }
    ],
    tf: [
      { q: "Théo cherche à blesser inutilement.", answer: false },
      { q: "Il y a une bataille navale.", answer: true },
      { q: "Le tatouage aide à arrêter la guerre.", answer: true },
      { q: "Léo est absent du chapitre.", answer: false }
    ],
    quote: {
      sentence: "Le roi du Nord reconnut le tatouage magique et ordonna le repli.",
      options: ["Narrateur", "Théo", "Martha"],
      answer: 0
    },
    riddles: [
      { q: "Je suis un signe royal qui met fin à la guerre. Qui suis-je ?", a: "Le tatouage royal" },
      { q: "Je suis une victoire gagnée sans cruauté. Qui suis-je ?", a: "Une victoire sage" }
    ],
    wordsearchWords: ["BATAILLE", "NAVALE", "LEO", "THEO", "TATOUAGE", "ROBERT"]
  },
  {
    id: 10,
    title: "Chapitre 10 – Le retour du prince",
    image: "vivre-montagrid/chapitre10.jpg",
    text: `Théo rentra à la capitale comme un héros. La foule cria son nom avec joie. Il parla d’une voix forte : « Je suis revenu pour restaurer la justice. » L’armée s’agenouilla. Le peuple acclama et dansa. Le royaume recommença à croire en son avenir.`,
    intro: "La capitale retrouve son prince, et l’espoir revient avec lui.",
    quiz: [
      { q: "Où Théo revient-il ?", options: ["À la capitale", "À la forêt", "Au port du Nord"], answer: 0 },
      { q: "Que veut restaurer Théo ?", options: ["La justice", "Le marché", "Le temple"], answer: 0 },
      { q: "Que fait l’armée ?", options: ["Elle part", "Elle s’agenouille", "Elle se cache"], answer: 1 }
    ],
    tf: [
      { q: "La foule crie le nom de Théo.", answer: true },
      { q: "Théo refuse de parler.", answer: false },
      { q: "Le peuple acclame.", answer: true },
      { q: "Le retour est triste.", answer: false }
    ],
    quote: {
      sentence: "« Je suis revenu pour restaurer la justice. »",
      options: ["Théo", "Robert", "Darron"],
      answer: 0
    },
    riddles: [
      { q: "Je suis un prince qui revient avec l’espoir. Qui suis-je ?", a: "Théo" },
      { q: "Je suis un peuple qui chante de joie. Qui suis-je ?", a: "La foule heureuse" }
    ],
    wordsearchWords: ["PRINCE", "JUSTICE", "PEUPLE", "ARMEE", "CAPITALE", "THEO"]
  },
  {
    id: 11,
    title: "Chapitre 11 – Le dernier combat",
    image: "vivre-montagrid/chapitre11.jpg",
    text: `Darron et Goliath sortirent pour parler, mais leurs mots ne convainquirent personne. Le combat éclata. Théo affronta Goliath avec adresse. Il le désarma sans le blesser trop. Une pierre lancée par le petit garçon du marché fit tomber Goliath. Darron fut capturé. Le royaume retenait son souffle, puis souffla enfin.`,
    intro: "Le dernier combat montre que courage et adresse peuvent suffire.",
    quiz: [
      { q: "Qui affronte Théo ?", options: ["Goliath", "Léo", "Aldric"], answer: 0 },
      { q: "Comment Théo gagne-t-il contre Goliath ?", options: ["Il le désarme", "Il fuit", "Il appelle un dragon"], answer: 0 },
      { q: "Qui fait tomber Goliath ?", options: ["Melissa", "Le petit garçon du marché", "Iselda"], answer: 1 }
    ],
    tf: [
      { q: "Les mots de Darron convainquent tout le monde.", answer: false },
      { q: "Théo désarme Goliath.", answer: true },
      { q: "Le petit garçon intervient.", answer: true },
      { q: "Darron s’échappe librement.", answer: false }
    ],
    quote: {
      sentence: "Le combat éclata comme un jeu d’échecs géant.",
      options: ["Narrateur", "Théo", "Darron"],
      answer: 0
    },
    riddles: [
      { q: "Je suis une pierre qui change le combat. Qui suis-je ?", a: "Une pierre décisive" },
      { q: "Je suis un géant qui tombe par surprise. Qui suis-je ?", a: "Goliath" }
    ],
    wordsearchWords: ["GOLIATH", "PIERRE", "COMBAT", "DARRON", "THEO", "MARCHE"]
  },
  {
    id: 12,
    title: "Chapitre 12 – Le couronnement",
    image: "vivre-montagrid/chapitre12.jpg",
    text: `Ellerys posa la couronne sur Théo avec un grand sourire. Mira s’approcha et parla avec douceur. Le royaume respira de joie. Théo régna avec sagesse. Les sœurs restèrent unies. Un enfant joua avec un lance-pierre en riant. Théo murmura : « Le jour a commencé ce soir-là. » Et ainsi s’acheva l’histoire du Prince Théo, mais pas celle de Montagrid.`,
    intro: "Le royaume retrouve la paix, et Théo devient un roi sage.",
    quiz: [
      { q: "Qui pose la couronne sur Théo ?", options: ["Ellerys", "Mira", "Serrena"], answer: 0 },
      { q: "Qui parle d’amour à Théo ?", options: ["Melissa", "Mira", "Léa"], answer: 1 },
      { q: "Comment Théo règne-t-il ?", options: ["Avec sagesse", "Avec colère", "Avec peur"], answer: 0 }
    ],
    tf: [
      { q: "Théo devient roi.", answer: true },
      { q: "Le royaume est triste à la fin.", answer: false },
      { q: "Les sœurs restent unies.", answer: true },
      { q: "Personne ne rit à la fin.", answer: false }
    ],
    quote: {
      sentence: "« Le jour a commencé ce soir-là. »",
      options: ["Théo", "Robert", "Léo"],
      answer: 0
    },
    riddles: [
      { q: "Je suis une couronne qui unit. Qui suis-je ?", a: "Un symbole du royaume" },
      { q: "Je suis un jour qui commence la nuit. Qui suis-je ?", a: "Un nouveau départ" }
    ],
    wordsearchWords: ["COURONNE", "MIRA", "THEO", "ROYAUME", "SAGESSE", "ELLERYS"]
  }
];

const characters = [
  { name: "Aldric", file: "personnages/aldric.jpg", desc: "Moine sage qui enseigne la patience, la réflexion et la prudence." },
  { name: "Alenna", file: "personnages/Alenna.png", desc: "Sœur importante de la lignée royale de Montagrid." },
  { name: "Amed", file: "personnages/amed.jpg", desc: "Personnage du royaume pouvant être enrichi plus tard dans l’univers." },
  { name: "Archiviste", file: "personnages/archiviste.jpg", desc: "Gardien des savoirs, des cartes, des secrets et des écrits anciens." },
  { name: "Conan", file: "personnages/conan.jpg", desc: "Petit enfant de l’univers, témoin ou futur personnage à développer." },
  { name: "Daghota", file: "personnages/daghota.jpg", desc: "Guerrier fidèle qui protège Théo et lui apprend la force." },
  { name: "Darron", file: "personnages/darron.jpg", desc: "Usurpateur ambitieux qui s’empare du trône par trahison." },
  { name: "Ellerys", file: "personnages/ellerys.jpg", desc: "Princesse protectrice, sage et courageuse." },
  { name: "Elora", file: "personnages/elora.jpg", desc: "Sœur retrouvée grâce au tatouage familial." },
  { name: "Goliath", file: "personnages/goliath.jpg", desc: "Adversaire puissant du dernier combat." },
  { name: "Helena", file: "personnages/helena.jpg", desc: "Reine, épouse de Robert et mère des princesses." },
  { name: "Iselda", file: "personnages/iselda.jpg", desc: "Tante protectrice et refuge des enfants." },
  { name: "Léa", file: "personnages/lea.jpg", desc: "Petite sœur vive, tendre et pleine d’imagination." },
  { name: "Léo", file: "personnages/leo.jpg", desc: "Ami fidèle de Théo dans l’entraînement et les batailles." },
  { name: "Martha", file: "personnages/martha.jpg", desc: "Cousine affectueuse, drôle et attachante." },
  { name: "Melissa", file: "personnages/Melissa.jpg", desc: "Capuchonnée rouge, mystérieuse protectrice." },
  { name: "Mira", file: "personnages/Mira.jpg", desc: "Soigneuse habile et précieuse alliée de Théo." },
  { name: "Officier", file: "personnages/officier.jpg", desc: "Officier juste et honorable du royaume." },
  { name: "Robert", file: "personnages/robert.jpg", desc: "Roi courageux qui protège sa famille jusqu’au bout." },
  { name: "Rodric", file: "personnages/Rodric.png", desc: "Personnage de l’univers pouvant être développé plus tard." },
  { name: "Serrena", file: "personnages/serrena.jpg", desc: "Princesse lumineuse, vive et généreuse." },
  { name: "Théo", file: "personnages/theo.jpg", desc: "Prince caché puis héros du royaume de Montagrid." }
];

const visitPlaces = [
  { title: "Carte de Montagrid", file: "visiter-montagrid/carte-montagrid.jpg" },
  { title: "Carte secrète", file: "visiter-montagrid/carte-secrete.jpg" },
  { title: "Caserne", file: "visiter-montagrid/caserne.jpg" },
  { title: "Château de Montagrid", file: "visiter-montagrid/chateau-montagrid.jpg" },
  { title: "Forêt", file: "visiter-montagrid/foret.jpg" },
  { title: "Montagnes", file: "visiter-montagrid/montagnes.jpg" },
  { title: "Palais royal", file: "visiter-montagrid/palais-royal.jpg" },
  { title: "Port", file: "visiter-montagrid/port.jpg" },
  { title: "Salle secrète", file: "visiter-montagrid/salle-secrete.jpg" },
  { title: "Temple ancien", file: "visiter-montagrid/temple-ancien.jpg" },
  { title: "Tunnels secrets", file: "visiter-montagrid/tunnels-secrets.jpg" },
  { title: "Village", file: "visiter-montagrid/village.jpg" }
];

const liveImages = [
  { title: "Chapitre 1", file: "vivre-montagrid/chapitre01.jpg" },
  { title: "Chapitre 2", file: "vivre-montagrid/chapitre02.jpg" },
  { title: "Chapitre 3", file: "vivre-montagrid/chapitre03.jpg" },
  { title: "Chapitre 4", file: "vivre-montagrid/chapitre04.jpg" },
  { title: "Chapitre 5", file: "vivre-montagrid/chapitre05.jpg" },
  { title: "Chapitre 6", file: "vivre-montagrid/chapitre06.jpg" },
  { title: "Chapitre 7", file: "vivre-montagrid/chapitre07.jpg" },
  { title: "Chapitre 8", file: "vivre-montagrid/chapitre08.jpg" },
  { title: "Chapitre 9", file: "vivre-montagrid/chapitre09.jpg" },
  { title: "Chapitre 10", file: "vivre-montagrid/chapitre10.jpg" },
  { title: "Chapitre 11", file: "vivre-montagrid/chapitre11.jpg" },
  { title: "Chapitre 12", file: "vivre-montagrid/chapitre12.jpg" }
];

let currentChapterIndex = 0;
let riddlesVisible = false;
let completedChapters = new Set();
let activeSpeech = null;

const views = Array.from(document.querySelectorAll(".view"));

const chapterSelect = document.getElementById("chapterSelect");
const gamesChapterSelect = document.getElementById("gamesChapterSelect");
const chapterList = document.getElementById("chapterList");
const chapterTitle = document.getElementById("chapterTitle");
const chapterText = document.getElementById("chapterText");
const storyChapterImage = document.getElementById("storyChapterImage");
const gamesChapterTitle = document.getElementById("gamesChapterTitle");
const gamesIntro = document.getElementById("gamesIntro");
const quizContainer = document.getElementById("quizContainer");
const tfContainer = document.getElementById("tfContainer");
const quoteContainer = document.getElementById("quoteContainer");
const riddlesContainer = document.getElementById("riddlesContainer");
const wordSearchGrid = document.getElementById("wordSearchGrid");
const wordSearchWords = document.getElementById("wordSearchWords");
const quizResult = document.getElementById("quizResult");
const tfResult = document.getElementById("tfResult");
const quoteResult = document.getElementById("quoteResult");
const chapterReward = document.getElementById("chapterReward");
const gameReward = document.getElementById("gameReward");
const progressText = document.getElementById("progressText");
const visitGrid = document.getElementById("visitGrid");
const liveGrid = document.getElementById("liveGrid");
const charactersGrid = document.getElementById("charactersGrid");

function showView(viewId){
  views.forEach(v => v.classList.remove("active"));
  document.getElementById(viewId).classList.add("active");
}

function bindOpenButtons(){
  document.querySelectorAll("[data-open]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      showView(btn.getAttribute("data-open"));
    });
  });
}

function updateProgress(){
  progressText.textContent = `${completedChapters.size} / ${chapters.length} chapitres`;
}

function markCurrentChapterDone(){
  const chapter = chapters[currentChapterIndex];
  const wasNew = !completedChapters.has(chapter.id);
  completedChapters.add(chapter.id);
  updateProgress();

  chapterReward.classList.remove("hidden");
  chapterReward.textContent = wasNew
    ? "⭐ Bravo ! Tu protèges Montagrid. Tu as gagné une étoile royale pour ce chapitre."
    : "⭐ Ce chapitre est déjà marqué comme terminé.";
}

function populateSelectors(){
  chapters.forEach((chapter, index)=>{
    const option1 = document.createElement("option");
    option1.value = index;
    option1.textContent = chapter.title;
    chapterSelect.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = index;
    option2.textContent = chapter.title;
    gamesChapterSelect.appendChild(option2);

    const btn = document.createElement("button");
    btn.className = "chapter-link";
    btn.textContent = chapter.title;
    btn.addEventListener("click", ()=>{
      currentChapterIndex = index;
      updateStory();
      updateGames();
      showView("storyView");
    });
    chapterList.appendChild(btn);
  });
}

function updateChapterListActive(){
  const buttons = document.querySelectorAll(".chapter-link");
  buttons.forEach((b, i)=>{
    b.classList.toggle("active", i === currentChapterIndex);
  });
}

function updateStory(){
  const chapter = chapters[currentChapterIndex];
  chapterTitle.textContent = chapter.title;
  chapterText.textContent = chapter.text;
  storyChapterImage.src = chapter.image;
  storyChapterImage.alt = chapter.title;
  chapterSelect.value = currentChapterIndex;
  updateChapterListActive();

  if(completedChapters.has(chapter.id)){
    chapterReward.classList.remove("hidden");
    chapterReward.textContent = "⭐ Chapitre terminé. Tu as déjà gagné ton étoile royale ici.";
  } else {
    chapterReward.classList.add("hidden");
    chapterReward.textContent = "";
  }
}

function updateGames(){
  const chapter = chapters[currentChapterIndex];
  gamesChapterTitle.textContent = chapter.title;
  gamesIntro.textContent = chapter.intro;
  gamesChapterSelect.value = currentChapterIndex;

  renderQuiz(chapter);
  renderTf(chapter);
  renderQuote(chapter);
  renderRiddles(chapter);
  renderWordSearch(chapter.wordsearchWords);

  quizResult.textContent = "";
  tfResult.textContent = "";
  quoteResult.textContent = "";
  gameReward.textContent = "";
}

function changeChapter(step){
  currentChapterIndex += step;
  if(currentChapterIndex < 0) currentChapterIndex = chapters.length - 1;
  if(currentChapterIndex >= chapters.length) currentChapterIndex = 0;
  updateStory();
  updateGames();
}

function renderQuiz(chapter){
  quizContainer.innerHTML = "";
  chapter.quiz.forEach((item, qIndex)=>{
    const block = document.createElement("div");
    block.className = "question-block";
    block.innerHTML = `<h4>${qIndex + 1}. ${item.q}</h4>`;

    item.options.forEach((option, optIndex)=>{
      const row = document.createElement("div");
      row.className = "option-row";
      row.innerHTML = `
        <input type="radio" name="quiz-${qIndex}" id="quiz-${qIndex}-${optIndex}" value="${optIndex}">
        <label for="quiz-${qIndex}-${optIndex}">${option}</label>
      `;
      block.appendChild(row);
    });

    quizContainer.appendChild(block);
  });
}

function renderTf(chapter){
  tfContainer.innerHTML = "";
  chapter.tf.forEach((item, index)=>{
    const block = document.createElement("div");
    block.className = "question-block";
    block.innerHTML = `
      <h4>${index + 1}. ${item.q}</h4>
      <div class="option-row">
        <input type="radio" name="tf-${index}" id="tf-${index}-true" value="true">
        <label for="tf-${index}-true">Vrai</label>
      </div>
      <div class="option-row">
        <input type="radio" name="tf-${index}" id="tf-${index}-false" value="false">
        <label for="tf-${index}-false">Faux</label>
      </div>
    `;
    tfContainer.appendChild(block);
  });
}

function renderQuote(chapter){
  quoteContainer.innerHTML = "";
  const box = document.createElement("div");
  box.className = "quote-box";
  box.innerHTML = `<p><strong>${chapter.quote.sentence}</strong></p>`;

  chapter.quote.options.forEach((option, index)=>{
    const row = document.createElement("div");
    row.className = "option-row";
    row.innerHTML = `
      <input type="radio" name="quote-choice" id="quote-${index}" value="${index}">
      <label for="quote-${index}">${option}</label>
    `;
    box.appendChild(row);
  });

  quoteContainer.appendChild(box);
}

function renderRiddles(chapter){
  riddlesContainer.innerHTML = "";
  chapter.riddles.forEach((item, index)=>{
    const div = document.createElement("div");
    div.className = "riddle-item";
    div.innerHTML = `
      <div><strong>Énigme ${index + 1} :</strong> ${item.q}</div>
      <div class="riddle-answer ${riddlesVisible ? "show" : ""}">Réponse : ${item.a}</div>
    `;
    riddlesContainer.appendChild(div);
  });
}

function randomLetter(){
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return letters[Math.floor(Math.random() * letters.length)];
}

function createEmptyGrid(size){
  return Array.from({length:size}, ()=>Array.from({length:size}, ()=>""));
}

function placeWord(grid, word){
  const size = grid.length;
  const directions = [[0,1],[1,0],[1,1],[-1,1]];

  for(let tries = 0; tries < 200; tries++){
    const [dr, dc] = directions[Math.floor(Math.random() * directions.length)];
    const row = Math.floor(Math.random() * size);
    const col = Math.floor(Math.random() * size);

    let fits = true;
    let r = row;
    let c = col;

    for(let i = 0; i < word.length; i++){
      if(r < 0 || r >= size || c < 0 || c >= size){
        fits = false;
        break;
      }
      const cell = grid[r][c];
      if(cell !== "" && cell !== word[i]){
        fits = false;
        break;
      }
      r += dr;
      c += dc;
    }

    if(!fits) continue;

    r = row;
    c = col;
    for(let i = 0; i < word.length; i++){
      grid[r][c] = word[i];
      r += dr;
      c += dc;
    }
    return true;
  }

  return false;
}

function renderWordSearch(words){
  const size = 12;
  const grid = createEmptyGrid(size);

  words.forEach(word => placeWord(grid, word.toUpperCase()));

  for(let r = 0; r < size; r++){
    for(let c = 0; c < size; c++){
      if(grid[r][c] === "") grid[r][c] = randomLetter();
    }
  }

  wordSearchGrid.innerHTML = "";
  wordSearchWords.innerHTML = "";

  grid.forEach(row=>{
    row.forEach(letter=>{
      const cell = document.createElement("div");
      cell.className = "ws-cell";
      cell.textContent = letter;
      wordSearchGrid.appendChild(cell);
    });
  });

  words.forEach(word=>{
    const tag = document.createElement("div");
    tag.className = "word-tag";
    tag.textContent = word;
    wordSearchWords.appendChild(tag);
  });
}

function renderCharacters(){
  charactersGrid.innerHTML = "";

  characters.forEach(character=>{
    const initials = character.name.charAt(0).toUpperCase();

    const card = document.createElement("div");
    card.className = "flip-card";
    card.innerHTML = `
      <div class="flip-inner">
        <div class="flip-face flip-front">
          <div class="char-visual">
            <img
              src="${character.file}"
              alt="${character.name}"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
            />
            <div class="char-fallback" style="display:none">${initials}</div>
          </div>
          <div class="char-name">${character.name}</div>
        </div>
        <div class="flip-face flip-back">
          <h3>${character.name}</h3>
          <p>${character.desc}</p>
        </div>
      </div>
    `;

    card.addEventListener("click", ()=>{
      card.classList.toggle("flipped");
    });

    charactersGrid.appendChild(card);
  });
}

function renderGallery(gridEl, items){
  gridEl.innerHTML = "";

  items.forEach(item=>{
    const card = document.createElement("div");
    card.className = "gallery-card";
    card.innerHTML = `
      <img src="${item.file}" alt="${item.title}">
      <div class="caption">${item.title}</div>
    `;
    card.addEventListener("click", ()=>{
      openLightbox(item.file, item.title);
    });
    gridEl.appendChild(card);
  });
}

function openLightbox(src, caption){
  document.getElementById("lightboxImg").src = src;
  document.getElementById("lightboxCaption").textContent = caption;
  document.getElementById("lightbox").classList.remove("hidden");
}

function closeLightbox(){
  document.getElementById("lightbox").classList.add("hidden");
}

function speakCurrentChapter(){
  speechSynthesis.cancel();
  const text = `${chapters[currentChapterIndex].title}. ${chapters[currentChapterIndex].text}`;
  activeSpeech = new SpeechSynthesisUtterance(text);
  activeSpeech.lang = "fr-FR";
  activeSpeech.rate = 0.95;
  activeSpeech.pitch = 1;
  speechSynthesis.speak(activeSpeech);
}

function pauseSpeech(){
  speechSynthesis.pause();
}

function resumeSpeech(){
  speechSynthesis.resume();
}

function stopSpeech(){
  speechSynthesis.cancel();
}

document.getElementById("checkQuizBtn").addEventListener("click", ()=>{
  const chapter = chapters[currentChapterIndex];
  let score = 0;

  chapter.quiz.forEach((item, index)=>{
    const checked = document.querySelector(`input[name="quiz-${index}"]:checked`);
    if(checked && Number(checked.value) === item.answer) score++;
  });

  quizResult.textContent = `Résultat : ${score} / ${chapter.quiz.length}`;
  quizResult.className = "result-text " + (score === chapter.quiz.length ? "good" : "bad");

  if(score === chapter.quiz.length){
    gameReward.textContent = "Bravo ! Tu as gagné une étoile royale pour ce quiz.";
  } else {
    gameReward.textContent = "";
  }
});

document.getElementById("checkTfBtn").addEventListener("click", ()=>{
  const chapter = chapters[currentChapterIndex];
  let score = 0;

  chapter.tf.forEach((item, index)=>{
    const checked = document.querySelector(`input[name="tf-${index}"]:checked`);
    if(checked && String(item.answer) === checked.value) score++;
  });

  tfResult.textContent = `Résultat : ${score} / ${chapter.tf.length}`;
  tfResult.className = "result-text " + (score === chapter.tf.length ? "good" : "bad");
});

document.getElementById("checkQuoteBtn").addEventListener("click", ()=>{
  const answer = document.querySelector(`input[name="quote-choice"]:checked`);
  const chapter = chapters[currentChapterIndex];
  const ok = answer && Number(answer.value) === chapter.quote.answer;

  quoteResult.textContent = ok ? "Bravo, c’est la bonne réponse." : "Essaie encore.";
  quoteResult.className = "result-text " + (ok ? "good" : "bad");
});

document.getElementById("showRiddlesBtn").addEventListener("click", ()=>{
  riddlesVisible = !riddlesVisible;
  renderRiddles(chapters[currentChapterIndex]);
});

document.getElementById("newWordSearchBtn").addEventListener("click", ()=>{
  renderWordSearch(chapters[currentChapterIndex].wordsearchWords);
});

document.getElementById("homeBtn").addEventListener("click", ()=>showView("homeView"));
document.getElementById("prevChapterBtn").addEventListener("click", ()=>changeChapter(-1));
document.getElementById("nextChapterBtn").addEventListener("click", ()=>changeChapter(1));
document.getElementById("gamesPrevBtn").addEventListener("click", ()=>changeChapter(-1));
document.getElementById("gamesNextBtn").addEventListener("click", ()=>changeChapter(1));
document.getElementById("openCurrentGamesBtn").addEventListener("click", ()=>showView("gamesView"));
document.getElementById("markChapterBtn").addEventListener("click", markCurrentChapterDone);
document.getElementById("speakBtn").addEventListener("click", speakCurrentChapter);
document.getElementById("pauseBtn").addEventListener("click", pauseSpeech);
document.getElementById("resumeBtn").addEventListener("click", resumeSpeech);
document.getElementById("stopBtn").addEventListener("click", stopSpeech);
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
document.getElementById("lightbox").addEventListener("click", (e)=>{
  if(e.target.id === "lightbox") closeLightbox();
});

chapterSelect.addEventListener("change", e=>{
  currentChapterIndex = Number(e.target.value);
  updateStory();
  updateGames();
});

gamesChapterSelect.addEventListener("change", e=>{
  currentChapterIndex = Number(e.target.value);
  updateStory();
  updateGames();
});

bindOpenButtons();
populateSelectors();
renderCharacters();
renderGallery(visitGrid, visitPlaces);
renderGallery(liveGrid, liveImages);
updateStory();
updateGames();
updateProgress();

/* DESSIN */
const canvas = document.getElementById("drawCanvas");
const ctx = canvas.getContext("2d");
const drawColor = document.getElementById("drawColor");
const drawSize = document.getElementById("drawSize");
const clearCanvasBtn = document.getElementById("clearCanvasBtn");
const downloadCanvasBtn = document.getElementById("downloadCanvasBtn");
const shareCanvasBtn = document.getElementById("shareCanvasBtn");

let drawing = false;

function setupCanvasBackground(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.strokeStyle = "#d7e1f1";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.arc(140, 120, 60, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(260, 360);
  ctx.lineTo(360, 210);
  ctx.lineTo(460, 360);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.rect(560, 150, 180, 130);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(930, 220, 55, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = "#8b97af";
  ctx.font = "24px Trebuchet MS";
  ctx.fillText("Dessine ici ton univers Montagrid", 28, 38);
  ctx.fillText("Soleil", 108, 128);
  ctx.fillText("Montagne", 304, 388);
  ctx.fillText("Château", 610, 222);
  ctx.fillText("Bouclier", 892, 228);
}

function getPos(e){
  const rect = canvas.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  return {
    x: (clientX - rect.left) * (canvas.width / rect.width),
    y: (clientY - rect.top) * (canvas.height / rect.height)
  };
}

function startDraw(e){
  drawing = true;
  const p = getPos(e);
  ctx.beginPath();
  ctx.moveTo(p.x, p.y);
}

function draw(e){
  if(!drawing) return;
  const p = getPos(e);
  ctx.lineTo(p.x, p.y);
  ctx.strokeStyle = drawColor.value;
  ctx.lineWidth = Number(drawSize.value);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.stroke();
}

function stopDraw(){
  drawing = false;
}

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDraw);
canvas.addEventListener("mouseleave", stopDraw);

canvas.addEventListener("touchstart", e=>{
  e.preventDefault();
  startDraw(e);
}, { passive:false });

canvas.addEventListener("touchmove", e=>{
  e.preventDefault();
  draw(e);
}, { passive:false });

canvas.addEventListener("touchend", stopDraw);

clearCanvasBtn.addEventListener("click", setupCanvasBackground);

downloadCanvasBtn.addEventListener("click", ()=>{
  const link = document.createElement("a");
  link.download = "montagrid-dessin.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});

shareCanvasBtn.addEventListener("click", async ()=>{
  if(!navigator.share){
    alert("Le partage direct n’est pas disponible ici. Utilise le bouton Télécharger.");
    return;
  }

  try{
    const dataUrl = canvas.toDataURL("image/png");
    const response = await fetch(dataUrl);
    const blob = await response.blob();
    const file = new File([blob], "montagrid-dessin.png", { type: "image/png" });

    await navigator.share({
      title: "Mon dessin Montagrid",
      text: "Voici mon dessin inspiré de Montagrid.",
      files: [file]
    });
  } catch(error){
    alert("Le partage n’a pas fonctionné ici. Utilise Télécharger.");
  }
});

setupCanvasBackground();