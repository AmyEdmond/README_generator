// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// An array of questions for user input
const questions = [
    
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description of your project',
        name: 'description',
    }, 
    {
        type: 'input',
        message: 'Please provide a step by step instruction of how to install your project.',
        name: 'installation',
    }, 
    {
        type: 'input',
        message: 'Please provide instructions and examples for use. Include screenshots as needed.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please list your collaborators, if any, and include links to their Github profiles.',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Please choose the license for your project in the list below.',
        choices: ['Apache', 'BSD3', 'LGPL', 'MIT', 'None'],
        name: 'license',

    },
    {
        type: 'input',
        message: 'How can others contribute to your project?',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'Please write tests for your application and provide examples on how to run them here.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Please provide your GitHub username.',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please provide your email address.',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please provide a readme file name to be generated.',
        name: 'name',
    },
    

];


// A function to write README file
function writeToFile(data) {
    fs.writeFile(`${data.name}.md`, generateMarkdown(data), error => error 
    ? console.error('Error!')
    : console.log('Your professional README is now generated!'))
   

};

// A function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log('Generating README...');
        writeToFile(data);
    });
};    

// Function call to initialize app
init();
