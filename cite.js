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
    texte: "Les médias sont l’entité la plus puissante sur terre. Ils ont le pouvoir de faire les innocents coupables et rendre coupable l’innocent, et ça c’est pouvoir. Parce qu’ils contrôlent l’esprit des masses.",
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
    texte: "Croyez en vous rêves et ils se réaliseront peut-être. Croyez en vous et ils se réaliseront sûrement.",
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
    categorie: ["courage"],
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
];
