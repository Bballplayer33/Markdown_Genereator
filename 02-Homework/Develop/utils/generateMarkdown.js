// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'Apache 2.0' :
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
  }
  switch(license){
    case 'MIT' :
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  }
  switch(license){
    case 'Mozilla' :
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
  }
  switch(license){
    case 'IBM' :
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]`;
  }
  switch(license){
    case 'None' :
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return '';
  }
  else {
    return ` * [License](#license)
    `
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  }
  else {
    return ` ## License
    ${license}`
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { name, discribtion, installation, usage, credits, license, test, github, email} = data
  return `# ${name}
  ${renderLicenseBadge(license)}

  ## Discription
    ${discribtion}

  ##Table of Contents
    * [Install](#install)
    * [Usage](#usage)
    * ${renderLicenseLink}
    * [contribute](#contribute)
    * [Test](#test)
  
  
  ## Installation
    ${installation}
  
  ## Usage
    ${usage}
  
  ## Credits
    ${credits}
  
  ${renderLicenseSection(license)}

  ## Tests
    ${test}
  
  ## Questions? Reach out!
      [Github](https://github.com/${github})
      [Click to Email me](mailto:https://${email})
`;
};


module.exports = generateMarkdown;
