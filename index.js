const inquirer = require('inquirer');
const fs = require('fs');
const Engineer= require('./lib/Engineer.js');
const Manager= require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const roster = [];

newManager()

function newManager(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Welcome to team generator!  Please start with the Team Manager's name:"
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
    newEngineer()
    })
}

function newEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Next up is the Engineer!  Please enter the engineer's name:"
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
    newIntern()
    })
}

function newIntern (){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Finally the Intern.  Please enter the intern's name:"
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
    generateHtml()
    })
}

function generateHtml(){
    fs.writeFile('index.html',
    
`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equivx="X-UA-Compatible" content="ie=edge" />
        <title>New Team</title>
    </head>
    <body>
        <div>
            <h1>Manager</h1>
            <p>Name: ${roster[0].name}</p>
            <p>Employee Id: ${roster[0].id}</p>
            <p>Email: <a href="mailto:${roster[0].email}">${roster[0].email}</a></p>
            <p>Office: ${roster[0].office}</p>
        </div>
        <div>
            <h1>Engineer</h1>
            <p>Name: ${roster[1].name}</p>
            <p>Employee Id: ${roster[1].id}</p>
            <p>Email: <a href="mailto:${roster[1].email}">${roster[1].email}</a></p>
            <p>GitHub: <a href="https://github.com/${roster[1].github}"> ${roster[1].github}</a></p>
        </div>
        <div>
            <h1>Intern</h1>
            <p>Name: ${roster[2].name}</p>
            <p>Employee Id: ${roster[2].id}</p>
            <p>Email: <a href="mailto:${roster[2].email}">${roster[2].email}</a></p>
            <p>School: ${roster[2].school}</p>
        </div>
    </body>
`,
(err) => err ? console.error(err) : console.log('Successfully Generated HTML!'))
};


// selectRole()

// function selectRole(){
//     inquirer.prompt([
//             {
//                 type: "list",
//                 name: "role",
//                 message:"What is the role of the employee?",
//                 choices: [
//                     "Intern",
//                     "Engineer",
//                     "Manager",
//                 ]
//             },
//         ])
//         .then(({role}) => {
//             if (role === "Intern"){
//                 newIntern()
//             } else if (role === "Engineer") {
//                 newEngineer()
//             } else {
//                 newManager()
//             }
//         })
// }

// function completeCheck(){
//     inquirer.prompt([
//         {
//             type: "list",
//             name : "complete",
//             message: "Is the team complete?",
//             choices: [
//                 "Yes",
//                 "No (add another team member)"
//             ]
//         }
//     ])
//     .then(({complete}) => {
//         if (complete === "Yes"){
//             console.log("Finished")
//         }else {
//             selectRole()
//         }
//     })
// }