// Write a function isOdd that takes in a number as an argument and returns true if the number is odd and returns false otherwise.
// Write two versions of this function, using conditionals (if) and without using conditional

function isOdd(num) {
    if (num % 2 === 0) {
        return false;
    }
    return true;
}

// No if statements
function isOdd2(num) {
    return (num % 2 !== 0);
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true

console.log(isOdd2(2)); // => false
console.log(isOdd2(5)); // => true
console.log(isOdd2(-17)); // => true