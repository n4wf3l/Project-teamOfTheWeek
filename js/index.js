//Variabel wordt om de players te vinden via de Select Button in de Modal
let inputPlayerModal = document.getElementById("playerInput");

//Variabel wordt gemaakt voor "Choose Player button"
let buttonloadPlayerOnField = document.getElementById("choosePlayer");

//Variabel wordt gemaakt voor "Clear Player button"
let buttonClearPlayers = document.getElementById("clearPlayers");

//maak een array met alle spelers op het veld (je kunt erop klikken)
const playersOnField = document.querySelectorAll(".player");

//variabele voor het bijhouden welke speler er geselecteerd is
let currentSelectedPlayer = -1;

//Als je de pagina herlaad, dan functie PlayersFromLocalStorage

//maak een onClick (op de img) event aan voor alle spelers op het veld, deze wordt toegevoegd om de img
window.onload = () => {

  inputPlayerModal.addEventListener("change", function () {
    loadPlayerInModal(currentSelectedPlayer);
  });

  buttonloadPlayerOnField.addEventListener("click", function () {
    loadPlayerOnField(currentSelectedPlayer);
  });

};