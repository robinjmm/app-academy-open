// Write a function sameCharCollapse that takes in a string and returns a collapsed version of the string.
// To collapse the string, we repeatedly delete 2 adjacent characters
// that are the same until there are no such adjacent characters.
// If there are multiple pairs that can be collapsed, delete the leftmost pair.
// For example, we take the following steps to collapse "zzzxaaxy": zzzxaaxy -> zxaaxy -> zxxy -> zy


function sameCharCollapse(str) {
    let reducible = true;

    while (reducible) {
        let chars = str.split("");
        reducible = false;

        for (let i = 0; i < chars.length - 1; i++) {
            if (chars[i] === chars[i + 1]) {
                chars[i] = "";
                chars[i + 1] = "";
                reducible = true;
            }
        }
        str = chars.join("");
    }

    return str;
}

console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv