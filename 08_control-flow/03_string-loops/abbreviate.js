// Write a function abbreviate(word) that takes in a string arg. 
// The function should return a new string where all of its vowels are removed.

function abbreviate(word) {
    let vowels = "aeiou";
    let shortened = "";
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!vowels.includes(char.toLowerCase())) {
            shortened += char;
        }
    }
    return shortened;
}


console.log(abbreviate('wonderful')); // 'wndrfl'
console.log(abbreviate('mystery')); // 'mystry'
console.log(abbreviate('Accordian')); // 'ccrdn'