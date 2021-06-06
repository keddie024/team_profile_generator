const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const team = [];
const generateHTML = require("./src/generatehtml");

const createManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the manager's name.",
            validate: data => {
                if (data !== "") {
                    return true
                }
                return "Name not detected. Please enter a name."
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the team manager's ID.",
            validate: data => {
                if (data !== "") {
                    return true
                }
                return "ID not detected. Please enter an ID."
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the team manager's email.",
            validate: data => {
                if (data.match(/\S+@\S+\.\S+/)) {
                    return true
                }
                return "Please enter a valid email address."
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter the team manager's office number.",
            validate: data => {
                if (data !== "") {
                    return true
                }
                return "No number detected. Please enter a number."
            }
        },
        {
            type: "list",
            name: "teamMember",
            message: "Would you like to add another team member?",
            choices: ['Manager', 'Engineer', 'Intern', 'Team Complete. Exit Program.'],
        },

    ]).then((answers) => {
        const manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber
        );
        team.push(manager)
        let Continue = answers.teamMember !== 'Team Complete. Exit Program.';
        let Type = answers.teamMember;

        if (!Continue) {
            writeHTML();
            return;
        }

        while (Continue) {
            if (Type === 'Engineer') {
                createEngineer();
            }
            else if (Type === 'Intern') {
                createIntern();
            }
            else if (Type === 'Manager') {
                createManager();
            }
            return
        }
    });
}

const createEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the engineer's name.",
            validate: data => {
                if (data !== "") {
                    return true
                }
                return "Name not detected. Please enter a name."
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the engineer's ID.",
            validate: data => {
                if (data !== "") {
                    return true
                }
                return "ID not detected. Please enter an ID."
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the engineer's email.",
            validate: data => {
                if (data.match(/\S+@\S+\.\S+/)) {
                    return true
                }
                return "Please enter a valid email address."
            }
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the engineer's GitHub username.",
            validate: data => {
                if (data !== "") {
                    return true
                }
                return "No username detected. Please enter a username."
            }
        },
        {
            type: "list",
            name: "teamMember",
            message: "Would you like to add another team member?",
            choices: ['Manager', 'Engineer', 'Intern', 'Team Complete. Exit Program.'],
        },

    ]).then((answers) => {
        const engineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github
        );
        team.push(engineer)
        let Continue = answers.teamMember !== 'Team Complete. Exit Program.';
        let Type = answers.teamMember;

        if (!Continue) {
            writeHTML();
            return;
        }

        while (Continue) {
            if (Type === 'Engineer') {
                createEngineer();
            }
            else if (Type === 'Intern') {
                createIntern();
            }
            else if (Type === 'Manager') {
                createManager();
            }
            return
        }
    });
}

createManager();

const writeHTML = () => {
    fs.writeFile('index.html', generateHTML(team), (err) =>
        err ? console.log(err) : console.log('Successfully created your team page.'))
}