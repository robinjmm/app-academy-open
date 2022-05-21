// Write a function vowelCipher that takes in a string
// and returns a new string where every vowel becomes the next vowel in the alphabet.

function vowelCipher(string) {
    let vowels = "aeiou";
    let newString = ""
    for (let i = 0; i < string.length; i++) {
        let nextIndex = vowels.indexOf(string[i]) + 1
        if (vowels.includes(string[i]) && (nextIndex > (vowels.length - 1))) {
            newString += vowels[0];
        }
        else if (vowels.includes(string[i])) {
            newString += vowels[nextIndex]
        } else {
            newString += string[i];
        }
    }
    return newString;
}


console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"