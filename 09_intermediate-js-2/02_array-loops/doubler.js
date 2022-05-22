// Write a function doubler(numbers) that takes an array of numbers
// and returns a new array where every element of the original array is multiplied by 2.

function doubler(numbers) {
    let newArr = [];
    for (let i = 0; i < numbers.length; i++) {
        newArr.push(numbers[i] * 2)
    }
    return newArr;
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]