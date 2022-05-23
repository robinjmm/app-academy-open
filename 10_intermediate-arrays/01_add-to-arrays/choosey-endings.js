// Write a function chooseyEndings that accepts an array of words and a suffix string as arguments. 
// The function should return a new array containing the words that end in the given suffix. 
// If the value passed in is not an array, return an empty array.

function chooseyEndings(arr, suffix) {
    if (!Array.isArray(arr)) {
        return [];
    }

    let suffixedWords = [];

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if (word.endsWith(suffix)) {
            suffixedWords.push(word);
        }
    }

    return suffixedWords
}

console.log(chooseyEndings(['family', 'hound', 'catalyst', 'fly', 'timidly', 'bond'], 'ly'));
// [ 'family', 'fly', 'timidly' ]

console.log(chooseyEndings(['family', 'hound', 'catalyst', 'fly', 'timidly', 'bond'], 'nd'));
// [ 'hound', 'bond' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// [ ]

console.log(chooseyEndings(17, 'ily'));
// [ ]