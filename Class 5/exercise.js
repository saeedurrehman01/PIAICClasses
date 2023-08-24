"use strict";
// - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse
function cToFTemp(temp1) {
    var temp2 = temp1 * (9 / 5) + 32;
    console.log(temp2);
}
cToFTemp(38);
function fToCTemp(temp3) {
    var temp4 = (temp3 - 32) * (5 / 9);
    console.log(temp4);
}
fToCTemp(100.4);
// Write a program using functions that calculates the percentage
function calculatePercentage(obtained, total) {
    var percentage = (obtained / total) * 100;
    console.log(`Percentage is ${percentage}`);
}
calculatePercentage(903, 1100);
