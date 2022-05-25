// debugger

// console.log('Hello World!');

function sum(array) {
    totalSum = 0;
    debugger
    for (let i = 0; i < array.length; i++) {
        debugger
        totalSum += array[i];
    }

    return totalSum;
}

let arr = [1, 2, 3];
sum(arr);