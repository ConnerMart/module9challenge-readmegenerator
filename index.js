const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

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

function collectResponses() {
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
      writeFile(responses);
    });
}

function writeFile(responses) {
  fs.appendFile("myreadme.md", generateMarkdown(responses), (err) =>
    err ? console.error(err) : null
  );
  console.log("Readme written as myreadme.md");
}

collectResponses();

// and put collect into init()?

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// function init() {}
// init();
// // Function call to initialize app
