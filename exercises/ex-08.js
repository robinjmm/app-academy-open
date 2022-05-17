// Write a function combineArray(array1, array2) 
// that takes in two arrays of numbers and returns the two arrays combined into a single array.
function combineArray(array1, array2) {
    return array1.concat(array2);
}

console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]


// Write a function doubler(numbers) that takes an array of numbers
// and returns a new array where every element of the original array is multiplied by 2.
function doubler(numbers) {
    let newArray = []
    for (let i = 0; i < numbers.length; i++) {
        newArray.push(numbers[i] * 2);
    }

    return newArray;
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]


// Write a function, countVowels(word), that takes in a string word and returns the number of vowels in the word.
// Vowels are the letters "a", "e", "i", "o", "u".
function countVowels(word) {
    let vowels = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;

    for (let i = 0; i < word.length; i++) {
        if (vowels.indexOf(word[i]) !== -1) {
            vowelCount += 1;
        }
    }

    return vowelCount;
};

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2