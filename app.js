/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.

*/
const moveDiv = document.getElementById("moveDiv");
const hideModal = document.getElementById("hideModal");
const container = document.querySelector(".container");
const red = document.querySelector(".red");
const modal = document.querySelector(".modal");

let position = 0;

moveDiv.addEventListener("click", function () {
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  const redWidth = red.clientWidth;
  const redHeight = red.clientHeight;

  if (position === 0) {
    red.style.left = `${containerWidth - redWidth}px`;
    modal.style.display = "none";
  } else if (position === 1) {
    red.style.top = `${containerHeight - redHeight}px`;
  } else if (position === 2) {
    red.style.left = `0px`;
  } else {
    red.style.top = `0px`;
    modal.style.display = "block";
  }

  position = (position + 1) % 4;
});

hideModal.addEventListener("click", function () {
  modal.style.display = "none";
});
