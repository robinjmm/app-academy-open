// So the two rules for our version of Pig Latin are:
// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

let vowels = ["a", "e", "i", "o", "u"];

function pigLatinWord(word) {
    if (vowels.includes(word[0])) {
        return `${word}yay`;
    }

    let vowelStart;
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (vowels.includes(char)) {
            vowelStart = word.indexOf(char);
        }
    }
    let consonants = word.slice(0, vowelStart);
    let startStr = word.slice(vowelStart);
    return `${startStr}${consonants}ay`;
};

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"