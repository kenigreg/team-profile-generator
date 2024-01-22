const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Employee object array varaible initialized
const employeeObject = [];

const managerQuestions = [
    {
        type: 'input',
        message: 'What is the name of the employee?',
        name: 'employeename',
    },
    {
        type: 'input',
        message: 'What is the Employee ID?',
        name: 'employeeid',
    },
    {
        type: 'input',
        message: 'What is the Employee email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the Office number?',
        name: 'officenumber',
    },
    {
        type: 'list',
        message: 'Please select an option?',
        name: 'role',
        choices: ["Add an engineer", "Add an intern", "Finish building the team"],
    },
   
];

const engineerQuestions = [
    {
        type: 'input',
        message: "What is the Engineer's name?",
        name: 'engineername',
    },
    {
        type: 'input',
        message: "What is the Engineer's ID?",
        name: 'engineerid',
    },
    {
        type: 'input',
        message: "What is the Engineer's email address?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the Engineer's GitHub username?",
        name: 'githubusername',
    },
]

const internQuestions = [
    {
        type: 'input',
        message: "What is the Intern's name?",
        name: 'internname',
    },
    {
        type: 'input',
        message: "What is the Intern's ID?",
        name: 'internid',
    },
    {
        type: 'input',
        message: "What is the Intern's email address?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the Intern's school?",
        name: 'school',
    },
]

// function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Success!')
    })
   
}

// function to implement Manager profile
function managerProfile() {
    inquirer
        .prompt(managerQuestions)
        .then((response) => {
            Object.keys(response).length === managerQuestions.length ? console.log('Success') : console.log('You forgot to complete some sections!');

            const { employeename, employeeid, email, officenumber} = response;
            const manager = new Manager(employeename, employeeid, email, officenumber)
            employeeObject.push(manager);

            if (response.role === "Add an engineer") {
                engineerProfile();
            } else if (response.role === "Add an intern") {
                internProfile();
            } else {
                
            }
            
        })
}

// function to implement Engineer profile
function engineerProfile() {
    inquirer
        .prompt(engineerQuestions)
        .then((response) => {
        
    })
}
     
// function to implement Intern profile
function internProfile() {
    inquirer
        .prompt(internQuestions)
        .then((response) => {
        
    })
}

// function call to initialize Manager profile
managerProfile();