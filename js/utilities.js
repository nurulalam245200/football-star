function getInputElements(elementId) {
  const getInputElement = document.getElementById(elementId);
  const inputElementString = getInputElement.value;
  const inputElement = parseFloat(inputElementString);
  return inputElement;
}
