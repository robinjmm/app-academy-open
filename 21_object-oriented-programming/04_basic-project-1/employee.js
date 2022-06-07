class Employee {
    constructor(name, salary, title, boss) {
        this.name = name;
        this.title = title;
        this.salary = salary;
        this.boss = boss;

        if (boss !== undefined) {
            boss.addEmployee(this);
        }
    }

    salaries = [];

    getSalaries(person) {
        if (person.employees === undefined) {
            return person.salary;
        }

        for (let i = 0; i < person.employees.length; i++) {
            let employee = person.employees[i];
            this.salaries.push(employee.salary)
            this.getSalaries(employee);
        }

        return this.salaries;
    }

    bonus(multiplier) {
        let result = this.getSalaries(this);
        let total;

        if (Array.isArray(result)) {
            let reduced = result.reduce((prev, current) => prev + current);
            total = reduced + this.salary;
        } else {
            total = result;
        }

        return total * multiplier;
    }
}

module.exports = Employee;