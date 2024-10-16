// /* Print 1-255
// print1To255()
// Print all the integers from 1 to 255.  */

// function print1To255()
// {
//     for(let i=1;i<=255;i++)
//         {
//             console.log(i)
//         }
// }

// print1To255();

// /* 2. Print Odds 1-255
// printOdds1To255()
// Print all odd integers from 1 to 255.  */

// function printOdds1To255()
// {
//     for(let i=1;i<=255;i+=1)
//         {
//             if(i%2 !==0)
//                 {
//                     console.log(i)
//                 }
//         }
// }

// printOdds1To255();

/* Print Ints and Sum 0-255
printIntsAndSum0To255()
Print integers from 0 to 255, and with each integer print the sum so far. */

// function printIntsAndSum0To255()
// {
   
//     for(let i =1;i<=255;i++)
//         {
//             if(i>0)
//                 {
//                     sum = sum+i;
//                     console.log("number");
//                     console.log(i);
//                     console.log("sum");
//                     console.log(sum);
//                 } 
//         }
// }

// let sum =0;
// printIntsAndSum0To255();

/* Iterate and Print Array
printArrayVals(arr)
Iterate through a given array, printing each value.  */

// function printArrayVals(arr)
// {
//     for(let i=0;i<arr.length;i++)
//         {
//             console.log(arr[i]);
//         }
// }

// let arr = [1,2,3,4,5];
// printArrayVals(arr);


/* Find and Print Max
printMaxOfArray(arr)
Given an array, find and print its largest element.  */

function printMaxOfArray(arr)
{
    for(let i=0;i<arr.length;i++)
        {
            if(max < arr[i])
                {
                    max = arr[i];
                }
        }
        console.log(max);
}

let max=0;
let arr = [24,43,23,56,22,83,34];
printMaxOfArray(arr);
