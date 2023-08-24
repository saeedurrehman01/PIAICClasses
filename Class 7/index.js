"use strict";
// // var i: number = 0;
// // while (i < 10) {
// //   console.log(`${i} Eggs`);
// //   i++;
// // }
// var i: number = 1;
// var result: number = i++;
// console.log(`result ${result}`);
// console.log(`i ${i}`);
// var i: number = 1;
// do {
//   console.log("i", +i);
//   i++;
// } while (i < 10);
// - Write a TS program that calculates the sum of even numbers between 1 and 100.
// let i: number = 1;
// let result: number = 0;
// while (i <= 100) {
//   if (i % 2 == 0) {
//     result += i;
//   }
//   i++;
// }
// console.log(`Result = ${result}`);
// - Write a TS program that calculates the sum of even numbers between 1 and 100 and list all the even numbers that participate in sum calculation. Print the list along with sum.
// let i: number = 1;
// var sumArray: number[] = [];
// let result: number = 0;
// while (i <= 100) {
//   if (i % 2 == 0) {
//     sumArray.push(i);
//     result += i;
//   }
//   i++;
// }
// console.log(
//   `Result is ${result} and the numbers that participated are [${sumArray}]`
// );
// Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return
// the sum of all the numbers in the array.
// function sumArray(numArray: number[]) {
//   let i: number = 0;
//   let j: number = 0;
//   while (i < numArray.length) {
//     // j = j + numArray[i]
//     j += numArray[i];
//     i++;
//   }
//   console.log("The sum of numbers is ", j);
// }
// sumArray([1, 2, 3, 4, 10]);
// Create a function that takes a positive integar as parameter and uses a while loop to calculate and return
// the factorial of that number
function numFactorial(num1) {
    var i = 1;
    var j = 1;
    while (i <= num1) {
        j *= i;
        i++;
    }
    return j;
}
console.log(numFactorial(10));
