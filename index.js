// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    { 
        type: 'input',
        message: 'What is your name?',
        name: 'author',
      },

    {
        type: 'input',
        message:'What is the title of your project?',
        name: 'title',
      },

    {
        type: 'input',
        message:'Please write a brief description of your project:',
        name: 'description',
      },

      {
        type: 'input',
        message:'What command should be run to install dependencies?',
        name: 'installation',
      },

      {
        type: 'input',
        message:'What should the user know about using the repo?',
        name: 'usage',
      },

      {
        type: 'input',
        message:'What does the user need to know about contributing to the repo?',
        name: 'contribution',
      },

      {
        type: 'input',
        message:'What command should be run to run tests?',
        name: 'tests',
      },  

    {
        type: 'list',
        message: 'What kind of license do you want for your project?',
        name: 'license',
        choices: ['APACHE 2.0','BSD 3', 'ECLIPSE 1.0','GPL V3','IBM 1.0', 'ISC','MIT','N/A'],
      },

    {
        type: 'input',
        message:'What is your GitHub username?',
        name: 'username',
      },

    {
        type: 'input',
        message:'What is your email address?',
        name: 'email',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log('Success! Information transferred to README.')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile('README.md', generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
