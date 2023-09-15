"use strict";
// async function print() {
//   console.log("ABC");
// }
class car {
    constructor(color, price) {
        this.price = 0;
        this.color = "Undefined";
        this.startCar = () => {
            console.log("StartCar");
            return 10;
        };
        this.price = price;
        this.color = color;
        console.log("Constructor");
    }
}
let carA = new car("Red", 1000);
let carB = new car("Blue", 5000);
// carA.color = "Red";
// carA.price = 10000;
carA.startCar();
console.log(carA);
console.log(carB);
