//import Employee
const Employee = require('./employee');

class Engineer extends Employee {
    //constructor uses Employee constructor and adds github for Engineer
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        //changes .role to Engineer
        this.role = "Engineer";
    }

    //add a get git hub function
    getGithub(){
        return this.github;
    }
}

//export Engineer for use in other scripts
module.exports = Engineer;
