function dismiss(element) {
  document.querySelector(element).remove();
}
function changeImage(element) {
  element.src = "assets/succulents-2.jpg";
}
function changeImageBack(element) {
  element.src = "assets/succulents-1.jpg";
}
function messageText() {
  alert("Your cart is empty");
}
