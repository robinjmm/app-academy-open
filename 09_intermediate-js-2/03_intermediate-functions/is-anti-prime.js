// Write a function isAntiPrime that accepts a number as an argument. 
// The method should return true if the given number has more divisors 
// than all positive numbers less than the given number. 
// For example, 24 is an anti-prime because it has more divisors than any positive number less than 24.

function factors(num) {
    let factors = [];
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i)
        }
    }
    return factors;
}

function isAntiPrime(num) {
    let numFactors = factors(num).length;
    for (let i = 0; i <= num; i++) {
        if (factors(i).length > numFactors) {
            return false
        }
    }
    return true;
}

console.log(isAntiPrime(24))   // true
console.log(isAntiPrime(36))   // true
console.log(isAntiPrime(48))   // true
console.log(isAntiPrime(360))  // true
console.log(isAntiPrime(1260)) // true
console.log(isAntiPrime(27))   // false
console.log(isAntiPrime(5))    // false
console.log(isAntiPrime(100))  // false
console.log(isAntiPrime(136))  // false
console.log(isAntiPrime(1024)) // false