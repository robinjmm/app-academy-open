function changeContext(func, obj) {
    // Your code here
    let newContext = func.bind(obj);
    return newContext();
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;