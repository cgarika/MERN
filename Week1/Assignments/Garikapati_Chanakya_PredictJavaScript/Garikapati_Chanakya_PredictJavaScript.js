//Problem 1

const cars = ["Tesla", "Mercedes", "Honda"];
const [randomCar] = cars;
const [, otherRandomCar] = cars;
//Predict the output
console.log(randomCar);
console.log(otherRandomCar);

// In the above problem we see cars array
//line 4 will assign the value of cars[0] to random cars this is called destructuring
//line 5 will assign the value of cars[1] to otherRandomCar. Using , will skip the first value
//Line 7 will print Tesla
//line 8 will print Mercedes

//Problem 2
const employee = {
  employeeName: "Elon",
  age: 47,
  company: "Tesla",
};
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName);
console.log(employeeName);

//This is an problem of object destructuring
//line 17 to 21 is a object declaration
//line 22 will copy the employeeName from employee object to otherName
//line 24 will print Elon
//line 25 will error out in the run time since employee name not declared directly as variable. since employeeName is a property

//problem 3
const person = {
  name: "Phil Smith",
  age: 47,
  height: "6 feet",
};
const password = "12345";
const { password: hashedPassword } = person;
//Predict the output
console.log(password);
console.log(hashedPassword);

//This is another problem for destructuring
//line 34 to line 38 is person object
//line 39 has variable which is declared and assigned with value "12345"
//line 40 is to extract a password property from the person object and assign it to a new variable called hashedPassword
//line 42 prints 12345
//line 43 will be returned undefined since it has not be assigned with any value

//problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
//Predict the output
console.log(first === second);
console.log(first === third);

//This is a problem related to array destructuring
//line 54 destructuring happens where number[1] is assigned to first , asks the compiler to skip the first value in the array
//line 55 number[3] is assigned to second
//line 56 number[8] is assigned to third
//line 58 comparison happens for value in first variable and value in second variable which returns false since 2!=5
//line 59 comparison happens for value in first variable and value in third variable which returns true since 2 === 2

//problem 5
const lastTest = {
  key: "value",
  secondKey: [1, 5, 1, 8, 3, 3],
};
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//This is a problem related to object destructuring
//line 69 to line 72 is a lastTest object
//line 73 key is destructured from lastTest object
//line 74 secondKey is destructured from lastTest object
//line 75 array destructuring happens on secondkey where willThisWork is assigned with secondKey[1]
//line 78 will print key which is Value
//line 79 will print secondKey which is [1, 5, 1, 8, 3, 3]
//line 80 will print secondKey[0] which is 1
//line 81 will print secondKey[1] which is 5

//problem 6
var beatles = ["Paul", "George", "John", "Ringo"];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
      console.log(name + " was found at index " + index);
    }
    console.log("name and index after loop is " + name + ":" + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);

//line 93 beatles array is declared and assigned
//line 94 printNames function is written which takes parameter names
//line 95 actuallyPrintNames function is written which does't have any parameters
//line 96 for loop is declared where the loop run till length of the array -1
//line 97 variable name is declared and initialized with names[index] through out until the loop condition fails
//line 98 is a console log which prints the value from the array and the index of it
//line 99 loops ends
//line 100 this is another console log which prints the name from the array and its index when the loop condition fails
//line 102 function call happens for the nested function
//line 104 function call for primary function
//Output: Paul was found at index 0
//George was found at index 1
//John was found at index 2
//Ringo was found at index 3
//name and index after loop is Ringo:4

//problem 7
function actuallyPrintingNames() {
  for (let index = 0; index < names.length; index++) {
    let name = names[index];
    console.log(name + " was found at index " + index);
  }
  console.log("name and index after loop is " + name + ":" + index);
}

//line 123 function is declared which is not parametrized
//line 124 loop is declared and initialized which has condition to run the length of array -1
//line 125 name variable is declared and initialized
//line 126 is a console log which prints the value from the array and the index of it
//line 128 this is another console log which prints the name from the array and its index when the loop condition fails
//output: This will not do anything since there is no function call

//problem 8
const beatles = ["Paul", "George", "John", "Ringo"];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(name + " was found at index " + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);

//line 139 beatles array is declared and assigned
//line 140 printNames function is written which takes parameter names
//line 141 actuallyPrintNames function is written which does't have any parameters
//line 142 for loop is declared where the loop run till length of the array -1
//line 143 variable name is declared and initialized with names[index] through out until the loop condition fails
//line 144 is a console log which prints the value from the array and the index of it
//line 145 loops ends
//line 147 function call happens for the nested function
//line 149 function call for primary function
//Output: Paul was found at index 0
//George was found at index 1
//John was found at index 2
//Ringo was found at index 3

//problem 9
const planet = {
  name: "Jupiter",
  milesFromSun: 49849,
  mass: 393983,
  composition: ["gas", "liquid", "oxygen"],
};
const planetCopy = { ...planet };
console.log(planet.composition[0] === planetCopy.composition[0]);
console.log(planet === planetCopy);

//This is a problem of object destructuring
//line 166 to line 171 planet object with different properties inside it
//line 172 which creates creates a shallow copy of the planet object. This means that all the properties from planet are copied into a new object planetCopy
//line 173 we are comparing the first element ("gas") of the composition array from both planet and planetCopy. Composition array is the same in both objects (because of the shallow copy), the elements are identical, so the result will be true.
//line 174 This checks whether planet and planetCopy are the same object in memory. Even though planetCopy is a copy of planet, they are different objects (different references), so the result will be false
