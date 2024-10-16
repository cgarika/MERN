function changeName() {
  let newName = document.querySelector(".profile-name");
  console.log(newName);
  newName.innerText = "Scarlett Johansson";
}
let counterElement = document.querySelector(".number1");
let counter = parseInt(counterElement.textContent);
console.log(counter);
function removeRequest(element) {
  if (element == ".request-pending-1") {
    document.querySelector(".request-pending-1").remove();
    counter = counter - 1;
    console.log(counter);
    counterElement.innerText = counter;
  } else {
    document.querySelector(".request-pending-2").remove();
    counter = counter - 1;
    counterElement.innerText = counter;
  }
}
