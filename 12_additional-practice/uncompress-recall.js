// Write a function uncompress(str) that takes in a "compressed" string as an arg.
// A compressed string consists of a character immediately followed by the number of times it appears in the "uncompressed" form.
// The function should return the uncompressed version of the string.

function uncompress(str) {
    let newString = "";
    for (let i = 0; i < str.length; i++) {
        if (Number(str[i + 1]) !== NaN) {
            newString += str[i].repeat(Number(str[i + 1]));
        }
    }
    return newString;
}

console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'