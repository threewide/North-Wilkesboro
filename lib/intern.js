//import Employee
const Employee = require('./employee');

class Intern extends Employee {
    //constructor uses Employee constructor and adds school for Intern
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        //changes .role to intern
        this.role = "Intern";
    }

    //add a get school function
    getSchool(){
        return this.school;
    }
}

//export Intern for use in other scripts
module.exports = Intern;
