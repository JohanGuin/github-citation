"use strict";

const citation = document.getElementById("cite");
const auteur = document.getElementById("auteur");

(function() {
  const debutRandomCitation = Math.floor(Math.random()*citations.length);
  cite.textContent = citations[debutRandomCitation].texte
})();
