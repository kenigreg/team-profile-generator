// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        if (!school || typeof school !== "string") { 
            throw new Error("You are missing the school name.");
        }

        super(name, id, email)
        this.school = school;
    }

    getSchool() { 
        return this.school;
    }
    
    getRole() {
        const employeeRole = "Intern";
        return employeeRole;
    }
}

module.exports = Intern;