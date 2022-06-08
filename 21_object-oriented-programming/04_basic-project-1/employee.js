class Employee {
    constructor(name, salary, title, manager) {
        this.name = name;
        this.title = title;
        this.salary = salary;

        if (manager === undefined) {
            this.manager = null;
        } else {
            this.manager = manager;
            this.manager.addEmployee(this);
        }
    }

    calculateBonus(multiplier) {
        return this.manager._totalSubSalary(this.manager) * multiplier;
    }
}

module.exports = Employee;