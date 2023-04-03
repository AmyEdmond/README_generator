// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `![License:${license}](http://img.shields.io/badge/license-${license}-blue.svg)`;
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
    return `https://www.apache.org/licenses/`;
  }
  if (license === "BSD3") {
    return `https://opensource.org/license/bsd-3-clause/`;
  }
  if (license === "LGPL") {
    return `https://www.gnu.org/licenses/lgpl-3.0.en.html`;
  }
  if (license === "MIT") {
    return `https://lbesson.mit-license.org/`;
  } else {
    return "";
  }
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return "";
  } else {
    return `## License
  This project is license under: [${license}](renderLicenseLink(license))`;
  }
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description
  ${data.description}

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributions](#contributions)
  * [Test](#tests)
  * [Questions](#questions)
  
## Installation
  ${data.installation}

## Usage
  ${data.usage}

## Credits
  ${data.credits}

  ${renderLicenseSection(data.license)}

## Contributions
  ${data.contributions}

## Tests
  ${data.tests}

## Questions
  If you have any questions about this project, you can reach me at: 
  * GitHub: [${data.github}](https://www.github.com/${data.github})
  * Email: [${data.email}](${data.email})

`;
}

module.exports = generateMarkdown;
