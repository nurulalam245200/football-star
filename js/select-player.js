let TotalPlayer = [];
function addName(Id) {
  const players = document.getElementById(Id).innerText;

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
    } else {
      alert("sajdh");
      return TotalPlayer.length;
    }
  }
}

function getNumber(item) {
  return item;
}
