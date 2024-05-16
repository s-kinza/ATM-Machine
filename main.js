#! /usr/bin/env node
import inquirer from 'inquirer';
let myBalance = 5000; //Dollar
let myPin = 4455;
// print to welcome message
console.log("Welcome to Code with Kinza - ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin code",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is Correct, Login Successfully!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Select an Operation:",
            type: "list",
            choices: ["Withdraw Amount", "Check Balance",]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "Amount",
                message: "Enter the Amount of Withdraw",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        //*=, -=, +=,
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} Withdraw successfully`);
        console.log(`your remaining balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your account balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}
