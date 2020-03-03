const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id, name, email, school) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.school = this.school;
      }

      getRole(){
        return "Intern"
    }
    
    getSchool(){
        return this.getSchool;
    }
 
}
module.exports = Intern;