"use strict";

/*
  Programme affichant des citations de personnes célèbres avec quelques options pour l'utilisateur qui pourra choisir un thème.
*/

const citation = document.getElementById("cite");
const auteur = document.getElementById("auteur");
const boutons = document.querySelectorAll("button");

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
  cite.textContent = choixUtilisateur[debutRandomCitation].texte;
  auteur.textContent = choixUtilisateur[debutRandomCitation].auteur;
  cite.style.animation = "afficheCitation 5s";
  auteur.style.animation = "afficheCitation 5s";
  console.log(debutRandomCitation);
}

/*Fonction qui permet le choix utilisateur et lance les citations*/
function buttonChoixUser(){
  tous.classList.remove("button-true");
  bon.classList.remove("button-true");
  cou.classList.remove("button-true");
  lib.classList.remove("button-true");
  sag.classList.remove("button-true");
  mor.classList.remove("button-true");
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
  }else{
    remplirTab("morale");
  }
  lectureCitations();
  cite.style.animation = "afficheCitation 5s alternate";
  auteur.style.animation = "afficheCitation 5s alternate";
}

tous.addEventListener("click", buttonChoixUser);
bon.addEventListener("click", buttonChoixUser);
cou.addEventListener("click", buttonChoixUser);
lib.addEventListener("click", buttonChoixUser);
sag.addEventListener("click", buttonChoixUser);
mor.addEventListener("click", buttonChoixUser);
