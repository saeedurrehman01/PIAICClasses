// // write a program that calculates the area of a rectangle

// var length:number = 5;
// var height:number = 10;
// var area:number = length * height;
// console.log(`Area of Rectangle is ${area}`);

// // Ex-2: Write a program that takes input and calculates the volume of a cube

// var cubeLength:number = 5;
// var cubeVolume:number = cubeLength**3;
// console.log(`Volume of Cube is ${cubeVolume}`);

var readline = require('readline-sync');

var cubelength2:number = readline.question("Enter the Length of a side:");
const cubeVolume2 = cubelength2 **3
console.log(`Volume of cube is ${cubeVolume2}`)

// // Ex-3: Checks if a given number is positive, negative or zero

// var num1:number = -5;
// if (num1 == 0) {
//     console.log("Number is Zero");
// }
// else if (num1 > 0) {
//     console.log("Number is positive");
// }
// else {
//     console.log("Number is negative");
// }

// // Ex-4: Check if a given number is odd or even

// var num2:number = 9;
// if(num2 % 2 == 0) {
//     console.log("Number is Even");
// }
// else {
//     console.log("Number is ODD");
// }

// // Ex-5: If a person if eligible to vote or not based on their age

// var age:number = 17;
// if (age >= 18) {
//     console.log("Person is eligible to vote")
// }
// else {
//     console.log("Person is not eligible to vote")
// }

// // Ex-6: calculate (10+5)*3-2/(4%3)-7
// var solution:number = (10+5)*3-2/(4%3)-7;
// console.log(solution);