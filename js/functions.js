// Die eerste id gaat kijken of dat item al bestaat in de local storage. Zoniet moet hij het 
//niet meer toevoegen. Het gaat wel kijken of er een foto is zoja voegt hij die toe aan localstorage.
const loadPlayersFromLocalStorage = () => {
  for (let i = 1; i <= 11; i++) {
    let playerFromFieldImg = document.querySelector(`#player-${i} img`);
    let playerFromFieldSpan = document.querySelector(`#player-${i} span`);

    let imageLinkFromLocalStorage = localStorage.getItem(`player${i}_image`);
    let nameFromLocalStorage = localStorage.getItem(`player${i}_name`);

    if (nameFromLocalStorage) {
      if (imageLinkFromLocalStorage !== "No Image Found") {
        playerFromFieldImg.src = imageLinkFromLocalStorage;
      }
      playerFromFieldSpan.innerHTML = nameFromLocalStorage;
    }
  }
};

const clearPlayersFromLocalStorage = () => {
  for (let i = 1; i <= 11; i++) {
    localStorage.removeItem(`player${i}_name`);
    localStorage.removeItem(`player${i}_image`);
  }
  // pagina herlaad
  location.reload();
};

// Er wordt in de Modal telkens data gehaald van de geselecteerde speler-------

// Ik heb mijn input om de naam in te typpen. Deze functie overloopt alle spelers om vervolgens
// een optie toe te voegen aan de datalist. De ForEach overloopt alle spelers dan maak ik een
//option element aan. Hier geef ik de waarde aan van de naam vd speler en deze optie voeg ik
// dan toe aan de datalist zodat ik deze kan zien als ik op input klik.

//Appendchild is telkens een element meer
const loadPlayersInDatalistFromPlayersObject = () => {
  let playersDatalist = document.getElementById("playersDatalist");
  playersObject.forEach(function (player) {
    let option = document.createElement("option");
    option.value = player.name;
    playersDatalist.appendChild(option);

  });
};

//Window Onload
const showChoosePlayerModal = () => {
  let choosePlayerModal = document.getElementById("choosePlayerModal");
  choosePlayerModal.style.display = "flex";
};

const loadPlayerInModal = () => {
  let playerSelected = playersObject.filter((player) => {
    return player.name === document.getElementById("playerInput").value;
  });

  if (playerSelected[0].picture !== "No Image Found") {
    let playerImage = document.querySelector("#playerInModal-image");
    playerImage.src = playerSelected[0].picture;
  }

  let playerName = document.querySelector("#playerInModal-name");
  playerName.innerHTML = playerSelected[0].name;
};

const loadPlayerOnField = (id) => {
  let playerSelected = playersObject.filter((player) => {
    return player.name === document.getElementById("playerInput").value;
  });

  localStorage.setItem(`player${id}_image`, playerSelected[0].picture);
  localStorage.setItem(`player${id}_name`, playerSelected[0].name);

  playerOfFieldImage = document.querySelector(`#player-${id} img`);
  if (playerSelected[0].picture !== "No Image Found") {
    playerOfFieldImage.src = playerSelected[0].picture;
  }
  playerOfFieldName = document.querySelector(`#player-${id} span`);
  playerOfFieldName.innerHTML = playerSelected[0].name;

  //Als je klikt doe dan deze functie
  resetModal();
};

//Functie om de modal weg te doenq
const resetModal = () => {
  document.getElementById("playerInput").value = "";
  playerName = document.querySelector("#playerInModal-name");
  playerName.innerHTML = "";
  playerImage = document.querySelector("#playerInModal-image");
  playerImage.src = "assets/images/player.png";

  let choosePlayerModal = document.getElementById("choosePlayerModal");
  choosePlayerModal.style.display = "none";
};


//html2canvas(document.body).then((canvas) => {
// let a = document.createElement("a");
//a.download = "ss.png";
//a.href = canvas.toDataURL("image/png");
//a.click();
//});