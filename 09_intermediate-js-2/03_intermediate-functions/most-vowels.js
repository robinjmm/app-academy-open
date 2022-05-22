// Write a function mostVowels that takes in a sentence string
// and returns the word of the sentence that contains the most vowels.

function numVowels(word) {
    let vowels = "aeiou";
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count += 1;
        }
    }
    return count;
}

function mostVowels(sentence) {
    let words = sentence.split(" ");
    let biggest = numVowels(words[0]);
    for (let i = 0; i < words.length; i++) {
        if (biggest < numVowels(words[i])) {
            biggest = words[i]
        }
    }
    return biggest;
}

console.log(mostVowels("what a wonderful life")); // "wonderful"