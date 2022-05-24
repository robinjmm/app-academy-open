// Write a function removeLastVowel(word) that takes in a string and returns the string with its last vowel removed.

function removeLastVowel(word) {
    let vowel = "aeiou";

    for (let i = word.length - 1; i >= 0; i--) {
        let char = word[i];
        if (vowel.includes(char)) {
            return word.slice(0, i) + word.slice(i + 1);
        }
    }

    return word;
}

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'