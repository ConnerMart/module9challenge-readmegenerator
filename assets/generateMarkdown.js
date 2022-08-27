// function that returns a license badge based on which license is passed in
// if there is no license, return an empty string
function renderLicenseBadge(responses) {
  let licenseBadgeReturn = "";
  if (responses.license === "GNU AGPLv3") {
    licenseBadgeReturn = `![GNU AGPLv3](https://img.shields.io/badge/license-GNU%20AGPLv3-blue)`;
  }
  if (responses.license === "GNU GPLv3") {
    licenseBadgeReturn = `![GNU GPLv3](https://img.shields.io/badge/license-GNU%20GPLv3-blue)`;
  }
  if (responses.license === "GNU LGPLv3") {
    licenseBadgeReturn = `![GNU LGPLv3](https://img.shields.io/badge/license-GNU%20LGPLv3-blue)`;
  }
  if (responses.license === "Mozilla Public License 2.0") {
    licenseBadgeReturn = `![Mozilla Public License 2.0](https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-blue)`;
  }
  if (responses.license === "Apache License 2.0") {
    licenseBadgeReturn = `![Apache License 2.0](https://img.shields.io/badge/license-Apache%20License%202.0-blue)`;
  }
  if (responses.license === "MIT License") {
    licenseBadgeReturn = `![MIT License](https://img.shields.io/badge/license-MIT%20License-blue)`;
  }
  if (responses.license === "Boost Software License 1.0") {
    licenseBadgeReturn = `![Boost Software License 1.0](https://img.shields.io/badge/license-Boost%20Software%20License%201.0-blue)`;
  }
  if (responses.license === "The Unlicense") {
    licenseBadgeReturn = `![The Unlicense](https://img.shields.io/badge/license-The%20Unlicense-blue)`;
  }
  return licenseBadgeReturn;
}

// function that returns the license link
// if there is no license, return an empty string
function renderLicenseLink(responses) {
  let licenseLinkReturn = "";
  if (responses.license === "GNU AGPLv3") {
    licenseLinkReturn = `[GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)`;
  }
  if (responses.license === "GNU GPLv3") {
    licenseLinkReturn = `[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)`;
  }
  if (responses.license === "GNU LGPLv3") {
    licenseLinkReturn = `[GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)`;
  }
  if (responses.license === "Mozilla Public License 2.0") {
    licenseLinkReturn = `[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)`;
  }
  if (responses.license === "Apache License 2.0") {
    licenseLinkReturn = `[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`;
  }
  if (responses.license === "MIT License") {
    licenseLinkReturn = `[MIT License](https://choosealicense.com/licenses/mit/)`;
  }
  if (responses.license === "Boost Software License 1.0") {
    licenseLinkReturn = `[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)`;
  }
  if (responses.license === "The Unlicense") {
    licenseLinkReturn = `[The Unlicense](https://choosealicense.com/licenses/unlicense/)`;
  }
  return licenseLinkReturn;
}

// function that returns the license section of README
// if there is no license, return an empty string
function renderLicenseSection(responses) {
  let licenseSectionReturn = "";
  if (responses.license === "GNU AGPLv3") {
    licenseSectionReturn = `Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.`;
  }
  if (responses.license === "GNU GPLv3") {
    licenseSectionReturn = `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`;
  }
  if (responses.license === "GNU LGPLv3") {
    licenseSectionReturn = `Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.`;
  }
  if (responses.license === "Mozilla Public License 2.0") {
    licenseSectionReturn = `Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.`;
  }
  if (responses.license === "Apache License 2.0") {
    licenseSectionReturn = `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  }
  if (responses.license === "MIT License") {
    licenseSectionReturn = `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  }
  if (responses.license === "Boost Software License 1.0") {
    licenseSectionReturn = `A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  }
  if (responses.license === "The Unlicense") {
    licenseSectionReturn = `A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  }
  return licenseSectionReturn;
}

// function to generate markdown for README
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
  Covered under ${renderLicenseLink(data)}.\n
  ${renderLicenseSection(data)}\n
  ## Questions\n
  Find me on GitHub: [${data.GitHub}](${data.GitHub})\n
  Or email me: [${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;
// the variable generateMarkdown when used in index.js will be equal to the returned value of the generateMarkdown function above
