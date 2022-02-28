// const  jest = require('jest')
const Employee = require('../lib/Employee.js');

describe('Employee', () => {
    describe('Init', () => {
        it('should retrieve constructor values for the employee object', () => {
            const employee = new Employee ('jenny', '8675309', 'tommy@twotone.com');
            expect(employee.name).toBe('jenny');
            expect(employee.id).toBe('8675309');
            expect(employee.email).toBe('tommy@twotone.com');
            });
            
        it('should retrieve the name from getName method', ()=>{
            const employee = new Employee ('jenny', '8675309', 'tommy@twotone.com');
            expect(employee.getName()).toBe('jenny');
        });
            
        it('should retrieve the id from getId method', ()=>{
            const employee = new Employee ('jenny', '8675309', 'tommy@twotone.com');
            expect(employee.getId()).toBe('8675309');
        });
            
        it('should to retrieve the email from getName method', ()=>{
            const employee = new Employee ('jenny', '8675309', 'tommy@twotone.com');
            expect(employee.getEmail()).toBe('tommy@twotone.com');
        });
    });
})
