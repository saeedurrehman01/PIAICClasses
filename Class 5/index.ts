//Write a program that calculates sum of two number using function

/*function sumOf2Numbers(num1: number, num2: number) {
  //   var num1: number = 20;
  //   var num2: number = 30;
  var result: number = num1 + num2;
  console.log(`Result = ${result}`);
}

sumOf2Numbers(20, 30);

sumOf2Numbers(100, 50);

function printConsole() {
  console.log("1");
  console.log("2");
  console.log("3");
  console.log("4");
  console.log("5");
  console.log("6");
  console.log("7");
  console.log("8");
  console.log("9");
  console.log("10");
}

printConsole();
*/

//Write a program that calculates sum of two number using function and add number 5 in result after calculation

var resultSum: number = sumOf2Numbers(10, 20);
console.log(resultSum);

function sumOf2Numbers(num1: number, num2: number): number {
  // var num1: number = 20;
  // var num2: number = 30;
  var result: number = num1 + num2;
  return result;
}

// var sumResult: number = sumOf2Numbers(10, 20);
// sumResult += 5;
// console.log(`Result is ${sumResult}`);
// //Write a program that calculates sum of two number using function and add number 40 in result after calculation

// var sumResult2: number = sumOf2Numbers(20, 30);
// sumResult2 += 40;
// console.log(`Result is ${sumResult2}`);

// -----------------------------------------------------------------

// Arrow Function

var sumArrow = (num3: number, num4: number): number => {
  //   var num3: number = 50;
  //   var num4: number = 50;
  var result: number = num3 + num4;
  //   console.log(`Result is ${result}`);
  return result;
};

var sumResult3: number = sumArrow(50, 50);
console.log(`Result is ${sumResult3}`);
