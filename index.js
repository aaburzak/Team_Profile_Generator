const inquirer = require('inquirer');
const fs = require('fs');
const Engineer= require('./lib/Engineer.js');
const Manager= require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');

selectRole()

function selectRole(){
    inquirer.prompt([
            {
                type: "list",
                name: "role",
                message:"What is the role of the employee?",
                choices: [
                    "Intern",
                    "Engineer",
                    "Manager",
                ]
            },
        ])
        .then(({role}) => {
            if (role === "Intern"){
                newIntern()
            } else if (role === "Engineer") {
                newEngineer()
            } else {
                newManager()
            }
        })
}

function newIntern (){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the employee's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the employee's id number:"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the employee's e-mail address:"
        },
        {
            type: "input",
            name: "school",
            message:"Please enter the name of the employee's school:"
        },
    ])
    .then(({name, id, email, school}) => {
    const intern = new Intern (name,id, email, school )
    console.log (intern)
    completeCheck()
    })
}

function newEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the employee's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the employee's id number:"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the employee's e-mail address:"
        },
        {
            type: "input",
            name: "github",
            message:"Please enter the employee's github username"
        },
    ])
    .then(({name, id, email, github}) => {
    const engineer = new Engineer(name,id, email, github)
    console.log (engineer)
    completeCheck()
    })
}

function newManager(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the employee's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the employee's id number:"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the employee's e-mail address:"
        },
        {
            type: "input",
            name: "office",
            message:"Please enter the employee's office number"
        },
    ])
    .then(({name, id, email, office}) => {
    const manager = new Manager (name,id, email, office)
    console.log (manager)
    completeCheck()
    })
}

function completeCheck(){
    inquirer.prompt([
        {
            type: "list",
            name : "complete",
            message: "Is the team complete?",
            choices: [
                "Yes",
                "No (add another team member)"
            ]
        }
    ])
    .then(({complete}) => {
        if (complete === "Yes"){
            console.log("Finished")
        }else {
            selectRole()
        }
    })
}
