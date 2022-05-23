// Write a function doubleSequence that accepts a base and a length as arguments.
// The function should return an array representing a sequence that contains "length" elements.
// The first element of the sequence is always the "base", the subsequent elements
// can be generated by doubling the previous element of the sequence.

function doubleSequence(base, length) {
    let sequence = [];

    for (let i = 1; i <= length; i++) {
        if (sequence.length === 0) {
            sequence.push(base);
        } else {
            let last = sequence.length - 1;
            sequence.push(sequence[last] * 2);
        }
    }

    return sequence;
}

console.log(doubleSequence(7, 3));  // [7, 14, 28]
console.log(doubleSequence(3, 5));  // [3, 6, 12, 24, 48]
console.log(doubleSequence(5, 3));  // [5, 10, 20]
console.log(doubleSequence(5, 4));  // [5, 10, 20, 40]
console.log(doubleSequence(5, 0));  // [ ]