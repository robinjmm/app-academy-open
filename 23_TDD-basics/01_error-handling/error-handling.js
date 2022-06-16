// 1.
function sum(array) {
    let sum = 0;
    try {
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
    } catch (error) {
        if (error instanceof TypeError) {
            console.log("Function argument is not of type array.");
        } else {
            console.log(error.message);
        }
    }
    return sum;
}

let res = sum(null);
console.log(res);


// 2.
// tests
sayName("Alex");
sayName(1);

// Your code here
function sayName(str) {
    try {
        if (typeof str !== "string") {
            throw new Error("Invalid name! Must be a string!");
        } else {
            console.log(str);
        }
    } catch (error) {
        console.error(`${error.name}: ${error.message}`);
    }
}


// 3.
function greet(greeting) {
    try {
        if (!greeting) {
            throw new Error("There was no greeting given.");
        } else {
            console.log(greeting);
        }
    } catch (error) {
        console.log("Hello World!");
    }
}

greet();