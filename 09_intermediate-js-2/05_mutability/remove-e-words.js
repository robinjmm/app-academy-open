// Write a function removeEWords(sentence) that accepts a sentence string as an arg.
// The function should return a new string, containing only the words that don't have the letter "e" in them.

function removeEWords(sentence) {
    let words = sentence.split(" ");
    let newStr = [];
    for (let i = 0; i < words.length; i++) {
        if (!words[i].includes('e')) {
            newStr.push(words[i]);
        }
    }
    return newStr.join(" ");
}

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'