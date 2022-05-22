// Write a function nextPrime that accepts a number as an argument. 
// The function should return the nearest prime number that is greater than the given number.

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true;
}

function nextPrime(num) {
    let index = num;
    while (true) {
        index += 1;
        if (isPrime(index)) {
            return index;
        }
    }
}

console.log(nextPrime(2)); // 3
console.log(nextPrime(3)); // 5
console.log(nextPrime(7)); // 11
console.log(nextPrime(8)); // 11
console.log(nextPrime(20)); // 23
console.log(nextPrime(97)); // 101