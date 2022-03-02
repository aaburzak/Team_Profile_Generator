const Engineer = require('../lib/Engineer.js');

describe('Engineer', () => {
    describe('Init', () => {
        it('should retrieve constructor values for the engineer object', () => {
            const engineer = new Engineer ('jenny', '8675309', 'tommy@twotone.com', 'jtTone');
            expect(engineer.name).toBe('jenny');
            expect(engineer.id).toBe('8675309');
            expect(engineer.email).toBe('tommy@twotone.com');
            expect(engineer.github).toBe('jtTone')
            });
            
        it('should retrieve the name from getName method', ()=>{
            const engineer = new Engineer ('jenny', '8675309', 'tommy@twotone.com', 'jtTone');
            expect(engineer.getName()).toBe('jenny');
        });
            
        it('should retrieve the id from getId method', ()=>{
            const engineer = new Engineer ('jenny', '8675309', 'tommy@twotone.com', 'jtTone');
            expect(engineer.getId()).toBe('8675309');
        });
            
        it('should to retrieve the email from getName method', ()=>{
            const engineer = new Engineer ('jenny', '8675309', 'tommy@twotone.com', 'jtTone');
            expect(engineer.getEmail()).toBe('tommy@twotone.com');
        });

        it('should to retrieve the github username from getGithub method', ()=>{
            const engineer = new Engineer ('jenny', '8675309', 'tommy@twotone.com', 'jtTone');
            expect(engineer.getGithub()).toBe('jtTone');
        });
    });
})