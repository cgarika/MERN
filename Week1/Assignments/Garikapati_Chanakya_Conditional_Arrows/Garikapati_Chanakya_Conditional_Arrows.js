//Problem 1

/* Write an arrow function that checks to see if a user is older than 18.
If they are older than 18, the output should be:
"You are good to go!"
If they are not older than 18, the output should be:
"Sorry! You must be 18 or older!"
The conditional logic should be written with a ternary operator. */

var age = 24;
const ageChecker = (givenAge) =>
  givenAge >= 18 ? "You are good to go" : "Sorry! You must be 18 or older!";
console.log(ageChecker(age));

//problem 2

/* Write an arrow function that checks to see if it is currently raining.
If it is raining, the output should be:
"Get your rain jacket!"
If it is not raining, the output should be:
"No rain on today's forecast!"
The conditional logic should be written with a ternary operator. */

var weather = "raining";
const weatherCheck = (currentWeather) =>
  currentWeather == "raining"
    ? "Get your rain jacket "
    : "No rain on today's forecast!";
console.log(weatherCheck(weather));

//problem 3

/* Write an arrow function that checks to see if a number is even.
If it is even, the output should be:
"That's an even number!"
If it is not even, the output should be:
"That's an odd number!"
The conditional logic should be written with a ternary operator. */

var number = 24;
const evenNumberCheck = (givenNumber) =>
  givenNumber % 2 == 0 ? "That's an even number!" : "That's an odd number!";
console.log(evenNumberCheck(number));

//problem 4

/* Write an arrow function that takes in two parameters and checks whether one number is greater than another.
If the number is greater, the output should be:
"<<NUMBER HERE>> is more than <<SECOND NUMBER HERE>>!"
If the number is less than the other number, the output should be:
"<<NUMBER HERE>> is less than <<SECOND NUMBER HERE>>!"
The conditional logic should be written with a ternary operator. */

var number = 20;
var number2 = 25;
const numberComparision = (num1, num2) =>
  num1 > num2
    ? `${num1} is greater than ${num2}`
    : `${num2} is greater than ${num1}`;
console.log(numberComparision(number, number2));
