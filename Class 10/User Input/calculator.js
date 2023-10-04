"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const questions = [
    {
        name: "num1",
        type: "number",
        message: "What is your Num1?: ",
    },
    {
        name: "num2",
        type: "input",
        message: "What is your Num2?: ",
    },
    {
        name: "Operations",
        type: "list",
        message: "Choose Operation: ",
        choices: ["+", "-", "*", "/", "^2"],
    },
];
var answers = inquirer_1.default.prompt(questions);
answers
    .then((answers) => {
    switch (answers.Operations) {
        case "*":
            console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`);
            break;
        case "+":
            console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
        case "-":
            console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
        case "/":
            console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
        case "^2":
            console.log(`${answers.num1} ^2 = ${answers.num1 * answers.num1}`);
        default:
            break;
    }
    // console.log(answers);
})
    .catch((err) => {
    console.log("Something is wrong.");
});
