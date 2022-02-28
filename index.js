const inquirer = require('inquirer');
const Employee = require('lib/Employee');
const employee = new Employee();

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
    employee(name,id, email)
    })

