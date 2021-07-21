const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const htmlTemplate_src = require('./src/html-template');
const generateHTML_utils = require('./utils/generate.html');
let teamData = [];



const getInput = () => {
    console.log(`Let's create your team!`);
    console.log(`The first step is to create your manager`);

    getManager();

}

const getManager = () => {
    inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: `Enter the manager's name:`,
            validate: function (input) {
                return input ? true : false;
            }
        },
        {
            type: 'text',
            name: 'id',
            message: `Enter the manager's Id:`,
            validate: function (input) {
                return (!isNaN(input) && input) ? true : false;
            }
        },
        {
            type: 'text',
            name: 'email',
            message: `Enter the manager's email address:`
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: `Enter the manager's office number`
        }
        ])
        .then(data => {
            console.log(data);
            const { name, id, email, officeNumber } = data;
            let manager = new Manager(name, id, email, officeNumber)
            console.log(manager)
            menu()
        })
}

const menu = () => {
    inquirer
        .prompt({
            type: 'list',
            name: 'member',
            message: 'Who would you like to add to the team?',
            choices: ['Engineer', 'Intern', 'No More Team Members']
        })
        .then(data => {
            const { member } = data;
            console.log(member)
            switch (member) {
                case 'Engineer':
                    getEngineer();
                    break;
                case 'Intern':
                    getIntern();
                    break;
                case 'No More Team Members':
                    const text = htmlTemplate_src()
                    generateTeam(text);
                    break;
            }
        })
}

const getEngineer = () => {
    inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: `Enter the engineer's name:`,
            validate: function (input) {
                return input ? true : false;
            }
        },
        {
            type: 'text',
            name: 'id',
            message: `Enter the engineer's Id:`,
            validate: function (input) {
                return (!isNaN(input) && input) ? true : false;
            }
        },
        {
            type: 'text',
            name: 'email',
            message: `Enter the engineer's email address:`
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: `Enter the engineer's github`
        }
        ])
        .then(data => {
            console.log(data);
            const { name, id, email, github } = data;
            let engineer = new Engineer(name, id, email, github)
            teamData.push(engineer)
            menu()
        })
}

const getIntern = () => {
    inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: `Enter the intern's name:`,
            validate: function (input) {
                return input ? true : false;
            }
        },
        {
            type: 'text',
            name: 'id',
            message: `Enter the intern's Id:`,
            validate: function (input) {
                return (!isNaN(input) && input) ? true : false;
            }
        },
        {
            type: 'text',
            name: 'email',
            message: `Enter the intern's email address:`
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: `Enter the intern's github`
        }
        ])
        .then(data => {
            console.log(data);
            const { name, id, email, school } = data;
            let intern = new Intern(name, id, email, school)
            teamData.push(intern)
            menu()
        })

}

const generateTeam = (content) => {
    console.log('generate')
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', content, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'file created'
            })
        })
    })
}

getInput()