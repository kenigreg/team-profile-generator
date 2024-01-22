// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
        if (!officeNumber || typeof officeNumber !== "number") { 
            throw new Error("You are missing the office number.");
        }
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        const employeeRole = "Manager";
        return employeeRole;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;