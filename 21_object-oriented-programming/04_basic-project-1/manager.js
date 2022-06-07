const Employee = require('./employee');

class Manager extends Employee {

    // Array to hold all employees under a certain manager
    employees = [];

    addEmployee(employee) {
        this.employees.push(employee);
    }

    getEmployeeSalaries() {
        if (!(this instanceof Manager)) {
            console.log("Not a Manager!");
        } else {
            console.log("I'm a manager");
        }
    }
}

module.exports = Manager;