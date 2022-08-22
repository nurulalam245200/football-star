function getInputElements(elementId) {
  const getInputElement = document.getElementById(elementId);
  const inputElementString = getInputElement.value;
  const inputElement = parseFloat(inputElementString);
  return inputElement;
}
function clicked(btnId) {
  btnId.disabled = true;
  document.getElementById(btnId).style.disabled;
  alert("Already Selected");
}

function getTextelemnts(elementId) {
  const textElement = document.getElementById(elementId);
  const setTextElement = textElement.innerText;
  return setTextElement;
}
