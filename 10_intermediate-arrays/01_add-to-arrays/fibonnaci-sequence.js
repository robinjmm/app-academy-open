// Write a function fibonacciSequence that accepts a number as an argument.
// The function should return an array representing the fibonacci sequence up to the given length.
// The first and second numbers of the sequence are 1 and 1.
// To generate subsequent numbers of the sequence, we take the sum of the previous two numbers of the sequence.

function fibonacciSequence(num) {
    if (num === 0) {
        return [];
    } else if (num === 1) {
        return [1];
    }

    let fibArray = [1, 1];
    for (let i = fibArray.length; i < num; i++) {
        let lastNum = fibArray[fibArray.length - 1];
        let secondLast = fibArray[fibArray.length - 2];
        fibArray.push(lastNum + secondLast);
    }

    return fibArray;
}

console.log(fibonacciSequence(4));  // [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5));  // [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8));  // [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0));  // [ ]
console.log(fibonacciSequence(1));  // [ 1 ]
console.log(fibonacciSequence(2));  // [ 1, 1 ]