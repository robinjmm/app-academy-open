// Write a function luckyNumbers(matrix) that takes in a 2-dimensional array (matrix)
// and returns all lucky numbers in any order.
// A lucky number is the minimum element in its row and the maximum in its column.

function largest(arr) {
    let largestArr = [];

    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i];
        }
    }
    largestArr.push(largest);

    return largestArr;
}


function luckyNumbers(matrix) {
    let minNumbers = [];

    for (let i = 0; i < matrix.length; i++) {
        let subArray = matrix[i];

        let min = subArray[0];
        for (let j = 0; j < subArray.length; j++) {
            if (min > subArray[j]) {
                min = subArray[j];
            }
        }

        minNumbers.push(min);
    }

    let luckyNumber = largest(minNumbers);
    return luckyNumber
}

matrix = [[5, 9, 21],
[9, 19, 6],
[12, 14, 15]]

console.log(luckyNumbers(matrix)); // [12]

matrix = [[5, 10, 8, 6],
[10, 2, 7, 9],
[21, 15, 19, 10]]

console.log(luckyNumbers(matrix)); // [10]