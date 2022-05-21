// Write a function sillyString that accepts a word as an argument. 
// The functions should return a new word where every vowel of the original word is followed by 'b' and that same vowel.

function sillyString(word) {
    const vowels = "aeiou";
    let silly = "";
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (vowels.includes(char)) {
            silly += char + "b" + char;
        } else {
            silly += char;
        }
    }
    return silly
}

console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber