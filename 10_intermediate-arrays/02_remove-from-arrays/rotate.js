// Write a function rotate(array, num) that takes in an array and a number as args.
// When the num is positive, the elements of the array should be rotated to the right.
// When the num is negative, the elements of the array should be rotated to the left.
// The function should mutate the original array.

let rotate = function (array, num) {
    if (num > 0) {
        for (let i = 0; i < num; i++) {
            let popped = array.pop();
            array.unshift(popped);
        }
    } else {
        for (let i = num; i < 0; i++) {
            let shifted = array.shift();
            array.push(shifted);
        }
    }
}

let arr = ['a', 'b', 'c', 'd', 'e'];
rotate(arr, 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotate(animals, -1);
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]