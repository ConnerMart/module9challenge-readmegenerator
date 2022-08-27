const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./assets/generateMarkdown");

const questions = [
  "Enter title.",
  "Enter description.",
  "Enter installation instructions.",
  "Enter usage information.",
  "Enter contribution guidelines.",
  "Enter test instructions.",
  "Choose license.",
  "Enter GitHub URL.",
  "Enter email address.",
];

function init() {
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
        choices: [
          "GNU AGPLv3",
          "GNU GPLv3",
          "GNU LGPLv3",
          "Mozilla Public License 2.0",
          "Apache License 2.0",
          "MIT License",
          "Boost Software License 1.0",
          "The Unlicense",
        ],
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
  fs.appendFile(
    "./assets/generatedReadme.md",
    generateMarkdown(responses),
    (err) => (err ? console.error(err) : null)
  );
  console.log("Readme written as generatedReadme.md");
}

// function call to initialize app
init();
