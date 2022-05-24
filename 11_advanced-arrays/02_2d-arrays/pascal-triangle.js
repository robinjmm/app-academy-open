// Write a function pascalsTriangle that accepts a positive number, n,
// as an argument and returns a 2-dimensional array representing
// the first n levels of Pascal's triangle.
// See the file for examples.

function pascalsTriangle(height) {
    let triangle = [[1]];

    while (triangle.length < height) {
        let last = triangle[triangle.length - 1];
        let next = [1];

        for (let i = 0; i < last.length - 1; i++) {
            next.push(last[i] + last[i + 1]);
        }

        next.push(1);
        triangle.push(next);
    }

    return triangle;
}

console.log(pascalsTriangle(5));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1]
// ]

console.log(pascalsTriangle(7));
// [
//     [1],
//     [1, 1],
//     [1, 2, 1],
//     [1, 3, 3, 1],
//     [1, 4, 6, 4, 1],
//     [1, 5, 10, 10, 5, 1],
//     [1, 6, 15, 20, 15, 6, 1]
// ]