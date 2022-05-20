// Write a function printFives(max) that prints out the multiples of 5 that are less than max.

function printFives(max) {
    for (let i = 0; i < max; i++) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
}
// Example:

printFives(20) // prints out:
// 0
// 5
// 10
// 15