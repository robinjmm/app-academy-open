// Write a function longestWord(sentence) that takes in a sentence string as an argument. 
// The function should return the longest word in the sentence.
// If there is more than one "longest word", return the first of these instances.

function longestWord(sentence) {
    let words = sentence.split(" ");
    let longest = words[0];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (longest.length < word.length) {
            longest = word;
        }
    }

    return longest;
}

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''