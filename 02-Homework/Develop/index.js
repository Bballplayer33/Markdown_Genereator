// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
 inquirer
  .prompt( [
    {
        type: 'input',
        name: 'name',
        message: 'What is your Projects Title?',
      },
      {
        type: 'input',
        name: 'discribtion',
        message: 'Write a good discribtion for your Project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions or examples for use.',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Have any collaborators? Please list them here.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose your license',
        choices: ['Apache 2.0', 'MIT', 'Mozilla', 'IBM', 'None']
      },
      {
        type: 'input',
        name: 'test',
        message: 'Did you test yet? Please provide examples here.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please Enter your Email',
      },
   ])
   .then((answers) => {
    const ReadMePageContent = generateMarkdown(answers);

    fs.writeFile('README.md', ReadMePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README file!')
    );
  });


// TODO: Create a function to write README file


// TODO: Create a function to initialize app
// const init = () => {
//   promptUser()
//     .then((answers) => fs.writeFileSync('README.md', generateMD(answers)))
//     .then(() => console.log('Successfully created a README file'))
//     .catch((err) => console.error(err));
// };


// Function call to initialize app
//init();
