// Arrays

// let rollNumber: number[] = [10, 20, 30, 40, 50];
// let sum: number = rollNumber[1] + rollNumber[4];
// console.log(sum);

// let names: string[] = ["Saeed", "Sayyam", "Zain"];
// console.log(names);

// names.push("Irzam"); // Adds the value at the end.
// console.log(names);

// names.pop(); //Removes the element from the end
// console.log(names);

// names.unshift("Ali"); // Add the value at the Start
// console.log(names);

// names.shift(); // Removes the value from the start
// console.log(names);

// //let names: string[] = ["Saeed", "Sayyam", "Zain", lkjasd, jkasd, jkasd, jasd ];
// names.splice(2, 0, "Janab"); // (index number, num of elements you want to delete, the element you want to add)
// console.log(names);

// let num1 = ["saeed", "Sayyam", 1, 2, "Sarwar", "Zain"];
// // num1.splice(1, 5, 22);
// // console.log(num1);

// let num2 = num1.length - 1;
// console.log(num2);

// let todos: string[] = ["class", "Lunch", "Work", "Dinner"];

// todos.splice(4, 0, "Outing");

// console.log(todos);

// let todos: string[] = [
//   "Wake Up",
//   "Breakfast",
//   "Work",
//   "Lunch",
//   "Class",
//   "Dinner"
// ];

// if (todos.length % 2 !== 0) {
//   todos.splice(Math.round(todos.length / 2), 1);
// } else {
//   todos.splice(((todos.length / 2)-1), 2);
// }
// console.log(todos);

// -----------------------------------------------------

// LOOPS

// let num1: any = [];
// for (let i: number = 0; i <= 10; i++) {
//   num1.push(`${i} Eggs`);
// }
// console.log(num1);

// let num1: any = [];
// let i: number = 0;
// while (i <= 10) {
//   num1.push(`${i} Eggs`);
//   i++;
// }
// console.log(num1);

// let i: number = 1;
// while (i <= 5) {
//   console.log("Hello World");
//   i++;
// }

let i: number = 1;
while (i <= 10) {
  console.log(`5 x ${i} = ${i * 5}`);
  i++;
}
