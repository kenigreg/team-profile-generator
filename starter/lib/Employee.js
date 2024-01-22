// TODO: Write code to define and export the Employee class

class Employee {    
    constructor(name, id, email) {
        if (!name || typeof name !== "string") { 
            throw new Error("You are missing the name.");
        }
        if (!id || typeof id !== "number") { 
            throw new Error("You are missing the number.");
        }
        if (!email || !email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) { 
            throw new Error("Please provide a correct email address.");
        }
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() { 
        return this.name;
    }
    
    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;

    }
    getRole() {
        const employeeRole = "Employee";
        return employeeRole;
    }
}

module.exports = Employee;