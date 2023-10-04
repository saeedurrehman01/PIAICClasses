"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function print() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("ABC");
    });
}
print();
var a = 5;
var b = 4;
if (a > b) {
    console.log(a > b);
}
console.log("before async code");
function doSomething() {
    console.log("Print");
}
setTimeout(doSomething, 5000);
// setInterval(doSomething, 1000);
setTimeout(() => {
    console.log("Print Something");
}, 5000);
console.log("after async code");
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
console.log("Before Async");
function promiseFunction(resolve, reject) {
    // async
    if (true) {
        resolve("Successfullll");
    }
    else {
        reject("Something went wrong");
    }
}
const result = new Promise(promiseFunction);
result
    .then((Success) => {
    console.log("Success", Success);
})
    .catch((Reject) => {
    console.log("reject", Reject);
});
console.log("After Async");
