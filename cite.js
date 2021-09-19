"use strict";

/*Fichier utilitaire servant à y écrire les citations et les informations pouvant être utiles pour d'autres fichiers.
Ce fichier ne contient qu'un grand tableau.
*/

const citations = [
  {
    texte: "Si vous voulez vivre une vie heureuse, attachez-la à un but, et non pas à des personnes ou à des choses.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "En plein coeur de toute difficulté se cache une possibilité.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "La seule chose qui fait que la vie mérite d'être vécue, c'est de vivre pour les autres.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "bonheur", "morale", "sagesse"],
  },
  {
    texte: "Ce qui faît la vrai valeur d'un être humain, c'est de s'être délivré de son petit moi.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Je dois être prêt à renoncer à ce que je suis pour devenir ce que je serai.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "N'essayez pas de devenir un homme qui a du succès, essayez de devenir un homme qui a de la valeur.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Rare est le nombre de ceux qui regardent avec leurs propres yeux et qui éprouvent avec leur propre sensibilité.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Tout ce que est vraiment grand et inspiré a été réalisé par des individus travaillant librement.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Deux choses sont infinies: l'univers et la bêtise humaine. Mais en ce qui concerne l'univers, je n'ai pas de certitude absolue.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Il est plus facile de désintégrer un atome qu'un préjugé.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La logique vous mènera d'un point A à un point B. L'imagination vous emmènera partout.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "reve"],
  },
  {
    texte: "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Le mot progrès n'aura aucun sens tant qu'il y'aura des enfants malheureux.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "bonheur", "morale"],
  },
  {
    texte: "Le problème aujourd'hui n'est pas l'énergie atomique, mais le coeur des hommes.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Tout le monde est un génie. Mais si on juge un poisson sur sa capacité à grimper à un arbre, il passera sa vie à croire qu'il est stupide.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Une personne qui n'a jamais commis d'erreurs n'a jamais tenté d'innover.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "Le monde ne sera pas détruit par ceux qui font le mal, mais par ceux qui les regardent sans rien faire.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Le sort de l'humanité en général sera celui qu'elle méritera.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "L'humanité se passionne pour des buts dérisoires. Ils s'appellent la richesse, la gloire, le luxe.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Ce qui compte ne peut pas toujours être compté. Ce qui peut être compté ne compte pas forcément.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "bonheur", "sagesse"],
  },
  {
    texte: "Si la vue d'un bureau encombré évoque un esprit encombré, alors que penser d'un bureau vide ?",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", ],
  },
  {
    texte: "Pour être un membre irréprochable d'une communauté de moutons, il faut avant tout être soi-même un mouton.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Inventer, c'est penser à côté.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "liberte", "reve"],
  },
  {
    texte: "Les grands esprits ont toujours dû affronter une opposition violente de la part des esprits médiocres.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "Ne fais jamais rien contre ta conscience, même si l'Etat te le demande.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "liberte", "morale"],
  },
  {
    texte: "La liberté consiste à se discipliner au lieu de se laisser discipliner.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "liberte", "sagesse"],
  },
  {
    texte: "C'est la personne humaine, libre, créatrice et sensible qui façonne le beau et le sublime, alors que les masses restent entraînées dans une ronde infernale d'imbécillité et d'abrutissement.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "liberte", "courage", "sensibilite"],
  },
  {
    texte: "La joie de regarder et de comprendre est le plus beau cadeau de la nature.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "bonheur", "sensibilite"],
  },
  {
    texte: "Il n'y a pas d'échec, il n'y a que des abandons.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "C'est le devoir de chaque homme de rendre au moins autant qu'il en a reçu.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", ],
  },
  {
    texte: "La folie, c'est de refaire la même chose et d'en attendre un résultat différent.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Un problème sans solution est un problème mal posé.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La valeur d'un homme tient dans sa capacité à donner et non dans sa capacité à recevoir.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Si une idée ne paraît pas d'abord absurde, alors il n'y aucun espoir qu'elle devienne quelque chose.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", ],
  },
  {
    texte: "Les personnes faibles se vengent. Les personnes fortes pardonnent. Les personnes intelligentes ignorent.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Si tu fais toujours ce que tu as l'habitude de faire, tu récolteras ce que tu as toujours récolté.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Il n'existe que deux façons de vivre votre vie. L'une comme si rien n'était un miracle. L'autre comme si tout était un miracle.",
    auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915.",
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Les médias sont les entités les plus puissantes sur terre. Ils ont le pouvoir de rendre les innocents coupables et faire des coupables des innocents, et c'est ça le pouvoir. Parce qu’ils contrôlent l’esprit des masses.",
    auteur: "Malcolm X(1925-1965) est un militant politique et un défenseur des droits de l'homme qui a été assassiné le 21 février 1965 à Harlem.",
    categorie: ["tous", "liberte", "morale"],
  },
  {
    texte: "Si vous n'êtes pas vigilants, les médias arriveront à vous faire détester les gens opprimés et aimer ceux qui les oppriment.",
    auteur: "Malcolm X(1925-1965) est un militant politique et un défenseur des droits de l'homme qui a été assassiné le 21 février 1965 à Harlem.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Si vous ne vous levez pas pour quelque chose. Vous tomberez pour n'importe quoi.",
    auteur: "Malcolm X(1925-1965) est un militant politique et un défenseur des droits de l'homme qui a été assassiné le 21 février 1965 à Harlem.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Si vous n'êtes pas prêt à mourir pour elle, sortez le mot \"liberté\" de votre vocabulaire.",
    auteur: "Malcolm X(1925-1965) est un militant politique et un défenseur des droits de l'homme qui a été assassiné le 21 février 1965 à Harlem.",
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "Quand vous commencez à penser par vous-mêmes, vous leur faites peur, et ils s'efforcent de vous interdire tout contact avec l'opinion publique, de peur que si l'opinion publique vous écoute, elle ne veuille plus les écouter.",
    auteur: "Malcolm X(1925-1965) est un militant politique et un défenseur des droits de l'homme qui a été assassiné le 21 février 1965 à Harlem.",
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "Il y'a souvent plus de choses naufragées au fond d'une âme qu'au fond de la mer.",
    auteur: "Victor Hugo(1802-1885) est un écrivain et un poète engagé idéologiquement et dans le débat politique. Il est considéré comme l'un des écrivains les plus importants de la langue française.",
    categorie: ["tous", "reve", "sensibilite"],
  },
  {
    texte: "Mieux vaut une conscience tranquille qu'une destinée prospère. J'aime mieux un bon sommeil qu'un bon lit.",
    auteur: "Victor Hugo(1802-1885) est un écrivain et un poète engagé idéologiquement et dans le débat politique. Il est considéré comme l'un des écrivains les plus importants de la langue française.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La haine, c'est l'hiver qui s'empare du coeur.",
    auteur: "Victor Hugo(1802-1885) est un écrivain et un poète engagé idéologiquement et dans le débat politique. Il est considéré comme l'un des écrivains les plus importants de la langue française.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Vous voulez la misère secourue. Moi je la veux supprimée.",
    auteur: "Victor Hugo(1802-1885) est un écrivain et un poète engagé idéologiquement et dans le débat politique. Il est considéré comme l'un des écrivains les plus importants de la langue française.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Quand je suis triste, je pense à vous, comme l'hiver on pense au soleil, et quand je suis gai, je pense à vous, comme en plein soleil on pense à l'ombre.",
    auteur: "Victor Hugo(1802-1885) est un écrivain et un poète engagé idéologiquement et dans le débat politique. Il est considéré comme l'un des écrivains les plus importants de la langue française.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Les larmes sont un don. Souvent les pleurs, après l'erreur ou l'abandon, raniment nos forces brisées.",
    auteur: "Victor Hugo(1802-1885) est un écrivain et un poète engagé idéologiquement et dans le débat politique. Il est considéré comme l'un des écrivains les plus importants de la langue française.",
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "Le plus grand ennui, c'est d'exister sans vivre.",
    auteur: "Victor Hugo(1802-1885) est un écrivain et un poète engagé idéologiquement et dans le débat politique. Il est considéré comme l'un des écrivains les plus importants de la langue française.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "J'ai dans l'âme une fleur que nul ne peut cueillir.",
    auteur: "Victor Hugo(1802-1885) est un écrivain et un poète engagé idéologiquement et dans le débat politique. Il est considéré comme l'un des écrivains les plus importants de la langue française.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Ceux qui vivent sont ceux qui luttent.",
    auteur: "Victor Hugo(1802-1885) est un écrivain et un poète engagé idéologiquement et dans le débat politique. Il est considéré comme l'un des écrivains les plus importants de la langue française.",
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "Mes amis, retenez ceci, il n'y a ni mauvaises herbes ni mauvais hommes. Il n'a que des mauvais cultivateurs.",
    auteur: "Victor Hugo(1802-1885) est un écrivain et un poète engagé idéologiquement et dans le débat politique. Il est considéré comme l'un des écrivains les plus importants de la langue française.",
    categorie: ["tous", ],
  },
  {
    texte: "Ouvrez des écoles, vous fermerez des prisons.",
    auteur: "Victor Hugo(1802-1885) est un écrivain et un poète engagé idéologiquement et dans le débat politique. Il est considéré comme l'un des écrivains les plus importants de la langue française.",
    categorie: ["tous", ],
  },
  {
    texte: "N'être pas écouté, ce n'est pas une raison pour se taire.",
    auteur: "Victor Hugo(1802-1885) est un écrivain et un poète engagé idéologiquement et dans le débat politique. Il est considéré comme l'un des écrivains les plus importants de la langue française.",
    categorie: ["tous", ],
  },
  {
    texte: "La liberté commence où l'ignorance finit.",
    auteur: "Victor Hugo(1802-1885) est un écrivain et un poète engagé idéologiquement et dans le débat politique. Il est considéré comme l'un des écrivains les plus importants de la langue française.",
    categorie: ["tous", "liberte", "sagesse"],
  },
  {
    texte: "La vérité est comme le soleil. Elle fait tout voir et ne se laisse pas regarder",
    auteur: "Victor Hugo(1802-1885) est un écrivain et un poète engagé idéologiquement et dans le débat politique. Il est considéré comme l'un des écrivains les plus importants de la langue française.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "N'imitez rien ni personne. Un lion qui copie un lion devient un singe",
    auteur: "Victor Hugo(1802-1885) est un écrivain et un poète engagé idéologiquement et dans le débat politique. Il est considéré comme l'un des écrivains les plus importants de la langue française.",
    categorie: ["tous", ],
  },
  {
    texte: "La pensée et plus qu'un droit, c'est le souffle même de l'homme.",
    auteur: "Victor Hugo(1802-1885) est un écrivain et un poète engagé idéologiquement et dans le débat politique. Il est considéré comme l'un des écrivains les plus importants de la langue française.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Quand une femme vous parle, écoutez ce qu'elle vous dit avec ses yeux.",
    auteur: "Victor Hugo(1802-1885) est un écrivain et un poète engagé idéologiquement et dans le débat politique. Il est considéré comme l'un des écrivains les plus importants de la langue française.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Il n'avait pas de gîte, pas de pain, pas de feu, pas d'amour; mais il est joyeux parce qu'il est libre.",
    auteur: "Victor Hugo(1802-1885) est un écrivain et un poète engagé idéologiquement et dans le débat politique. Il est considéré comme l'un des écrivains les plus importants de la langue française.",
    categorie: ["tous", "bonheur", "liberte"],
  },
  {
    texte: "Tu es blanche et je suis noir; mais le jour a besoin de s'unir à la nuit pour enfanter l'aurore et le couchant, qui sont plus beaux que lui !",
    auteur: "Victor Hugo(1802-1885) est un écrivain et un poète engagé idéologiquement et dans le débat politique. Il est considéré comme l'un des écrivains les plus importants de la langue française.",
    categorie: ["tous", "sagesse", "sensibilite"],
  },
  {
    texte: "Le sens révolutionnaire est un sens moral.",
    auteur: "Victor Hugo(1802-1885) est un écrivain et un poète engagé idéologiquement et dans le débat politique. Il est considéré comme l'un des écrivains les plus importants de la langue française.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Ce qui compte, chez un homme ce n'est pas la couleur de sa peau ou la texture de ses cheveux, mais la texte et la qualité de son âme.",
    auteur: "Martin Luther King(1929-1968) est un pasteur et un militant pour les droits civiques, la paix et la lutte contre la pauvreté. Il mena une lutte non-violente et fini assassiné officiellement par James Earl Ray.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "L'homme bon ne regarde pas les particularités physiques mais sait discerner ces qualités profondes qui rendent les gens humains, et donc frères.",
    auteur: "Martin Luther King(1929-1968) est un pasteur et un militant pour les droits civiques, la paix et la lutte contre la pauvreté. Il mena une lutte non-violente et fini assassiné officiellement par James Earl Ray.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Apprenons à vivre ensemble comme des frères ou nous mourrons tous ensemble comme des idiots.",
    auteur: "Martin Luther King(1929-1968) est un pasteur et un militant pour les droits civiques, la paix et la lutte contre la pauvreté. Il mena une lutte non-violente et fini assassiné officiellement par James Earl Ray.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Chaque fois que des hommes redressent l'échine, ils peuvent aller où ils veulent, car personne ne peut monter sur votre dos tant que vous vous tenez droit.",
    auteur: "Martin Luther King(1929-1968) est un pasteur et un militant pour les droits civiques, la paix et la lutte contre la pauvreté. Il mena une lutte non-violente et fini assassiné officiellement par James Earl Ray.",
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "Croyez en vos rêves et ils se réaliseront peut-être. Croyez en vous et ils se réaliseront sûrement.",
    auteur: "Martin Luther King(1929-1968) est un pasteur et un militant pour les droits civiques, la paix et la lutte contre la pauvreté. Il mena une lutte non-violente et fini assassiné officiellement par James Earl Ray.",
    categorie: ["tous", "bonheur", "courage", "reve"],
  },
  {
    texte: "L'obscurité ne peut pas chasser l'obscurité; seule la lumière le peut. La haine ne peut pas chasser la haine; seul l'amour le peut.",
    auteur: "Martin Luther King(1929-1968) est un pasteur et un militant pour les droits civiques, la paix et la lutte contre la pauvreté. Il mena une lutte non-violente et fini assassiné officiellement par James Earl Ray.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La non-violence est une arme puissante et juste, qui tranche sans blesser et ennoblit l'homme qui la manie.",
    auteur: "Martin Luther King(1929-1968) est un pasteur et un militant pour les droits civiques, la paix et la lutte contre la pauvreté. Il mena une lutte non-violente et fini assassiné officiellement par James Earl Ray.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "La question la plus persistante et la plus urgente de la vie est: \"que faites-vous pour les autres ?\"",
    auteur: "Martin Luther King(1929-1968) est un pasteur et un militant pour les droits civiques, la paix et la lutte contre la pauvreté. Il mena une lutte non-violente et fini assassiné officiellement par James Earl Ray.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Si tu ne peux pas voler, alors cours. Si tu ne peux pas courir, alors marche. Si tu ne peux pas marcher, alors rampe, mais quoi que tu fasses, tu dois continuer à avancer.",
    auteur: "Martin Luther King(1929-1968) est un pasteur et un militant pour les droits civiques, la paix et la lutte contre la pauvreté. Il mena une lutte non-violente et fini assassiné officiellement par James Earl Ray.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Vivez les rêves que la vie vous défie de rêver.",
    auteur: "Martin Luther King(1929-1968) est un pasteur et un militant pour les droits civiques, la paix et la lutte contre la pauvreté. Il mena une lutte non-violente et fini assassiné officiellement par James Earl Ray.",
    categorie: ["tous", "bonheur", "courage", "reve"],
  },
  {
    texte: "La véritable grandeur d'un homme ne se mesure pas à des moments où il est à son aise, mais lorqu'il traverse une pèriode de controverses et de défis.",
    auteur: "Martin Luther King(1929-1968) est un pasteur et un militant pour les droits civiques, la paix et la lutte contre la pauvreté. Il mena une lutte non-violente et fini assassiné officiellement par James Earl Ray.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Chacun à la responsabilité morale de désobéir aux lois injustes.",
    auteur: "Martin Luther King(1929-1968) est un pasteur et un militant pour les droits civiques, la paix et la lutte contre la pauvreté. Il mena une lutte non-violente et fini assassiné officiellement par James Earl Ray.",
    categorie: ["tous", "courage", "liberte", "morale"],
  },
  {
    texte: "Ce qui  m'effraie, ce n'est pas l'oppression des méchants; c'est l'indifférence des bons.",
    auteur: "Martin Luther King(1929-1968) est un pasteur et un militant pour les droits civiques, la paix et la lutte contre la pauvreté. Il mena une lutte non-violente et fini assassiné officiellement par James Earl Ray.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Nous avons appris à voler dans les airs comme des oiseaux, nous avons appris à nager dans les océans comme des poissons, mais nous n'avons pas appris sur la terre à marcher comme des frères et soeurs.",
    auteur: "Martin Luther King(1929-1968) est un pasteur et un militant pour les droits civiques, la paix et la lutte contre la pauvreté. Il mena une lutte non-violente et fini assassiné officiellement par James Earl Ray.",
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Ceux qui aiment la paix doivent apprendre à s'organiser aussi bien que ceux qui veulent la guerre.",
    auteur: "Martin Luther King(1929-1968) est un pasteur et un militant pour les droits civiques, la paix et la lutte contre la pauvreté. Il mena une lutte non-violente et fini assassiné officiellement par James Earl Ray.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La liberté n'est jamais volontairement donnée par l'oppresseur; elle doit être exigée par l'opprimé.",
    auteur: "Martin Luther King(1929-1968) est un pasteur et un militant pour les droits civiques, la paix et la lutte contre la pauvreté. Il mena une lutte non-violente et fini assassiné officiellement par James Earl Ray.",
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "Une injustice, où qu'elle se produise, est une menace pour la justice partout ailleurs.",
    auteur: "Martin Luther King(1929-1968) est un pasteur et un militant pour les droits civiques, la paix et la lutte contre la pauvreté. Il mena une lutte non-violente et fini assassiné officiellement par James Earl Ray.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "A la fin, nous nous souviendrons non pas des mots de nos ennemis, mais des silences de nos amis.",
    auteur: "Martin Luther King(1929-1968) est un pasteur et un militant pour les droits civiques, la paix et la lutte contre la pauvreté. Il mena une lutte non-violente et fini assassiné officiellement par James Earl Ray.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Celui qui accepte le mal sans lutter contre lui coopère avec lui.",
    auteur: "Martin Luther King(1929-1968) est un pasteur et un militant pour les droits civiques, la paix et la lutte contre la pauvreté. Il mena une lutte non-violente et fini assassiné officiellement par James Earl Ray.",
    categorie: ["tous", "courage", "morale"],
  },
  {
    texte: "Je fais le rêve qu'un jour mes enfants vivront dans une nation où ils ne seront pas jugés pour la couleur de leur peau, mais pour leur caractère.",
    auteur: "Martin Luther King(1929-1968) est un pasteur et un militant pour les droits civiques, la paix et la lutte contre la pauvreté. Il mena une lutte non-violente et fini assassiné officiellement par James Earl Ray.",
    categorie: ["tous", "morale", "reve"],
  },
  {
    texte: "Il faut accepter les déceptions passagères, mais conserver l'espoir pour l'éternité.",
    auteur: "Martin Luther King(1929-1968) est un pasteur et un militant pour les droits civiques, la paix et la lutte contre la pauvreté. Il mena une lutte non-violente et fini assassiné officiellement par James Earl Ray.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Vous pouvez avec certitude amèliorer un seul petit coin de l'univers: vous-même.",
    auteur: "Aldous Huxley(1894-1963) est un écrivain et philosophe ayant écrit une cinquantaine de romans dont le célébre \"Le Meilleur des mondes\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La révolution véritablement révolutionnaire se réalisera, non pas dans le monde extérieur, mais dans l'âme et la chair des êtres humains.",
    auteur: "Aldous Huxley(1894-1963) est un écrivain et philosophe ayant écrit une cinquantaine de romans dont le célébre \"Le Meilleur des mondes\".",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Comme si l'on croyait quoi que ce soit d'instinct ! On croit les choses parce qu'on a été conditionné à les croire.",
    auteur: "Aldous Huxley(1894-1963) est un écrivain et philosophe ayant écrit une cinquantaine de romans dont le célébre \"Le Meilleur des mondes\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La victime de la manipulation mentale ignore qu'elle est une victime. Les murs de sa prison lui sont invisibles et elle se croit libre.",
    auteur: "Aldous Huxley(1894-1963) est un écrivain et philosophe ayant écrit une cinquantaine de romans dont le célébre \"Le Meilleur des mondes\".",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "La philosophie nous enseigne à douter de ce qui nous paraît évident. La progagande, au contraire, nous enseigne à accepter pour évident ce dont il serait raisonnable de douter.",
    auteur: "Aldous Huxley(1894-1963) est un écrivain et philosophe ayant écrit une cinquantaine de romans dont le célébre \"Le Meilleur des mondes\".",
    categorie: ["tous", "liberte", "sagesse"],
  },
  {
    texte: "La plus grande partie de l'ignorance peut être vaincue. Nous ne savons pas, parce que nous ne voulons pas savoir.",
    auteur: "Aldous Huxley(1894-1963) est un écrivain et philosophe ayant écrit une cinquantaine de romans dont le célébre \"Le Meilleur des mondes\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La liberté ne s'accorde pas, elle s'arrache.",
    auteur: "Aldous Huxley(1894-1963) est un écrivain et philosophe ayant écrit une cinquantaine de romans dont le célébre \"Le Meilleur des mondes\".",
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "Si l'on est différent, il est fatal qu'on soit seul.",
    auteur: "Aldous Huxley(1894-1963) est un écrivain et philosophe ayant écrit une cinquantaine de romans dont le célébre \"Le Meilleur des mondes\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Ne remettez jamais à demain le plaisir que vous pouvez prendre aujourd'hui.",
    auteur: "Aldous Huxley(1894-1963) est un écrivain et philosophe ayant écrit une cinquantaine de romans dont le célébre \"Le Meilleur des mondes\".",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "On doit jouir de chaque moment, d'une manière passionnée, audacieuse, exaltante, unique.",
    auteur: "Aldous Huxley(1894-1963) est un écrivain et philosophe ayant écrit une cinquantaine de romans dont le célébre \"Le Meilleur des mondes\".",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Les conséquences de nos actions sont des épouvantails pour les lâches, et des rayons de lumière pour les sages.",
    auteur: "Aldous Huxley(1894-1963) est un écrivain et philosophe ayant écrit une cinquantaine de romans dont le célébre \"Le Meilleur des mondes\".",
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "L'expérience, ce n'est pas ce qui arrive à quelqu'un, c'est ce que quelqu'un fait avec ce qui lui arrive.",
    auteur: "Aldous Huxley(1894-1963) est un écrivain et philosophe ayant écrit une cinquantaine de romans dont le célébre \"Le Meilleur des mondes\".",
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Notre vie s'améliore seulement si nous prenons des risques et le plus grand de tous les risques est d'être honnête envers soi-même.",
    auteur: "Aldous Huxley(1894-1963) est un écrivain et philosophe ayant écrit une cinquantaine de romans dont le célébre \"Le Meilleur des mondes\".",
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "Les petites choses faites dans un esprit d'amour fervent sont infiniment plus précieuses que des choses beaucoup plus grandes faites avec moins d'amour.",
    auteur: "Aldous Huxley(1894-1963) est un écrivain et philosophe ayant écrit une cinquantaine de romans dont le célébre \"Le Meilleur des mondes\".",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Le secret du génie est d'insuffler l'esprit de l'enfance dans l'âge adulte ce qui signifie ne jamais perdre son enthousiasme.",
    auteur: "Aldous Huxley(1894-1963) est un écrivain et philosophe ayant écrit une cinquantaine de romans dont le célébre \"Le Meilleur des mondes\".",
    categorie: ["tous", ],
  },
  {
    texte: "Le courage et la confiance en soi sont les meilleures des vertus.",
    auteur: "Aldous Huxley(1894-1963) est un écrivain et philosophe ayant écrit une cinquantaine de romans dont le célébre \"Le Meilleur des mondes\".",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Tous les hommes désirent la paix, mais il y'en a peu qui désirent les choses qui conduisent à la paix.",
    auteur: "Aldous Huxley(1894-1963) est un écrivain et philosophe ayant écrit une cinquantaine de romans dont le célébre \"Le Meilleur des mondes\".",
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Le fait que les hommes tirent peu de profit des leçons de l'Histoire est la leçon la plus importante que l'Histoire nous enseigne.",
    auteur: "Aldous Huxley(1894-1963) est un écrivain et philosophe ayant écrit une cinquantaine de romans dont le célébre \"Le Meilleur des mondes\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'homme connaît tant d'autres choses; il ne se connaît pas lui-même.",
    auteur: "Aldous Huxley(1894-1963) est un écrivain et philosophe ayant écrit une cinquantaine de romans dont le célébre \"Le Meilleur des mondes\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'idéalisme est la noble toge dont les hommes politiques drapent leur volonté de puissance.",
    auteur: "Aldous Huxley(1894-1963) est un écrivain et philosophe ayant écrit une cinquantaine de romans dont le célébre \"Le Meilleur des mondes\".",
    categorie: ["tous", ],
  },
  {
    texte: "La dictature parfaite serait une dictature qui aurait les apparences de la démocratie, une prison sans murs dont les prisonniers ne songeraient pas à s'évader, un système d'esclavage oû, grâce à la consommation et au divertissement, les esclaves auraient l'amour de leur servitude.",
    auteur: "Aldous Huxley(1894-1963) est un écrivain et philosophe ayant écrit une cinquantaine de romans dont le célébre \"Le Meilleur des mondes\".",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "N'attends pas que les événements arrivent comme tu le souhaites. Décide de vouloir ce qui arrive... et tu seras heureux.",
    auteur: "Aristote(384-322 avant notre ère) est un philosophe grec et l'un des penseurs les plus influents que le monde ait connu.",
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "Le bonheur est à ceux qui se suffisent à eux-mêmes.",
    auteur: "Aristote(384-322 avant notre ère) est un philosophe grec et l'un des penseurs les plus influents que le monde ait connu.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Le commencement est beaucoup plus que la moitié de l'objectif.",
    auteur: "Aristote(384-322 avant notre ère) est un philosophe grec et l'un des penseurs les plus influents que le monde ait connu.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "L'amitié est une âme en deux corps.",
    auteur: "Aristote(384-322 avant notre ère) est un philosophe grec et l'un des penseurs les plus influents que le monde ait connu.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "L'espoir est un rêve éveillé.",
    auteur: "Aristote(384-322 avant notre ère) est un philosophe grec et l'un des penseurs les plus influents que le monde ait connu.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Le Bien ne suffit pas à être heureux, mais le mal suffit à rendre malheureux.",
    auteur: "Aristote(384-322 avant notre ère) est un philosophe grec et l'un des penseurs les plus influents que le monde ait connu.",
    categorie: ["tous", "bonheur", "morale"],
  },
  {
    texte: "La mélancolie est le partage de tous les hommes de génie.",
    auteur: "Aristote(384-322 avant notre ère) est un philosophe grec et l'un des penseurs les plus influents que le monde ait connu.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Nous sommes ce que nous faisons à plusieurs reprises. L'excellence n'est donc pas un acte, mais une habitude.",
    auteur: "Aristote(384-322 avant notre ère) est un philosophe grec et l'un des penseurs les plus influents que le monde ait connu.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Il n'y a qu'une seule façon d'éviter les critiques: Ne dis rien, ne fais rien, ne sois rien.",
    auteur: "Aristote(384-322 avant notre ère) est un philosophe grec et l'un des penseurs les plus influents que le monde ait connu.",
    categorie: ["tous", "bonheur", "courage", "sagesse"],
  },
  {
    texte: "C'est de par leur caractère que les hommes sont ce qu'ils sont, mais c'est de par leurs actions qu'ils sont heureux, ou le contraire.",
    auteur: "Aristote(384-322 avant notre ère) est un philosophe grec et l'un des penseurs les plus influents que le monde ait connu.",
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "Le courage est la première des qualités humaines car elle garantit toutes les autres.",
    auteur: "Aristote(384-322 avant notre ère) est un philosophe grec et l'un des penseurs les plus influents que le monde ait connu.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Le bonheur est en même temps ce qu'il y'a de meilleur, de plus beau et de plus agréable.",
    auteur: "Aristote(384-322 avant notre ère) est un philosophe grec et l'un des penseurs les plus influents que le monde ait connu.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "En toute chose, c'est la fin qui est essentiel.",
    auteur: "Aristote(384-322 avant notre ère) est un philosophe grec et l'un des penseurs les plus influents que le monde ait connu.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Rien dans notre intelligence qui soit passé par nos sens.",
    auteur: "Aristote(384-322 avant notre ère) est un philosophe grec et l'un des penseurs les plus influents que le monde ait connu.",
    categorie: ["tous", ],
  },
  {
    texte: "On ne devient homme qu'en se surpassant.",
    auteur: "Aristote(384-322 avant notre ère) est un philosophe grec et l'un des penseurs les plus influents que le monde ait connu.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Le bonheur d'une vie ne s'apprécie qu'au soir d'une vie.",
    auteur: "Aristote(384-322 avant notre ère) est un philosophe grec et l'un des penseurs les plus influents que le monde ait connu.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Se connaître est le début de toute sagesse.",
    auteur: "Aristote(384-322 avant notre ère) est un philosophe grec et l'un des penseurs les plus influents que le monde ait connu.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Eduquer l'esprit sans éduquez le coeur n'est pas éduquer du tout.",
    auteur: "Aristote(384-322 avant notre ère) est un philosophe grec et l'un des penseurs les plus influents que le monde ait connu.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Le courage est un juste milieu entre la peur et l'audace.",
    auteur: "Aristote(384-322 avant notre ère) est un philosophe grec et l'un des penseurs les plus influents que le monde ait connu.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Aimes-tu la vie ? Alors ne gaspille pas ton temps, car il est l'essence de la vie.",
    auteur: "Benjamin Franklin(1706-1790) est un écrivain et un homme politique Américain. Il a participé à la rédaction de la déclaration d'indépendance des Etats-Unis.",
    categorie: ["tous", "bonheur", "courage", "sagesse"],
  },
  {
    texte: "Il y'a bien des manières de ne pas réussir, mais la plus sûre est de ne jamais prendre de risques.",
    auteur: "Benjamin Franklin(1706-1790) est un écrivain et un homme politique Américain. Il a participé à la rédaction de la déclaration d'indépendance des Etats-Unis.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Cessons la guerre en nous.",
    auteur: "Benjamin Franklin(1706-1790) est un écrivain et un homme politique Américain. Il a participé à la rédaction de la déclaration d'indépendance des Etats-Unis.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Tel doit être l'avenir: pénétrant et simple.",
    auteur: "Benjamin Franklin(1706-1790) est un écrivain et un homme politique Américain. Il a participé à la rédaction de la déclaration d'indépendance des Etats-Unis.",
    categorie: ["tous", ],
  },
  {
    texte: "L'utopie est simplement ce qui n'a pas encore été essayé.",
    auteur: "Benjamin Franklin(1706-1790) est un écrivain et un homme politique Américain. Il a participé à la rédaction de la déclaration d'indépendance des Etats-Unis.",
    categorie: ["tous", "reve"],
  },
  {
    texte: "On n'est jamais trop âgé pour s'instruire.",
    auteur: "Benjamin Franklin(1706-1790) est un écrivain et un homme politique Américain. Il a participé à la rédaction de la déclaration d'indépendance des Etats-Unis.",
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Le bon sens, tout le monde en a besoin, peu l'ont, et chacun croit l'avoir.",
    auteur: "Benjamin Franklin(1706-1790) est un écrivain et un homme politique Américain. Il a participé à la rédaction de la déclaration d'indépendance des Etats-Unis.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Tu me dis, j'oublie. Tu m'enseignes, je me souviens. Tu m'impliques, j'apprends.",
    auteur: "Benjamin Franklin(1706-1790) est un écrivain et un homme politique Américain. Il a participé à la rédaction de la déclaration d'indépendance des Etats-Unis.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Ne cachez pas vos talents ils méritent d'être utilisés. A quoi sert un cadran solaire à l'ombre ?",
    auteur: "Benjamin Franklin(1706-1790) est un écrivain et un homme politique Américain. Il a participé à la rédaction de la déclaration d'indépendance des Etats-Unis.",
    categorie: ["tous", ],
  },
  {
    texte: "La bonté envers autrui est grande bonté envers soi-même.",
    auteur: "Benjamin Franklin(1706-1790) est un écrivain et un homme politique Américain. Il a participé à la rédaction de la déclaration d'indépendance des Etats-Unis.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "L'énergie et l'obstination viennent à bout de toutes les résistances.",
    auteur: "Benjamin Franklin(1706-1790) est un écrivain et un homme politique Américain. Il a participé à la rédaction de la déclaration d'indépendance des Etats-Unis.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "La vrai tragédie de la vie, c'est qu'on devient vieux trop tôt et sage trop tard.",
    auteur: "Benjamin Franklin(1706-1790) est un écrivain et un homme politique Américain. Il a participé à la rédaction de la déclaration d'indépendance des Etats-Unis.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Un peuple prêt à sacrifier un peu de liberté pour un peu de sécurité ne mérite ni l'une ni l'autre, et finit par perdre les deux.",
    auteur: "Benjamin Franklin(1706-1790) est un écrivain et un homme politique Américain. Il a participé à la rédaction de la déclaration d'indépendance des Etats-Unis.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Si vous voulez avoir un serviteur fidèle, servez-vous vous-même.",
    auteur: "Benjamin Franklin(1706-1790) est un écrivain et un homme politique Américain. Il a participé à la rédaction de la déclaration d'indépendance des Etats-Unis.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Une grande beauté, une force formidable, de grandes richesses ne sont pas vraiment d'un grand intérêt; un coeur juste surpasse tout cela.",
    auteur: "Benjamin Franklin(1706-1790) est un écrivain et un homme politique Américain. Il a participé à la rédaction de la déclaration d'indépendance des Etats-Unis.",
    categorie: ["tous", "morale", "sensibilite"],
  },
  {
    texte: "Il n'y a jamais eu de bonne guerre ni de mauvaise paix.",
    auteur: "Benjamin Franklin(1706-1790) est un écrivain et un homme politique Américain. Il a participé à la rédaction de la déclaration d'indépendance des Etats-Unis.",
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Si vous voulez savoir la valeur de l'argent, essayez donc d'en emprunter.",
    auteur: "Benjamin Franklin(1706-1790) est un écrivain et un homme politique Américain. Il a participé à la rédaction de la déclaration d'indépendance des Etats-Unis.",
    categorie: ["tous", ],
  },
  {
    texte: "Un bon exemple est le meilleur sermon.",
    auteur: "Benjamin Franklin(1706-1790) est un écrivain et un homme politique Américain. Il a participé à la rédaction de la déclaration d'indépendance des Etats-Unis.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés.",
    auteur: "Confucius(551-479 avant notre ère) est un philosophe chinois. Il est à l'origine de la naissance du confucianisme.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La joie est en tout; il faut savoir l'extraire.",
    auteur: "Confucius(551-479 avant notre ère) est un philosophe chinois. Il est à l'origine de la naissance du confucianisme.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Une petite impatience peut ruiner un grand projet.",
    auteur: "Confucius(551-479 avant notre ère) est un philosophe chinois. Il est à l'origine de la naissance du confucianisme.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "On a deux vies, et la deuxième commence quand on se rend compte qu'on en a qu'une.",
    auteur: "Confucius(551-479 avant notre ère) est un philosophe chinois. Il est à l'origine de la naissance du confucianisme.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La vie est vraiment simple, mais nous insistons à la rendre compliquée.",
    auteur: "Confucius(551-479 avant notre ère) est un philosophe chinois. Il est à l'origine de la naissance du confucianisme.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Que l'on s'efforce d'être pleinement humain et il n'y aura plus de place pour le mal.",
    auteur: "Confucius(551-479 avant notre ère) est un philosophe chinois. Il est à l'origine de la naissance du confucianisme.",
    categorie: ["tous", "bonheur", "morale"],
  },
  {
    texte: "Nulle pierre ne peut être polie sans friction, nul homme ne peut parfaire son expérience sans épreuves.",
    auteur: "Confucius(551-479 avant notre ère) est un philosophe chinois. Il est à l'origine de la naissance du confucianisme.",
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Le silence est un ami qui ne trahit jamais.",
    auteur: "Confucius(551-479 avant notre ère) est un philosophe chinois. Il est à l'origine de la naissance du confucianisme.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Si l'homme a deux oreilles et une bouche, c'est pour écouter deux fois plus qu'il ne parle.",
    auteur: "Confucius(551-479 avant notre ère) est un philosophe chinois. Il est à l'origine de la naissance du confucianisme.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "J'ignore tout de la vie, que saurais-je de la mort ?",
    auteur: "Confucius(551-479 avant notre ère) est un philosophe chinois. Il est à l'origine de la naissance du confucianisme.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Agissez envers les autres comme vous aimeriez qu'on agisse envers vous.",
    auteur: "Confucius(551-479 avant notre ère) est un philosophe chinois. Il est à l'origine de la naissance du confucianisme.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Après une faute, ne pas se corriger, c'est le vraie faute.",
    auteur: "Confucius(551-479 avant notre ère) est un philosophe chinois. Il est à l'origine de la naissance du confucianisme.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Etre humain, c'est aimer les hommes, être sage, c'est les connaître.",
    auteur: "Confucius(551-479 avant notre ère) est un philosophe chinois. Il est à l'origine de la naissance du confucianisme.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "A ta naissance tout le monde rit et tu es le seul à pleurer. Conduis ta vie de façon à ce qu'à ta mort tout le monde pleure et que tu sois le seul à sourire.",
    auteur: "Confucius(551-479 avant notre ère) est un philosophe chinois. Il est à l'origine de la naissance du confucianisme.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Tous les hommes pensent que le bonheur réside dans le sommet de la montagne, alors qu'il réside plutôt dans la façon de la gravir.",
    auteur: "Confucius(551-479 avant notre ère) est un philosophe chinois. Il est à l'origine de la naissance du confucianisme.",
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "La plus grande gloire n'est pas de ne jamais tomber, mais de se lever chaque fois que nous tombons.",
    auteur: "Confucius(551-479 avant notre ère) est un philosophe chinois. Il est à l'origine de la naissance du confucianisme.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Choisis un travail que tu aimes et tu n'auras jamais à travailler un seul jour de ta vie.",
    auteur: "Confucius(551-479 avant notre ère) est un philosophe chinois. Il est à l'origine de la naissance du confucianisme.",
    categorie: ["tous", "sagesse", "reve"],
  },
  {
    texte: "Celui qui déplace la montagne, c'est celui qui commence par enlever les petites pierres.",
    auteur: "Confucius(551-479 avant notre ère) est un philosophe chinois. Il est à l'origine de la naissance du confucianisme.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Deviens qui tu es! Fais ce que toi seul peux faire.",
    auteur: "Friedrich Nietzsche(1844-1900) est un philosophe, poète et écrivain allemand qui a eu un grande influence sur l'histoire intellectuelle contemporaine.",
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "Et la vie elle-même m'a dit ce secret: \"Vois, dit-elle, je suis ce qui doit toujours se surmonter soi-même\".",
    auteur: "Friedrich Nietzsche(1844-1900) est un philosophe, poète et écrivain allemand qui a eu un grande influence sur l'histoire intellectuelle contemporaine.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "La beauté parle à voix basse; elle ne pénétre que dans les âmes les plus eveillées.",
    auteur: "Friedrich Nietzsche(1844-1900) est un philosophe, poète et écrivain allemand qui a eu un grande influence sur l'histoire intellectuelle contemporaine.",
    categorie: ["tous", "reve", "sensibilite"],
  },
  {
    texte: "L'homme a besoin de ce qu'il y'a de pire en lui s'il veut parvenir à ce qu'il a de meilleur.",
    auteur: "Friedrich Nietzsche(1844-1900) est un philosophe, poète et écrivain allemand qui a eu un grande influence sur l'histoire intellectuelle contemporaine.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Veux-tu avoir la vie facile? Reste toujours près du troupeau, et oublie-toi en lui.",
    auteur: "Friedrich Nietzsche(1844-1900) est un philosophe, poète et écrivain allemand qui a eu un grande influence sur l'histoire intellectuelle contemporaine.",
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "Le pas de quelqu'un révèle s'il marche sur son propre chemin.",
    auteur: "Friedrich Nietzsche(1844-1900) est un philosophe, poète et écrivain allemand qui a eu un grande influence sur l'histoire intellectuelle contemporaine.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "L'amour ne veut pas la durée, elle veut l'instant et l'éternité.",
    auteur: "Friedrich Nietzsche(1844-1900) est un philosophe, poète et écrivain allemand qui a eu un grande influence sur l'histoire intellectuelle contemporaine.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Méfions-nous: plus nous nous élevons haut, plus nous semblons petits à ceux qui ne savent pas voler.",
    auteur: "Friedrich Nietzsche(1844-1900) est un philosophe, poète et écrivain allemand qui a eu un grande influence sur l'histoire intellectuelle contemporaine.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "A lutter avec les mêmes armes que ton ennemi, tu deviendras comme lui.",
    auteur: "Friedrich Nietzsche(1844-1900) est un philosophe, poète et écrivain allemand qui a eu un grande influence sur l'histoire intellectuelle contemporaine.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Je vous le dis: il faut encore porter en soi le chaos, pour être capable d'enfanter une étoile dansante.",
    auteur: "Friedrich Nietzsche(1844-1900) est un philosophe, poète et écrivain allemand qui a eu un grande influence sur l'histoire intellectuelle contemporaine.",
    categorie: ["tous", ],
  },
  {
    texte: "Créer, c'est la grande délivrance de la douleur et l'allègement de la vie.",
    auteur: "Friedrich Nietzsche(1844-1900) est un philosophe, poète et écrivain allemand qui a eu un grande influence sur l'histoire intellectuelle contemporaine.",
    categorie: ["tous", "bonheur", "reve"],
  },
  {
    texte: "Celui qui ne dispose pas des deux tiers de sa journée pour lui-même est un esclave, qu'il soit d'ailleurs ce qu'il veut: politique, marchand, fonctionnaire, érudit.",
    auteur: "Friedrich Nietzsche(1844-1900) est un philosophe, poète et écrivain allemand qui a eu un grande influence sur l'histoire intellectuelle contemporaine.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Il faut avoir une musique en soi pour faire danser le monde.",
    auteur: "Friedrich Nietzsche(1844-1900) est un philosophe, poète et écrivain allemand qui a eu un grande influence sur l'histoire intellectuelle contemporaine.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Le plus dangereux ennemi que tu puisses rencontrer sera toujours toi-même.",
    auteur: "Friedrich Nietzsche(1844-1900) est un philosophe, poète et écrivain allemand qui a eu un grande influence sur l'histoire intellectuelle contemporaine.",
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "La vie a besoin d'illusions, c'est-à-dire de non vérités tenues pour des vérités.",
    auteur: "Friedrich Nietzsche(1844-1900) est un philosophe, poète et écrivain allemand qui a eu un grande influence sur l'histoire intellectuelle contemporaine.",
    categorie: ["tous", "bonheur", "sagesse"],
  },
  {
    texte: "Peu de gens sont faits pour l'indépendance, c'est le privilège des puissants.",
    auteur: "Friedrich Nietzsche(1844-1900) est un philosophe, poète et écrivain allemand qui a eu un grande influence sur l'histoire intellectuelle contemporaine.",
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "La croyance que rien ne change provient soit d'une mauvaise vue, soit d'une mauvaise foi. La première se corrige, la seconde se combat.",
    auteur: "Friedrich Nietzsche(1844-1900) est un philosophe, poète et écrivain allemand qui a eu un grande influence sur l'histoire intellectuelle contemporaine.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Quand on lutte contre des monstres. Il faut prendre garde de ne pas devenir monstre soi-même. Si tu plonges longuement ton regard dans l'abîme, l'abîme finit par ancrer son regard en toi.",
    auteur: "Friedrich Nietzsche(1844-1900) est un philosophe, poète et écrivain allemand qui a eu un grande influence sur l'histoire intellectuelle contemporaine.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Celui qui sait commander trouve toujours ceux qui doivent obéir.",
    auteur: "Friedrich Nietzsche(1844-1900) est un philosophe, poète et écrivain allemand qui a eu un grande influence sur l'histoire intellectuelle contemporaine.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Le serpent qui ne peut changer de peau, meurt. Il en va de même des esprits que l'on empêche de changer d'opinion: ils cessent d'être esprit.",
    auteur: "Friedrich Nietzsche(1844-1900) est un philosophe, poète et écrivain allemand qui a eu un grande influence sur l'histoire intellectuelle contemporaine.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'Etat est le plus froid des monstres. Il ment froidement; et voici le mensonge qui s'échappe de sa bouche: \"Moi l'Etat, je suis le peuple\".",
    auteur: "Friedrich Nietzsche(1844-1900) est un philosophe, poète et écrivain allemand qui a eu un grande influence sur l'histoire intellectuelle contemporaine.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Ce qui ne tue pas rend plus fort.",
    auteur: "Friedrich Nietzsche(1844-1900) est un philosophe, poète et écrivain allemand qui a eu un grande influence sur l'histoire intellectuelle contemporaine.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Si chacun ne conservait que ce dont il a besoin, nul ne manquerait de rien, et chacun se contenterait de ce qu'il a.",
    auteur: "Gandhi(1869-1948) est un avocat qui resisté à l'oppression par la désobéissance civile de masse et a conduit l'Inde à l'indépendance.",
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Il y'a assez de tout dans le monde pour satisfaire aux besoins de l'homme, mais pas assez pour assouvir son avidité.",
    auteur: "Gandhi(1869-1948) est un avocat qui resisté à l'oppression par la désobéissance civile de masse et a conduit l'Inde à l'indépendance.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Soyez le changement que vous voulez voir dans le monde.",
    auteur: "Gandhi(1869-1948) est un avocat qui resisté à l'oppression par la désobéissance civile de masse et a conduit l'Inde à l'indépendance.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "A l'instant où l'esclave décide qu'il ne sera plus esclave, ses chaînes tombent.",
    auteur: "Gandhi(1869-1948) est un avocat qui resisté à l'oppression par la désobéissance civile de masse et a conduit l'Inde à l'indépendance.",
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
    auteur: "Gandhi(1869-1948) est un avocat qui resisté à l'oppression par la désobéissance civile de masse et a conduit l'Inde à l'indépendance.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Dès que quelqu'un comprend qu'il est contraire à sa dignité d'homme d'obéir à des lois injustes, aucune tyrannie ne peut l'asservir.",
    auteur: "Gandhi(1869-1948) est un avocat qui resisté à l'oppression par la désobéissance civile de masse et a conduit l'Inde à l'indépendance.",
    categorie: ["tous", "courage", "morale"],
  },
  {
    texte: "On peut juger de la grandeur d'une nation par la façon dont les animaux y sont traités.",
    auteur: "Gandhi(1869-1948) est un avocat qui resisté à l'oppression par la désobéissance civile de masse et a conduit l'Inde à l'indépendance.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Croire en quelque chose et ne pas le vivre, c'est malhonnête.",
    auteur: "Gandhi(1869-1948) est un avocat qui resisté à l'oppression par la désobéissance civile de masse et a conduit l'Inde à l'indépendance.",
    categorie: ["tous", ],
  },
  {
    texte: "Vivons simplement pour que d'autres puissent simplement vivre.",
    auteur: "Gandhi(1869-1948) est un avocat qui resisté à l'oppression par la désobéissance civile de masse et a conduit l'Inde à l'indépendance.",
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Le bonheur, c'est quand vos actes sont en accord avec vos paroles.",
    auteur: "Gandhi(1869-1948) est un avocat qui resisté à l'oppression par la désobéissance civile de masse et a conduit l'Inde à l'indépendance.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "La force du nombre ne réjouit que le peureux. Celui qui est courageux en esprit se fait gloire de combattre seul.",
    auteur: "Gandhi(1869-1948) est un avocat qui resisté à l'oppression par la désobéissance civile de masse et a conduit l'Inde à l'indépendance.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "En opposant la haine à la haine, on ne fait que la répandre, en surface comme en profondeur.",
    auteur: "Gandhi(1869-1948) est un avocat qui resisté à l'oppression par la désobéissance civile de masse et a conduit l'Inde à l'indépendance.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La haine tue toujours, l'amour ne meurt jamais.",
    auteur: "Gandhi(1869-1948) est un avocat qui resisté à l'oppression par la désobéissance civile de masse et a conduit l'Inde à l'indépendance.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "La force ne vient pas des capacités physiques mais d'une volonté indomptable.",
    auteur: "Gandhi(1869-1948) est un avocat qui resisté à l'oppression par la désobéissance civile de masse et a conduit l'Inde à l'indépendance.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "La différence entre le possible et l'impossible se trouve dans la détermination.",
    auteur: "Gandhi(1869-1948) est un avocat qui resisté à l'oppression par la désobéissance civile de masse et a conduit l'Inde à l'indépendance.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Le plus grand voyageur n'est pas celui qui a fait dix fois le tour du monde, mais celui qui a fait une seule fois le tour de lui-même.",
    auteur: "Gandhi(1869-1948) est un avocat qui resisté à l'oppression par la désobéissance civile de masse et a conduit l'Inde à l'indépendance.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Vis comme si tu devais mourir demain. Apprends comme si tu devais vivre toujours.",
    auteur: "Gandhi(1869-1948) est un avocat qui resisté à l'oppression par la désobéissance civile de masse et a conduit l'Inde à l'indépendance.",
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Toute âme qui s'élève élève le monde.",
    auteur: "Gandhi(1869-1948) est un avocat qui resisté à l'oppression par la désobéissance civile de masse et a conduit l'Inde à l'indépendance.",
    categorie: ["tous", ],
  },
  {
    texte: "La vrai moralité ne consiste pas à suivre les chemins battus, mais à trouver la voie véritable pour nous-même et à la suivre de manière intrépide.",
    auteur: "Gandhi(1869-1948) est un avocat qui resisté à l'oppression par la désobéissance civile de masse et a conduit l'Inde à l'indépendance.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Je ne veux, pour rien au monde, étouffer cette petite voix qu'est ma conscience, ou l'expression de ce qu'il y'a de plus profond en moi.",
    auteur: "Gandhi(1869-1948) est un avocat qui resisté à l'oppression par la désobéissance civile de masse et a conduit l'Inde à l'indépendance.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Il est facile de se tenir avec la foule. Il faut du courage pour rester seul.",
    auteur: "Gandhi(1869-1948) est un avocat qui resisté à l'oppression par la désobéissance civile de masse et a conduit l'Inde à l'indépendance.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "L'amour ignore sa profondeur jusqu'a l'heure de la séparation.",
    auteur: "Khalil Gibran(1883-1931) est un poéte et un peintre. Il devient populaire en 1923 suite à la publication de \"The Prophet\".",
    categorie: ["tous", "bonheur", "sensibilite"],
  },
  {
    texte: "Tous peuvent entendre mais seuls les êtres sensibles comprennent.",
    auteur: "Khalil Gibran(1883-1931) est un poéte et un peintre. Il devient populaire en 1923 suite à la publication de \"The Prophet\".",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Vos enfants: vous pouvez vous efforcer d'être comme eux, mais ne tentez pas de les faire comme vous.",
    auteur: "Khalil Gibran(1883-1931) est un poéte et un peintre. Il devient populaire en 1923 suite à la publication de \"The Prophet\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Plus profondément le chagrin creusera votre être, plus vous pourrez contenir de joie.",
    auteur: "Khalil Gibran(1883-1931) est un poéte et un peintre. Il devient populaire en 1923 suite à la publication de \"The Prophet\".",
    categorie: ["tous", "bonheur", "sensibilite"],
  },
  {
    texte: "Nul ne peut atteindre l'aube sans passer par le chemin de la nuit.",
    auteur: "Khalil Gibran(1883-1931) est un poéte et un peintre. Il devient populaire en 1923 suite à la publication de \"The Prophet\".",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Si tu aimes quelqu'un, laisse le partir! S'il revient, c'est qu'il a toujours été là, s'il ne revient pas, c'est qu'il ne l'a jamais été.",
    auteur: "Khalil Gibran(1883-1931) est un poéte et un peintre. Il devient populaire en 1923 suite à la publication de \"The Prophet\".",
    categorie: ["tous", "bonheur", "sensibilite"],
  },
  {
    texte: "\"Ils me disent dans leur éveil: \"Toi et le monde dans lequel tu vis n'êtes qu'un grain de sable sur le rivage infini d'une mer infinie. Et dans mon rêve je leur réponds:\" Je suios la mer infinie, et tous les mondes ne sont que des grains de sable dans mon rivage\".",
    auteur: "Khalil Gibran(1883-1931) est un poéte et un peintre. Il devient populaire en 1923 suite à la publication de \"The Prophet\".",
    categorie: ["tous", "reve"],
  },
  {
    texte: "Même ceux qui boitent ne reculent pas.",
    auteur: "Khalil Gibran(1883-1931) est un poéte et un peintre. Il devient populaire en 1923 suite à la publication de \"The Prophet\".",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Révèle ton secret au vent, mais ne lui reproche pas de le répéter aux arbres.",
    auteur: "Khalil Gibran(1883-1931) est un poéte et un peintre. Il devient populaire en 1923 suite à la publication de \"The Prophet\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "C'est en donnant de vous-même que vous donnez véritablement.",
    auteur: "Khalil Gibran(1883-1931) est un poéte et un peintre. Il devient populaire en 1923 suite à la publication de \"The Prophet\".",
    categorie: ["tous", ],
  },
  {
    texte: "Si autrui vous blesse, vous pouvez oublier la blessure; mais si vous blessez, vous vous en rappellerez toujours.",
    auteur: "Khalil Gibran(1883-1931) est un poéte et un peintre. Il devient populaire en 1923 suite à la publication de \"The Prophet\".",
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Le grand défaut des hommes est d'abandonner leurs propres champs pour ôter l'ivraie de ceux des autres.",
    auteur: "Khalil Gibran(1883-1931) est un poéte et un peintre. Il devient populaire en 1923 suite à la publication de \"The Prophet\".",
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Ouvre l'oeil et regarde, tu verras ton visage dans tous les visages. Tends l'oreille et écoute, tu entendras ta propre voix dans toutes les voix.",
    auteur: "Khalil Gibran(1883-1931) est un poéte et un peintre. Il devient populaire en 1923 suite à la publication de \"The Prophet\".",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Personne ne peut vous révéler autre chose que ce qui repose déjà, à moitié endormi, dans le commencement de votre savoir.",
    auteur: "Khalil Gibran(1883-1931) est un poéte et un peintre. Il devient populaire en 1923 suite à la publication de \"The Prophet\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "C'est dans le rosée des petites choses que le coeur trouve son matin et se rafraîchit.",
    auteur: "Khalil Gibran(1883-1931) est un poéte et un peintre. Il devient populaire en 1923 suite à la publication de \"The Prophet\".",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Je suis voyageur et navigateur. Et tous les jours, je découvre un nouveau continent dans les profondeurs de mon âme.",
    auteur: "Khalil Gibran(1883-1931) est un poéte et un peintre. Il devient populaire en 1923 suite à la publication de \"The Prophet\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Plus on voyage au loin, moins on se connaît.",
    auteur: "Lao Tseu(VIème ou Vème siècle avant notre ère) est considéré comme le père fondateur du taoïsme. Les informations le concernant sont rares et incertaines.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Celui qui sait ne parle pas; celui qui parle ne sait pas.",
    auteur: "Lao Tseu(VIème ou Vème siècle avant notre ère) est considéré comme le père fondateur du taoïsme. Les informations le concernant sont rares et incertaines.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Ta vie est un bloc d'argile; ne laisse personne le modeler à ta place.",
    auteur: "Lao Tseu(VIème ou Vème siècle avant notre ère) est considéré comme le père fondateur du taoïsme. Les informations le concernant sont rares et incertaines.",
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Il n'y a point de chemin vers le bonheur: le bonheur c'est le chemin.",
    auteur: "Lao Tseu(VIème ou Vème siècle avant notre ère) est considéré comme le père fondateur du taoïsme. Les informations le concernant sont rares et incertaines.",
    categorie: ["tous", "bonheur", "sagesse"],
  },
  {
    texte: "Je m'observe moi-même et c'est ainsi que je réussis à connaître les autres.",
    auteur: "Lao Tseu(VIème ou Vème siècle avant notre ère) est considéré comme le père fondateur du taoïsme. Les informations le concernant sont rares et incertaines.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Plus le sage donne aux autres, plus il possède.",
    auteur: "Lao Tseu(VIème ou Vème siècle avant notre ère) est considéré comme le père fondateur du taoïsme. Les informations le concernant sont rares et incertaines.",
    categorie: ["tous", ],
  },
  {
    texte: "La noblesse a pour racine l'humilité.",
    auteur: "Lao Tseu(VIème ou Vème siècle avant notre ère) est considéré comme le père fondateur du taoïsme. Les informations le concernant sont rares et incertaines.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Mieux vaut allumer une bougie que de maudire les ténébres.",
    auteur: "Lao Tseu(VIème ou Vème siècle avant notre ère) est considéré comme le père fondateur du taoïsme. Les informations le concernant sont rares et incertaines.",
    categorie: ["tous", ],
  },
  {
    texte: "Le voyage de mille lieues a commencé par un pas.",
    auteur: "Lao Tseu(VIème ou Vème siècle avant notre ère) est considéré comme le père fondateur du taoïsme. Les informations le concernant sont rares et incertaines.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "L'expérience est une lumière qui n'éclaire qui soi-même.",
    auteur: "Lao Tseu(VIème ou Vème siècle avant notre ère) est considéré comme le père fondateur du taoïsme. Les informations le concernant sont rares et incertaines.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "On surestime ce que l'on n'est pas. On sous-estime ce que l'on est.",
    auteur: "Lao Tseu(VIème ou Vème siècle avant notre ère) est considéré comme le père fondateur du taoïsme. Les informations le concernant sont rares et incertaines.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Apprends à écrire tes blessures dans le sable et à graver tes joies dans la pierre.",
    auteur: "Lao Tseu(VIème ou Vème siècle avant notre ère) est considéré comme le père fondateur du taoïsme. Les informations le concernant sont rares et incertaines.",
    categorie: ["tous", "bonheur", "sagesse"],
  },
  {
    texte: "Etre humain: c'est aimer les hommes. Etre sage: c'est les connaître.",
    auteur: "Lao Tseu(VIème ou Vème siècle avant notre ère) est considéré comme le père fondateur du taoïsme. Les informations le concernant sont rares et incertaines.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Les paroles sincères ne sont pas élégantes; Les paroles élégantes ne sont pas sincères.",
    auteur: "Lao Tseu(VIème ou Vème siècle avant notre ère) est considéré comme le père fondateur du taoïsme. Les informations le concernant sont rares et incertaines.",
    categorie: ["tous", ],
  },
  {
    texte: "Etre en repos s'appelle revenir à la vie.",
    auteur: "Lao Tseu(VIème ou Vème siècle avant notre ère) est considéré comme le père fondateur du taoïsme. Les informations le concernant sont rares et incertaines.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'échec est le fondement de la réussite.",
    auteur: "Lao Tseu(VIème ou Vème siècle avant notre ère) est considéré comme le père fondateur du taoïsme. Les informations le concernant sont rares et incertaines.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Sois content de ce que tu as: Réjouis-toi de la réalité telle qu'elle est. Quand tu comprends que rien ne manque, le monde entier t'appartient.",
    auteur: "Lao Tseu(VIème ou Vème siècle avant notre ère) est considéré comme le père fondateur du taoïsme. Les informations le concernant sont rares et incertaines.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Connaître les autres, c'est sagesse. Se connaître soi-même, c'est sagesse supérieure.",
    auteur: "Lao Tseu(VIème ou Vème siècle avant notre ère) est considéré comme le père fondateur du taoïsme. Les informations le concernant sont rares et incertaines.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Si la vie est prévisible, elle serait sans saveur.",
    auteur: "Eleanor Roosevelt(1884-1962) est une personnalité politique et une militante. Elle a eu un impact sur la décision des Etats-Unis de se lancer dans la seconde guerre mondiale et défendait les droits civique.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Vous devez faire les choses que vous vous croyez incapable de faire.",
    auteur: "Eleanor Roosevelt(1884-1962) est une personnalité politique et une militante. Elle a eu un impact sur la décision des Etats-Unis de se lancer dans la seconde guerre mondiale et défendait les droits civique.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Chaque expérience où vous vous arrêtez pour regarder la peur bien en face augmente votre force, votre courage et votre confiance.",
    auteur: "Eleanor Roosevelt(1884-1962) est une personnalité politique et une militante. Elle a eu un impact sur la décision des Etats-Unis de se lancer dans la seconde guerre mondiale et défendait les droits civique.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Le but de la vie est de vivre, goûter l'expérience au maximum pour accueillir avec impatience et sans crainte une expérience inédite et plus riche.",
    auteur: "Eleanor Roosevelt(1884-1962) est une personnalité politique et une militante. Elle a eu un impact sur la décision des Etats-Unis de se lancer dans la seconde guerre mondiale et défendait les droits civique.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Le futur appartient à ceux qui croient à la beauté de leurs rêves.",
    auteur: "Eleanor Roosevelt(1884-1962) est une personnalité politique et une militante. Elle a eu un impact sur la décision des Etats-Unis de se lancer dans la seconde guerre mondiale et défendait les droits civique.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Le seules limites de nos réalisations de demain, ce sont nos doutes d'aujourd'hui.",
    auteur: "Eleanor Roosevelt(1884-1962) est une personnalité politique et une militante. Elle a eu un impact sur la décision des Etats-Unis de se lancer dans la seconde guerre mondiale et défendait les droits civique.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Fais ce que tu crois juste, selon ton coeur, car on te critiquera de toute façon.",
    auteur: "Eleanor Roosevelt(1884-1962) est une personnalité politique et une militante. Elle a eu un impact sur la décision des Etats-Unis de se lancer dans la seconde guerre mondiale et défendait les droits civique.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Les grands esprits discutent des idées; les esprits moyens discutent des événements; les petits esprits discutent des gens.",
    auteur: "Eleanor Roosevelt(1884-1962) est une personnalité politique et une militante. Elle a eu un impact sur la décision des Etats-Unis de se lancer dans la seconde guerre mondiale et défendait les droits civique.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Avant de pouvoir se lier d'amitié avec quelqu'un d'autre, il faut être ami avec soi-même.",
    auteur: "Eleanor Roosevelt(1884-1962) est une personnalité politique et une militante. Elle a eu un impact sur la décision des Etats-Unis de se lancer dans la seconde guerre mondiale et défendait les droits civique.",
    categorie: ["tous", ],
  },
  {
    texte: "Souvenez-vous que vous avez non seulement le droit d'être unique, mais aussi l'obligation.",
    auteur: "Eleanor Roosevelt(1884-1962) est une personnalité politique et une militante. Elle a eu un impact sur la décision des Etats-Unis de se lancer dans la seconde guerre mondiale et défendait les droits civique.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Le don de l'amour est un enseignement en soi.",
    auteur: "Eleanor Roosevelt(1884-1962) est une personnalité politique et une militante. Elle a eu un impact sur la décision des Etats-Unis de se lancer dans la seconde guerre mondiale et défendait les droits civique.",
    categorie: ["tous", ],
  },
  {
    texte: "Hier est de l'histoire, demain est un mystère, aujourd'hui est un cadeau.",
    auteur: "Eleanor Roosevelt(1884-1962) est une personnalité politique et une militante. Elle a eu un impact sur la décision des Etats-Unis de se lancer dans la seconde guerre mondiale et défendait les droits civique.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Personne ne peut vous diminuer sans que vous y consentiez.",
    auteur: "Eleanor Roosevelt(1884-1962) est une personnalité politique et une militante. Elle a eu un impact sur la décision des Etats-Unis de se lancer dans la seconde guerre mondiale et défendait les droits civique.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "On ne doit jamais, pour aucune raison, tourner le dos à la vie.",
    auteur: "Eleanor Roosevelt(1884-1962) est une personnalité politique et une militante. Elle a eu un impact sur la décision des Etats-Unis de se lancer dans la seconde guerre mondiale et défendait les droits civique.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Je t'aime, et t'ai toujours aimé; quand on aime ainsi une personne, on l'aime telle qu'elle est et non telle qu'on la voudrait.",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Tous les hommes font la même erreur de s'imaginer que bonheur veut dire que tous les voeux se réalisent.",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", "bonheur", "reve"],
  },
  {
    texte: "Chacun rêve de changer l'humanité, mais personne ne pense à se changer lui-même.",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", "sagesse", "reve"],
  },
  {
    texte: "Nous ne sommes pas ici dans ce monde pour transformer les autres, mais pour nous transformer nous-mêmes.",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", "sagesse", "morale", "sensibilite"],
  },
  {
    texte: "De toutes les sciences que l'homme peut et doit savoir, la principale, c'est la science de vivre de manière à faire le moins de mal et le plus de bien possible.",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Il n'y a pas d'autre amour que celui qui consiste à donner sa vie pour ceux qu'on aime.",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Le temps qui nous reste à vivre est plus important que toutes les années écoulées.",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "Il faut se mettre à la place de chacun. Tout comprendre, c'est tout pardonner.",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", "sagesse", "sensibilite"],
  },
  {
    texte: "Faire le bien ne peut pas rendre heureux mais faire le mal rendra à coup sûr malheureux.",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", "bonheur", "morale", "sensibilite"],
  },
  {
    texte: "Il n'est nulle grandeur là où manquent simplicité, bonté, et vérité.",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Il y'a autant de façons d'aimer qu'il y'a de coeurs.",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "C'est une sottise que de se laisser dominer par son passé, il faut lutter pour vivre mieux, beaucoup mieux...",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "Si un homme a beaucoup plus qu'il ne faut, c'est que d'autres manquent du nécessaire.",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Se représenter un homme privé de liberté, c'est se le représenter privé de vie.",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Il n'est nullement démontré que les buts vers lesquels tend l'humanité soient la liberté, l'égalité, l'évolution ou la civilisation.",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Il me semble bien souvent que les hommes ne mettent guère en pratique les beaux sentiments dont ils font si volontiers parade.",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", ],
  },
  {
    texte: "Pourquoi ressembleriez-vous à un autre qu'à vous-même? Restez donc ce que vous êtes.",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Il ne faut écrire qu'au moment où à chaque fois que tu trempes ta plume dans l'encre un morceau de ta chair reste dans l'encrier.",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "La beauté ne fait pas l'amour, c'est l'amour qui fait la beauté.",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "En aimant, on est toujours heureux parce que notre bonheur est en nous-mêmes.",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Toute la variété, tout le charme, toute la beauté de la vie ne sont qu'un mélange de lumière et d'ombre.",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Les grandes oeuvres d'art ne sont grandes que parce qu'elles sont accessibles et compréhensibles à tous.",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Les deux guerriers les plus puissants sont la patience et le temps.",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "N'oublie pas que les grandes réalisations prennent du temps et qu'il n'y a pas de succès du jour au lendemain.",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Partout où il y'aura le pouvoir des uns sur les autres, il n'y aura pas de liberté mais l'oppression des uns sur les autres. C'est pourquoi le pouvoir doit être détruit.",
    auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "J'ai appris que le courage n'est pas l'absence de peur, mais la capacité de la vaincre.",
    auteur: "Nelson Mandela(1918-2013) est un avocat qui est devenu président de la République d'Afrique du Sud de 1994 à 1999.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Un gagnant est juste un rêveur qui n'a jamais cédé.",
    auteur: "Nelson Mandela(1918-2013) est un avocat qui est devenu président de la République d'Afrique du Sud de 1994 à 1999.",
    categorie: ["tous", "reve"],
  },
  {
    texte: "Cela semble toujours impossible jusqu'à ce qu'on le fasse.",
    auteur: "Nelson Mandela(1918-2013) est un avocat qui est devenu président de la République d'Afrique du Sud de 1994 à 1999.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "L'éducation est l'arme la plus puissante pour changer le monde.",
    auteur: "Nelson Mandela(1918-2013) est un avocat qui est devenu président de la République d'Afrique du Sud de 1994 à 1999.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Une tête bien faite et un bon coeur forment toujours une formidable combinaison.",
    auteur: "Nelson Mandela(1918-2013) est un avocat qui est devenu président de la République d'Afrique du Sud de 1994 à 1999.",
    categorie: ["tous", ],
  },
  {
    texte: "Prenez sur vous, où que vous viviez, de donner de la joie et de l'espoir autour de vous.",
    auteur: "Nelson Mandela(1918-2013) est un avocat qui est devenu président de la République d'Afrique du Sud de 1994 à 1999.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "La bonté de l'homme est une flamme qu'on peut cacher mais qu'on ne peut jamais éteindre.",
    auteur: "Nelson Mandela(1918-2013) est un avocat qui est devenu président de la République d'Afrique du Sud de 1994 à 1999.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Aucun de nous, en agissant seul, ne peut atteindre le succès.",
    auteur: "Nelson Mandela(1918-2013) est un avocat qui est devenu président de la République d'Afrique du Sud de 1994 à 1999.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Vous obtiendrez plus dans ce monde avec le pardon qu'avec des actes de représailles.",
    auteur: "Nelson Mandela(1918-2013) est un avocat qui est devenu président de la République d'Afrique du Sud de 1994 à 1999.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Je ne suis pas vraiment libre si je prive quelqu'un d'autre de sa liberté. L'opprimé et l'oppresseur sont tous deux dépossédés de leur humanité.",
    auteur: "Nelson Mandela(1918-2013) est un avocat qui est devenu président de la République d'Afrique du Sud de 1994 à 1999.",
    categorie: ["tous", "liberte", "morale"],
  },
  {
    texte: "Que vos choix reflétent vos espoirs et non vos peurs.",
    auteur: "Nelson Mandela(1918-2013) est un avocat qui est devenu président de la République d'Afrique du Sud de 1994 à 1999.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Nous devons utiliser le temps à bon escient et nous rendre compte qu'il est toujours temps de faire le bien.",
    auteur: "Nelson Mandela(1918-2013) est un avocat qui est devenu président de la République d'Afrique du Sud de 1994 à 1999.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Que règne la liberté. Car jamais le soleil ne s'est couché sur réalisation humaine plus glorieuse.",
    auteur: "Nelson Mandela(1918-2013) est un avocat qui est devenu président de la République d'Afrique du Sud de 1994 à 1999.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Etre libre, ce n'est pas seulement se débarasser de ses chaînes; c'est vivre d'une façon qui respecte et renforce la liberté des autres.",
    auteur: "Nelson Mandela(1918-2013) est un avocat qui est devenu président de la République d'Afrique du Sud de 1994 à 1999.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Tout homme ou toute institution qui essaiera de me voler ma dignité perdra.",
    auteur: "Nelson Mandela(1918-2013) est un avocat qui est devenu président de la République d'Afrique du Sud de 1994 à 1999.",
    categorie: ["tous", "liberte", "morale"],
  },
  {
    texte: "L'honneur appartient à ceux qui jamais ne s'éloignent de la vérité, même dans l'obscurité et la difficulté.",
    auteur: "Nelson Mandela(1918-2013) est un avocat qui est devenu président de la République d'Afrique du Sud de 1994 à 1999.",
    categorie: ["tous", ],
  },
  {
    texte: "En faisant scintiller notre lumière, nous offrons aux autres la possibilité d'en faire autant.",
    auteur: "Nelson Mandela(1918-2013) est un avocat qui est devenu président de la République d'Afrique du Sud de 1994 à 1999.",
    categorie: ["tous", ],
  },
  {
    texte: "Jamais cette terre qui est si belle ne devrait connaître l'oppression d'un homme par un autre.",
    auteur: "Nelson Mandela(1918-2013) est un avocat qui est devenu président de la République d'Afrique du Sud de 1994 à 1999.",
    categorie: ["tous", "liberte", "morale"],
  },
  {
    texte: "Refuser leurs droits aux hommes rivient à contester l'essence de leur humanité.",
    auteur: "Nelson Mandela(1918-2013) est un avocat qui est devenu président de la République d'Afrique du Sud de 1994 à 1999.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Ce qui compte dans la vie, ce n'est pas seulement d'avoir vécu. C'est la différence faîte dans la vie des autres qui définit le sens de la vie que nous avons menée.",
    auteur: "Nelson Mandela(1918-2013) est un avocat qui est devenu président de la République d'Afrique du Sud de 1994 à 1999.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Je ne perds jamais. Soit je gagne, soit j'apprends.",
    auteur: "Nelson Mandela(1918-2013) est un avocat qui est devenu président de la République d'Afrique du Sud de 1994 à 1999.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le pardon libère l'âme, élimine la peur. C'est pourquoi il est une arme si puissante.",
    auteur: "Nelson Mandela(1918-2013) est un avocat qui est devenu président de la République d'Afrique du Sud de 1994 à 1999.",
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Il faut méditer sur ce qui procure le bonheur, puisque quand on l'a, on a tout,  et lorsqu'il manque, nous faisons tout pour l'avoir.",
    auteur: "Epicure(342-270 avant notre ère) est un philosophe grec qui a fondé l'épicurisme qui a pour but principal l'atteinte du bonheur.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Quand on se suffit à soi-même, on arrive à posséder ce bien inestimable qu'est la liberté.",
    auteur: "Epicure(342-270 avant notre ère) est un philosophe grec qui a fondé l'épicurisme qui a pour but principal l'atteinte du bonheur.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Etre heureux, c'est savoir se contenter de peu.",
    auteur: "Epicure(342-270 avant notre ère) est un philosophe grec qui a fondé l'épicurisme qui a pour but principal l'atteinte du bonheur.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Ce n'est pas tant l'intervention de nos amis qui nous aide mais le fait de savoir que nous pourrons toujours compter sur eux.",
    auteur: "Epicure(342-270 avant notre ère) est un philosophe grec qui a fondé l'épicurisme qui a pour but principal l'atteinte du bonheur.",
    categorie: ["tous", ],
  },
  {
    texte: "Dépêchons-nous de succomber à la tentation avant qu'elle s'éloigne.",
    auteur: "Epicure(342-270 avant notre ère) est un philosophe grec qui a fondé l'épicurisme qui a pour but principal l'atteinte du bonheur.",
    categorie: ["tous", ],
  },
  {
    texte: "L'âme vile est enflée d'orgueil dans la prospérité et abattue dans l'adversité.",
    auteur: "Epicure(342-270 avant notre ère) est un philosophe grec qui a fondé l'épicurisme qui a pour but principal l'atteinte du bonheur.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Ne gâchez pas ce que vous avez en désirant ce que vous n'avez pas.",
    auteur: "Epicure(342-270 avant notre ère) est un philosophe grec qui a fondé l'épicurisme qui a pour but principal l'atteinte du bonheur.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Jamais il n'est trop tôt ou trop tard pour travailler à la santé de l'âme.",
    auteur: "Epicure(342-270 avant notre ère) est un philosophe grec qui a fondé l'épicurisme qui a pour but principal l'atteinte du bonheur.",
    categorie: ["tous", ],
  },
  {
    texte: "Rien ne peut suffire à celui qui considère comme étant peu de chose ce qui est suffisant.",
    auteur: "Epicure(342-270 avant notre ère) est un philosophe grec qui a fondé l'épicurisme qui a pour but principal l'atteinte du bonheur.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "La vraie sagesse, la vraie supériorité ne se gagne pas en luttant mais en laissant les choses se faire d'elles-mêmes. Les plantes qui résistent au vent se cassent, alors que les plantes souples survivent aux ouragans.",
    auteur: "Epicure(342-270 avant notre ère) est un philosophe grec qui a fondé l'épicurisme qui a pour but principal l'atteinte du bonheur.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "C'est parfois la peur de la mort qui pousse les hommes à la mort.",
    auteur: "Epicure(342-270 avant notre ère) est un philosophe grec qui a fondé l'épicurisme qui a pour but principal l'atteinte du bonheur.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Savoir s'étonner à propos est le premier mouvement de l'esprit vers la découverte.",
    auteur: "Epicure(342-270 avant notre ère) est un philosophe grec qui a fondé l'épicurisme qui a pour but principal l'atteinte du bonheur.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Il est sot de demander aux dieux ce que l'on peut se procurer par soi-même.",
    auteur: "Epicure(342-270 avant notre ère) est un philosophe grec qui a fondé l'épicurisme qui a pour but principal l'atteinte du bonheur.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La chute n'est pas un échec. L'échec, c'est de rester là où on est tombé.",
    auteur: "Socrate(470-399 avant notre ère) est un philosophe qui est l'un des fondateur de la philosophie morale. Socrate n'a laissé aucun écrit, sa pensée est transmise par le bouche à oreilles et par ses disciples Platon et Xénophon.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "La plus grande manière de vivre avec honneur dans ce monde consiste à être en réalité ce que nous prétendons être.",
    auteur: "Socrate(470-399 avant notre ère) est un philosophe qui est l'un des fondateur de la philosophie morale. Socrate n'a laissé aucun écrit, sa pensée est transmise par le bouche à oreilles et par ses disciples Platon et Xénophon.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "N'oublie jamais que tout est éphémère, alors tu ne seras jamais trop joyeux dans le bonheur, ni trop triste dans le chagrin.",
    auteur: "Socrate(470-399 avant notre ère) est un philosophe qui est l'un des fondateur de la philosophie morale. Socrate n'a laissé aucun écrit, sa pensée est transmise par le bouche à oreilles et par ses disciples Platon et Xénophon.",
    categorie: ["tous", "bonheur", "sagesse"],
  },
  {
    texte: "Vous pouvez cacher aux autres une action répréhensible, mais jamais à vous-même.",
    auteur: "Socrate(470-399 avant notre ère) est un philosophe qui est l'un des fondateur de la philosophie morale. Socrate n'a laissé aucun écrit, sa pensée est transmise par le bouche à oreilles et par ses disciples Platon et Xénophon.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Les plus hauts royaumes de la pensée sont impossibles à atteindre sans d'abord arriver à un certain niveau de compassion.",
    auteur: "Socrate(470-399 avant notre ère) est un philosophe qui est l'un des fondateur de la philosophie morale. Socrate n'a laissé aucun écrit, sa pensée est transmise par le bouche à oreilles et par ses disciples Platon et Xénophon.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Soyez ouvert, amical et positif avec toutes les personnes que vous rencontrez; tout le monde mène un combat long et difficile.",
    auteur: "Socrate(470-399 avant notre ère) est un philosophe qui est l'un des fondateur de la philosophie morale. Socrate n'a laissé aucun écrit, sa pensée est transmise par le bouche à oreilles et par ses disciples Platon et Xénophon.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Existe t'il pour l'homme un bien plus précieux que la santé ?",
    auteur: "Socrate(470-399 avant notre ère) est un philosophe qui est l'un des fondateur de la philosophie morale. Socrate n'a laissé aucun écrit, sa pensée est transmise par le bouche à oreilles et par ses disciples Platon et Xénophon.",
    categorie: ["tous", ],
  },
  {
    texte: "Le secret du bonheur ne se trouve pas dans la recherche du plus, mais en développant la capacité de jouir de moins.",
    auteur: "Socrate(470-399 avant notre ère) est un philosophe qui est l'un des fondateur de la philosophie morale. Socrate n'a laissé aucun écrit, sa pensée est transmise par le bouche à oreilles et par ses disciples Platon et Xénophon.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "L'esprit est la source de tout pouvoir; vous devenez ce que vous pensez.",
    auteur: "Socrate(470-399 avant notre ère) est un philosophe qui est l'un des fondateur de la philosophie morale. Socrate n'a laissé aucun écrit, sa pensée est transmise par le bouche à oreilles et par ses disciples Platon et Xénophon.",
    categorie: ["tous", "reve"],
  },
  {
    texte: "L'éducation est l'allumage d'une flamme, et non pas le remplissage d'un navire.",
    auteur: "Socrate(470-399 avant notre ère) est un philosophe qui est l'un des fondateur de la philosophie morale. Socrate n'a laissé aucun écrit, sa pensée est transmise par le bouche à oreilles et par ses disciples Platon et Xénophon.",
    categorie: ["tous", ],
  },
  {
    texte: "Beaucoup de réflexion et non beaucoup de connaissances, voilà à quoi il faut tendre.",
    auteur: "Socrate(470-399 avant notre ère) est un philosophe qui est l'un des fondateur de la philosophie morale. Socrate n'a laissé aucun écrit, sa pensée est transmise par le bouche à oreilles et par ses disciples Platon et Xénophon.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La sagesse commence dans l'émerveillement.",
    auteur: "Socrate(470-399 avant notre ère) est un philosophe qui est l'un des fondateur de la philosophie morale. Socrate n'a laissé aucun écrit, sa pensée est transmise par le bouche à oreilles et par ses disciples Platon et Xénophon.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le premier savoir est le savoir de mon ignorance; c'est le début de l'intelligence.",
    auteur: "Socrate(470-399 avant notre ère) est un philosophe qui est l'un des fondateur de la philosophie morale. Socrate n'a laissé aucun écrit, sa pensée est transmise par le bouche à oreilles et par ses disciples Platon et Xénophon.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Les bienfaits que nous avons reçus de nos parents sont les plus grands de tous.",
    auteur: "Socrate(470-399 avant notre ère) est un philosophe qui est l'un des fondateur de la philosophie morale. Socrate n'a laissé aucun écrit, sa pensée est transmise par le bouche à oreilles et par ses disciples Platon et Xénophon.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "L'amour seul connaît le secret de s'enrichir en donnant.",
    auteur: "Socrate(470-399 avant notre ère) est un philosophe qui est l'un des fondateur de la philosophie morale. Socrate n'a laissé aucun écrit, sa pensée est transmise par le bouche à oreilles et par ses disciples Platon et Xénophon.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Le secret du changement, c'est de concentrer toute votre énergie non pas à lutter contre le passé, mais à construire l'avenir.",
    auteur: "Socrate(470-399 avant notre ère) est un philosophe qui est l'un des fondateur de la philosophie morale. Socrate n'a laissé aucun écrit, sa pensée est transmise par le bouche à oreilles et par ses disciples Platon et Xénophon.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Beaucoup pensent à vivre longtemps, peu à bien vivre.",
    auteur: "Socrate(470-399 avant notre ère) est un philosophe qui est l'un des fondateur de la philosophie morale. Socrate n'a laissé aucun écrit, sa pensée est transmise par le bouche à oreilles et par ses disciples Platon et Xénophon.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Un trésor de belles maximes est préférable à un amas de richesses.",
    auteur: "Socrate(470-399 avant notre ère) est un philosophe qui est l'un des fondateur de la philosophie morale. Socrate n'a laissé aucun écrit, sa pensée est transmise par le bouche à oreilles et par ses disciples Platon et Xénophon.",
    categorie: ["tous", ],
  },
  {
    texte: "Ecoutez simplement votre coeur, votre intuition. Dans le voyage de la vie, ils sont vos seuls guides.",
    auteur: "Osho(1931-1990) est un écrivain indien qui fonda un centre spirituel en Oregon. Il est le créateur de ce qu'il nomma \"méditation dynamique\".",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Je ne connais pas de plus grande valeur que celle qui consiste à regarder à l'intérieur de notre être.",
    auteur: "Osho(1931-1990) est un écrivain indien qui fonda un centre spirituel en Oregon. Il est le créateur de ce qu'il nomma \"méditation dynamique\".",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "L'amour est comme un oiseau libre d'aller partout, le ciel tout entier est sa liberté.",
    auteur: "Osho(1931-1990) est un écrivain indien qui fonda un centre spirituel en Oregon. Il est le créateur de ce qu'il nomma \"méditation dynamique\".",
    categorie: ["tous", "liberte", "sensibilite"],
  },
  {
    texte: "Si tu aimes une fleur, ne la cueille pas. Si tu l'aimes, laisse-la vivre. L'amour n'est pas la possession. L'amour, c'est apprécier ce qui est.",
    auteur: "Osho(1931-1990) est un écrivain indien qui fonda un centre spirituel en Oregon. Il est le créateur de ce qu'il nomma \"méditation dynamique\".",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "La vie en elle-même est une toile vide. Elle devient ce que vous peignez dessus. Vous pouvez peindre la misère ou vous pouvez peindre la joie. Cette liberté est votre splendeur.",
    auteur: "Osho(1931-1990) est un écrivain indien qui fonda un centre spirituel en Oregon. Il est le créateur de ce qu'il nomma \"méditation dynamique\".",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Vous ne pouvez être que ce que vous êtes. Détentez-vous! L'existence a besoin de vous tel que vous êtes.",
    auteur: "Osho(1931-1990) est un écrivain indien qui fonda un centre spirituel en Oregon. Il est le créateur de ce qu'il nomma \"méditation dynamique\".",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Si vous devenez une lumière, ce n'est pas seulement votre vie à vous qui sera illuminée, mais aussi tous ceux qui vous entourent. Beaucoup pourront, grâce à vous, faire le voyage et atteindre leur but.",
    auteur: "Osho(1931-1990) est un écrivain indien qui fonda un centre spirituel en Oregon. Il est le créateur de ce qu'il nomma \"méditation dynamique\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Que chaque événement de votre vie vous apprenne quelque chose.",
    auteur: "Osho(1931-1990) est un écrivain indien qui fonda un centre spirituel en Oregon. Il est le créateur de ce qu'il nomma \"méditation dynamique\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'oeil plein de préjugés est aveugle, le coeur plein de conclusions est mort.",
    auteur: "Osho(1931-1990) est un écrivain indien qui fonda un centre spirituel en Oregon. Il est le créateur de ce qu'il nomma \"méditation dynamique\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La vie ne vous suit pas, vous devez suivre la vie.",
    auteur: "Osho(1931-1990) est un écrivain indien qui fonda un centre spirituel en Oregon. Il est le créateur de ce qu'il nomma \"méditation dynamique\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La vie est ainsi. Vous ne pouvez pas vous y préparer, vous ne pouvez pas être prêt. C'est cela sa beauté, elle vous surprend toujours.",
    auteur: "Osho(1931-1990) est un écrivain indien qui fonda un centre spirituel en Oregon. Il est le créateur de ce qu'il nomma \"méditation dynamique\".",
    categorie: ["tous", "courage"],
  },
  {
    texte: "La vie commence là où finit la peur.",
    auteur: "Osho(1931-1990) est un écrivain indien qui fonda un centre spirituel en Oregon. Il est le créateur de ce qu'il nomma \"méditation dynamique\".",
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "La vie est une aventure, une exploration permanente à travers les épreuves et les erreurs. C'est sa véritable joie, son vrai nectar !",
    auteur: "Osho(1931-1990) est un écrivain indien qui fonda un centre spirituel en Oregon. Il est le créateur de ce qu'il nomma \"méditation dynamique\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Vous devez vivre chaque instant comme si c est le dernier.",
    auteur: "Osho(1931-1990) est un écrivain indien qui fonda un centre spirituel en Oregon. Il est le créateur de ce qu'il nomma \"méditation dynamique\".",
    categorie: ["tous", ],
  },
  {
    texte: "La vraie question n'est pas de savoir si la vie existe après la mort mais de savoir si vous êtes en vie avant la mort.",
    auteur: "Osho(1931-1990) est un écrivain indien qui fonda un centre spirituel en Oregon. Il est le créateur de ce qu'il nomma \"méditation dynamique\".",
    categorie: ["tous", "bonheur", "sagesse", "morale"],
  },
  {
    texte: "Personne ne peut donner un sens à votre vie, c'est votre vie, le sens doit vous appartenir.",
    auteur: "Osho(1931-1990) est un écrivain indien qui fonda un centre spirituel en Oregon. Il est le créateur de ce qu'il nomma \"méditation dynamique\".",
    categorie: ["tous", ],
  },
  {
    texte: "La plus grande peur dans le monde est celle du jugement des autres. A partir du moment où vous n'avez plus peur de ce jugement, alors vous n'êtes plus un mouton, vous devenez un lion. Un grand rugissement émane de votre coeur. Le rugissement de la liberté",
    auteur: "Osho(1931-1990) est un écrivain indien qui fonda un centre spirituel en Oregon. Il est le créateur de ce qu'il nomma \"méditation dynamique\".",
    categorie: ["tous", "courage", "liberté"],
  },
  {
    texte: "Il n'y a personne qui soit né sous une mauvaise étoile, Il n'y a que des gens qui ne savent pas lire le ciel.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Si tu veux connaître quelqu'un, n'écoute pas ce qu'il dit, mais regarde ce qu'il fait.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Si vous avez l'impression d'être trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique et vous verrez lequel des deux empêche l'autre de dormir.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "J'appelle l'amour et la compassion une religion universelle. Telle est ma religion.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous"],
  },
  {
    texte: "Nul besoin de temples, nul besoin de philosophies compliquées. Notre cerveau et notre coeur sont nos temples.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Il y'a deux jours dans une année où l'on ne peut rien faire. Ils s'appellent hier et demain. Aujourd'hui est le jour idéal pour aimer, croire, faire et surtout vivre.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Chacun à la responsabilité de faire croître la paix en lui afin que la paix devienne générale.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Nous appartenons tous à la grande famille humaine.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Pour jouir d'une vie heureuse et accomplie, la clé est l'état d'esprit. C'est là l'essentiel.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "Certains regardent la vase au fond de l'étang, d'autres contemplent la fleur à la surface de l'eau, il s'agit d'un choix.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous"],
  },
  {
    texte: "Le vrai bonheur ne dépend d'aucun être, d'aucun objet extérieur. Il ne dépend que de nous.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Ne laissez pas le comportement des autres détruire votre paix intérieure.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "On s'intéresse à ses membres comme parties de son corps, pourquoi pas aux hommes comme parties de l'humanité ?",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous"],
  },
  {
    texte: "Si vous le pouvez, mettez-vous au service des autres. Sinon, abstenez-vous de leur faire du mal.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Nos véritables ennemis sont les poisons mentaux: l'ignorance, la haine, la jalousie, l'orgueil.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'esprit c'est comme un parachute. Ca marche mieux quand c'est ouvert.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Il n'importe pas qu'un être soit croyant ou non: il est plus important qu'il soit bon.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Le chemin vers le bonheur, c'est l'altruisme. Le désir d'être au service du bien-être des autres.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous", "bonheur", "sagesse"],
  },
  {
    texte: "Nous avons besoin les uns des autres, nous sommes responsables les uns des autres.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous"],
  },
  {
    texte: "Le respect mutuel est le fondement de la véritable harmonie.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous"],
  },
  {
    texte: "Vous êtes maître de votre vie et qu'importe votre prison, vous en avez la clé.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Le Monde appartient à l'humanité. Il n'appartient pas à une chef, que ce soit un roi, un prince ou un chef religieux. Le Monde appartient à l'humanité",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "On peut conquérir des milliers d'hommes dans une bataille, mais celui qui se conquiert lui-même, lui seul est le plus noble des conquérants.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "L'important pour les hommes est d'avoir un but dans la vie. Ce but devrait être quelque chose d'utile, quelque chose de bon.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Le bonheur n'est pas une chose toute faîte; il découle de tes propres actions.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "Plus nous aurons donné de sens à notre vie, moins nous éprouverons de regrets à l'instant de la mort.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous"],
  },
  {
    texte: "Prenez en compte que le grand amour et les grandes réussites impliquent de grands risques.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Lorsque vous échouez, n'échouez pas la leçon.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Ouvrez vos bras au changement, mais ne laissez pas s'envoler vos valeurs.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Détermination et espoir sont les facteurs clés d'un meilleur avenir.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Rappellez-vous que le silence est parfois la meilleure réponse.",
    auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
    categorie: ["tous"],
  },
  {
    texte: "L'important c'est d'avoir des rêves assez grands pour ne pas les perdre de vue lorsqu'on les poursuit.",
    auteur: "Oscar Wilde(1854-1900) est un écrivain et un poète. Il s'est inséré dans les cercles cultivés et la bonne société et réussi à s'illustrer dans plusieurs genres littéraires.",
    categorie: ["tous", "reve"],
  },
  {
    texte: "Vivre est la chose la plus rare du monde. La plupart des gens ne font qu'exister.",
    auteur: "Oscar Wilde(1854-1900) est un écrivain et un poète. Il s'est inséré dans les cercles cultivés et la bonne société et réussi à s'illustrer dans plusieurs genres littéraires.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "La beauté est dans les yeux de celui qui regarde.",
    auteur: "Oscar Wilde(1854-1900) est un écrivain et un poète. Il s'est inséré dans les cercles cultivés et la bonne société et réussi à s'illustrer dans plusieurs genres littéraires.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Toute réussite nous attire un ennemi. C'est la médiocrité qui entraine la popularité.",
    auteur: "Oscar Wilde(1854-1900) est un écrivain et un poète. Il s'est inséré dans les cercles cultivés et la bonne société et réussi à s'illustrer dans plusieurs genres littéraires.",
    categorie: ["tous", ],
  },
  {
    texte: "Aucune carte du monde n'est digne d'un regard si le pays de l'utopie n'y figure pas.",
    auteur: "Oscar Wilde(1854-1900) est un écrivain et un poète. Il s'est inséré dans les cercles cultivés et la bonne société et réussi à s'illustrer dans plusieurs genres littéraires.",
    categorie: ["tous", "reve"],
  },
  {
    texte: "Je suis parfaitement heureux tout seul. Avec la liberté, des fleurs, des livres et la lune, qui ne serait pas parfaitement heureux ?",
    auteur: "Oscar Wilde(1854-1900) est un écrivain et un poète. Il s'est inséré dans les cercles cultivés et la bonne société et réussi à s'illustrer dans plusieurs genres littéraires.",
    categorie: ["tous", "bonheur", "liberte"],
  },
  {
    texte: "Soyez vous-même, les autres sont déjà pris.",
    auteur: "Oscar Wilde(1854-1900) est un écrivain et un poète. Il s'est inséré dans les cercles cultivés et la bonne société et réussi à s'illustrer dans plusieurs genres littéraires.",
    categorie: ["tous", ],
  },
  {
    texte: "Douter, c'est vivre. Etre bercé par la certitude, c'est mourir.",
    auteur: "Oscar Wilde(1854-1900) est un écrivain et un poète. Il s'est inséré dans les cercles cultivés et la bonne société et réussi à s'illustrer dans plusieurs genres littéraires.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Il faut viser la lune, parce qu'au moins, si vous echouez, vous finirez dans les étoiles.",
    auteur: "Oscar Wilde(1854-1900) est un écrivain et un poète. Il s'est inséré dans les cercles cultivés et la bonne société et réussi à s'illustrer dans plusieurs genres littéraires.",
    categorie: ["tous", "reve"],
  },
  {
    texte: "Il ne faut pas attendre d'être parfait pour commencer quelque chose de bien.",
    auteur: "Abbé Pierre(1912-2007) est un prêtre catholique et mena une lutte contre l'exclusion.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Mille victoires sur milles ennemis ne valent pas une seule victoire sur soi-même.",
    auteur: "Bouddha désigne une personne qui par sa sagesse à réussi à s'éveiller et atteint le nirvana. L'appellation de bouddha peut donc se référer à plusieurs personnes.",
    categorie: ["tous", "courage", "morale"],
  },
  {
    texte: "Soyez à vous-même votre propre refuge. Soyez à vous-même votre propre lumière.",
    auteur: "Bouddha désigne une personne qui par sa sagesse à réussi à s'éveiller et atteint le nirvana. L'appellation de bouddha peut donc se référer à plusieurs personnes.",
    categorie: ["tous"],
  },
  {
    texte: "Quelle est la différence entre \"je t'adore\" et \"je t'aime\"? Bouddha y'a magnifiquement répondu: Quand vous adorez une fleur, vous l'arrachez. Mais quand vous aimez une fleur, vous l'arrosez tous les jours. Celui qui comprend ça, comprend la vie...",
    auteur: "Bouddha désigne une personne qui par sa sagesse à réussi à s'éveiller et atteint le nirvana. L'appellation de bouddha peut donc se référer à plusieurs personnes.",
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Dans la vie, nous ne pouvons échapper au changement ou à la perte; la liberté et le bonheur sont à la mesure de la souplesse et de l'aisance avec lesquelles nous accueillons le changement.",
    auteur: "Bouddha désigne une personne qui par sa sagesse à réussi à s'éveiller et atteint le nirvana. L'appellation de bouddha peut donc se référer à plusieurs personnes.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Si tu laisses reposer une eau boueuse, elle s'eclaircira; de même, si tu laisses reposer ton esprit troublé, la chose à faire t'apparaîtra clairement.",
    auteur: "Bouddha désigne une personne qui par sa sagesse à réussi à s'éveiller et atteint le nirvana. L'appellation de bouddha peut donc se référer à plusieurs personnes.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Chaque matin, nous renaissons à nouveau, ce que nous faisons aujourd'hui est ce qui importe le plus.",
    auteur: "Bouddha désigne une personne qui par sa sagesse à réussi à s'éveiller et atteint le nirvana. L'appellation de bouddha peut donc se référer à plusieurs personnes.",
    categorie: ["tous"],
  },
  {
    texte: "Quelles qu'aient été les difficultés du passé, tu peux toujours recommencer à zéro aujourd'hui.",
    auteur: "Bouddha désigne une personne qui par sa sagesse à réussi à s'éveiller et atteint le nirvana. L'appellation de bouddha peut donc se référer à plusieurs personnes.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "De même que le serpent se défait de sa peau, nous devons constamment nous défaire de notre passé.",
    auteur: "Bouddha désigne une personne qui par sa sagesse à réussi à s'éveiller et atteint le nirvana. L'appellation de bouddha peut donc se référer à plusieurs personnes.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Celui qui est maître de lui-même est plus grand que celui qui est le maître du monde.",
    auteur: "Bouddha désigne une personne qui par sa sagesse à réussi à s'éveiller et atteint le nirvana. L'appellation de bouddha peut donc se référer à plusieurs personnes.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La paix vient de l'intérieur, ne la cherchez pas à l'extérieur.",
    auteur: "Bouddha désigne une personne qui par sa sagesse à réussi à s'éveiller et atteint le nirvana. L'appellation de bouddha peut donc se référer à plusieurs personnes.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Il n'y a pas de feu plus féroce que l'envie et la haine.",
    auteur: "Bouddha désigne une personne qui par sa sagesse à réussi à s'éveiller et atteint le nirvana. L'appellation de bouddha peut donc se référer à plusieurs personnes.",
    categorie: ["tous", "bonheur", "morale"],
  },
  {
    texte: "Ne crois pas ce que je te dis, ne rejette pas ce que je te dis; ce qui restera sera ta vérité.",
    auteur: "Bouddha désigne une personne qui par sa sagesse à réussi à s'éveiller et atteint le nirvana. L'appellation de bouddha peut donc se référer à plusieurs personnes.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Accepte ce qui est, laisse aller ce qui était, aie confiance en ce qui sera.",
    auteur: "Bouddha désigne une personne qui par sa sagesse à réussi à s'éveiller et atteint le nirvana. L'appellation de bouddha peut donc se référer à plusieurs personnes.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "La vie peut-être merveilleuse si on n'en a pas peur.",
    auteur: "Charlie Chaplin(1889-1977) est un acteur, réalisateur et compositeur. Il acquiert une large notoriété durant sa carrière d'acteur.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Créé un chemin pour la venue des jours positifs.",
    auteur: "Bob Marley(1945-1981) est un auteur-compositeur et un musicien jamaïcain. Il s'agit du musicien le plus connu mondialement ayant joué du reggae.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Ne conquiers pas le monde si tu dois y perdre ton âme, la sagesse vaut mieux que l'or et l'argent.",
    auteur: "Bob Marley(1945-1981) est un auteur-compositeur et un musicien jamaïcain. Il s'agit du musicien le plus connu mondialement ayant joué du reggae.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Tu ne sais jamais à quel point tu es fort jusqu'au jour où être fort reste la seule option.",
    auteur: "Bob Marley(1945-1981) est un auteur-compositeur et un musicien jamaïcain. Il s'agit du musicien le plus connu mondialement ayant joué du reggae.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Essai de devenir ce que tu veux plutôt que de devenir ce qu'ils veulent que tu deviennes.",
    auteur: "Bob Marley(1945-1981) est un auteur-compositeur et un musicien jamaïcain. Il s'agit du musicien le plus connu mondialement ayant joué du reggae.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Ne vis pas pour que ta présence se remarque, mais pour que ton absence se ressente.",
    auteur: "Bob Marley(1945-1981) est un auteur-compositeur et un musicien jamaïcain. Il s'agit du musicien le plus connu mondialement ayant joué du reggae.",
    categorie: ["tous"],
  },
  {
    texte: "Qui es-tu pour me juger ? Avant de pointer du doigt, vérifie que tes mains sont propres.",
    auteur: "Bob Marley(1945-1981) est un auteur-compositeur et un musicien jamaïcain. Il s'agit du musicien le plus connu mondialement ayant joué du reggae.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Emancipe toi de l'esclavage mental, nul autre que toi-même ne peut libérer ton esprit.",
    auteur: "Bob Marley(1945-1981) est un auteur-compositeur et un musicien jamaïcain. Il s'agit du musicien le plus connu mondialement ayant joué du reggae.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "La grandeur d'un homme ne se situe pas dans la richesse qu'il acquiert mais dans son intégrité et sa capacité à affecter positivement ceux qui l'entourent.",
    auteur: "Bob Marley(1945-1981) est un auteur-compositeur et un musicien jamaïcain. Il s'agit du musicien le plus connu mondialement ayant joué du reggae.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "S'il y'a un problème, il y'a une solution. S'il n'y a pas de solution, c'est qu'il n'y a pas de problème.",
    auteur: "Bob Marley(1945-1981) est un auteur-compositeur et un musicien jamaïcain. Il s'agit du musicien le plus connu mondialement ayant joué du reggae.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Les chiens et les chats arrivent à vivre ensemble, alors qu'est ce qui cloche chez toi, mon frère ?",
    auteur: "Bob Marley(1945-1981) est un auteur-compositeur et un musicien jamaïcain. Il s'agit du musicien le plus connu mondialement ayant joué du reggae.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Si quelque chose peut te corrompre, c'est que tu es déjà corrompu.",
    auteur: "Bob Marley(1945-1981) est un auteur-compositeur et un musicien jamaïcain. Il s'agit du musicien le plus connu mondialement ayant joué du reggae.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Ce qui fait le plus de mal aux hommes, ce sont les vanités matérielles.",
    auteur: "Bob Marley(1945-1981) est un auteur-compositeur et un musicien jamaïcain. Il s'agit du musicien le plus connu mondialement ayant joué du reggae.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Certaines personnes aiment le pouvoir. D'autres ont le pouvoir d'aimer.",
    auteur: "Bob Marley(1945-1981) est un auteur-compositeur et un musicien jamaïcain. Il s'agit du musicien le plus connu mondialement ayant joué du reggae.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "L'homme est un univers en lui-même.",
    auteur: "Bob Marley(1945-1981) est un auteur-compositeur et un musicien jamaïcain. Il s'agit du musicien le plus connu mondialement ayant joué du reggae.",
    categorie: ["tous"],
  },
  {
    texte: "Je n'ai pas beaucoup d'ambition mais une chose me ferait plaisir, ce serait que les hommes vivent en paix.",
    auteur: "Bob Marley(1945-1981) est un auteur-compositeur et un musicien jamaïcain. Il s'agit du musicien le plus connu mondialement ayant joué du reggae.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Il ne faut appeller richesses les choses que l'on peut perdre.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'expérience prouve que celui qui n'a jamais confiance en personne ne sera jamais déçu.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'homme ne trouvera jamais une invention plus belle, plus simple ou plus directe que la nature car dans ses inventions rien ne manque et rien n'est excessif.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Les détails font la perfection, et la perfection n'est pas un détail.",
    categorie: ["tous", ""],
  },
  {
    texte: "Sachez vous éloigner car, lorsque vous reviendrez à votre travail, votre jugement sera plus sûr.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Celui qui s'oriente sur l'étoile ne se retourne pas.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Surtout, soyez toujours capables de ressentir au plus profond de votre coeur n'importe qu'elle injustice commise contre n'importe qui, où que ce soit dans le monde. C'est la plus belle qualité d'une révolutionnaire.",
    auteur: "Che Guevara(1928-1967) est un révolutionnaire et a été un dirigeant de la révolution cubaine dans le but d'abolir les inégalités.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Celui qui n'a pas le courage de se rebeller n'a pas le droit de se lamenter.",
    auteur: "Che Guevara(1928-1967) est un révolutionnaire et a été un dirigeant de la révolution cubaine dans le but d'abolir les inégalités.",
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "Que le monde te change et tu peux changer le monde.",
    auteur: "Che Guevara(1928-1967) est un révolutionnaire et a été un dirigeant de la révolution cubaine dans le but d'abolir les inégalités.",
    categorie: ["tous"],
  },
  {
    texte: "Le premier devoir d'un révolutionnaire est d'être éduqué.",
    auteur: "Che Guevara(1928-1967) est un révolutionnaire et a été un dirigeant de la révolution cubaine dans le but d'abolir les inégalités.",
    categorie: ["tous", "liberte", "sagesse"],
  },
  {
    texte: "Si tu peux trouver des chemins sans aucun obstacles, il mène probablement nulle part.",
    auteur: "Che Guevara(1928-1967) est un révolutionnaire et a été un dirigeant de la révolution cubaine dans le but d'abolir les inégalités.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Suivez votre coeur et votre intuition, l'un et l'autre savent ce que vous voulez devenir.",
    auteur: "Steve Jobs(1955-2011) est un entrepreneur et inventeur qui a été président-directeur général de Pixar Animation Studios, Apple et NeXT.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Votre temps est limité, ne le gaspillez donc pas à vivre la vie de quelqu'un d'autre.",
    auteur: "Steve Jobs(1955-2011) est un entrepreneur et inventeur qui a été président-directeur général de Pixar Animation Studios, Apple et NeXT.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Votre temps est limité, ne le gaspillez donc pas à vivre la vie de quelqu'un d'autre.",
    auteur: "Steve Jobs(1955-2011) est un entrepreneur et inventeur qui a été président-directeur général de Pixar Animation Studios, Apple et NeXT.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Ne laissez pas le brouhaha extérieur étouffer votre voix intérieure.",
    auteur: "Steve Jobs(1955-2011) est un entrepreneur et inventeur qui a été président-directeur général de Pixar Animation Studios, Apple et NeXT.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Ne soyez pas prisonniers des dogmes qui obligent à vivre en obéissant à la pensée d'autrui.",
    auteur: "Steve Jobs(1955-2011) est un entrepreneur et inventeur qui a été président-directeur général de Pixar Animation Studios, Apple et NeXT.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Soyez insatiables. Soyez fous. Ce n'est pas dans le statu quo qu'on préparera un avenir meilleur.",
    auteur: "Steve Jobs(1955-2011) est un entrepreneur et inventeur qui a été président-directeur général de Pixar Animation Studios, Apple et NeXT.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Inventons demain plutôt que de passer notre temps à nous soucier de ce qui s'est passé hier.",
    auteur: "Steve Jobs(1955-2011) est un entrepreneur et inventeur qui a été président-directeur général de Pixar Animation Studios, Apple et NeXT.",
    categorie: ["tous", ],
  },
  {
    texte: "L'innovation, c'est ce qui distingue un leader d'un suiveur.",
    auteur: "Steve Jobs(1955-2011) est un entrepreneur et inventeur qui a été président-directeur général de Pixar Animation Studios, Apple et NeXT.",
    categorie: ["tous", ],
  },
  {
    texte: "Si vous faites quelque chose de super, ne restez pas trop longtemps attaché à ce succès... Pensez déjà au prochain challenge !",
    auteur: "Steve Jobs(1955-2011) est un entrepreneur et inventeur qui a été président-directeur général de Pixar Animation Studios, Apple et NeXT.",
    categorie: ["tous", ],
  },
  {
    texte: "Je suis convaincu qu'au moins la moitié de ce qui sépare les entrepreneurs qui réussissent de ceux qui ne réussissent pas est de la pure persévérance.",
    auteur: "Steve Jobs(1955-2011) est un entrepreneur et inventeur qui a été président-directeur général de Pixar Animation Studios, Apple et NeXT.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Si vous regardez avec attention, la plupart des succès obtenus du jour au lendemain prennent beaucoup de temps.",
    auteur: "Steve Jobs(1955-2011) est un entrepreneur et inventeur qui a été président-directeur général de Pixar Animation Studios, Apple et NeXT.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "La seule façon de faire un grand travail est d'aimer ce que vous faites. Si vous ne l'avez pas encore trouvé, continuez à chercher.",
    auteur: "Steve Jobs(1955-2011) est un entrepreneur et inventeur qui a été président-directeur général de Pixar Animation Studios, Apple et NeXT.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Décider de ce que l'on ne doit plus faire est aussi important que de décider quoi faire.",
    auteur: "Steve Jobs(1955-2011) est un entrepreneur et inventeur qui a été président-directeur général de Pixar Animation Studios, Apple et NeXT.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Si vous ne travaillez pas pour vos rêves, quelqu'un vous embauchera pour travailler pour les siens.",
    auteur: "Steve Jobs(1955-2011) est un entrepreneur et inventeur qui a été président-directeur général de Pixar Animation Studios, Apple et NeXT.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Faire simple peut être plus difficile que de faire complexe car vous devez travailler dur pour épurer votre façon de penser.",
    auteur: "Steve Jobs(1955-2011) est un entrepreneur et inventeur qui a été président-directeur général de Pixar Animation Studios, Apple et NeXT.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Vous devez croire en quelque chose: vos tripes, votre destin, votre karma, la vie, peu importe. Cette approche ne m'a jamais déçu et a fait toute la différence.",
    auteur: "Steve Jobs(1955-2011) est un entrepreneur et inventeur qui a été président-directeur général de Pixar Animation Studios, Apple et NeXT.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Il y'a toujours puisque je le dis, puisque je l'affirme, au bout du chagrin, une fenêtre ouverte.",
    auteur: "Mère Teresa(1910-1997) est une religieuse catholique qui a été prix nobel de la paix en 1979. Pendant plus de 40 ans, elle consacre sa vie aux pauvres et aux malades.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Sois fidèle dans les petites choses parce que c'est en elle que ta force réside.",
    auteur: "Mère Teresa(1910-1997) est une religieuse catholique qui a été prix nobel de la paix en 1979. Pendant plus de 40 ans, elle consacre sa vie aux pauvres et aux malades.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Le succès c'est d'aller d'échec en échec sans perdre son enthousiasme.",
    auteur: "Winston Churchill(1874-1965) est un homme politique et un écrivain britannique. Il est premier ministre du Royaume-Uni de mai 1940 à juillet 1945 puis d'octobre 1951 à avril 1955.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit l'opportunité dans chaque difficulté.",
    auteur: "Winston Churchill(1874-1965) est un homme politique et un écrivain britannique. Il est premier ministre du Royaume-Uni de mai 1940 à juillet 1945 puis d'octobre 1951 à avril 1955.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Il est une bonne chose de lire des livres de citations, car les citations lorqu'elles sont gravées dans la mémoire vous donnent de bonnes pensées.",
    auteur: "Winston Churchill(1874-1965) est un homme politique et un écrivain britannique. Il est premier ministre du Royaume-Uni de mai 1940 à juillet 1945 puis d'octobre 1951 à avril 1955.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'Histoire me sera indulgente, car j'ai l'intention de l'écrire.",
    auteur: "Winston Churchill(1874-1965) est un homme politique et un écrivain britannique. Il est premier ministre du Royaume-Uni de mai 1940 à juillet 1945 puis d'octobre 1951 à avril 1955.",
    categorie: ["tous", ],
  },
  {
    texte: "Agissez comme s'il est impossible d'échouer.",
    auteur: "Winston Churchill(1874-1965) est un homme politique et un écrivain britannique. Il est premier ministre du Royaume-Uni de mai 1940 à juillet 1945 puis d'octobre 1951 à avril 1955.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Plus vous saurez regarder loin dans le passé. Plus vous verrez loin dans le futur.",
    auteur: "Winston Churchill(1874-1965) est un homme politique et un écrivain britannique. Il est premier ministre du Royaume-Uni de mai 1940 à juillet 1945 puis d'octobre 1951 à avril 1955.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La grande leçon de la vie. C'est que parfois, ce sont les fous qui ont raison.",
    auteur: "Winston Churchill(1874-1965) est un homme politique et un écrivain britannique. Il est premier ministre du Royaume-Uni de mai 1940 à juillet 1945 puis d'octobre 1951 à avril 1955.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Construire peut être le fruit d'un travail long et acharné. Détruire peut être l'oeuvre d'une seule journée.",
    auteur: "Winston Churchill(1874-1965) est un homme politique et un écrivain britannique. Il est premier ministre du Royaume-Uni de mai 1940 à juillet 1945 puis d'octobre 1951 à avril 1955.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Ce n'est que quand il fait nuit que les étoiles brillent.",
    auteur: "Winston Churchill(1874-1965) est un homme politique et un écrivain britannique. Il est premier ministre du Royaume-Uni de mai 1940 à juillet 1945 puis d'octobre 1951 à avril 1955.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Pour s'améliorer, il faut changer. Donc, pour être parfait, il faut avoir changé souvent.",
    auteur: "Winston Churchill(1874-1965) est un homme politique et un écrivain britannique. Il est premier ministre du Royaume-Uni de mai 1940 à juillet 1945 puis d'octobre 1951 à avril 1955.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Je ne crois aux statistiques que lorsque je les ai moi-même falsifiées.",
    auteur: "Winston Churchill(1874-1965) est un homme politique et un écrivain britannique. Il est premier ministre du Royaume-Uni de mai 1940 à juillet 1945 puis d'octobre 1951 à avril 1955.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le succès n'est pas final, l'échec n'est pas fatal: c'est le courage de continuer qui compte.",
    auteur: "Winston Churchill(1874-1965) est un homme politique et un écrivain britannique. Il est premier ministre du Royaume-Uni de mai 1940 à juillet 1945 puis d'octobre 1951 à avril 1955.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Jamais jamais jamais. N'abandonnez jamais.",
    auteur: "Winston Churchill(1874-1965) est un homme politique et un écrivain britannique. Il est premier ministre du Royaume-Uni de mai 1940 à juillet 1945 puis d'octobre 1951 à avril 1955.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Il n'existe pas d'occasion unique, le vie offre toujours une seconde chance.",
    auteur: "Paulo Coelho né en 1947 est un romancier et journaliste qui connait une renommée internationale depuis la publication de l'Alchimiste.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "C'est justement la possibilité de réaliser un rêve qui rend la vie intéressante.",
    auteur: "Paulo Coelho né en 1947 est un romancier et journaliste qui connait une renommée internationale depuis la publication de l'Alchimiste.",
    categorie: ["tous", "reve"],
  },
  {
    texte: "J'ai appris depuis longtemps que, pour soigner mes blessures, je devais avoir le courage de les regarder en face.",
    auteur: "Paulo Coelho né en 1947 est un romancier et journaliste qui connait une renommée internationale depuis la publication de l'Alchimiste.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Celui qui veut voir l'arc-en-ciel doit apprendre à aimer la pluie.",
    auteur: "Paulo Coelho né en 1947 est un romancier et journaliste qui connait une renommée internationale depuis la publication de l'Alchimiste.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Personne ne peut fuir son coeur, c'est pourquoi il vaut mieux écouter ce qu'il dit.",
    auteur: "Paulo Coelho né en 1947 est un romancier et journaliste qui connait une renommée internationale depuis la publication de l'Alchimiste.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Ne perds pas ton temps avec des explications; les gens entendent ce qu'ils veulent entendre.",
    auteur: "Paulo Coelho né en 1947 est un romancier et journaliste qui connait une renommée internationale depuis la publication de l'Alchimiste.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Quand on en peut revenir en arrière, on doit se préoccuper de la meilleure manière d'aller de l'avant.",
    auteur: "Paulo Coelho né en 1947 est un romancier et journaliste qui connait une renommée internationale depuis la publication de l'Alchimiste.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Si vous êtes assez courageux pour dire \"au revoir\", la vie vous récompensera avec un nouveau bonjour.",
    auteur: "Paulo Coelho né en 1947 est un romancier et journaliste qui connait une renommée internationale depuis la publication de l'Alchimiste.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Ne vous découragez pas; c'est souvent la dernière clef du trousseau qui ouvre la porte.",
    auteur: "Paulo Coelho né en 1947 est un romancier et journaliste qui connait une renommée internationale depuis la publication de l'Alchimiste.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Il faut prendre des risques. Nous ne comprenons vraiment le miracle de la vie que lorsque nous laissons arriver l'inattendu.",
    auteur: "Paulo Coelho né en 1947 est un romancier et journaliste qui connait une renommée internationale depuis la publication de l'Alchimiste.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Personne ne peut retourner en arrière, mais tout le monde peut aller de l'avant. Et demain, quand le soleil se lévera, il suffira de se répéter: je vais regarder cette journée comme si c'était la première de ma vie.",
    auteur: "Paulo Coelho né en 1947 est un romancier et journaliste qui connait une renommée internationale depuis la publication de l'Alchimiste.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Si vous pensez que l'aventure est dangereuse, essayez la routine, elle est mortelle.",
    auteur: "Paulo Coelho né en 1947 est un romancier et journaliste qui connait une renommée internationale depuis la publication de l'Alchimiste.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Si vous pouvez le rêver, vous pouvez le faire.",
    auteur: "Walt Disney(1901-1966) est l'un des pionniers de l'animation. Il créé la société Walt Disney Company et produit des films célèbres.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Si nous avons le courage de les poursuivre, tous les rêves deviennent réalité.",
    auteur: "Walt Disney(1901-1966) est l'un des pionniers de l'animation. Il créé la société Walt Disney Company et produit des films célèbres.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Garde tes rêves au plus profond de toi, et un jour ils se réaliseront.",
    auteur: "Walt Disney(1901-1966) est l'un des pionniers de l'animation. Il créé la société Walt Disney Company et produit des films célèbres.",
    categorie: ["tous", "reve"],
  },
  {
    texte: "La différence entre un rêve et un projet, c'est une date.",
    auteur: "Walt Disney(1901-1966) est l'un des pionniers de l'animation. Il créé la société Walt Disney Company et produit des films célèbres.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "La seule façon de commencer est d'arrêter de parler et de commencer à faire.",
    auteur: "Walt Disney(1901-1966) est l'un des pionniers de l'animation. Il créé la société Walt Disney Company et produit des films célèbres.",
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Rêve ta vie en couleur, c'est le secret du bonheur.",
    auteur: "Walt Disney(1901-1966) est l'un des pionniers de l'animation. Il créé la société Walt Disney Company et produit des films célèbres.",
    categorie: ["tous", "bonheur", "reve"],
  },
  {
    texte: "N'oubliez pas que tout commence avec les rêves.",
    auteur: "Walt Disney(1901-1966) est l'un des pionniers de l'animation. Il créé la société Walt Disney Company et produit des films célèbres.",
    categorie: ["tous", "reve"],
  },
  {
    texte: "Pense, crois, rêve et ose.",
    auteur: "Walt Disney(1901-1966) est l'un des pionniers de l'animation. Il créé la société Walt Disney Company et produit des films célèbres.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Le rire est intemporel. L'imagination n'a pas d'âge. Et les rêves sont éternels.",
    auteur: "Walt Disney(1901-1966) est l'un des pionniers de l'animation. Il créé la société Walt Disney Company et produit des films célèbres.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Tu ne traverseras jamais l'océan si tu as peur de perdre de vue le rivage.",
    auteur: "Christophe Colomb(1451-1506) est un explorateur et fut chargé d'atteindre l'Asie orientale en traversant l'océan Atlantique avec trois caravelles.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "L'imperfection est beauté, la folie est génie et il vaut mieux être totalement ridicule que totalement ennuyeux.",
    auteur: "Marilyn Monroe(1926-1962) est un actrice, chanteuse et mannequin américaine. Elle a acquis une grande notoriété grâce à sa carrière au cinéma.",
    categorie: ["tous", ],
  },
  {
    texte: "Dans la vie, rien n'est à craindre tout est à comprendre.",
    auteur: "Marie Curie(1867-1934) est une physicienne et chimiste qui obtient le prix nobel de chimie pour ses travaux sur le polonium et le radium et 1911.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Il faut faire de la vie un rêve et d'un rêve une réalité.",
    auteur: "Marie Curie(1867-1934) est une physicienne et chimiste qui obtient le prix nobel de chimie pour ses travaux sur le polonium et le radium et 1911.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Vous ne pouvez pas espérer construire un monde meilleur sans améliorer les individus.",
    auteur: "Marie Curie(1867-1934) est une physicienne et chimiste qui obtient le prix nobel de chimie pour ses travaux sur le polonium et le radium et 1911.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Ils ne savaient pas que c est impossible, alors ils l'ont fait.",
    auteur: "Mark Twain(1835-1910) est un écrivain américain qui s'est fait connaitre par son roman \"Les Aventures de Tom Sawyer\".",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Dans 20 ans, tu seras plus déçu par les choses que tu n'a pas faites que par celles qui tu auras faites. Alors, sors des sentiers battus. Mets les voiles. Explore. Rêve. Découvre",
    auteur: "Mark Twain(1835-1910) est un écrivain américain qui s'est fait connaitre par son roman \"Les Aventures de Tom Sawyer\".",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Chacun de nous est une lune avec une face cachée que personne ne voit.",
    auteur: "Mark Twain(1835-1910) est un écrivain américain qui s'est fait connaitre par son roman \"Les Aventures de Tom Sawyer\".",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Détournez-vous de ceux qui vous découragent de vos ambitions. C'est l'habitude des mesquins. Ceux qui sont vraiment grands vous font comprendre que vous aussi pouvez le devenir.",
    auteur: "Mark Twain(1835-1910) est un écrivain américain qui s'est fait connaitre par son roman \"Les Aventures de Tom Sawyer\".",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "La gentillesse est le langage qu'un sourd peut entendre et qu'un aveugle peut voir.",
    auteur: "Mark Twain(1835-1910) est un écrivain américain qui s'est fait connaitre par son roman \"Les Aventures de Tom Sawyer\".",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Il est curieux que le courage physique soit si répandu en ce monde et le courage moral si rare.",
    auteur: "Mark Twain(1835-1910) est un écrivain américain qui s'est fait connaitre par son roman \"Les Aventures de Tom Sawyer\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le danger, ce n'est pas ce qu'on ignore, c'est ce que l'on tient pour certain et qui ne l'est pas.",
    auteur: "Mark Twain(1835-1910) est un écrivain américain qui s'est fait connaitre par son roman \"Les Aventures de Tom Sawyer\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'homme est le plus cruel de tous les animaux, il est le seul capable d'infliger une douleur à ses congénères sans autre motif que le plaisir.",
    auteur: "Mark Twain(1835-1910) est un écrivain américain qui s'est fait connaitre par son roman \"Les Aventures de Tom Sawyer\".",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Le rôle d'un ami, c'est d'être à vos côtés quand vous êtes dans l'erreur, car tout le monde sera à côté de vous quand vous aurez raison.",
    auteur: "Mark Twain(1835-1910) est un écrivain américain qui s'est fait connaitre par son roman \"Les Aventures de Tom Sawyer\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Chaque fois que vous vous retrouvez du côté de la majorité, il est temps de vous arrêter et de réfléchir.",
    auteur: "Mark Twain(1835-1910) est un écrivain américain qui s'est fait connaitre par son roman \"Les Aventures de Tom Sawyer\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Les deux jours les plus importants de votre vie sont le jour de votre naissance et le jour où vous découvrez pourquoi vous êtes né.",
    auteur: "Mark Twain(1835-1910) est un écrivain américain qui s'est fait connaitre par son roman \"Les Aventures de Tom Sawyer\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le fait qu'un homme distingue le bien du mal prouve sa supériorité intellectuelle par rapport à toute autre créature; mais le fait qu'il puisse mal agir prouve l'infériorité de son esprit.",
    auteur: "Mark Twain(1835-1910) est un écrivain américain qui s'est fait connaitre par son roman \"Les Aventures de Tom Sawyer\".",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Concentrez-vous plus sur votre désir que sur votre doute, et le rêve prendra soin de lui-même.",
    auteur: "Mark Twain(1835-1910) est un écrivain américain qui s'est fait connaitre par son roman \"Les Aventures de Tom Sawyer\".",
    categorie: ["tous", "courage", "reve"],
  },

  {
    texte: "Rien n'est jamais fini, il suffit d'un peu de bonheur pour que tout recommence.",
    auteur: "Emile Zola(1840-1902) est un romancier trés populaire et ses romans ont connus de nombreuses adaptations au cinéma.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Il n'est pas de plus grande folie que de ne pas en avoir.",
    auteur: "Emile Zola(1840-1902) est un romancier trés populaire et ses romans ont connus de nombreuses adaptations au cinéma.",
    categorie: ["tous", ],
  },
  {
    texte: "La passion est encore ce qui aide le mieux à vivre.",
    auteur: "Emile Zola(1840-1902) est un romancier trés populaire et ses romans ont connus de nombreuses adaptations au cinéma.",
    categorie: ["tous", ],
  },
  {
    texte: "L'art est la libre expression d'un coeur et d'une intelligence, il est d'autant plus grand qu'il est plus personnel.",
    auteur: "Emile Zola(1840-1902) est un romancier trés populaire et ses romans ont connus de nombreuses adaptations au cinéma.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Une heure, une minute suffit pour que le destin agisse et change les défaites en victoires.",
    auteur: "Emile Zola(1840-1902) est un romancier trés populaire et ses romans ont connus de nombreuses adaptations au cinéma.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Les libertés ne se donnent pas, elles se prennent.",
    auteur: "Pierre Kropotkine(1842-1921) est un géographe et un théoricien. Il a était emprisonné plusieurs fois pour des activités révolutionnaires ou des grèves ouvrières.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Quiconque met la main sur moi pour me gouverner est un usurpateur et un tyran; je le déclare mon ennemi.",
    auteur: "Pierre-Joseph Proudhon(1809-1865) est un théoricien révolutionnaire et il est le précurseur de l'anarchisme.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Le fait de pouvoir élire librement des maîtres ne supprime ni les maîtres ni les esclaves.",
    auteur: "Herbert Marcuse(1898-1979) est un philosophe, sociologue et professeur d'université.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "L'Etat ne poursuit jamais qu'un but: limiter, enchaîner, assujettir, subordonner l'individu.",
    auteur: "Max Stirner(1806-1856) est un philosophe qui est un des précuseurs de l'existentialisme et de l'anarchisme individualiste.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Les prolétaires n'ont rien à perdre que leurs chaînes. Ils ont le monde à gagner. Prolétaires de tous les pays, unissez-vous !",
    auteur: "Karl Marx(1818-1883) est un philosophe, historien et théoricien. Il est célèbre pour ses analyses sur le capitalisme et la lutte des classes.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "La propriété privée nous a rendus si stupides et si bornés qu'un objet n'est nôtre que lorque nous le possédons.",
    auteur: "Karl Marx(1818-1883) est un philosophe, historien et théoricien. Il est célèbre pour ses analyses sur le capitalisme et la lutte des classes.",
    categorie: ["tous", ],
  },
  {
    texte: "L'histoire de toute société jusqu'à nos jours n'a été que l'histoire de luttes des classes.",
    auteur: "Karl Marx(1818-1883) est un philosophe, historien et théoricien. Il est célèbre pour ses analyses sur le capitalisme et la lutte des classes.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Le capital épuise deux choses, le travailleur et la nature.",
    auteur: "Karl Marx(1818-1883) est un philosophe, historien et théoricien. Il est célèbre pour ses analyses sur le capitalisme et la lutte des classes.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le domaine de la liberté commence là où s'arrête le travail déterminé par la nécessité.",
    auteur: "Karl Marx(1818-1883) est un philosophe, historien et théoricien. Il est célèbre pour ses analyses sur le capitalisme et la lutte des classes.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Une idée devient une force lorsqu'elle s'empare des masses.",
    auteur: "Karl Marx(1818-1883) est un philosophe, historien et théoricien. Il est célèbre pour ses analyses sur le capitalisme et la lutte des classes.",
    categorie: ["tous", ],
  },
  {
    texte: "Celui qui ne connaît pas l'histoire est condamné à la revivre.",
    auteur: "Karl Marx(1818-1883) est un philosophe, historien et théoricien. Il est célèbre pour ses analyses sur le capitalisme et la lutte des classes.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La révolution sera la floraison de l'humanité comme l'amour est la floraison du coeur.",
    auteur: "Louise Michel(1830-1905) est une militante anarchiste qui a été l'une des figures majeures de la commune de Paris.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Toutes les lois sont oppressives et criminelles. Elles ne protègent que les riches et les heureux.",
    auteur: "Octave Mirbeau(1848-1917) est un écrivain et journaliste français. Il s'agissait d'un journaliste influent qui connu un grand succès populaire.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "N'est-il pas évident que tous les gouvernements sont les empoisonneurs, les abêtisseurs intéressés des masses populaires ?",
    auteur: "Mikhail Bakounine(1814-1876) est un révolutionnaire et philosophe russe qui s'est principalement intéressé au rôle de l'Etat.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Disparaissez enfin, révoltantes distinctions de riches et de pauvres, de grands et de petits, de gouvernants et de gouvernés.",
    auteur: "Sylvain Maréchal(1750-1803) est un écrivain et poète qui est passionné par l'égalité sociale. C'est un précuseur de la grève générale.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Ils ne sont grands que parce que nous sommes à genoux.",
    auteur: "Etienne de la Boétie(1530-1563) est un écrivain, poète et juriste français. Il est célèbre pour son discours sur la servitude volontaire.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "C'est la liberté: bien si grand que dès qu'elle est perdue tous les maux s'ensuivent, et que, sans elle, tous les autres biens, corrompus par la servitude, perdent entièrement leur goût et leur saveur.",
    auteur: "Etienne de la Boétie(1530-1563) est un écrivain, poète et juriste français. Il est célèbre pour son discours sur la servitude volontaire.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Il n'y a que ceux qui ne bougent pas qui ne remarquent pas leurs chaînes.",
    auteur: "Rosa Luxemburg(1879-1919) est une militante socialiste et communiste. Elle s'opposa à la première guerre mondiale et fut exclu du parti social-démocrate d'Allemagne.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Le temps viendra où notre silence sera plus puissant que les voix que vous étranglez aujourd'hui.",
    auteur: "August Spies(1855-1887) est un militant socialiste américain qui fut pendu pour des raisons douteuses à la suite de l'attentat à la bombe contre la police à Haymarket Square.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "C'est parce qu'on imagine simultanément tous les pas qu'on devra faire qu'on se décourage, alors qu'il s'agit de les aligner un à un.",
    auteur: "Marcel Jouhandeau(1888-1979) est un écrivain qui a écrit plus d'une centaine d'ouvrages.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Quoi que vous rêviez d'entreprendre, commencez-le. L'audace a du génie, du pouvoir et de la magie.",
    auteur: "Johann Wolfgang von Goethe(1749-1832) est un romancier et un poète. Son oeuvre littéraire comprend de la poésie, du théâtre, de la théorie littéraire...",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Dans le domaine des idées, tout dépend de l'enthousiasme. Dans le monde réel, tout repose sur la persévérance.",
    auteur: "Johann Wolfgang von Goethe(1749-1832) est un romancier et un poète. Son oeuvre littéraire comprend de la poésie, du théâtre, de la théorie littéraire...",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Dès l'instant où vous aurez foi en vous-même, vous saurez comment vivre.",
    auteur: "Johann Wolfgang von Goethe(1749-1832) est un romancier et un poète. Son oeuvre littéraire comprend de la poésie, du théâtre, de la théorie littéraire...",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Dans la plénitude du bonheur, chaque jour est une vie entière.",
    auteur: "Johann Wolfgang von Goethe(1749-1832) est un romancier et un poète. Son oeuvre littéraire comprend de la poésie, du théâtre, de la théorie littéraire...",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Parler est un besoin, écouter est un art.",
    auteur: "Johann Wolfgang von Goethe(1749-1832) est un romancier et un poète. Son oeuvre littéraire comprend de la poésie, du théâtre, de la théorie littéraire...",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'important ce n'est pas de tomber, c'est de ne pas rester à terre.",
    auteur: "Johann Wolfgang von Goethe(1749-1832) est un romancier et un poète. Son oeuvre littéraire comprend de la poésie, du théâtre, de la théorie littéraire...",
    categorie: ["tous", "courage"],
  },
  {
    texte: "L'homme qui n'a rien à perdre est redoutable.",
    auteur: "Johann Wolfgang von Goethe(1749-1832) est un romancier et un poète. Son oeuvre littéraire comprend de la poésie, du théâtre, de la théorie littéraire...",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Méfiez-vous des rêves de jeunesse, ils finissent toujours par se réaliser.",
    auteur: "Johann Wolfgang von Goethe(1749-1832) est un romancier et un poète. Son oeuvre littéraire comprend de la poésie, du théâtre, de la théorie littéraire...",
    categorie: ["tous", "reve"],
  },
  {
    texte: "Ne te laisse pas décourager par la vie; tous ceux qui se sont rendus où ils sont, ont dû partir d'où ils étaient.",
    auteur: "AL Evans(1916-1979) est un sportif de haut niveau qui était dans la Major League Baseball.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "L'espoir est comme le ciel des nuits: il n'est pas coin si sombre où l'oeil qui s'obstine ne finisse par découvrir une étoile.",
    auteur: "Octave Feuillet(1821-1890) est un écrivain françaus et fut membre de l'académie française.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Si nous doutions de nos peurs au lieu de douter de nos rêves, imaginez tout ce qu'on pourrait accomplir.",
    auteur: "Joel Brown né en 1980 est un athlète américain spécialiste du 110 mètres haies.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Il n'y a pas de traversée du désert, il n'y a qu'une marche vers l'oasis.",
    auteur: "Jean Biès(1933-2014) est un professeur, écrivain et philosophe qui a travaillé sur la jonction des sagesses orientales et occidentales.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "La vie nous donne toujours une seconde chance qui s'appelle demain.",
    auteur: "Paul Fort(1872-1960) est un poète et l'auteur d'une ouvre poétique abondante.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Notre plus grande gloire n'est pas de ne jamais tomber, mais de nous relever à chaque fois que nous tombons.",
    auteur: "Oliver Goldsmith(1728-1774) est un écrivain irlandais.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Crois que tu y arriveras et tu seras à mi-chemin.",
    auteur: "Théodore Roosevelt(1858-1919) est un politique américain qui reçu le prix nobel de la paix en 1906 et a était vice-président des Etats-Unis sous le second mandat de William McKinley.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Les obstacles ne doivent pas t'arrêter. Si tu rencontres un mur, ne te retourne pas et n'abandonne pas. Tu dois comprendre comment escalader, traverser ou contourner le problème.",
    auteur: "Michael Jordan né en 1963 est un joueur de basket-ball américain. Il s'agit peut-être du plus grand joueur de basket-ball de tous les temps.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Certains veulent que ça arrive. D'autres aimeraient que ça arrive. Et les autres font que ça arrive.",
    auteur: "Michael Jordan né en 1963 est un joueur de basket-ball américain. Il s'agit peut-être du plus grand joueur de basket-ball de tous les temps.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Je peux accepter l'échec, tout le monde échoue dans quelque chose. Mais je ne peux pas accepter de ne pas essayer.",
    auteur: "Michael Jordan né en 1963 est un joueur de basket-ball américain. Il s'agit peut-être du plus grand joueur de basket-ball de tous les temps.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "J'ai raté 9000 tirs dans ma carrière. J'ai perdu presque 300 matchs. 26 fois, on m'a fait confiance pour prendre le tir de la victoire et j'ai raté. J'ai échoué encore et encore et encore dans ma vie. Et c'est pourquoi je réussis.",
    auteur: "Michael Jordan né en 1963 est un joueur de basket-ball américain. Il s'agit peut-être du plus grand joueur de basket-ball de tous les temps.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "C'est en croyant aux roses qu'on les fait éclore.",
    auteur: "Anatole France(1844-1924) est un écrivain français considéré comme l'un des plus grands de l'époque. Il s'engage dans de nombreuses causes sociales et politiques.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Je souhaite à tous ceux que j'aime un petit grain de folie: cela rend le coeur gai.",
    auteur: "Anatole France(1844-1924) est un écrivain français considéré comme l'un des plus grands de l'époque. Il s'engage dans de nombreuses causes sociales et politiques.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Tout ira pour le mieux à la fin. Si ce n'est pas mieux, c'est que ce n'est pas la fin.",
    auteur: "Ed Sheeran né en 1991 est un auteur-compositeur et guitariste anglais. Il écrit des chansons pour plusieurs célébrités, tels que James Blunt, Robbie Williams...",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "La seule révolution possible, c'est d'essayer de s'améliorer soi-même, en espérant que les autres fassent la même démarche. Le monde ira mieux alors.",
    auteur: "Georges Brassens(1921-1981) est un auteur-compositeur-interpréte français qui reçoit le grand prix de la poésie de l'académie française en 1967.",
    categorie: ["tous", "courage", "liberte", "reve"],
  },
  {
    texte: "Plutôt que de penser à ce que tu n'a pas, pense à ce que tu peux faire avec ce que tu as.",
    auteur: "Ernest Hemingway(1889-1961) est un romancier qui reçu le prix nobel de littérature en 1954.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Il n'y a rien de noble à être supérieur à vos semblables. La vrai noblesse est d'être supérieur à celui que vous avez été auparavant.",
    auteur: "Ernest Hemingway(1889-1961) est un romancier qui reçu le prix nobel de littérature en 1954.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le monde est un endroit magnifique pour lequel il vaut la peine de se battre.",
    auteur: "Ernest Hemingway(1889-1961) est un romancier qui reçu le prix nobel de littérature en 1954.",
    categorie: ["tous", ],
  },
  {
    texte: "Nous devons nous y habituer: aux plus importantes croisées des chemins de notre vie, il n'y a pas de signalisation.",
    auteur: "Ernest Hemingway(1889-1961) est un romancier qui reçu le prix nobel de littérature en 1954.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Mieux vaut vivre un seul jour comme un lion que cent années comme un mouton.",
    auteur: "Ernest Hemingway(1889-1961) est un romancier qui reçu le prix nobel de littérature en 1954.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "De la joie chez les gens intelligents, est la chose la plus rare que je connaisse.",
    auteur: "Ernest Hemingway(1889-1961) est un romancier qui reçu le prix nobel de littérature en 1954.",
    categorie: ["tous", ],
  },
  {
    texte: "Le temps est la plus petite chose dont nous disposons.",
    auteur: "Ernest Hemingway(1889-1961) est un romancier qui reçu le prix nobel de littérature en 1954.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La vie nous brise tous mais, une fois nos blessures cicatrisées, beaucoup d'entre nous en ressortent plus forts.",
    auteur: "Ernest Hemingway(1889-1961) est un romancier qui reçu le prix nobel de littérature en 1954.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Il embrassa la mer d'un regard et se rendit compte de l'infinie solitude où il se trouvait.",
    auteur: "Ernest Hemingway(1889-1961) est un romancier qui reçu le prix nobel de littérature en 1954.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Qu'elle soit nécessaire, ou même justifiée, ne croyez jamais que la guerre n'est pas un crime.",
    auteur: "Ernest Hemingway(1889-1961) est un romancier qui reçu le prix nobel de littérature en 1954.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Celui qui a commencé à vivre plus sérieusement de l'intérieur commence à vivre plus facilement à l'extérieur.",
    auteur: "Ernest Hemingway(1889-1961) est un romancier qui reçu le prix nobel de littérature en 1954.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "J'aime écouter. Cela m'a permis d'apprendre énormément de choses. La plupart des gens n'écoutent jamais.",
    auteur: "Ernest Hemingway(1889-1961) est un romancier qui reçu le prix nobel de littérature en 1954.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La liberté est le plus grand de tous les biens.",
    auteur: "Pierre Larousse(1817-1875) est un pédagogue et encyclopédiste français. Sa principale réalisation est le Grand Dictionnaire universel du XIXème siècle.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "L'homme libre est celui qui n'a pas peur d'aller jusqu'au bout de sa pensée.",
    auteur: "Léon Blum(1872-1950) est un magistrat du Conseil D'Etat et un écrivain. Lors de l'occupation de la France par les armées du troisième Reich. Il est emprisonné par le régime de Vichy.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Vive la liberté! A bas l'intolérance!",
    auteur: "Jules Renard(1864-1910) est un écrivain et auteur dramatique français.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Quand on peut voir si nettement les défauts des autres, c'est qu'on les a.",
    auteur: "Jules Renard(1864-1910) est un écrivain et auteur dramatique français.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Et par le pouvoir d'un mot. Je recommence ma vie. Je suis né pour te connaître. Pour te nommer. Liberté.",
    auteur: "Paul Eluard(1895-1952) est un poète français.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Un rêve sans étoiles est un rêve oublié.",
    auteur: "Paul Eluard(1895-1952) est un poète français.",
    categorie: ["tous", "reve", "sen"],
  },
  {
    texte: "Un rêve sans étoiles est un rêve oublié.",
    auteur: "Paul Eluard(1895-1952) est un poète français.",
    categorie: ["tous", "reve", "sen"],
  },
  {
    texte: "Il n'y a pas de hasards, il n'y a que des rendez-vous.",
    auteur: "Paul Eluard(1895-1952) est un poète français.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Le secret du bonheur est la liberté. Le secret de la liberté est le courage",
    auteur: "Périclès(495-429 avant notre ère) est un homme d'Etat athénien, un stratège et un orateur.",
    categorie: ["tous", "bonheur", "liberte"],
  },
  {
    texte: "Si on veut obtenir ce quelque chose que l'on a jamais eu. Il faut tenter quelque chose que l'on a jamais fait.",
    auteur: "Périclès(495-429 avant notre ère) est un homme d'Etat athénien, un stratège et un orateur.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "La liberté est un bagne aussi longtemps qu'un seul homme est asservi sur la terre.",
    auteur: "Albert Camus(1913-1960) est un écrivain, philosophe et romancier. Il est aussi journaliste militant engagé dans la résistance française et reçoit le prix nobel de littérature en 1957.",
    categorie: ["tous", "liberte", "morale"],
  },
  {
    texte: "La grandeur de l'homme est dans sa décision d'être plus fort que sa condition.",
    auteur: "Albert Camus(1913-1960) est un écrivain, philosophe et romancier. Il est aussi journaliste militant engagé dans la résistance française et reçoit le prix nobel de littérature en 1957.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "La vrai générosité envers l'avenir consiste à tout donner au présent.",
    auteur: "Albert Camus(1913-1960) est un écrivain, philosophe et romancier. Il est aussi journaliste militant engagé dans la résistance française et reçoit le prix nobel de littérature en 1957.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Rien au monde ne vaut qu'on se détourne de ce qu'on aime.",
    auteur: "Albert Camus(1913-1960) est un écrivain, philosophe et romancier. Il est aussi journaliste militant engagé dans la résistance française et reçoit le prix nobel de littérature en 1957.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Au milieu de l'hiver, j'ai découvert en moi un invincible été.",
    auteur: "Albert Camus(1913-1960) est un écrivain, philosophe et romancier. Il est aussi journaliste militant engagé dans la résistance française et reçoit le prix nobel de littérature en 1957.",
    categorie: ["tous", ""],
  },
  {
    texte: "Il y'a dans chaque coeur un coin de solitude où personne ne peut atteindre.",
    auteur: "Albert Camus(1913-1960) est un écrivain, philosophe et romancier. Il est aussi journaliste militant engagé dans la résistance française et reçoit le prix nobel de littérature en 1957.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Si un maître ne peut pas se passer de son esclave, lequel des deux est un homme libre ?",
    auteur: "Albert Camus(1913-1960) est un écrivain, philosophe et romancier. Il est aussi journaliste militant engagé dans la résistance française et reçoit le prix nobel de littérature en 1957.",
    categorie: ["tous", "sagesse", "liberte"],
  },
  {
    texte: "Je sais maintenant qu'il n'y a pas de bonheur dans la haine.",
    auteur: "Albert Camus(1913-1960) est un écrivain, philosophe et romancier. Il est aussi journaliste militant engagé dans la résistance française et reçoit le prix nobel de littérature en 1957.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "On se fait toujours des idées exagérées de ce qu'on ne connaît pas.",
    auteur: "Albert Camus(1913-1960) est un écrivain, philosophe et romancier. Il est aussi journaliste militant engagé dans la résistance française et reçoit le prix nobel de littérature en 1957.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Créer c'est donner une forme à son destin.",
    auteur: "Albert Camus(1913-1960) est un écrivain, philosophe et romancier. Il est aussi journaliste militant engagé dans la résistance française et reçoit le prix nobel de littérature en 1957.",
    categorie: ["tous", ],
  },
  {
    texte: "Tu ne seras jamais heureux si tu cherches continuellement de quoi est fait le bonheur... Tu ne vivras jamais si tu cherches toujours un sens à la vie.",
    auteur: "Albert Camus(1913-1960) est un écrivain, philosophe et romancier. Il est aussi journaliste militant engagé dans la résistance française et reçoit le prix nobel de littérature en 1957.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Ceux qui manquent de courage ont toujours une philosophie pour le justifier.",
    auteur: "Albert Camus(1913-1960) est un écrivain, philosophe et romancier. Il est aussi journaliste militant engagé dans la résistance française et reçoit le prix nobel de littérature en 1957.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Renoncer à sa liberté c'est renoncer à sa qualité d'homme, aux droits de l'humanité, même à ses devoirs.",
    auteur: "Jean-Jacques Rousseau(1712-1778) est un écrivain, philosophe. Il a eu une influence considérable lors de la période révolutionnaire et à écrit le Contrat Social.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Donnez le désir d'apprendre et toute méthode sera bonne.",
    auteur: "Jean-Jacques Rousseau(1712-1778) est un écrivain, philosophe. Il a eu une influence considérable lors de la période révolutionnaire et à écrit le Contrat Social.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'homme est né libre, et partout il est dans les fers.",
    auteur: "Jean-Jacques Rousseau(1712-1778) est un écrivain, philosophe. Il a eu une influence considérable lors de la période révolutionnaire et à écrit le Contrat Social.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "L'âme résiste bien plus aisément aux vives douleurs qu'à la tristesse prolongée.",
    auteur: "Jean-Jacques Rousseau(1712-1778) est un écrivain, philosophe. Il a eu une influence considérable lors de la période révolutionnaire et à écrit le Contrat Social.",
    categorie: ["tous", ],
  },
  {
    texte: "C'est en vain qu'on cherche au loin le bonheur quand on oublie de le cultiver soi-même.",
    auteur: "Jean-Jacques Rousseau(1712-1778) est un écrivain, philosophe. Il a eu une influence considérable lors de la période révolutionnaire et à écrit le Contrat Social.",
    categorie: ["tous", "bonheur", "sagesse"],
  },
  {
    texte: "Loin que le chef ait un intérêt naturel au bonheur des particuliers, il ne lui est pas rare de chercher le sien dans leur misère.",
    auteur: "Jean-Jacques Rousseau(1712-1778) est un écrivain, philosophe. Il a eu une influence considérable lors de la période révolutionnaire et à écrit le Contrat Social.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "L'on est jamais bien quand on n'est pas à sa place.",
    auteur: "Jean-Jacques Rousseau(1712-1778) est un écrivain, philosophe. Il a eu une influence considérable lors de la période révolutionnaire et à écrit le Contrat Social.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Il n'y a point d'assujetissement si parfait que celui qui garde l'apparence de la liberté; on captive ainsi la volonté même.",
    auteur: "Jean-Jacques Rousseau(1712-1778) est un écrivain, philosophe. Il a eu une influence considérable lors de la période révolutionnaire et à écrit le Contrat Social.",
    categorie: ["tous", "liberte", "sagesse"],
  },
  {
    texte: "Un homme ne doit jamais rougir d'avouer qu'il a tort; car, en faisant cet aveu, il prouve qu'il est plus sage aujourd'hui qu'hier.",
    auteur: "Jean-Jacques Rousseau(1712-1778) est un écrivain, philosophe. Il a eu une influence considérable lors de la période révolutionnaire et à écrit le Contrat Social.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le coeur de l'homme est son paradis et son enfer.",
    auteur: "Jean-Jacques Rousseau(1712-1778) est un écrivain, philosophe. Il a eu une influence considérable lors de la période révolutionnaire et à écrit le Contrat Social.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "J'étais fait pour vivre, et je meurs sans avoir vécu.",
    auteur: "Jean-Jacques Rousseau(1712-1778) est un écrivain, philosophe. Il a eu une influence considérable lors de la période révolutionnaire et à écrit le Contrat Social.",
    categorie: ["tous", "bonheur", "sensibilite"],
  },
  {
    texte: "Si tu veux connaître le coeur d'une personne, observe comment elle se comporte avec les gens qui ne peuvent rien lui apporter.",
    auteur: "sagesse hindoue",
    categorie: ["tous", "morale", "sensibilite"],
  },
  {
    texte: "Dans chaque épreuve, ne cherchez pas l'ennemi, cherchez l'enseignement.",
    auteur: "Mikao Usui(1865-1926) a suivi des études en médecine et en psychologie pour devenir moine bouddhiste.",
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Je ne connais pas la clé du succès, mais la clé d'un échec est d'essayer de plaire à tout le monde.",
    auteur: "Bill Cosby est né en 1937. C'est un acteur, producteur, scénariste et réalisateur américain devenu populaire grâce a son sitcom le Cosby Show.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le fou se croit sage et le sage se reconnaît fou.",
    auteur: "William Shakespeare(1564-1616) est un poète et dramaturge de langue anglaise. Il est considéré comme l'un des plus grands poétes.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Nous savons ce que nous sommes, mais nous ignorons ce que nous pourrions être.",
    auteur: "William Shakespeare(1564-1616) est un poète et dramaturge de langue anglaise. Il est considéré comme l'un des plus grands poétes.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Se lamenter sur un malheur passé, voilà le plus sûr moyen d'en attirer un autre.",
    auteur: "William Shakespeare(1564-1616) est un poète et dramaturge de langue anglaise. Il est considéré comme l'un des plus grands poétes.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Si nous vivons, nous vivons pour marcher sur la tête des puissants... Car les puissants ne travaillent qu'a marcher sur nos vies.",
    auteur: "William Shakespeare(1564-1616) est un poète et dramaturge de langue anglaise. Il est considéré comme l'un des plus grands poétes.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "L'amour ne voit pas avec les yeux, mais avec l'âme.",
    auteur: "William Shakespeare(1564-1616) est un poète et dramaturge de langue anglaise. Il est considéré comme l'un des plus grands poétes.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Quand la neige fond, où va le blanc ?",
    auteur: "William Shakespeare(1564-1616) est un poète et dramaturge de langue anglaise. Il est considéré comme l'un des plus grands poétes.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Pour bien connaître un homme, il faut d'abord se connaître.",
    auteur: "William Shakespeare(1564-1616) est un poète et dramaturge de langue anglaise. Il est considéré comme l'un des plus grands poétes.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Pardonner est une action plus noble et plus rare que celle de se venger.",
    auteur: "William Shakespeare(1564-1616) est un poète et dramaturge de langue anglaise. Il est considéré comme l'un des plus grands poétes.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Mieux vaut mourir incompris que passer sa vie à s'expliquer.",
    auteur: "William Shakespeare(1564-1616) est un poète et dramaturge de langue anglaise. Il est considéré comme l'un des plus grands poétes.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Quelle époque terrible que celle où des idiots dirigent des aveugles.",
    auteur: "William Shakespeare(1564-1616) est un poète et dramaturge de langue anglaise. Il est considéré comme l'un des plus grands poétes.",
    categorie: ["tous", "liberte", "sagesse"],
  },
  {
    texte: "Les poignards qui ne sont pas dans les mains peuvent être dans les paroles.",
    auteur: "William Shakespeare(1564-1616) est un poète et dramaturge de langue anglaise. Il est considéré comme l'un des plus grands poétes.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Souffle, souffle, vent d'hiver; tu n'est pas si cruel que l'ingratitude de l'homme.",
    auteur: "William Shakespeare(1564-1616) est un poète et dramaturge de langue anglaise. Il est considéré comme l'un des plus grands poétes.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Sache que les hommes sont ce qu'est leur époque.",
    auteur: "William Shakespeare(1564-1616) est un poète et dramaturge de langue anglaise. Il est considéré comme l'un des plus grands poétes.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Nos doutes sont des traitres et nous privent de ce que nous pourrions souvent gagner de bon... parce que nous avons peur d'essayer.",
    auteur: "William Shakespeare(1564-1616) est un poète et dramaturge de langue anglaise. Il est considéré comme l'un des plus grands poétes.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Je tiens ce monde pour ce qu'il est: un théâtre où chacun doit jouer son rôle.",
    auteur: "William Shakespeare(1564-1616) est un poète et dramaturge de langue anglaise. Il est considéré comme l'un des plus grands poétes.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Celui qui n'est plus ton ami ne l'a jamais été.",
    auteur: "William Shakespeare(1564-1616) est un poète et dramaturge de langue anglaise. Il est considéré comme l'un des plus grands poétes.",
    categorie: ["tous", ],
  },
  {
    texte: "Un pays bien organisé est celui où le petit nombre fait travailler le grand nombre, est nourri par lui, et le gouverne.",
    auteur: "Voltaire(1694-1778) est un écrivain, philosophe et un homme d'affaires français. Il est le représentant le plus connu de la philosophie des lumières.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Le bonheur est souvent la seule chose qu'on puisse donner sans l'avoir et c'est en le donnant qu'on l'acquiert.",
    auteur: "Voltaire(1694-1778) est un écrivain, philosophe et un homme d'affaires français. Il est le représentant le plus connu de la philosophie des lumières.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Dans tous les temps, et dans tous les pays, et dans tous les genre, le mauvais fourmille, et le bon est rare.",
    auteur: "Voltaire(1694-1778) est un écrivain, philosophe et un homme d'affaires français. Il est le représentant le plus connu de la philosophie des lumières.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Certains n'emploient les paroles que pour déguiser leurs pensées.",
    auteur: "Voltaire(1694-1778) est un écrivain, philosophe et un homme d'affaires français. Il est le représentant le plus connu de la philosophie des lumières.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Plus les hommes seront éclairés, plus ils seront libres.",
    auteur: "Voltaire(1694-1778) est un écrivain, philosophe et un homme d'affaires français. Il est le représentant le plus connu de la philosophie des lumières.",
    categorie: ["tous", "liberte", "sagesse"],
  },
  {
    texte: "Voulez-vous vivre heureux, vivez toujours sans maître.",
    auteur: "Voltaire(1694-1778) est un écrivain, philosophe et un homme d'affaires français. Il est le représentant le plus connu de la philosophie des lumières.",
    categorie: ["tous", "bonheur", "liberte"],
  },
  {
    texte: "J'ai décidé d'être heureux parce que c'est bon pour la santé.",
    auteur: "Voltaire(1694-1778) est un écrivain, philosophe et un homme d'affaires français. Il est le représentant le plus connu de la philosophie des lumières.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Plus grand est l'obstacle, plus grande est la gloire de le surmonter.",
    auteur: "Molière(1622-1673) est un comédien et dramaturge français. C'est un créateur et interpréte et jouera le rôle principal de ses pièces.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Et que nous servira d'avoir du bien, s'il ne nous vient dans le temps que nous ne serons plus dans le bel âge d'en jouir.",
    auteur: "Molière(1622-1673) est un comédien et dramaturge français. C'est un créateur et interpréte et jouera le rôle principal de ses pièces.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Il est si doux de vivre ! On ne meurt qu'une fois et c'est pour si longtemps...",
    auteur: "Molière(1622-1673) est un comédien et dramaturge français. C'est un créateur et interpréte et jouera le rôle principal de ses pièces.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "L'allégresse du coeur s'augmente à la répandre.",
    auteur: "Molière(1622-1673) est un comédien et dramaturge français. C'est un créateur et interpréte et jouera le rôle principal de ses pièces.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "L'on cherche souvent plus qu'on ne veut trouver.",
    auteur: "Molière(1622-1673) est un comédien et dramaturge français. C'est un créateur et interpréte et jouera le rôle principal de ses pièces.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Vous manquez 100 pour cent des tirs que vous ne tentez pas.",
    auteur: "Wayne Gretzky né en 1961 est un joueur professionnel canadien de hockey sur glace.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Qui regarde dehors rêve. Qui regarde à l'intérieur se réveille.",
    auteur: "Carl Jung(1875-1961) est un psychologue analytique et un penseur influent. Il est l'auteur de nombreux ouvrages.",
    categorie: ["tous", "sagesse", "reve","sensibilite"],
  },
  {
    texte: "Ta vision deviendra claire lorsque tu regarderas dans ton coeur.",
    auteur: "Carl Jung(1875-1961) est un psychologue analytique et un penseur influent. Il est l'auteur de nombreux ouvrages.",
    categorie: ["tous", "sagesse","sensibilite"],
  },
  {
    texte: "Ce que tu nies te soumet, ce que tu acceptes te transforme.",
    auteur: "Carl Jung(1875-1961) est un psychologue analytique et un penseur influent. Il est l'auteur de nombreux ouvrages.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "On ne peut voir la lumière sans l'ombre, on ne peut percevoir le silence sans le bruit, on ne peut atteindre la sagesse sans la folie.",
    auteur: "Carl Jung(1875-1961) est un psychologue analytique et un penseur influent. Il est l'auteur de nombreux ouvrages.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Ce n'est pas en regardant la lumière qu'on devient lumineux, mais en plongeant dans son obscurité.",
    auteur: "Carl Jung(1875-1961) est un psychologue analytique et un penseur influent. Il est l'auteur de nombreux ouvrages.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "La chose la plus terrifiante, c'est de s'accepter soi-même.",
    auteur: "Carl Jung(1875-1961) est un psychologue analytique et un penseur influent. Il est l'auteur de nombreux ouvrages.",
    categorie: ["tous", ],
  },
  {
    texte: "Trouvez ce dont une personne a le plus peur et vous saurez de quoi sera faite sa prochaine étape de croissance.",
    auteur: "Carl Jung(1875-1961) est un psychologue analytique et un penseur influent. Il est l'auteur de nombreux ouvrages.",
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Réfléchir c'est difficile, c'est pourquoi la plupart des gens jugent.",
    auteur: "Carl Jung(1875-1961) est un psychologue analytique et un penseur influent. Il est l'auteur de nombreux ouvrages.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Je ne suis pas ce qui est arrivé, je suis ce que je choisis de devenir.",
    auteur: "Carl Jung(1875-1961) est un psychologue analytique et un penseur influent. Il est l'auteur de nombreux ouvrages.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Vous ne guérirez pas avec ce que vous savez, mais avec ce que vous êtes.",
    auteur: "Carl Jung(1875-1961) est un psychologue analytique et un penseur influent. Il est l'auteur de nombreux ouvrages.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "En chacun de nous existe un autre être que nous ne connaissons pas. Il nous parle à travers le rêve et nous fait savoir qu'il nous voit bien différent de ce que nous croyons être.",
    auteur: "Carl Jung(1875-1961) est un psychologue analytique et un penseur influent. Il est l'auteur de nombreux ouvrages.",
    categorie: ["tous", "courage", "sagesse", "reve"],
  },
  {
    texte: "Ce qu'on ne veut pas savoir de soi-même finit par arriver de l'extérieur comme un destin.",
    auteur: "Carl Jung(1875-1961) est un psychologue analytique et un penseur influent. Il est l'auteur de nombreux ouvrages.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le véritable lieu de naissance est celui où l'on a porté, pour la première fois, un coup d'oeil intelligent sur soi-même.",
    auteur: "Marguerite Yourcenar(1903-1987) est une femme de lettres française et une romancière qui a été la première femme élue membre de l'académie française en 1980.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le but de la vie sur terre est de découvrir son être véritable et de vivre en accord avec lui.",
    auteur: "Henry Miller(1891-1980) est un romancier qui est connu pour avoir rompu avec les formes littéraires existantes en développant le roman semi-autobiographique.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le bonheur de votre vie dépend de la qualité de vos pensées.",
    auteur: "Marc Aurèle(121-180) est un empereur, philosophe stoïcien et écrivain romain.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Nulle retraite n'est plus tranquille ni moins troublée pour l'homme que celle qu'il trouve dans son âme.",
    auteur: "Marc Aurèle(121-180) est un empereur, philosophe stoïcien et écrivain romain.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Qui vit en paix avec lui-même, vit en paix avec l'univers.",
    auteur: "Marc Aurèle(121-180) est un empereur, philosophe stoïcien et écrivain romain.",
    categorie: ["tous", ],
  },
  {
    texte: "Crains non point de cesser de vivre, mais plutôt de n'avoir jamais commencé à vivre.",
    auteur: "Marc Aurèle(121-180) est un empereur, philosophe stoïcien et écrivain romain.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La meilleure façon de se venger d'un ennemi, c'est de ne pas lui ressembler.",
    auteur: "Marc Aurèle(121-180) est un empereur, philosophe stoïcien et écrivain romain.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "L'homme ordinaire est exigeant avec les autres. L'homme exceptionnel est exigeant avec lui-même.",
    auteur: "Marc Aurèle(121-180) est un empereur, philosophe stoïcien et écrivain romain.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Accomplis chaque acte de ta vie comme s'il devait être le dernier.",
    auteur: "Marc Aurèle(121-180) est un empereur, philosophe stoïcien et écrivain romain.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Ce n'est pas ce qui vous arrive qui importe, mais votre façon d'y réagir.",
    auteur: "Epictète(50-125) est un philosophe de l'école stoïcienne et ne laissa aucune oeuvre écrite de sa main.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le bonheur ne consiste pas à acquérir et à jouir, mais à ne rien désirer, car il consiste à être libre.",
    auteur: "Epictète(50-125) est un philosophe de l'école stoïcienne et ne laissa aucune oeuvre écrite de sa main.",
    categorie: ["tous", "bonheur", "liberte"],
  },
  {
    texte: "Il n'y a qu'un chemin pour le bonheur, c'est de cesser de nous tracasser pour des choses qui ne dépendent pas de notre volonté.",
    auteur: "Epictète(50-125) est un philosophe de l'école stoïcienne et ne laissa aucune oeuvre écrite de sa main.",
    categorie: ["tous", "bonheur", "sagesse"],
  },
  {
    texte: "Ne cherchez pas les biens hors de vous, cherchez-les en vous-mêmes. Sinon vous ne les trouverez pas.",
    auteur: "Epictète(50-125) est un philosophe de l'école stoïcienne et ne laissa aucune oeuvre écrite de sa main.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Les hommes se rendent malheureux non par les choses qui arrivent mais par leur manière de voir les choses qui arrivent.",
    auteur: "Epictète(50-125) est un philosophe de l'école stoïcienne et ne laissa aucune oeuvre écrite de sa main.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "N'attends pas que les événements arrivent comme tu le souhaites. Décide de vouloir ce qui arrive... et tu seras heureux.",
    auteur: "Epictète(50-125) est un philosophe de l'école stoïcienne et ne laissa aucune oeuvre écrite de sa main.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Nous ne pouvons pas choisir les circonstances extérieures mais nous pouvons toujours choisir la façon dont nous répondons à celles-ci.",
    auteur: "Epictète(50-125) est un philosophe de l'école stoïcienne et ne laissa aucune oeuvre écrite de sa main.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Dis-toi d'abord ce que tu veux être, puis fais ce qu'il faut pour le devenir.",
    auteur: "Epictète(50-125) est un philosophe de l'école stoïcienne et ne laissa aucune oeuvre écrite de sa main.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Ce n'est pas par la satisfaction du désir que s'obtient la liberté mais par la destruction du désir.",
    auteur: "Epictète(50-125) est un philosophe de l'école stoïcienne et ne laissa aucune oeuvre écrite de sa main.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "La liberté, c'est l'indépendance de la pensée.",
    auteur: "Epictète(50-125) est un philosophe de l'école stoïcienne et ne laissa aucune oeuvre écrite de sa main.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "L'essence de la philosophie est qu'un homme devrait vivre de manière à ce que son bonheur dépende aussi peu que possible des causes extérieures.",
    auteur: "Epictète(50-125) est un philosophe de l'école stoïcienne et ne laissa aucune oeuvre écrite de sa main.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Ose devenir ce que tu es, même si ce n'est pas conforme à ce qui est habituellement demandé.",
    auteur: "Epictète(50-125) est un philosophe de l'école stoïcienne et ne laissa aucune oeuvre écrite de sa main.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Tout est changement, non pour ne plus être, mais pour devenir ce qui n'est pas encore.",
    auteur: "Epictète(50-125) est un philosophe de l'école stoïcienne et ne laissa aucune oeuvre écrite de sa main.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Se conquérir et se vaincre soi-même est la première et la plus noble de toutes les victoires.",
    auteur: "Platon(428-347 avant notre ère) est un philosophe de la Grèce classique.",
    categorie: ["tous", ],
  },
  {
    texte: "On ne doit pas chercher à guérir le corps sans chercher à guérir l'âme.",
    auteur: "Platon(428-347 avant notre ère) est un philosophe de la Grèce classique.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Ce que je sais, c'est que je ne sais rien.",
    auteur: "Platon(428-347 avant notre ère) est un philosophe de la Grèce classique.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La simplicité véritable allie la bonté à la beauté.",
    auteur: "Platon(428-347 avant notre ère) est un philosophe de la Grèce classique.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "L'essentiel n'est pas de vivre, mais de bien vivre.",
    auteur: "Platon(428-347 avant notre ère) est un philosophe de la Grèce classique.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Chacun, parce qu'il pense, est seul responsable de la sagesse ou de la folie de sa vie, c'est-à-dire de sa destinée.",
    auteur: "Platon(428-347 avant notre ère) est un philosophe de la Grèce classique.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La musique donne une âme à nos coeurs et des ailes à la pensée.",
    auteur: "Platon(428-347 avant notre ère) est un philosophe de la Grèce classique.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "L'opinion est quelque chose d'intermédiaire entre la connaissance et l'ignorance.",
    auteur: "Platon(428-347 avant notre ère) est un philosophe de la Grèce classique.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La paix du coeur est le paradis des hommes.",
    auteur: "Platon(428-347 avant notre ère) est un philosophe de la Grèce classique.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Ce qu'on doit chercher à savoir, c'est de qu'elle façon on doit vivre sa vie pour qu'elle soit la meilleure possible.",
    auteur: "Platon(428-347 avant notre ère) est un philosophe de la Grèce classique.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Si la vie vaut la peine d'être vécue, c'est à ce moment: lorsque l'humain contemple la beauté en soi.",
    auteur: "Platon(428-347 avant notre ère) est un philosophe de la Grèce classique.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "On peut aisément pardonner à l'enfant qui a peur de l'obscurité. La vrai tragédie de la vie, c'est lorsque les hommes ont peur de la lumière.",
    auteur: "Platon(428-347 avant notre ère) est un philosophe de la Grèce classique.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "En toutes choses, on doit agir dans la vue du bien.",
    auteur: "Platon(428-347 avant notre ère) est un philosophe de la Grèce classique.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "L'amour est la seule fleur qui n'a pas besoin de saison pour éclore.",
    auteur: "Rûmî(1207-1273) est un poète mystique persan qui a profondément influencé le soufisme. Il est considéré en orient comme un grand maître spirituel.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Il y'a une voix qui n'utilise pas les mots. Ecoute !",
    auteur: "Rûmî(1207-1273) est un poète mystique persan qui a profondément influencé le soufisme. Il est considéré en orient comme un grand maître spirituel.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: ".",
    auteur: "Rûmî(1207-1273) est un poète mystique persan qui a profondément influencé le soufisme. Il est considéré en orient comme un grand maître spirituel.",
    categorie: ["tous", ],
  },
  {
    texte: "Vous n'êtes pas une goutte dans l'océan. Vous êtes l'océan tout entier dans une goutte.",
    auteur: "Rûmî(1207-1273) est un poète mystique persan qui a profondément influencé le soufisme. Il est considéré en orient comme un grand maître spirituel.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "La lumière propre du visage vient de la chandelle de l'esprit.",
    auteur: "Rûmî(1207-1273) est un poète mystique persan qui a profondément influencé le soufisme. Il est considéré en orient comme un grand maître spirituel.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Ne pas éviter les expériences difficiles; elles sont d'excellents professeurs.",
    auteur: "Rûmî(1207-1273) est un poète mystique persan qui a profondément influencé le soufisme. Il est considéré en orient comme un grand maître spirituel.",
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Hier, j'étais intelligent et je voulais changer le monde. Aujourd'hui, je suis un sage et je me change moi-même.",
    auteur: "Rûmî(1207-1273) est un poète mystique persan qui a profondément influencé le soufisme. Il est considéré en orient comme un grand maître spirituel.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Fais le bien et jette-le dans la rivière: un jour, il te sera rendu dans le désert.",
    auteur: "Rûmî(1207-1273) est un poète mystique persan qui a profondément influencé le soufisme. Il est considéré en orient comme un grand maître spirituel.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Ce que vous cherchez vous cherche aussi.",
    auteur: "Rûmî(1207-1273) est un poète mystique persan qui a profondément influencé le soufisme. Il est considéré en orient comme un grand maître spirituel.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "C'est votre route seulement la vôtre. D'autres peuvent marcher avec vous, mais personne ne peut marcher pour vous.",
    auteur: "Rûmî(1207-1273) est un poète mystique persan qui a profondément influencé le soufisme. Il est considéré en orient comme un grand maître spirituel.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Avec les yeux de ton coeur, tu verras un autre monde.",
    auteur: "Rûmî(1207-1273) est un poète mystique persan qui a profondément influencé le soufisme. Il est considéré en orient comme un grand maître spirituel.",
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Le courage conduit aux étoiles et la peur à la mort.",
    auteur: "Sénèque(4 avant notre ère - 65) est un philosophe de l'école stoïcienne et un homme d'Etat romain. Il a était le conseillé de Caligula.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "La vie ressemble à un conte; ce qui importe, ce n'est pas sa longueur, mais sa valeur.",
    auteur: "Sénèque(4 avant notre ère - 65) est un philosophe de l'école stoïcienne et un homme d'Etat romain. Il a était le conseillé de Caligula.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Les douleurs légères s'expriment, les grandes douleurs sont muettes.",
    auteur: "Sénèque(4 avant notre ère - 65) est un philosophe de l'école stoïcienne et un homme d'Etat romain. Il a était le conseillé de Caligula.",
    categorie: ["tous"],
  },
  {
    texte: "Celui qui cherche la sagesse est un sage, celui qui croit l'avoir trouvée est un fou.",
    auteur: "Sénèque(4 avant notre ère - 65) est un philosophe de l'école stoïcienne et un homme d'Etat romain. Il a était le conseillé de Caligula.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Il n'y a pas de vent favorable pour celui qui ne sait pas où il va.",
    auteur: "Sénèque(4 avant notre ère - 65) est un philosophe de l'école stoïcienne et un homme d'Etat romain. Il a était le conseillé de Caligula.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le plus grand obstacle à la vie est l'attente, qui espère demain et néglige aujourd'hui.",
    auteur: "Sénèque(4 avant notre ère - 65) est un philosophe de l'école stoïcienne et un homme d'Etat romain. Il a était le conseillé de Caligula.",
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "En suivant le chemin qui s'appelle plus tard, nous arrivons sur la place qui s'appelle jamais.",
    auteur: "Sénèque(4 avant notre ère - 65) est un philosophe de l'école stoïcienne et un homme d'Etat romain. Il a était le conseillé de Caligula.",
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "La vie, ce n'est pas d'attendre que les orages passent, c'est d'apprendre comment danser sous la pluie.",
    auteur: "Sénèque(4 avant notre ère - 65) est un philosophe de l'école stoïcienne et un homme d'Etat romain. Il a était le conseillé de Caligula.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "C'est une grande grâce de pouvoir s'accepter soi-même, mais c'est une grâce suprême de pouvoir s'oublier.",
    auteur: "Sénèque(4 avant notre ère - 65) est un philosophe de l'école stoïcienne et un homme d'Etat romain. Il a était le conseillé de Caligula.",
    categorie: ["tous"],
  },
  {
    texte: "Nous ne vivons en fait qu'une infime partie de notre vie. Le reste, à vrai dire, n'est pas de la vie mais simplement du temps.",
    auteur: "Sénèque(4 avant notre ère - 65) est un philosophe de l'école stoïcienne et un homme d'Etat romain. Il a était le conseillé de Caligula.",
    categorie: ["tous"],
  },
  {
    texte: "Toute méchanceté a sa source dans la faiblesse.",
    auteur: "Sénèque(4 avant notre ère - 65) est un philosophe de l'école stoïcienne et un homme d'Etat romain. Il a était le conseillé de Caligula.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Pendant que l'on attend de vivre, la vie passe.",
    auteur: "Sénèque(4 avant notre ère - 65) est un philosophe de l'école stoïcienne et un homme d'Etat romain. Il a était le conseillé de Caligula.",
    categorie: ["tous"],
  },
  {
    texte: "Un bonheur que rien n'a entamé succombe à la moindre atteinte; mais quand on doit se battre contre les difficultés incessantes, on s'aguerrit dans l'épreuve, on résiste à n'importe quels maux, et même si l'on trébuche, on lutte encore à genoux.",
    auteur: "Sénèque(4 avant notre ère - 65) est un philosophe de l'école stoïcienne et un homme d'Etat romain. Il a était le conseillé de Caligula.",
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "En trois mots, je peux résumer tout ce que j'ai appris sur la vie. Continuez vers l'avant.",
    auteur: "Robert Frost(1874-1963) est un poète américain.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Il n'y a que deux conduites dans la vie: ou on la rêve ou on l'accomplit.",
    auteur: "René Char(1907-1988) est un poète et un résistant français.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "L'essentiel pour le bonheur de la vie, c'est ce que l'on a en soi-même.",
    auteur: "Arthur Schopenhauer(1788-1860) est un philosophe allemand qui a eu une influence importante et a publié en 1819. \"Le monde comme volonté et comme représentation\".",
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "Toutes les richesses ne sauraient satisfaire n caractère avide, envieux et méchant.",
    auteur: "Arthur Schopenhauer(1788-1860) est un philosophe allemand qui a eu une influence importante et a publié en 1819. \"Le monde comme volonté et comme représentation\".",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Ce n'est le plus souvent que la perte des choses qui nous en enseigne la valeur.",
    auteur: "Arthur Schopenhauer(1788-1860) est un philosophe allemand qui a eu une influence importante et a publié en 1819. \"Le monde comme volonté et comme représentation\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Il ne faut pas empiéter sur l'avenir en demandant avant le temps ce qui ne peut venir qu'avec le temps.",
    auteur: "Arthur Schopenhauer(1788-1860) est un philosophe allemand qui a eu une influence importante et a publié en 1819. \"Le monde comme volonté et comme représentation\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le monde dans lequel chacun vit dépend de sa façon de le concevoir.",
    auteur: "Arthur Schopenhauer(1788-1860) est un philosophe allemand qui a eu une influence importante et a publié en 1819. \"Le monde comme volonté et comme représentation\".",
    categorie: ["tous", "reve"],
  },
  {
    texte: "Un homme d'esprit, dans la solitude la plus absolue, trouve dans ses propres pensées et dans sa propre fantaisie de quoi se divertir agréablement.",
    auteur: "Arthur Schopenhauer(1788-1860) est un philosophe allemand qui a eu une influence importante et a publié en 1819. \"Le monde comme volonté et comme représentation\".",
    categorie: ["tous"],
  },
  {
    texte: "Vaincre des obstacles est la plénitude de la jouissance dans l'existence humaine.",
    auteur: "Arthur Schopenhauer(1788-1860) est un philosophe allemand qui a eu une influence importante et a publié en 1819. \"Le monde comme volonté et comme représentation\".",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Trés peu de gens savent réfléchir, mais tous veulent avoir des opinions.",
    auteur: "Arthur Schopenhauer(1788-1860) est un philosophe allemand qui a eu une influence importante et a publié en 1819. \"Le monde comme volonté et comme représentation\".",
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Tout ce qui est exquis mûrit lentement.",
    auteur: "Arthur Schopenhauer(1788-1860) est un philosophe allemand qui a eu une influence importante et a publié en 1819. \"Le monde comme volonté et comme représentation\".",
    categorie: ["tous", "courage", "sen"],
  },
  {
    texte: "La compassion à l'égard des animaux est si étroitement liée à la bonté du caractère qu'on peut affirmer qu'un homme cruel envers les animaux, ne saurait être un homme bon.",
    auteur: "Arthur Schopenhauer(1788-1860) est un philosophe allemand qui a eu une influence importante et a publié en 1819. \"Le monde comme volonté et comme représentation\".",
    categorie: ["tous", "morale"],
  },
  {
    texte: "L'homme est le seul animal qui en fait souffrir d'autres sans autre but que celui-là.",
    auteur: "Arthur Schopenhauer(1788-1860) est un philosophe allemand qui a eu une influence importante et a publié en 1819. \"Le monde comme volonté et comme représentation\".",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Les lettrés sont ceux qui ont lu dans les livres; mais les penseurs, les génies, les flambeaux de l'humanité et les pionniers de la race humaine sont ceux qui ont lu directement dans le livre de l'univers.",
    auteur: "Arthur Schopenhauer(1788-1860) est un philosophe allemand qui a eu une influence importante et a publié en 1819. \"Le monde comme volonté et comme représentation\".",
    categorie: ["tous"],
  },
  {
    texte: "Le destin mêle les cartes en nous jouons.",
    auteur: "Arthur Schopenhauer(1788-1860) est un philosophe allemand qui a eu une influence importante et a publié en 1819. \"Le monde comme volonté et comme représentation\".",
    categorie: ["tous"],
  },
  {
    texte: "La condition première pour être heureux dans la vie, c'est d'accepter d'être ce que nous sommes.",
    auteur: "Arthur Schopenhauer(1788-1860) est un philosophe allemand qui a eu une influence importante et a publié en 1819. \"Le monde comme volonté et comme représentation\".",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Attribuer une haute valeur à l'opinion des hommes, c'est leur faire trop d'honneur.",
    auteur: "Arthur Schopenhauer(1788-1860) est un philosophe allemand qui a eu une influence importante et a publié en 1819. \"Le monde comme volonté et comme représentation\".",
    categorie: ["tous"],
  },
  {
    texte: "On ne peut-être vraiment soi qu'aussi longtemps qu'on est seul; qui n'aime donc pas la solitude n'aime pas la liberté.",
    auteur: "Arthur Schopenhauer(1788-1860) est un philosophe allemand qui a eu une influence importante et a publié en 1819. \"Le monde comme volonté et comme représentation\".",
    categorie: ["tous"],
  },
  {
    texte: "Les grands hommes sont comme des aigles et constuisent leur nid sur un noble solitude.",
    auteur: "Arthur Schopenhauer(1788-1860) est un philosophe allemand qui a eu une influence importante et a publié en 1819. \"Le monde comme volonté et comme représentation\".",
    categorie: ["tous"],
  },
  {
    texte: "On n'établit pas une dictature pour sauvegarder une révolution. On fait une révolution pour établir une dictature.",
    auteur: "George Orwell(1903-1950) est un écrivain, essayiste et journaliste britannique célèbre pour avoir publié \"1984\".",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Jamais personne ne s'empare du pouvoir avec l'intention d'y renoncer.",
    auteur: "George Orwell(1903-1950) est un écrivain, essayiste et journaliste britannique célèbre pour avoir publié \"1984\".",
    categorie: ["tous", "liberte", "sagesse"],
  },
  {
    texte: "Il y'a partout la même structure pyramidale, le même système économique existant par et pour une guerre continuelle.",
    auteur: "George Orwell(1903-1950) est un écrivain, essayiste et journaliste britannique célèbre pour avoir publié \"1984\".",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Si vous vous accrochez à la vérite, même contre le monde entier, vous n'êtes pas fou.",
    auteur: "George Orwell(1903-1950) est un écrivain, essayiste et journaliste britannique célèbre pour avoir publié \"1984\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le progrès dans notre monde sera le progrès vers plus de souffrance.",
    auteur: "George Orwell(1903-1950) est un écrivain, essayiste et journaliste britannique célèbre pour avoir publié \"1984\".",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Le pouvoir consiste à déchirer les esprits humains en morceaux et à les reconstituer dans de nouvelles formes.",
    auteur: "George Orwell(1903-1950) est un écrivain, essayiste et journaliste britannique célèbre pour avoir publié \"1984\".",
    categorie: ["tous", "liberte", "morale"],
  },
  {
    texte: "Le ministère de la Paix s'occupe de la guerre, le ministère de la vérité des mensonges, le ministère de l'amour de la torture et le ministère de l'abondance de la famine.",
    auteur: "George Orwell(1903-1950) est un écrivain, essayiste et journaliste britannique célèbre pour avoir publié \"1984\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Comment un homme peut-il affirmer son pouvoir sur un autre? En le faisant souffrir. L'obéissance ne suffit pas.",
    auteur: "George Orwell(1903-1950) est un écrivain, essayiste et journaliste britannique célèbre pour avoir publié \"1984\".",
    categorie: ["tous", "liberte", "morale"],
  },
  {
    texte: "Tant qu'ils ne deviendront pas conscients, ils ne se rebelleront jamais, et tant qu'ils ne se seront pas rebellés, ils ne pourront pas devenir conscients.",
    auteur: "George Orwell(1903-1950) est un écrivain, essayiste et journaliste britannique célèbre pour avoir publié \"1984\".",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Le passé a été effacé, l'effacement a été oublié, le mensonge est devenu la vérité.",
    auteur: "George Orwell(1903-1950) est un écrivain, essayiste et journaliste britannique célèbre pour avoir publié \"1984\".",
    categorie: ["tous"],
  },
  {
    texte: "A une époque de supercherie universelle, dire la vérité est un acte révolutionnaire.",
    auteur: "George Orwell(1903-1950) est un écrivain, essayiste et journaliste britannique célèbre pour avoir publié \"1984\".",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Les masses ne se révoltent jamais de leur propre mouvement et elles ne se révoltent jamais par le seul fait qu'elles soient opprimées. Aussi longtemps qu'elles n'ont pas d'élément de comparaison. Elles ne se rendent jamais compte qu'elles sont opprimées.",
    auteur: "George Orwell(1903-1950) est un écrivain, essayiste et journaliste britannique célèbre pour avoir publié \"1984\".",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Pour que l'égalité humaine soit à jamais écartée, pour les grands, comme nous les avons appelés, gardent perpétuellement leurs places. La condition mentale dominante doit être la folie dirigée.",
    auteur: "George Orwell(1903-1950) est un écrivain, essayiste et journaliste britannique célèbre pour avoir publié \"1984\".",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Il faudrait convaincre les hommes du bonheur qu'ils ignorent, lors même qu'ils en jouissent.",
    auteur: "Montesquieu(1689-1755) est un philosophe et écrivain français des lumières. Il est à l'origine de grands ouvrages dont \"l'Esprit des lois\" écrit en 1748.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Une injustice faite à un seul est une menace faîte à tous.",
    auteur: "Montesquieu(1689-1755) est un philosophe et écrivain français des lumières. Il est à l'origine de grands ouvrages dont \"l'Esprit des lois\" écrit en 1748.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "La tristesse vient de la solitude du coeur.",
    auteur: "Montesquieu(1689-1755) est un philosophe et écrivain français des lumières. Il est à l'origine de grands ouvrages dont \"l'Esprit des lois\" écrit en 1748.",
    categorie: ["tous", "sen"],
  },
  {
    texte: "Une chose n'est pas juste parce qu'elle est loi; mais elle doit être loi parce qu'elle est juste.",
    auteur: "Montesquieu(1689-1755) est un philosophe et écrivain français des lumières. Il est à l'origine de grands ouvrages dont \"l'Esprit des lois\" écrit en 1748.",
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Si on ne voulait qu'être heureux, cela serait bientôt fait. Mais on veut être plus heureux que les autres, et cela est presque toujours impossible parce que nous croyons les autres plus heureux qu'ils ne le sont.",
    auteur: "Montesquieu(1689-1755) est un philosophe et écrivain français des lumières. Il est à l'origine de grands ouvrages dont \"l'Esprit des lois\" écrit en 1748.",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "C'est un malheur qu'il y'ait trop peu d'intervalle entre le temps où l'on est trop jeune, et le temps où l'on est trop vieux.",
    auteur: "Montesquieu(1689-1755) est un philosophe et écrivain français des lumières. Il est à l'origine de grands ouvrages dont \"l'Esprit des lois\" écrit en 1748.",
    categorie: ["tous"],
  },
  {
    texte: "Qui connaît bien le prix d'un véritable ami passe sa vie à le chercher.",
    auteur: "Montesquieu(1689-1755) est un philosophe et écrivain français des lumières. Il est à l'origine de grands ouvrages dont \"l'Esprit des lois\" écrit en 1748.",
    categorie: ["tous"],
  },
  {
    texte: "Quand les riches se font la guerre, ce sont les pauvres qui meurent.",
    auteur: "Jean-Paul Sartre(1905-1980) est un écrivain et philosophe français qui représente le courant de l'existentialisme.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "L'homme n'est rien d'autre que son projet, il n'existe que dans la mesure où il se réalise, il n'est donc rien d'autre que l'ensemble de ses actes, rien d'autre que sa vie.",
    auteur: "Jean-Paul Sartre(1905-1980) est un écrivain et philosophe français qui représente le courant de l'existentialisme.",
    categorie: ["tous"],
  },
  {
    texte: "Je peux toujours choisir, mais je dois savoir que si je ne choisis pas, je choisis encore.",
    auteur: "Jean-Paul Sartre(1905-1980) est un écrivain et philosophe français qui représente le courant de l'existentialisme.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "C'est dans l'action, voire dans l'urgence de la situation que je peux me rendre compte si je suis courageux.",
    auteur: "Jean-Paul Sartre(1905-1980) est un écrivain et philosophe français qui représente le courant de l'existentialisme.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Quant aux hommes, ce n'est pas ce qu'ils sont qui m'intéresse mais ce qu'ils pourront devenir.",
    auteur: "Jean-Paul Sartre(1905-1980) est un écrivain et philosophe français qui représente le courant de l'existentialisme.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Je ne puis prendre ma liberté pour but, que si je prends également celle des autres pour but.",
    auteur: "Jean-Paul Sartre(1905-1980) est un écrivain et philosophe français qui représente le courant de l'existentialisme.",
    categorie: ["tous", "liberte"],
  },
  {
    texte: "La violence, sous quelque forme qu'elle se manifeste, est un échec.",
    auteur: "Jean-Paul Sartre(1905-1980) est un écrivain et philosophe français qui représente le courant de l'existentialisme.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Dans la vie on ne fait pas toujours ce que l'on veut, mais on est toujours responsable de ce que l'ont est.",
    auteur: "Jean-Paul Sartre(1905-1980) est un écrivain et philosophe français qui représente le courant de l'existentialisme.",
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "La vie est ce que nous la rêvons. La mesure de la vie, c'est l'amour",
    auteur: "Romain Rolland(1866-1944) est un écrivain français qui a obtenu le rpix nobel de littérature en 1915. Il rechercha durant sa vie la communion entre les hommes et fut une figure de la non-violence.",
    categorie: ["tous", "reve", "sen"],
  },
  {
    texte: "Peu importe le succés, il s'agit d'être grand, non de le paraître.",
    auteur: "Romain Rolland(1866-1944) est un écrivain français qui a obtenu le rpix nobel de littérature en 1915. Il rechercha durant sa vie la communion entre les hommes et fut une figure de la non-violence.",
    categorie: ["tous"],
  },
  {
    texte: "Le métier des intellectuels est de chercher la vérité au milieu de l'erreur.",
    auteur: "Romain Rolland(1866-1944) est un écrivain français qui a obtenu le rpix nobel de littérature en 1915. Il rechercha durant sa vie la communion entre les hommes et fut une figure de la non-violence.",
    categorie: ["tous"],
  },
  {
    texte: "Même sans espoir, la lutte est encore un espoir.",
    auteur: "Romain Rolland(1866-1944) est un écrivain français qui a obtenu le rpix nobel de littérature en 1915. Il rechercha durant sa vie la communion entre les hommes et fut une figure de la non-violence.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Tu ne vivrais pas, si tu ne croyais pas. Chacun croit",
    auteur: "Romain Rolland(1866-1944) est un écrivain français qui a obtenu le rpix nobel de littérature en 1915. Il rechercha durant sa vie la communion entre les hommes et fut une figure de la non-violence.",
    categorie: ["tous"],
  },
  {
    texte: "En agissant, on se trompe parfois; en ne faisant rien, on se trompe toujours.",
    auteur: "Romain Rolland(1866-1944) est un écrivain français qui a obtenu le rpix nobel de littérature en 1915. Il rechercha durant sa vie la communion entre les hommes et fut une figure de la non-violence.",
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "La véritable éducation c'est d'apprendre comment penser et non pas quoi penser.",
    auteur: "jiddu krishnamurti(1895-1986) est un penseur indien.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La relation est un miroir dans lequel on peut se voir, non pas tel que je souhaiterais être, mais tel que je suis.",
    auteur: "jiddu krishnamurti(1895-1986) est un penseur indien.",
    categorie: ["tous"],
  },
  {
    texte: "Si l'on ne se compare à personne on devient ce que l'on est.",
    auteur: "jiddu krishnamurti(1895-1986) est un penseur indien.",
    categorie: ["tous"],
  },
  {
    texte: "Nous cherchons toujours à jeter un pont entre ce qui est et ce qui devrait être, et par là, donnons naissance à un état de contradiction et de conflit ou se perdent toutes les énergies.",
    auteur: "jiddu krishnamurti(1895-1986) est un penseur indien.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Ce n'est pas un signe de bonne santé mentale d'être bien adapté à une société malade.",
    auteur: "jiddu krishnamurti(1895-1986) est un penseur indien.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'éducation consiste à comprendre l'enfant tel qu'il est sans lui imposer l'image de ce que nous pensons qu'il devrait être.",
    auteur: "jiddu krishnamurti(1895-1986) est un penseur indien.",
    categorie: ["tous", ],
  },
  {
    texte: "La vérité est un pays sans chemin. Dès que vous suivez quelqu'un, vous cessez de suivre la vérité.",
    auteur: "jiddu krishnamurti(1895-1986) est un penseur indien.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La peur bloque la compréhension intelligente de la vie.",
    auteur: "jiddu krishnamurti(1895-1986) est un penseur indien.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Nous ne savons pas vivre et, par conséquent, nous ne savons pas mourir. Tant que nous aurons peur de la vie, nous aurons peur de la mort.",
    auteur: "jiddu krishnamurti(1895-1986) est un penseur indien.",
    categorie: ["tous"],
  },
  {
    texte: "L'ignorant n'est pas celui qui manque d'érudition mais celui qui ne se connaît pas lui-même.",
    auteur: "jiddu krishnamurti(1895-1986) est un penseur indien.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Les gagnants trouvent des moyens, les perdants des excuses.",
    auteur: "Franklin Delano Roosevelt(1882-1945) a été élu à quatre reprises président des Etats-Unis.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Il est dur d'échouer; mais il est pire de n'avoir jamais tenté de réussir.",
    auteur: "Franklin Delano Roosevelt(1882-1945) a été élu à quatre reprises président des Etats-Unis.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Faites quelque chose et, si ça ne réussit pas. Essayez autre chose.",
    auteur: "Franklin Delano Roosevelt(1882-1945) a été élu à quatre reprises président des Etats-Unis.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Exposez-vous à vos peurs les plus profondes et après cela, la peur ne pourra plus vous atteindre.",
    auteur: "Jim Morrison(1943-1971) est un chanteur et poète américain cofondateur du groupe de rock The Doors.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "L'instant est béni. Tout le reste est souvenir.",
    auteur: "Jim Morrison(1943-1971) est un chanteur et poète américain cofondateur du groupe de rock The Doors.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "C'est le propre de l'amour véritable de laisser une personne être ce qu'elle est vraiment.",
    auteur: "Jim Morrison(1943-1971) est un chanteur et poète américain cofondateur du groupe de rock The Doors.",
    categorie: ["tous"],
  },
  {
    texte: "Celui qui contrôle les médias contrôle les esprits.",
    auteur: "Jim Morrison(1943-1971) est un chanteur et poète américain cofondateur du groupe de rock The Doors.",
    categorie: ["tous", "liberte", "sagesse"],
  },
  {
    texte: "La droite a gagné les élections. La gauche a gagné les éléctions. Quand est-ce que ce sera la France qui gagnera les élections ?",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous"],
  },
  {
    texte: "S'il y'avait un impôt sur la connerie l'Etat s'autofinancerait.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous"],
  },
  {
    texte: "On n'arrête pas le progrès dit-on, la bétise non plus.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous"],
  },
  {
    texte: "On dit toujours qu'on peut pas être et avoir été. Eh ben, j'en connais un, dis donc, il a été con et il l'est encore !",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous"],
  },
  {
    texte: "Des fois, on a plus de contacts avec un chien pauvre qu'avec un homme riche.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Je ferais admirablement remarquer aux hommes politiques qui me prennent pour un rigolo que ce n'est pas moi qui ai commencé.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous"],
  },
  {
    texte: "La droite vend des promesses et ne les tient pas, la gauche vend de l'espoir et le brise.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "C'est pas parce qu'ils sont nombreux à avoir tort qu'ils ont raison !",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "On ne peut pas dire la vérité à la télé: il y'a trop de monde qui regarde.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous"],
  },
  {
    texte: "Si voter changeait quelque chose il y'a longtemps que ça serait interdit.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous"],
  },
  {
    texte: "Il paraît que la crise rend les riches plus riches et les pauvres plus pauvres. Je ne vois pas en quoi c'est une crise. Depuis que je suis petit, c'est comme ça.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Pour critiquer les gens il faut les connaître, et pour les connaître, il faut les aimer.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "C'est pas vraiment de ma faute si y'en a qui ont faim. Mais ça le deviendrait si on y changeait rien.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Les portes de l'avenir sont ouvertes à ceux qui savent les pousser.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "De tous ceux qui n'ont rien à dire, les plus agréables sont ceux qui se taisent.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La différence qu'il y'a entre les oiseaux et les hommes politiques, c'est que de temps en temps les oiseaux s'arrêtent de voler !",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Tant qu'on fait rire, c'est des plaisanteries. Dès que ce n'est pas drôle, c'est des insultes.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le mariage, la confiance n'y est pas. Il faut des témoins, comme dans les accidents.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous"],
  },
  {
    texte: "Je suis capable du meilleur et du pire. Mais, dans le pire, c'est moi le meilleur.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous"],
  },
  {
    texte: "La chambre des députés: la moitié est bonne à rien. Les autres sont prêts à tout.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Certains ont l'air honnête, mais quand ils te serrent la main, tu as intérêt à recompter tes doigts.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Dieu a dit : \"Je partage en deux, les riches auront de la nourriture, les pauvres de l'appétit\".",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Mesdames, un conseil. Si vous cherchez un homme beau, riche et intelligent... prenez-en trois !",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous"],
  },
  {
    texte: "Dans la vie, y'a pas de grands, y'a pas de petits. La bonne longueur pour les jambes, c'est quand les pieds touchent par terre.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Si vous avez besoin de quelque chose, appelez-moi. Je vous dirai comment vous en passer.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous", "bonheur", "liberte"],
  },
  {
    texte: "Dans les fins de mois, ce qui est le plus dur, c'est les trente derniers jours.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Rappelez-vous toujours que si la Gestapo avait les moyens de vous faire parler; les politiciens ont eux, les moyens de vous faire taire.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous", "liberte", "morale"],
  },
  {
    texte: "Homme politique, c'est une profession où il est plus utile d'avoir des relations que des remords.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "J'arrêterai de faire de la politique quand les hommes politiques arrêteront de nous faire rire.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous"],
  },
  {
    texte: "La politique c'est pas compliqué, il suffit d'avoir bonne conscience, et pour cela il suffit d'avoir une mauvaise mémoire.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "Les journalistes ne croient pas les mensonges des hommes politiques, mais ils les répétent, c'est pire.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous"],
  },
  {
    texte: "A la télé ils disent tous les jours : il y'a tand de millions de personnes qui cherchent du travail, c'est pas vrai, de l'argent leur suffirait.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "A 20h à la télé quand tous les pauvres sortent du travail, on ne pourrait pas dire toute la vérité. Sinon la majorité n'irait pas travailler le lendemain.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Tous les hommes politiques sont des comiques de circonstances, moi j'ai sur eux l'avantage d'être un comique professionnel.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous"],
  },
  {
    texte: "A quoi sert le pouvoir si c'est pour ne pas en abuser ?",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous", "morale"],
  },
  {
    texte: "La vie mettra des pierres sur ta route. A toi de décider d'en faire des murs ou des ponts.",
    auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
    categorie: ["tous", "courage"],
  },
  {
    texte: "Nous sommes tous obligés, pour rendre la réalité supportable, d'entretenir en nous quelques petites folies.",
    auteur: "Marcel Proust(1871-1922) est un écrivain français qui a publié \"A la recherche du temps perdu\".",
    categorie: ["tous", "reve"],
  },
  {
    texte: "Le bonheur est salutaire pour le corps, mais c'est le chagrin qui développe les forces de l'esprit.",
    auteur: "Marcel Proust(1871-1922) est un écrivain français qui a publié \"A la recherche du temps perdu\".",
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Savoir qu'on n'a plus rien à espérer n'empêche pas de continuer à attendre.",
    auteur: "Marcel Proust(1871-1922) est un écrivain français qui a publié \"A la recherche du temps perdu\".",
    categorie: ["tous"],
  },
  {
    texte: "Les jours sont peut-être égaux pour une horloge, mais pas pour un homme.",
    auteur: "Marcel Proust(1871-1922) est un écrivain français qui a publié \"A la recherche du temps perdu\".",
    categorie: ["tous"],
  },
  {
    texte: "Une heure n'est pas une heure, c'est un vase rempli de parfums, de sons, de projets et de climats.",
    auteur: "Marcel Proust(1871-1922) est un écrivain français qui a publié \"A la recherche du temps perdu\".",
    categorie: ["tous", "bonheur", "sen"],
  },
  {
    texte: "La vie est semée de ces miracles que peuvent toujours espérer les personnes qui aiment.",
    auteur: "Marcel Proust(1871-1922) est un écrivain français qui a publié \"A la recherche du temps perdu\".",
    categorie: ["tous"],
  },
  {
    texte: "Il n'y a pas de réussite facile ni d'échecs définitifs.",
    auteur: "Marcel Proust(1871-1922) est un écrivain français qui a publié \"A la recherche du temps perdu\".",
    categorie: ["tous", "courage"],
  },
  {
    texte: "L'amour c'est l'espace et le temps rendus sensibles au coeur.",
    auteur: "Marcel Proust(1871-1922) est un écrivain français qui a publié \"A la recherche du temps perdu\".",
    categorie: ["tous", "sen"],
  },
  {
    texte: "Nous ne savons jamais si nous ne sommes pas en train de manquer notre vie.",
    auteur: "Marcel Proust(1871-1922) est un écrivain français qui a publié \"A la recherche du temps perdu\".",
    categorie: ["tous"],
  },
  {
    texte: "Le désir fleurit, la possession flétrit toutes choses.",
    auteur: "Marcel Proust(1871-1922) est un écrivain français qui a publié \"A la recherche du temps perdu\".",
    categorie: ["tous", "morale"],
  },
  {
    texte: "On ne trouve le bonheur qu'à faire ce qu'on aime avec les tendances profondes de son âme.",
    auteur: "Marcel Proust(1871-1922) est un écrivain français qui a publié \"A la recherche du temps perdu\".",
    categorie: ["tous", "bonheur", "sen"],
  },
  {
    texte: "La douleur est un aussi puissant modificateur de la réalité qu'est l'ivresse.",
    auteur: "Marcel Proust(1871-1922) est un écrivain français qui a publié \"A la recherche du temps perdu\".",
    categorie: ["tous", "sen"],
  },
  {
    texte: "On ne reçoit pas la sagesse, il faut la découvrir soi-même après un trajet que personne ne peut faire pour vous.",
    auteur: "Marcel Proust(1871-1922) est un écrivain français qui a publié \"A la recherche du temps perdu\".",
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Là où la vive emmure, l'intelligence perce une issue.",
    auteur: "Marcel Proust(1871-1922) est un écrivain français qui a publié \"A la recherche du temps perdu\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Tachez de garder toujours un morceau de ciel au-dessus de votre vie.",
    auteur: "Marcel Proust(1871-1922) est un écrivain français qui a publié \"A la recherche du temps perdu\".",
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Il vaut mieux rêver sa vie que la vivre, encore que la vivre, ce soit encore la rêver.",
    auteur: "Marcel Proust(1871-1922) est un écrivain français qui a publié \"A la recherche du temps perdu\".",
    categorie: ["tous", "bonheur", "reve"],
  },
  {
    texte: "Le véritable voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux.",
    auteur: "Marcel Proust(1871-1922) est un écrivain français qui a publié \"A la recherche du temps perdu\".",
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Au fur et à mesure que je modifie mes pensées, le monde autour de moi se transforme.",
    auteur: "Louise Hay(1926-2017) est auteur de nombreux ouvrages sur le développement personnel.",
    categorie: ["tous", "reve"],
  },
];
