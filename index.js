#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "SecondNumber" },
    { message: "Sellect one of the opreaters to perform action", type: "list", name: "opreater",
        choices: ["Addition", "Subraction", "Multiplication", "Division"],
    }
]);
//condition statemen
if (answer.opreater === "Addition") {
    console.log(answer.firstNumber + answer.SecondNumber);
}
else if (answer.opreater === "subtracton") {
    console.log(answer.firstNumber - answer.SecondNumber);
}
else if (answer.opreater === "Multiplication") {
    console.log(answer.firstNumber * answer.SecondNumber);
}
else if (answer.opreater === "Division") {
    console.log(answer.firstNumber / answer.SecondNumber);
}
else {
    console.log("please sellect valid opreater");
}
