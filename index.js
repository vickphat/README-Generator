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
            message: 'Write a brief summary of your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is your project used for?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Were there any collaborators for this project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'How did you test your project?',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Is this project licensed?',
            choices: ['MIT License', 'Apache License 2.0', 'GNU AGPLv3', 'The Unlicense'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
    ])
    .then((data) => {
        const readMeFile = readMe(data);

        fs.writeFile('README.md', readMeFile, (err) =>
            err ? console.log(err) : console.log('Successfully created README file!')
        );
    });

var readMe = data => {
    return `# ${data.title}

# Table of Contents 

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contribution](#contribution)
5. [License](#license)
6. [Questions](#questions)
    
## Description: 
${data.description}

## Installation: 
${data.installation}

## Usage: 
${data.usage}

## License: 
${data.license}

## Contribution: 
${data.collaborators}

## Testing: 
${data.test}

## Questions: 
If there are any questions that you may have, please contact me by the following:

    * Github: [${data.github}](https://github.com/${data.github})
    * Email: ${data.email} `;
    
}
 
