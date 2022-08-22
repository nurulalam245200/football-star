document
  .getElementById("btn-playerTotal-price")
  .addEventListener("click", function () {
    const perPlayerPrice = getInputElements("per-player-price");

    const totalPlayerPrice = perPlayerPrice * 5;

    const getPreviousTotalPrice = document.getElementById("total-player-price");
    const previousTotalPriceString = getPreviousTotalPrice.innerText;
    const previousTotalPrice = parseFloat(previousTotalPriceString);

    getPreviousTotalPrice.innerText = totalPlayerPrice + previousTotalPrice;
  });

document.getElementById("btn-fullCost").addEventListener("click", function () {
  const managePrice = getInputElements("manage-price");

  const coachPrice = getInputElements("coach-price");

  const perPlayerPrice = getInputElements("per-player-price");

  const totalPlayerPrice = perPlayerPrice * 5;

  const setTotalCost = document.getElementById("total-cost");
  setTotalCost.innerText = totalPlayerPrice + coachPrice + managePrice;
});
