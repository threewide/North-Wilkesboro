const inquirer = require('inquirer');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const teamMembers = [];

const managerPrompt = [
    {
        type:'input',
        name:'name',
        message:`Please enter the manager's name: `
    },
    {
        type:'input',
        name:'id',
        message:'manager id: '
    },
    {
        type:'input',
        name:'email',
        message:`manager's email address: `
    },
    {
        type:'input',
        name:'officeNumber',
        message:`manager's office number`
    }
];

inquirer.prompt(managerPrompt).then((response)=>{
    teamMembers.push(new Manager(response.name, response.id, response.email, response.officeNumber));
    console.log(teamMembers);
})


// const bob = new Employee("Bob","high up","bob@mail.com");
// const fred = new Manager("Fred","low","fred@mail.com", 10);
// const steve = new Engineer("Steve","mid","steve@mail.com", "asdf@github.com");
// const bill = new Intern("Bill","lowish","bill@mail.com", "schooling");
// console.log(`${bob.getEmail()} + ${bob.getName()} + ${bob.getRole()}`);
// console.log(`${fred.getEmail()} + ${fred.getName()} + ${fred.getRole()} + ${fred.getOfficeNumber()}`);
// console.log(`${steve.getEmail()} + ${steve.getName()} + ${steve.getRole()} + ${steve.getGithub()}`);
// console.log(`${bill.getEmail()} + ${bill.getName()} + ${bill.getRole()} + ${bill.getSchool()}`);
