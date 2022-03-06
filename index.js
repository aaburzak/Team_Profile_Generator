const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "index.html");
const Engineer= require('./lib/Engineer.js');
const Manager= require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const siteGen = require('./src/siteGen.js');
const roster = [];

//starts the application
selectRole()

//allows user to choose which employee role they want to input
function selectRole(){
    inquirer.prompt([
            {
                type: "list",
                name: "role",
                message:"What is the role of the employee?",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern"
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

//collects user information on Manager role through prompts, then pushes information to the roster array and sends user to confirm completion
function newManager(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please start with the Team Manager's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the manager's employee id number:"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the manager's e-mail address:"
        },
        {
            type: "input",
            name: "office",
            message:"Please enter the manager's office number"
        },
    ])
    .then(({name, id, email, office}) => {
    const manager = new Manager (name,id, email, office)
    console.log (manager)
    roster.push(manager)
    completeCheck()
    })
}

//collects user information on Engineer role through prompts, then pushes information to the roster array and sends user to confirm completion
function newEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the engineer's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the engineer's employee id number:"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the engineer's e-mail address:"
        },
        {
            type: "input",
            name: "github",
            message:"Please enter the engineer's github username"
        },
    ])
    .then(({name, id, email, github}) => {
    const engineer = new Engineer(name,id, email, github)
    console.log (engineer)
    roster.push(engineer)
    completeCheck()
    })
}

//collects user information on Intern role through prompts, then pushes information to the roster array and sends user to confirm completion
function newIntern (){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the intern's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the intern's employee id number:"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the intern's e-mail address:"
        },
        {
            type: "input",
            name: "school",
            message:"Please enter the name of the intern's school:"
        },
    ])
    .then(({name, id, email, school}) => {
    const intern = new Intern (name,id, email, school)
    console.log (intern)
    roster.push(intern)
    completeCheck()
    })
}

//confirms if the user is finished adding team members, sends them to selectRole() if not finished, builds the team based of roster array if they are finshed
function completeCheck(){
    inquirer.prompt([
        {
            type: "list",
            name : "complete",
            message: "Is the team complete?",
            choices: [
                "No (add another team member)",
                "Yes (build my team!)"
            ]
        }
    ])
    .then(({complete}) => {
        if (complete === "Yes (build my team!)"){
            generateHtml()
        }else {
            selectRole()
        }
    })
}

//creates pathway to siteGen.js and sends the team roster to siteGen.js to build the html
function generateHtml(){
    console.log("Team Build Successful!");

    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, siteGen(roster), "utf-8");
};
