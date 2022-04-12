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