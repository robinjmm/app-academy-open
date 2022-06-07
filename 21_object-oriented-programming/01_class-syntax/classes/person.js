// Your code here

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
    }

    static introducePeople(people) {
        let isInstanceOf = true;

        for (let i = 0; i < people.length; i++) {
            let person = people[i];
            if (!(person instanceof Person)) {
                isInstanceOf = false;
                break;
            }
        }

        if (!Array.isArray(people)) {
            console.log("introducePeople only takes an array as an argument.")
        } else if (!isInstanceOf) {
            console.log("All items in array must be Person class instances.")
        } else {
            people.forEach(person => person.introduce());
        }
    }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
    module.exports = Person;
} catch {
    module.exports = null;
}