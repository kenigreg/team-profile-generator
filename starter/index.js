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

// Inquirer prompt questions for Manager profile
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
        validate(value) {
            const pass = value.match(/^[0-9]*$/);
            if (pass) {
              return true;
            }
      
            return 'Please enter a valid number for Employee ID';
          },
    },
    {
        type: 'input',
        message: 'What is the Employee email address?',
        name: 'email',
        validate(value) {
            const pass = value.match(
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            );
            if (pass) {
              return true;
            }
      
            return 'Please enter a valid email address';
          },
    },
    {
        type: 'input',
        message: 'What is the Office number?',
        name: 'officenumber',
        validate(value) {
            const pass = value.match(/^[0-9]*$/);
            if (pass) {
              return true;
            }
      
            return 'Please enter a valid office number';
          },
    },
    {
        type: 'list',
        message: 'Please select an option?',
        name: 'role',
        choices: ["Add an engineer", "Add an intern", "Finish building the team"],
    },
   
];

// Inquirer prompt questions for Engineer profile
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
        validate(value) {
            const pass = value.match(/^[0-9]*$/);
            if (pass) {
              return true;
            }
      
            return 'Please enter a valid number for Engineer ID';
          },
    },
    {
        type: 'input',
        message: "What is the Engineer's email address?",
        name: 'email',
        validate(value) {
            const pass = value.match(
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            );
            if (pass) {
              return true;
            }
      
            return 'Please enter a valid email address';
          },
    },
    {
        type: 'input',
        message: "What is the Engineer's GitHub username?",
        name: 'githubusername',
    },
]

// Inquirer prompt questions for Intern profile
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
        validate(value) {
            const pass = value.match(/^[0-9]*$/);
            if (pass) {
              return true;
            }
      
            return 'Please enter a valid number for Intern ID';
          },
    },
    {
        type: 'input',
        message: "What is the Intern's email address?",
        name: 'email',
        validate(value) {
            const pass = value.match(
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            );
            if (pass) {
              return true;
            }
      
            return 'Please enter a valid email address';
          },
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
            console.log(response.role);

            if (response.role === "Add an engineer") {
                engineerProfile();
            } else if (response.role === "Add an intern") {
                internProfile();
            } else {
                if(employeeObject.length !== 0){
                    const myAnswer = render(employeeObject);
                    writeToFile('team.html', myAnswer);
                }
            }
            
        })
}

// function to implement Engineer profile
function engineerProfile() {
    inquirer
        .prompt(engineerQuestions)
        .then((response) => {
            Object.keys(response).length === engineerQuestions.length ? console.log('Success') : console.log('You forgot to complete some sections!');

            const { engineername, engineerid, email, githubusername} = response;
            const engineer = new Engineer(engineername, engineerid, email, githubusername)
            employeeObject.push(engineer);

                if(employeeObject.length !== 0){
                    const myAnswer = render(employeeObject);
                    writeToFile('team.html', myAnswer);
                }
        
    })
}
     
// function to implement Intern profile
function internProfile() {
    inquirer
        .prompt(internQuestions)
        .then((response) => {
            Object.keys(response).length === internQuestions.length ? console.log('Success') : console.log('You forgot to complete some sections!');

            const { internname, internid, email, school} = response;
            const intern = new Intern(internname, internid, email, school)
            employeeObject.push(intern);

            if(employeeObject.length !== 0){
                const myAnswer = render(employeeObject);
                writeToFile('team.html', myAnswer);
            }
        
    })
}

// function call to initialize Manager profile
managerProfile();