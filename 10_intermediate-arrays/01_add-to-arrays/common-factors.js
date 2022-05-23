// Write a function commonFactors that accepts two numbers as arguments.
// The function should return an array containing positive numbers that are able to divide both arguments.

function commonFactors(num1, num2) {
    let bigger = 0;
    if (num1 > num2) {
        bigger = num1;
    } else {
        bigger = num2;
    }

    let factors = [];

    for (let i = 0; i < bigger; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            factors.push(i);
        }
    }

    return factors;
}

console.log(commonFactors(50, 30));            // [1, 2, 5, 10]
console.log(commonFactors(8, 4));              // [1, 2, 4]
console.log(commonFactors(4, 8));              // [1, 2, 4]
console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
console.log(commonFactors(7, 9));              // [1]