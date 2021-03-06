"use strict";

/*Fichier utilitaire servant à y écrire les citations et les informations pouvant être utiles pour d'autres fichiers.
*/

const einstein = {
  photo: "Albert Einstein",
  auteur: "Albert Einstein(1879-1955) est un physicien théoricien qui a découvert la théorie de la relativité restreinte en 1905 et celle de la gravitation en 1915."
}

const malcolmX = {
  photo: "Malcolm X",
  auteur: "Malcolm X(1925-1965) est un militant politique et un défenseur des droits de l'homme qui a été assassiné le 21 février 1965 à Harlem.",
}

const victorHugo = {
  photo: "Victor Hugo",
  auteur: "Victor Hugo(1802-1885) est un écrivain et un poète engagé idéologiquement et dans le débat politique. Il est considéré comme l'un des écrivains les plus importants de la langue française.",
}

const martinLutherKing = {
  photo: "Martin Luther King",
  auteur: "Martin Luther King(1929-1968) est un pasteur et un militant pour les droits civiques, la paix et la lutte contre la pauvreté. Il mena une lutte non-violente et fini assassiné officiellement par James Earl Ray.",
}

const aldousHuxley = {
  photo: "Aldous Huxley",
  auteur: "Aldous Huxley(1894-1963) est un écrivain et philosophe ayant écrit une cinquantaine de romans dont le célébre \"Le Meilleur des mondes\".",
}

const aristote = {
  photo: "Aristote",
  auteur: "Aristote(384-322 avant notre ère) est un philosophe grec et l'un des penseurs les plus influents que le monde ait connu.",
}

const benjaminFranklin = {
  photo: "Benjamin Franklin",
  auteur: "Benjamin Franklin(1706-1790) est un écrivain et un homme politique Américain. Il a participé à la rédaction de la déclaration d'indépendance des Etats-Unis.",
}

const confucius = {
  photo: "Confucius",
  auteur: "Confucius(551-479 avant notre ère) est un philosophe chinois. Il est à l'origine de la naissance du confucianisme.",
}

const friedrichNietzsche = {
  photo: "Friedrich Nietzsche",
  auteur: "Friedrich Nietzsche(1844-1900) est un philosophe, poète et écrivain allemand qui a eu un grande influence sur l'histoire intellectuelle contemporaine.",
}

const gandhi = {
  photo: "Gandhi",
  auteur: "Gandhi(1869-1948) est un avocat qui resisté à l'oppression par la désobéissance civile de masse et a conduit l'Inde à l'indépendance.",
}

const khalilGibran = {
  photo: "Khalil Gibran",
  auteur: "Khalil Gibran(1883-1931) est un poéte et un peintre. Il devient populaire en 1923 suite à la publication de \"The Prophet\".",
}

const laoTseu = {
  photo: "Lao Tseu",
  auteur: "Lao Tseu(VIème ou Vème siècle avant notre ère) est considéré comme le père fondateur du taoïsme. Les informations le concernant sont rares et incertaines.",
}

const eleanorRoosevelt = {
  photo: "Eleanor Roosevelt",
  auteur: "Eleanor Roosevelt(1884-1962) est une personnalité politique et une militante. Elle a eu un impact sur la décision des Etats-Unis de se lancer dans la seconde guerre mondiale et défendait les droits civique.",
}

const leonTolstoi = {
  photo: "Léon Tolstoï",
  auteur: "Léon Tolstoï(1828-1910) est un romancier de talent. Il a condamné les pouvoirs civils et ecclésiastiques ce qui lui a valu d'être excommunié par l'Eglise orthodoxe russe.",
}

const nelsonMandela = {
  photo: "Nelson Mandela",
  auteur: "Nelson Mandela(1918-2013) est un avocat qui est devenu président de la République d'Afrique du Sud de 1994 à 1999.",
}

const epicure = {
  photo: "Epicure",
  auteur: "Epicure(342-270 avant notre ère) est un philosophe grec qui a fondé l'épicurisme qui a pour but principal l'atteinte du bonheur.",
}

const socrate = {
  photo: "Socrate",
  auteur: "Socrate(470-399 avant notre ère) est un philosophe qui est l'un des fondateur de la philosophie morale. Socrate n'a laissé aucun écrit, sa pensée est transmise par le bouche à oreilles et par ses disciples Platon et Xénophon.",
}

const osho = {
  photo: "Osho",
  auteur: "Osho(1931-1990) est un écrivain indien qui fonda un centre spirituel en Oregon. Il est le créateur de ce qu'il nomma \"méditation dynamique\".",
}

const dalaiLama = {
  photo: "Dalai-Lama",
  auteur: "Dalaï-lama(création en 1391) est la plus importante lignée de réincarnation du bouddhisme tibétain.",
}

const oscarWilde = {
  photo: "Oscar Wilde",
  auteur: "Oscar Wilde(1854-1900) est un écrivain et un poète. Il s'est inséré dans les cercles cultivés et la bonne société et réussi à s'illustrer dans plusieurs genres littéraires.",
}

const abbePierre = {
  photo: "Abbé Pierre",
  auteur: "Abbé Pierre(1912-2007) est un prêtre catholique et mena une lutte contre l'exclusion.",
}

const bouddha = {
  photo: "Bouddha",
  auteur: "Bouddha désigne une personne qui par sa sagesse à réussi à s'éveiller et atteint le nirvana. L'appellation de bouddha peut donc se référer à plusieurs personnes.",
}

const charlieChaplin = {
  photo: "Charlie Chaplin",
  auteur: "Charlie Chaplin(1889-1977) est un acteur, réalisateur et compositeur. Il acquiert une large notoriété durant sa carrière d'acteur.",
}

const bobMarley = {
  photo: "Bob Marley",
  auteur: "Bob Marley(1945-1981) est un auteur-compositeur et un musicien jamaïcain. Il s'agit du musicien le plus connu mondialement ayant joué du reggae.",
}

const leonardDeVinci = {
  photo: "Léonard de Vinci",
  auteur: "Léonard de Vinci(1452-1519) est un peintre italien qui a peint La Joconde.",
}

const cheGuevara = {
  photo: "Che Guevara",
  auteur: "Che Guevara(1928-1967) est un révolutionnaire et a été un dirigeant de la révolution cubaine dans le but d'abolir les inégalités.",
}

const steveJobs = {
  photo: "Steve Jobs",
  auteur: "Steve Jobs(1955-2011) est un entrepreneur et inventeur qui a été président-directeur général de Pixar Animation Studios, Apple et NeXT.",
}

const mereTeresa = {
  photo: "Mère Teresa",
  auteur: "Mère Teresa(1910-1997) est une religieuse catholique qui a été prix nobel de la paix en 1979. Pendant plus de 40 ans, elle consacre sa vie aux pauvres et aux malades.",
}

const winstonChurchill = {
  photo: "Winston Churchill",
  auteur: "Winston Churchill(1874-1965) est un homme politique et un écrivain britannique. Il est premier ministre du Royaume-Uni de mai 1940 à juillet 1945 puis d'octobre 1951 à avril 1955.",
}

const pauloCoelho = {
  photo: "Paulo Coelho",
  auteur: "Paulo Coelho né en 1947 est un romancier et journaliste qui connait une renommée internationale depuis la publication de l'Alchimiste.",
}

const waltDisney = {
  photo: "Walt Disney",
  auteur: "Walt Disney(1901-1966) est l'un des pionniers de l'animation. Il créé la société Walt Disney Company et produit des films célèbres.",
}

const christopheColomb = {
  photo: "Christophe Colomb",
  auteur: "Christophe Colomb(1451-1506) est un explorateur et fut chargé d'atteindre l'Asie orientale en traversant l'océan Atlantique avec trois caravelles.",
}

const marilynMonroe = {
  photo: "Marilyn Monroe",
  auteur: "Marilyn Monroe(1926-1962) est un actrice, chanteuse et mannequin américaine. Elle a acquis une grande notoriété grâce à sa carrière au cinéma.",
}

const marieCurie = {
  photo: "Marie Curie",
  auteur: "Marie Curie(1867-1934) est une physicienne et chimiste qui obtient le prix nobel de chimie pour ses travaux sur le polonium et le radium et 1911.",
}

const markTwain = {
  photo: "Mark Twain",
  auteur: "Mark Twain(1835-1910) est un écrivain américain qui s'est fait connaitre par son roman \"Les Aventures de Tom Sawyer\".",
}

const emileZola = {
  photo: "Emile Zola",
  auteur: "Emile Zola(1840-1902) est un romancier trés populaire et ses romans ont connus de nombreuses adaptations au cinéma.",
}

const pierreKroptokine = {
  photo: "Pierre Kroptokine",
  auteur: "Pierre Kroptotkine(1842-1921) est un géographe et un théoricien. Il a était emprisonné plusieurs fois pour des activités révolutionnaires ou des grèves ouvrières.",
}

const pierreJosephProudhon = {
  photo: "Pierre-Joseph Proudhon",
  auteur: "Pierre-Joseph Proudhon(1809-1865) est un théoricien révolutionnaire et il est le précurseur de l'anarchisme.",
}

const herbertMarcuse = {
  photo: "Herbert Marcuse",
  auteur: "Herbert Marcuse(1898-1979) est un philosophe, sociologue et professeur d'université.",
}

const maxStirner = {
  photo: "Max Stirner",
  auteur: "Max Stirner(1806-1856) est un philosophe qui est un des précuseurs de l'existentialisme et de l'anarchisme individualiste.",
}

const karlMarx = {
  photo: "Karl Marx",
  auteur: "Karl Marx(1818-1883) est un philosophe, historien et théoricien. Il est célèbre pour ses analyses sur le capitalisme et la lutte des classes.",
}

const louiseMichel = {
  photo: "Louise Michel",
  auteur: "Louise Michel(1830-1905) est une militante anarchiste qui a été l'une des figures majeures de la commune de Paris.",
}

const octaveMirbeau = {
  photo: "Octave Mirbeau",
  auteur: "Octave Mirbeau(1848-1917) est un écrivain et journaliste français. Il s'agissait d'un journaliste influent qui connu un grand succès populaire.",
}

const mikhailBakounine = {
  photo: "Mikhail Bakounine",
  auteur: "Mikhail Bakounine(1814-1876) est un révolutionnaire et philosophe russe qui s'est principalement intéressé au rôle de l'Etat.",
}

const sylvainMarechal = {
  photo: "Sylvain Maréchal",
  auteur: "Sylvain Maréchal(1750-1803) est un écrivain et poète qui est passionné par l'égalité sociale. C'est un précuseur de la grève générale.",
}

const etienneDeLaBoetie = {
  photo: "Etienne de la Boétie",
  auteur: "Etienne de la Boétie(1530-1563) est un écrivain, poète et juriste français. Il est célèbre pour son discours sur la servitude volontaire.",
}

const rosaLuxemburg = {
  photo: "Rosa Luxemburg",
  auteur: "Rosa Luxemburg(1879-1919) est une militante socialiste et communiste. Elle s'opposa à la première guerre mondiale et fut exclu du parti social-démocrate d'Allemagne.",
}

const augustSpies = {
  photo: "August Spies",
  auteur: "August Spies(1855-1887) est un militant socialiste américain qui fut pendu pour des raisons douteuses à la suite de l'attentat à la bombe contre la police à Haymarket Square.",
}

const marcelJouhandeau = {
  photo: "Marcel Jouhandeau",
  auteur: "Marcel Jouhandeau(1888-1979) est un écrivain qui a écrit plus d'une centaine d'ouvrages.",
}

const johannWolgangVonGoethe = {
  photo: "Johann Wolfgang von Goethe",
  auteur: "Johann Wolfgang von Goethe(1749-1832) est un romancier et un poète. Son oeuvre littéraire comprend de la poésie, du théâtre, de la théorie littéraire...",
}

const alEvans = {
  photo: "AL Evans",
  auteur: "AL Evans(1916-1979) est un sportif de haut niveau qui était dans la Major League Baseball.",
}

const octaveFeuillet = {
  photo: "Octave Feuillet",
  auteur: "Octave Feuillet(1821-1890) est un écrivain françaus et fut membre de l'académie française.",
}

const joelBrown = {
  photo: "Joel Brown",
  auteur: "Joel Brown né en 1980 est un athlète américain spécialiste du 110 mètres haies.",
}

const jeanBies = {
  photo: "Jean Biès",
  auteur: "Jean Biès(1933-2014) est un professeur, écrivain et philosophe qui a travaillé sur la jonction des sagesses orientales et occidentales.",
}

const paulFort = {
  photo: "Paul Fort",
  auteur: "Paul Fort(1872-1960) est un poète et l'auteur d'une ouvre poétique abondante.",
}

const oliverGoldsmith = {
  photo: "Oliver Goldsmith",
  auteur: "Oliver Goldsmith(1728-1774) est un écrivain irlandais.",
}

const theodoreRoosevelt = {
  photo: "Théodore Roosevelt",
  auteur: "Théodore Roosevelt(1858-1919) est un politique américain qui reçu le prix nobel de la paix en 1906 et a était vice-président des Etats-Unis sous le second mandat de William McKinley.",
}

const michaelJordan = {
  photo: "Michael Jordan",
  auteur: "Michael Jordan né en 1963 est un joueur de basket-ball américain. Il s'agit peut-être du plus grand joueur de basket-ball de tous les temps.",
}

const anatoleFrance = {
  photo: "Anatole France",
  auteur: "Anatole France(1844-1924) est un écrivain français considéré comme l'un des plus grands de l'époque. Il s'engage dans de nombreuses causes sociales et politiques.",
}

const edSheeran = {
  photo: "Ed Sheeran",
  auteur: "Ed Sheeran né en 1991 est un auteur-compositeur et guitariste anglais. Il écrit des chansons pour plusieurs célébrités, tels que James Blunt, Robbie Williams...",
}

const georgesBrassens = {
  photo: "Georges Brassens",
  auteur: "Georges Brassens(1921-1981) est un auteur-compositeur-interpréte français qui reçoit le grand prix de la poésie de l'académie française en 1967.",
}

const ernestHemingway = {
  photo: "Ernest Hemingway",
  auteur: "Ernest Hemingway(1889-1961) est un romancier qui reçu le prix nobel de littérature en 1954.",
}

const pierreLarousse = {
  photo: "Pierre Larousse",
  auteur: "Pierre Larousse(1817-1875) est un pédagogue et encyclopédiste français. Sa principale réalisation est le Grand Dictionnaire universel du XIXème siècle.",
}

const leonBlum = {
  photo: "Léon Blum",
  auteur: "Léon Blum(1872-1950) est un magistrat du Conseil D'Etat et un écrivain. Lors de l'occupation de la France par les armées du troisième Reich. Il est emprisonné par le régime de Vichy.",
}

const julesRenard = {
  photo: "Jules Renard",
  auteur: "Jules Renard(1864-1910) est un écrivain et auteur dramatique français.",
}

const paulEluard = {
  photo: "Paul Eluard",
  auteur: "Paul Eluard(1895-1952) est un poète français.",
}

const pericles = {
  photo: "Périclès",
  auteur: "Périclès(495-429 avant notre ère) est un homme d'Etat athénien, un stratège et un orateur.",
}

const albertCamus = {
  photo: "Albert Camus",
  auteur: "Albert Camus(1913-1960) est un écrivain, philosophe et romancier. Il est aussi journaliste militant engagé dans la résistance française et reçoit le prix nobel de littérature en 1957.",
}

const jeanJacquesRousseau = {
  photo: "Jean-Jacques Rousseau",
  auteur: "Jean-Jacques Rousseau(1712-1778) est un écrivain, philosophe. Il a eu une influence considérable lors de la période révolutionnaire et à écrit le Contrat Social.",
}

const hindoue = {
  photo: "Sagesse hindoue",
  auteur: "sagesse hindoue",
}

const mikaoUsui = {
  photo: "Mikao Usui",
  auteur: "Mikao Usui(1865-1926) a suivi des études en médecine et en psychologie pour devenir moine bouddhiste.",
}

const billCosby = {
  photo: "Bill Cosby",
  auteur: "Bill Cosby est né en 1937. C'est un acteur, producteur, scénariste et réalisateur américain devenu populaire grâce a son sitcom le Cosby Show.",
}

const williamShakespeare = {
  photo: "William Shakespeare",
  auteur: "William Shakespeare(1564-1616) est un poète et dramaturge de langue anglaise. Il est considéré comme l'un des plus grands poétes.",
}

const voltaire = {
  photo: "Voltaire",
  auteur: "Voltaire(1694-1778) est un écrivain, philosophe et un homme d'affaires français. Il est le représentant le plus connu de la philosophie des lumières.",
}

const moliere = {
  photo: "Molière",
  auteur: "Molière(1622-1673) est un comédien et dramaturge français. C'est un créateur et interpréte et jouera le rôle principal de ses pièces.",
}

const wayneGretzky = {
  photo: "Wayne Gretzky",
  auteur: "Wayne Gretzky né en 1961 est un joueur professionnel canadien de hockey sur glace.",
}

const carlJung = {
  photo: "Carl Jung",
  auteur: "Carl Jung(1875-1961) est un psychologue analytique et un penseur influent. Il est l'auteur de nombreux ouvrages.",
}

const margueriteYourcenar = {
  photo: "Marguerite Yourcenar",
  auteur: "Marguerite Yourcenar(1903-1987) est une femme de lettres française et une romancière qui a été la première femme élue membre de l'académie française en 1980.",
}

const henryMiller = {
  photo: "Henry Miller",
  auteur: "Henry Miller(1891-1980) est un romancier qui est connu pour avoir rompu avec les formes littéraires existantes en développant le roman semi-autobiographique.",
}

const marcAurele = {
  photo: "Marc Aurèle",
  auteur: "Marc Aurèle(121-180) est un empereur, philosophe stoïcien et écrivain romain.",
}

const epictete = {
  photo: "Epictète",
  auteur: "Epictète(50-125) est un philosophe de l'école stoïcienne et ne laissa aucune oeuvre écrite de sa main.",
}

const platon = {
  photo: "Platon",
  auteur: "Platon(428-347 avant notre ère) est un philosophe de la Grèce classique.",
}

const rumi = {
  photo: "Rûmî",
  auteur: "Rûmî(1207-1273) est un poète mystique persan qui a profondément influencé le soufisme. Il est considéré en orient comme un grand maître spirituel.",
}

const seneque = {
  photo: "Sénèque",
  auteur: "Sénèque(4 avant notre ère - 65) est un philosophe de l'école stoïcienne et un homme d'Etat romain. Il a était le conseillé de Caligula.",
}

const robertFrost = {
  photo: "Robert Frost",
  auteur: "Robert Frost(1874-1963) est un poète américain.",
}

const reneChar = {
  photo: "René Char",
  auteur: "René Char(1907-1988) est un poète et un résistant français.",
}

const arthurSchopenhauer = {
  photo: "Arthur Schopenhauer",
  auteur: "Arthur Schopenhauer(1788-1860) est un philosophe allemand qui a eu une influence importante et a publié en 1819. \"Le monde comme volonté et comme représentation\".",
}

const georgeOrwell = {
  photo: "George Orwell",
  auteur: "George Orwell(1903-1950) est un écrivain, essayiste et journaliste britannique célèbre pour avoir publié \"1984\".",
}

const montesquieu = {
  photo: "Montesquieu",
  auteur: "Montesquieu(1689-1755) est un philosophe et écrivain français des lumières. Il est à l'origine de grands ouvrages dont \"l'Esprit des lois\" écrit en 1748.",
}

const jidduKrishnamurti = {
  photo: "Jiddu Krishnamurti",
  auteur: "Jiddu Krishnamurti(1895-1986) est un penseur indien.",
}

const jeanPaulSartre = {
  photo: "Jean-Paul Sartre",
  auteur: "Jean-Paul Sartre(1905-1980) est un écrivain et philosophe français qui représente le courant de l'existentialisme.",
}

const romainRolland = {
  photo: "Romain Rolland",
  auteur: "Romain Rolland(1866-1944) est un écrivain français qui a obtenu le prix nobel de littérature en 1915. Il rechercha durant sa vie la communion entre les hommes et fut une figure de la non-violence.",
}

const franklinDelanoRoosevelt = {
  photo: "Franklin Delano Roosevelt",
  auteur: "Franklin Delano Roosevelt(1882-1945) a été élu à quatre reprises président des Etats-Unis.",
}

const jimMorrison = {
  photo: "Jim Morrison",
  auteur: "Jim Morrison(1943-1971) est un chanteur et poète américain cofondateur du groupe de rock The Doors.",
}

const coluche = {
  photo: "Coluche",
  auteur: "Coluche(1944-1986) est un humoriste et comédien français est le fondateur des Restos du coeur.",
}

const marcelProust = {
  photo: "Marcel Proust",
  auteur: "Marcel Proust(1871-1922) est un écrivain français qui a publié \"A la recherche du temps perdu\".",
}

const antoineDeSaintExupery = {
  photo: "Antoine de Saint-Exupéry",
  auteur: "Antoine de Saint-Exupéry(1900-1944) est un écrivain, poète, aviateur et reporter français.",
}

const virginiaWoolf = {
  photo: "Virginia Woolf",
  auteur: "Virginia Woolf(1882-1941) est une femme de lettres anglaise.",
}

const georgesBernanos = {
  photo: "Georges Bernanos",
  auteur: "Georges Bernanos(1888-1948) est un écrivain français.",
}

const charlesBeaudelaire = {
  photo: "Charles Beaudelaire",
  auteur: "Charles Beaudelaire(1821-1867) est un poète français.",
}

const thomasJefferson = {
  photo: "Thomas Jefferson",
  auteur: "Thomas Jefferson(1743-1826) est le trosième président des Etats-Unis.",
}

const bruceLee = {
  photo: "Bruce Lee",
  auteur: "Bruce Lee(1940-1973) est un acteur, réalisateur et spécialiste des arts martiaux.",
}

const jeanClaudeVanDamme = {
  photo: "Jean-Claude Van Damme",
  auteur: "Jean-Claude Van Damme est né en 1960 en Belgique. C'est un acteur, réalisateur et pratiquant d'arts martiaux.",
}

const alexisDeTocqueville = {
  photo: "Alexis de Tocqueville",
  auteur: "Alexis de Tocqueville(1805-1859) est un historien et écrivain français.",
}

const noamChomsky = {
  photo: "Noam Chomsky",
  auteur: "Noam Chomsky est né en 1928. C'est un linguiste américain.",
}

const napoleonBonaparte = {
  photo: "Napoléon Bonaparte",
  auteur: "Napoléon Bonaparte(1769-1821) est un militaire et homme d'Etat français qui fut le premier empereur des français.",
}

const emmanuelJosephSieyes = {
  photo: "Emmanuel-Joseph Sieyès",
  auteur: "Emmanuel-Joseph Sieyès(1748-1836) est un homme d'église et un homme politique français.",
}

const baruchSpinoza = {
  photo: "Baruch Spinoza",
  auteur: "Baruch Spinoza(1632-1677) est un philosophe néerlandais.",
}

const citations = [
  {
    texte: "Si vous voulez vivre une vie heureuse, attachez-la à un but, et non pas à des personnes ou à des choses.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "En plein coeur de toute difficulté se cache une possibilité.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "La seule chose qui fait que la vie mérite d'être vécue, c'est de vivre pour les autres.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "bonheur", "morale", "sagesse"],
  },
  {
    texte: "Ce qui faît la vrai valeur d'un être humain, c'est de s'être délivré de son petit moi.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Je dois être prêt à renoncer à ce que je suis pour devenir ce que je serai.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "N'essayez pas de devenir un homme qui a du succès, essayez de devenir un homme qui a de la valeur.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Rare est le nombre de ceux qui regardent avec leurs propres yeux et qui éprouvent avec leur propre sensibilité.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Tout ce que est vraiment grand et inspiré a été réalisé par des individus travaillant librement.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Deux choses sont infinies: l'univers et la bêtise humaine. Mais en ce qui concerne l'univers, je n'ai pas de certitude absolue.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Il est plus facile de désintégrer un atome qu'un préjugé.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La logique vous mènera d'un point A à un point B. L'imagination vous emmènera partout.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "reve"],
  },
  {
    texte: "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Le mot progrès n'aura aucun sens tant qu'il y'aura des enfants malheureux.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "bonheur", "morale"],
  },
  {
    texte: "Le problème aujourd'hui n'est pas l'énergie atomique, mais le coeur des hommes.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Tout le monde est un génie. Mais si on juge un poisson sur sa capacité à grimper à un arbre, il passera sa vie à croire qu'il est stupide.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Une personne qui n'a jamais commis d'erreurs n'a jamais tenté d'innover.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "Le monde ne sera pas détruit par ceux qui font le mal, mais par ceux qui les regardent sans rien faire.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Le sort de l'humanité en général sera celui qu'elle méritera.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "L'humanité se passionne pour des buts dérisoires. Ils s'appellent la richesse, la gloire, le luxe.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Ce qui compte ne peut pas toujours être compté. Ce qui peut être compté ne compte pas forcément.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "bonheur", "sagesse"],
  },
  {
    texte: "Si la vue d'un bureau encombré évoque un esprit encombré, alors que penser d'un bureau vide ?",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Pour être un membre irréprochable d'une communauté de moutons, il faut avant tout être soi-même un mouton.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Inventer, c'est penser à côté.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "liberte", "reve"],
  },
  {
    texte: "Les grands esprits ont toujours dû affronter une opposition violente de la part des esprits médiocres.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "Ne fais jamais rien contre ta conscience, même si l'Etat te le demande.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "liberte", "morale"],
  },
  {
    texte: "La liberté consiste à se discipliner au lieu de se laisser discipliner.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "liberte", "sagesse"],
  },
  {
    texte: "C'est la personne humaine, libre, créatrice et sensible qui façonne le beau et le sublime, alors que les masses restent entraînées dans une ronde infernale d'imbécillité et d'abrutissement.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "liberte", "courage", "sensibilite"],
  },
  {
    texte: "La joie de regarder et de comprendre est le plus beau cadeau de la nature.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "bonheur", "sensibilite"],
  },
  {
    texte: "Il n'y a pas d'échec, il n'y a que des abandons.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "C'est le devoir de chaque homme de rendre au moins autant qu'il en a reçu.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "La folie, c'est de refaire la même chose et d'en attendre un résultat différent.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Un problème sans solution est un problème mal posé.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La valeur d'un homme tient dans sa capacité à donner et non dans sa capacité à recevoir.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Si une idée ne paraît pas d'abord absurde, alors il n'y aucun espoir qu'elle devienne quelque chose.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Les personnes faibles se vengent. Les personnes fortes pardonnent. Les personnes intelligentes ignorent.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Si tu fais toujours ce que tu as l'habitude de faire, tu récolteras ce que tu as toujours récolté.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Il n'existe que deux façons de vivre votre vie. L'une comme si rien n'était un miracle. L'autre comme si tout était un miracle.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Placez votre main sur un poêle une minute et ça vous semble durer une heure. Asseyez vous auprès d'une jolie fille une heure et ça vous semble durer une minute. C'est ça la relativité.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Je ne sais pas comment sera la troisième guerre mondiale, mais je sais qu'il n'y aura plus beaucoup de monde pour voir la quatrième.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Quiconque prétend s'ériger en juge de la vérité et du savoir s'expose à périr sous les éclats de rire des dieux puisque nous ignorons comment sont réellement les choses et que nous n'en connaissons que la représentation que nous en faisons.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Je ne crois point, au sens philosophique du terme, à la liberté de l'homme. Chacun agit non seulement sous une contrainte extérieure, mais aussi d'après une nécessité intérieure.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Si vous ne pouvez expliquer un concept à un enfant de six ans, c'est que vous ne le comprenez pas complètement.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Si l'idée n'est pas à priori absurde, elle est sans espoir.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous"],
  },
  {
    texte: "L'intelligence n'est pas la capacité de stocker des informations, mais de savoir où les trouver.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le progrès technique est comme une hache qu’on aurait mise dans les mains d’un psychopathe.",
    photo: einstein.photo,
    auteur: einstein.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Les médias sont les entités les plus puissantes sur terre. Ils ont le pouvoir de rendre les innocents coupables et faire des coupables des innocents, et c'est ça le pouvoir. Parce qu’ils contrôlent l’esprit des masses.",
    photo: malcolmX.photo,
    auteur: malcolmX.auteur,
    categorie: ["tous", "liberte", "morale"],
  },
  {
    texte: "Si vous n'êtes pas vigilants, les médias arriveront à vous faire détester les gens opprimés et aimer ceux qui les oppriment.",
    photo: malcolmX.photo,
    auteur: malcolmX.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Si vous ne vous levez pas pour quelque chose. Vous tomberez pour n'importe quoi.",
    photo: malcolmX.photo,
    auteur: malcolmX.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Si vous n'êtes pas prêt à mourir pour elle, sortez le mot \"liberté\" de votre vocabulaire.",
    photo: malcolmX.photo,
    auteur: malcolmX.auteur,
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "Quand vous commencez à penser par vous-mêmes, vous leur faites peur, et ils s'efforcent de vous interdire tout contact avec l'opinion publique, de peur que si l'opinion publique vous écoute, elle ne veuille plus les écouter.",
    photo: malcolmX.photo,
    auteur: malcolmX.auteur,
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "On ne peut gagner sa liberté qu'en montrant à l'ennemi que l'on est prêt à tout pour l'obtenir.",
    photo: malcolmX.photo,
    auteur: malcolmX.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "L'ignorance d'autrui est ce qui a rendu impossible l'unité jusqu'à aujourd'hui.",
    photo: malcolmX.photo,
    auteur: malcolmX.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Il n'y a pas de révolution où on aime l'ennemi, où on supplie le système qui nous exploite de nous intégrer.",
    photo: malcolmX.photo,
    auteur: malcolmX.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Il y'a souvent plus de choses naufragées au fond d'une âme qu'au fond de la mer.",
    photo: victorHugo.photo,
    auteur: victorHugo.auteur,
    categorie: ["tous", "reve", "sensibilite"],
  },
  {
    texte: "Mieux vaut une conscience tranquille qu'une destinée prospère. J'aime mieux un bon sommeil qu'un bon lit.",
    photo: victorHugo.photo,
    auteur: victorHugo.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La haine, c'est l'hiver qui s'empare du coeur.",
    photo: victorHugo.photo,
    auteur: victorHugo.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Vous voulez la misère secourue. Moi je la veux supprimée.",
    photo: victorHugo.photo,
    auteur: victorHugo.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Quand je suis triste, je pense à vous, comme l'hiver on pense au soleil, et quand je suis gai, je pense à vous, comme en plein soleil on pense à l'ombre.",
    photo: victorHugo.photo,
    auteur: victorHugo.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Les larmes sont un don. Souvent les pleurs, après l'erreur ou l'abandon, raniment nos forces brisées.",
    photo: victorHugo.photo,
    auteur: victorHugo.auteur,
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "Le plus grand ennui, c'est d'exister sans vivre.",
    photo: victorHugo.photo,
    auteur: victorHugo.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "J'ai dans l'âme une fleur que nul ne peut cueillir.",
    photo: victorHugo.photo,
    auteur: victorHugo.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Ceux qui vivent sont ceux qui luttent.",
    photo: victorHugo.photo,
    auteur: victorHugo.auteur,
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "Mes amis, retenez ceci, il n'y a ni mauvaises herbes ni mauvais hommes. Il n'y a que des mauvais cultivateurs.",
    photo: victorHugo.photo,
    auteur: victorHugo.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Ouvrez des écoles, vous fermerez des prisons.",
    photo: victorHugo.photo,
    auteur: victorHugo.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "N'être pas écouté, ce n'est pas une raison pour se taire.",
    photo: victorHugo.photo,
    auteur: victorHugo.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "La liberté commence où l'ignorance finit.",
    photo: victorHugo.photo,
    auteur: victorHugo.auteur,
    categorie: ["tous", "liberte", "sagesse"],
  },
  {
    texte: "La vérité est comme le soleil. Elle fait tout voir et ne se laisse pas regarder",
    photo: victorHugo.photo,
    auteur: victorHugo.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "N'imitez rien ni personne. Un lion qui copie un lion devient un singe",
    photo: victorHugo.photo,
    auteur: victorHugo.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "La pensée et plus qu'un droit, c'est le souffle même de l'homme.",
    photo: victorHugo.photo,
    auteur: victorHugo.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Quand une femme vous parle, écoutez ce qu'elle vous dit avec ses yeux.",
    photo: victorHugo.photo,
    auteur: victorHugo.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Il n'avait pas de gîte, pas de pain, pas de feu, pas d'amour; mais il est joyeux parce qu'il est libre.",
    photo: victorHugo.photo,
    auteur: victorHugo.auteur,
    categorie: ["tous", "bonheur", "liberte"],
  },
  {
    texte: "Tu es blanche et je suis noir; mais le jour a besoin de s'unir à la nuit pour enfanter l'aurore et le couchant, qui sont plus beaux que lui !",
    photo: victorHugo.photo,
    auteur: victorHugo.auteur,
    categorie: ["tous", "sagesse", "sensibilite"],
  },
  {
    texte: "Le sens révolutionnaire est un sens moral.",
    photo: victorHugo.photo,
    auteur: victorHugo.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Ce qui compte, chez un homme ce n'est pas la couleur de sa peau ou la texture de ses cheveux, mais la texte et la qualité de son âme.",
    photo: martinLutherKing.photo,
    auteur: martinLutherKing.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "L'homme bon ne regarde pas les particularités physiques mais sait discerner ces qualités profondes qui rendent les gens humains, et donc frères.",
    photo: martinLutherKing.photo,
    auteur: martinLutherKing.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Apprenons à vivre ensemble comme des frères ou nous mourrons tous ensemble comme des idiots.",
    photo: martinLutherKing.photo,
    auteur: martinLutherKing.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Chaque fois que des hommes redressent l'échine, ils peuvent aller où ils veulent, car personne ne peut monter sur votre dos tant que vous vous tenez droit.",
    photo: martinLutherKing.photo,
    auteur: martinLutherKing.auteur,
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "Croyez en vos rêves et ils se réaliseront peut-être. Croyez en vous et ils se réaliseront sûrement.",
    photo: martinLutherKing.photo,
    auteur: martinLutherKing.auteur,
    categorie: ["tous", "bonheur", "courage", "reve"],
  },
  {
    texte: "L'obscurité ne peut pas chasser l'obscurité; seule la lumière le peut. La haine ne peut pas chasser la haine; seul l'amour le peut.",
    photo: martinLutherKing.photo,
    auteur: martinLutherKing.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La non-violence est une arme puissante et juste, qui tranche sans blesser et ennoblit l'homme qui la manie.",
    photo: martinLutherKing.photo,
    auteur: martinLutherKing.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "La question la plus persistante et la plus urgente de la vie est: \"que faites-vous pour les autres ?\"",
    photo: martinLutherKing.photo,
    auteur: martinLutherKing.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Si tu ne peux pas voler, alors cours. Si tu ne peux pas courir, alors marche. Si tu ne peux pas marcher, alors rampe, mais quoi que tu fasses, tu dois continuer à avancer.",
    photo: martinLutherKing.photo,
    auteur: martinLutherKing.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Vivez les rêves que la vie vous défie de rêver.",
    photo: martinLutherKing.photo,
    auteur: martinLutherKing.auteur,
    categorie: ["tous", "bonheur", "courage", "reve"],
  },
  {
    texte: "La véritable grandeur d'un homme ne se mesure pas à des moments où il est à son aise, mais lorqu'il traverse une pèriode de controverses et de défis.",
    photo: martinLutherKing.photo,
    auteur: martinLutherKing.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Chacun à la responsabilité morale de désobéir aux lois injustes.",
    photo: martinLutherKing.photo,
    auteur: martinLutherKing.auteur,
    categorie: ["tous", "courage", "liberte", "morale"],
  },
  {
    texte: "Ce qui  m'effraie, ce n'est pas l'oppression des méchants; c'est l'indifférence des bons.",
    photo: martinLutherKing.photo,
    auteur: martinLutherKing.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Nous avons appris à voler dans les airs comme des oiseaux, nous avons appris à nager dans les océans comme des poissons, mais nous n'avons pas appris sur la terre à marcher comme des frères et soeurs.",
    photo: martinLutherKing.photo,
    auteur: martinLutherKing.auteur,
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Ceux qui aiment la paix doivent apprendre à s'organiser aussi bien que ceux qui veulent la guerre.",
    photo: martinLutherKing.photo,
    auteur: martinLutherKing.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La liberté n'est jamais volontairement donnée par l'oppresseur; elle doit être exigée par l'opprimé.",
    photo: martinLutherKing.photo,
    auteur: martinLutherKing.auteur,
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "Une injustice, où qu'elle se produise, est une menace pour la justice partout ailleurs.",
    photo: martinLutherKing.photo,
    auteur: martinLutherKing.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "A la fin, nous nous souviendrons non pas des mots de nos ennemis, mais des silences de nos amis.",
    photo: martinLutherKing.photo,
    auteur: martinLutherKing.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Celui qui accepte le mal sans lutter contre lui coopère avec lui.",
    photo: martinLutherKing.photo,
    auteur: martinLutherKing.auteur,
    categorie: ["tous", "courage", "morale"],
  },
  {
    texte: "Je fais le rêve qu'un jour mes enfants vivront dans une nation où ils ne seront pas jugés pour la couleur de leur peau, mais pour leur caractère.",
    photo: martinLutherKing.photo,
    auteur: martinLutherKing.auteur,
    categorie: ["tous", "morale", "reve"],
  },
  {
    texte: "Il faut accepter les déceptions passagères, mais conserver l'espoir pour l'éternité.",
    photo: martinLutherKing.photo,
    auteur: martinLutherKing.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Vous pouvez avec certitude amèliorer un seul petit coin de l'univers: vous-même.",
    photo: aldousHuxley.photo,
    auteur: aldousHuxley.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La révolution véritablement révolutionnaire se réalisera, non pas dans le monde extérieur, mais dans l'âme et la chair des êtres humains.",
    photo: aldousHuxley.photo,
    auteur: aldousHuxley.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Comme si l'on croyait quoi que ce soit d'instinct ! On croit les choses parce qu'on a été conditionné à les croire.",
    photo: aldousHuxley.photo,
    auteur: aldousHuxley.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La victime de la manipulation mentale ignore qu'elle est une victime. Les murs de sa prison lui sont invisibles et elle se croit libre.",
    photo: aldousHuxley.photo,
    auteur: aldousHuxley.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "La philosophie nous enseigne à douter de ce qui nous paraît évident. La progagande, au contraire, nous enseigne à accepter pour évident ce dont il serait raisonnable de douter.",
    photo: aldousHuxley.photo,
    auteur: aldousHuxley.auteur,
    categorie: ["tous", "liberte", "sagesse"],
  },
  {
    texte: "La plus grande partie de l'ignorance peut être vaincue. Nous ne savons pas, parce que nous ne voulons pas savoir.",
    photo: aldousHuxley.photo,
    auteur: aldousHuxley.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La liberté ne s'accorde pas, elle s'arrache.",
    photo: aldousHuxley.photo,
    auteur: aldousHuxley.auteur,
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "Si l'on est différent, il est fatal qu'on soit seul.",
    photo: aldousHuxley.photo,
    auteur: aldousHuxley.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Ne remettez jamais à demain le plaisir que vous pouvez prendre aujourd'hui.",
    photo: aldousHuxley.photo,
    auteur: aldousHuxley.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "On doit jouir de chaque moment, d'une manière passionnée, audacieuse, exaltante, unique.",
    photo: aldousHuxley.photo,
    auteur: aldousHuxley.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Les conséquences de nos actions sont des épouvantails pour les lâches, et des rayons de lumière pour les sages.",
    photo: aldousHuxley.photo,
    auteur: aldousHuxley.auteur,
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "L'expérience, ce n'est pas ce qui arrive à quelqu'un, c'est ce que quelqu'un fait avec ce qui lui arrive.",
    photo: aldousHuxley.photo,
    auteur: aldousHuxley.auteur,
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Notre vie s'améliore seulement si nous prenons des risques et le plus grand de tous les risques est d'être honnête envers soi-même.",
    photo: aldousHuxley.photo,
    auteur: aldousHuxley.auteur,
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "Les petites choses faites dans un esprit d'amour fervent sont infiniment plus précieuses que des choses beaucoup plus grandes faites avec moins d'amour.",
    photo: aldousHuxley.photo,
    auteur: aldousHuxley.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Le secret du génie est d'insuffler l'esprit de l'enfance dans l'âge adulte ce qui signifie ne jamais perdre son enthousiasme.",
    photo: aldousHuxley.photo,
    auteur: aldousHuxley.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Le courage et la confiance en soi sont les meilleures des vertus.",
    photo: aldousHuxley.photo,
    auteur: aldousHuxley.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Tous les hommes désirent la paix, mais il y'en a peu qui désirent les choses qui conduisent à la paix.",
    photo: aldousHuxley.photo,
    auteur: aldousHuxley.auteur,
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Le fait que les hommes tirent peu de profit des leçons de l'Histoire est la leçon la plus importante que l'Histoire nous enseigne.",
    photo: aldousHuxley.photo,
    auteur: aldousHuxley.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'homme connaît tant d'autres choses; il ne se connaît pas lui-même.",
    photo: aldousHuxley.photo,
    auteur: aldousHuxley.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'idéalisme est la noble toge dont les hommes politiques drapent leur volonté de puissance.",
    photo: aldousHuxley.photo,
    auteur: aldousHuxley.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "La dictature parfaite serait une dictature qui aurait les apparences de la démocratie, une prison sans murs dont les prisonniers ne songeraient pas à s'évader, un système d'esclavage oû, grâce à la consommation et au divertissement, les esclaves auraient l'amour de leur servitude.",
    photo: aldousHuxley.photo,
    auteur: aldousHuxley.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "N'attends pas que les événements arrivent comme tu le souhaites. Décide de vouloir ce qui arrive... et tu seras heureux.",
    photo: aristote.photo,
    auteur: aristote.auteur,
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "Le bonheur est à ceux qui se suffisent à eux-mêmes.",
    photo: aristote.photo,
    auteur: aristote.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Le commencement est beaucoup plus que la moitié de l'objectif.",
    photo: aristote.photo,
    auteur: aristote.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "L'amitié est une âme en deux corps.",
    photo: aristote.photo,
    auteur: aristote.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "L'espoir est un rêve éveillé.",
    photo: aristote.photo,
    auteur: aristote.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Le Bien ne suffit pas à être heureux, mais le mal suffit à rendre malheureux.",
    photo: aristote.photo,
    auteur: aristote.auteur,
    categorie: ["tous", "bonheur", "morale"],
  },
  {
    texte: "La mélancolie est le partage de tous les hommes de génie.",
    photo: aristote.photo,
    auteur: aristote.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Nous sommes ce que nous faisons à plusieurs reprises. L'excellence n'est donc pas un acte, mais une habitude.",
    photo: aristote.photo,
    auteur: aristote.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Il n'y a qu'une seule façon d'éviter les critiques: Ne dis rien, ne fais rien, ne sois rien.",
    photo: aristote.photo,
    auteur: aristote.auteur,
    categorie: ["tous", "bonheur", "courage", "sagesse"],
  },
  {
    texte: "C'est de par leur caractère que les hommes sont ce qu'ils sont, mais c'est de par leurs actions qu'ils sont heureux, ou le contraire.",
    photo: aristote.photo,
    auteur: aristote.auteur,
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "Le courage est la première des qualités humaines car elle garantit toutes les autres.",
    photo: aristote.photo,
    auteur: aristote.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Le bonheur est en même temps ce qu'il y'a de meilleur, de plus beau et de plus agréable.",
    photo: aristote.photo,
    auteur: aristote.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "En toute chose, c'est la fin qui est essentiel.",
    photo: aristote.photo,
    auteur: aristote.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Rien dans notre intelligence qui soit passé par nos sens.",
    photo: aristote.photo,
    auteur: aristote.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "On ne devient homme qu'en se surpassant.",
    photo: aristote.photo,
    auteur: aristote.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Le bonheur d'une vie ne s'apprécie qu'au soir d'une vie.",
    photo: aristote.photo,
    auteur: aristote.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Se connaître est le début de toute sagesse.",
    photo: aristote.photo,
    auteur: aristote.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Eduquer l'esprit sans éduquez le coeur n'est pas éduquer du tout.",
    photo: aristote.photo,
    auteur: aristote.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Le courage est un juste milieu entre la peur et l'audace.",
    photo: aristote.photo,
    auteur: aristote.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Les élections sont aristocratiques et non démocratiques : elles introduisent un élément de choix délibéré, de sélection des « meilleurs citoyens », au lieu du gouvernement par le peuple tout entier.",
    photo: aristote.photo,
    auteur: aristote.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Une démocratie est un gouvernement dans les mains d'hommes de basse naissance, sans propriété, et d'emploi vulgaire.",
    photo: aristote.photo,
    auteur: aristote.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Aimes-tu la vie ? Alors ne gaspille pas ton temps, car il est l'essence de la vie.",
    photo: benjaminFranklin.photo,
    auteur: benjaminFranklin.auteur,
    categorie: ["tous", "bonheur", "courage", "sagesse"],
  },
  {
    texte: "Il y'a bien des manières de ne pas réussir, mais la plus sûre est de ne jamais prendre de risques.",
    photo: benjaminFranklin.photo,
    auteur: benjaminFranklin.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Cessons la guerre en nous.",
    photo: benjaminFranklin.photo,
    auteur: benjaminFranklin.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Tel doit être l'avenir: pénétrant et simple.",
    photo: benjaminFranklin.photo,
    auteur: benjaminFranklin.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "L'utopie est simplement ce qui n'a pas encore été essayé.",
    photo: benjaminFranklin.photo,
    auteur: benjaminFranklin.auteur,
    categorie: ["tous", "reve"],
  },
  {
    texte: "On n'est jamais trop âgé pour s'instruire.",
    photo: benjaminFranklin.photo,
    auteur: benjaminFranklin.auteur,
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Le bon sens, tout le monde en a besoin, peu l'ont, et chacun croit l'avoir.",
    photo: benjaminFranklin.photo,
    auteur: benjaminFranklin.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Tu me dis, j'oublie. Tu m'enseignes, je me souviens. Tu m'impliques, j'apprends.",
    photo: benjaminFranklin.photo,
    auteur: benjaminFranklin.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Ne cachez pas vos talents ils méritent d'être utilisés. A quoi sert un cadran solaire à l'ombre ?",
    photo: benjaminFranklin.photo,
    auteur: benjaminFranklin.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "La bonté envers autrui est grande bonté envers soi-même.",
    photo: benjaminFranklin.photo,
    auteur: benjaminFranklin.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "L'énergie et l'obstination viennent à bout de toutes les résistances.",
    photo: benjaminFranklin.photo,
    auteur: benjaminFranklin.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "La vrai tragédie de la vie, c'est qu'on devient vieux trop tôt et sage trop tard.",
    photo: benjaminFranklin.photo,
    auteur: benjaminFranklin.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Un peuple prêt à sacrifier un peu de liberté pour un peu de sécurité ne mérite ni l'une ni l'autre, et finit par perdre les deux.",
    photo: benjaminFranklin.photo,
    auteur: benjaminFranklin.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Si vous voulez avoir un serviteur fidèle, servez-vous vous-même.",
    photo: benjaminFranklin.photo,
    auteur: benjaminFranklin.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Une grande beauté, une force formidable, de grandes richesses ne sont pas vraiment d'un grand intérêt; un coeur juste surpasse tout cela.",
    photo: benjaminFranklin.photo,
    auteur: benjaminFranklin.auteur,
    categorie: ["tous", "morale", "sensibilite"],
  },
  {
    texte: "Il n'y a jamais eu de bonne guerre ni de mauvaise paix.",
    photo: benjaminFranklin.photo,
    auteur: benjaminFranklin.auteur,
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Si vous voulez savoir la valeur de l'argent, essayez donc d'en emprunter.",
    photo: benjaminFranklin.photo,
    auteur: benjaminFranklin.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Un bon exemple est le meilleur sermon.",
    photo: benjaminFranklin.photo,
    auteur: benjaminFranklin.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La joie est en tout; il faut savoir l'extraire.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Une petite impatience peut ruiner un grand projet.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "On a deux vies, et la deuxième commence quand on se rend compte qu'on en a qu'une.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La vie est vraiment simple, mais nous insistons à la rendre compliquée.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Que l'on s'efforce d'être pleinement humain et il n'y aura plus de place pour le mal.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "bonheur", "morale"],
  },
  {
    texte: "Nulle pierre ne peut être polie sans friction, nul homme ne peut parfaire son expérience sans épreuves.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Le silence est un ami qui ne trahit jamais.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Si l'homme a deux oreilles et une bouche, c'est pour écouter deux fois plus qu'il ne parle.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "J'ignore tout de la vie, que saurais-je de la mort ?",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Agissez envers les autres comme vous aimeriez qu'on agisse envers vous.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Après une faute, ne pas se corriger, c'est le vraie faute.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Etre humain, c'est aimer les hommes, être sage, c'est les connaître.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "A ta naissance tout le monde rit et tu es le seul à pleurer. Conduis ta vie de façon à ce qu'à ta mort tout le monde pleure et que tu sois le seul à sourire.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Tous les hommes pensent que le bonheur réside dans le sommet de la montagne, alors qu'il réside plutôt dans la façon de la gravir.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "La plus grande gloire n'est pas de ne jamais tomber, mais de se lever chaque fois que nous tombons.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Je ne fais pas aux autres ce que je ne voudrais pas qu'ils me fassent.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Je n'ai pas encore rencontré d'homme capable d'avoir conscience de ses défauts et de ses errances.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Celui qui s'élève au-dessus de la médiocrité peut recevoir de grands enseignements. Celui qui préfère en rester là n'apprendra jamais rien.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La richesse des hommes acquise autrement que par la vertu ne sont que des nuages qui passent.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Certains agissent sans savoir pourquoi, ce n'est pas mon cas. J'écoute longtemps avant de choisir une route. J'observe les choses pour les garder en mémoire.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Intruisez-vous comme si la connaissance était sans limites, et ayez peur d'oublier ce que vous avez compris.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Comment connaître la mort quand on ne sait rien de la vie ?",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Quand un prince se conduit correctement, il peut gouverner efficacement sans donner d'ordres.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Celui qui promet trop a du mal à tenir sa parole.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Quand le royaume est gouverné en fonction de bons principes, le peuple ne discute pas.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Un mot suffit à faire d'un homme un sage ou un fou.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Qui ignore le pouvoir des mots ne connaît pas les hommes.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'homme de bien se doit d'obéir aux décrets du ciel.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Celui qui aime vraiment apprendre réfléchit tous les jours à ce qu'il n'a pas encore compris et se rappelle d'un mois à l'autre ce qu'on lui a enseigné.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Il est difficile de trouver un homme ayant étudié pendant 3 ans sans s'améliorer.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "J'entends et j'oublie. Je vois et je me souviens. Je fais et je comprends.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Toutes les choses ont leur beauté, mais tout le monde ne sait pas les voir.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Si tu sais que tu as fait une erreur et que tu ne la corrige pas, c'est là que tu commet véritablement une erreur.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Celui qui connaît toutes les réponses n'a pas posé toutes les questions.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Celui qui pose une question risque de passer pour un sot. Celui qui n'en pose pas est sûr de le rester.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Etudie le passé si tu veux connaître l'avenir.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Choisis un travail que tu aimes et tu n'auras jamais à travailler un seul jour de ta vie.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "sagesse", "reve"],
  },
  {
    texte: "Celui qui déplace la montagne, c'est celui qui commence par enlever les petites pierres.",
    photo: confucius.photo,
    auteur: confucius.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Deviens qui tu es! Fais ce que toi seul peux faire.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "Et la vie elle-même m'a dit ce secret: \"Vois, dit-elle, je suis ce qui doit toujours se surmonter soi-même\".",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "La beauté parle à voix basse; elle ne pénétre que dans les âmes les plus eveillées.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "reve", "sensibilite"],
  },
  {
    texte: "L'homme a besoin de ce qu'il y'a de pire en lui s'il veut parvenir à ce qu'il a de meilleur.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Veux-tu avoir la vie facile? Reste toujours près du troupeau, et oublie-toi en lui.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "Le pas de quelqu'un révèle s'il marche sur son propre chemin.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "L'amour ne veut pas la durée, elle veut l'instant et l'éternité.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Méfions-nous: plus nous nous élevons haut, plus nous semblons petits à ceux qui ne savent pas voler.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "A lutter avec les mêmes armes que ton ennemi, tu deviendras comme lui.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Je vous le dis: il faut encore porter en soi le chaos, pour être capable d'enfanter une étoile dansante.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Créer, c'est la grande délivrance de la douleur et l'allègement de la vie.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "bonheur", "reve"],
  },
  {
    texte: "Celui qui ne dispose pas des deux tiers de sa journée pour lui-même est un esclave, qu'il soit d'ailleurs ce qu'il veut: politique, marchand, fonctionnaire, érudit.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Il faut avoir une musique en soi pour faire danser le monde.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Le plus dangereux ennemi que tu puisses rencontrer sera toujours toi-même.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "La vie a besoin d'illusions, c'est-à-dire de non vérités tenues pour des vérités.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "bonheur", "sagesse"],
  },
  {
    texte: "Peu de gens sont faits pour l'indépendance, c'est le privilège des puissants.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "La croyance que rien ne change provient soit d'une mauvaise vue, soit d'une mauvaise foi. La première se corrige, la seconde se combat.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Quand on lutte contre des monstres. Il faut prendre garde de ne pas devenir monstre soi-même. Si tu plonges longuement ton regard dans l'abîme, l'abîme finit par ancrer son regard en toi.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Celui qui sait commander trouve toujours ceux qui doivent obéir.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Le serpent qui ne peut changer de peau, meurt. Il en va de même des esprits que l'on empêche de changer d'opinion: ils cessent d'être esprit.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'Etat est le plus froid des monstres. Il ment froidement; et voici le mensonge qui s'échappe de sa bouche: \"Moi l'Etat, je suis le peuple\".",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Ce qui ne tue pas rend plus fort.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Personne ne peut bâtir à ta place le pont qu'il te faudra toi-même franchir sur le fleuve de la vie, personne hormis toi.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Il faut que tu veuilles brûler dans ta propre flamme: comment voudrais-tu redevenir neuf si tu n'es pas d'abord devenu cendre !",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Les autres sont essentiellement des miroirs de toi-même. Tu ne peux aimer ou détester quelque chose chez autrui que si ce quelque chose reflète une chose que tu aimes ou détestes en toi.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Celui qui lutte contre les monstres doit veiller à ne pas le devenir lui-même. Or, quand ton regard pénètre longtemps au fond d'un abîme, l'abîme, lui aussi, pénètre en toi.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Un penseur voit ses propres actions comme des expériences et ses questions comme des tentatives de trouver quelque chose. Le succès et l'échec sont pour lui des réponses avant tout.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'individu a toujours dû lutter pour ne pas être submergé par la tribu. Si vous essayez, vous serez souvent seul, et parfois vous aurez peur, mais aucun prix à payer n'est trop élevé pour avoir le privilège de posséder.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La manière la plus sûre de corromptre une jeunesse est de l'instruire à tenir dans une estime plus élevée ceux qui pensent de même que ceux qui pensent différemment.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "La maturité de l'homme, c'est d'avoir retrouvé le sérieux qu'on avait au jeu quand on était enfant.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Seules les pensées qu'on a en marchant valent quelque chose.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Parfois, les gens ne veulent pas entendre la vérité parce qu'ils ne veulent pas que leurs illusions se détruisent.",
    photo: friedrichNietzsche.photo,
    auteur: friedrichNietzsche.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Si chacun ne conservait que ce dont il a besoin, nul ne manquerait de rien, et chacun se contenterait de ce qu'il a.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Il y'a assez de tout dans le monde pour satisfaire aux besoins de l'homme, mais pas assez pour assouvir son avidité.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Soyez le changement que vous voulez voir dans le monde.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "A l'instant où l'esclave décide qu'il ne sera plus esclave, ses chaînes tombent.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Dès que quelqu'un comprend qu'il est contraire à sa dignité d'homme d'obéir à des lois injustes, aucune tyrannie ne peut l'asservir.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", "courage", "morale"],
  },
  {
    texte: "On peut juger de la grandeur d'une nation par la façon dont les animaux y sont traités.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Croire en quelque chose et ne pas le vivre, c'est malhonnête.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Vivons simplement pour que d'autres puissent simplement vivre.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Le bonheur, c'est quand vos actes sont en accord avec vos paroles.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "La force du nombre ne réjouit que le peureux. Celui qui est courageux en esprit se fait gloire de combattre seul.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "En opposant la haine à la haine, on ne fait que la répandre, en surface comme en profondeur.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La haine tue toujours, l'amour ne meurt jamais.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "La force ne vient pas des capacités physiques mais d'une volonté indomptable.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "La différence entre le possible et l'impossible se trouve dans la détermination.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Le plus grand voyageur n'est pas celui qui a fait dix fois le tour du monde, mais celui qui a fait une seule fois le tour de lui-même.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Vis comme si tu devais mourir demain. Apprends comme si tu devais vivre toujours.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Toute âme qui s'élève élève le monde.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "La vrai moralité ne consiste pas à suivre les chemins battus, mais à trouver la voie véritable pour nous-même et à la suivre de manière intrépide.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Je ne veux, pour rien au monde, étouffer cette petite voix qu'est ma conscience, ou l'expression de ce qu'il y'a de plus profond en moi.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Il est facile de se tenir avec la foule. Il faut du courage pour rester seul.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Ce qui me fait peur, ce n'est pas la méchanceté des méchants mais le silence des justes.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Même si tu n'es qu'une minorité, la vérité reste toujours la vérité.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Il n'est pas nécessaire d'éteindre la lumière de l'autre pour que brille la nôtre.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "La vrai démocratie ne viendra pas de la prise du pouvoir par quelques-uns mais du pouvoir que tous auront de s'opposer au pouvoir de quelques-uns.",
    photo: gandhi.photo,
    auteur: gandhi.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "L'amour ignore sa profondeur jusqu'a l'heure de la séparation.",
    photo: khalilGibran.photo,
    auteur: khalilGibran.auteur,
    categorie: ["tous", "bonheur", "sensibilite"],
  },
  {
    texte: "Tous peuvent entendre mais seuls les êtres sensibles comprennent.",
    photo: khalilGibran.photo,
    auteur: khalilGibran.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Vos enfants: vous pouvez vous efforcer d'être comme eux, mais ne tentez pas de les faire comme vous.",
    photo: khalilGibran.photo,
    auteur: khalilGibran.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Plus profondément le chagrin creusera votre être, plus vous pourrez contenir de joie.",
    photo: khalilGibran.photo,
    auteur: khalilGibran.auteur,
    categorie: ["tous", "bonheur", "sensibilite"],
  },
  {
    texte: "Nul ne peut atteindre l'aube sans passer par le chemin de la nuit.",
    photo: khalilGibran.photo,
    auteur: khalilGibran.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Si tu aimes quelqu'un, laisse le partir! S'il revient, c'est qu'il a toujours été là, s'il ne revient pas, c'est qu'il ne l'a jamais été.",
    photo: khalilGibran.photo,
    auteur: khalilGibran.auteur,
    categorie: ["tous", "bonheur", "sensibilite"],
  },
  {
    texte: "\"Ils me disent dans leur éveil: \"Toi et le monde dans lequel tu vis n'êtes qu'un grain de sable sur le rivage infini d'une mer infinie. Et dans mon rêve je leur réponds:\" Je suios la mer infinie, et tous les mondes ne sont que des grains de sable dans mon rivage\".",
    photo: khalilGibran.photo,
    auteur: khalilGibran.auteur,
    categorie: ["tous", "reve"],
  },
  {
    texte: "Même ceux qui boitent ne reculent pas.",
    photo: khalilGibran.photo,
    auteur: khalilGibran.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Révèle ton secret au vent, mais ne lui reproche pas de le répéter aux arbres.",
    photo: khalilGibran.photo,
    auteur: khalilGibran.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "C'est en donnant de vous-même que vous donnez véritablement.",
    photo: khalilGibran.photo,
    auteur: khalilGibran.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Si autrui vous blesse, vous pouvez oublier la blessure; mais si vous blessez, vous vous en rappellerez toujours.",
    photo: khalilGibran.photo,
    auteur: khalilGibran.auteur,
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Le grand défaut des hommes est d'abandonner leurs propres champs pour ôter l'ivraie de ceux des autres.",
    photo: khalilGibran.photo,
    auteur: khalilGibran.auteur,
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Ouvre l'oeil et regarde, tu verras ton visage dans tous les visages. Tends l'oreille et écoute, tu entendras ta propre voix dans toutes les voix.",
    photo: khalilGibran.photo,
    auteur: khalilGibran.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Personne ne peut vous révéler autre chose que ce qui repose déjà, à moitié endormi, dans le commencement de votre savoir.",
    photo: khalilGibran.photo,
    auteur: khalilGibran.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "C'est dans le rosée des petites choses que le coeur trouve son matin et se rafraîchit.",
    photo: khalilGibran.photo,
    auteur: khalilGibran.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Je suis voyageur et navigateur. Et tous les jours, je découvre un nouveau continent dans les profondeurs de mon âme.",
    photo: khalilGibran.photo,
    auteur: khalilGibran.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Plus on voyage au loin, moins on se connaît.",
    photo: laoTseu.photo,
    auteur: laoTseu.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Celui qui sait ne parle pas; celui qui parle ne sait pas.",
    photo: laoTseu.photo,
    auteur: laoTseu.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Ta vie est un bloc d'argile; ne laisse personne le modeler à ta place.",
    photo: laoTseu.photo,
    auteur: laoTseu.auteur,
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Il n'y a point de chemin vers le bonheur: le bonheur c'est le chemin.",
    photo: laoTseu.photo,
    auteur: laoTseu.auteur,
    categorie: ["tous", "bonheur", "sagesse"],
  },
  {
    texte: "Je m'observe moi-même et c'est ainsi que je réussis à connaître les autres.",
    photo: laoTseu.photo,
    auteur: laoTseu.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Plus le sage donne aux autres, plus il possède.",
    photo: laoTseu.photo,
    auteur: laoTseu.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "La noblesse a pour racine l'humilité.",
    photo: laoTseu.photo,
    auteur: laoTseu.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Mieux vaut allumer une bougie que de maudire les ténébres.",
    photo: laoTseu.photo,
    auteur: laoTseu.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Le voyage de mille lieues a commencé par un pas.",
    photo: laoTseu.photo,
    auteur: laoTseu.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "L'expérience est une lumière qui n'éclaire qui soi-même.",
    photo: laoTseu.photo,
    auteur: laoTseu.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "On surestime ce que l'on n'est pas. On sous-estime ce que l'on est.",
    photo: laoTseu.photo,
    auteur: laoTseu.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Apprends à écrire tes blessures dans le sable et à graver tes joies dans la pierre.",
    photo: laoTseu.photo,
    auteur: laoTseu.auteur,
    categorie: ["tous", "bonheur", "sagesse"],
  },
  {
    texte: "Etre humain: c'est aimer les hommes. Etre sage: c'est les connaître.",
    photo: laoTseu.photo,
    auteur: laoTseu.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Les paroles sincères ne sont pas élégantes; Les paroles élégantes ne sont pas sincères.",
    photo: laoTseu.photo,
    auteur: laoTseu.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Etre en repos s'appelle revenir à la vie.",
    photo: laoTseu.photo,
    auteur: laoTseu.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'échec est le fondement de la réussite.",
    photo: laoTseu.photo,
    auteur: laoTseu.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Sois content de ce que tu as: Réjouis-toi de la réalité telle qu'elle est. Quand tu comprends que rien ne manque, le monde entier t'appartient.",
    photo: laoTseu.photo,
    auteur: laoTseu.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Connaître les autres, c'est sagesse. Se connaître soi-même, c'est sagesse supérieure.",
    photo: laoTseu.photo,
    auteur: laoTseu.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Si la vie est prévisible, elle serait sans saveur.",
    photo: eleanorRoosevelt.photo,
    auteur: eleanorRoosevelt.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Vous devez faire les choses que vous vous croyez incapable de faire.",
    photo: eleanorRoosevelt.photo,
    auteur: eleanorRoosevelt.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Chaque expérience où vous vous arrêtez pour regarder la peur bien en face augmente votre force, votre courage et votre confiance.",
    photo: eleanorRoosevelt.photo,
    auteur: eleanorRoosevelt.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Le but de la vie est de vivre, goûter l'expérience au maximum pour accueillir avec impatience et sans crainte une expérience inédite et plus riche.",
    photo: eleanorRoosevelt.photo,
    auteur: eleanorRoosevelt.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Le futur appartient à ceux qui croient à la beauté de leurs rêves.",
    photo: eleanorRoosevelt.photo,
    auteur: eleanorRoosevelt.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Le seules limites de nos réalisations de demain, ce sont nos doutes d'aujourd'hui.",
    photo: eleanorRoosevelt.photo,
    auteur: eleanorRoosevelt.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Fais ce que tu crois juste, selon ton coeur, car on te critiquera de toute façon.",
    photo: eleanorRoosevelt.photo,
    auteur: eleanorRoosevelt.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Les grands esprits discutent des idées; les esprits moyens discutent des événements; les petits esprits discutent des gens.",
    photo: eleanorRoosevelt.photo,
    auteur: eleanorRoosevelt.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Avant de pouvoir se lier d'amitié avec quelqu'un d'autre, il faut être ami avec soi-même.",
    photo: eleanorRoosevelt.photo,
    auteur: eleanorRoosevelt.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Souvenez-vous que vous avez non seulement le droit d'être unique, mais aussi l'obligation.",
    photo: eleanorRoosevelt.photo,
    auteur: eleanorRoosevelt.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Le don de l'amour est un enseignement en soi.",
    photo: eleanorRoosevelt.photo,
    auteur: eleanorRoosevelt.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Hier est de l'histoire, demain est un mystère, aujourd'hui est un cadeau.",
    photo: eleanorRoosevelt.photo,
    auteur: eleanorRoosevelt.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Personne ne peut vous diminuer sans que vous y consentiez.",
    photo: eleanorRoosevelt.photo,
    auteur: eleanorRoosevelt.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "On ne doit jamais, pour aucune raison, tourner le dos à la vie.",
    photo: eleanorRoosevelt.photo,
    auteur: eleanorRoosevelt.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Je t'aime, et t'ai toujours aimé; quand on aime ainsi une personne, on l'aime telle qu'elle est et non telle qu'on la voudrait.",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Tous les hommes font la même erreur de s'imaginer que bonheur veut dire que tous les voeux se réalisent.",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", "bonheur", "reve"],
  },
  {
    texte: "Chacun rêve de changer l'humanité, mais personne ne pense à se changer lui-même.",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", "sagesse", "reve"],
  },
  {
    texte: "Nous ne sommes pas ici dans ce monde pour transformer les autres, mais pour nous transformer nous-mêmes.",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", "sagesse", "morale", "sensibilite"],
  },
  {
    texte: "De toutes les sciences que l'homme peut et doit savoir, la principale, c'est la science de vivre de manière à faire le moins de mal et le plus de bien possible.",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Il n'y a pas d'autre amour que celui qui consiste à donner sa vie pour ceux qu'on aime.",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Le temps qui nous reste à vivre est plus important que toutes les années écoulées.",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "Il faut se mettre à la place de chacun. Tout comprendre, c'est tout pardonner.",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", "sagesse", "sensibilite"],
  },
  {
    texte: "Faire le bien ne peut pas rendre heureux mais faire le mal rendra à coup sûr malheureux.",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", "bonheur", "morale", "sensibilite"],
  },
  {
    texte: "Il n'est nulle grandeur là où manquent simplicité, bonté, et vérité.",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Il y'a autant de façons d'aimer qu'il y'a de coeurs.",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "C'est une sottise que de se laisser dominer par son passé, il faut lutter pour vivre mieux, beaucoup mieux...",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "Si un homme a beaucoup plus qu'il ne faut, c'est que d'autres manquent du nécessaire.",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Se représenter un homme privé de liberté, c'est se le représenter privé de vie.",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Il n'est nullement démontré que les buts vers lesquels tend l'humanité soient la liberté, l'égalité, l'évolution ou la civilisation.",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Il me semble bien souvent que les hommes ne mettent guère en pratique les beaux sentiments dont ils font si volontiers parade.",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Pourquoi ressembleriez-vous à un autre qu'à vous-même? Restez donc ce que vous êtes.",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Il ne faut écrire qu'au moment où à chaque fois que tu trempes ta plume dans l'encre un morceau de ta chair reste dans l'encrier.",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "La beauté ne fait pas l'amour, c'est l'amour qui fait la beauté.",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "En aimant, on est toujours heureux parce que notre bonheur est en nous-mêmes.",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Toute la variété, tout le charme, toute la beauté de la vie ne sont qu'un mélange de lumière et d'ombre.",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Les grandes oeuvres d'art ne sont grandes que parce qu'elles sont accessibles et compréhensibles à tous.",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Les deux guerriers les plus puissants sont la patience et le temps.",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "N'oublie pas que les grandes réalisations prennent du temps et qu'il n'y a pas de succès du jour au lendemain.",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Partout où il y'aura le pouvoir des uns sur les autres, il n'y aura pas de liberté mais l'oppression des uns sur les autres. C'est pourquoi le pouvoir doit être détruit.",
    photo: leonTolstoi.photo,
    auteur: leonTolstoi.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "J'ai appris que le courage n'est pas l'absence de peur, mais la capacité de la vaincre.",
    photo: nelsonMandela.photo,
    auteur: nelsonMandela.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Un gagnant est juste un rêveur qui n'a jamais cédé.",
    photo: nelsonMandela.photo,
    auteur: nelsonMandela.auteur,
    categorie: ["tous", "reve"],
  },
  {
    texte: "Cela semble toujours impossible jusqu'à ce qu'on le fasse.",
    photo: nelsonMandela.photo,
    auteur: nelsonMandela.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "L'éducation est l'arme la plus puissante pour changer le monde.",
    photo: nelsonMandela.photo,
    auteur: nelsonMandela.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Une tête bien faite et un bon coeur forment toujours une formidable combinaison.",
    photo: nelsonMandela.photo,
    auteur: nelsonMandela.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Prenez sur vous, où que vous viviez, de donner de la joie et de l'espoir autour de vous.",
    photo: nelsonMandela.photo,
    auteur: nelsonMandela.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "La bonté de l'homme est une flamme qu'on peut cacher mais qu'on ne peut jamais éteindre.",
    photo: nelsonMandela.photo,
    auteur: nelsonMandela.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Aucun de nous, en agissant seul, ne peut atteindre le succès.",
    photo: nelsonMandela.photo,
    auteur: nelsonMandela.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Vous obtiendrez plus dans ce monde avec le pardon qu'avec des actes de représailles.",
    photo: nelsonMandela.photo,
    auteur: nelsonMandela.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Je ne suis pas vraiment libre si je prive quelqu'un d'autre de sa liberté. L'opprimé et l'oppresseur sont tous deux dépossédés de leur humanité.",
    photo: nelsonMandela.photo,
    auteur: nelsonMandela.auteur,
    categorie: ["tous", "liberte", "morale"],
  },
  {
    texte: "Que vos choix reflétent vos espoirs et non vos peurs.",
    photo: nelsonMandela.photo,
    auteur: nelsonMandela.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Nous devons utiliser le temps à bon escient et nous rendre compte qu'il est toujours temps de faire le bien.",
    photo: nelsonMandela.photo,
    auteur: nelsonMandela.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Que règne la liberté. Car jamais le soleil ne s'est couché sur réalisation humaine plus glorieuse.",
    photo: nelsonMandela.photo,
    auteur: nelsonMandela.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Etre libre, ce n'est pas seulement se débarasser de ses chaînes; c'est vivre d'une façon qui respecte et renforce la liberté des autres.",
    photo: nelsonMandela.photo,
    auteur: nelsonMandela.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Tout homme ou toute institution qui essaiera de me voler ma dignité perdra.",
    photo: nelsonMandela.photo,
    auteur: nelsonMandela.auteur,
    categorie: ["tous", "liberte", "morale"],
  },
  {
    texte: "L'honneur appartient à ceux qui jamais ne s'éloignent de la vérité, même dans l'obscurité et la difficulté.",
    photo: nelsonMandela.photo,
    auteur: nelsonMandela.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "En faisant scintiller notre lumière, nous offrons aux autres la possibilité d'en faire autant.",
    photo: nelsonMandela.photo,
    auteur: nelsonMandela.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Jamais cette terre qui est si belle ne devrait connaître l'oppression d'un homme par un autre.",
    photo: nelsonMandela.photo,
    auteur: nelsonMandela.auteur,
    categorie: ["tous", "liberte", "morale"],
  },
  {
    texte: "Refuser leurs droits aux hommes rivient à contester l'essence de leur humanité.",
    photo: nelsonMandela.photo,
    auteur: nelsonMandela.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Ce qui compte dans la vie, ce n'est pas seulement d'avoir vécu. C'est la différence faîte dans la vie des autres qui définit le sens de la vie que nous avons menée.",
    photo: nelsonMandela.photo,
    auteur: nelsonMandela.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Je ne perds jamais. Soit je gagne, soit j'apprends.",
    photo: nelsonMandela.photo,
    auteur: nelsonMandela.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le pardon libère l'âme, élimine la peur. C'est pourquoi il est une arme si puissante.",
    photo: nelsonMandela.photo,
    auteur: nelsonMandela.auteur,
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Il faut méditer sur ce qui procure le bonheur, puisque quand on l'a, on a tout,  et lorsqu'il manque, nous faisons tout pour l'avoir.",
    photo: epicure.photo,
    auteur: epicure.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Quand on se suffit à soi-même, on arrive à posséder ce bien inestimable qu'est la liberté.",
    photo: epicure.photo,
    auteur: epicure.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Etre heureux, c'est savoir se contenter de peu.",
    photo: epicure.photo,
    auteur: epicure.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Ce n'est pas tant l'intervention de nos amis qui nous aide mais le fait de savoir que nous pourrons toujours compter sur eux.",
    photo: epicure.photo,
    auteur: epicure.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Dépêchons-nous de succomber à la tentation avant qu'elle s'éloigne.",
    photo: epicure.photo,
    auteur: epicure.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "L'âme vile est enflée d'orgueil dans la prospérité et abattue dans l'adversité.",
    photo: epicure.photo,
    auteur: epicure.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Ne gâchez pas ce que vous avez en désirant ce que vous n'avez pas.",
    photo: epicure.photo,
    auteur: epicure.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Jamais il n'est trop tôt ou trop tard pour travailler à la santé de l'âme.",
    photo: epicure.photo,
    auteur: epicure.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Rien ne peut suffire à celui qui considère comme étant peu de chose ce qui est suffisant.",
    photo: epicure.photo,
    auteur: epicure.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "La vraie sagesse, la vraie supériorité ne se gagne pas en luttant mais en laissant les choses se faire d'elles-mêmes. Les plantes qui résistent au vent se cassent, alors que les plantes souples survivent aux ouragans.",
    photo: epicure.photo,
    auteur: epicure.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "C'est parfois la peur de la mort qui pousse les hommes à la mort.",
    photo: epicure.photo,
    auteur: epicure.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Savoir s'étonner à propos est le premier mouvement de l'esprit vers la découverte.",
    photo: epicure.photo,
    auteur: epicure.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Il est sot de demander aux dieux ce que l'on peut se procurer par soi-même.",
    photo: epicure.photo,
    auteur: epicure.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La chute n'est pas un échec. L'échec, c'est de rester là où on est tombé.",
    photo: socrate.photo,
    auteur: socrate.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "La plus grande manière de vivre avec honneur dans ce monde consiste à être en réalité ce que nous prétendons être.",
    photo: socrate.photo,
    auteur: socrate.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "N'oublie jamais que tout est éphémère, alors tu ne seras jamais trop joyeux dans le bonheur, ni trop triste dans le chagrin.",
    photo: socrate.photo,
    auteur: socrate.auteur,
    categorie: ["tous", "bonheur", "sagesse"],
  },
  {
    texte: "Vous pouvez cacher aux autres une action répréhensible, mais jamais à vous-même.",
    photo: socrate.photo,
    auteur: socrate.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Les plus hauts royaumes de la pensée sont impossibles à atteindre sans d'abord arriver à un certain niveau de compassion.",
    photo: socrate.photo,
    auteur: socrate.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Soyez ouvert, amical et positif avec toutes les personnes que vous rencontrez; tout le monde mène un combat long et difficile.",
    photo: socrate.photo,
    auteur: socrate.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Existe t'il pour l'homme un bien plus précieux que la santé ?",
    photo: socrate.photo,
    auteur: socrate.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Le secret du bonheur ne se trouve pas dans la recherche du plus, mais en développant la capacité de jouir de moins.",
    photo: socrate.photo,
    auteur: socrate.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "L'esprit est la source de tout pouvoir; vous devenez ce que vous pensez.",
    photo: socrate.photo,
    auteur: socrate.auteur,
    categorie: ["tous", "reve"],
  },
  {
    texte: "L'éducation est l'allumage d'une flamme, et non pas le remplissage d'un navire.",
    photo: socrate.photo,
    auteur: socrate.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Beaucoup de réflexion et non beaucoup de connaissances, voilà à quoi il faut tendre.",
    photo: socrate.photo,
    auteur: socrate.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La sagesse commence dans l'émerveillement.",
    photo: socrate.photo,
    auteur: socrate.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le premier savoir est le savoir de mon ignorance; c'est le début de l'intelligence.",
    photo: socrate.photo,
    auteur: socrate.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Les bienfaits que nous avons reçus de nos parents sont les plus grands de tous.",
    photo: socrate.photo,
    auteur: socrate.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "L'amour seul connaît le secret de s'enrichir en donnant.",
    photo: socrate.photo,
    auteur: socrate.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Le secret du changement, c'est de concentrer toute votre énergie non pas à lutter contre le passé, mais à construire l'avenir.",
    photo: socrate.photo,
    auteur: socrate.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Beaucoup pensent à vivre longtemps, peu à bien vivre.",
    photo: socrate.photo,
    auteur: socrate.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Un trésor de belles maximes est préférable à un amas de richesses.",
    photo: socrate.photo,
    auteur: socrate.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Ecoutez simplement votre coeur, votre intuition. Dans le voyage de la vie, ils sont vos seuls guides.",
    photo: osho.photo,
    auteur: osho.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Je ne connais pas de plus grande valeur que celle qui consiste à regarder à l'intérieur de notre être.",
    photo: osho.photo,
    auteur: osho.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "L'amour est comme un oiseau libre d'aller partout, le ciel tout entier est sa liberté.",
    photo: osho.photo,
    auteur: osho.auteur,
    categorie: ["tous", "liberte", "sensibilite"],
  },
  {
    texte: "Si tu aimes une fleur, ne la cueille pas. Si tu l'aimes, laisse-la vivre. L'amour n'est pas la possession. L'amour, c'est apprécier ce qui est.",
    photo: osho.photo,
    auteur: osho.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "La vie en elle-même est une toile vide. Elle devient ce que vous peignez dessus. Vous pouvez peindre la misère ou vous pouvez peindre la joie. Cette liberté est votre splendeur.",
    photo: osho.photo,
    auteur: osho.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Vous ne pouvez être que ce que vous êtes. Détentez-vous! L'existence a besoin de vous tel que vous êtes.",
    photo: osho.photo,
    auteur: osho.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Si vous devenez une lumière, ce n'est pas seulement votre vie à vous qui sera illuminée, mais aussi tous ceux qui vous entourent. Beaucoup pourront, grâce à vous, faire le voyage et atteindre leur but.",
    photo: osho.photo,
    auteur: osho.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Que chaque événement de votre vie vous apprenne quelque chose.",
    photo: osho.photo,
    auteur: osho.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'oeil plein de préjugés est aveugle, le coeur plein de conclusions est mort.",
    photo: osho.photo,
    auteur: osho.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La vie ne vous suit pas, vous devez suivre la vie.",
    photo: osho.photo,
    auteur: osho.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La vie est ainsi. Vous ne pouvez pas vous y préparer, vous ne pouvez pas être prêt. C'est cela sa beauté, elle vous surprend toujours.",
    photo: osho.photo,
    auteur: osho.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "La vie commence là où finit la peur.",
    photo: osho.photo,
    auteur: osho.auteur,
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "La vie est une aventure, une exploration permanente à travers les épreuves et les erreurs. C'est sa véritable joie, son vrai nectar !",
    photo: osho.photo,
    auteur: osho.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Vous devez vivre chaque instant comme si c est le dernier.",
    photo: osho.photo,
    auteur: osho.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "La vraie question n'est pas de savoir si la vie existe après la mort mais de savoir si vous êtes en vie avant la mort.",
    photo: osho.photo,
    auteur: osho.auteur,
    categorie: ["tous", "bonheur", "sagesse", "morale"],
  },
  {
    texte: "Personne ne peut donner un sens à votre vie, c'est votre vie, le sens doit vous appartenir.",
    photo: osho.photo,
    auteur: osho.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "La plus grande peur dans le monde est celle du jugement des autres. A partir du moment où vous n'avez plus peur de ce jugement, alors vous n'êtes plus un mouton, vous devenez un lion. Un grand rugissement émane de votre coeur. Le rugissement de la liberté.",
    photo: osho.photo,
    auteur: osho.auteur,
    categorie: ["tous", "courage", "liberté"],
  },
  {
    texte: "Si vous êtes capable d'être heureux quand vous êtes seul, vous avez appris le secret d'être heureux.",
    photo: osho.photo,
    auteur: osho.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Il n'y a personne qui soit né sous une mauvaise étoile, Il n'y a que des gens qui ne savent pas lire le ciel.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Si tu veux connaître quelqu'un, n'écoute pas ce qu'il dit, mais regarde ce qu'il fait.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Si vous avez l'impression d'être trop petit pour pouvoir changer quelque chose, essayez donc de dormir avec un moustique et vous verrez lequel des deux empêche l'autre de dormir.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "J'appelle l'amour et la compassion une religion universelle. Telle est ma religion.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Nul besoin de temples, nul besoin de philosophies compliquées. Notre cerveau et notre coeur sont nos temples.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Il y'a deux jours dans une année où l'on ne peut rien faire. Ils s'appellent hier et demain. Aujourd'hui est le jour idéal pour aimer, croire, faire et surtout vivre.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Chacun à la responsabilité de faire croître la paix en lui afin que la paix devienne générale.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Nous appartenons tous à la grande famille humaine.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Pour jouir d'une vie heureuse et accomplie, la clé est l'état d'esprit. C'est là l'essentiel.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "Certains regardent la vase au fond de l'étang, d'autres contemplent la fleur à la surface de l'eau, il s'agit d'un choix.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Le vrai bonheur ne dépend d'aucun être, d'aucun objet extérieur. Il ne dépend que de nous.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Ne laissez pas le comportement des autres détruire votre paix intérieure.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "On s'intéresse à ses membres comme parties de son corps, pourquoi pas aux hommes comme parties de l'humanité ?",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Si vous le pouvez, mettez-vous au service des autres. Sinon, abstenez-vous de leur faire du mal.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Nos véritables ennemis sont les poisons mentaux: l'ignorance, la haine, la jalousie, l'orgueil.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'esprit c'est comme un parachute. Ca marche mieux quand c'est ouvert.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Il n'importe pas qu'un être soit croyant ou non: il est plus important qu'il soit bon.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Le chemin vers le bonheur, c'est l'altruisme. Le désir d'être au service du bien-être des autres.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous", "bonheur", "sagesse"],
  },
  {
    texte: "Nous avons besoin les uns des autres, nous sommes responsables les uns des autres.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Le respect mutuel est le fondement de la véritable harmonie.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Vous êtes maître de votre vie et qu'importe votre prison, vous en avez la clé.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Le Monde appartient à l'humanité. Il n'appartient pas à une chef, que ce soit un roi, un prince ou un chef religieux. Le Monde appartient à l'humanité",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "On peut conquérir des milliers d'hommes dans une bataille, mais celui qui se conquiert lui-même, lui seul est le plus noble des conquérants.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "L'important pour les hommes est d'avoir un but dans la vie. Ce but devrait être quelque chose d'utile, quelque chose de bon.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Le bonheur n'est pas une chose toute faîte; il découle de tes propres actions.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "Plus nous aurons donné de sens à notre vie, moins nous éprouverons de regrets à l'instant de la mort.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Prenez en compte que le grand amour et les grandes réussites impliquent de grands risques.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Lorsque vous échouez, n'échouez pas la leçon.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Ouvrez vos bras au changement, mais ne laissez pas s'envoler vos valeurs.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Détermination et espoir sont les facteurs clés d'un meilleur avenir.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Rappellez-vous que le silence est parfois la meilleure réponse.",
    photo: dalaiLama.photo,
    auteur: dalaiLama.auteur,
    categorie: ["tous"],
  },
  {
    texte: "L'important c'est d'avoir des rêves assez grands pour ne pas les perdre de vue lorsqu'on les poursuit.",
    photo: oscarWilde.photo,
    auteur: oscarWilde.auteur,
    categorie: ["tous", "reve"],
  },
  {
    texte: "Vivre est la chose la plus rare du monde. La plupart des gens ne font qu'exister.",
    photo: oscarWilde.photo,
    auteur: oscarWilde.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "La beauté est dans les yeux de celui qui regarde.",
    photo: oscarWilde.photo,
    auteur: oscarWilde.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Toute réussite nous attire un ennemi. C'est la médiocrité qui entraine la popularité.",
    photo: oscarWilde.photo,
    auteur: oscarWilde.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Aucune carte du monde n'est digne d'un regard si le pays de l'utopie n'y figure pas.",
    photo: oscarWilde.photo,
    auteur: oscarWilde.auteur,
    categorie: ["tous", "reve"],
  },
  {
    texte: "Je suis parfaitement heureux tout seul. Avec la liberté, des fleurs, des livres et la lune, qui ne serait pas parfaitement heureux ?",
    photo: oscarWilde.photo,
    auteur: oscarWilde.auteur,
    categorie: ["tous", "bonheur", "liberte"],
  },
  {
    texte: "Soyez vous-même, les autres sont déjà pris.",
    photo: oscarWilde.photo,
    auteur: oscarWilde.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Douter, c'est vivre. Etre bercé par la certitude, c'est mourir.",
    photo: oscarWilde.photo,
    auteur: oscarWilde.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Il faut viser la lune, parce qu'au moins, si vous echouez, vous finirez dans les étoiles.",
    photo: "Oscar Wilde",
    photo: oscarWilde.photo,
    auteur: oscarWilde.auteur,
    categorie: ["tous", "reve"],
  },
  {
    texte: "Il ne faut pas attendre d'être parfait pour commencer quelque chose de bien.",
    photo: abbePierre.photo,
    auteur: abbePierre.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Mille victoires sur milles ennemis ne valent pas une seule victoire sur soi-même.",
    photo: bouddha.photo,
    auteur: bouddha.auteur,
    categorie: ["tous", "courage", "morale"],
  },
  {
    texte: "Soyez à vous-même votre propre refuge. Soyez à vous-même votre propre lumière.",
    photo: bouddha.photo,
    auteur: bouddha.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Dans la vie, nous ne pouvons échapper au changement ou à la perte; la liberté et le bonheur sont à la mesure de la souplesse et de l'aisance avec lesquelles nous accueillons le changement.",
    photo: bouddha.photo,
    auteur: bouddha.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Si tu laisses reposer une eau boueuse, elle s'eclaircira; de même, si tu laisses reposer ton esprit troublé, la chose à faire t'apparaîtra clairement.",
    photo: bouddha.photo,
    auteur: bouddha.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Chaque matin, nous renaissons à nouveau, ce que nous faisons aujourd'hui est ce qui importe le plus.",
    photo: bouddha.photo,
    auteur: bouddha.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Quelles qu'aient été les difficultés du passé, tu peux toujours recommencer à zéro aujourd'hui.",
    photo: bouddha.photo,
    auteur: bouddha.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "De même que le serpent se défait de sa peau, nous devons constamment nous défaire de notre passé.",
    photo: bouddha.photo,
    auteur: bouddha.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Celui qui est maître de lui-même est plus grand que celui qui est le maître du monde.",
    photo: bouddha.photo,
    auteur: bouddha.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La paix vient de l'intérieur, ne la cherchez pas à l'extérieur.",
    photo: bouddha.photo,
    auteur: bouddha.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Il n'y a pas de feu plus féroce que l'envie et la haine.",
    photo: bouddha.photo,
    auteur: bouddha.auteur,
    categorie: ["tous", "bonheur", "morale"],
  },
  {
    texte: "Ne crois pas ce que je te dis, ne rejette pas ce que je te dis; ce qui restera sera ta vérité.",
    photo: bouddha.photo,
    auteur: bouddha.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Accepte ce qui est, laisse aller ce qui était, aie confiance en ce qui sera.",
    photo: bouddha.photo,
    auteur: bouddha.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Ce que nous sommes est le résultat de ce que nous avons pensé.",
    photo: bouddha.photo,
    auteur: bouddha.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le bonheur n'est pas chose aisée. Il est très difficile à trouver en nous. Il est impossible à trouver à l'extérieur.",
    photo: bouddha.photo,
    auteur: bouddha.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "La vie peut-être merveilleuse si on n'en a pas peur.",
    photo: charlieChaplin.photo,
    auteur: charlieChaplin.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Nous ne devons pas avoir peur de nous confronter... Du chaos naît une étoile.",
    photo: charlieChaplin.photo,
    auteur: charlieChaplin.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "La valeur d'un homme ne se mesure pas aux biens qu'il possède. La véritable valeur de l'homme, c'est son caractère et la noblesse de ses idéaux.",
    photo: charlieChaplin.photo,
    auteur: charlieChaplin.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "La poésie est une lettre d'amour adressée au monde.",
    photo: charlieChaplin.photo,
    auteur: charlieChaplin.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Il faut tendre vers l'impossible: les grands exploits à travers l'histoire ont été la conquête de ce qui semblait impossible.",
    photo: charlieChaplin.photo,
    auteur: charlieChaplin.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Tu ne trouveras jamais l'arc-en-ciel si tu regardes toujours en bas.",
    photo: charlieChaplin.photo,
    auteur: charlieChaplin.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Mon miroir est mon meilleur ami, car lorsque je pleure, il ne rit jamais.",
    photo: charlieChaplin.photo,
    auteur: charlieChaplin.auteur,
    categorie: ["tous"],
  },
  {
    texte: "L'âme de l'homme a reçu des ailes et enfin elle commence à voler vers l'arc-en-ciel, vers la lumière de l'espoir.",
    photo: charlieChaplin.photo,
    auteur: charlieChaplin.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Rien ne dure dans ce monde cruel, pas même nos souffrances.",
    photo: charlieChaplin.photo,
    auteur: charlieChaplin.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Créé un chemin pour la venue des jours positifs.",
    photo: bobMarley.photo,
    auteur: bobMarley.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Ne conquiers pas le monde si tu dois y perdre ton âme, la sagesse vaut mieux que l'or et l'argent.",
    photo: bobMarley.photo,
    auteur: bobMarley.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Tu ne sais jamais à quel point tu es fort jusqu'au jour où être fort reste la seule option.",
    photo: bobMarley.photo,
    auteur: bobMarley.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Essai de devenir ce que tu veux plutôt que de devenir ce qu'ils veulent que tu deviennes.",
    photo: bobMarley.photo,
    auteur: bobMarley.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Ne vis pas pour que ta présence se remarque, mais pour que ton absence se ressente.",
    photo: bobMarley.photo,
    auteur: bobMarley.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Qui es-tu pour me juger ? Avant de pointer du doigt, vérifie que tes mains sont propres.",
    photo: bobMarley.photo,
    auteur: bobMarley.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Emancipe toi de l'esclavage mental, nul autre que toi-même ne peut libérer ton esprit.",
    photo: bobMarley.photo,
    auteur: bobMarley.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "La grandeur d'un homme ne se situe pas dans la richesse qu'il acquiert mais dans son intégrité et sa capacité à affecter positivement ceux qui l'entourent.",
    photo: bobMarley.photo,
    auteur: bobMarley.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "S'il y'a un problème, il y'a une solution. S'il n'y a pas de solution, c'est qu'il n'y a pas de problème.",
    photo: bobMarley.photo,
    auteur: bobMarley.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Les chiens et les chats arrivent à vivre ensemble, alors qu'est ce qui cloche chez toi, mon frère ?",
    photo: bobMarley.photo,
    auteur: bobMarley.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Si quelque chose peut te corrompre, c'est que tu es déjà corrompu.",
    photo: bobMarley.photo,
    auteur: bobMarley.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Ce qui fait le plus de mal aux hommes, ce sont les vanités matérielles.",
    photo: bobMarley.photo,
    auteur: bobMarley.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Certaines personnes aiment le pouvoir. D'autres ont le pouvoir d'aimer.",
    photo: bobMarley.photo,
    auteur: bobMarley.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "L'homme est un univers en lui-même.",
    photo: bobMarley.photo,
    auteur: bobMarley.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Je n'ai pas beaucoup d'ambition mais une chose me ferait plaisir, ce serait que les hommes vivent en paix.",
    photo: bobMarley.photo,
    auteur: bobMarley.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Mieux vaut mourir pour la liberté, qu'être un prisonnier tous les jours de ta vie.",
    photo: bobMarley.photo,
    auteur: bobMarley.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Il ne faut appeller richesses les choses que l'on peut perdre.",
    photo: leonardDeVinci.photo,
    auteur: leonardDeVinci.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'expérience prouve que celui qui n'a jamais confiance en personne ne sera jamais déçu.",
    photo: leonardDeVinci.photo,
    auteur: leonardDeVinci.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'homme ne trouvera jamais une invention plus belle, plus simple ou plus directe que la nature car dans ses inventions rien ne manque et rien n'est excessif.",
    photo: leonardDeVinci.photo,
    auteur: leonardDeVinci.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Les détails font la perfection, et la perfection n'est pas un détail.",
    photo: leonardDeVinci.photo,
    auteur: leonardDeVinci.auteur,
    categorie: ["tous", ""],
  },
  {
    texte: "Sachez vous éloigner car, lorsque vous reviendrez à votre travail, votre jugement sera plus sûr.",
    photo: leonardDeVinci.photo,
    auteur: leonardDeVinci.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Celui qui s'oriente sur l'étoile ne se retourne pas.",
    photo: leonardDeVinci.photo,
    auteur: leonardDeVinci.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Surtout, soyez toujours capables de ressentir au plus profond de votre coeur n'importe qu'elle injustice commise contre n'importe qui, où que ce soit dans le monde. C'est la plus belle qualité d'une révolutionnaire.",
    photo: cheGuevara.photo,
    auteur: cheGuevara.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Celui qui n'a pas le courage de se rebeller n'a pas le droit de se lamenter.",
    photo: cheGuevara.photo,
    auteur: cheGuevara.auteur,
    categorie: ["tous", "courage", "liberte"],
  },
  {
    texte: "Que le monde te change et tu peux changer le monde.",
    photo: cheGuevara.photo,
    auteur: cheGuevara.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Le premier devoir d'un révolutionnaire est d'être éduqué.",
    photo: cheGuevara.photo,
    auteur: cheGuevara.auteur,
    categorie: ["tous", "liberte", "sagesse"],
  },
  {
    texte: "Si tu peux trouver des chemins sans aucun obstacles, il mène probablement nulle part.",
    photo: cheGuevara.photo,
    auteur: cheGuevara.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Suivez votre coeur et votre intuition, l'un et l'autre savent ce que vous voulez devenir.",
    photo: steveJobs.photo,
    auteur: steveJobs.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Votre temps est limité, ne le gaspillez donc pas à vivre la vie de quelqu'un d'autre.",
    photo: steveJobs.photo,
    auteur: steveJobs.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Votre temps est limité, ne le gaspillez donc pas à vivre la vie de quelqu'un d'autre.",
    photo: steveJobs.photo,
    auteur: steveJobs.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Ne laissez pas le brouhaha extérieur étouffer votre voix intérieure.",
    photo: steveJobs.photo,
    auteur: steveJobs.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Ne soyez pas prisonniers des dogmes qui obligent à vivre en obéissant à la pensée d'autrui.",
    photo: steveJobs.photo,
    auteur: steveJobs.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Soyez insatiables. Soyez fous. Ce n'est pas dans le statu quo qu'on préparera un avenir meilleur.",
    photo: steveJobs.photo,
    auteur: steveJobs.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Inventons demain plutôt que de passer notre temps à nous soucier de ce qui s'est passé hier.",
    photo: steveJobs.photo,
    auteur: steveJobs.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "L'innovation, c'est ce qui distingue un leader d'un suiveur.",
    photo: steveJobs.photo,
    auteur: steveJobs.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Si vous faites quelque chose de super, ne restez pas trop longtemps attaché à ce succès... Pensez déjà au prochain challenge !",
    photo: steveJobs.photo,
    auteur: steveJobs.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Je suis convaincu qu'au moins la moitié de ce qui sépare les entrepreneurs qui réussissent de ceux qui ne réussissent pas est de la pure persévérance.",
    photo: steveJobs.photo,
    auteur: steveJobs.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Si vous regardez avec attention, la plupart des succès obtenus du jour au lendemain prennent beaucoup de temps.",
    photo: steveJobs.photo,
    auteur: steveJobs.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "La seule façon de faire un grand travail est d'aimer ce que vous faites. Si vous ne l'avez pas encore trouvé, continuez à chercher.",
    photo: steveJobs.photo,
    auteur: steveJobs.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Décider de ce que l'on ne doit plus faire est aussi important que de décider quoi faire.",
    photo: steveJobs.photo,
    auteur: steveJobs.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Si vous ne travaillez pas pour vos rêves, quelqu'un vous embauchera pour travailler pour les siens.",
    photo: steveJobs.photo,
    auteur: steveJobs.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Faire simple peut être plus difficile que de faire complexe car vous devez travailler dur pour épurer votre façon de penser.",
    photo: steveJobs.photo,
    auteur: steveJobs.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Vous devez croire en quelque chose: vos tripes, votre destin, votre karma, la vie, peu importe. Cette approche ne m'a jamais déçu et a fait toute la différence.",
    photo: steveJobs.photo,
    auteur: steveJobs.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Il y'a toujours puisque je le dis, puisque je l'affirme, au bout du chagrin, une fenêtre ouverte.",
    photo: mereTeresa.photo,
    auteur: mereTeresa.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Sois fidèle dans les petites choses parce que c'est en elle que ta force réside.",
    photo: mereTeresa.photo,
    auteur: mereTeresa.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Le succès c'est d'aller d'échec en échec sans perdre son enthousiasme.",
    photo: winstonChurchill.photo,
    auteur: winstonChurchill.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit l'opportunité dans chaque difficulté.",
    photo: winstonChurchill.photo,
    auteur: winstonChurchill.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Il est une bonne chose de lire des livres de citations, car les citations lorqu'elles sont gravées dans la mémoire vous donnent de bonnes pensées.",
    photo: winstonChurchill.photo,
    auteur: winstonChurchill.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'Histoire me sera indulgente, car j'ai l'intention de l'écrire.",
    photo: winstonChurchill.photo,
    auteur: winstonChurchill.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Agissez comme s'il est impossible d'échouer.",
    photo: winstonChurchill.photo,
    auteur: winstonChurchill.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Plus vous saurez regarder loin dans le passé. Plus vous verrez loin dans le futur.",
    photo: winstonChurchill.photo,
    auteur: winstonChurchill.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La grande leçon de la vie. C'est que parfois, ce sont les fous qui ont raison.",
    photo: winstonChurchill.photo,
    auteur: winstonChurchill.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Construire peut être le fruit d'un travail long et acharné. Détruire peut être l'oeuvre d'une seule journée.",
    photo: winstonChurchill.photo,
    auteur: winstonChurchill.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Ce n'est que quand il fait nuit que les étoiles brillent.",
    photo: winstonChurchill.photo,
    auteur: winstonChurchill.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Pour s'améliorer, il faut changer. Donc, pour être parfait, il faut avoir changé souvent.",
    photo: winstonChurchill.photo,
    auteur: winstonChurchill.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Je ne crois aux statistiques que lorsque je les ai moi-même falsifiées.",
    photo: winstonChurchill.photo,
    auteur: winstonChurchill.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le succès n'est pas final, l'échec n'est pas fatal: c'est le courage de continuer qui compte.",
    photo: winstonChurchill.photo,
    auteur: winstonChurchill.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Jamais jamais jamais. N'abandonnez jamais.",
    photo: winstonChurchill.photo,
    auteur: winstonChurchill.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Si vous persistez dans cette course à l'armement nucléaire, vous ne ferez rien d'autre que de tout détruire.",
    photo: winstonChurchill.photo,
    auteur: winstonChurchill.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le défaut du capitalisme c'est qu'il répartit inégalement les richesses. Le défaut du socialisme c'est qu'il répartit également la misère.",
    photo: winstonChurchill.photo,
    auteur: winstonChurchill.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Le meilleur argument contre la démocratie est un entretien de cinq minutes avec un électeur moyen.",
    photo: winstonChurchill.photo,
    auteur: winstonChurchill.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Il n'existe pas d'occasion unique, le vie offre toujours une seconde chance.",
    photo: pauloCoelho.photo,
    auteur: pauloCoelho.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "C'est justement la possibilité de réaliser un rêve qui rend la vie intéressante.",
    photo: pauloCoelho.photo,
    auteur: pauloCoelho.auteur,
    categorie: ["tous", "reve"],
  },
  {
    texte: "J'ai appris depuis longtemps que, pour soigner mes blessures, je devais avoir le courage de les regarder en face.",
    photo: pauloCoelho.photo,
    auteur: pauloCoelho.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Celui qui veut voir l'arc-en-ciel doit apprendre à aimer la pluie.",
    photo: pauloCoelho.photo,
    auteur: pauloCoelho.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Personne ne peut fuir son coeur, c'est pourquoi il vaut mieux écouter ce qu'il dit.",
    photo: pauloCoelho.photo,
    auteur: pauloCoelho.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Ne perds pas ton temps avec des explications; les gens entendent ce qu'ils veulent entendre.",
    photo: pauloCoelho.photo,
    auteur: pauloCoelho.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Quand on en peut revenir en arrière, on doit se préoccuper de la meilleure manière d'aller de l'avant.",
    photo: pauloCoelho.photo,
    auteur: pauloCoelho.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Si vous êtes assez courageux pour dire \"au revoir\", la vie vous récompensera avec un nouveau bonjour.",
    photo: pauloCoelho.photo,
    auteur: pauloCoelho.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Ne vous découragez pas; c'est souvent la dernière clef du trousseau qui ouvre la porte.",
    photo: pauloCoelho.photo,
    auteur: pauloCoelho.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Il faut prendre des risques. Nous ne comprenons vraiment le miracle de la vie que lorsque nous laissons arriver l'inattendu.",
    photo: pauloCoelho.photo,
    auteur: pauloCoelho.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Personne ne peut retourner en arrière, mais tout le monde peut aller de l'avant. Et demain, quand le soleil se lévera, il suffira de se répéter: je vais regarder cette journée comme si c'était la première de ma vie.",
    photo: pauloCoelho.photo,
    auteur: pauloCoelho.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Si vous pensez que l'aventure est dangereuse, essayez la routine, elle est mortelle.",
    photo: pauloCoelho.photo,
    auteur: pauloCoelho.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "La liberté n'est pas l'absence d'engagement, mais la capacité de choisir.",
    photo: pauloCoelho.photo,
    auteur: pauloCoelho.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Si vous pouvez le rêver, vous pouvez le faire.",
    photo: waltDisney.photo,
    auteur: waltDisney.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Si nous avons le courage de les poursuivre, tous les rêves deviennent réalité.",
    photo: waltDisney.photo,
    auteur: waltDisney.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Garde tes rêves au plus profond de toi, et un jour ils se réaliseront.",
    photo: waltDisney.photo,
    auteur: waltDisney.auteur,
    categorie: ["tous", "reve"],
  },
  {
    texte: "La différence entre un rêve et un projet, c'est une date.",
    photo: waltDisney.photo,
    auteur: waltDisney.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "La seule façon de commencer est d'arrêter de parler et de commencer à faire.",
    photo: waltDisney.photo,
    auteur: waltDisney.auteur,
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Rêve ta vie en couleur, c'est le secret du bonheur.",
    photo: waltDisney.photo,
    auteur: waltDisney.auteur,
    categorie: ["tous", "bonheur", "reve"],
  },
  {
    texte: "N'oubliez pas que tout commence avec les rêves.",
    photo: waltDisney.photo,
    auteur: waltDisney.auteur,
    categorie: ["tous", "reve"],
  },
  {
    texte: "Pense, crois, rêve et ose.",
    photo: waltDisney.photo,
    auteur: waltDisney.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Le rire est intemporel. L'imagination n'a pas d'âge. Et les rêves sont éternels.",
    photo: waltDisney.photo,
    auteur: waltDisney.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Pour que la vie soit un conte de fée, il suffit peut-être simplement d'y croire...",
    photo: waltDisney.photo,
    auteur: waltDisney.auteur,
    categorie: ["tous", "reve"],
  },
  {
    texte: "Le bonheur est un état d'esprit. Il s'agit de la façon dont vous regardez les choses.",
    photo: waltDisney.photo,
    auteur: waltDisney.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Le rire n'est pas un ennemi de l'apprentissage.",
    photo: waltDisney.photo,
    auteur: waltDisney.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Le vrai problème avec le monde, c'est que trop de gens grandissent.",
    photo: waltDisney.photo,
    auteur: waltDisney.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Toujours se battre pour la qualité, que ce soit pour donner ou pour recevoir.",
    photo: waltDisney.photo,
    auteur: waltDisney.auteur,
    categorie: ["tous"],
  },
  {
    texte: "La meilleure façon de se mettre au travail, c'est d'arrêter de parler et de commencer à agir.",
    photo: waltDisney.photo,
    auteur: waltDisney.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Tu ne traverseras jamais l'océan si tu as peur de perdre de vue le rivage.",
    photo: christopheColomb.photo,
    auteur: christopheColomb.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "L'imperfection est beauté, la folie est génie et il vaut mieux être totalement ridicule que totalement ennuyeux.",
    photo: marilynMonroe.photo,
    auteur: marilynMonroe.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Dans la vie, rien n'est à craindre tout est à comprendre.",
    photo: marieCurie.photo,
    auteur: marieCurie.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Il faut faire de la vie un rêve et d'un rêve une réalité.",
    photo: marieCurie.photo,
    auteur: marieCurie.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Vous ne pouvez pas espérer construire un monde meilleur sans améliorer les individus.",
    photo: marieCurie.photo,
    auteur: marieCurie.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Ils ne savaient pas que c est impossible, alors ils l'ont fait.",
    photo: markTwain.photo,
    auteur: markTwain.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Dans 20 ans, tu seras plus déçu par les choses que tu n'a pas faites que par celles qui tu auras faites. Alors, sors des sentiers battus. Mets les voiles. Explore. Rêve. Découvre",
    photo: markTwain.photo,
    auteur: markTwain.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Chacun de nous est une lune avec une face cachée que personne ne voit.",
    photo: markTwain.photo,
    auteur: markTwain.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Détournez-vous de ceux qui vous découragent de vos ambitions. C'est l'habitude des mesquins. Ceux qui sont vraiment grands vous font comprendre que vous aussi pouvez le devenir.",
    photo: markTwain.photo,
    auteur: markTwain.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "La gentillesse est le langage qu'un sourd peut entendre et qu'un aveugle peut voir.",
    photo: markTwain.photo,
    auteur: markTwain.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Il est curieux que le courage physique soit si répandu en ce monde et le courage moral si rare.",
    photo: markTwain.photo,
    auteur: markTwain.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le danger, ce n'est pas ce qu'on ignore, c'est ce que l'on tient pour certain et qui ne l'est pas.",
    photo: markTwain.photo,
    auteur: markTwain.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'homme est le plus cruel de tous les animaux, il est le seul capable d'infliger une douleur à ses congénères sans autre motif que le plaisir.",
    photo: markTwain.photo,
    auteur: markTwain.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Le rôle d'un ami, c'est d'être à vos côtés quand vous êtes dans l'erreur, car tout le monde sera à côté de vous quand vous aurez raison.",
    photo: markTwain.photo,
    auteur: markTwain.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Chaque fois que vous vous retrouvez du côté de la majorité, il est temps de vous arrêter et de réfléchir.",
    photo: markTwain.photo,
    auteur: markTwain.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Les deux jours les plus importants de votre vie sont le jour de votre naissance et le jour où vous découvrez pourquoi vous êtes né.",
    photo: markTwain.photo,
    auteur: markTwain.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le fait qu'un homme distingue le bien du mal prouve sa supériorité intellectuelle par rapport à toute autre créature; mais le fait qu'il puisse mal agir prouve l'infériorité de son esprit.",
    photo: markTwain.photo,
    auteur: markTwain.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Concentrez-vous plus sur votre désir que sur votre doute, et le rêve prendra soin de lui-même.",
    photo: markTwain.photo,
    auteur: markTwain.auteur,
    categorie: ["tous", "courage", "reve"],
  },

  {
    texte: "Rien n'est jamais fini, il suffit d'un peu de bonheur pour que tout recommence.",
    photo: emileZola.photo,
    auteur: emileZola.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Il n'est pas de plus grande folie que de ne pas en avoir.",
    photo: emileZola.photo,
    auteur: emileZola.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "La passion est encore ce qui aide le mieux à vivre.",
    photo: emileZola.photo,
    auteur: emileZola.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "L'art est la libre expression d'un coeur et d'une intelligence, il est d'autant plus grand qu'il est plus personnel.",
    photo: emileZola.photo,
    auteur: emileZola.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Une heure, une minute suffit pour que le destin agisse et change les défaites en victoires.",
    photo: emileZola.photo,
    auteur: emileZola.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Les libertés ne se donnent pas, elles se prennent.",
    photo: pierreKroptokine.photo,
    auteur: pierreKroptokine.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Quiconque met la main sur moi pour me gouverner est un usurpateur et un tyran; je le déclare mon ennemi.",
    photo: pierreJosephProudhon.photo,
    auteur: pierreJosephProudhon.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Le fait de pouvoir élire librement des maîtres ne supprime ni les maîtres ni les esclaves.",
    photo: herbertMarcuse.photo,
    auteur: herbertMarcuse.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "L'Etat ne poursuit jamais qu'un but: limiter, enchaîner, assujettir, subordonner l'individu.",
    photo: maxStirner.photo,
    auteur: maxStirner.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Les prolétaires n'ont rien à perdre que leurs chaînes. Ils ont le monde à gagner. Prolétaires de tous les pays, unissez-vous !",
    photo: karlMarx.photo,
    auteur: karlMarx.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "La propriété privée nous a rendus si stupides et si bornés qu'un objet n'est nôtre que lorque nous le possédons.",
    photo: karlMarx.photo,
    auteur: karlMarx.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "L'histoire de toute société jusqu'à nos jours n'a été que l'histoire de luttes des classes.",
    photo: karlMarx.photo,
    auteur: karlMarx.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Le capital épuise deux choses, le travailleur et la nature.",
    photo: karlMarx.photo,
    auteur: karlMarx.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le domaine de la liberté commence là où s'arrête le travail déterminé par la nécessité.",
    photo: karlMarx.photo,
    auteur: karlMarx.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Une idée devient une force lorsqu'elle s'empare des masses.",
    photo: karlMarx.photo,
    auteur: karlMarx.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Celui qui ne connaît pas l'histoire est condamné à la revivre.",
    photo: karlMarx.photo,
    auteur: karlMarx.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La révolution sera la floraison de l'humanité comme l'amour est la floraison du coeur.",
    photo: louiseMichel.photo,
    auteur: louiseMichel.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Toutes les lois sont oppressives et criminelles. Elles ne protègent que les riches et les heureux.",
    photo: octaveMirbeau.photo,
    auteur: octaveMirbeau.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Naturellement, ce sont toujours ceux qui n'ont rien qui sont les plus volés et volés par ceux qui ont tout...",
    photo: octaveMirbeau.photo,
    auteur: octaveMirbeau.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "On vit en travaillant... On ne s'enrichit qu'en faisant travailler.",
    photo: octaveMirbeau.photo,
    auteur: octaveMirbeau.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Quand il y'a quelque part un homme trop riche, il y'a, par cela même, autour de lui, des gens trop pauvres.",
    photo: octaveMirbeau.photo,
    auteur: octaveMirbeau.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Les pauvres sont l'engrais humain où poussent les moissons de vie et de joie que récoltent les riches, et dont il mésusent si cruellement, contre nous...",
    photo: octaveMirbeau.photo,
    auteur: octaveMirbeau.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Si tu veux devenir vraiment un homme du monde, apprends d'abord à être un imbécile ou à te taire.",
    photo: octaveMirbeau.photo,
    auteur: octaveMirbeau.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Les lois sont toujours faites par les riches contre les pauvres.",
    photo: octaveMirbeau.photo,
    auteur: octaveMirbeau.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "L'injustice qui frappe un être vivant, fût-il ton ennemi, te frappe du même coup. Par elle, l'Humanité est lésée en vous deux.",
    photo: octaveMirbeau.photo,
    auteur: octaveMirbeau.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Les hommes passent la moitié de leur temps à se forger des chaînes et l'autre moitié à les porter.",
    photo: octaveMirbeau.photo,
    auteur: octaveMirbeau.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "L'homme que tu élèves ne représente ni ta misère, ni tes aspirations, ni rien de toi, il ne représente que ses propres passions et intérêts, lesquels sont contraires aux tiens.",
    photo: octaveMirbeau.photo,
    auteur: octaveMirbeau.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "N'est-il pas évident que tous les gouvernements sont les empoisonneurs, les abêtisseurs intéressés des masses populaires ?",
    photo: mikhailBakounine.photo,
    auteur: mikhailBakounine.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Disparaissez enfin, révoltantes distinctions de riches et de pauvres, de grands et de petits, de gouvernants et de gouvernés.",
    photo: sylvainMarechal.photo,
    auteur: sylvainMarechal.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Ils ne sont grands que parce que nous sommes à genoux.",
    photo: etienneDeLaBoetie.photo,
    auteur: etienneDeLaBoetie.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "C'est la liberté: bien si grand que dès qu'elle est perdue tous les maux s'ensuivent, et que, sans elle, tous les autres biens, corrompus par la servitude, perdent entièrement leur goût et leur saveur.",
    photo: etienneDeLaBoetie.photo,
    auteur: etienneDeLaBoetie.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Il n'y a que ceux qui ne bougent pas qui ne remarquent pas leurs chaînes.",
    photo: rosaLuxemburg.photo,
    auteur: rosaLuxemburg.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Le temps viendra où notre silence sera plus puissant que les voix que vous étranglez aujourd'hui.",
    photo: augustSpies.photo,
    auteur: augustSpies.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "C'est parce qu'on imagine simultanément tous les pas qu'on devra faire qu'on se décourage, alors qu'il s'agit de les aligner un à un.",
    photo: marcelJouhandeau.photo,
    auteur: marcelJouhandeau.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Quoi que vous rêviez d'entreprendre, commencez-le. L'audace a du génie, du pouvoir et de la magie.",
    photo: johannWolgangVonGoethe.photo,
    auteur: johannWolgangVonGoethe.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Dans le domaine des idées, tout dépend de l'enthousiasme. Dans le monde réel, tout repose sur la persévérance.",
    photo: johannWolgangVonGoethe.photo,
    auteur: johannWolgangVonGoethe.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Dès l'instant où vous aurez foi en vous-même, vous saurez comment vivre.",
    photo: johannWolgangVonGoethe.photo,
    auteur: johannWolgangVonGoethe.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Dans la plénitude du bonheur, chaque jour est une vie entière.",
    photo: johannWolgangVonGoethe.photo,
    auteur: johannWolgangVonGoethe.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Parler est un besoin, écouter est un art.",
    photo: johannWolgangVonGoethe.photo,
    auteur: johannWolgangVonGoethe.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'important ce n'est pas de tomber, c'est de ne pas rester à terre.",
    photo: johannWolgangVonGoethe.photo,
    auteur: johannWolgangVonGoethe.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "L'homme qui n'a rien à perdre est redoutable.",
    photo: johannWolgangVonGoethe.photo,
    auteur: johannWolgangVonGoethe.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Méfiez-vous des rêves de jeunesse, ils finissent toujours par se réaliser.",
    photo: johannWolgangVonGoethe.photo,
    auteur: johannWolgangVonGoethe.auteur,
    categorie: ["tous", "reve"],
  },
  {
    texte: "Quel est le meilleur gouvernement ? Celui qui nous apprend à nous gouverner nous-mêmes.",
    photo: johannWolgangVonGoethe.photo,
    auteur: johannWolgangVonGoethe.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Ne te laisse pas décourager par la vie; tous ceux qui se sont rendus où ils sont, ont dû partir d'où ils étaient.",
    photo: alEvans.photo,
    auteur: alEvans.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "L'espoir est comme le ciel des nuits: il n'est pas coin si sombre où l'oeil qui s'obstine ne finisse par découvrir une étoile.",
    photo: octaveFeuillet.photo,
    auteur: octaveFeuillet.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Si nous doutions de nos peurs au lieu de douter de nos rêves, imaginez tout ce qu'on pourrait accomplir.",
    photo: joelBrown.photo,
    auteur: joelBrown.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Il n'y a pas de traversée du désert, il n'y a qu'une marche vers l'oasis.",
    photo: jeanBies.photo,
    auteur: jeanBies.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "La vie nous donne toujours une seconde chance qui s'appelle demain.",
    photo: paulFort.photo,
    auteur: paulFort.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Notre plus grande gloire n'est pas de ne jamais tomber, mais de nous relever à chaque fois que nous tombons.",
    photo: oliverGoldsmith.photo,
    auteur: oliverGoldsmith.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Crois que tu y arriveras et tu seras à mi-chemin.",
    photo: theodoreRoosevelt.photo,
    auteur: theodoreRoosevelt.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Les obstacles ne doivent pas t'arrêter. Si tu rencontres un mur, ne te retourne pas et n'abandonne pas. Tu dois comprendre comment escalader, traverser ou contourner le problème.",
    photo: michaelJordan.photo,
    auteur: michaelJordan.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Certains veulent que ça arrive. D'autres aimeraient que ça arrive. Et les autres font que ça arrive.",
    photo: michaelJordan.photo,
    auteur: michaelJordan.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Je peux accepter l'échec, tout le monde échoue dans quelque chose. Mais je ne peux pas accepter de ne pas essayer.",
    photo: michaelJordan.photo,
    auteur: michaelJordan.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "J'ai raté 9000 tirs dans ma carrière. J'ai perdu presque 300 matchs. 26 fois, on m'a fait confiance pour prendre le tir de la victoire et j'ai raté. J'ai échoué encore et encore et encore dans ma vie. Et c'est pourquoi je réussis.",
    photo: michaelJordan.photo,
    auteur: michaelJordan.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Si tu abandonnes une fois, cela peut devenir une habitude. N'abandonne jamais.",
    photo: michaelJordan.photo,
    auteur: michaelJordan.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Le talent permet de gagner des matchs, mais le travail d'équipe et l'intelligence permettent de gagner les championnats.",
    photo: michaelJordan.photo,
    auteur: michaelJordan.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "J'ai toujours cru que si tu mets tout en oeuvre pour réussir, les résultats viendront.",
    photo: michaelJordan.photo,
    auteur: michaelJordan.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Transforme toujours une situation négative en une situation positive.",
    photo: michaelJordan.photo,
    auteur: michaelJordan.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Il faut se fixer des buts avant de pouvoir les atteindre.",
    photo: michaelJordan.photo,
    auteur: michaelJordan.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Les limites, comme la peur, sont souvent des illusions.",
    photo: michaelJordan.photo,
    auteur: michaelJordan.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "C'est en croyant aux roses qu'on les fait éclore.",
    photo: anatoleFrance.photo,
    auteur: anatoleFrance.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Je souhaite à tous ceux que j'aime un petit grain de folie: cela rend le coeur gai.",
    photo: anatoleFrance.photo,
    auteur: anatoleFrance.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Tout ira pour le mieux à la fin. Si ce n'est pas mieux, c'est que ce n'est pas la fin.",
    photo: edSheeran.photo,
    auteur: edSheeran.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "La seule révolution possible, c'est d'essayer de s'améliorer soi-même, en espérant que les autres fassent la même démarche. Le monde ira mieux alors.",
    photo: georgesBrassens.photo,
    auteur: georgesBrassens.auteur,
    categorie: ["tous", "courage", "liberte", "reve"],
  },
  {
    texte: "Plutôt que de penser à ce que tu n'a pas, pense à ce que tu peux faire avec ce que tu as.",
    photo: ernestHemingway.photo,
    auteur: ernestHemingway.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Il n'y a rien de noble à être supérieur à vos semblables. La vrai noblesse est d'être supérieur à celui que vous avez été auparavant.",
    photo: ernestHemingway.photo,
    auteur: ernestHemingway.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le monde est un endroit magnifique pour lequel il vaut la peine de se battre.",
    photo: ernestHemingway.photo,
    auteur: ernestHemingway.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Nous devons nous y habituer: aux plus importantes croisées des chemins de notre vie, il n'y a pas de signalisation.",
    photo: ernestHemingway.photo,
    auteur: ernestHemingway.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Mieux vaut vivre un seul jour comme un lion que cent années comme un mouton.",
    photo: ernestHemingway.photo,
    auteur: ernestHemingway.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "De la joie chez les gens intelligents, est la chose la plus rare que je connaisse.",
    photo: ernestHemingway.photo,
    auteur: ernestHemingway.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Le temps est la plus petite chose dont nous disposons.",
    photo: ernestHemingway.photo,
    auteur: ernestHemingway.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La vie nous brise tous mais, une fois nos blessures cicatrisées, beaucoup d'entre nous en ressortent plus forts.",
    photo: ernestHemingway.photo,
    auteur: ernestHemingway.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Il embrassa la mer d'un regard et se rendit compte de l'infinie solitude où il se trouvait.",
    photo: ernestHemingway.photo,
    auteur: ernestHemingway.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Qu'elle soit nécessaire, ou même justifiée, ne croyez jamais que la guerre n'est pas un crime.",
    photo: ernestHemingway.photo,
    auteur: ernestHemingway.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Celui qui a commencé à vivre plus sérieusement de l'intérieur commence à vivre plus facilement à l'extérieur.",
    photo: ernestHemingway.photo,
    auteur: ernestHemingway.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "J'aime écouter. Cela m'a permis d'apprendre énormément de choses. La plupart des gens n'écoutent jamais.",
    photo: ernestHemingway.photo,
    auteur: ernestHemingway.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La liberté est le plus grand de tous les biens.",
    photo: pierreLarousse.photo,
    auteur: pierreLarousse.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "L'homme libre est celui qui n'a pas peur d'aller jusqu'au bout de sa pensée.",
    photo: leonBlum.photo,
    auteur: leonBlum.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Vive la liberté! A bas l'intolérance!",
    photo: julesRenard.photo,
    auteur: julesRenard.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Quand on peut voir si nettement les défauts des autres, c'est qu'on les a.",
    photo: julesRenard.photo,
    auteur: julesRenard.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Rêve de grandes choses. Cela te permettra au moins d'en faire de toutes petites.",
    photo: julesRenard.photo,
    auteur: julesRenard.auteur,
    categorie: ["tous", "reve"],
  },
  {
    texte: "Et par le pouvoir d'un mot. Je recommence ma vie. Je suis né pour te connaître. Pour te nommer. Liberté.",
    photo: paulEluard.photo,
    auteur: paulEluard.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Un rêve sans étoiles est un rêve oublié.",
    photo: paulEluard.photo,
    auteur: paulEluard.auteur,
    categorie: ["tous", "reve", "sen"],
  },
  {
    texte: "Un rêve sans étoiles est un rêve oublié.",
    photo: paulEluard.photo,
    auteur: paulEluard.auteur,
    categorie: ["tous", "reve", "sen"],
  },
  {
    texte: "Il n'y a pas de hasards, il n'y a que des rendez-vous.",
    photo: paulEluard.photo,
    auteur: paulEluard.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Le secret du bonheur est la liberté. Le secret de la liberté est le courage",
    photo: pericles.photo,
    auteur: pericles.auteur,
    categorie: ["tous", "bonheur", "liberte"],
  },
  {
    texte: "Si on veut obtenir ce quelque chose que l'on a jamais eu. Il faut tenter quelque chose que l'on a jamais fait.",
    photo: pericles.photo,
    auteur: pericles.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "La liberté est un bagne aussi longtemps qu'un seul homme est asservi sur la terre.",
    photo: albertCamus.photo,
    auteur: albertCamus.auteur,
    categorie: ["tous", "liberte", "morale"],
  },
  {
    texte: "La grandeur de l'homme est dans sa décision d'être plus fort que sa condition.",
    photo: albertCamus.photo,
    auteur: albertCamus.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "La vrai générosité envers l'avenir consiste à tout donner au présent.",
    photo: albertCamus.photo,
    auteur: albertCamus.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Rien au monde ne vaut qu'on se détourne de ce qu'on aime.",
    photo: albertCamus.photo,
    auteur: albertCamus.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Au milieu de l'hiver, j'ai découvert en moi un invincible été.",
    photo: albertCamus.photo,
    auteur: albertCamus.auteur,
    categorie: ["tous", ""],
  },
  {
    texte: "Il y'a dans chaque coeur un coin de solitude où personne ne peut atteindre.",
    photo: albertCamus.photo,
    auteur: albertCamus.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Si un maître ne peut pas se passer de son esclave, lequel des deux est un homme libre ?",
    photo: albertCamus.photo,
    auteur: albertCamus.auteur,
    categorie: ["tous", "sagesse", "liberte"],
  },
  {
    texte: "Je sais maintenant qu'il n'y a pas de bonheur dans la haine.",
    photo: albertCamus.photo,
    auteur: albertCamus.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "On se fait toujours des idées exagérées de ce qu'on ne connaît pas.",
    photo: albertCamus.photo,
    auteur: albertCamus.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Créer c'est donner une forme à son destin.",
    photo: albertCamus.photo,
    auteur: albertCamus.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Tu ne seras jamais heureux si tu cherches continuellement de quoi est fait le bonheur... Tu ne vivras jamais si tu cherches toujours un sens à la vie.",
    photo: albertCamus.photo,
    auteur: albertCamus.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Ceux qui manquent de courage ont toujours une philosophie pour le justifier.",
    photo: albertCamus.photo,
    auteur: albertCamus.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "La démocratie, ce n'est pas la loi de la majorité, mais la protection de la minorité.",
    photo: albertCamus.photo,
    auteur: albertCamus.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Renoncer à sa liberté c'est renoncer à sa qualité d'homme, aux droits de l'humanité, même à ses devoirs.",
    photo: jeanJacquesRousseau.photo,
    auteur: jeanJacquesRousseau.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Donnez le désir d'apprendre et toute méthode sera bonne.",
    photo: jeanJacquesRousseau.photo,
    auteur: jeanJacquesRousseau.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'homme est né libre, et partout il est dans les fers.",
    photo: jeanJacquesRousseau.photo,
    auteur: jeanJacquesRousseau.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "L'âme résiste bien plus aisément aux vives douleurs qu'à la tristesse prolongée.",
    photo: jeanJacquesRousseau.photo,
    auteur: jeanJacquesRousseau.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "C'est en vain qu'on cherche au loin le bonheur quand on oublie de le cultiver soi-même.",
    photo: jeanJacquesRousseau.photo,
    auteur: jeanJacquesRousseau.auteur,
    categorie: ["tous", "bonheur", "sagesse"],
  },
  {
    texte: "Loin que le chef ait un intérêt naturel au bonheur des particuliers, il ne lui est pas rare de chercher le sien dans leur misère.",
    photo: jeanJacquesRousseau.photo,
    auteur: jeanJacquesRousseau.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "L'on est jamais bien quand on n'est pas à sa place.",
    photo: jeanJacquesRousseau.photo,
    auteur: jeanJacquesRousseau.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Il n'y a point d'assujetissement si parfait que celui qui garde l'apparence de la liberté; on captive ainsi la volonté même.",
    photo: jeanJacquesRousseau.photo,
    auteur: jeanJacquesRousseau.auteur,
    categorie: ["tous", "liberte", "sagesse"],
  },
  {
    texte: "Un homme ne doit jamais rougir d'avouer qu'il a tort; car, en faisant cet aveu, il prouve qu'il est plus sage aujourd'hui qu'hier.",
    photo: jeanJacquesRousseau.photo,
    auteur: jeanJacquesRousseau.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le coeur de l'homme est son paradis et son enfer.",
    photo: jeanJacquesRousseau.photo,
    auteur: jeanJacquesRousseau.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "J'étais fait pour vivre, et je meurs sans avoir vécu.",
    photo: jeanJacquesRousseau.photo,
    auteur: jeanJacquesRousseau.auteur,
    categorie: ["tous", "bonheur", "sensibilite"],
  },
  {
    texte: "Il n'y a point de bonheur sans courage, ni de vertu sans combat.",
    photo: jeanJacquesRousseau.photo,
    auteur: jeanJacquesRousseau.auteur,
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "Toute méchanceté vient de la faiblesse; l'enfant est méchant que parce qu'il est faible; rendez-le fort, il sera bon.",
    photo: jeanJacquesRousseau.photo,
    auteur: jeanJacquesRousseau.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Savez-vous quel est le plus sûr moyen de rendre votre enfant misérable ? C'est de l'accoutumer à tout obtenir.",
    photo: jeanJacquesRousseau.photo,
    auteur: jeanJacquesRousseau.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "L'astronomie est née de la superstition; l'éloquence de l'ambition, de la haine, de la flatterie, du mensonge; la géométrie de l'avarice; la physique d'une vaine curiosité; toutes et la morale même, de l'orgueil humain.",
    photo: jeanJacquesRousseau.photo,
    auteur: jeanJacquesRousseau.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Le monde de la réalité a ses limites; le monde de l'imagination est sans frontières.",
    photo: jeanJacquesRousseau.photo,
    auteur: jeanJacquesRousseau.auteur,
    categorie: ["tous", "reve"],
  },
  {
    texte: "La raison, le jugement, viennent lentement, les préjugés accourent en foule.",
    photo: jeanJacquesRousseau.photo,
    auteur: jeanJacquesRousseau.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Il y a souvent plus de stupidité que de courage dans une constance apparente.",
    photo: jeanJacquesRousseau.photo,
    auteur: jeanJacquesRousseau.auteur,
    categorie: ["tous"],
  },
  {
    texte: "La liberté consiste moins à faire sa volonté qu'à ne pas être soumis à celle d'autrui.",
    photo: jeanJacquesRousseau.photo,
    auteur: jeanJacquesRousseau.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Si tu veux connaître le coeur d'une personne, observe comment elle se comporte avec les gens qui ne peuvent rien lui apporter.",
    photo: hindoue.photo,
    auteur: hindoue.auteur,
    categorie: ["tous", "morale", "sensibilite"],
  },
  {
    texte: "Dans chaque épreuve, ne cherchez pas l'ennemi, cherchez l'enseignement.",
    photo: mikaoUsui.photo,
    auteur: mikaoUsui.auteur,
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Je ne connais pas la clé du succès, mais la clé d'un échec est d'essayer de plaire à tout le monde.",
    photo: billCosby.photo,
    auteur: billCosby.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le fou se croit sage et le sage se reconnaît fou.",
    photo: williamShakespeare.photo,
    auteur: williamShakespeare.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Nous savons ce que nous sommes, mais nous ignorons ce que nous pourrions être.",
    photo: williamShakespeare.photo,
    auteur: williamShakespeare.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Se lamenter sur un malheur passé, voilà le plus sûr moyen d'en attirer un autre.",
    photo: williamShakespeare.photo,
    auteur: williamShakespeare.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Si nous vivons, nous vivons pour marcher sur la tête des puissants... Car les puissants ne travaillent qu'a marcher sur nos vies.",
    photo: williamShakespeare.photo,
    auteur: williamShakespeare.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "L'amour ne voit pas avec les yeux, mais avec l'âme.",
    photo: williamShakespeare.photo,
    auteur: williamShakespeare.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Quand la neige fond, où va le blanc ?",
    photo: williamShakespeare.photo,
    auteur: williamShakespeare.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Pour bien connaître un homme, il faut d'abord se connaître.",
    photo: williamShakespeare.photo,
    auteur: williamShakespeare.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Pardonner est une action plus noble et plus rare que celle de se venger.",
    photo: williamShakespeare.photo,
    auteur: williamShakespeare.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Mieux vaut mourir incompris que passer sa vie à s'expliquer.",
    photo: williamShakespeare.photo,
    auteur: williamShakespeare.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Quelle époque terrible que celle où des idiots dirigent des aveugles.",
    photo: williamShakespeare.photo,
    auteur: williamShakespeare.auteur,
    categorie: ["tous", "liberte", "sagesse"],
  },
  {
    texte: "Les poignards qui ne sont pas dans les mains peuvent être dans les paroles.",
    photo: williamShakespeare.photo,
    auteur: williamShakespeare.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Souffle, souffle, vent d'hiver; tu n'est pas si cruel que l'ingratitude de l'homme.",
    photo: williamShakespeare.photo,
    auteur: williamShakespeare.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Sache que les hommes sont ce qu'est leur époque.",
    photo: williamShakespeare.photo,
    auteur: williamShakespeare.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Nos doutes sont des traitres et nous privent de ce que nous pourrions souvent gagner de bon... parce que nous avons peur d'essayer.",
    photo: williamShakespeare.photo,
    auteur: williamShakespeare.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Je tiens ce monde pour ce qu'il est: un théâtre où chacun doit jouer son rôle.",
    photo: williamShakespeare.photo,
    auteur: williamShakespeare.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Celui qui n'est plus ton ami ne l'a jamais été.",
    photo: williamShakespeare.photo,
    auteur: williamShakespeare.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Un pays bien organisé est celui où le petit nombre fait travailler le grand nombre, est nourri par lui, et le gouverne.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Le bonheur est souvent la seule chose qu'on puisse donner sans l'avoir et c'est en le donnant qu'on l'acquiert.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Dans tous les temps, et dans tous les pays, et dans tous les genre, le mauvais fourmille, et le bon est rare.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Certains n'emploient les paroles que pour déguiser leurs pensées.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Plus les hommes seront éclairés, plus ils seront libres.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous", "liberte", "sagesse"],
  },
  {
    texte: "Voulez-vous vivre heureux, vivez toujours sans maître.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous", "bonheur", "liberte"],
  },
  {
    texte: "J'ai décidé d'être heureux parce que c'est bon pour la santé.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Il est dangereux d'avoir raison lorsque le gouvernement a tort.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Les Incas avaient des palais incrustés d'or et couverts de paille : emblème de bien des gouvernements.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "L'art de gouverner consiste à prendre le plus d'argent possible à une catégorie de citoyens afin de le donner à une autre.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Lorsqu'une question soulève des opinions violemment contradictoires, on peut assurer qu'elle appartient au domaine de la croyance et non à celui de la connaissance.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Les médecins administrent des médicaments dont ils savent très peu, à des malades dont ils savent moins, pour guérir des maladies dont ils ne savent rien.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Rien n'est plus dangereux que lorsque l'ignorance et l'intolérance sont armés de pouvoir.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'art de la médecine consiste à distraire le malade pendant que la nature le guérit.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Les Français ne sont pas faits pour la liberté : ils en abuseraient.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Qu'est-ce que la tolérance ? C'est l'apanage de l'humanité. Nous sommes tous pétris de faiblesses et d'erreurs ; pardonnons-nous réciproquement nos sottises, c'est la première loi de la nature.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Si l’homme est créé libre, il doit se gouverner - Si l’homme a des tyrans, il les doit détrôner.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Dire le secret d'autrui est une trahison, dire le sien est une sottise.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Si l'on n'est pas sensible, on n'est jamais sublime.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Quand on a tout perdu, quand on n'a plus d'espoir, la vie est un opprobre et la mort un devoir.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Ce qui touche le coeur se grave dans la mémoire.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Quand il s'agit d'argent, tout le monde est de la même religion.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Les vrais passions donnent des forces, en donnant du courage.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Il n'y a point de mal dont il ne naisse un bien.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Ne pas être occupé et ne pas exister c'est la même chose.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Les préjugés sont la raison des sots.",
    photo: voltaire.photo,
    auteur: voltaire.auteur,
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Plus grand est l'obstacle, plus grande est la gloire de le surmonter.",
    photo: moliere.photo,
    auteur: moliere.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Et que nous servira d'avoir du bien, s'il ne nous vient dans le temps que nous ne serons plus dans le bel âge d'en jouir.",
    photo: moliere.photo,
    auteur: moliere.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Il est si doux de vivre ! On ne meurt qu'une fois et c'est pour si longtemps...",
    photo: moliere.photo,
    auteur: moliere.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "L'allégresse du coeur s'augmente à la répandre.",
    photo: moliere.photo,
    auteur: moliere.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "L'on cherche souvent plus qu'on ne veut trouver.",
    photo: moliere.photo,
    auteur: moliere.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Vous manquez 100 pour cent des tirs que vous ne tentez pas.",
    photo: wayneGretzky.photo,
    auteur: wayneGretzky.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Qui regarde dehors rêve. Qui regarde à l'intérieur se réveille.",
    photo: carlJung.photo,
    auteur: carlJung.auteur,
    categorie: ["tous", "sagesse", "reve","sensibilite"],
  },
  {
    texte: "Ta vision deviendra claire lorsque tu regarderas dans ton coeur.",
    photo: carlJung.photo,
    auteur: carlJung.auteur,
    categorie: ["tous", "sagesse","sensibilite"],
  },
  {
    texte: "Ce que tu nies te soumet, ce que tu acceptes te transforme.",
    photo: carlJung.photo,
    auteur: carlJung.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "On ne peut voir la lumière sans l'ombre, on ne peut percevoir le silence sans le bruit, on ne peut atteindre la sagesse sans la folie.",
    photo: carlJung.photo,
    auteur: carlJung.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Ce n'est pas en regardant la lumière qu'on devient lumineux, mais en plongeant dans son obscurité.",
    photo: carlJung.photo,
    auteur: carlJung.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "La chose la plus terrifiante, c'est de s'accepter soi-même.",
    photo: carlJung.photo,
    auteur: carlJung.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Trouvez ce dont une personne a le plus peur et vous saurez de quoi sera faite sa prochaine étape de croissance.",
    photo: carlJung.photo,
    auteur: carlJung.auteur,
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Réfléchir c'est difficile, c'est pourquoi la plupart des gens jugent.",
    photo: carlJung.photo,
    auteur: carlJung.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Je ne suis pas ce qui est arrivé, je suis ce que je choisis de devenir.",
    photo: carlJung.photo,
    auteur: carlJung.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Vous ne guérirez pas avec ce que vous savez, mais avec ce que vous êtes.",
    photo: carlJung.photo,
    auteur: carlJung.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "En chacun de nous existe un autre être que nous ne connaissons pas. Il nous parle à travers le rêve et nous fait savoir qu'il nous voit bien différent de ce que nous croyons être.",
    photo: carlJung.photo,
    auteur: carlJung.auteur,
    categorie: ["tous", "courage", "sagesse", "reve"],
  },
  {
    texte: "Ce qu'on ne veut pas savoir de soi-même finit par arriver de l'extérieur comme un destin.",
    photo: carlJung.photo,
    auteur: carlJung.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le véritable lieu de naissance est celui où l'on a porté, pour la première fois, un coup d'oeil intelligent sur soi-même.",
    photo: margueriteYourcenar.photo,
    auteur: margueriteYourcenar.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le but de la vie sur terre est de découvrir son être véritable et de vivre en accord avec lui.",
    photo: henryMiller.photo,
    auteur: henryMiller.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le bonheur de votre vie dépend de la qualité de vos pensées.",
    photo: marcAurele.photo,
    auteur: marcAurele.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Nulle retraite n'est plus tranquille ni moins troublée pour l'homme que celle qu'il trouve dans son âme.",
    photo: marcAurele.photo,
    auteur: marcAurele.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Qui vit en paix avec lui-même, vit en paix avec l'univers.",
    photo: marcAurele.photo,
    auteur: marcAurele.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "Crains non point de cesser de vivre, mais plutôt de n'avoir jamais commencé à vivre.",
    photo: marcAurele.photo,
    auteur: marcAurele.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La meilleure façon de se venger d'un ennemi, c'est de ne pas lui ressembler.",
    photo: marcAurele.photo,
    auteur: marcAurele.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "L'homme ordinaire est exigeant avec les autres. L'homme exceptionnel est exigeant avec lui-même.",
    photo: marcAurele.photo,
    auteur: marcAurele.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Accomplis chaque acte de ta vie comme s'il devait être le dernier.",
    photo: marcAurele.photo,
    auteur: marcAurele.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Ce n'est pas ce qui vous arrive qui importe, mais votre façon d'y réagir.",
    photo: epictete.photo,
    auteur: epictete.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le bonheur ne consiste pas à acquérir et à jouir, mais à ne rien désirer, car il consiste à être libre.",
    photo: epictete.photo,
    auteur: epictete.auteur,
    categorie: ["tous", "bonheur", "liberte"],
  },
  {
    texte: "Il n'y a qu'un chemin pour le bonheur, c'est de cesser de nous tracasser pour des choses qui ne dépendent pas de notre volonté.",
    photo: epictete.photo,
    auteur: epictete.auteur,
    categorie: ["tous", "bonheur", "sagesse"],
  },
  {
    texte: "Ne cherchez pas les biens hors de vous, cherchez-les en vous-mêmes. Sinon vous ne les trouverez pas.",
    photo: epictete.photo,
    auteur: epictete.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Les hommes se rendent malheureux non par les choses qui arrivent mais par leur manière de voir les choses qui arrivent.",
    photo: epictete.photo,
    auteur: epictete.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "N'attends pas que les événements arrivent comme tu le souhaites. Décide de vouloir ce qui arrive... et tu seras heureux.",
    photo: epictete.photo,
    auteur: epictete.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Nous ne pouvons pas choisir les circonstances extérieures mais nous pouvons toujours choisir la façon dont nous répondons à celles-ci.",
    photo: epictete.photo,
    auteur: epictete.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Dis-toi d'abord ce que tu veux être, puis fais ce qu'il faut pour le devenir.",
    photo: epictete.photo,
    auteur: epictete.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Ce n'est pas par la satisfaction du désir que s'obtient la liberté mais par la destruction du désir.",
    photo: epictete.photo,
    auteur: epictete.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "La liberté, c'est l'indépendance de la pensée.",
    photo: epictete.photo,
    auteur: epictete.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "L'essence de la philosophie est qu'un homme devrait vivre de manière à ce que son bonheur dépende aussi peu que possible des causes extérieures.",
    photo: epictete.photo,
    auteur: epictete.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Ose devenir ce que tu es, même si ce n'est pas conforme à ce qui est habituellement demandé.",
    photo: epictete.photo,
    auteur: epictete.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Tout est changement, non pour ne plus être, mais pour devenir ce qui n'est pas encore.",
    photo: epictete.photo,
    auteur: epictete.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Se conquérir et se vaincre soi-même est la première et la plus noble de toutes les victoires.",
    photo: platon.photo,
    auteur: platon.auteur,
    categorie: ["tous", ],
  },
  {
    texte: "On ne doit pas chercher à guérir le corps sans chercher à guérir l'âme.",
    photo: platon.photo,
    auteur: platon.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Ce que je sais, c'est que je ne sais rien.",
    photo: platon.photo,
    auteur: platon.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La simplicité véritable allie la bonté à la beauté.",
    photo: platon.photo,
    auteur: platon.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "L'essentiel n'est pas de vivre, mais de bien vivre.",
    photo: platon.photo,
    auteur: platon.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Chacun, parce qu'il pense, est seul responsable de la sagesse ou de la folie de sa vie, c'est-à-dire de sa destinée.",
    photo: platon.photo,
    auteur: platon.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La musique donne une âme à nos coeurs et des ailes à la pensée.",
    photo: platon.photo,
    auteur: platon.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "L'opinion est quelque chose d'intermédiaire entre la connaissance et l'ignorance.",
    photo: platon.photo,
    auteur: platon.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La paix du coeur est le paradis des hommes.",
    photo: platon.photo,
    auteur: platon.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Ce qu'on doit chercher à savoir, c'est de qu'elle façon on doit vivre sa vie pour qu'elle soit la meilleure possible.",
    photo: platon.photo,
    auteur: platon.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Si la vie vaut la peine d'être vécue, c'est à ce moment: lorsque l'humain contemple la beauté en soi.",
    photo: platon.photo,
    auteur: platon.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "On peut aisément pardonner à l'enfant qui a peur de l'obscurité. La vrai tragédie de la vie, c'est lorsque les hommes ont peur de la lumière.",
    photo: platon.photo,
    auteur: platon.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "En toutes choses, on doit agir dans la vue du bien.",
    photo: platon.photo,
    auteur: platon.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "La réussite, ce n'est pas quand tu es au sommet, mais quand tu touches le fond et que tu es capable de rebondir.",
    photo: platon.photo,
    auteur: platon.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "La victoire su soi est la plus grande des victoires.",
    photo: platon.photo,
    auteur: platon.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Fais preuve de gentillesse envers tous ceux que tu rencontres, leur combat est peut-être plus dur que le tien.",
    photo: platon.photo,
    auteur: platon.auteur,
    categorie: ["tous"],
  },
  {
    texte: "L'homme le plus heureux est celui qui n'a dans l'âme aucune trace de méchanceté.",
    photo: platon.photo,
    auteur: platon.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Personne n'est plus detesté que celui qui dit la vérité.",
    photo: platon.photo,
    auteur: platon.auteur,
    categorie: ["tous"],
  },
  {
    texte: "La démocratie est la dictature de l'ignorance.",
    photo: platon.photo,
    auteur: platon.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "L'amour est la seule fleur qui n'a pas besoin de saison pour éclore.",
    photo: rumi.photo,
    auteur: rumi.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Il y'a une voix qui n'utilise pas les mots. Ecoute !",
    photo: rumi.photo,
    auteur: rumi.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Vous n'êtes pas une goutte dans l'océan. Vous êtes l'océan tout entier dans une goutte.",
    photo: rumi.photo,
    auteur: rumi.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "La lumière propre du visage vient de la chandelle de l'esprit.",
    photo: rumi.photo,
    auteur: rumi.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Ne pas éviter les expériences difficiles; elles sont d'excellents professeurs.",
    photo: rumi.photo,
    auteur: rumi.auteur,
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Hier, j'étais intelligent et je voulais changer le monde. Aujourd'hui, je suis un sage et je me change moi-même.",
    photo: rumi.photo,
    auteur: rumi.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Fais le bien et jette-le dans la rivière: un jour, il te sera rendu dans le désert.",
    photo: rumi.photo,
    auteur: rumi.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Ce que vous cherchez vous cherche aussi.",
    photo: rumi.photo,
    auteur: rumi.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "C'est votre route seulement la vôtre. D'autres peuvent marcher avec vous, mais personne ne peut marcher pour vous.",
    photo: rumi.photo,
    auteur: rumi.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Avec les yeux de ton coeur, tu verras un autre monde.",
    photo: rumi.photo,
    auteur: rumi.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Le courage conduit aux étoiles et la peur à la mort.",
    photo: seneque.photo,
    auteur: seneque.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "La vie ressemble à un conte; ce qui importe, ce n'est pas sa longueur, mais sa valeur.",
    photo: seneque.photo,
    auteur: seneque.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Les douleurs légères s'expriment, les grandes douleurs sont muettes.",
    photo: seneque.photo,
    auteur: seneque.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Celui qui cherche la sagesse est un sage, celui qui croit l'avoir trouvée est un fou.",
    photo: seneque.photo,
    auteur: seneque.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Il n'y a pas de vent favorable pour celui qui ne sait pas où il va.",
    photo: seneque.photo,
    auteur: seneque.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le plus grand obstacle à la vie est l'attente, qui espère demain et néglige aujourd'hui.",
    photo: seneque.photo,
    auteur: seneque.auteur,
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "En suivant le chemin qui s'appelle plus tard, nous arrivons sur la place qui s'appelle jamais.",
    photo: seneque.photo,
    auteur: seneque.auteur,
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "La vie, ce n'est pas d'attendre que les orages passent, c'est d'apprendre comment danser sous la pluie.",
    photo: seneque.photo,
    auteur: seneque.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "C'est une grande grâce de pouvoir s'accepter soi-même, mais c'est une grâce suprême de pouvoir s'oublier.",
    photo: seneque.photo,
    auteur: seneque.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Nous ne vivons en fait qu'une infime partie de notre vie. Le reste, à vrai dire, n'est pas de la vie mais simplement du temps.",
    photo: seneque.photo,
    auteur: seneque.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Toute méchanceté a sa source dans la faiblesse.",
    photo: seneque.photo,
    auteur: seneque.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Pendant que l'on attend de vivre, la vie passe.",
    photo: seneque.photo,
    auteur: seneque.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Un bonheur que rien n'a entamé succombe à la moindre atteinte; mais quand on doit se battre contre les difficultés incessantes, on s'aguerrit dans l'épreuve, on résiste à n'importe quels maux, et même si l'on trébuche, on lutte encore à genoux.",
    photo: seneque.photo,
    auteur: seneque.auteur,
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "En trois mots, je peux résumer tout ce que j'ai appris sur la vie. Continuez vers l'avant.",
    photo: robertFrost.photo,
    auteur: robertFrost.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Il n'y a que deux conduites dans la vie: ou on la rêve ou on l'accomplit.",
    photo: reneChar.photo,
    auteur: reneChar.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "L'essentiel pour le bonheur de la vie, c'est ce que l'on a en soi-même.",
    photo: arthurSchopenhauer.photo,
    auteur: arthurSchopenhauer.auteur,
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "Toutes les richesses ne sauraient satisfaire n caractère avide, envieux et méchant.",
    photo: arthurSchopenhauer.photo,
    auteur: arthurSchopenhauer.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Ce n'est le plus souvent que la perte des choses qui nous en enseigne la valeur.",
    photo: arthurSchopenhauer.photo,
    auteur: arthurSchopenhauer.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Il ne faut pas empiéter sur l'avenir en demandant avant le temps ce qui ne peut venir qu'avec le temps.",
    photo: arthurSchopenhauer.photo,
    auteur: arthurSchopenhauer.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le monde dans lequel chacun vit dépend de sa façon de le concevoir.",
    photo: arthurSchopenhauer.photo,
    auteur: arthurSchopenhauer.auteur,
    categorie: ["tous", "reve"],
  },
  {
    texte: "Un homme d'esprit, dans la solitude la plus absolue, trouve dans ses propres pensées et dans sa propre fantaisie de quoi se divertir agréablement.",
    photo: arthurSchopenhauer.photo,
    auteur: arthurSchopenhauer.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Vaincre des obstacles est la plénitude de la jouissance dans l'existence humaine.",
    photo: arthurSchopenhauer.photo,
    auteur: arthurSchopenhauer.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Trés peu de gens savent réfléchir, mais tous veulent avoir des opinions.",
    photo: arthurSchopenhauer.photo,
    auteur: arthurSchopenhauer.auteur,
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Tout ce qui est exquis mûrit lentement.",
    photo: arthurSchopenhauer.photo,
    auteur: arthurSchopenhauer.auteur,
    categorie: ["tous", "courage", "sen"],
  },
  {
    texte: "La compassion à l'égard des animaux est si étroitement liée à la bonté du caractère qu'on peut affirmer qu'un homme cruel envers les animaux, ne saurait être un homme bon.",
    photo: arthurSchopenhauer.photo,
    auteur: arthurSchopenhauer.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "L'homme est le seul animal qui en fait souffrir d'autres sans autre but que celui-là.",
    photo: arthurSchopenhauer.photo,
    auteur: arthurSchopenhauer.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Les lettrés sont ceux qui ont lu dans les livres; mais les penseurs, les génies, les flambeaux de l'humanité et les pionniers de la race humaine sont ceux qui ont lu directement dans le livre de l'univers.",
    photo: arthurSchopenhauer.photo,
    auteur: arthurSchopenhauer.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Le destin mêle les cartes en nous jouons.",
    photo: arthurSchopenhauer.photo,
    auteur: arthurSchopenhauer.auteur,
    categorie: ["tous"],
  },
  {
    texte: "La condition première pour être heureux dans la vie, c'est d'accepter d'être ce que nous sommes.",
    photo: arthurSchopenhauer.photo,
    auteur: arthurSchopenhauer.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Attribuer une haute valeur à l'opinion des hommes, c'est leur faire trop d'honneur.",
    photo: arthurSchopenhauer.photo,
    auteur: arthurSchopenhauer.auteur,
    categorie: ["tous"],
  },
  {
    texte: "On ne peut-être vraiment soi qu'aussi longtemps qu'on est seul; qui n'aime donc pas la solitude n'aime pas la liberté.",
    photo: arthurSchopenhauer.photo,
    auteur: arthurSchopenhauer.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Les grands hommes sont comme des aigles et constuisent leur nid sur un noble solitude.",
    photo: arthurSchopenhauer.photo,
    auteur: arthurSchopenhauer.auteur,
    categorie: ["tous"],
  },
  {
    texte: "On n'établit pas une dictature pour sauvegarder une révolution. On fait une révolution pour établir une dictature.",
    photo: georgeOrwell.photo,
    auteur: georgeOrwell.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Jamais personne ne s'empare du pouvoir avec l'intention d'y renoncer.",
    photo: georgeOrwell.photo,
    auteur: georgeOrwell.auteur,
    categorie: ["tous", "liberte", "sagesse"],
  },
  {
    texte: "Il y'a partout la même structure pyramidale, le même système économique existant par et pour une guerre continuelle.",
    photo: georgeOrwell.photo,
    auteur: georgeOrwell.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Si vous vous accrochez à la vérite, même contre le monde entier, vous n'êtes pas fou.",
    photo: georgeOrwell.photo,
    auteur: georgeOrwell.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le progrès dans notre monde sera le progrès vers plus de souffrance.",
    photo: georgeOrwell.photo,
    auteur: georgeOrwell.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Le pouvoir consiste à déchirer les esprits humains en morceaux et à les reconstituer dans de nouvelles formes.",
    photo: georgeOrwell.photo,
    auteur: georgeOrwell.auteur,
    categorie: ["tous", "liberte", "morale"],
  },
  {
    texte: "Le ministère de la Paix s'occupe de la guerre, le ministère de la vérité des mensonges, le ministère de l'amour de la torture et le ministère de l'abondance de la famine.",
    photo: georgeOrwell.photo,
    auteur: georgeOrwell.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Comment un homme peut-il affirmer son pouvoir sur un autre? En le faisant souffrir. L'obéissance ne suffit pas.",
    photo: georgeOrwell.photo,
    auteur: georgeOrwell.auteur,
    categorie: ["tous", "liberte", "morale"],
  },
  {
    texte: "Tant qu'ils ne deviendront pas conscients, ils ne se rebelleront jamais, et tant qu'ils ne se seront pas rebellés, ils ne pourront pas devenir conscients.",
    photo: georgeOrwell.photo,
    auteur: georgeOrwell.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Le passé a été effacé, l'effacement a été oublié, le mensonge est devenu la vérité.",
    photo: georgeOrwell.photo,
    auteur: georgeOrwell.auteur,
    categorie: ["tous"],
  },
  {
    texte: "A une époque de supercherie universelle, dire la vérité est un acte révolutionnaire.",
    photo: georgeOrwell.photo,
    auteur: georgeOrwell.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Les masses ne se révoltent jamais de leur propre mouvement et elles ne se révoltent jamais par le seul fait qu'elles soient opprimées. Aussi longtemps qu'elles n'ont pas d'élément de comparaison. Elles ne se rendent jamais compte qu'elles sont opprimées.",
    photo: georgeOrwell.photo,
    auteur: georgeOrwell.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Pour que l'égalité humaine soit à jamais écartée, pour les grands, comme nous les avons appelés, gardent perpétuellement leurs places. La condition mentale dominante doit être la folie dirigée.",
    photo: georgeOrwell.photo,
    auteur: georgeOrwell.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Il faudrait convaincre les hommes du bonheur qu'ils ignorent, lors même qu'ils en jouissent.",
    photo: montesquieu.photo,
    auteur: montesquieu.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Une injustice faite à un seul est une menace faîte à tous.",
    photo: montesquieu.photo,
    auteur: montesquieu.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "La tristesse vient de la solitude du coeur.",
    photo: montesquieu.photo,
    auteur: montesquieu.auteur,
    categorie: ["tous", "sen"],
  },
  {
    texte: "Une chose n'est pas juste parce qu'elle est loi; mais elle doit être loi parce qu'elle est juste.",
    photo: montesquieu.photo,
    auteur: montesquieu.auteur,
    categorie: ["tous", "sagesse", "morale"],
  },
  {
    texte: "Si on ne voulait qu'être heureux, cela serait bientôt fait. Mais on veut être plus heureux que les autres, et cela est presque toujours impossible parce que nous croyons les autres plus heureux qu'ils ne le sont.",
    photo: montesquieu.photo,
    auteur: montesquieu.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "C'est un malheur qu'il y'ait trop peu d'intervalle entre le temps où l'on est trop jeune, et le temps où l'on est trop vieux.",
    photo: montesquieu.photo,
    auteur: montesquieu.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Qui connaît bien le prix d'un véritable ami passe sa vie à le chercher.",
    photo: montesquieu.photo,
    auteur: montesquieu.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Quand les riches se font la guerre, ce sont les pauvres qui meurent.",
    photo: jeanPaulSartre.photo,
    auteur: jeanPaulSartre.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "L'homme n'est rien d'autre que son projet, il n'existe que dans la mesure où il se réalise, il n'est donc rien d'autre que l'ensemble de ses actes, rien d'autre que sa vie.",
    photo: jeanPaulSartre.photo,
    auteur: jeanPaulSartre.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Je peux toujours choisir, mais je dois savoir que si je ne choisis pas, je choisis encore.",
    photo: jeanPaulSartre.photo,
    auteur: jeanPaulSartre.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "C'est dans l'action, voire dans l'urgence de la situation que je peux me rendre compte si je suis courageux.",
    photo: jeanPaulSartre.photo,
    auteur: jeanPaulSartre.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Quant aux hommes, ce n'est pas ce qu'ils sont qui m'intéresse mais ce qu'ils pourront devenir.",
    photo: jeanPaulSartre.photo,
    auteur: jeanPaulSartre.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Je ne puis prendre ma liberté pour but, que si je prends également celle des autres pour but.",
    photo: jeanPaulSartre.photo,
    auteur: jeanPaulSartre.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "La violence, sous quelque forme qu'elle se manifeste, est un échec.",
    photo: jeanPaulSartre.photo,
    auteur: jeanPaulSartre.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Dans la vie on ne fait pas toujours ce que l'on veut, mais on est toujours responsable de ce que l'ont est.",
    photo: jeanPaulSartre.photo,
    auteur: jeanPaulSartre.auteur,
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "La vie est ce que nous la rêvons. La mesure de la vie, c'est l'amour",
    photo: romainRolland.photo,
    auteur: romainRolland.auteur,
    categorie: ["tous", "reve", "sen"],
  },
  {
    texte: "Peu importe le succés, il s'agit d'être grand, non de le paraître.",
    photo: romainRolland.photo,
    auteur: romainRolland.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Le métier des intellectuels est de chercher la vérité au milieu de l'erreur.",
    photo: romainRolland.photo,
    auteur: romainRolland.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Même sans espoir, la lutte est encore un espoir.",
    photo: romainRolland.photo,
    auteur: romainRolland.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Tu ne vivrais pas, si tu ne croyais pas. Chacun croit",
    photo: romainRolland.photo,
    auteur: romainRolland.auteur,
    categorie: ["tous"],
  },
  {
    texte: "En agissant, on se trompe parfois; en ne faisant rien, on se trompe toujours.",
    photo: romainRolland.photo,
    auteur: romainRolland.auteur,
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "La véritable éducation c'est d'apprendre comment penser et non pas quoi penser.",
    photo: jidduKrishnamurti.photo,
    auteur: jidduKrishnamurti.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La relation est un miroir dans lequel on peut se voir, non pas tel que je souhaiterais être, mais tel que je suis.",
    photo: jidduKrishnamurti.photo,
    auteur: jidduKrishnamurti.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Si l'on ne se compare à personne on devient ce que l'on est.",
    photo: jidduKrishnamurti.photo,
    auteur: jidduKrishnamurti.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Nous cherchons toujours à jeter un pont entre ce qui est et ce qui devrait être, et par là, donnons naissance à un état de contradiction et de conflit ou se perdent toutes les énergies.",
    photo: jidduKrishnamurti.photo,
    auteur: jidduKrishnamurti.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Ce n'est pas un signe de bonne santé mentale d'être bien adapté à une société malade.",
    photo: jidduKrishnamurti.photo,
    auteur: jidduKrishnamurti.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "L'éducation consiste à comprendre l'enfant tel qu'il est sans lui imposer l'image de ce que nous pensons qu'il devrait être.",
    photo: jidduKrishnamurti.photo,
    auteur: jidduKrishnamurti.auteur,
    categorie: ["tous"],
  },
  {
    texte: "La vérité est un pays sans chemin. Dès que vous suivez quelqu'un, vous cessez de suivre la vérité.",
    photo: jidduKrishnamurti.photo,
    auteur: jidduKrishnamurti.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La peur bloque la compréhension intelligente de la vie.",
    photo: jidduKrishnamurti.photo,
    auteur: jidduKrishnamurti.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Nous ne savons pas vivre et, par conséquent, nous ne savons pas mourir. Tant que nous aurons peur de la vie, nous aurons peur de la mort.",
    photo: jidduKrishnamurti.photo,
    auteur: jidduKrishnamurti.auteur,
    categorie: ["tous"],
  },
  {
    texte: "L'ignorant n'est pas celui qui manque d'érudition mais celui qui ne se connaît pas lui-même.",
    photo: jidduKrishnamurti.photo,
    auteur: jidduKrishnamurti.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Les gagnants trouvent des moyens, les perdants des excuses.",
    photo: franklinDelanoRoosevelt.photo,
    auteur: franklinDelanoRoosevelt.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Il est dur d'échouer; mais il est pire de n'avoir jamais tenté de réussir.",
    photo: franklinDelanoRoosevelt.photo,
    auteur: franklinDelanoRoosevelt.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Faites quelque chose et, si ça ne réussit pas. Essayez autre chose.",
    photo: franklinDelanoRoosevelt.photo,
    auteur: franklinDelanoRoosevelt.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Exposez-vous à vos peurs les plus profondes et après cela, la peur ne pourra plus vous atteindre.",
    photo: jimMorrison.photo,
    auteur: jimMorrison.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "L'instant est béni. Tout le reste est souvenir.",
    photo: jimMorrison.photo,
    auteur: jimMorrison.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "C'est le propre de l'amour véritable de laisser une personne être ce qu'elle est vraiment.",
    photo: jimMorrison.photo,
    auteur: jimMorrison.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Celui qui contrôle les médias contrôle les esprits.",
    photo: jimMorrison.photo,
    auteur: jimMorrison.auteur,
    categorie: ["tous", "liberte", "sagesse"],
  },
  {
    texte: "La droite a gagné les élections. La gauche a gagné les éléctions. Quand est-ce que ce sera la France qui gagnera les élections ?",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous"],
  },
  {
    texte: "S'il y'avait un impôt sur la connerie l'Etat s'autofinancerait.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous"],
  },
  {
    texte: "On n'arrête pas le progrès dit-on, la bétise non plus.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous"],
  },
  {
    texte: "On dit toujours qu'on peut pas être et avoir été. Eh ben, j'en connais un, dis donc, il a été con et il l'est encore !",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Des fois, on a plus de contacts avec un chien pauvre qu'avec un homme riche.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Je ferais admirablement remarquer aux hommes politiques qui me prennent pour un rigolo que ce n'est pas moi qui ai commencé.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous"],
  },
  {
    texte: "La droite vend des promesses et ne les tient pas, la gauche vend de l'espoir et le brise.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "C'est pas parce qu'ils sont nombreux à avoir tort qu'ils ont raison !",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "On ne peut pas dire la vérité à la télé: il y'a trop de monde qui regarde.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Si voter changeait quelque chose il y'a longtemps que ça serait interdit.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Il paraît que la crise rend les riches plus riches et les pauvres plus pauvres. Je ne vois pas en quoi c'est une crise. Depuis que je suis petit, c'est comme ça.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Pour critiquer les gens il faut les connaître, et pour les connaître, il faut les aimer.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "C'est pas vraiment de ma faute si y'en a qui ont faim. Mais ça le deviendrait si on y changeait rien.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Les portes de l'avenir sont ouvertes à ceux qui savent les pousser.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "De tous ceux qui n'ont rien à dire, les plus agréables sont ceux qui se taisent.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La différence qu'il y'a entre les oiseaux et les hommes politiques, c'est que de temps en temps les oiseaux s'arrêtent de voler !",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Tant qu'on fait rire, c'est des plaisanteries. Dès que ce n'est pas drôle, c'est des insultes.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le mariage, la confiance n'y est pas. Il faut des témoins, comme dans les accidents.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Je suis capable du meilleur et du pire. Mais, dans le pire, c'est moi le meilleur.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous"],
  },
  {
    texte: "La chambre des députés: la moitié est bonne à rien. Les autres sont prêts à tout.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Certains ont l'air honnête, mais quand ils te serrent la main, tu as intérêt à recompter tes doigts.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Dieu a dit : \"Je partage en deux, les riches auront de la nourriture, les pauvres de l'appétit\".",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Mesdames, un conseil. Si vous cherchez un homme beau, riche et intelligent... prenez-en trois !",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Dans la vie, y'a pas de grands, y'a pas de petits. La bonne longueur pour les jambes, c'est quand les pieds touchent par terre.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Si vous avez besoin de quelque chose, appelez-moi. Je vous dirai comment vous en passer.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous", "bonheur", "liberte"],
  },
  {
    texte: "Dans les fins de mois, ce qui est le plus dur, c'est les trente derniers jours.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Rappelez-vous toujours que si la Gestapo avait les moyens de vous faire parler; les politiciens ont eux, les moyens de vous faire taire.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous", "liberte", "morale"],
  },
  {
    texte: "Homme politique, c'est une profession où il est plus utile d'avoir des relations que des remords.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "J'arrêterai de faire de la politique quand les hommes politiques arrêteront de nous faire rire.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous"],
  },
  {
    texte: "La politique c'est pas compliqué, il suffit d'avoir bonne conscience, et pour cela il suffit d'avoir une mauvaise mémoire.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Les journalistes ne croient pas les mensonges des hommes politiques, mais ils les répétent, c'est pire.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous"],
  },
  {
    texte: "A la télé ils disent tous les jours : il y'a tand de millions de personnes qui cherchent du travail, c'est pas vrai, de l'argent leur suffirait.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "A 20h à la télé quand tous les pauvres sortent du travail, on ne pourrait pas dire toute la vérité. Sinon la majorité n'irait pas travailler le lendemain.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Tous les hommes politiques sont des comiques de circonstances, moi j'ai sur eux l'avantage d'être un comique professionnel.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous"],
  },
  {
    texte: "A quoi sert le pouvoir si c'est pour ne pas en abuser ?",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "La vie mettra des pierres sur ta route. A toi de décider d'en faire des murs ou des ponts.",
    photo: coluche.photo,
    auteur: coluche.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Nous sommes tous obligés, pour rendre la réalité supportable, d'entretenir en nous quelques petites folies.",
    photo: marcelProust.photo,
    auteur: marcelProust.auteur,
    categorie: ["tous", "reve"],
  },
  {
    texte: "Le bonheur est salutaire pour le corps, mais c'est le chagrin qui développe les forces de l'esprit.",
    photo: marcelProust.photo,
    auteur: marcelProust.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Savoir qu'on n'a plus rien à espérer n'empêche pas de continuer à attendre.",
    photo: marcelProust.photo,
    auteur: marcelProust.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Les jours sont peut-être égaux pour une horloge, mais pas pour un homme.",
    photo: marcelProust.photo,
    auteur: marcelProust.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Une heure n'est pas une heure, c'est un vase rempli de parfums, de sons, de projets et de climats.",
    photo: marcelProust.photo,
    auteur: marcelProust.auteur,
    categorie: ["tous", "bonheur", "sensibilite"],
  },
  {
    texte: "La vie est semée de ces miracles que peuvent toujours espérer les personnes qui aiment.",
    photo: marcelProust.photo,
    auteur: marcelProust.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Il n'y a pas de réussite facile ni d'échecs définitifs.",
    photo: marcelProust.photo,
    auteur: marcelProust.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "L'amour c'est l'espace et le temps rendus sensibles au coeur.",
    photo: marcelProust.photo,
    auteur: marcelProust.auteur,
    categorie: ["tous", "sensiblite"],
  },
  {
    texte: "Nous ne savons jamais si nous ne sommes pas en train de manquer notre vie.",
    photo: marcelProust.photo,
    auteur: marcelProust.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Le désir fleurit, la possession flétrit toutes choses.",
    photo: marcelProust.photo,
    auteur: marcelProust.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "On ne trouve le bonheur qu'à faire ce qu'on aime avec les tendances profondes de son âme.",
    photo: marcelProust.photo,
    auteur: marcelProust.auteur,
    categorie: ["tous", "bonheur", "sensibilite"],
  },
  {
    texte: "La douleur est un aussi puissant modificateur de la réalité qu'est l'ivresse.",
    photo: marcelProust.photo,
    auteur: marcelProust.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "On ne reçoit pas la sagesse, il faut la découvrir soi-même après un trajet que personne ne peut faire pour vous.",
    photo: marcelProust.photo,
    auteur: marcelProust.auteur,
    categorie: ["tous", "courage", "sagesse"],
  },
  {
    texte: "Là où la vie emmure, l'intelligence perce une issue.",
    photo: marcelProust.photo,
    auteur: marcelProust.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Tachez de garder toujours un morceau de ciel au-dessus de votre vie.",
    photo: marcelProust.photo,
    auteur: marcelProust.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Il vaut mieux rêver sa vie que la vivre, encore que la vivre, ce soit encore la rêver.",
    photo: marcelProust.photo,
    auteur: marcelProust.auteur,
    categorie: ["tous", "bonheur", "reve"],
  },
  {
    texte: "Le véritable voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux.",
    photo: marcelProust.photo,
    auteur: marcelProust.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "On ne voit bien qu'avec le coeur; l'essentiel est invisible pour les yeux.",
    photo: antoineDeSaintExupery.photo,
    auteur: antoineDeSaintExupery.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Les étoiles sont éclairées pour que chacun puisse un jour retrouver la sienne.",
    photo: antoineDeSaintExupery.photo,
    auteur: antoineDeSaintExupery.auteur,
    categorie: ["tous", "reve", "sensibilite"],
  },
  {
    texte: "C'est une folie de haïr toutes les roses parce qu'une épine vous a piqué, d'abandonner tous ses rêves parce que l'un d'entre eux ne s'est pas réalisé.",
    photo: antoineDeSaintExupery.photo,
    auteur: antoineDeSaintExupery.auteur,
    categorie: ["tous", ,"courage", "reve"],
  },
  {
    texte: "Faîtes que le rêve dévore votre vie afin que la vie ne dévore pas votre rêve.",
    photo: antoineDeSaintExupery.photo,
    auteur: antoineDeSaintExupery.auteur,
    categorie: ["tous", "reve"],
  },
  {
    texte: "Toutes les grandes personnes ont d'abord été des enfants mais peu d'entre elles s'en souviennent.",
    photo: antoineDeSaintExupery.photo,
    auteur: antoineDeSaintExupery.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction.",
    photo: antoineDeSaintExupery.photo,
    auteur: antoineDeSaintExupery.auteur,
    categorie: ["tous"," sensibilite"],
  },
  {
    texte: "Pourquoi nous haïr ? Nous sommes solidaires, emportés sur la même planéte, équipage d'un même navire.",
    photo: antoineDeSaintExupery.photo,
    auteur: antoineDeSaintExupery.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Si tu différes de moi, mon frère, loin de me léser tu m'enrichis.",
    photo: antoineDeSaintExupery.photo,
    auteur: antoineDeSaintExupery.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Vivre, c'est naître lentement, il serait un peu trop aisé d'emprunter des âmes toutes faîtes.",
    photo: antoineDeSaintExupery.photo,
    auteur: antoineDeSaintExupery.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Pose des questions, mais surtout écoute les réponses.",
    photo: antoineDeSaintExupery.photo,
    auteur: antoineDeSaintExupery.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Et si l'on peut te prendre ce que tu possèdes, qui peut te prendre ce que tu donnes ?",
    photo: antoineDeSaintExupery.photo,
    auteur: antoineDeSaintExupery.auteur,
    categorie: ["tous"],
  },
  {
    texte: "J'ai vu la flamme de la liberté falire resplendir les hommes et la tyrannie les abrutir.",
    photo: antoineDeSaintExupery.photo,
    auteur: antoineDeSaintExupery.auteur,
    categorie: ["tous", "liberte", "sagesse"],
  },
  {
    texte: "Mais si tu m'apprivoises, nous aurons besoin l'un de l'autre; tu seras pour moi unique au monde, je serai pour toi unique au monde.",
    photo: antoineDeSaintExupery.photo,
    auteur: antoineDeSaintExupery.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "L'amour une fois qu'il a germé, donne des racines qui ne finissent plus de croître.",
    photo: antoineDeSaintExupery.photo,
    auteur: antoineDeSaintExupery.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Etre un homme, c'est sentir, en posant sa pierre, que l'on contribue à batir le monde.",
    photo: antoineDeSaintExupery.photo,
    auteur: antoineDeSaintExupery.auteur,
    categorie: ["tous"],
  },
  {
    texte: "C'est le temps que tu as perdu pour ta rose qui rend ta rose importante.",
    photo: antoineDeSaintExupery.photo,
    auteur: antoineDeSaintExupery.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Le moment d'agir est maintenant, il n'est jamais trop tard pour faire quelque chose.",
    photo: antoineDeSaintExupery.photo,
    auteur: antoineDeSaintExupery.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "L'homme se découvre quand il se mesure avec l'obstacle.",
    photo: antoineDeSaintExupery.photo,
    auteur: antoineDeSaintExupery.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Fais de ta vie un rêve et d'un rêve une réalité.",
    photo: antoineDeSaintExupery.photo,
    auteur: antoineDeSaintExupery.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "C'est bizarre que nous, qui sommes capables de tant souffrir, puissions infliger aux gens tant de souffrances.",
    photo: virginiaWoolf.photo,
    auteur: virginiaWoolf.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Y'a t'il une fin à la folie humaine ?",
    photo: virginiaWoolf.photo,
    auteur: virginiaWoolf.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Chacun de nous a son passé renfermé sur lui, comme les pages d'un vieux livre qu'il connaît par coeur, mais dont ses amis pourront seulement lire le titre.",
    photo: virginiaWoolf.photo,
    auteur: virginiaWoolf.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Ce qui compte c'est de se libérer soi-même, découvrir ses propres dimensions, refuser les entraves.",
    photo: virginiaWoolf.photo,
    auteur: virginiaWoolf.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Si je ne suis pas moi-même, je ne suis personne.",
    photo: virginiaWoolf.photo,
    auteur: virginiaWoolf.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Laissez vivre votre âme, c'est la seule vie qui en somme soit pas un attrape-nigaud.",
    photo: virginiaWoolf.photo,
    auteur: virginiaWoolf.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Chacun recèle en lui une forêt vierge, une étendue de neige où nul oiseau n'a laissé son empreinte.",
    photo: virginiaWoolf.photo,
    auteur: virginiaWoolf.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Je veux la solitude pour y déposer en paix mes possessions.",
    photo: virginiaWoolf.photo,
    auteur: virginiaWoolf.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Mieux vaut que certains secrets restent enfouis dans les profondeurs.",
    photo: virginiaWoolf.photo,
    auteur: virginiaWoolf.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Pourquoi penser dans un monde où l'instant présent existe ?",
    photo: virginiaWoolf.photo,
    auteur: virginiaWoolf.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Mais qu'est-ce que \"soi-même\" ? L'Etre que l'on voit ou l'être que l'on est ?",
    photo: virginiaWoolf.photo,
    auteur: virginiaWoolf.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "J'ai voulu dilater la nuit, et y faire entrer sans cesse de plus en plus de rêves.",
    photo: virginiaWoolf.photo,
    auteur: virginiaWoolf.auteur,
    categorie: ["tous", "reve"],
  },
  {
    texte: "Ce que la voix peut cacher, le regard le livre.",
    photo: georgesBernanos.photo,
    auteur: georgesBernanos.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Les petites choses n'ont l'air de rien, mais elles donnent la paix.",
    photo: georgesBernanos.photo,
    auteur: georgesBernanos.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Un monde gagné pour la technique est perdu pour la liberté.",
    photo: georgesBernanos.photo,
    auteur: georgesBernanos.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "L'avenir est quelque chose qui se surmonte. On ne subit pas l'avenir, on le faît.",
    photo: georgesBernanos.photo,
    auteur: georgesBernanos.auteur,
    categorie: ["tous", "bonheur", "courage"],
  },
  {
    texte: "Je meurs chaque nuit pour ressusciter chaque matin.",
    photo: georgesBernanos.photo,
    auteur: georgesBernanos.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Si je recommençais ma vie, je tâcherais de faire mes rêves encore plus grands; parce que la vie est infiniment plus belle et plus grande que je n'avais cru, même en rêve.",
    photo: georgesBernanos.photo,
    auteur: georgesBernanos.auteur,
    categorie: ["tous", "reve"],
  },
  {
    texte: "Etre capable de trouver sa joie dans la joie de l'autre: voilà le secret du bonheur.",
    photo: georgesBernanos.photo,
    auteur: georgesBernanos.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Qu'importe ma vie ! Je veux seulement qu'elle reste jusqu'au bout fidèle à l'enfant de je fus.",
    photo: georgesBernanos.photo,
    auteur: georgesBernanos.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Le vide fascine ceux qui n'osent pas le regarder en face, ils s'y jettent par crainte d'y tomber.",
    photo: georgesBernanos.photo,
    auteur: georgesBernanos.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Celui-là seul est digne de la liberté, qui sait la conquérir.",
    photo: charlesBeaudelaire.photo,
    auteur: charlesBeaudelaire.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Allons au fond de l'inconnu pour trouver du nouveau.",
    photo: charlesBeaudelaire.photo,
    auteur: charlesBeaudelaire.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Plus un esprit est délicat, plus il découvre des beautés originales.",
    photo: charlesBeaudelaire.photo,
    auteur: charlesBeaudelaire.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Ne méprisez la sensibilité de personne; la sensibilité de chacun, c'est son génie.",
    photo: charlesBeaudelaire.photo,
    auteur: charlesBeaudelaire.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "L'amour est une rose dont chaque pétale est une illusion et chaque épine une réalité.",
    photo: charlesBeaudelaire.photo,
    auteur: charlesBeaudelaire.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "L'air est plein de frisson des choses qui s'enfuient.",
    photo: charlesBeaudelaire.photo,
    auteur: charlesBeaudelaire.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Ce qui est créé par l'esprit est plus vivant que la matière.",
    photo: charlesBeaudelaire.photo,
    auteur: charlesBeaudelaire.auteur,
    categorie: ["tous", "reve"],
  },
  {
    texte: "Garde tes songes; les sages n'en ont pas d'aussi beaux que les fous !",
    photo: charlesBeaudelaire.photo,
    auteur: charlesBeaudelaire.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Entre bien dans mes yeux pour que je me souvienne de toi.",
    photo: charlesBeaudelaire.photo,
    auteur: charlesBeaudelaire.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Les émotions les plus belles sont celles que tu ne sait pas expliquer.",
    photo: charlesBeaudelaire.photo,
    auteur: charlesBeaudelaire.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Le génie n'est que l'enfance retrouvée à volonté.",
    photo: charlesBeaudelaire.photo,
    auteur: charlesBeaudelaire.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Bien qu'on ait du coeur à l'ouvrage. L'Art est long et le temps est court.",
    photo: charlesBeaudelaire.photo,
    auteur: charlesBeaudelaire.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Si vous êtes prêts à sacrifier un peu de liberté pour vous sentir en sécurité, alors vous ne méritez ni l'un ni l'autre.",
    photo: thomasJefferson.photo,
    auteur: thomasJefferson.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Je crois beaucoup en la chance; et je constate que plus je travaille, plus la chance me sourit.",
    photo: thomasJefferson.photo,
    auteur: thomasJefferson.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Le prix de la liberté c'est la vigilance éternelle.",
    photo: thomasJefferson.photo,
    auteur: thomasJefferson.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Aucun honnête homme ne peut éprouver du plaisir à éxercer un pouvoir sur ses concitoyens.",
    photo: thomasJefferson.photo,
    auteur: thomasJefferson.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Les loups et les moutons ne dorment pas ensemble.",
    photo: thomasJefferson.photo,
    auteur: thomasJefferson.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Une petite rebellion de temps en temps, c'est comme un orage qui purifie l'atmosphère.",
    photo: thomasJefferson.photo,
    auteur: thomasJefferson.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Dans la presse, seules les publicités disent la vérité.",
    photo: thomasJefferson.photo,
    auteur: thomasJefferson.auteur,
    categorie: ["tous"],
  },
  {
    texte: "L'homme qui ne craint pas la vérité n'a rien à craindre du mensonge.",
    photo: thomasJefferson.photo,
    auteur: thomasJefferson.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Un gouvernement assez fort pour vous donner tout ce que vous voulez l'est assez pour vous enlever tout ce que vous avez.",
    photo: thomasJefferson.photo,
    auteur: thomasJefferson.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Un homme qui ne lit jamais est plus cultivé qu'un homme qui ne lit que les journaux.",
    photo: thomasJefferson.photo,
    auteur: thomasJefferson.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Le peuple est le seul sur lequel nous puissions compter pour préserver notre liberté.",
    photo: thomasJefferson.photo,
    auteur: thomasJefferson.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Ne priez pas pour une vie facile. Priez pour avoir la force d'endurer la difficulté.",
    photo: bruceLee.photo,
    auteur: bruceLee.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Vivre réellement est vivre pour les autres.",
    photo: bruceLee.photo,
    auteur: bruceLee.auteur,
    categorie: ["tous", "bonheur", "morale"],
  },
  {
    texte: "La clé de l'immortalité est d'abord de vivre une vie mémorable.",
    photo: bruceLee.photo,
    auteur: bruceLee.auteur,
    categorie: ["tous"],
  },
  {
    texte: "La connaissance donne le pouvoir, mais la force de caractère entraine le respect.",
    photo: bruceLee.photo,
    auteur: bruceLee.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Celui qui veut réussir doit apprendre à combattre, persévérer et souffrir.",
    photo: bruceLee.photo,
    auteur: bruceLee.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Adaptez ce qui est utile, rejetez ce qui est superficiel et ajoutez votre touche personnelle.",
    photo: bruceLee.photo,
    auteur: bruceLee.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Connaître ne suffit pas. Il faut savoir appliquer. La volonté ne suffit pas. Il faut savoir agir.",
    photo: bruceLee.photo,
    auteur: bruceLee.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La vie est vaste, illimitée. Elle n'a pas de bords, pas de frontières.",
    photo: bruceLee.photo,
    auteur: bruceLee.auteur,
    categorie: ["tous", "courage", "reve"],
  },
  {
    texte: "Un homme sage peut apprendre davantage d'une question stupide qu'un imbécile peut apprendre d'une réponse sage.",
    photo: bruceLee.photo,
    auteur: bruceLee.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La possession de toute chose commence dans l'esprit.",
    photo: bruceLee.photo,
    auteur: bruceLee.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Vide ta coupe afin qu'elle soit remplie. Démunis-toi afin de gagner la plénitude.",
    photo: bruceLee.photo,
    auteur: bruceLee.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Les erreurs sont toujours pardonnables, si on a le courage de les admettre.",
    photo: bruceLee.photo,
    auteur: bruceLee.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Au diable les circonstances ! Je créé des opportunités.",
    photo: bruceLee.photo,
    auteur: bruceLee.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Un tempérament coléreux vous jouera des tours tôt ou tard.",
    photo: bruceLee.photo,
    auteur: bruceLee.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Ne crains pas l'échec. Ce n'est pas l'échec, mais le manque d'ambition qui est un crime. Avec des objectifs élevés, l'échec peut-être glorieux.",
    photo: bruceLee.photo,
    auteur: bruceLee.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Soyez toujours vous-même, exprimez-vous, ayez confiance en vous et ne cherchez pas à copier une personnalité qui a réussi.",
    photo: bruceLee.photo,
    auteur: bruceLee.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Je ne crains pas un homme qui a pratiqué 10000 coups une fois, mais je crains l'homme qui a pratiqué un coup 10000 fois.",
    photo: bruceLee.photo,
    auteur: bruceLee.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Un objectif n'est pas toujours destiné à être atteint, il sert souvent simplement comme quelque chose à viser.",
    photo: bruceLee.photo,
    auteur: bruceLee.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Il ne faut pas écouter les bruits du monde, mais le silence de l'âme.",
    photo: jeanClaudeVanDamme.photo,
    auteur: jeanClaudeVanDamme.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Une seule langue, une seule monnaie et pas de religion, et on s'en portera tous mieux.",
    photo: jeanClaudeVanDamme.photo,
    auteur: jeanClaudeVanDamme.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Le grand combat, c'est contre soi-même. La victoire, c'est d'avoir compris ce que l'on veut... et d'y croire.",
    photo: jeanClaudeVanDamme.photo,
    auteur: jeanClaudeVanDamme.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Mon modèle, c'est moi-même! Je suis mon meilleur modèle parce que je connais mes erreurs, mes qualités, mes victoires et mes défaites. Si je passe mon temps à prendre un autre modèle comme modèle, comment veux-tu que ce modèle puisse modeler dans la bonne ligne ?",
    photo: jeanClaudeVanDamme.photo,
    auteur: jeanClaudeVanDamme.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Le talent, ça se travaille, mais ça ne se perd pas.",
    photo: jeanClaudeVanDamme.photo,
    auteur: jeanClaudeVanDamme.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Le ridicule n'existe pas, on crée le ridicule.",
    photo: jeanClaudeVanDamme.photo,
    auteur: jeanClaudeVanDamme.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Il faut se battre pour essayer de ne pas répéter nos erreurs, elles sont faciles à retenir mais on les répète toujours.",
    photo: jeanClaudeVanDamme.photo,
    auteur: jeanClaudeVanDamme.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "Je ne crains pas le suffrage universel, les gens voteront pour qui on leur dira.",
    photo: alexisDeTocqueville.photo,
    auteur: alexisDeTocqueville.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Quand le passé n'éclaire plus l'avenir, l'esprit marche dans les ténèbres.",
    photo: alexisDeTocqueville.photo,
    auteur: alexisDeTocqueville.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Les peuples démocratiques ont un goût naturel pour l'égalité. Ils la veulent dans la liberté et, s'ils ne peuvent l'obtenir, ils la veulent encore dans l'esclavage.",
    photo: alexisDeTocqueville.photo,
    auteur: alexisDeTocqueville.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Les tyrans ne sont grands que parce que nous sommes à genoux.",
    photo: alexisDeTocqueville.photo,
    auteur: alexisDeTocqueville.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "L'histoire est une galerie de tableaux où il y a peu d'originaux et beaucoup de copies.",
    photo: alexisDeTocqueville.photo,
    auteur: alexisDeTocqueville.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Cet État se veut si bienveillant envers ses citoyens qu'il entend se substituer à eux dans l'organisation de leur propre vie. Ira-t-il jusqu'à les empêcher de vivre pour mieux les protéger d'eux-mêmes ? Le plus grand soin d'un bon gouvernement devrait être d'habituer peu à peu les peuples à se passer de lui.",
    photo: alexisDeTocqueville.photo,
    auteur: alexisDeTocqueville.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "La concentration des pouvoirs et la servitude individuelle croîtront donc, chez les nations démocratiques, non seulement en proportion de l'égalité, mais en raison de l'ignorance.",
    photo: alexisDeTocqueville.photo,
    auteur: alexisDeTocqueville.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "L'esclave est un serviteur qui ne discute point et se soumet à tout sans murmure. Quelquefois il assassine son maître mais il ne lui résiste jamais.",
    photo: alexisDeTocqueville.photo,
    auteur: alexisDeTocqueville.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Le goût de la fonction publique et le désir de vivre de l'impôt est la grande et permanente infirmité de la France.",
    photo: alexisDeTocqueville.photo,
    auteur: alexisDeTocqueville.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Qui cherche dans la liberté autre chose qu'elle-même est fait pour servir.",
    photo: alexisDeTocqueville.photo,
    auteur: alexisDeTocqueville.auteur,
    categorie: ["tous", "liberte", "sagesse"],
  },
  {
    texte: "Les grands hommes se passionnent pour les petites choses, quand les grandes viennent à leur manquer.",
    photo: alexisDeTocqueville.photo,
    auteur: alexisDeTocqueville.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Cette même égalité qui rend l'individu indépendant de chacun de ses concitoyens en particulier le livre isolé et sans défense à l'action du plus grand nombre.",
    photo: alexisDeTocqueville.photo,
    auteur: alexisDeTocqueville.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Pourquoi la règle qui est applicable à un homme ne le serait-elle pas également à tous les autres ?",
    photo: alexisDeTocqueville.photo,
    auteur: alexisDeTocqueville.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "La propagande est à la démocratie ce que la matraque est à la dictature.",
    photo: noamChomsky.photo,
    auteur: noamChomsky.auteur,
    categorie: ["tous"],
  },
  {
    texte: "La véritable éducation consiste à pousser les gens à penser par eux-même.",
    photo: noamChomsky.photo,
    auteur: noamChomsky.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Toute l'histoire du contrôle sur le peuple se résume à cela : isoler les gens les uns des autres, parce que si on peut les maintenir isolés assez longtemps, on peut leur faire croire n'importe quoi.",
    photo: noamChomsky.photo,
    auteur: noamChomsky.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Si on ne crois pas à la liberté d'expression pour les gens qu'on méprise, on n'y crois pas du tout.",
    photo: noamChomsky.photo,
    auteur: noamChomsky.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Une belle femme plaît aux yeux, une bonne femme plaît au coeur ; l'une est un bijou, l'autre un trésor.",
    photo: napoleonBonaparte.photo,
    auteur: napoleonBonaparte.auteur,
    categorie: ["tous", "sensibilite"],
  },
  {
    texte: "Quand on veut on peut, quand on peut on doit.",
    photo: napoleonBonaparte.photo,
    auteur: napoleonBonaparte.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "La mort n'est rien, mais vivre vaincu et sans gloire, c'est mourir tous les jours.",
    photo: napoleonBonaparte.photo,
    auteur: napoleonBonaparte.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "N'interrompez jamais un ennemi qui est en train de faire une erreur.",
    photo: napoleonBonaparte.photo,
    auteur: napoleonBonaparte.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "Quand la Chine s'éveillera, le monde tremblera.",
    photo: napoleonBonaparte.photo,
    auteur: napoleonBonaparte.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Le mensonge n'est bon à rien, puisqu'il ne trompe qu'une fois.",
    photo: napoleonBonaparte.photo,
    auteur: napoleonBonaparte.auteur,
    categorie: ["tous", "sagesse"],
  },
  {
    texte: "La bonne politique est de faire croire aux peuples qu'ils sont libres.",
    photo: napoleonBonaparte.photo,
    auteur: napoleonBonaparte.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Lorsqu'un gouvernement est dépendant des banquiers pour l'argent, ce sont ces derniers, et non les dirigeants du gouvernement qui contrôlent la situation, puisque la main qui donne est au-dessus de la main qui reçoit. L'argent n'a pas de patrie ; les financiers n'ont pas de patriotisme et n'ont pas de décence ; leur unique objectif est le gain.",
    photo: napoleonBonaparte.photo,
    auteur: napoleonBonaparte.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Dans les révolutions, il y a deux sortes de gens : ceux qui les font et ceux qui en profitent.",
    photo: napoleonBonaparte.photo,
    auteur: napoleonBonaparte.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Si vous n'aimez pas les chiens, vous n'aimez pas la fidélité ; vous n'aimez pas qu'on vous soit fidèle, donc vous n'êtes pas fidèle.",
    photo: napoleonBonaparte.photo,
    auteur: napoleonBonaparte.auteur,
    categorie: ["tous"],
  },
  {
    texte: "On ne conduit le peuple qu'en lui montrant un avenir : un chef est un marchand d'espérance.",
    photo: napoleonBonaparte.photo,
    auteur: napoleonBonaparte.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Bien analysée, la liberté politique est une fable convenue, imaginée par les gouvernants pour endormir les gouvernés.",
    photo: napoleonBonaparte.photo,
    auteur: napoleonBonaparte.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Le doute est l'ennemi des grandes entreprises.",
    photo: napoleonBonaparte.photo,
    auteur: napoleonBonaparte.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "L'histoire est une suite de mensonges sur lesquels on est d'accord.",
    photo: napoleonBonaparte.photo,
    auteur: napoleonBonaparte.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Un homme combattra plus pour ses intérêts que pour ses droits.",
    photo: napoleonBonaparte.photo,
    auteur: napoleonBonaparte.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Les citoyens qui désignent des représentants renoncent et doivent renoncer à faire eux-mêmes la loi ; donc ils n'ont pas de volonté particulière à imposer. Toute influence, tout pouvoir leur appartient sur la personne de leur mandataire, mais c'est tout. S'ils dictaient des volontés ce ne serait plus un état représentatif, ce serait un état démocratique.",
    photo: emmanuelJosephSieyes.photo,
    auteur: emmanuelJosephSieyes.auteur,
    categorie: ["tous", "morale"],
  },
  {
    texte: "Qu'est-ce que le Tiers Etat ? -Tout. - Qu'a-t'il été jusqu'a présent dans l'ordre politique ? - Rien. - Que demande-t'il ? - A être quelque chose.",
    photo: emmanuelJosephSieyes.photo,
    auteur: emmanuelJosephSieyes.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Dans toute nation libre, et toute nation doit être libre, il n'y a qu'une manière de terminer les différends qui s'élèvent touchant la constitution. Ce n'est pas à des notables qu'il faut avoir recours, c'est à la nation elle-même.",
    photo: emmanuelJosephSieyes.photo,
    auteur: emmanuelJosephSieyes.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Qu'est-ce qu'une nation ? Un corps d'associés vivant sous une loi commune et représentés par la même législature.",
    photo: emmanuelJosephSieyes.photo,
    auteur: emmanuelJosephSieyes.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Autrefois, le tiers était serf, l'ordre noble était tout. Aujourd'hui le tiers est tout, la noblesse est un mot. Mais sous ce mot s'est glissée une nouvelle et intolérable aristocratie.",
    photo: emmanuelJosephSieyes.photo,
    auteur: emmanuelJosephSieyes.auteur,
    categorie: ["tous"],
  },
  {
    texte: "La paix n'est pas l'absence de guerre, c'est une vertu, un état d'esprit, une volonté de bienveillance, de confiance, de justice.",
    photo: baruchSpinoza.photo,
    auteur: baruchSpinoza.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Si vous voulez que la vie vous sourie, apportez-lui d'abord votre bonne humeur.",
    photo: baruchSpinoza.photo,
    auteur: baruchSpinoza.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Les hommes sont conduits plutôt par le désir aveugle que par la raison.",
    photo: baruchSpinoza.photo,
    auteur: baruchSpinoza.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Nous ne désirons aucune chose parce que nous la trouvons bonne mais, au contraire, nous jugeons qu'une chose est bonne parce que nous la désirons.",
    photo: baruchSpinoza.photo,
    auteur: baruchSpinoza.auteur,
    categorie: ["tous"],
  },
  {
    texte: "La satisfaction intérieure est en vérité ce que nous pouvons espérer de plus grand.",
    photo: baruchSpinoza.photo,
    auteur: baruchSpinoza.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Le chat n'est pas tenu de vivre selon les lois du lion.",
    photo: baruchSpinoza.photo,
    auteur: baruchSpinoza.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "Le désir qui naît de la joie est plus fort que le désir qui naît de la tristesse.",
    photo: baruchSpinoza.photo,
    auteur: baruchSpinoza.auteur,
    categorie: ["tous", "bonheur"],
  },
  {
    texte: "Les hommes se trompent quand ils se croient libres ; cette opinion consiste en cela seul qu'ils sont conscients de leurs actions et ignorants des causes par lesquelles ils sont déterminés.",
    photo: baruchSpinoza.photo,
    auteur: baruchSpinoza.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "C'est aux esclaves, non aux hommes libres, que l'on fait un cadeau pour les récompenser de s'être bien conduits.",
    photo: baruchSpinoza.photo,
    auteur: baruchSpinoza.auteur,
    categorie: ["tous", "liberte"],
  },
  {
    texte: "On ne désire pas les choses parce qu'elles sont belles, mais c'est parce qu'on les désire qu'elles sont belles.",
    photo: baruchSpinoza.photo,
    auteur: baruchSpinoza.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Il vaut mieux enseigner les vertus que condamner les vices.",
    photo: baruchSpinoza.photo,
    auteur: baruchSpinoza.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Dans la mesure où une chose convient à notre nature, elle est nécessairement bonne.",
    photo: baruchSpinoza.photo,
    auteur: baruchSpinoza.auteur,
    categorie: ["tous"],
  },
  {
    texte: "La peur ne peut se passer de l'espoir et l'espoir de la peur.",
    photo: baruchSpinoza.photo,
    auteur: baruchSpinoza.auteur,
    categorie: ["tous", "courage"],
  },
  {
    texte: "C'est un défaut commun aux hommes que de confier aux autres leurs desseins.",
    photo: baruchSpinoza.photo,
    auteur: baruchSpinoza.auteur,
    categorie: ["tous"],
  },
  {
    texte: "Une bonne conscience ne nous excite pas à notre perte mais toujours à notre salut.",
    photo: baruchSpinoza.photo,
    auteur: baruchSpinoza.auteur,
    categorie: ["tous"],
  },
];
