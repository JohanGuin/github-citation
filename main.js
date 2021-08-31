"use strict";

const citation = document.getElementById("cite");
const auteur = document.getElementById("auteur");
const boutons = document.querySelectorAll("button");
const tous = document.getElementById("tous");



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
  if(mot){
    for(let i = 0; i < citations.length; i++){
      if(citations[i].categorie.includes(`${mot}`)){
        choixUtilisateur.push(citations[i]);
      }
    }
  }
}

boutons.forEach((bouton) => {
  bouton.addEventListener("click", (e) => {
    let boutonId = e.target.id;
    let boutonQuery = document.querySelector(`#${boutonId}`);
  
  });
});
