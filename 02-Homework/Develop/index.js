// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
 inquirer.prompt( [
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
        type: 'input',
        name: 'license',
        message: '',
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
    const ReadMePageContent = generateMD(answers);

    fs.writeFile('README.md', ReadMePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });


// TODO: Create a function to write README file
const generateMD = ({ name, discribtion, installation, usage, credits, license, test, github, email}) =>
`<!DOCTYPE md>
  # ${name}

  ## Discription
    ${discribtion}
  
  ## Installation
    ${installation}
  
  ## Usage
    ${usage}
  
  ## Credits
    ${credits}
  
  ## License
    ${license}

  ## Tests
    ${test}
  
  ## Questions? reach out!
      [Github](${github})
      [Click to Email me](${email})
`; 

// TODO: Create a function to initialize app
// const init = () => {
//   promptUser()
//     .then((answers) => fs.writeFileSync('README.md', generateMD(answers)))
//     .then(() => console.log('Successfully created a README file'))
//     .catch((err) => console.error(err));
// };


// Function call to initialize app
init();
