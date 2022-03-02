const Manager = require('../lib/Manager.js');

describe('Manager', () => {
    describe('Init', () => {
        it('should retrieve constructor values for the manager object', () => {
            const manager = new Manager ('jenny', '8675309', 'tommy@twotone.com', '101');
            expect(manager.name).toBe('jenny');
            expect(manager.id).toBe('8675309');
            expect(manager.email).toBe('tommy@twotone.com');
            expect(manager.officeNumber).toBe('101')
            });
            
        it('should retrieve the name from getName method', ()=>{
            const manager = new Manager ('jenny', '8675309', 'tommy@twotone.com', '101');
            expect(manager.getName()).toBe('jenny');
        });
            
        it('should retrieve the id from getId method', ()=>{
            const manager = new Manager ('jenny', '8675309', 'tommy@twotone.com', '101');
            expect(manager.getId()).toBe('8675309');
        });
            
        it('should to retrieve the email from getName method', ()=>{
            const manager = new Manager ('jenny', '8675309', 'tommy@twotone.com', '101');
            expect(manager.getEmail()).toBe('tommy@twotone.com');
        });

        it('should to retrieve the github username from getGithub method', ()=>{
            const manager = new Manager ('jenny', '8675309', 'tommy@twotone.com', '101');
            expect(manager.getOfficeNumber()).toBe('101');
        });
    });
})