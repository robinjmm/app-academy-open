// So far you've learned how to write your own loops but there are some methods that will iterate for you. 
// One such method is the String.indexOf() method.

function isSubstring(searchString, subString) {
    let lowerSearchString = searchString.toLowerCase();
    let lowerSubString = subString.toLowerCase();
    if (lowerSearchString.indexOf(lowerSubString) !== -1) {
        return true;
    }
    return false;
}

console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "joys")); // => false