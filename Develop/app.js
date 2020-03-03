const Manager = require ("./lib/Manager");
const Engineer = require ("./lib/Engineer");
const Intern = require ("./lib/Intern");

const fs = require("fs");

//create employee, manger 

//create Team

// refer below activity

// inquirer.prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "What is your name?"
//     },
//     {
//       type: "checkbox",
//       message: "What languages do you know?",
//       name: "stack",
//       choices: [
//         "HTML", 
//         "CSS", 
//         "JavaScript", 
//         "MySQL"
//       ]
//     },
//     {
//       type: "list",
//       message: "What is your preferred method of communication?",
//       name: "contact",
//       choices: [
//         "email",
//         "phone",
//         "telekinesis"
//       ]
//     }
//   ]).then(function(data) {
  
//     var filename = data.name.toLowerCase().split(' ').join('') + ".json";
  
//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
  
//       if (err) {
//         return console.log(err);
//       }
  
//       console.log("Success!");
  
//     });
//   });