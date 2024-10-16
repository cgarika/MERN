function dismiss(element) {
  document.querySelector(element).remove();
}

function convertToFahrenheit(celsius) {
  return Math.round((celsius * 9) / 5 + 32);
}

function convertToCelsius(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5) / 9);
}

function updateTemperatures(unit) {
  const tempElements = document.querySelectorAll(".tempHigh, .tempLow");

  for (var i = 0; i < tempElements.length; i++) {
    var element = tempElements[i];
    var temp = parseFloat(element.textContent);
    if (unit === "celsius") {
      temp = convertToCelsius(temp);
      element.textContent = temp;
    } else {
      temp = convertToFahrenheit(temp);
      element.textContent = temp;
    }
  }
}

function optionValue(value) {
  updateTemperatures(value);
}
