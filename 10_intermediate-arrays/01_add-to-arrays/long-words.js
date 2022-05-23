// Write a function longWords(words) that takes in an array of words.
// The function should return an array containing only the words that are longer than 5 characters.


function longWords(words) {
    let long = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 5) {
            long.push(word);
        }
    }

    return long;
}

console.log(longWords(['bike', 'skateboard', 'scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka', 'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]