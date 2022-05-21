// Write a function, countVowels(word), that takes in a string word and returns the number of vowels in the word.

function countVowels(word) {
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (vowels.includes(char)) {
            count += 1;
        }
    }
    return count;
};

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2