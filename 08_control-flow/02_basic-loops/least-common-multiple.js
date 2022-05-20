// Write a function leastCommonMultiple(num1, num2) that accepts two numbers as arguments. 
// The functions should return the smallest number that is divisible by both num1 and num2.

function leastCommonMultiple(num1, num2) {
    let index = 0;
    while (true) {
        index += 1;
        if (index % num1 === 0 && index % num2 === 0) {
            return index;
        }
    }
}

console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10