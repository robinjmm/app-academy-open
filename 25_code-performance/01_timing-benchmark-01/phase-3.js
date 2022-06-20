const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
    // Copy your `addNums10` code here
    // Then, add timing code

    // Your code here
    let arr = [];


    for (let i = increment; i <= 10 * increment; i += increment) {
        let start = Date.now();
        console.time("Timer 1");
        arr.push(addNums(i));
        console.timeEnd("Timer 1");
        let end = Date.now();
        console.log(`The call took ${end - start}ms`);
    }

    return arr;

}

console.log(addManyNums10Timing(1));

function addManyNums10Timing(increment) {
    // Copy your `addManyNums10` code here
    // Then, add timing code

    // Your code here
    let arr = [];

    for (let i = increment; i <= 10 * increment; i += increment) {
        let start = Date.now();
        console.time(`Timer ${i}`);
        arr.push(addManyNums(i));
        console.timeEnd(`Timer ${i}`);
        let end = Date.now();
        console.log(`The call took ${end - start}ms`);
    }

    return arr;

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);