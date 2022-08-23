document
  .getElementById("btn-playerTotal-price")
  .addEventListener("click", function () {
    const perPlayerPrice = getInputElements("per-player-price");

    if (isNaN(perPlayerPrice)) {
      alert("Please give Player Cost In a Number!!");
      document.getElementById("per-player-price").focus();
    } else {
      const totalPlayerPrice = perPlayerPrice * getPlayerQuantity(i);

      const getPreviousTotalPrice =
        document.getElementById("total-player-price");
      getPreviousTotalPrice.innerText = totalPlayerPrice;
    }
  });

document.getElementById("btn-fullCost").addEventListener("click", function () {
  const managePrice = getInputElements("manage-price");
  const coachPrice = getInputElements("coach-price");
  const perPlayerPrice = getInputElements("per-player-price");
  if (isNaN(managePrice)) {
    alert("Please give Manage Amount!!");
    document.getElementById("manage-price").focus();
  } else if (isNaN(coachPrice)) {
    alert("Please give Couch Amount!!");
    document.getElementById("coach-price").focus();
  } else if (isNaN(perPlayerPrice)) {
    alert("Please give Player Amount!!");
    document.getElementById("per-player-price").focus();
  } else {
    const totalPlayerPrice = perPlayerPrice * getPlayerQuantity(i);
    const setTotalCost = document.getElementById("total-cost");
    setTotalCost.innerText = totalPlayerPrice + coachPrice + managePrice;
  }
});
