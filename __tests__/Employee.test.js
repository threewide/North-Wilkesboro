const Employee = require('../lib/employee');

const testEmployee = new Employee("Bob","Manager","bobby@fakemail.com");

describe('Employee', () => {
    describe('getEmail', () => {
        it('should return email', () => {
            expect(testEmployee.getEmail()).toEqual("bobby@fakemail.com");
        });
    });
});