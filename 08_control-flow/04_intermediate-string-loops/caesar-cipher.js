// Write a method caesarCipher that takes in a string and a number. 
// The function should return a new string where every character 
// of the original is shifted num characters in the alphabet.


const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, num) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        let newLetter = alphabet[alphabet.indexOf(string[i]) + num];
        if (newLetter === undefined) {
            newString += alphabet[num - 1];
        } else {
            newString += newLetter;
        }
    }
    return newString;
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"