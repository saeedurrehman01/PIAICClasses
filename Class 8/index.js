"use strict";
// MAP => returns same length array
// Filter => return same length or less
// Foreach => returns nothing
let numbers = [2, 3, 4, 5, 6, 7, 3, 334, 45, 654, 234, 9324];
// let updatedArray = numbers.map((number, index) => {
//   if (number % 2 == 0) {
//     return "Even " + index;
//   } else return "Odd " + index;
// });
// console.log(updatedArray);
// function updatedArray(arr: number[]) {
//   let updatedArray = arr.map(function (data) {
//     if (data < 18) {
//       return 2000;
//     } else return 2023;
//   });
// }
// console.log(updatedArray(numbers));
// let updatedArray = numbers.map((data) => data + 1);
// console.log(updatedArray);
// let updatedArray = numbers.filter((data) => {
//   if (data >= 45) {
//     return true;
//   }
// });
// console.log(updatedArray);
let addNumbers = numbers.filter((item) => {
    if (item % 2 == 0) {
        return true;
    }
});
console.log(addNumbers);
