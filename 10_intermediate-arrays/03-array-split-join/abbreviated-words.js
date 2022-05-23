// Write a function abbreviateWords(sentence) that takes in a sentence string.
// The function should return a new sentence where words that are longer than 4 characters have their vowels removed.
// Hint: Consider creating a helper function to remove all vowels in a string.

function vowelRemover(word) {
    let vowels = "aeiou";
    let newWord = "";

    for (let i = 0; i < word.length; i++) {
        if (!vowels.includes(word[i])) {
            newWord += word[i];
        }
    }

    return newWord;
}


function abbreviateWords(sentence) {
    let words = sentence.split(" ");
    let newWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 4) {
            newWords.push(vowelRemover(word));
        } else {
            newWords.push(word);
        }
    }

    return newWords.join(" ");
}

console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg