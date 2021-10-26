// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)%5D(https://opensource.org/licenses/MPL-2.0


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Generate a README File 

  What is a README File The Readme file is often the first file which the users read. 
  It is a text file that contains the information for the user about the software, project, code, game, or 
  it might contain instructions, help, or details about the patches or updates.

  ## ${data.license}

  https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)%5D(https://opensource.org/licenses/MPL-2.0
  

Here is my Email

## ${data.logo}

* [License](#license)

* [contribution](#contribution)

*[Tests](#tests)

*[Questions](#questions)

## Installation


# ${data.username}



### ${data.email}

`;
}

module.exports = generateMarkdown;
