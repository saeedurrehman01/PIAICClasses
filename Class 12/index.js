"use strict";
var num = 10;
var userName = "Naveed Sarwar";
var isCompleted = true;
let isNull = null;
let isUndefined = undefined;
let isVoid = undefined;
let newArr = [13, "Hello", true];
let newContact = {
    name: "Saeed",
    email: "saeedrehman@gmail.com",
    contact: 32145,
    message: "abcd",
};
console.log(newContact);
// Enum
var COLORS;
(function (COLORS) {
    COLORS[COLORS["RED"] = 0] = "RED";
    COLORS[COLORS["GREEN"] = 1] = "GREEN";
    COLORS[COLORS["BLUE"] = 2] = "BLUE";
})(COLORS || (COLORS = {}));
const whatColor = COLORS.BLUE;
console.log(whatColor);
var USERROLE;
(function (USERROLE) {
    USERROLE[USERROLE["ADMIN"] = 0] = "ADMIN";
    USERROLE[USERROLE["USER"] = 1] = "USER";
})(USERROLE || (USERROLE = {}));
let newAdmin = {
    role: USERROLE.ADMIN,
    name: "Saeed",
};
let newUser = {
    role: USERROLE.USER,
    name: "Ali",
};
function swap(arr) {
    return [arr[1], arr[0]];
}
// let input: boolean[] = [true, false];
const result1 = swap([true, false]);
const result2 = swap([0, 1]);
const result3 = swap(["Saeed", "Ur Rehman"]);
console.log(result1);
console.log(result2);
console.log(result3);
