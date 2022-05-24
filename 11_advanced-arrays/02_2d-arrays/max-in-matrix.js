// Write a function maxInMatrix(matrix) that takes in a 2-dimensional array (matrix)
// and returns the largest value in the matrix.
// The matrix contains at least one value.

function maxInMatrix(matrix) {
    let biggest = 0;

    for (let i = 0; i < matrix.length; i++) {
        let subMatrix = matrix[i];

        for (let j = 0; j < subMatrix.length; j++) {
            if (biggest < subMatrix[j]) {
                biggest = subMatrix[j];
            }
        }
    }

    return biggest;
}


matrix = [[11, 2, -99],
[20, 19, 10],
[47, 72, 56]]

console.log(maxInMatrix(matrix)); // 72