// The fibonacci sequence is a sequence of numbers whose first and second elements are 1.
// To generate further elements of the sequence we take the sum of the previous two elements.
// For example the first 6 fibonacci numbers are 1, 1, 2, 3, 5, 8.
// Write a function fibonacci that takes in a number length and returns the fibonacci sequence up to the given length.

function fibonacci(length) {
    if (length === 0) {
        return [];
    } else if (length === 1) {
        return [1];
    }

    let fibArray = [1, 1];
    for (let i = fibArray.length; i < length; i++) {
        let lastNum = fibArray[fibArray.length - 1];
        let secondLastNum = fibArray[fibArray.length - 2];
        let newNum = lastNum + secondLastNum;
        fibArray.push(newNum);
    }

    return fibArray;
}

console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]