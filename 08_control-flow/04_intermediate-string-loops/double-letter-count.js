// Write a function doubleLetterCount that takes in a string
// and returns the number of times that the same letter repeats twice in a row.

function doubleLetterCount(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1]) {
            count += 1;
        }
    }
    return count;
}

console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1