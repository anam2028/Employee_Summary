const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.officeNumber = officeNumber;
      }

      getRole(){
        return "Manager"
    }
    
    getOfficeNumber(){
        return this.officeNumber;
    }
 
}
module.exports = Manager;