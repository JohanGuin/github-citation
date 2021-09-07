"use strict";

/*
  Programme affichant des citations de personnes célèbres avec quelques options pour l'utilisateur qui pourra choisir un thème.
*/

const boutons = document.querySelectorAll("button");
const conteneurCitation = document.getElementById("conteneur-citation");
let tabImage = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg"];

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
  const randomImage = Math.floor(Math.random()*tabImage.length + 1);
  let cite = document.createElement("blockquote");
  let auteur = document.createElement("div");
  let photo = new Image();
  let fond = new Image();

  cite.setAttribute("id", "cite");
  auteur.setAttribute("id", "auteur");
  photo.setAttribute("id", "photo");
  fond.setAttribute("id", "fond");

  fond.src = `assets/${randomImage}.jpg`;

  //Sélection des photos des auteurs
  if(choixUtilisateur[debutRandomCitation].auteur === "Albert Einstein"){
    photo.src = "assets/Albert_Einstein.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Malcolm X"){
    photo.src = "assets/Malcolm_X.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Victor Hugo"){
    photo.src = "assets/Victor_Hugo.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Martin Luther King"){
    photo.src = "assets/Martin_Luther_King.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Aldous Huxley"){
    photo.src = "assets/Aldous_Huxley.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Aristote"){
    photo.src = "assets/Aristote.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Benjamin Franklin"){
    photo.src = "assets/Benjamin_Franklin.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Confucius"){
    photo.src = "assets/Confucius.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Friedrich Nietzsche"){
    photo.src = "assets/Friedrich_Nietzsche.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Gandhi"){
    photo.src = "assets/Gandhi.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Khalil Gibran"){
    photo.src = "assets/Kahlil_Gibran.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Lao Tseu"){
    photo.src = "assets/Lao_Tseu.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Eleanor Roosevelt"){
    photo.src = "assets/Eleanor_Roosevelt.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Léon Tolstoï"){
    photo.src = "assets/Leon_Tolstoi.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Nelson Mandela"){
    photo.src = "assets/Nelson_Mandela.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Epicure"){
    photo.src = "assets/Epicure.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Socrate"){
    photo.src = "assets/Socrate.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Osho"){
    photo.src = "assets/Osho.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "August Spies"){
    photo.src = "assets/August_Spies.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Rosa Luxemburg"){
    photo.src = "assets/Rosa_Luxemburg.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Etienne de la Boétie"){
    photo.src = "assets/Etienne_DeLaBoetie.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Sylvain Maréchal"){
    photo.src = "assets/Sylain_Marechal.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Mikhail Bakounine"){
    photo.src = "assets/Mikhail_Bakounine.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Octave Mirbeau"){
    photo.src = "assets/Octave_Mirbeau.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Louise Michel"){
    photo.src = "assets/Louise_Michel.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Karl Marx"){
    photo.src = "assets/Karl_Marx.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Max Stirner"){
    photo.src = "assets/Max_Stirner.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Herbert Marcuse"){
    photo.src = "assets/Herbert_Marcuse.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Pierre-Joseph Proudhon"){
    photo.src = "assets/PierreJoseph_Proudhon.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Pierre Kropotkine"){
    photo.src = "assets/Pierre_Kroptokine.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Che Guevara"){
    photo.src = "assets/Che_Guevara.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "William Shakespeare"){
    photo.src = "assets/William_Shakespeare.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Emile Zola"){
    photo.src = "assets/Emile_Zola.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Mark Twain"){
    photo.src = "assets/Mark_Twain.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Albert Camus"){
    photo.src = "assets/Albert_Camus.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Marie Curie"){
    photo.src = "assets/Marie_Curie.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Marilyn Monroe"){
    photo.src = "assets/Marilyn_Monroe.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Christophe Colomb"){
    photo.src = "assets/Christophe_Colomb.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Walt Disney"){
    photo.src = "assets/Walt_Disney.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Paulo Coelho"){
    photo.src = "assets/Paulo_Coelho.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Winston Churchill"){
    photo.src = "assets/Winston_Churchill.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Mère Teresa"){
    photo.src = "assets/Mere_teresa.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Steve Jobs"){
    photo.src = "assets/Steve_Jobs.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Léonard de Vinci"){
    photo.src = "assets/Leonard_DeVinci.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Bob Marley"){
    photo.src = "assets/Bob_Marley.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Charlie Chaplin"){
    photo.src = "assets/Charlie_Chaplin.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Bouddha"){
    photo.src = "assets/Bouddha.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Abbé Pierre"){
    photo.src = "assets/Abbe_Pierre.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Oscar Wilde"){
    photo.src = "assets/Oscar_Wilde.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Marcel Jouhandeau"){
    photo.src = "assets/Marcel_Jouhandeau.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Johann Wolfgang von Goethe"){
    photo.src = "assets/Goethe.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Les Brown"){
    photo.src = "assets/Les_Brown.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "AL Evans"){
    photo.src = "assets/AL_Evans.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Octave Feuillet"){
    photo.src = "assets/Octave_Feuillet.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Joel Brown"){
    photo.src = "assets/Joel_Brown.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Jean Bies"){
    photo.src = "assets/Jean_Bies.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Paul Fort"){
    photo.src = "assets/Paul_Fort.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Oliver Goldsmith"){
    photo.src = "assets/Oliver_Goldsmith.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Théodore Roosevelt"){
    photo.src = "assets/Theodore_Roosevelt.png";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Michael Jordan"){
    photo.src = "assets/Michael_Jordan.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Anatole France"){
    photo.src = "assets/Anatole_France.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Ed Sheeran"){
    photo.src = "assets/Ed_Sheeran.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Georges Brassens"){
    photo.src = "assets/Georges_Brassens.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Ernest Hemingway"){
    photo.src = "assets/Ernest_Hemingway.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Pierre Larousse"){
    photo.src = "assets/Pierre_Larousse.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Léon Blum"){
    photo.src = "assets/Léon_Blum.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Jules Renard"){
    photo.src = "assets/Jules_Renard.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Paul Eluard"){
    photo.src = "assets/Paul_Eluard.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Périclès"){
    photo.src = "assets/Pericles.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Jean-Jacques Rousseau"){
    photo.src = "assets/JeanJacques_Rousseau.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Simone de Beauvoir"){
    photo.src = "assets/Simone_DeBeauvoir.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "sagesse hindoue"){
    photo.src = "assets/sagesse_hindoue.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Mikao Usui"){
    photo.src = "assets/Mikao_Usui.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Bill Cosby"){
    photo.src = "assets/Bill_Cosby.jpg";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "Voltaire"){
    photo.src = "assets/Voltaire.png";
  }else if(choixUtilisateur[debutRandomCitation].auteur === "inconnu"){
    photo.src = "assets/Inconnu.jpg";
  }

  conteneurCitation.append(cite);
  conteneurCitation.append(auteur);
  conteneurCitation.append(photo);
  conteneurCitation.append(fond);
  cite.textContent = "\" " + choixUtilisateur[debutRandomCitation].texte + " \"";
  auteur.textContent = choixUtilisateur[debutRandomCitation].auteur;
  cite.style.animation = "afficheCitation 5s, changeCouleurCitation 17.5s";
  auteur.style.animation = "afficheCitation 5s, changeCouleurCitation 17.5s";
  photo.style.animation = "afficheCitation 5s, effacePhoto 12s 5s both";
  fond.style.animation = "animFond 10s 5s both";
  auteur.addEventListener("click", lienWiki);
  photo.addEventListener("click", lienWiki);
  boutons.forEach((bouton) => {
    bouton.addEventListener("click", () => {
      cite.remove();
      auteur.remove();
      photo.remove();
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
