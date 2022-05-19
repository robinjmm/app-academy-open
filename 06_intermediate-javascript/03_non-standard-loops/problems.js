function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    let odds = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            odds.push(arr[i]);
        }
    }
    return odds;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    let oddsReverse = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 !== 0) {
            oddsReverse.push(arr[i]);
        }
    }
    return oddsReverse;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[2 ** i] !== undefined) {
            newArr.push(arr[2 ** i]);
        }
    }
    return newArr;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[n ** i] !== undefined) {
            newArr.push(arr[n ** i]);
        }
    }
    return newArr;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    let newArr = [];
    for (let i = 0; i < arr.length / 2; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    let newArr = [];
    if (arr.length % 2 !== 0) {
        for (let i = Math.floor(arr.length / 2) + 1; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
    } else {
        for (let i = arr.length / 2; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}