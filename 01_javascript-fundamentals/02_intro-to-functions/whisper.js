// Write a function whisper that takes in a string and returns a "whispered" version of that string.

function whisper(str) {
    return "..." + str.toLowerCase() + "...";
}

console.log(whisper("Hey Buddy")); // => "...hey buddy..."
console.log(whisper("YEA! that was fun")); // => "...yea! that was fun..."