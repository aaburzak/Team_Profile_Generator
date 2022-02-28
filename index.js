const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
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
        }
    ])
    .then(({name, id, email}) => {
    const employee = new Employee(name,id, email)
    console.log (employee)
    })

