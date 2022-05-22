// Write a function reverb that accepts a word as an argument. 
// The function should return a new word where all letters 
// that come after the last vowel (including the vowel itself) 
// are repeated at the end of the word. 
// If the value passed in is not a string, 
// say someone passes in a number as an argument, then return null.

function reverb(word) {
    if (typeof word !== 'string') {
        return null;
    }

    let vowels = "aeiou";
    let startIndex = 0;
    for (let i = word.length - 1; i >= 0; i--) {
        let char = word[i];
        if (vowels.includes(char.toLowerCase())) {
            startIndex = word.indexOf(char);
            break;
        }
    }

    let appendString = word.slice(startIndex);
    return word + appendString;
}

console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null