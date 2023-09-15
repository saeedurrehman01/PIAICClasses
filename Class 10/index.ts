// async function print() {
//   console.log("ABC");
// }

// print();

// var a: number = 5;
// var b: number = 4;
// if (a > b) {
//   console.log(a > b);
// }

// console.log("before async code");

// function doSomething() {
//   console.log("Print");
// }

// setTimeout(doSomething, 5000);

// // setInterval(doSomething, 5000);

// // setTimeout(() => {
// //   console.log("Print Something");
// // }, 5000);

// console.log("after async code");

type CarType = { price: number; color: string; startCar: () => number };

class car {
  price: number = 0;
  color: string = "Undefined";
  constructor(color: string, price: number) {
    this.price = price;
    this.color = color;
    console.log("Constructor");
  }

  startCar = () => {
    console.log("StartCar");
    return 10;
  };
}

let carA: CarType = new car("Red", 1000);

let carB: CarType = new car("Blue", 5000);
// carA.color = "Red";
// carA.price = 10000;
carA.startCar();
console.log(carA);
console.log(carB);
