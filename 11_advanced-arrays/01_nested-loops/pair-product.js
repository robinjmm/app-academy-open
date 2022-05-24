// Write a function pairProduct that accepts an array of numbers and a product as arguments.
// The function should return a boolean indicating whether or not a pair of distinct
// elements in the array result in the product when multiplied together.
// You may assume that the input array contains unique elements.

function pairProduct(numbers, product) {

    for (let i = 0; i < numbers.length; i++) {
        let num1 = numbers[i];

        for (let j = i + 1; j < numbers.length; j++) {
            let num2 = numbers[j];

            if (num1 * num2 === product) {
                return true;
            }
        }
    }

    return false;
}

console.log(pairProduct([4, 2, 5, 8], 16))    // true
console.log(pairProduct([8, 1, 9, 3], 8))     // true
console.log(pairProduct([3, 4], 12))          // true
console.log(pairProduct([3, 4, 6, 2, 5], 12)) // true
console.log(pairProduct([4, 2, 5, 7], 16))    // false
console.log(pairProduct([8, 4, 9, 3], 8))     // false
console.log(pairProduct([3], 12))             // false