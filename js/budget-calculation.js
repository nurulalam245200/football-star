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
  const getManagePrice = document.getElementById("manage-price");
  const managePriceString = getManagePrice.value;
  const managePrice = parseFloat(managePriceString);

  const getCoachPrice = document.getElementById("coach-price");
  const coachPriceString = getCoachPrice.value;
  const coachPrice = parseFloat(coachPriceString);

  const getPerPlayerPrice = document.getElementById("per-player-price");
  const perPlayerPriceString = getPerPlayerPrice.value;
  const perPlayerPrice = parseFloat(perPlayerPriceString);

  const totalPlayerPrice = perPlayerPrice * 5;

  const setTotalCost = document.getElementById("total-cost");
  setTotalCost.innerText = totalPlayerPrice + coachPrice + managePrice;
});
