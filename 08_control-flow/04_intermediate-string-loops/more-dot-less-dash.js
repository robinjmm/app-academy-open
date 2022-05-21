// Write a function moreDotLessDash that accepts a string as an argument. 
// The function should return a boolean indicating whether or not 
// the string contains more dots (.) than dashes (-).

function moreDotLessDash(str) {
    let countDash = 0;
    let countDot = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === '.') {
            countDot += 1;
        } else if (char === '-') {
            countDash += 1;
        }
    }
    return countDot > countDash;
}


console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false