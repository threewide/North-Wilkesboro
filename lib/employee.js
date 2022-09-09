// Employee Class
class Employee {
    // constructor takes in name, id and email. automatically makes the role value = Employee
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    //get name function
    getName(){
        return this.name;
    }

    //get id function
    getId(){
        return this.id;
    }

    //get email function
    getEmail(){
        return this.email;
    }

    //get role function
    getRole(){
        return this.role;
    }
}

//export Employee for use in other scripts
module.exports = Employee;