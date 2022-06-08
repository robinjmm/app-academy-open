const Employee = require('./employee');

class Manager extends Employee {

    constructor(name, salary, title, manager) {
        super(name, salary, title, manager);

        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    salaries = [];

    _totalSubSalary(person = this) {
        let totalSalary = 0;

        for (let i = 0; i < person.employees.length; i++) {
            let employee = person.employees[i];

            if (employee instanceof Manager) {
                totalSalary += employee.salary
            } else {
                totalSalary += employee.salary;
                return totalSalary;
            }
        }

        return totalSalary;
    }
}

module.exports = Manager;