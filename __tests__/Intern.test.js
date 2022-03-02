const Intern = require('../lib/Intern.js');

describe('Intern', () => {
    describe('Init', () => {
        it('should retrieve constructor values for the intern object', () => {
            const intern = new Intern ('jenny', '8675309', 'tommy@twotone.com', 'Hard Knocks');
            expect(intern.name).toBe('jenny');
            expect(intern.id).toBe('8675309');
            expect(intern.email).toBe('tommy@twotone.com');
            expect(intern.school).toBe('Hard Knocks');
            });
            
        it('should retrieve the name from getName method', ()=>{
            const intern = new Intern ('jenny', '8675309', 'tommy@twotone.com', 'Hard Knocks');
            expect(intern.getName()).toBe('jenny');
        });
            
        it('should retrieve the id from getId method', ()=>{
            const intern = new Intern ('jenny', '8675309', 'tommy@twotone.com', 'Hard Knocks');
            expect(intern.getId()).toBe('8675309');
        });
            
        it('should to retrieve the email from getName method', ()=>{
            const intern = new Intern ('jenny', '8675309', 'tommy@twotone.com', 'Hard Knocks');
            expect(intern.getEmail()).toBe('tommy@twotone.com');
        });

        it('should to retrieve the github username from getGithub method', ()=>{
            const intern = new Intern ('jenny', '8675309', 'tommy@twotone.com', 'Hard Knocks');
            expect(intern.getSchool()).toBe('Hard Knocks');
        });
    });
})