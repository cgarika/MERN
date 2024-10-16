function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');




function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);



function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);



var pieces = 12;
var people = 6;

var x = pieces/people;

console.log(x);

console.log("CodingDojo".length);