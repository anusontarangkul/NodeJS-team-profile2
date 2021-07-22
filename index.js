const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const htmlTemplate_src = require('./src/html-template');
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
            message: `Enter the manager's email address:`,
            validate: function (input) {
                let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
                return valid ? true : false
            }
        },
        {
            type: 'text',
            name: 'officeNumber',
            message: `Enter the manager's office number:`,
            validate: function (input) {
                return (!isNaN(input) && input) ? true : false;
            }
        }
        ])
        .then(data => {
            console.log(data);
            const { name, id, email, officeNumber } = data;
            let manager = new Manager(name, id, email, officeNumber)
            console.log('manager added')
            console.log(manager)

            teamData.push(manager);
            console.log('team')
            console.log(teamData)
            console.log(teamData[0].constructor.name)
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
                    generateTeam(teamData);
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
            message: `Enter the engineer's email address:`,
            validate: function (input) {
                let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
                return valid ? true : false
            }
        },
        {
            type: 'text',
            name: 'github',
            message: `Enter the engineer's github:`,
            validate: function (input) {
                return input ? true : false;
            }
        }
        ])
        .then(data => {
            console.log(data);
            const { name, id, email, github } = data;
            let engineer = new Engineer(name, id, email, github)
            teamData.push(engineer)
            console.log('team')
            console.log(teamData)
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
            message: `Enter the intern's email address:`,
            validate: function (input) {
                let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
                return valid ? true : false
            }
        },
        {
            type: 'text',
            name: 'school',
            message: `Enter the intern's school:`,
            validate: function (input) {
                return input ? true : false;
            }
        }
        ])
        .then(data => {
            console.log(data);
            const { name, id, email, school } = data;
            let intern = new Intern(name, id, email, school)
            teamData.push(intern)
            console.log('team')
            console.log(teamData)
            menu()
        })

}

const generateTeam = array => {
    console.log('generate')
    console.log(array)
    htmlTemplate_src(array)
    const dataIndex = htmlTemplate_src(array);
    fs.writeFileSync('./dist/index.html', dataIndex, 'utf-8', err => {
        if (err) {
            console.log(err);
        } else {
            console.log('file successfully created');
        }
    })
}

getInput()
