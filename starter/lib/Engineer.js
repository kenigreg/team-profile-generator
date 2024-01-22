// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        if (!github || typeof github !== "string") { 
            throw new Error("You are missing the gitHUb username.");
        }

        super(name, id, email)
        this.github = github;
    }

    getGithub() { 
        return this.github;
    }
    
    getRole() {
        const employeeRole = "Engineer";
        return employeeRole;
    }
}

module.exports = Engineer;