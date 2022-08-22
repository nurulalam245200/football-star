let TotalPlayer = [];
function addName(Id, btn) {
  const players = document.getElementById(Id).innerText;
  if (players) {
    document.getElementById(btn).style.backgroundColor = "gray";
    document.getElementById(btn).disabled = true;
  }
  TotalPlayer.push(players);

  const topPlayer = document.getElementById("topPlayer");
  const ul = document.createElement("ul");
  for (i = 0; i < TotalPlayer.length; i++) {
    if (TotalPlayer.length < 6) {
      ul.innerHTML = `
        <li>${i + 1} ${TotalPlayer[i]}</li>
        `;
      topPlayer.appendChild(ul);
      const Pqty = TotalPlayer.length;
      getNumber(Pqty);
    }
  }
}
function getNumber(item) {
  return item;
}
