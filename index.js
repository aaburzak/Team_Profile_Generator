const inquirer = require('inquirer');
const Engineer= require('./lib/Engineer.js');
const Manager= require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');

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
    })

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
        name: "officeNumber",
        message:"Please enter the employee's office number"
    },
])
.then(({name, id, email, officeNumber}) => {
const manager = new Manager (name,id, email, officeNumber )
console.log (manager)
})

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
})
