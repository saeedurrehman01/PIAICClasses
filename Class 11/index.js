import inquirer from "inquirer";
console.log("1st");
async function uploadUser() {
    await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Enter 1st Number",
        },
    ]);
    await inquirer.prompt([
        {
            name: "num2",
            type: "number",
            message: "Enter 2nd Number",
        },
    ]);
    console.log("2nd");
}
uploadUser();
console.log("3rd");
