"use strict";

const citations = [
  {
    texte: "Si vous voulez vivre une vie heureuse, attachez-la à un but, et non pas à des personnes ou à des choses.",
    auteur: "Albert Einstein",
    categorie: ["bonheur"],
  },
  {
    texte: "En plein coeur de toute difficulté se cache une possibilité.",
    auteur: "Albert Einstein",
    categorie: ["courage", "sagesse"],
  },
  {
    texte: "La seule chose qui fait que la vie mérite d'être vécue, c'est de vivre pour les autres.",
    auteur: "Albert Einstein",
    categorie: ["bonheur", "morale", "sagesse"],
  },
  {
    texte: "Ce qui faît la vrai valeur d'un être humain, c'est de s'être délivré de son petit moi.",
    auteur: "Albert Einstein",
    categorie: ["sagesse"],
  },
  {
    texte: "Je dois être prêt à renoncer à ce que je suis pour devenir ce que je serai.",
    auteur: "Albert Einstein",
    categorie: ["bonheur", "courage"],
  },
  {
    texte: "N'essayez pas de devenir un homme qui a du succès, essayez de devenir un homme qui a de la valeur.",
    auteur: "Albert Einstein",
    categorie: ["sagesse"],
  },
  {
    texte: "Rare est le nombre de ceux qui regardent avec leurs propres yeux et qui éprouvent avec leur propre sensibilité.",
    auteur: "Albert Einstein",
    categorie: ["sensibilite"],
  },
  {
    texte: "Tout ce que est vraiment grand et inspiré a été réalisé par des individus travaillant librement.",
    auteur: "Albert Einstein",
    categorie: ["liberte"],
  },
  {
    texte: "Deux choses sont infinies: l'univers et la bêtise humaine. Mais en ce qui concerne l'univers, je n'ai pas de certitude absolue.",
    auteur: "Albert Einstein",
    categorie: ["sagesse"],
  },
  {
    texte: "Il est plus facile de désintégrer un atome qu'un préjugé.",
    auteur: "Albert Einstein",
    categorie: ["sagesse"],
  },
  {
    texte: "La logique vous mènera d'un point A à un point B. L'imagination vous emmènera partout.",
    auteur: "Albert Einstein",
    categorie: ["reve"],
  },
  {
    texte: "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.",
    auteur: "Albert Einstein",
    categorie: ["courage"],
  },
  {
    texte: "Le mot progrès n'aura aucun sens tant qu'il y'aura des enfants malheureux.",
    auteur: "Albert Einstein",
    categorie: ["bonheur", "morale"],
  },
  {
    texte: "Le problème aujourd'hui n'est pas l'énergie atomique, mais le coeur des hommes.",
    auteur: "Albert Einstein",
    categorie: ["morale"],
  },
  {
    texte: "Tout le monde est un génie. Mais si on juge un poisson sur sa capacité à grimper à un arbre, il passera sa vie à croire qu'il est stupide.",
    auteur: "Albert Einstein",
    categorie: ["sagesse"],
  },
  {
    texte: "Une personne qui n'a jamais commis d'erreurs n'a jamais tenté d'innover.",
    auteur: "Albert Einstein",
    categorie: ["courage", "liberte"],
  },
  {
    texte: "Le monde ne sera pas détruit par ceux qui font le mal, mais par ceux qui les regardent sans rien faire.",
    auteur: "Albert Einstein",
    categorie: ["morale"],
  },
  {
    texte: "Le sort de l'humanité en général sera celui qu'elle méritera.",
    auteur: "Albert Einstein",
    categorie: ["morale"],
  },
  {
    texte: "L'humanité se passionne pour des buts dérisoires. Ils s'appellent la richesse, la gloire, le luxe.",
    auteur: "Albert Einstein",
    categorie: ["bonheur"],
  },
  {
    texte: "Ce qui compte ne peut pas toujours être compté. Ce qui peut être compté ne compte pas forcément.",
    auteur: "Albert Einstein",
    categorie: ["bonheur", "sagesse"],
  },
  {
    texte: "Si la vue d'un bureau encombré évoque un esprit encombré, alors que penser d'un bureau vide ?",
    auteur: "Albert Einstein",
    categorie: [],
  },
  {
    texte: "Pour être un membre irréprochable d'une communauté de moutons, il faut avant tout être soi-même un mouton.",
    auteur: "Albert Einstein",
    categorie: ["liberte"],
  },
  {
    texte: "Inventer, c'est penser à côté.",
    auteur: "Albert Einstein",
    categorie: ["liberte", "reve"],
  },
  {
    texte: "Les grands esprits ont toujours dû affronter une opposition violente de la part des esprits médiocres.",
    auteur: "Albert Einstein",
    categorie: ["courage", "liberte"],
  },
  {
    texte: "Ne fais jamais rien contre ta conscience, même si l'Etat te le demande.",
    auteur: "Albert Einstein",
    categorie: ["liberte", "morale"],
  },
  {
    texte: "La liberté consiste à se discipliner au lieu de se laisser discipliner.",
    auteur: "Albert Einstein",
    categorie: ["liberte", "sagesse"],
  },
  {
    texte: "C'est la personne humaine, libre, créatrice et sensible qui façonne le beau et le sublime, alors que les masses restent entraînées dans une ronde infernale d'imbécillité et d'abrutissement.",
    auteur: "Albert Einstein",
    categorie: ["liberte", "courage", "sensibilite"],
  },
  {
    texte: "La joie de regarder et de comprendre est le plus beau cadeau de la nature.",
    auteur: "Albert Einstein",
    categorie: ["bonheur", "reve"],
  },
  {
    texte: "Il n'y a pas d'échec, il n'y que des abandons.",
    auteur: "Albert Einstein",
    categorie: ["courage"],
  },
  {
    texte: "C'est le devoir de chaque homme de rendre au moins autant qu'il en a reçu.",
    auteur: "Albert Einstein",
    categorie: [],
  },
  {
    texte: "Les médias sont les entités les plus puissantes sur terre. Ils ont le pouvoir de rendre les innocents coupables et faire des coupables des innocents, et c'est ça le pouvoir. Parce qu’ils contrôlent l’esprit des masses.",
    auteur: "Malcolm X",
    categorie: ["liberte", "morale"],
  },
  {
    texte: "Si vous n'êtes pas vigilants, les médias arriveront à vous faire détester les gens opprimés et aimer ceux qui les oppriment.",
    auteur: "Malcolm X",
    categorie: ["morale"],
  },
  {
    texte: "Si vous ne vous levez pas pour quelque chose. Vous tomberez pour n'importe quoi.",
    auteur: "Malcolm X",
    categorie: ["morale"],
  },
  {
    texte: "Si vous n'êtes pas prêt à mourir pour elle, sortez le mot \"liberté\" de votre vocabulaire.",
    auteur: "Malcolm X",
    categorie: ["courage", "liberte"],
  },
  {
    texte: "Quand vous commencez à penser par vous-mêmes, vous leur faites peur, et ils s'efforcent de vous interdire tout contact avec l'opinion publique, de peur que si l'opinion publique vous écoute, elle ne veuille plus les écouter.",
    auteur: "Malcolm X",
    categorie: ["courage", "liberte"],
  },
  {
    texte: "Il y'a souvent plus de choses naufragées au fond d'une âme qu'au fond de la mer.",
    auteur: "Victor Hugo",
    categorie: ["reve", "sensibilite"],
  },
  {
    texte: "Mieux vaut une conscience tranquille qu'une destinée prospère. J'aime mieux un bon sommeil qu'un bon lit.",
    auteur: "Victor Hugo",
    categorie: ["sagesse"],
  },
  {
    texte: "La haine, c'est l'hiver qui s'empare du coeur.",
    auteur: "Victor Hugo",
    categorie: ["bonheur"],
  },
  {
    texte: "Vous voulez la misère secourue. Moi je la veux supprimée.",
    auteur: "Victor Hugo",
    categorie: ["morale"],
  },
  {
    texte: "Quand je suis triste, je pense à vous, comme l'hiver on pense au soleil, et quand je suis gai, je pense à vous, comme en plein soleil on pense à l'ombre.",
    auteur: "Victor Hugo",
    categorie: ["bonheur"],
  },
  {
    texte: "Les larmes sont un don. Souvent les pleurs, après l'erreur ou l'abandon, raniment nos forces brisées.",
    auteur: "Victor Hugo",
    categorie: ["bonheur", "courage"],
  },
  {
    texte: "Le plus grand ennui, c'est d'exister sans vivre.",
    auteur: "Victor Hugo",
    categorie: ["bonheur"],
  },
  {
    texte: "J'ai dans l'âme une fleur que nul ne peut cueillir.",
    auteur: "Victor Hugo",
    categorie: ["sensibilite"],
  },
  {
    texte: "Ceux qui vivent sont ceux qui luttent.",
    auteur: "Victor Hugo",
    categorie: ["courage", "liberte"],
  },
  {
    texte: "Mes amis, retenez ceci, il n'y a ni mauvaises herbes ni mauvais hommes. Il n'a que des mauvais cultivateurs.",
    auteur: "Victor Hugo",
    categorie: [],
  },
  {
    texte: "Ouvrez des écoles, vous fermerez des prisons.",
    auteur: "Victor Hugo",
    categorie: [],
  },
  {
    texte: "N'être pas écouté, ce n'est pas une raison pour se taire.",
    auteur: "Victor Hugo",
    categorie: [],
  },
  {
    texte: "La liberté commence où l'ignorance finit.",
    auteur: "Victor Hugo",
    categorie: ["liberte", "sagesse"],
  },
  {
    texte: "La vérité est comme le soleil. Elle fait tout voir et ne se laisse pas regarder",
    auteur: "Victor Hugo",
    categorie: ["sagesse"],
  },
  {
    texte: "N'imitez rien ni personne. Un lion qui copie un lion devient un singe",
    auteur: "Victor Hugo",
    categorie: [],
  },
  {
    texte: "La pensée et plus qu'un droit, c'est le souffle même de l'homme.",
    auteur: "Victor Hugo",
    categorie: ["liberte"],
  },
  {
    texte: "Quand une femme vous parle, écoutez ce qu'elle vous dit avec ses yeux.",
    auteur: "Victor Hugo",
    categorie: ["sensibilite"],
  },
  {
    texte: "Il n'avait pas de gîte, pas de pain, pas de feu, pas d'amour; mais il était joyeux parce qu'il était libre.",
    auteur: "Victor Hugo",
    categorie: ["bonheur", "liberte"],
  },
  {
    texte: "Tu es blanche et je suis noir; mais le jour a besoin de s'unir à la nuit pour enfanter l'aurore et le couchant, qui sont plus beaux que lui !",
    auteur: "Victor Hugo",
    categorie: ["sagesse", "sensibilite"],
  },
  {
    texte: "Le sens révolutionnaire est un sens moral.",
    auteur: "Victor Hugo",
    categorie: ["liberte"],
  },
  {
    texte: "Ce qui compte, chez un homme ce n'est pas la couleur de sa peau ou la texture de ses cheveux, mais la texte et la qualité de son âme.",
    auteur: "Martin Luther King",
    categorie: ["morale"],
  },
  {
    texte: "L'homme bon ne regarde pas les particularités physiques mais sait discerner ces qualités profondes qui rendent les gens humains, et donc frères.",
    auteur: "Martin Luther King",
    categorie: ["morale"],
  },
  {
    texte: "Apprenons à vivre ensemble comme des frères ou nous mourrons tous ensemble comme des idiots.",
    auteur: "Martin Luther King",
    categorie: ["sagesse"],
  },
  {
    texte: "Chaque fois que des hommes redressent l'échine, ils peuvent aller où ils veulent, car personne ne peut monter sur votre dos tant que vous vous tenez droit.",
    auteur: "Martin Luther King",
    categorie: ["courage", "liberte"],
  },
  {
    texte: "Croyez en vos rêves et ils se réaliseront peut-être. Croyez en vous et ils se réaliseront sûrement.",
    auteur: "Martin Luther King",
    categorie: ["bonheur", "courage", "reve"],
  },
  {
    texte: "L'obscurité ne peut pas chasser l'obscurité; seule la lumière le peut. La haine ne peut pas chasser la haine; seul l'amour le peut.",
    auteur: "Martin Luther King",
    categorie: ["sagesse"],
  },
  {
    texte: "La non-violence est une arme puissante et juste, qui tranche sans blesser et ennoblit l'homme qui la manie.",
    auteur: "Martin Luther King",
    categorie: ["morale"],
  },
  {
    texte: "La question la plus persistante et la plus urgente de la vie est: \"que faites-vous pour les autres ?\"",
    auteur: "Martin Luther King",
    categorie: ["morale"],
  },
  {
    texte: "Si tu ne peux pas voler, alors cours. Si tu ne peux pas courir, alors marche. Si tu ne peux pas marcher, alors rampe, mais quoi que tu fasses, tu dois continuer à avancer.",
    auteur: "Martin Luther King",
    categorie: ["courage"],
  },
  {
    texte: "Vivez les rêves que la vie vous défie de rêver.",
    auteur: "Martin Luther King",
    categorie: ["bonheur", "courage", "reve"],
  },
  {
    texte: "La véritable grandeur d'un homme ne se mesure pas à des moments où il est à son aise, mais lorqu'il traverse une pèriode de controverses et de défis.",
    auteur: "Martin Luther King",
    categorie: ["courage"],
  },
  {
    texte: "Chacun à la responsabilité morale de désobéir aux lois injustes.",
    auteur: "Martin Luther King",
    categorie: ["courage", "liberte", "morale"],
  },
  {
    texte: "Ce qui  m'effraie, ce n'est pas l'oppression des méchants; c'est l'indifférence des bons.",
    auteur: "Martin Luther King",
    categorie: ["sagesse"],
  },
  {
    texte: "Nous avons appris à voler dans les airs comme des oiseaux, nous avons appris à nager dans les océans comme des poissons, mais nous n'avons pas appris sur la terre à marcher comme des frères et soeurs.",
    auteur: "Martin Luther King",
    categorie: ["sagesse", "morale"],
  },
  {
    texte: "Ceux qui aiment la paix doivent apprendre à s'organiser aussi bien que ceux qui veulent la guerre.",
    auteur: "Martin Luther King",
    categorie: ["sagesse"],
  },
  {
    texte: "La liberté n'est jamais volontairement donnée par l'oppresseur; elle doit être exigée par l'opprimé.",
    auteur: "Martin Luther King",
    categorie: ["courage", "liberte"],
  },
  {
    texte: "Une injustice, où qu'elle se produise, est une menace pour la justice partout ailleurs.",
    auteur: "Martin Luther King",
    categorie: ["morale"],
  },
  {
    texte: "A la fin, nous nous souviendrons non pas des mots de nos ennemis, mais des silences de nos amis.",
    auteur: "Martin Luther King",
    categorie: ["sagesse"],
  },
  {
    texte: "Celui qui accepte le mal sans lutter contre lui coopère avec lui.",
    auteur: "Martin Luther King",
    categorie: ["courage", "morale"],
  },
  {
    texte: "Je fais le rêve qu'un jour mes enfants vivront dans une nation où ils ne seront pas jugés pour la couleur de leur peau, mais pour leur caractère.",
    auteur: "Martin Luther King",
    categorie: ["morale", "reve"],
  },
  {
    texte: "Vous pouvez avec certitude amèliorer un seul petit coin de l'univers: vous-même.",
    auteur: "Aldous Huxley",
    categorie: ["sagesse"],
  },
  {
    texte: "La révolution véritablement révolutionnaire se réalisera, non pas dans le monde extérieur, mais dans l'âme et la chair des êtres humains.",
    auteur: "Aldous Huxley",
    categorie: ["liberte"],
  },
  {
    texte: "Comme si l'on croyait quoi que ce soit d'instinct ! On croit les choses parce qu'on a été conditionné à les croire.",
    auteur: "Aldous Huxley",
    categorie: ["sagesse"],
  },
  {
    texte: "La victime de la manipulation mentale ignore qu'elle est une victime. Les murs de sa prison lui sont invisibles et elle se croit libre.",
    auteur: "Aldous Huxley",
    categorie: ["liberte"],
  },
  {
    texte: "La philosophie nous enseigne à douter de ce qui nous paraît évident. La progagande, au contraire, nous enseigne à accepter pour évident ce dont il serait raisonnable de douter.",
    auteur: "Aldous Huxley",
    categorie: ["liberte", "sagesse"],
  },
  {
    texte: "La plus grande partie de l'ignorance peut être vaincue. Nous ne savons pas, parce que nous ne voulons pas savoir.",
    auteur: "Aldous Huxley",
    categorie: ["sagesse"],
  },
  {
    texte: "La liberté ne s'accorde pas, elle s'arrache.",
    auteur: "Aldous Huxley",
    categorie: ["courage", "liberte"],
  },
  {
    texte: "Si l'on est différent, il est fatal qu'on soit seul.",
    auteur: "Aldous Huxley",
    categorie: ["sagesse"],
  },
  {
    texte: "Ne remettez jamais à demain le plaisir que vous pouvez prendre aujourd'hui.",
    auteur: "Aldous Huxley",
    categorie: ["bonheur"],
  },
  {
    texte: "On doit jouir de chaque moment, d'une manière passionnée, audacieuse, exaltante, unique.",
    auteur: "Aldous Huxley",
    categorie: ["bonheur"],
  },
  {
    texte: "Les conséquences de nos actions sont des épouvantails pour les lâches, et des rayons de lumière pour les sages.",
    auteur: "Aldous Huxley",
    categorie: ["courage", "sagesse"],
  },
  {
    texte: "L'expérience, ce n'est pas ce qui arrive à quelqu'un, c'est ce que quelqu'un fait avec ce qui lui arrive.",
    auteur: "Aldous Huxley",
    categorie: ["courage", "sagesse"],
  },
  {
    texte: "Notre vie s'améliore seulement si nous prenons des risques et le plus grand de tous les risques est d'être honnête envers soi-même.",
    auteur: "Aldous Huxley",
    categorie: ["bonheur", "courage"],
  },
  {
    texte: "Les petites choses faites dans un esprit d'amour fervent sont infiniment plus précieuses que des choses beaucoup plus grandes faites avec moins d'amour.",
    auteur: "Aldous Huxley",
    categorie: ["sensibilite"],
  },
  {
    texte: "Le secret du génie est d'insuffler l'esprit de l'enfance dans l'âge adulte ce qui signifie ne jamais perdre son enthousiasme.",
    auteur: "Aldous Huxley",
    categorie: [],
  },
  {
    texte: "Le courage et la confiance en soi sont les meilleures des vertus.",
    auteur: "Aldous Huxley",
    categorie: ["courage"],
  },
  {
    texte: "Tous les hommes désirent la paix, mais il y'en a peu qui désirent les choses qui conduisent à la paix.",
    auteur: "Aldous Huxley",
    categorie: ["sagesse", "morale"],
  },
  {
    texte: "Le fait que les hommes tirent peu de profit des leçons de l'Histoire est la leçon la plus importante que l'Histoire nous enseigne.",
    auteur: "Aldous Huxley",
    categorie: ["sagesse"],
  },
  {
    texte: "L'homme connaît tant d'autres choses; il ne se connaît pas lui-même.",
    auteur: "Aldous Huxley",
    categorie: ["sagesse"],
  },
  {
    texte: "L'idéalisme est la noble toge dont les hommes politiques drapent leur volonté de puissance.",
    auteur: "Aldous Huxley",
    categorie: [],
  },
  {
    texte: "La dictature parfaite serait une dictature qui aurait les apparences de la démocratie, une prison sans murs dont les prisonnier ne songeraient pas à s'évader, un système d'esclavage oû, grâce à la consommation et au divertissement, les esclaves auraient l'amour de leur servitude.",
    auteur: "Aldous Huxley",
    categorie: ["liberte"],
  },
  {
    texte: "N'attends pas que les événements arrivent comme tu le souhaites. Décide de vouloir ce qui arrive... et tu seras heureux.",
    auteur: "Aristote",
    categorie: ["bonheur", "courage"],
  },
  {
    texte: "Le bonheur est à ceux qui se suffisent à eux-mêmes.",
    auteur: "Aristote",
    categorie: ["bonheur"],
  },
  {
    texte: "Le commencement est beaucoup plus que la moitié de l'objectif.",
    auteur: "Aristote",
    categorie: ["courage"],
  },
  {
    texte: "L'amitié est une âme en deux corps.",
    auteur: "Aristote",
    categorie: ["sensibilite"],
  },
  {
    texte: "L'espoir est un rêve éveillé.",
    auteur: "Aristote",
    categorie: ["courage", "reve"],
  },
  {
    texte: "Le Bien ne suffit pas à être heureux, mais le mal suffit à rendre malheureux.",
    auteur: "Aristote",
    categorie: ["bonheur", "morale"],
  },
  {
    texte: "La mélancolie est le partage de tous les hommes de génie.",
    auteur: "Aristote",
    categorie: ["sensibilite"],
  },
  {
    texte: "Nous sommes ce que nous faisons à plusieurs reprises. L'excellence n'est donc pas un acte, mais une habitude.",
    auteur: "Aristote",
    categorie: ["courage"],
  },
  {
    texte: "Il n'y a qu'une seule façon d'éviter les critiques: Ne dis rien, ne fais rien, ne sois rien.",
    auteur: "Aristote",
    categorie: ["bonheur", "courage", "sagesse"],
  },
  {
    texte: "C'est de par leur caractère que les hommes sont ce qu'ils sont, mais c'est de par leurs actions qu'ils sont heureux, ou le contraire.",
    auteur: "Aristote",
    categorie: ["bonheur", "courage"],
  },
  {
    texte: "Le courage est la première des qualités humaines car elle garantit toutes les autres.",
    auteur: "Aristote",
    categorie: ["courage", "reve"],
  },
  {
    texte: "Le bonheur est en même temps ce qu'il y'a de meilleur, de plus beau et de plus agréable.",
    auteur: "Aristote",
    categorie: ["bonheur"],
  },
  {
    texte: "En toute chose, c'est la fin qui est essentiel.",
    auteur: "Aristote",
    categorie: ["courage"],
  },
  {
    texte: "Rien dans notre intelligence qui soit passé par nos sens.",
    auteur: "Aristote",
    categorie: [],
  },
  {
    texte: "On ne devient homme qu'en se surpassant.",
    auteur: "Aristote",
    categorie: ["courage"],
  },
  {
    texte: "Le bonheur d'une vie ne s'apprécie qu'au soir d'une vie.",
    auteur: "Aristote",
    categorie: ["bonheur"],
  },
  {
    texte: "Aimes-tu la vie ? Alors ne gaspille pas ton temps, car il est l'essence de la vie.",
    auteur: "Benjamin Franklin",
    categorie: ["bonheur", "courage", "sagesse"],
  },
  {
    texte: "Il y'a bien des manières de ne pas réussir, mais la plus sûre est de ne jamais prendre de risques.",
    auteur: "Benjamin Franklin",
    categorie: ["courage"],
  },
  {
    texte: "Cessons la guerre en nous.",
    auteur: "Benjamin Franklin",
    categorie: ["bonheur"],
  },
  {
    texte: "Tel doit être l'avenir: pénétrant et simple.",
    auteur: "Benjamin Franklin",
    categorie: [],
  },
  {
    texte: "L'utopie est simplement ce qui n'a pas encore été essayé.",
    auteur: "Benjamin Franklin",
    categorie: ["reve"],
  },
  {
    texte: "On n'est jamais trop âgé pour s'instruire.",
    auteur: "Benjamin Franklin",
    categorie: ["courage", "sagesse"],
  },
  {
    texte: "Le bon sens, tout le monde en a besoin, peu l'ont, et chacun croit l'avoir.",
    auteur: "Benjamin Franklin",
    categorie: ["sagesse"],
  },
  {
    texte: "Tu me dis, j'oublie. Tu m'enseignes, je me souviens. Tu m'impliques, j'apprends.",
    auteur: "Benjamin Franklin",
    categorie: ["sagesse"],
  },
  {
    texte: "Ne cachez pas vos talents ils méritent d'être utilisés. A quoi sert un cadran solaire à l'ombre ?",
    auteur: "Benjamin Franklin",
    categorie: [],
  },
  {
    texte: "La bonté envers autrui est grande bonté envers soi-même.",
    auteur: "Benjamin Franklin",
    categorie: ["morale"],
  },
  {
    texte: "L'énergie et l'obstination viennent à bout de toutes les résistances.",
    auteur: "Benjamin Franklin",
    categorie: ["courage"],
  },
  {
    texte: "La vrai tragédie de la vie, c'est qu'on devient vieux trop tôt et sage trop tard.",
    auteur: "Benjamin Franklin",
    categorie: ["sagesse"],
  },
  {
    texte: "Un peuple prêt à sacrifier un peu de liberté pour un peu de sécurité ne mérite ni l'une ni l'autre, et finit par perdre les deux.",
    auteur: "Benjamin Franklin",
    categorie: ["liberte"],
  },
  {
    texte: "Si vous voulez avoir un serviteur fidèle, servez-vous vous-même.",
    auteur: "Benjamin Franklin",
    categorie: ["sagesse"],
  },
  {
    texte: "Une grande beauté, une force formidable, de grandes richesses ne sont pas vraiment d'un grand intérêt; un coeur juste surpasse tout cela.",
    auteur: "Benjamin Franklin",
    categorie: ["morale", "sensibilite"],
  },
  {
    texte: "Il n'y a jamais eu de bonne guerre ni de mauvaise paix.",
    auteur: "Benjamin Franklin",
    categorie: ["sagesse", "morale"],
  },
  {
    texte: "Si vous voulez savoir la valeur de l'argent, essayez donc d'en emprunter.",
    auteur: "Benjamin Franklin",
    categorie: [],
  },
  {
    texte: "Un bon exemple est le meilleur sermon.",
    auteur: "Benjamin Franklin",
    categorie: ["sagesse"],
  },
  {
    texte: "Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés.",
    auteur: "Confucius",
    categorie: ["sagesse"],
  },
  {
    texte: "La joie est en tout; il faut savoir l'extraire.",
    auteur: "Confucius",
    categorie: ["bonheur"],
  },
  {
    texte: "Une petite impatience peut ruiner un grand projet.",
    auteur: "Confucius",
    categorie: ["sagesse"],
  },
  {
    texte: "On a deux vies, et la deuxième commence quand on se rend compte qu'on en a qu'une.",
    auteur: "Confucius",
    categorie: ["sagesse"],
  },
  {
    texte: "La vie est vraiment simple, mais nous insistons à la rendre compliquée.",
    auteur: "Confucius",
    categorie: ["sagesse"],
  },
  {
    texte: "Que l'on s'efforce d'être pleinement humain et il n'y aura plus de place pour le mal.",
    auteur: "Confucius",
    categorie: ["bonheur", "morale"],
  },
  {
    texte: "Nulle pierre ne peut être polie sans friction, nul homme ne peut parfaire son expérience sans épreuves.",
    auteur: "Confucius",
    categorie: ["courage", "sagesse"],
  },
  {
    texte: "Le silence est un ami qui ne trahit jamais.",
    auteur: "Confucius",
    categorie: ["sagesse"],
  },
  {
    texte: "Si l'homme a deux oreilles et une bouche, c'est pour écouter deux fois plus qu'il ne parle.",
    auteur: "Confucius",
    categorie: ["sagesse"],
  },
  {
    texte: "J'ignore tout de la vie, que saurais-je de la mort ?",
    auteur: "Confucius",
    categorie: ["sagesse"],
  },
  {
    texte: "Agissez envers les autres comme vous aimeriez qu'on agisse envers vous.",
    auteur: "Confucius",
    categorie: ["sagesse"],
  },
  {
    texte: "Après une faute, ne pas se corriger, c'est le vraie faute.",
    auteur: "Confucius",
    categorie: ["sagesse"],
  },
  {
    texte: "Etre humain, c'est aimer les hommes, être sage, c'est les connaître.",
    auteur: "Confucius",
    categorie: ["sagesse"],
  },
  {
    texte: "A ta naissance tout le monde rit et tu es le seul à pleurer. Conduis ta vie de façon à ce qu'à ta mort tout le monde pleure et que tu sois le seul à sourire.",
    auteur: "Confucius",
    categorie: ["bonheur"],
  },
  {
    texte: "Deviens qui tu es! Fais ce que toi seul peux faire.",
    auteur: "Friedrich Nietzsche",
    categorie: ["bonheur", "courage"],
  },
  {
    texte: "Et la vie elle-même m'a dit ce secret: \"Vois, dit-elle, je suis ce qui doit toujours se surmonter soi-même\".",
    auteur: "Friedrich Nietzsche",
    categorie: ["courage"],
  },
  {
    texte: "La beauté parle à voix basse; elle ne pénétre que dans les âmes les plus eveillées.",
    auteur: "Friedrich Nietzsche",
    categorie: ["reve", "sensibilite"],
  },
  {
    texte: "L'homme a besoin de ce qu'il y'a de pire en lui s'il veut parvenir à ce qu'il a de meilleur.",
    auteur: "Friedrich Nietzsche",
    categorie: ["morale"],
  },
  {
    texte: "Veux-tu avoir la vie facile? Reste toujours près du troupeau, et oublie-toi en lui.",
    auteur: "Friedrich Nietzsche",
    categorie: ["courage", "liberte"],
  },
  {
    texte: "Le pas de quelqu'un révèle s'il marche sur son propre chemin.",
    auteur: "Friedrich Nietzsche",
    categorie: ["courage"],
  },
  {
    texte: "L'amour ne veut pas la durée, elle veut l'instant et l'éternité.",
    auteur: "Friedrich Nietzsche",
    categorie: ["sensibilite"],
  },
  {
    texte: "Méfions-nous: plus nous nous élevons haut, plus nous semblons petits à ceux qui ne savent pas voler.",
    auteur: "Friedrich Nietzsche",
    categorie: ["sagesse"],
  },
  {
    texte: "A lutter avec les mêmes armes que ton ennemi, tu deviendras comme lui.",
    auteur: "Friedrich Nietzsche",
    categorie: ["morale"],
  },
  {
    texte: "Je vous le dis: il faut encore porter en soi le chaos, pour être capable d'enfanter une étoile dansante.",
    auteur: "Friedrich Nietzsche",
    categorie: [],
  },
  {
    texte: "Créer, c'est la grande délivrance de la douleur et l'allègement de la vie.",
    auteur: "Friedrich Nietzsche",
    categorie: ["bonheur", "reve"],
  },
  {
    texte: "Celui qui ne dispose pas des deux tiers de sa journée pour lui-même est un esclave, qu'il soit d'ailleurs ce qu'il veut: politique, marchand, fonctionnaire, érudit.",
    auteur: "Friedrich Nietzsche",
    categorie: ["liberte"],
  },
  {
    texte: "Il faut avoir une musique en soi pour faire danser le monde.",
    auteur: "Friedrich Nietzsche",
    categorie: ["sensibilite"],
  },
  {
    texte: "Le plus dangereux ennemi que tu puisses rencontrer sera toujours toi-même.",
    auteur: "Friedrich Nietzsche",
    categorie: ["courage", "sagesse"],
  },
  {
    texte: "La vie a besoin d'illusions, c'est-à-dire de non vérités tenues pour des vérités.",
    auteur: "Friedrich Nietzsche",
    categorie: ["bonheur", "sagesse"],
  },
  {
    texte: "Peu de gens sont faits pour l'indépendance, c'est le privilège des puissants.",
    auteur: "Friedrich Nietzsche",
    categorie: ["courage", "liberte"],
  },
  {
    texte: "La croyance que rien ne change provient soit d'une mauvaise vue, soit d'une mauvaise foi. La première se corrige, la seconde se combat.",
    auteur: "Friedrich Nietzsche",
    categorie: ["courage"],
  },
  {
    texte: "Le serpent qui ne peut changer de peau, meurt. Il en va de même des esprits que l'on empêche de changer d'opinion: ils cessent d'être esprit.",
    auteur: "Friedrich Nietzsche",
    categorie: ["sagesse"],
  },
  {
    texte: "L'Etat est le plus froid des monstres. Il ment froidement; et voici le mensonge qui s'échappe de sa bouche: \"Moi l'Etat, je suis le peuple\".",
    auteur: "Friedrich Nietzsche",
    categorie: ["liberte"],
  },
  {
    texte: "Si chacun ne conservait que ce dont il a besoin, nul ne manquerait de rien, et chacun se contenterait de ce qu'il a.",
    auteur: "Gandhi",
    categorie: ["sagesse", "morale"],
  },
  {
    texte: "Il y'a assez de tout dans le monde pour satisfaire aux besoins de l'homme, mais pas assez pour assouvir son avidité.",
    auteur: "Gandhi",
    categorie: ["morale"],
  },
  {
    texte: "Soyez le changement que vous voulez voir dans le monde.",
    auteur: "Gandhi",
    categorie: ["courage"],
  },
  {
    texte: "A l'instant où l'esclave décide qu'il ne sera plus esclave, ses chaînes tombent.",
    auteur: "Gandhi",
    categorie: ["courage", "liberte"],
  },
  {
    texte: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
    auteur: "Gandhi",
    categorie: ["sagesse"],
  },
  {
    texte: "Dès que quelqu'un comprend qu'il est contraire à sa dignité d'homme d'obéir à des lois injustes, aucune tyrannie ne peut l'asservir.",
    auteur: "Gandhi",
    categorie: ["courage", "morale"],
  },
  {
    texte: "On peut juger de la grandeur d'une nation par la façon dont les animaux y sont traités.",
    auteur: "Gandhi",
    categorie: ["morale"],
  },
  {
    texte: "Croire en quelque chose et ne pas le vivre, c'est malhonnête.",
    auteur: "Gandhi",
    categorie: [],
  },
  {
    texte: "Vivons simplement pour que d'autres puissent simplement vivre.",
    auteur: "Gandhi",
    categorie: ["sagesse", "morale"],
  },
  {
    texte: "Le bonheur, c'est quand vos actes sont en accord avec vos paroles.",
    auteur: "Gandhi",
    categorie: ["bonheur"],
  },
  {
    texte: "La force du nombre ne réjouit que le peureux. Celui qui est courageux en esprit se fait gloire de combattre seul.",
    auteur: "Gandhi",
    categorie: ["courage"],
  },
  {
    texte: "En opposant la haine à la haine, on ne fait que la répandre, en surface comme en profondeur.",
    auteur: "Gandhi",
    categorie: ["sagesse"],
  },
  {
    texte: "La haine tue toujours, l'amour ne meurt jamais.",
    auteur: "Gandhi",
    categorie: ["morale"],
  },
  {
    texte: "La force ne vient pas des capacités physiques mais d'une volonté indomptable.",
    auteur: "Gandhi",
    categorie: ["courage"],
  },
  {
    texte: "La différence entre le possible et l'impossible se trouve dans la détermination.",
    auteur: "Gandhi",
    categorie: ["courage"],
  },
  {
    texte: "Le plus grand voyageur n'est pas celui qui a fait dix fois le tour du monde, mais celui qui a fait une seule fois le tour de lui-même.",
    auteur: "Gandhi",
    categorie: ["sagesse"],
  },
  {
    texte: "Vis comme si tu devais mourir demain. Apprends comme si tu devais vivre toujours.",
    auteur: "Gandhi",
    categorie: ["courage", "sagesse"],
  },
  {
    texte: "Toute âme qui s'élève élève le monde.",
    auteur: "Gandhi",
    categorie: [],
  },
  {
    texte: "La vrai moralité ne consiste pas à suivre les chemins battus, mais à trouver la voie véritable pour nous-même et à la suivre de manière intrépide.",
    auteur: "Gandhi",
    categorie: ["courage"],
  },
  {
    texte: "Je ne veux, pour rien au monde, étouffer cette petite voix qu'est ma conscience, ou l'expression de ce qu'il y'a de plus profond en moi.",
    auteur: "Gandhi",
    categorie: ["sensibilite"],
  },
  {
    texte: "L'amour ignore sa profondeur jusqu'a l'heure de la séparation.",
    auteur: "Khalil Gibran",
    categorie: ["bonheur", "sensibilite"],
  },
  {
    texte: "Tous peuvent entendre mais seuls les êtres sensibles comprennent.",
    auteur: "Khalil Gibran",
    categorie: ["sensibilite"],
  },
  {
    texte: "Vos enfants: vous pouvez vous efforcer d'être comme eux, mais ne tentez pas de les faire comme vous.",
    auteur: "Khalil Gibran",
    categorie: ["sagesse"],
  },
  {
    texte: "Plus profondément le chagrin creusera votre être, plus vous pourrez contenir de joie.",
    auteur: "Khalil Gibran",
    categorie: ["bonheur", "sensibilite"],
  },
  {
    texte: "Nul ne peut atteindre l'aube sans passer par le chemin de la nuit.",
    auteur: "Khalil Gibran",
    categorie: ["courage", "reve"],
  },
  {
    texte: "Si tu aimes quelqu'un, laisse le partir! S'il revient, c'est qu'il a toujours été là, s'il ne revient pas, c'est qu'il ne l'a jamais été.",
    auteur: "Khalil Gibran",
    categorie: ["bonheur", "sensibilite"],
  },
  {
    texte: "\"Ils me disent dans leur éveil: \"Toi et le monde dans lequel tu vis n'êtes qu'un grain de sable sur le rivage infini d'une mer infinie. Et dans mon rêve je leur réponds:\" Je suios la mer infinie, et tous les mondes ne sont que des grains de sable dans mon rivage\".",
    auteur: "Khalil Gibran",
    categorie: ["reve"],
  },
  {
    texte: "Même ceux qui boitent ne reculent pas.",
    auteur: "Khalil Gibran",
    categorie: ["courage"],
  },
  {
    texte: "Révèle ton secret au vent, mais ne lui reproche pas de le répéter aux arbres.",
    auteur: "Khalil Gibran",
    categorie: ["sagesse"],
  },
  {
    texte: "C'est en donnant de vous-même que vous donnez véritablement.",
    auteur: "Khalil Gibran",
    categorie: [],
  },
  {
    texte: "Si autrui vous blesse, vous pouvez oublier la blessure; mais si vous blessez, vous vous en rappellerez toujours.",
    auteur: "Khalil Gibran",
    categorie: ["sagesse", "morale"],
  },
  {
    texte: "Le grand défaut des hommes est d'abandonner leurs propres champs pour ôter l'ivraie de ceux des autres.",
    auteur: "Khalil Gibran",
    categorie: ["sagesse", "morale"],
  },
  {
    texte: "Ouvre l'oeil et regarde, tu verras ton visage dans tous les visages. Tends l'oreille et écoute, tu entendras ta propre voix dans toutes les voix.",
    auteur: "Khalil Gibran",
    categorie: ["sensibilite"],
  },
  {
    texte: "Personne ne peut vous révéler autre chose que ce qui repose déjà, à moitié endormi, dans le commencement de votre savoir.",
    auteur: "Khalil Gibran",
    categorie: ["sagesse"],
  },
  {
    texte: "C'est dans le rosée des petites choses que le coeur trouve son matin et se rafraîchit.",
    auteur: "Khalil Gibran",
    categorie: ["bonheur"],
  },
  {
    texte: "Plus on voyage au loin, moins on se connaît.",
    auteur: "Lao Tseu",
    categorie: ["sagesse"],
  },
  {
    texte: "Celui qui sait ne parle pas; celui qui parle ne sait pas.",
    auteur: "Lao Tseu",
    categorie: ["sagesse"],
  },
  {
    texte: "Ta vie est un bloc d'argile; ne laisse parsonne le modeler à ta place.",
    auteur: "Lao Tseu",
    categorie: ["courage", "sagesse"],
  },
  {
    texte: "Il n'y a point de chemin vers le bonheur: le bonheur c'est le chemin.",
    auteur: "Lao Tseu",
    categorie: ["bonheur", "sagesse"],
  },
  {
    texte: "Je m'observe moi-même et c'est ainsi que je réussis à connaître les autres.",
    auteur: "Lao Tseu",
    categorie: ["sagesse"],
  },
  {
    texte: "Plus le sage donne aux autres, plus il possède.",
    auteur: "Lao Tseu",
    categorie: [],
  },
  {
    texte: "La noblesse a pour racine l'humilité.",
    auteur: "Lao Tseu",
    categorie: ["sagesse"],
  },
  {
    texte: "Mieux vaut allumer une bougie que de maudire les ténébres.",
    auteur: "Lao Tseu",
    categorie: [],
  },
  {
    texte: "Le voyage de mille lieues a commencé par un pas.",
    auteur: "Lao Tseu",
    categorie: ["courage"],
  },
  {
    texte: "L'expérience est une lumière qui n'éclaire qui soi-même.",
    auteur: "Lao Tseu",
    categorie: ["sagesse"],
  },
  {
    texte: "On surestime ce que l'on n'est pas. On sous-estime ce que l'on est.",
    auteur: "Lao Tseu",
    categorie: ["courage"],
  },
  {
    texte: "Apprends à écrire tes blessures dans le sable et à graver tes joies dans la pierre.",
    auteur: "Lao Tseu",
    categorie: ["bonheur", "sagesse"],
  },
  {
    texte: "Etre humain: c'est aimer les hommes. Etre sage: c'est les connaître.",
    auteur: "Lao Tseu",
    categorie: ["sagesse"],
  },
  {
    texte: "Les paroles sincères ne sont pas élégantes; Les paroles élégantes ne sont pas sincères.",
    auteur: "Lao Tseu",
    categorie: [],
  },
  {
    texte: "Etre en repos s'appelle revenir à la vie.",
    auteur: "Lao Tseu",
    categorie: ["sagesse"],
  },
  {
    texte: "L'échec est le fondement de la réussite.",
    auteur: "Lao Tseu",
    categorie: ["courage"],
  },
  {
    texte: "Sois content de ce que tu as: Réjouis-toi de la réalité telle qu'elle est. Quand tu comprends que rien ne manque, le monde entier t'appartient.",
    auteur: "Lao Tseu",
    categorie: ["sagesse"],
  },
  {
    texte: "Si la vie était prévisible, elle serait sans saveur.",
    auteur: "Eleanor Roosevelt",
    categorie: ["courage"],
  },
  {
    texte: "Vous devez faire les choses que vous vous croyez incapable de faire.",
    auteur: "Eleanor Roosevelt",
    categorie: ["courage"],
  },
  {
    texte: "Chaque expérience où vous vous arrêtez pour regarder la peur bien en face augmente votre force, votre courage et votre confiance.",
    auteur: "Eleanor Roosevelt",
    categorie: ["courage"],
  },
  {
    texte: "Le but de la vie est de vivre, goûter l'expérience au maximum pour accueillir avec impatience et sans crainte une expérience inédite et plus riche.",
    auteur: "Eleanor Roosevelt",
    categorie: ["courage"],
  },
  {
    texte: "Le futur appartient à ceux qui croient à la beauté de leurs rêves.",
    auteur: "Eleanor Roosevelt",
    categorie: ["courage", "reve"],
  },
  {
    texte: "Le seules limites de nos réalisations de demain, ce sont nos doutes d'aujourd'hui.",
    auteur: "Eleanor Roosevelt",
    categorie: ["courage"],
  },
  {
    texte: "Fais ce que tu crois juste, selon ton coeur, car on te critiquera de toute façon.",
    auteur: "Eleanor Roosevelt",
    categorie: ["courage", "liberte"],
  },
  {
    texte: "Les grands esprits discutent des idées; les esprits moyens discutent des événements; les petits esprits discutent des gens.",
    auteur: "Eleanor Roosevelt",
    categorie: ["sagesse"],
  },
  {
    texte: "Avant de pouvoir se lier d'amitié avec quelqu'un d'autre, il faut être ami avec soi-même.",
    auteur: "Eleanor Roosevelt",
    categorie: [],
  },
  {
    texte: "Souvenez-vous que vous avez non seulement le droit d'être unique, mais aussi l'obligation.",
    auteur: "Eleanor Roosevelt",
    categorie: ["liberte"],
  },
  {
    texte: "Le don de l'amour est un enseignement en soi.",
    auteur: "Eleanor Roosevelt",
    categorie: [],
  },
  {
    texte: "Hier est de l'histoire, demain est un mystère, aujourd'hui est un cadeau.",
    auteur: "Eleanor Roosevelt",
    categorie: ["bonheur"],
  },
  {
    texte: "Personne ne peut vous diminuer sans que vous y consentiez.",
    auteur: "Eleanor Roosevelt",
    categorie: ["courage"],
  },
  {
    texte: "On ne doit jamais, pour aucune raison, tourner le dos à la vie.",
    auteur: "Eleanor Roosevelt",
    categorie: ["bonheur"],
  },
  {
    texte: "Je t'aime, et t'ai toujours aimé; quand on aime ainsi une personne, on l'aime telle qu'elle est et non telle qu'on la voudrait.",
    auteur: "Léon Tolstoï",
    categorie: ["sensibilite"],
  },
  {
    texte: "Tous les hommes font la même erreur de s'imaginer que bonheur veut dire que tous les voeux se réalisent.",
    auteur: "Léon Tolstoï",
    categorie: ["bonheur", "reve"],
  },
  {
    texte: "Chacun rêve de changer l'humanité, mais personne ne pense à se changer lui-même.",
    auteur: "Léon Tolstoï",
    categorie: ["sagesse", "reve"],
  },
  {
    texte: "Nous ne sommes pas ici dans ce monde pour transformer les autres, mais pour nous transformer nous-mêmes.",
    auteur: "Léon Tolstoï",
    categorie: ["sagesse", "morale", "sensibilite"],
  },
  {
    texte: "De toutes les sciences que l'homme peut et doit savoir, la principale, c'est la science de vivre de manière à faire le moins de mal et le plus de bien possible.",
    auteur: "Léon Tolstoï",
    categorie: ["morale"],
  },
  {
    texte: "Il n'y a pas d'autre amour que celui qui consiste à donner sa vie pour ceux qu'on aime.",
    auteur: "Léon Tolstoï",
    categorie: ["sensibilite"],
  },
  {
    texte: "Le temps qui nous reste à vivre est plus important que toutes les années écoulées.",
    auteur: "Léon Tolstoï",
    categorie: ["bonheur", "courage"],
  },
  {
    texte: "Il faut se mettre à la place de chacun. Tout comprendre, c'est tout pardonner.",
    auteur: "Léon Tolstoï",
    categorie: ["sagesse", "sensibilite"],
  },
  {
    texte: "Faire le bien ne peut pas rendre heureux mais faire le mal rendra à coup sûr malheureux.",
    auteur: "Léon Tolstoï",
    categorie: ["bonheur", "morale", "sensibilite"],
  },
  {
    texte: "Il n'est nulle grandeur là où manquent simplicité, bonté, et vérité.",
    auteur: "Léon Tolstoï",
    categorie: ["sagesse"],
  },
  {
    texte: "Il y'a autant de façons d'aimer qu'il y'a de coeurs.",
    auteur: "Léon Tolstoï",
    categorie: ["sensibilite"],
  },
  {
    texte: "C'est une sottise que de se laisser dominer par son passé, il faut lutter pour vivre mieux, beaucoup mieux...",
    auteur: "Léon Tolstoï",
    categorie: ["bonheur", "courage"],
  },
  {
    texte: "Si un homme a beaucoup plus qu'il ne faut, c'est que d'autres manquent du nécessaire.",
    auteur: "Léon Tolstoï",
    categorie: ["sagesse", "morale"],
  },
  {
    texte: "Se représenter un homme privé de liberté, c'est se le représenter privé de vie.",
    auteur: "Léon Tolstoï",
    categorie: ["liberte"],
  },
  {
    texte: "Il n'est nullement démontré que les buts vers lesquels tend l'humanité soient la liberté, l'égalité, l'évolution ou la civilisation.",
    auteur: "Léon Tolstoï",
    categorie: ["sagesse"],
  },
  {
    texte: "Il me semble bien souvent que les hommes ne mettent guère en pratique les beaux sentiments dont ils font si volontiers parade.",
    auteur: "Léon Tolstoï",
    categorie: [],
  },
  {
    texte: "Pourquoi ressembleriez-vous à un autre qu'à vous-même? Restez donc ce que vous êtes.",
    auteur: "Léon Tolstoï",
    categorie: ["liberte"],
  },
  {
    texte: "Il ne faut écrire qu'au moment où à chaque fois que tu trempes ta plume dans l'encre un morceau de ta chair reste dans l'encrier.",
    auteur: "Léon Tolstoï",
    categorie: ["sensibilite"],
  },
  {
    texte: "La beauté ne fait pas l'amour, c'est l'amour qui fait la beauté.",
    auteur: "Léon Tolstoï",
    categorie: ["sensibilite"],
  },
  {
    texte: "En aimant, on est toujours heureux parce que notre bonheur est en nous-mêmes.",
    auteur: "Léon Tolstoï",
    categorie: ["bonheur"],
  },
  {
    texte: "Toute la variété, tout le charme, toute la beauté de la vie ne sont qu'un mélange de lumière et d'ombre.",
    auteur: "Léon Tolstoï",
    categorie: ["sensibilite"],
  },
  {
    texte: "Les grandes oeuvres d'art ne sont grandes que parce qu'elles sont accessibles et compréhensibles à tous.",
    auteur: "Léon Tolstoï",
    categorie: ["sensibilite"],
  },
  {
    texte: "Les deux guerriers les plus puissants sont la patience et le temps.",
    auteur: "Léon Tolstoï",
    categorie: ["courage", "sagesse"],
  },
  {
    texte: "N'oublie pas que les grandes réalisations prennent du temps et qu'il n'y a pas de succès du jour au lendemain.",
    auteur: "Léon Tolstoï",
    categorie: ["courage", "sagesse"],
  },
  {
    texte: "Partout où il y'aura le pouvoir des uns sur les autres, il n'y aura pas de liberté mais l'oppression des uns sur les autres. C'est pourquoi le pouvoir doit être détruit.",
    auteur: "Léon Tolstoï",
    categorie: ["liberte"],
  },
  {
    texte: "J'ai appris que le courage n'est pas l'absence de peur, mais la capacité de la vaincre.",
    auteur: "Nelson Mandela",
    categorie: ["courage"],
  },
  {
    texte: "Un gagnant est juste un rêveur qui n'a jamais cédé.",
    auteur: "Nelson Mandela",
    categorie: ["reve"],
  },
  {
    texte: "Cela semble toujours impossible jusqu'à ce qu'on le fasse.",
    auteur: "Nelson Mandela",
    categorie: ["courage"],
  },
  {
    texte: "L'éducation est l'arme la plus puissante pour changer le monde.",
    auteur: "Nelson Mandela",
    categorie: ["sagesse"],
  },
  {
    texte: "Une tête bien faite et un bon coeur forment toujours une formidable combinaison.",
    auteur: "Nelson Mandela",
    categorie: [],
  },
  {
    texte: "Prenez sur vous, où que vous viviez, de donner de la joie et de l'espoir autour de vous.",
    auteur: "Nelson Mandela",
    categorie: ["bonheur"],
  },
  {
    texte: "La bonté de l'homme est une flamme qu'on peut cacher mais qu'on ne peut jamais éteindre.",
    auteur: "Nelson Mandela",
    categorie: ["sagesse"],
  },
  {
    texte: "Aucun de nous, en agissant seul, ne peut atteindre le succès.",
    auteur: "Nelson Mandela",
    categorie: ["sagesse"],
  },
  {
    texte: "Vous obtiendrez plus dans ce monde avec le pardon qu'avec des actes de représailles.",
    auteur: "Nelson Mandela",
    categorie: ["sagesse"],
  },
  {
    texte: "Je ne suis pas vraiment libre si je prive quelqu'un d'autre de sa liberté. L'opprimé et l'oppresseur sont tous deux dépossédés de leur humanité.",
    auteur: "Nelson Mandela",
    categorie: ["liberte", "morale"],
  },
  {
    texte: "Que vos choix reflétent vos espoirs et non vos peurs.",
    auteur: "Nelson Mandela",
    categorie: ["courage"],
  },
  {
    texte: "Nous devons utiliser le temps à bon escient et nous rendre compte qu'il est toujours temps de faire le bien.",
    auteur: "Nelson Mandela",
    categorie: ["morale"],
  },
  {
    texte: "Que règne la liberté. Car jamais le soleil ne s'est couché sur réalisation humaine plus glorieuse.",
    auteur: "Nelson Mandela",
    categorie: ["liberte"],
  },
  {
    texte: "Etre libre, ce n'est pas seulement se débarasser de ses chaînes; c'est vivre d'une façon qui respecte et renforce la liberté des autres.",
    auteur: "Nelson Mandela",
    categorie: ["liberte"],
  },
  {
    texte: "Tout homme ou toute institution qui essaiera de me voler ma dignité perdra.",
    auteur: "Nelson Mandela",
    categorie: ["liberte", "morale"],
  },
  {
    texte: "L'honneur appartient à ceux qui jamais ne s'éloignent de la vérité, même dans l'obscurité et la difficulté.",
    auteur: "Nelson Mandela",
    categorie: [],
  },
  {
    texte: "En faisant scintiller notre lumière, nous offrons aux autres la possibilité d'en faire autant.",
    auteur: "Nelson Mandela",
    categorie: [],
  },
  {
    texte: "Jamais cette terre qui est si belle ne devrait connaître l'oppression d'un homme par un autre.",
    auteur: "Nelson Mandela",
    categorie: ["liberte", "morale"],
  },
  {
    texte: "Refuser leurs droits aux hommes rivient à contester l'essence de leur humanité.",
    auteur: "Nelson Mandela",
    categorie: ["morale"],
  },
  {
    texte: "Ce qui compte dans la vie, ce n'est pas seulement d'avoir vécu. C'est la différence faîte dans la vie des autres qui définit le sens de la vie que nous avons menée.",
    auteur: "Nelson Mandela",
    categorie: ["morale"],
  },
  {
    texte: "Je ne perds jamais. Soit je gagne, soit j'apprends.",
    auteur: "Nelson Mandela",
    categorie: ["sagesse"],
  },
  {
    texte: "Le pardon libère l'âme, élimine la peur. C'est pourquoi il est une arme si puissante.",
    auteur: "Nelson Mandela",
    categorie: ["sagesse", "morale"],
  },
  {
    texte: "Il faut méditer sur ce qui procure le bonheur, puisque quand on l'a, on a tout,  et lorsqu'il manque, nous faisons tout pour l'avoir.",
    auteur: "Epicure",
    categorie: ["bonheur"],
  },
  {
    texte: "Quand on se suffit à sou-même, on arrive à posséder ce bien inestimable qu'est la liberté.",
    auteur: "Epicure",
    categorie: ["liberte"],
  },
  {
    texte: "Etre heureux, c'est savoir se contenter de peu.",
    auteur: "Epicure",
    categorie: ["bonheur"],
  },
  {
    texte: "Ce n'est pas tant l'intervention de nos amis qui nous aide mais le fait de savoir que nous pourrons toujours compter sur eux.",
    auteur: "Epicure",
    categorie: [],
  },
  {
    texte: "Dépêchons-nous de succomber à la tentation avant qu'elle s'éloigne.",
    auteur: "Epicure",
    categorie: [],
  },
  {
    texte: "L'âme vile est enflée d'orgueil dans la prospérité et abattue dans l'adversité.",
    auteur: "Epicure",
    categorie: ["morale"],
  },
  {
    texte: "Ne gâchez pas ce que vous avez en désirant ce que vous n'avez pas.",
    auteur: "Epicure",
    categorie: ["sagesse"],
  },
  {
    texte: "Jamais il n'est trop tôt ou trop tard pour travailler à la santé de l'âme.",
    auteur: "Epicure",
    categorie: [],
  },
  {
    texte: "Rien ne peut suffire à celui qui considère comme étant peu de chose ce qui est suffisant.",
    auteur: "Epicure",
    categorie: ["bonheur"],
  },
  {
    texte: "La vraie sagesse, la vraie supériorité ne se gagne pas en luttant mais en laissant les choses se faire d'elles-mêmes. Les plantes qui résistant au vent se cassent, alors que les plantes souples survivent aux ouragans.",
    auteur: "Epicure",
    categorie: ["sagesse"],
  },
  {
    texte: "C'est parfois la peur de la mort qui pousse les hommes à la mort.",
    auteur: "Epicure",
    categorie: ["morale"],
  },
  {
    texte: "Savoir s'étonner à propos est le premier mouvement de l'esprit vers la découverte.",
    auteur: "Epicure",
    categorie: ["sagesse"],
  },
  {
    texte: "Il est sot de demander aux dieux ce que l'on peut se procurer par soi-même.",
    auteur: "Epicure",
    categorie: ["sagesse"],
  },
  {
    texte: "La chute n'est pas un échec. L'échec, c'est de rester là où on est tombé.",
    auteur: "Socrate",
    categorie: ["courage"],
  },
  {
    texte: "La plus grande manière de vivre avec honneur dans ce monde consiste à être en réalité ce que nous prétendons être.",
    auteur: "Socrate",
    categorie: ["morale"],
  },
  {
    texte: "N'oublie jamais que tout est éphémère, alors tu ne seras jamais trop joyeux dans le bonheur, ni trop triste dans le chagrin.",
    auteur: "Socrate",
    categorie: ["bonheur", "sagesse"],
  },
  {
    texte: "Vous pouvez cacher aux autres une action répréhensible, mais jamais à vous-même.",
    auteur: "Socrate",
    categorie: ["morale"],
  },
  {
    texte: "Les plus hauts royaumes de la pensée sont impossibles à atteindre sans d'abord arriver à un certain niveau de compassion.",
    auteur: "Socrate",
    categorie: ["morale"],
  },
  {
    texte: "Soyez ouvert, amical et positif avec toutes les personnes que vous rencontrez; tout le monde mène un combat long et difficile.",
    auteur: "Socrate",
    categorie: ["sagesse"],
  },
  {
    texte: "Existe t'il pour l'homme un bien plus précieux que la santé ?",
    auteur: "Socrate",
    categorie: [],
  },
  {
    texte: "Le secret du bonheur ne se trouve pas dans la recherche du plus, mais en développant la capacité de jouir de moins.",
    auteur: "Socrate",
    categorie: ["bonheur"],
  },
  {
    texte: "L'esprit est la source de tout pouvoir; vous devenez ce que vous pensez.",
    auteur: "Socrate",
    categorie: ["reve"],
  },
  {
    texte: "L'éducation est l'allumage d'une flamme, et non pas le remplissage d'un navire.",
    auteur: "Socrate",
    categorie: [],
  },
  {
    texte: "Beaucoup de réflexion et non beaucoup de connaissances, voilà à quoi il faut tendre.",
    auteur: "Socrate",
    categorie: ["sagesse"],
  },
  {
    texte: "La sagesse commence dans l'émerveillement.",
    auteur: "Socrate",
    categorie: ["sagesse"],
  },
  {
    texte: "Le premier savoir est le savoir de mon ignorance; c'est le début de l'intelligence.",
    auteur: "Socrate",
    categorie: ["sagesse"],
  },
  {
    texte: "Les bienfaits que nous avons reçus de nos parents sont les plus grands de tous.",
    auteur: "Socrate",
    categorie: ["bonheur"],
  },
  {
    texte: "L'amour seul connaît le secret de s'enrichir en donnant.",
    auteur: "Socrate",
    categorie: ["sensibilite"],
  },
  {
    texte: "Le secret du changement, c'est de concentrer toute votre énergie non pas à lutter contre le passé, mais à construire l'avenir.",
    auteur: "Socrate",
    categorie: ["courage"],
  },
  {
    texte: "Beaucoup pensent à vivre longtemps, peu à bien vivre.",
    auteur: "Socrate",
    categorie: ["bonheur"],
  },
  {
    texte: "Un trésor de belles maximes est préférable à un amas de richesses.",
    auteur: "Socrate",
    categorie: [],
  },
  {
    texte: "Ecoutez simplement votre coeur, votre intuition. Dans le voyage de la vie, ils sont vos seuls guides.",
    auteur: "Osho",
    categorie: ["bonheur"],
  },
  {
    texte: "Je ne connais pas de plus grande valeur que celle qui consiste à regarder à l'intérieur de notre être.",
    auteur: "Osho",
    categorie: ["sensibilite"],
  },
  {
    texte: "L'amour est comme un oiseau libre d'aller partout, le ciel tout entier est sa liberté.",
    auteur: "Osho",
    categorie: ["liberte", "sensibilite"],
  },
  {
    texte: "Si tu aimes une fleur, ne la cueille pas. Si tu l'aimes, laisse-la vivre. L'amour n'est pas la possession. L'amour, c'est apprécier ce qui est.",
    auteur: "Osho",
    categorie: ["sensibilite"],
  },
  {
    texte: "La vie en elle-même est une toile vide. Elle devient ce que vous peignez dessus. Vous pouvez peindre la misère ou vous pouvez peindre la joie. Cette liberté est votre splendeur.",
    auteur: "Osho",
    categorie: ["liberte"],
  },
  {
    texte: "Vous ne pouvez être que ce que vous êtes. Détentez-vous! L'existence a besoin de vous tel que vous êtes.",
    auteur: "Osho",
    categorie: ["liberte"],
  },
  {
    texte: "Si vous devenez une lumière, ce n'est pas seulement votre vie à vous qui sera illuminée, mais aussi tous ceux qui vous entourent. Beaucoup pourront, grâce à vous, faire le voyage et atteindre leur but.",
    auteur: "Osho",
    categorie: ["sagesse"],
  },
  {
    texte: "Que chaque événement de votre vie vous apprenne quelque chose.",
    auteur: "Osho",
    categorie: ["sagesse"],
  },
  {
    texte: "L'oeil plein de préjugés est aveugle, le coeur plein de conclusions est mort.",
    auteur: "Osho",
    categorie: ["sagesse"],
  },
  {
    texte: "La vie ne vous suit pas, vous devez suivre la vie.",
    auteur: "Osho",
    categorie: ["sagesse"],
  },
  {
    texte: "La vie est ainsi. Vous ne pouvez pas vous y préparer, vous ne pouvez pas être prêt. C'est cela sa beauté, elle vous surprend toujours.",
    auteur: "Osho",
    categorie: ["courage"],
  },
  {
    texte: "La vie commence là où finit la peur.",
    auteur: "Osho",
    categorie: ["courage", "liberte"],
  },
  {
    texte: "La vie est une aventure, une exploration permanente à travers les épreuves et les erreurs. C'est sa véritable joie, son vrai nectar !",
    auteur: "Osho",
    categorie: ["sagesse"],
  },
  {
    texte: "Vous devez vivre chaque instant comme si c'était le dernier.",
    auteur: "Osho",
    categorie: [],
  },
  {
    texte: "La vraie question n'est pas de savoir si la vie existe après la mort mais de savoir si vous êtes en vie avant la mort.",
    auteur: "Osho",
    categorie: ["bonheur", "sagesse", "morale"],
  },
  {
    texte: "Personne ne peut donner un sens à votre vie, c'est votre vie, le sens doit vous appartenir.",
    auteur: "Osho",
    categorie: [],
  },
  {
    texte: "La plus grande peur dans le monde est celle du jugement des autres. A partir du moment où vous n'avez plus peur de ce jugement, alors vous n'êtes plus un mouton, vous devenez un lion. Un grand rugissement émane de votre coeur. Le rugissement de la liberté",
    auteur: "Osho",
    categorie: ["courage", "liberté"],
  },
  //auteur a éventuellement classer
  {
    texte: "Il n'y a personne qui soit né sous une mauvaise étoile, Il n'y a que des gens qui ne savent pas lire le ciel.",
    auteur: "Dalaï-lama",
    categorie: ["courage"],
  },
  {
    texte: "L'important c'est d'avoir des rêves assez grands pour ne pas les perdre de vue lorsqu'on les poursuit.",
    auteur: "Oscar Wilde",
    categorie: ["reve"],
  },
  {
    texte: "Il ne faut pas attendre d'être parfait pour commencer quelque chose de bien.",
    auteur: "Abbé Pierre",
    categorie: ["morale"],
  },
  {
    texte: "Mille victoires sur milles ennemis ne valent pas une seule victoire sur soi-même.",
    auteur: "Bouddha",
    categorie: ["courage", "morale"],
  },
  {
    texte: "La vie peut-être merveilleuse si on n'en a pas peur.",
    auteur: "Charlie Chaplin",
    categorie: ["courage"],
  },
  {
    texte: "Créé un chemin pour la venue des jours positifs.",
    auteur: "Bob Marley",
    categorie: ["courage"],
  },
  {
    texte: "Nous savons ce que nous sommes, mais nous ignorons ce que nous pourrions être.",
    auteur: "William Shakespeare",
    categorie: ["courage", "reve"],
  },
  {
    texte: "Il ne faut appeller richesses les choses que l'on peut perdre.",
    auteur: "Léonard de Vinci",
    categorie: ["sagesse"],
  },
  {
    texte: "Celui qui n'a pas le courage de se reveller n'a pas le droit de se lamenter.",
    auteur: "Che Guevara",
    categorie: ["courage", "liberte"],
  },
  {
    texte: "Suivez votre coeur et votre intuition, l'un et l'autre savent ce que vous voulez devenir.",
    auteur: "Steve Jobs",
    categorie: ["courage"],
  },
  {
    texte: "Il y'a toujours puisque je le dis, puisque je l'affirme, au bout du chagrin, une fenêtre ouverte.",
    auteur: "Mère Teresa",
    categorie: ["courage"],
  },
  {
    texte: "Le succès c'est d'aller d'échec en échec sans perdre son enthousiasme.",
    auteur: "Winston Churchill",
    categorie: ["courage"],
  },
  {
    texte: "Il n'existe pas d'occasion unique, le vie offre toujours une seconde chance.",
    auteur: "Paulo Coelho",
    categorie: ["courage"],
  },
  {
    texte: "Si vous pouvez le rêver, vous pouvez le faire.",
    auteur: "Walt Disney",
    categorie: ["courage", "reve"],
  },
  {
    texte: "Tu ne traverseras jamais l'océan si tu as peur de perdre de vue le rivage.",
    auteur: "Christophe Colomb",
    categorie: ["courage"],
  },
  {
    texte: "L'imperfection est beauté, la folie est génie et il vaut mieux être totalement ridicule que totalement ennuyeux.",
    auteur: "Marilyn Monroe",
    categorie: [],
  },
  {
    texte: "Dans la vie, rien n'est à craindre tout est à comprendre.",
    auteur: "Marie Curie",
    categorie: ["sagesse"],
  },
  {
    texte: "La vrai générosité envers l'avenir consiste à tout donner au présent.",
    auteur: "Albert Camus",
    categorie: ["courage"],
  },
  {
    texte: "Ils ne savaient pas que c'était impossible, alors ils l'ont fait.",
    auteur: "Mark Twain",
    categorie: ["courage", "reve"],
  },
  {
    texte: "Rien n'est jamais fini, il suffit d'un peu de bonheur pour que tout recommence.",
    auteur: "Emile Zola",
    categorie: ["courage"],
  },
  {
    texte: "Si nous vivons, nous vivons pour marcher sur la tête des puissants... Car les puissants ne travaillent qu'a marcher sur nos vies.",
    auteur: "William Shakespeare",
    categorie: ["liberte"],
  },
  {
    texte: "Surtout, soyez toujours capables de ressentir au plus profond de votre coeur n'importe qu'elle injustice commise contre n'importe qui, où que ce soit dans le monde. C'est la plus belle qualité d'une révolutionnaire.",
    auteur: "Che Guevara",
    categorie: ["liberte"],
  },
  {
    texte: "Les libertés ne se donnent pas, elles se prennent.",
    auteur: "Pierre Kropotkine",
    categorie: ["liberte"],
  },
  {
    texte: "Quiconque met la main sur moi pour me gouverner est un usurpateur et un tyran; je le déclare mon ennemi.",
    auteur: "Pierre-Joseph Proudhon",
    categorie: ["liberte"],
  },
  {
    texte: "Le fait de pouvoir élire librement des maîtres ne supprime ni les maîtres ni les esclaves.",
    auteur: "Herbert Marcuse",
    categorie: ["liberte"],
  },
  {
    texte: "L'Etat ne poursuit jamais qu'un but: limiter, enchaîner, assujettir, subordonner l'individu.",
    auteur: "Max Stirner",
    categorie: ["liberte"],
  },
  {
    texte: "Les prolétaires n'ont rien à perdre que leurs chaînes. Ils ont le monde à gagner. Prolétaires de tous les pays, unissez-vous !",
    auteur: "Karl Marx",
    categorie: ["liberte"],
  },
  {
    texte: "La révolution sera la floraison de l'humanité comme l'amour est la floraison du coeur.",
    auteur: "Louise Michel",
    categorie: ["liberte"],
  },
  {
    texte: "Toutes les lois sont oppressives et criminelles. Elles ne protègent que les riches et les heureux.",
    auteur: "Octave Mirbeau",
    categorie: ["liberte"],
  },
  {
    texte: "N'est-il pas évident que tous les gouvernements sont les empoisonneurs, les abêtisseurs intéressés des masses populaires ?",
    auteur: "Mikhail Bakounine",
    categorie: ["liberte"],
  },
  {
    texte: "Disparaissez enfin, révoltantes distinctions de riches et de pauvres, de grands et de petits, de gouvernants et de gouvernés.",
    auteur: "Sylvain Maréchal",
    categorie: ["liberte"],
  },
  {
    texte: "Ils ne sont grands que parce que nous sommes à genoux.",
    auteur: "Etienne de la Boétie",
    categorie: ["liberte"],
  },
  {
    texte: "Il n'y a que ceux qui ne bougent pas qui ne remarquent pas leurs chaînes.",
    auteur: "Rosa Luxemburg",
    categorie: ["liberte"],
  },
  {
    texte: "Le temps viendra où notre silence sera plus puissant que les voix que vous étranglez aujourd'hui.",
    auteur: "August Spies",
    categorie: ["liberte"],
  },
  {
    texte: "C'est parce qu'on imagine simultanément tous les pas qu'on devra faire qu'on se décourage, alors qu'il s'agit de les aligner un à un.",
    auteur: "Marcel Jouhandeau",
    categorie: ["courage", "reve"],
  },
  {
    texte: "Quoi que vous rêviez d'entreprendre, commencez-le. L'audace a du génie, du pouvoir et de la magie.",
    auteur: "Johann Wolfgang von Goethe",
    categorie: ["courage", "reve"],
  },
  {
    texte: "Il faut prendre des risques. Nous ne comprenons vraiment le miracle de la vie que lorsque nous laissons arriver l'inattendu.",
    auteur: "Paulo Coelho",
    categorie: ["courage", "reve"],
  },
  {
    texte: "Personne n'est trop vieux pour se fixer un nouvel objectif ou faire de nouveaux rêves.",
    auteur: "Les Brown",
    categorie: ["courage", "reve"],
  },
  {
    texte: "Ne te laisse pas décourager par la vie; tous ceux qui se sont rendus où ils sont, ont dû partir d'où ils étaient.",
    auteur: "AL Evans",
    categorie: ["courage", "reve"],
  },
  {
    texte: "L'espoir est comme le ciel des nuits: il n'est pas coin si sombre où l'oeil qui s'obstine ne finisse par découvrir une étoile.",
    auteur: "Octave Feuillet",
    categorie: ["courage", "reve"],
  },
  {
    texte: "Avec coeur et courage faites de votre vie un poème, une peinture, une oeuvre. Votre oeuvre.",
    auteur: "inconnu",
    categorie: ["courage", "reve"],
  },
  {
    texte: "Tes rêves te demandent de risquer, de délaisser le confort, d'exister dans le monde, d'être différent, et de croire en toi.",
    auteur: "inconnu",
    categorie: ["courage", "reve"],
  },
  {
    texte: "Quoi qu'il arrive, continuez à avancer. Abandonner ses rêves, ses espoirs, ses envies, c'est mourir à petit feu.",
    auteur: "inconnu",
    categorie: ["courage", "reve"],
  },
  {
    texte: "Il y'aura des obstacles, il y'aura des doutes, il y'aura des erreurs, mais si tu travailles fort, il n'y aura aucune limites.",
    auteur: "inconnu",
    categorie: ["courage", "reve"],
  },
  {
    texte: "Si nous doutions de nos peurs au lieu de douter de nos rêves, imaginez tout ce qu'on pourrait accomplir.",
    auteur: "Joel Brown",
    categorie: ["courage", "reve"],
  },
  {
    texte: "Tu ne te noies pas en tombant dans l'eau; tu te noies en y restant.",
    auteur: "inconnu",
    categorie: ["courage", "reve"],
  },
  {
    texte: "Il n'y a pas de traversée du désert, il n'y a qu'une marche vers l'oasis.",
    auteur: "Jean Bies",
    categorie: ["courage", "reve"],
  },
  {
    texte: "La vie nous donne toujours une seconde chance qui s'appelle demain.",
    auteur: "Paul Fort",
    categorie: ["courage", "reve"],
  },
  {
    texte: "Notre plus grande gloire n'est pas de ne jamais tomber, mais de nous relever à chaque fois que nous tombons.",
    auteur: "Oliver Goldsmith",
    categorie: ["courage", "reve"],
  },
  {
    texte: "Crois que tu y arriveras et tu seras à mi-chemin.",
    auteur: "Théodore Roosevelt",
    categorie: ["courage", "reve"],
  },
  {
    texte: "Les obstacles ne doivent pas t'arrêter. Si tu rencontres un mur, ne te retourne pas et n'abandonne pas. Tu dois comprendre comment escalader, traverser ou contourner le problème.",
    auteur: "Michael Jordan",
    categorie: ["courage", "reve"],
  },
  {
    texte: "Les batailles de la vie ne sont pas gagnées par les plus forts, ni par les plus rapides, mais par ceux qui n'abandonnent jamais.",
    auteur: "inconnu",
    categorie: ["courage", "reve"],
  },
  {
    texte: "C'est en croyant aux roses qu'on les fait éclore.",
    auteur: "Anatole France",
    categorie: ["courage", "reve"],
  },
  {
    texte: "Il ne s'agit pas d'être parfait. Il s'agit de faire des efforts. Si tu persévères chaque jour, c'est ainsi que se produira un changement.",
    auteur: "inconnu",
    categorie: ["courage", "reve"],
  },
  {
    texte: "Tout ira pour le mieux à la fin. Si ce n'est pas mieux, c'est que ce n'est pas la fin.",
    auteur: "Ed Sheeran",
    categorie: ["courage", "reve"],
  },
  {
    texte: "La seule révolution possible, c'est d'essayer de s'améliorer soi-même, en espérant que les autres fassent la même démarche. Le monde ira mieux alors.",
    auteur: "Georges Brassens",
    categorie: ["courage", "liberte", "reve"],
  },
  {
    texte: "Plutôt que de penser à ce que tu n'a pas, pense à ce que tu peux faire avec ce que tu as.",
    auteur: "Ernest Hemingway",
    categorie: ["bonheur"],
  },
  {
    texte: "Ne mépriser la sensibilit de personne. La sensibilité de chacun, c'est son génie.",
    auteur: "Charles Beaudelaire",
    categorie: ["sensibilite"],
  },
  {
    texte: "La sensibilité n'est pas la fragilité. C'est l'incapacité de rester superficiel. C'est aller toujours au fond. Dans les choses, dans les personnes, dans les émotions.",
    auteur: "Serena Santorelli",
    categorie: ["sensibilite"],
  },
  {
    texte: "La source de toutes les passions est la sensibilité.",
    auteur: "inconnu",
    categorie: ["sensibilite"],
  },
  {
    texte: "La liberté est le plus grand de tous les biens.",
    auteur: "Pierre Larousse",
    categorie: ["liberte"],
  },
  {
    texte: "L'homme libre est celui qui n'a pas peur d'aller jusqu'au bout de sa pensée.",
    auteur: "Léon Blum",
    categorie: ["liberte"],
  },
  {
    texte: "Vive la liberté! A bas l'intolérance!",
    auteur: "Jules Renard",
    categorie: ["liberte"],
  },
  {
    texte: "Et par le pouvoir d'un mot. Je recommence ma vie. Je suis né pour te connaître. Pour te nommer. Liberté.",
    auteur: "Paul Eluard",
    categorie: ["liberte"],
  },
  {
    texte: "Le secret du bonheur est la liberté. Le secret de la liberté est le courage",
    auteur: "Périclès",
    categorie: ["bonheur", "liberte"],
  },
  {
    texte: "La liberté est un bagne aussi longtemps qu'un seul homme est asservi sur la terre.",
    auteur: "Albert Camus",
    categorie: ["liberte", "morale"],
  },
  {
    texte: "Renoncer à sa liberté c'est renoncer à sa qualité d'homme, aux droits de l'humanité, même à ses devoirs.",
    auteur: "Jean-Jacques Rousseau",
    categorie: ["liberte"],
  },
  {
    texte: "C'est la liberté: bien si grand que dès qu'elle est perdue tous les maux s'ensuivent, et que, sans elle, tous les autres biens, corrompus par la servitude, perdent entièrement leur goût et leur saveur.",
    auteur: "Etienne de la Boétie",
    categorie: ["liberte"],
  },
  {
    texte: "Se vouloir libre, c'est aussi vouloir les autres libres.",
    auteur: "Simone de Beauvoir",
    categorie: ["liberte"],
  },
  {
    texte: "Ignore ceux qui parlent dans ton dos. Car c'est là qu'est leur place. Derrière toi pendant que toi tu continues d'avancer.",
    auteur: "inconnu",
    categorie: ["courage"],
  },
  {
    texte: "Si tu veux connaître le coeur d'une personne, observe comment elle se comporte avec les gens qui ne peuvent rien lui apporter.",
    auteur: "sagesse hindoue",
    categorie: ["sensibilite"],
  },
  {
    texte: "La vie est ainsi faite: savoir s'adapter à des situations extrêmes pour pouvoir survivre!",
    auteur: "inconnu",
    categorie: [],
  },
  {
    texte: "Dans chaque épreuve, ne cherchez pas l'ennemi, cherchez l'enseignement.",
    auteur: "Mikao Usui",
    categorie: ["courage", "sagesse"],
  },
  {
    texte: "Je ne connais pas la clé du succès, mais la clé d'un échec est d'essayer de plaire à tout le monde.",
    auteur: "Bill Cosby",
    categorie: ["sagesse"],
  },
  {
    texte: "Je souhaite à tous ceux que j'aime un petit grain de folie: cela rend le coeur gai.",
    auteur: "Anatole France",
    categorie: ["bonheur"],
  },
  {
    texte: "Il n'est pas de plus grande folie que de ne pas en avoir.",
    auteur: "Emile Zola",
    categorie: [],
  },
  {
    texte: "Le fou se croit sage et le sage se reconnaît fou.",
    auteur: "William Shakespeare",
    categorie: ["sagesse"],
  },
];
