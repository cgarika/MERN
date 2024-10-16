
//Predict 1

function myBirthYearFunc(){  //name of the function is myBirthYearFunc. After the function is called it enter the block
    console.log("I was born in" + 1980); // I was born in 1980 is printed
}
myBirthYearFunc(); //Execution starts here where the function is called


//Predict 2

//name of the function is myBirthYearFunc which has variable birthYearInput. After the function is called it enter the block
function myBirthYearFunc(birthYearInput){ 
    console.log("I was born in" + birthYearInput); // I was born in 1980 is printed
}
myBirthYearFunc(1980);  ////Execution starts here where the function is called and 1980 is passed to variable birthYearInput


//Predict 3

function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1); //num1 = 10
    console.log("num2 is: " + num2); //num2 = 20
    var sum = num1 + num2; //sum = 10+20 = 30
    console.log(sum); //console will print 30
}
add(10, 20);