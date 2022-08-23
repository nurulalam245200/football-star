let totalPlayerList = [];
function addName(Id, btn) {
  const players = document.getElementById(Id).innerText;
  totalPlayerList.push(players);

  const topPlayer = document.getElementById("topPlayer");
  const ul = document.createElement("ul");

  const selectedPlayer = totalPlayerList.length;

  if (selectedPlayer <= 5) {
    if (players) {
      document.getElementById(btn).style.backgroundColor = "gray";
      document.getElementById(btn).disabled = true;
    }
    for (i = 0; i < totalPlayerList.length; i++) {
      ul.innerHTML = `
        <li>${i + 1} ${totalPlayerList[i]}</li>`;
      topPlayer.appendChild(ul);
    }
    getPlayerQuantity(selectedPlayer);
  }
  if (selectedPlayer > 5) {
    window.alert("You have Select Only 5 Players");
  }
}
