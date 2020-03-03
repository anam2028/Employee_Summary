const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, name, email, github) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.github = this.github;
      }

      getRole(){
        return "Engineer"
    }
    
    getGithub(){
        return this.getGithub;
    }
 
}
module.exports = Engineer;