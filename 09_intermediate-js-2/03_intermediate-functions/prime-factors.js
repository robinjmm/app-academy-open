// Write a function primeFactors that accepts a number as an argument. 
// The function should return an array containing all of the prime numbers that can divide the given number.

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

function primeFactors(num) {
    let factors = [];
    for (let i = 0; i <= num; i++) {
        if (isPrime(i) && num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
console.log(primeFactors(35));  // [5, 7]
console.log(primeFactors(49));  // [7]
console.log(primeFactors(128)); // [2]