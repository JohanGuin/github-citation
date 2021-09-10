"use strict";

/*
  Programme affichant des citations de personnes célèbres avec quelques options pour l'utilisateur qui pourra choisir un thème.
*/

const boutons = document.querySelectorAll("button");
const conteneurCitation = document.getElementById("conteneur-citation");

// tableau ou seront entré toutes les citations possibles en fonction du choix de l'utilisateur
let choixUtilisateur = [];
let debutRandomCitation = null;

// Remplissage des options du tableau suite aux choix de l'utilisateur
let remplirTab = (mot) => {
  choixUtilisateur = [];
  if(mot){
    for(let i = 0; i < citations.length; i++){
      if(citations[i].categorie.includes(`${mot}`)){
        choixUtilisateur.push(citations[i]);
      }
    }
  }
}

let lienWiki = () => {
  const lienAffichage = document.querySelector("nav ul li");
  const lienUn = document.createElement("a");
  lienUn.src = choixUtilisateur[debutRandomCitation].lien;
  console.log(lienUn);
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
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Franklin")){
    fond.src = "assets/Benjamin_Franklin.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Confucius")){
    fond.src = "assets/Confucius.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Nietzsche")){
    fond.src = "assets/Friedrich_Nietzsche.jpg";
  }else
  if(choixUtilisateur[debutRandomCitation].auteur.includes("Gandhi")){
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
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Lama")){
    fond.src = "assets/Dalai_Lama.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Spies")){
    fond.src = "assets/August_Spies.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Luxemburg")){
    fond.src = "assets/Rosa_Luxemburg.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Boétie")){
    fond.src = "assets/Etienne_DeLaBoetie.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("Maréchal")){
    fond.src = "assets/Sylain_Marechal.jpg";
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
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("inconnu01")){
    fond.src = "assets/Inconnu01.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("inconnu02")){
    fond.src = "assets/Inconnu02.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("inconnu03")){
    fond.src = "assets/Inconnu03.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("inconnu04")){
    fond.src = "assets/Inconnu04.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("inconnu05")){
    fond.src = "assets/Inconnu05.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("inconnu06")){
    fond.src = "assets/Inconnu06.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("inconnu07")){
    fond.src = "assets/Inconnu07.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("inconnu08")){
    fond.src = "assets/Inconnu08.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur.includes("inconnu09")){
    fond.src = "assets/Inconnu09.jpg";
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
  }

  conteneurCitation.append(cite);
  conteneurCitation.append(auteur);
  conteneurCitation.append(fond);
  cite.textContent = "\" " + choixUtilisateur[debutRandomCitation].texte + " \"";
  auteur.textContent = choixUtilisateur[debutRandomCitation].auteur;
  cite.style.animation = "afficheCitation 5s";
  auteur.style.animation = "afficheCitation 5s";
  fond.style.animation = "animFond 5s";
  auteur.addEventListener("click", lienWiki);
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
    choixUtilisateur = [...citations];
  }else if(this.id === "bon"){
    remplirTab("bonheur");
  }else if(this.id === "cou"){
    remplirTab("courage");
  }else if(this.id === "lib"){
    remplirTab("liberte");
  }else if(this.id === "sag"){
    remplirTab("sagesse");
  }else if(this.id === "mor"){
    remplirTab("morale");
  }else if(this.id === "rev"){
    remplirTab("reve");
  }else{
    remplirTab("sensibilite");
  }
  lectureCitations();
}

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
