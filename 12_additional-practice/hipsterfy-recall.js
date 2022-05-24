// Write a function hipsterfy(sentence) that takes in a sentence string
// and returns the sentence where every word is missing its last vowel.

function removeLastVowel(word) {
    let vowels = "aeiou";

    for (let i = word.length - 1; i >= 0; i--) {
        let char = word[i];
        if (vowels.includes(char)) {
            return word.slice(0, i) + word.slice(i + 1);
        }
    }
}

function hipsterfy(sentence) {
    let words = sentence.split(" ");
    let newWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        newWords.push(removeLastVowel(word));
    }

    return newWords.join(" ");
}

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'