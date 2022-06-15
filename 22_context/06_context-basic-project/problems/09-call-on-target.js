function callOnTarget(func, obj1, obj2) {
    // Your code here
    let boundFunc = func.bind(obj1, obj2);
    return boundFunc();
}


// TEST #1:
const cat = {
    name: "Breakfast"
};

const mouse = {
    name: "Jerry"
};

function greet(other) {
    return "I'm " + this.name + ". Nice to meet you, " + other.name;
}

console.log(callOnTarget(greet, cat, mouse));


// TEST #2:
const dog = {
    name: "Noodles",
    chase: function (animal) {
        return "Woof, my name is " + this.name + " and I'm chasing " + animal.name;
    }
};

console.log(callOnTarget(dog.chase, cat, dog));
// "Woof, my name is Breakfast and I'm chasing Noodles"

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;