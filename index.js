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
            name: 'motivation',
            message:'What was your motivation for this project?', 
        },
        {
            type: 'input',
            name: 'purpose',
            message:'Why did you build this project?',    
        },
        {
            type: 'input',
            name: 'install',
            message:'What are the steps required to install your project?', 
        },
        {
            type: 'input',
            name: 'usage',
            message:'How to use your project?',    
        },
        {
            type: 'input',
            name: 'credit',
            message:'Were there any collaborators?',    
        },
        {
            type: 'checkbox',
            name: 'license',
            message:'Is this project licensed?',
            choices    
        },
    ])