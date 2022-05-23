// Write a function popper(array, num) that takes in an array and a number as args. 
// The function should remove the last num elements from the array, mutating the original array. 
// The function should return a new array containing the elements that were removed.

let popper = function (arr, num) {
    let removed = [];

    for (let i = 0; i < num; i++) {
        removed.push(arr.pop());
    }

    return removed;
}

let arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(popper(arr1, 2)); // [ 'e', 'd' ]
console.log(arr1); // [ 'a', 'b', 'c' ]

let arr2 = ['kale', 'spinach', 'collard greens', 'cabbage'];
console.log(popper(arr2, 1)); // [ 'cabbage' ]
console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]