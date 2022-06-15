function bindToAnArg(func, arg) {
    // Your code here
    let boundFunc = func.bind(null, arg);
    return boundFunc;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;