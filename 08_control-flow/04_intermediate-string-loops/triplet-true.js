// Write a function tripletTrue that accepts a string as an argument. 
// The function should return a boolean indicating whether or not the the string contains three of the same character consecutively.

function tripletTrue(word) {
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if ((word.split(char).length - 1) >= 3) {
            return true;
        }
    }
    return false;
}

console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false