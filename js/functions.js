// Er wordt telkens data gehaald van de geselecteerde speler

const loadPlayersInDatalistFromPlayersObject = () => {
  var playersDatalist = document.getElementById("playersDatalist");
  playersObject.forEach(function (player) {
    var option = document.createElement("option");
    option.value = player.name;
    playersDatalist.appendChild(option);
  });
};

const showChoosePlayerModal = () => {
  var choosePlayerModal = document.getElementById("choosePlayerModal");
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
  var playerSelected = playersObject.filter((player) => {
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

  resetModal();
};

const resetModal = () => {
  document.getElementById("playerInput").value = "";
  playerName = document.querySelector("#playerInModal-name");
  playerName.innerHTML = "";
  playerImage = document.querySelector("#playerInModal-image");
  playerImage.src = "assets/images/player.png";

  var choosePlayerModal = document.getElementById("choosePlayerModal");
  choosePlayerModal.style.display = "none";
};
//html2canvas(document.body).then((canvas) => {
// let a = document.createElement("a");
//a.download = "ss.png";
//a.href = canvas.toDataURL("image/png");
//a.click();
//});