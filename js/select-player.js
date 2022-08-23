let totalPlayerList = [];
function addName(Id, btn) {
  const players = document.getElementById(Id).innerText;
  if (players) {
    document.getElementById(btn).style.backgroundColor = "gray";
    document.getElementById(btn).disabled = true;
  }
  totalPlayerList.push(players);

  const topPlayer = document.getElementById("topPlayer");
  const ul = document.createElement("ul");
  for (i = 0; i < totalPlayerList.length; i++) {
    ul.innerHTML = `
        <li>${i + 1} ${totalPlayerList[i]}</li>
        `;
    topPlayer.appendChild(ul);
    const selectedPlayer = totalPlayerList.length;
    getPlayerQuantity(selectedPlayer);
  }
}
