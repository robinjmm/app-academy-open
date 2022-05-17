// Define a function logBetween(lowNum, highNum) that will print every number from lowNum to highNum, inclusive. 
// Inclusive means that the range includes lowNum and highNum.
function logBetween(lowNum, highNum) {
    let index = lowNum;
    while (index <= highNum) {
        console.log(index);
        index += 1;
    }
}

function logBetween(lowNum, highNum) {
    for (let index = lowNum; index <= highNum; index++) {
        console.log(index);
    }
}

logBetween(-1, 2);
logBetween(14, 6);
logBetween(4, 6);


// Write a function printFives(max) that prints out the multiples of 5 that are less than the max.
function printFives(max) {
    for (let i = 0; i < max; i++) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
}

printFives(20);


// Write a function logBetweenStepper(min, max, step) that takes in 3 numbers as parameters.
// The function should print out numbers between min and max at step intervals. See the following examples.
function logBetweenStepper(min, max, step) {
    for (let i = min; i < max; i += step) {
        console.log(i);
    }
}

logBetweenStepper(5, 9, 1);

logBetweenStepper(-10, 15, 5);


// Define a function fizzBuzz(max) that takes a number
// and prints every number from 0 to max (not inclusive) that is divisible by either 3 or 5
// but not both.
function fizzBuzz(max) {
    for (let i = 0; i < max; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i);
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i);
        }
    }
}

fizzBuzz(20); // prints out: 3, 5, 6, 9, 10, 12, 18