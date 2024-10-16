function increaseLike(selector) {
  let counterElement = document.querySelector(selector);
  let counter = parseInt(counterElement.textContent);
  counter++;
  counterElement.textContent = counter;
}
