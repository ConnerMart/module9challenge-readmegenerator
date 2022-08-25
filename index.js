const inquirer = require("inquirer");
const fs = require("fs");

// DONE: Include packages needed for this application

// DONE: Create an array of questions for user input
const questions = [
  "Enter title.",
  "Enter description.",
  "Enter installation instructions.",
  "Enter usage information.",
  "Enter contribution guidelines.",
  "Enter test instructions.",
  "Choose license.",
  "Enter GitHub username.",
  "Enter email address.",
];

function collectData() {
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "title",
      },
      {
        type: "input",
        message: questions[1],
        name: "description",
      },
      {
        type: "input",
        message: questions[2],
        name: "install",
      },
      {
        type: "input",
        message: questions[3],
        name: "usage",
      },
      {
        type: "input",
        message: questions[4],
        name: "contribution",
      },
      {
        type: "input",
        message: questions[5],
        name: "test",
      },
      {
        type: "list",
        message: questions[6],
        choices: ["one", "two"],
        name: "license",
      },
      {
        type: "input",
        message: questions[7],
        name: "GitHub",
      },
      {
        type: "input",
        message: questions[8],
        name: "email",
      },
    ])
    .then((responses) => {
      fs.appendFile(
        "myreadme.md",
        `# ${responses.title}

      ## Description
      
      ${responses.description}
      
      ## Table of Contents
      
      ## Installation
      
      ${responses.install}
      
      ## Usage
      
      ${responses.usage}
      
      ## Contributing
      
      ${responses.contribution}
      
      ## Tests
      
      ${responses.test}
      
      ## License
      
      ${responses.license}
      
      ## Questions
      
      Find me on GitHub: ${responses.GitHub}
      
      Or email me: ${responses.email}
      `,
        (err) => (err ? console.error(err) : null)
      );
      console.log("Readme written!");
    });
}

collectData();
// console.log(userDescription);
// console.log(input.GitHub);
// .then(console.log(responses));

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// function writeFile(input) {
//   fs.appendFile("myreadme.md", `TODOcontenthere`, (err) =>
//     err ? console.error(err) : null
//   );
//   console.log(input.GitHub);
//   //   console.log("Readme generated!");
// }

// function init() {
//   var collectedResponse = collectData();
//   writeFile(collectedResponse);
// }

// // Function call to initialize app
// init();
