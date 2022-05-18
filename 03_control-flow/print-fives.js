// Write a function printFives(max) that prints out the multiples of 5 that are less than the max.

function printFives(max) {
    for (let i = 0; i < max; i++) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
}

printFives(20);