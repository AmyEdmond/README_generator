// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// An array of questions for user input
const questions = () => inquirer.prompt([
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
        choices: ['Apache', 'BSD3', 'LGPL', 'MIT'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please list your collaborators, if any, and include links to their Github profiles.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please write tests for your application and provide examples on how to run them here.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Please provide your GitHub username.',
        name: 'GitHub',
    },
    {
        type: 'input',
        message: 'Please provide your email address.',
        name: 'email',
    },
    

]);


// A function to write README file
.then((response) =>{
    fs.writeFile('README.md', data, error => error 
    ? console.error('Error!')
    : console.log('Your professional README is now generated!'))
   

});

// TODO: Create a function to initialize app
function init() {
    .then(data => {
        return generateMarkdown(data);
    })
}

// Function call to initialize app
init();
