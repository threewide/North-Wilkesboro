//import Employee
const Employee = require('./employee');

class Manager extends Employee {
    //constructor uses Employee constructor and adds officeNumber for Manager
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
        //changes .role to Manager
        this.role = "Manager";
    }

      //add a get office number function
      getOfficeNumber(){
        return this.officeNumber;
    }
}

//export Manager for use in other scripts
module.exports = Manager;