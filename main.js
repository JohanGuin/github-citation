"use strict";

/*
  Programme affichant des citations de personnes célèbres avec quelques options pour l'utilisateur qui pourra choisir un thème.
*/

const boutons = document.querySelectorAll("button");
const conteneurCitation = document.getElementById("conteneur-citation");

// tableau ou seront entré toutes les citations possibles en fonction du choix de l'utilisateur
let choixUtilisateur = [];

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

let lectureCitations = () => {
  const debutRandomCitation = Math.floor(Math.random()*choixUtilisateur.length);
  let longueur = choixUtilisateur[debutRandomCitation].image.length;
  const randomImage = Math.floor(longueur - 1);
  let cite = document.createElement("blockquote");
  let auteur = document.createElement("div");
  let photo = new Image();
  let fond = new Image();
  let rImg = choixUtilisateur[debutRandomCitation].image[randomImage]

  cite.setAttribute("id", "cite");
  auteur.setAttribute("id", "auteur");
  photo.setAttribute("id", "photo");
  fond.setAttribute("id", "fond");
  console.log(rImg);

  fond.src = `assets/${rImg}`;

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
  }

  conteneurCitation.append(fond);
  conteneurCitation.append(cite);
  conteneurCitation.append(auteur);
  conteneurCitation.append(photo);
  cite.textContent = choixUtilisateur[debutRandomCitation].texte;
  auteur.textContent = choixUtilisateur[debutRandomCitation].auteur;
  cite.style.animation = "afficheCitation 5s";
  auteur.style.animation = "afficheCitation 5s";
  photo.style.animation = "afficheCitation 5s";
  fond.style.animation = "afficheFond 5s";
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

tous.addEventListener("click", buttonChoixUser);
bon.addEventListener("click", buttonChoixUser);
cou.addEventListener("click", buttonChoixUser);
lib.addEventListener("click", buttonChoixUser);
sag.addEventListener("click", buttonChoixUser);
mor.addEventListener("click", buttonChoixUser);
rev.addEventListener("click", buttonChoixUser);
sen.addEventListener("click", buttonChoixUser);
