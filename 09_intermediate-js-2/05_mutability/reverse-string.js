// Write a function reverseString(str) that takes in a string. 
// The function should return a new string where the order of the characters is reversed.

function reverseString(word) {
    let newStr = "";
    for (let i = word.length - 1; i >= 0; i--) {
        newStr += word[i];
    }
    return newStr;
}

console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'