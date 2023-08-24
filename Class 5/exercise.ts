// - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse

function cToFTemp(temp1: number) {
  var temp2: number = temp1 * (9 / 5) + 32;
  console.log(temp2);
}

cToFTemp(38);

function fToCTemp(temp3: number) {
  var temp4: number = (temp3 - 32) * (5 / 9);
  console.log(temp4);
}
fToCTemp(100.4);

// Write a program using functions that calculates the percentage

function calculatePercentage(obtained: number, total: number) {
  var percentage: number = (obtained / total) * 100;
  console.log(`Percentage is ${percentage}`);
}

calculatePercentage(903, 1100);
