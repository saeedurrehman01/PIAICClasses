import inquirer, { Answers, QuestionCollection } from "inquirer";

const questions: QuestionCollection = [
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

var answers: Promise<Answers> = inquirer.prompt(questions);
answers
  .then((answers: Answers) => {
    switch (answers.Operations) {
      case "*":
        console.log(
          `${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`
        );

        break;
      case "+":
        console.log(
          `${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`
        );
      case "-":
        console.log(
          `${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`
        );
      case "/":
        console.log(
          `${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`
        );
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
