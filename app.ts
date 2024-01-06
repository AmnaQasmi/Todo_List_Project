#! /usr/bin/env node
//// Todo_List_Project ////

import inquirer from "inquirer";

let todos: string[] = [];
let loop = true

while (loop) {
    const answers:
        {
            TODO: string,
            addmore: boolean
        } = await inquirer.prompt([
            {
                type: "input",
                name: "TODO",
                message: "What do you want to add in your TODO ?"
            },
            {
                type: "confirm",
                name: "addmore",
                message: "Do you want to add more todos In your TODO list ?",
                default: false
            },
        ])
    const { TODO, addmore } = answers;
    loop = addmore;
    console.log(answers);
    if (TODO) {
        todos.push(TODO);
    } else {
        console.log("Kindly enter the valid input 😔");
    };
}
console.log(todos); 
