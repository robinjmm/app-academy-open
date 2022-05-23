// Write a function yeller(words) that takes in an array of words.
// The function should return a new array where each element of the original array is yelled.

function yeller(words) {
    let yelled = [];

    for (let i = 0; i < words.length; i++) {
        let yelledWord = words[i].toUpperCase() + "!";
        yelled.push(yelledWord);
    }

    return yelled;
}


console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]