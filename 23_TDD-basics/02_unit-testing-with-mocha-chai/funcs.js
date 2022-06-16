function isFive(num) {
    // Your code here
    if (num === 5) {
        return true;
    } else {
        return false;
    }
}

function isOdd(number) {
    // Your code here
    if (typeof number !== "number") {
        throw new Error("Input is not a number");
    }

    if (number % 2 === 0) {
        return false;
    } else {
        return true;
    }
}

function myRange(min, max, step = 1) {
    // Your code here
    if (min > max) {
        return [];
    }

    let newArray = [];
    for (let i = min; i <= max; i += step) {
        newArray.push(i);
    }

    return newArray;
}

module.exports = { isFive, isOdd, myRange };