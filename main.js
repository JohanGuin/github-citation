"use strict";

/*
  Programme affichant des citations de personnes célèbres avec quelques options pour l'utilisateur qui pourra choisir un thème.
*/

const citation = document.getElementById("cite");
const auteur = document.getElementById("auteur");
const boutons = document.querySelectorAll("button");
let boolTous = true;
let boolBon = false;
let boolCou = false;
let boolLib = false;
let boolSag = false;
let boolMor = false;
let intervalId = null;

// tableau ou seront entré toutes les citations possibles en fonction du choix de l'utilisateur
let choixUtilisateur = [];

// fonction se lançant au début du programme pour afficher automatiquement une citation aléatoire
(function() {
  const debutRandomCitation = Math.floor(Math.random()*citations.length);
  cite.textContent = citations[debutRandomCitation].texte;
  auteur.textContent = citations[debutRandomCitation].auteur;
})();

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
    boolTous = true;
    boolBon = false; boolCou = false; boolLib = false;
    boolSag = false; boolMor = false;
    choixUtilisateur = [...citations];
  }else if(this.id === "bon"){
    boolBon = true;
    boolTous = false; boolCou = false; boolLib = false;
    boolSag = false; boolMor = false;
    remplirTab("bonheur");
  }else if(this.id === "cou"){
    boolCou = true;
    boolBon = false; boolTous = false; boolLib = false;
    boolSag = false; boolMor = false;
    remplirTab("courage");
  }else if(this.id === "lib"){
    boolLib = true;
    boolBon = false; boolCou = false; boolTous = false;
    boolSag = false; boolMor = false;
    remplirTab("liberte");
  }else if(this.id === "sag"){
    boolSag = true;
    boolBon = false; boolCou = false; boolLib = false;
    boolTous = false; boolMor = false;
    remplirTab("sagesse");
  }else{
    boolMor = true;
    boolBon = false; boolCou = false; boolLib = false;
    boolSag = false; boolTous = false;
    remplirTab("morale");
  }
  lectureCitations();
}


tous.addEventListener("click", buttonChoixUser);
bon.addEventListener("click", buttonChoixUser);
cou.addEventListener("click", buttonChoixUser);
lib.addEventListener("click", buttonChoixUser);
sag.addEventListener("click", buttonChoixUser);
mor.addEventListener("click", buttonChoixUser);
