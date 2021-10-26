// TODO: Include packages needed for this application
var generateMakdown = require("./utils/generateMarkdown");
var fs = require("fs");
var inquirer = require('inquirer');
var path = require('path');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message: "what is the title of your repository?",
        name:"title"
    },{
        type:"input",
        message:"what is your Project name?",
        name:"logo",
    },{
        type:"input",
        message:"what is your GitHub user name?",
        name:"userName",
    },{
        type:"input",
        message:"Please give your Github profile link?",
        name:"GitHub",
    },{
        type:"input",
        message:"What is your email?",
        name:"email",
    },{
        type:"list",
        name:"license",
        message:"please select which license you would like to use?",
        choices : [
            "APACHE 2.O",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "Name"
        ]
        
    }
];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {
    //return fs.writeFile(path.join (fileName, data))


//}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(response)
    {console.log(response)
        console.log('Generating README.md')
       fs.writeToFile('README.md',generateMakdown(response))
    })
}

// Function call to initialize app
init();
