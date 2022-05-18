// Write a function logBetweenStepper(min, max, step) that takes in 3 numbers as parameters.
// The function should print out numbers between min and max at step intervals. See the following examples.

function logBetweenStepper(min, max, step) {
    for (let i = min; i < max; i += step) {
        console.log(i);
    }
}

logBetweenStepper(5, 9, 1);

logBetweenStepper(-10, 15, 5);