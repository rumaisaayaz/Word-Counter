#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const userprompt = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.bold.yellowBright("Type your sentence to determine the word count: ")
    }
]);
let numofwords = userprompt.Sentence.trim().split(" ");
console.log(chalk.bold.greenBright(`The word count of your sentence is: ${numofwords.length}.`));
