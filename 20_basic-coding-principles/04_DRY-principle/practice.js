function compare(value1, value2, cbTrue, comp = "max") {
    let num;

    if (comp === "max" && value1 > value2) {
        num = value1;
        return cbTrue(num);
    } else if (comp === "min" && value1 < value2) {
        num = value1;
        return cbTrue(num);
    } else {
        num = value2;
        return cbTrue(num);
    }
}

function multiplyBiggerNumByTwo(num1, num2) {
    return compare(num1, num2, (result) => {
        return result * 2;
    })
}

function divideBiggerNumByThree(num1, num2) {
    return compare(num1, num2, (result) => {
        return result / 3;
    })
}

function eatMostTacos(sum1, sum2) {
    return compare(sum1, sum2, (result) => {
        return `I ate ${result} tacos.`;
    })
}

function adoptSmallerDog(weight1, weight2) {
    return compare(weight1, weight2, (result) => {
        return `I adopted a dog that weighs ${result} pounds.`;
    }, "min")
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
    multiplyBiggerNumByTwo,
    divideBiggerNumByThree,
    eatMostTacos,
    adoptSmallerDog
};