let count = document.querySelector(".likes");
let counter = parseInt(count.textContent);

function increaseLike(element) {
  counter++;
  count.innerText = counter;
}
