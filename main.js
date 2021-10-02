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
  if(choixUtilisateur[debutRandomCitation].auteur.includes("Einstein")){
    fond.src = "assets/Albert_Einstein.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Malcolm")){
    fond.src = "assets/Malcolm_X.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Hugo")){
    fond.src = "assets/Victor_Hugo.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Luther")){
    fond.src = "assets/Martin_Luther_King.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Huxley")){
    fond.src = "assets/Aldous_Huxley.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Aristote")){
    fond.src = "assets/Aristote.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Benjamin Franklin")){
    fond.src = "assets/Benjamin_Franklin.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Confucius")){
    fond.src = "assets/Confucius.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Nietzsche")){
    fond.src = "assets/Friedrich_Nietzsche.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Gandhi")){
    fond.src = "assets/Gandhi.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Gibran")){
    fond.src = "assets/Kahlil_Gibran.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Tseu")){
    fond.src = "assets/Lao_Tseu.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Eleanor")){
    fond.src = "assets/Eleanor_Roosevelt.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Tolstoï")){
    fond.src = "assets/Leon_Tolstoi.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Mandela")){
    fond.src = "assets/Nelson_Mandela.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Epicure")){
    fond.src = "assets/Epicure.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Socrate")){
    fond.src = "assets/Socrate.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Osho")){
    fond.src = "assets/Osho.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("lama")){
    fond.src = "assets/Dalai_Lama.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Spies")){
    fond.src = "assets/August_Spies.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Luxemburg")){
    fond.src = "assets/Rosa_Luxemburg.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Boétie")){
    fond.src = "assets/Etienne_DeLaBoetie.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Maréchal")){
    fond.src = "assets/Sylvain_Marechal.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Bakounine")){
    fond.src = "assets/Mikhail_Bakounine.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Mirbeau")){
    fond.src = "assets/Octave_Mirbeau.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Louise Michel")){
    fond.src = "assets/Louise_Michel.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Marx")){
    fond.src = "assets/Karl_Marx.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Stirner")){
    fond.src = "assets/Max_Stirner.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Marcuse")){
    fond.src = "assets/Herbert_Marcuse.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Proudhon")){
    fond.src = "assets/PierreJoseph_Proudhon.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Kropotkine")){
    fond.src = "assets/Pierre_Kroptokine.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Guevara")){
    fond.src = "assets/Che_Guevara.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Shakespeare")){
    fond.src = "assets/William_Shakespeare.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Zola")){
    fond.src = "assets/Emile_Zola.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Twain")){
    fond.src = "assets/Mark_Twain.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Camus")){
    fond.src = "assets/Albert_Camus.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Curie")){
    fond.src = "assets/Marie_Curie.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Monroe")){
    fond.src = "assets/Marilyn_Monroe.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Colomb")){
    fond.src = "assets/Christophe_Colomb.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Disney")){
    fond.src = "assets/Walt_Disney.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Coelho")){
    fond.src = "assets/Paulo_Coelho.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Winston Churchill")){
    fond.src = "assets/Winston_Churchill.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Teresa")){
    fond.src = "assets/Mere_Teresa.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Jobs")){
    fond.src = "assets/Steve_Jobs.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Vinci")){
    fond.src = "assets/Leonard_DeVinci.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Marley")){
    fond.src = "assets/Bob_Marley.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Chaplin")){
    fond.src = "assets/Charlie_Chaplin.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Bouddha")){
    fond.src = "assets/Bouddha.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Abbé Pierre")){
    fond.src = "assets/Abbe_Pierre.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Wilde")){
    fond.src = "assets/Oscar_Wilde.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Jouhandeau")){
    fond.src = "assets/Marcel_Jouhandeau.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Goethe")){
    fond.src = "assets/Goethe.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Evans")){
    fond.src = "assets/AL_Evans.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Feuillet")){
    fond.src = "assets/Octave_Feuillet.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Joel Brown")){
    fond.src = "assets/Joel_Brown.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Biès")){
    fond.src = "assets/Jean_Bies.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Fort")){
    fond.src = "assets/Paul_Fort.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Goldsmith")){
    fond.src = "assets/Oliver_Goldsmith.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Théodore Roosevelt")){
    fond.src = "assets/Theodore_Roosevelt.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Jordan")){
    fond.src = "assets/Michael_Jordan.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Anatole France")){
    fond.src = "assets/Anatole_France.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Sheeran")){
    fond.src = "assets/Ed_Sheeran.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Brassens")){
    fond.src = "assets/Georges_Brassens.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Hemingway")){
    fond.src = "assets/Ernest_Hemingway.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Larousse")){
    fond.src = "assets/Pierre_Larousse.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Blum")){
    fond.src = "assets/Léon_Blum.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Renard")){
    fond.src = "assets/Jules_Renard.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Eluard")){
    fond.src = "assets/Paul_Eluard.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Périclès")){
    fond.src = "assets/Pericles.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Rousseau")){
    fond.src = "assets/JeanJacques_Rousseau.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("hindoue")){
    fond.src = "assets/sagesse_hindoue.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Usui")){
    fond.src = "assets/Mikao_Usui.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Cosby")){
    fond.src = "assets/Bill_Cosby.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Voltaire")){
    fond.src = "assets/Voltaire.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Molière")){
    fond.src = "assets/Moliere.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Gretzky")){
    fond.src = "assets/Wayne_Gretzky.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Miller")){
    fond.src = "assets/Henry_Miller.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Yourcenar")){
    fond.src = "assets/Marguerite_Yourcenar.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Jung")){
    fond.src = "assets/Carl_Jung.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Aurèle")){
    fond.src = "assets/Marc_Aurele.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Epictète")){
    fond.src = "assets/Epictete.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Platon")){
    fond.src = "assets/Platon.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Rûmî")){
    fond.src = "assets/Rumi.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Sénèque")){
    fond.src = "assets/Seneque.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Frost")){
    fond.src = "assets/Robert_Frost.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("René Char")){
    fond.src = "assets/Rene_Char.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Schopenhauer")){
    fond.src = "assets/Arthur_Schopenhauer.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Orwell")){
    fond.src = "assets/George_Orwell.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Montesquieu")){
    fond.src = "assets/Montesquieu.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Sartre")){
    fond.src = "assets/Jean_Paul_Sartre.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Rolland")){
    fond.src = "assets/Romain_Rolland.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("jiddu")){
    fond.src = "assets/Jiddu_Krishnamurti.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Delano")){
    fond.src = "assets/FDRoosevelt.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Morrison")){
    fond.src = "assets/Jim_Morrison.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Coluche")){
    fond.src = "assets/Coluche.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Proust")){
    fond.src = "assets/Marcel_Proust.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Saint-Exupéry")){
    fond.src = "assets/antoine_de_saint_exupery.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Woolf")){
    fond.src = "assets/Virginia_Woolf.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Bernanos")){
    fond.src = "assets/Georges_Bernanos.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Charles Beaudelaire")){
    fond.src = "assets/Charles_Beaudelaire.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Jefferson")){
    fond.src = "assets/Thomas_Jefferson.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Bruce Lee")){
    fond.src = "assets/Bruce_Lee.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Van Damme")){
    fond.src = "assets/Jean-Claude_Van_Damme.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Tocqueville")){
    fond.src = "assets/Alexis_de_Tocqueville.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Chomsky")){
    fond.src = "assets/Noam_Chomsky.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Bonaparte")){
    fond.src = "assets/Napoleon_Bonaparte.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Sieyès")){
    fond.src = "assets/Emmanuel-Joseph_Sieyes.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Spinoza")){
    fond.src = "assets/Spinoza.jpg";
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
