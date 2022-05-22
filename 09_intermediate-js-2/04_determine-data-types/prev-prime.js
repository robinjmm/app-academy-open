// Write a function prevPrime that accepts a number as an argument.
// The function should return the nearest prime number that is smaller than the given argument.
// Since 2 is the smallest prime number, return null if no number can be returned.

function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function prevPrime(num) {
    if (num <= 2) {
        return null;
    }

    let index = num;
    while (true) {
        index -= 1;
        if (isPrime(index)) {
            return index;
        }
    }
}

console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7));  // 5
console.log(prevPrime(4));  // 3
console.log(prevPrime(2));  // null
console.log(prevPrime(1));  // null