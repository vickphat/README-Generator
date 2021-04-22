const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message:'Write a brief summary of your project',    
        },
        {
            type: 'input',
            name: 'installation',
            message:'What are the steps required to install your project?', 
        },
        {
            type: 'input',
            name: 'usage',
            message:'What is your project used for?',    
        },
        {
            type: 'input',
            name: 'collaborators',
            message:'Were there any collaborators for this project?',    
        },
        {
            type: 'input',
            name: 'test',
            message:'How did you test your project?',    
        },
        {
            type: 'checkbox',
            name: 'license',
            message:'Is this project licensed?',
            choices: ['MIT License', 'Apache License 2.0', 'GNU AGPLv3', 'The Unlicense'],
        },
        {
            type: 'input',
            name: 'github',
            message:'What is your GitHub username?',    
        },
        {
            type: 'input',
            name: 'email',
            message:'What is your email?',    
        },
    ])