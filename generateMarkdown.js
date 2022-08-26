// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(responses) {
  let licenseReturn = "";
  if (responses.license === "GNU AGPLv3") {
    licenseReturn = `![GNU AGPLv3](https://img.shields.io/badge/license-GNU%20AGPLv3-blue)`;
  }
  if (responses.license === "GNU GPLv3") {
    licenseReturn = `![GNU GPLv3](https://img.shields.io/badge/license-GNU%20GPLv3-blue)`;
  }
  if (responses.license === "GNU LGPLv3") {
    licenseReturn = `![GNU LGPLv3](https://img.shields.io/badge/license-GNU%20LGPLv3-blue)`;
  }
  if (responses.license === "Mozilla Public License 2.0") {
    licenseReturn = `![Mozilla Public License 2.0](https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-blue)`;
  }
  if (responses.license === "Apache License 2.0") {
    licenseReturn = `![Apache License 2.0](https://img.shields.io/badge/license-Apache%20License%202.0-blue)`;
  }
  if (responses.license === "MIT License") {
    licenseReturn = `![MIT License](https://img.shields.io/badge/license-MIT%20License-blue)`;
  }
  if (responses.license === "Boost Software License 1.0") {
    licenseReturn = `![Boost Software License 1.0](https://img.shields.io/badge/license-Boost%20Software%20License%201.0-blue)`;
  }
  if (responses.license === "The Unlicense") {
    licenseReturn = `![The Unlicense](https://img.shields.io/badge/license-The%20Unlicense-blue)`;
  }
  return licenseReturn;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// DONE: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data)}\n
  # ${data.title}\n
  ## Description\n
  ${data.description}\n
  ## Table of Contents\n
  - [Installation](#installation)\n
  - [Usage](#usage)\n
  - [Contributing](#contributing)\n
  - [Tests](#tests)\n
  - [License](#license)\n
  - [Questions](#questions)\n
  ## Installation\n
  ${data.install}\n
  ## Usage\n
  ${data.usage}\n
  ## Contributing\n
  ${data.contribution}\n
  ## Tests\n
  ${data.test}\n
  ## License\n
  Covered under ${data.license}.\n
  ## Questions\n
  Find me on GitHub: [${data.GitHub}](${data.GitHub})\n
  Or email me: [${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;
// the variable generateMarkdown when used in index.js will be equal to the returned value of the generateMarkdown function above
