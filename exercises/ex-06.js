// Define a function isFive that will return true if a number is equal to 5 and false if it is not.
function isFive(num) {
    if (num === 5) {
        return true;
    }

    return false;
}

console.log(isFive(5)); // => true
console.log(isFive(13)); // => false


// Write a function isOdd that takes in a number as an argument and returns true if the number is odd and returns false otherwise.
function isOdd(num) {
    // your code here!
    if (num % 2 === 0) {
        return false
    }

    return true;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true


// Write a function isSubstring that takes in two strings, searchString and subString. 
// The function should return true if subString is a part of thesearchString, regardless of upper or lower case, and false if otherwise.
function isSubstring(searchString, subString) {
    smallSearchString = searchString.toLowerCase();
    smallSubString = subString.toLowerCase();

    if (smallSearchString.indexOf(smallSubString) > -1) {
        return true;
    }

    return false;
}

console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "joys")); // => false