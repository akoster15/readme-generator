// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;

  switch (license) {
    //is a match, then return the declared license badge
    case "APACHE 2.0":
      licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      return licenseBadge
      
    case "BSD 3":
      licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
      return licenseBadge

    case "ECLIPSE 1.0":
      licenseBadge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
      return licenseBadge

    case "GPL V3":
      licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      return licenseBadge

    case "IBM 1.0":
      licenseBadge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
      return licenseBadge

    case "ISC":
      licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
      return licenseBadge

    case "MIT":
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      return licenseBadge

    //default 
    default:
      licenseBadge = ""
      return licenseBadge  
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch (license) {

    case "APACHE 2.0":
      licenseLink = "https://opensource.org/licenses/Apache-2.0"
      return licenseLink
      
    case "BSD 3":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause"
      return licenseLink

    case "ECLIPSE 1.0":
      licenseLink = "https://opensource.org/licenses/EPL-1.0"
      return licenseLink

    case "GPL V3":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0"
      return licenseLink

    case "IBM 1.0":
      licenseLink = "https://opensource.org/licenses/IPL-1.0"
      return licenseLink

    case "ISC":
      licenseLink = "https://opensource.org/licenses/ISC"
      return licenseLink

    case "MIT":
      licenseLink = "https://opensource.org/licenses/MIT"
      return licenseLink
    //default 
    default:
      licenseLink = ""
      return licenseLink  
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseLink;

  switch (license) {

    case "APACHE 2.0":
      licenseLink = "https://opensource.org/licenses/Apache-2.0"
      return licenseLink
      
    case "BSD 3":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause"
      return licenseLink

    case "ECLIPSE 1.0":
      licenseLink = "https://opensource.org/licenses/EPL-1.0"
      return licenseLink

    case "GPL V3":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0"
      return licenseLink

    case "IBM 1.0":
      licenseLink = "https://opensource.org/licenses/IPL-1.0"
      return licenseLink

    case "ISC":
      licenseLink = "https://opensource.org/licenses/ISC"
      return licenseLink

    case "MIT":
      licenseLink = "https://opensource.org/licenses/MIT"
      return licenseLink
    //default 
    default:
      licenseLink = ""
      return licenseLink  
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Built with](#Built-with)
  * [License](#License)
  * [Contribution](#Contribution)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  ## Installation
  Installation instructions: ${data.installation}
  ## Usage 
  ${data.usage}
  ## Built with
  ${data.tools}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## License 
  This project is licensed under: ${data.license} ${renderLicenseLink(data.license)}
  ### Questions?
  You can visit [GitHub](https://github.com/${data.username})
  For any additional questions you can contact ${data.author} at <${data.email}>
`;
}

module.exports = generateMarkdown;
