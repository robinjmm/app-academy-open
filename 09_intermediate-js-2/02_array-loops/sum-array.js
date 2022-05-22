// Write a function sumArray(array) that takes in an array of numbers and returns the total sum of all the numbers.

function sumArray(array) {
    let sum = 0;
    for (let num of array) {
        sum += num;
    }
    return sum;
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30