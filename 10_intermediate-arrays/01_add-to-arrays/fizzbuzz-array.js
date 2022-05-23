// Write a function fizzBuzz(max) that accepts a number as an arg. 
// The function should return an array containing all positive numbers 
// less than max that are divisible by either 3 or 5, but not both.

let fizzBuzz = function (max) {
    let factors = [];

    for (let i = 1; i < max; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            factors.push(i);
        } else if (i % 5 === 0 && i % 3 !== 0) {
            factors.push(i);
        }
    }

    return factors;
}

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]