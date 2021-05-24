// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

inquirer
// TODO: Create an array of questions for user input
const questions = 
[
    {
        type: 'input',
        name: 'userName',
        message: "What is your GitHub username?",
        validate: userNameInput => {
            if (userNameInput) {
                return true;
            }
            else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'titleName',
        message: "What is the title of your GitHub repository?",
        validate: titleNameInput => {
            if (titleNameInput) {
                return true;
            }
            else {
                console.log('You need to enter the title of the repo!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'projectName',
        message: 'What is the title of your project?',
        validate: projectNameInput => {
            if (projectNameInput) {
                return true;
            }
            else {
                console.log('You need to enter project title!');
                return false;
            }
        }
    },
    
    {
        type: 'input',
        name: 'projectDescription',
        message: "Write a description of your project.",
        validate: projectDescriptionInput => {
            if (projectDescriptionInput) {
                return true;
            }
            else {
                console.log('You need to add a description of the project!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'projectInstall',
        message: 'If applicable, How did you install your project?',
        validate: projectInstallInput => {
            if (projectInstallInput) {
                return true;
            }
            else {
                console.log('You need to input your installation for your project, if applicable!');
                return false
            }
        }
    },

    {
        type:'input',
        name: "instructionsHow",
        message: 'If applicable, add instructions',
        validate: instructionHowInput => {
            if (instructionHowInput) {
                return true;
            }
            else {
                console.log('You need to put instructions!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'furtherProj',
        message: 'How can developers further this project?',
        validate: furtherProjInput => {
            if (furtherProjInput) {
                return true;
            }
            else {
                console.log('You need to put how developers can help further the project!');
                return false;
            }
        }
    },

 //What License is user using?
    {
        type: 'list',
        name: 'chooseLicenseBox',
        message: 'Please choose a license for your project.',
        choices: ['GNU', 'MIT', 'Bitbucket', 'IBM', 'Boost', 'Open-Source'],
        validate: chooseLicenseBox => {
            if (chooseLicenseBox) {
                return true;
            }
            else {
                console.log('Choose a license from the list!');
                return false;
            }
        }
    }
];
    
    // TODO: Create a function to write README file
    function writeToFile(fileName, data) {
        fs.writeToFile(fileName, data, (err) => {
            if (err)
                throw err;
                console.log('Great! Data transferred to the README!')
        });
    };
    
    // TODO: Create a function to initialize app
    function init() {
        inquirer.prompt(questions)
        .then(function(Input) {
            console.log(Input)
            writeToFile("README.md", generateMarkdown(Input));
        });
    };
    
    // Function call to initialize app
    init();

