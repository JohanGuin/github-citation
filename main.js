"use strict";

/*
  Programme affichant des citations de personnes célèbres avec quelques options pour l'utilisateur qui pourra choisir un thème, sélectionner par l'intermediaire de choix ecrits dans une barre de recherche...
*/

const boutons = document.querySelectorAll("button");
const conteneurCitation = document.getElementById("conteneur-citation");
const mots = document.getElementById("mots");

// tableau ou seront entré toutes les citations possibles en fonction du choix de l'utilisateur
let choixUtilisateur = [];
let debutRandomCitation = null;

// Remplissage des options du tableau suite aux choix de l'utilisateur
let remplirTab = (mot) => {
  const tabMots = new RegExp(mots.value, "ig");
  choixUtilisateur = [];

/*
Utilisation d'un regex pour permettre la recherche des mots ecrits par l'utilisateur dans les types de citations choisies
Ensuite, je demande qu'a partir de ce type de citations, il trouve toutes les citations avec éventuellement, cet auteur ou ses termes
*/
  for(let i = 0; i < citations.length; i++){
    if((tabMots.test(citations[i].auteur) || tabMots.test(citations[i].texte)) && citations[i].categorie.includes(mot)){
      choixUtilisateur.push(citations[i]);
    }
  }
  if(choixUtilisateur.length === 0){
    const conteneurOptions = document.querySelector(".conteneur-options");
    const afficheErreur = document.createElement("span");
    afficheErreur.id = "Aff-Erreur";
    afficheErreur.textContent = "Je ne trouve ce terme";
    conteneurOptions.append(afficheErreur);
    afficheErreur.style.animation = "afficheErreur 10s ease-in-out";
    choixUtilisateur = [...citations];
  }
}

let lectureCitations = () => {
  debutRandomCitation = Math.floor(Math.random()*choixUtilisateur.length);
  let cite = document.createElement("blockquote");
  let auteur = document.createElement("div");
  let fond = new Image();

  fond.setAttribute("id", "fond");
  cite.setAttribute("id", "cite");
  auteur.setAttribute("id", "auteur");

  //Sélection des photos des auteurs
  switch(choixUtilisateur[debutRandomCitation].photo){
    case "Albert Einstein":
      fond.src = "assets/Albert_Einstein.jpg";
      break;
    case "Malcolm X":
      fond.src = "assets/Malcolm_X.jpg";
      break;
    case "Victor Hugo":
      fond.src = "assets/Victor_Hugo.jpg";
      break;
    case "Martin Luther King":
      fond.src = "assets/Martin_Luther_King.jpg";
      break;
    case "Aldous Huxley":
      fond.src = "assets/Aldous_Huxley.jpg";
      break;
    case "Aristote":
      fond.src = "assets/Aristote.jpg";
      break;
    case "Benjamin Franklin":
      fond.src = "assets/Benjamin_Franklin.jpg";
      break;
    case "Confucius":
      fond.src = "assets/Confucius.jpg";
      break;
    case "Friedrich Nietzsche":
      fond.src = "assets/Friedrich_Nietzsche.jpg";
      break;
    case "Gandhi":
      fond.src = "assets/Gandhi.jpg";
      break;
    case "Khalil Gibran":
      fond.src = "assets/Kahlil_Gibran.jpg";
      break;
    case "Lao Tseu":
      fond.src = "assets/Lao_Tseu.jpg";
      break;
    case "Eleanor Roosevelt":
      fond.src = "assets/Eleanor_Roosevelt.jpg";
      break;
    case "Léon Tolstoï":
      fond.src = "assets/Leon_Tolstoi.jpg";
      break;
    case "Nelson Mandela":
      fond.src = "assets/Nelson_Mandela.jpg";
      break;
    case "Epicure":
      fond.src = "assets/Epicure.jpg";
      break;
    case "Socrate":
      fond.src = "assets/Socrate.jpg";
      break;
    case "Osho":
      fond.src = "assets/Osho.jpg";
      break;
    case "Dalai-Lama":
      fond.src = "assets/Dalai_Lama.jpg";
      break;
    case "Oscar Wilde":
      fond.src = "assets/Oscar_Wilde.jpg";
      break;
    case "Abbé Pierre":
      fond.src = "assets/Abbe_Pierre.jpg";
      break;
    case "Bouddha":
      fond.src = "assets/Bouddha.jpg";
      break;
    case "Charlie Chaplin":
      fond.src = "assets/Charlie_Chaplin.jpg";
      break;
    case "Bob Marley":
      fond.src = "assets/Bob_Marley.jpg";
      break;
    case "Léonard de Vinci":
      fond.src = "assets/Leonard_DeVinci.jpg";
      break;
    case "Che Guevara":
      fond.src = "assets/Che_Guevara.jpg";
      break;
    case "Steve Jobs":
      fond.src = "assets/Steve_Jobs.jpg";
      break;
    case "Mère Teresa":
      fond.src = "assets/Mere_Teresa.jpg";
      break;
    case "Winston Churchill":
      fond.src = "assets/Winston_Churchill.jpg";
      break;
    case "Paulo Coelho":
      fond.src = "assets/Paulo_Coelho.jpg";
      break;
    case "Walt Disney":
      fond.src = "assets/Walt_Disney.jpg";
      break;
    case "Christophe Colomb":
      fond.src = "assets/Christophe_Colomb.jpg";
      break;
    case "Marilyn Monroe":
      fond.src = "assets/Marilyn_Monroe.jpg";
      break;
    case "Marie Curie":
      fond.src = "assets/Marie_Curie.jpg";
      break;
    case "Mark Twain":
      fond.src = "assets/Mark_Twain.jpg";
      break;
    case "Emile Zola":
      fond.src = "assets/Emile_Zola.jpg";
      break;
    case "Pierre Kroptokine":
      fond.src = "assets/Pierre_Kroptokine.jpg";
      break;
    case "Pierre-Joseph Proudhon":
      fond.src = "assets/PierreJoseph_Proudhon.jpg";
      break;
    case "Herbert Marcuse":
      fond.src = "assets/Herbert_Marcuse.jpg";
      break;
    case "Max Stirner":
      fond.src = "assets/Max_Stirner.jpg";
      break;
    case "Karl Marx":
      fond.src = "assets/Karl_Marx.jpg";
      break;
    case "Louise Michel":
      fond.src = "assets/Louise_Michel.jpg";
      break;
    case "Octave Mirbeau":
      fond.src = "assets/Octave_Mirbeau.jpg";
      break;
    case "Mikhail Bakounine":
      fond.src = "assets/Mikhail_Bakounine.jpg";
      break;
    case "Sylvain Maréchal":
      fond.src = "assets/Sylvain_Marechal.jpg";
      break;
    case "Etienne de la Boétie":
      fond.src = "assets/Etienne_DeLaBoetie.jpg";
      break;
    case "Rosa Luxemburg":
      fond.src = "assets/Rosa_Luxemburg.jpg";
      break;
    case "August Spies":
      fond.src = "assets/August_Spies.jpg";
      break;
    case "Marcel Jouhandeau":
      fond.src = "assets/Marcel_Jouhandeau.jpg";
      break;
    case "Johann Wolfgang von Goethe":
      fond.src = "assets/Goethe.jpg";
      break;
    case "AL Evans":
      fond.src = "assets/AL_Evans.jpg";
      break;
    case "Octave Feuillet":
      fond.src = "assets/Octave_Feuillet.jpg";
      break;
    case "Joel Brown":
      fond.src = "assets/Joel_Brown.jpg";
      break;
    case "Jean Biès":
      fond.src = "assets/Jean_Bies.jpg";
      break;
    case "Paul Fort":
      fond.src = "assets/Paul_Fort.jpg";
      break;
    case "Oliver Goldsmith":
      fond.src = "assets/Oliver_Goldsmith.jpg";
      break;
    case "Théodore Roosevelt":
      fond.src = "assets/Theodore_Roosevelt.jpg";
      break;
    case "Michael Jordan":
      fond.src = "assets/Michael_Jordan.jpg";
      break;
    case "Anatole France":
      fond.src = "assets/Anatole_France.jpg";
      break;
    case "Ed Sheeran":
      fond.src = "assets/Ed_Sheeran.jpg";
      break;
    case "Georges Brassens":
      fond.src = "assets/Georges_Brassens.jpg";
      break;
    case "Ernest Hemingway":
      fond.src = "assets/Ernest_Hemingway.jpg";
      break;
    case "Pierre Larousse":
      fond.src = "assets/Pierre_Larousse.jpg";
      break;
    case "Léon Blum":
      fond.src = "assets/Léon_Blum.jpg";
      break;
    case "Jules Renard":
      fond.src = "assets/Jules_Renard.jpg";
      break;
    case "Paul Eluard":
      fond.src = "assets/Paul_Eluard.jpg";
      break;
    case "Périclès":
      fond.src = "assets/Pericles.jpg";
      break;
    case "Albert Camus":
      fond.src = "assets/Albert_Camus.jpg";
      break;
    case "Jean-Jacques Rousseau":
      fond.src = "assets/JeanJacques_Rousseau.jpg";
      break;
    case "Sagesse hindoue":
      fond.src = "assets/sagesse_hindoue.jpg";
      break;
    case "Mikao Usui":
      fond.src = "assets/Mikao_Usui.jpg";
      break;
    case "Bill Cosby":
      fond.src = "assets/Bill_Cosby.jpg";
      break;
    case "William Shakespeare":
      fond.src = "assets/William_Shakespeare.jpg";
      break;
    case "Voltaire":
      fond.src = "assets/Voltaire.jpg";
      break;
    case "Molière":
      fond.src = "assets/Moliere.jpg";
      break;
    case "Wayne Gretzky":
      fond.src = "assets/Wayne_Gretzky.jpg";
      break;
    case "Carl Jung":
      fond.src = "assets/Carl_Jung.jpg";
      break;
    case "Marguerite Yourcenar":
      fond.src = "assets/Marguerite_Yourcenar.jpg";
      break;
    case "Henry Miller":
      fond.src = "assets/Henry_Miller.jpg";
      break;
    case "Marc Aurèle":
      fond.src = "assets/Marc_Aurele.jpg";
      break;
    case "Epictète":
      fond.src = "assets/Epictete.jpg";
      break;
    case "Platon":
      fond.src = "assets/Platon.jpg";
      break;
    case "Rûmî":
      fond.src = "assets/Rumi.jpg";
      break;
    case "Sénèque":
      fond.src = "assets/Seneque.jpg";
      break;
    case "Robert Frost":
      fond.src = "assets/Robert_Frost.jpg";
      break;
    case "René Char":
      fond.src = "assets/Rene_Char.jpg";
      break;
    case "Arthur Schopenhauer":
      fond.src = "assets/Arthur_Schopenhauer.jpg";
      break;
    case "George Orwell":
      fond.src = "assets/George_Orwell.jpg";
      break;
    case "Montesquieu":
      fond.src = "assets/Montesquieu.jpg";
      break;
    case "Jean-Paul Sartre":
      fond.src = "assets/Jean_Paul_Sartre.jpg";
      break;
    case "Romain Rolland":
      fond.src = "assets/Romain_Rolland.jpg";
      break;
    case "Jiddu Krishnamurti":
      fond.src = "assets/Jiddu_Krishnamurti.jpg";
      break;
    case "Franklin Delano Roosevelt":
      fond.src = "assets/FDRoosevelt.jpg";
      break;
    case "Jim Morrison":
      fond.src = "assets/Jim_Morrison.jpg";
      break;
    case "Coluche":
      fond.src = "assets/Coluche.jpg";
      break;
    case "Marcel Proust":
      fond.src = "assets/Marcel_Proust.jpg";
      break;
    case "Antoine de Saint-Exupéry":
      fond.src = "assets/antoine_de_saint_exupery.jpg";
      break;
    case "Virginia Woolf":
      fond.src = "assets/Virginia_Woolf.jpg";
      break;
    case "Georges Bernanos":
      fond.src = "assets/Georges_Bernanos.jpg";
      break;
    case "Charles Beaudelaire":
      fond.src = "assets/Charles_Beaudelaire.jpg";
      break;
    case "Thomas Jefferson":
      fond.src = "assets/Thomas_Jefferson.jpg";
      break;
    case "Bruce Lee":
      fond.src = "assets/Bruce_Lee.jpg";
      break;
    case "Jean-Claude Van Damme":
      fond.src = "assets/Jean-Claude_Van_Damme.jpg";
      break;
    case "Alexis de Tocqueville":
      fond.src = "assets/Alexis_de_Tocqueville.jpg";
      break;
    case "Noam Chomsky":
      fond.src = "assets/Noam_Chomsky.jpg";
      break;
    case "Napoléon Bonaparte":
      fond.src = "assets/Napoleon_Bonaparte.jpg";
      break;
    case "Emmanuel-Joseph Sieyès":
      fond.src = "assets/Emmanuel-Joseph_Sieyes.jpg";
      break;
    case "Baruch Spinoza":
      fond.src = "assets/Spinoza.jpg";
      break;
    default:
      null;
  }
  
  conteneurCitation.append(cite);
  conteneurCitation.append(auteur);
  conteneurCitation.append(fond);
  cite.textContent = "\" " + choixUtilisateur[debutRandomCitation].texte + " \"";
  auteur.textContent = choixUtilisateur[debutRandomCitation].auteur;
  cite.style.animation = "afficheCitation 3.5s";
  auteur.style.animation = "afficheCitation 3.5s";
  fond.style.animation = "animFond 3s";
  boutons.forEach((bouton) => {
    bouton.addEventListener("click", () => {
      cite.remove();
      auteur.remove();
      fond.remove();
    });
  });
}


/*Fonction qui permet le choix utilisateur et lance les citations*/
function buttonChoixUser(){
  tous.classList.remove("button-true");
  bon.classList.remove("button-true");
  cou.classList.remove("button-true");
  lib.classList.remove("button-true");
  sag.classList.remove("button-true");
  mor.classList.remove("button-true");
  rev.classList.remove("button-true");
  sen.classList.remove("button-true");
  this.classList.add("button-true");
  if(this.id === "tous"){
    try{
      remplirTab("tous");
    }catch(err){
      console.log(err);
    }
  }else if(this.id === "bon"){
    try{
      remplirTab("bonheur");
    }catch(err){
      console.log(err);
    }
  }else if(this.id === "cou"){
    try{
      remplirTab("courage");
    }catch(err){
      console.log(err);
    }
  }else if(this.id === "lib"){
    try{
      remplirTab("liberte");
    }catch(err){
      console.log(err);
    }
  }else if(this.id === "sag"){
    try{
      remplirTab("sagesse");
    }catch(err){
      console.log(err);
    }
  }else if(this.id === "mor"){
    try{
      remplirTab("morale");
    }catch(err){
      console.log(err);
    }
  }else if(this.id === "rev"){
    try{
      remplirTab("reve");
    }catch(err){
      console.log(err);
    }
  }else{
    try{
      remplirTab("sensibilite");
    }catch(err){
      console.log(err);
    }
  }
  lectureCitations();
}

const stars = () => {
  const star = document.createElement("span");
  const size = Math.random() * 60 + 40 + "px";
  star.classList.add("star");
  conteneurCitation.appendChild(star);
  star.style.height = size;
  star.style.width = size;
  star.style.top = Math.random() * 80 + 20 + "%";
  star.style.left = Math.random() * 80 + 10 + "%";
  star.style.setProperty("--startop", Math.random() * 100 + "%");
  star.style.setProperty("--starleft", Math.random() * 100 + "%");
  setTimeout(() => {
    star.remove();
  }, 7000);
}

setInterval(stars, 700);

window.addEventListener("load", () => {
  tous.addEventListener("click", buttonChoixUser);
  bon.addEventListener("click", buttonChoixUser);
  cou.addEventListener("click", buttonChoixUser);
  lib.addEventListener("click", buttonChoixUser);
  sag.addEventListener("click", buttonChoixUser);
  mor.addEventListener("click", buttonChoixUser);
  rev.addEventListener("click", buttonChoixUser);
  sen.addEventListener("click", buttonChoixUser);
});
