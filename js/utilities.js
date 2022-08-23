/*all common function*/
//get Input element Function
function getInputElements(elementId) {
  const getInputElement = document.getElementById(elementId);
  const inputElementString = getInputElement.value;
  const inputElement = parseFloat(inputElementString);
  return inputElement;
}
//only take Player list

function getPlayerQuantity(topPlayers) {
  return topPlayers;
}
