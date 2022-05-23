// Write a function consonantCancel that takes in a sentence
// and returns a new sentence where every word begins with it's first vowel.

function removeConsonant(word) {
    let vowels = "aeiou";

    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (vowels.includes(char)) {
            return word.slice(i);
        }
    }
}


function consonantCancel(sentence) {
    let words = sentence.split(" ");
    let newSentence = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        newSentence.push(removeConsonant(word));
    }

    return newSentence.join(" ");
}

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"