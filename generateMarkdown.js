// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// DONE: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
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
  ## Tests\n${data.test}\n
  ## License\n${data.license}\n
  ## Questions\nFind me on GitHub: ${data.GitHub}\n
  Or email me: ${data.email}`;
}
// TODO: make GitHub and email working links

module.exports = generateMarkdown;

// the variable generateMarkdown in the other function will be equal to the returned value of the generateMarkdown function above ??
