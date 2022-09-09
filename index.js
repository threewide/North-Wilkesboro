//import inquirer
const inquirer = require('inquirer');

//import Employee and child classes
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//create an array to hold Employee object imput
const teamMembers = [];

//prompt manager for name, id, email and office number
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

//add the user input to a new Manager object and push it back into the teamMembers array for later use
inquirer.prompt(managerPrompt).then((response)=>{
    teamMembers.push(new Manager(response.name, response.id, response.email, response.officeNumber));
    console.log(teamMembers);
})