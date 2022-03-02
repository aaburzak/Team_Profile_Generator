const inquirer = require('inquirer');
const Engineer= require('./lib/Engineer.js');
// const employee = new Employee();

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

