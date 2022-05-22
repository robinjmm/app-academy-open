// Write a function minValue(nums) that takes in an array of numbers as an arg. 
// The function should return the smallest number of the array. 
// If the array is empty, the function should return null.

function minValue(nums) {
    if (nums.length < 1) {
        return null;
    }

    let min = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (min > nums[i]) {
            min = nums[i];
        }
    }
    return min;
}

console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3])); // -7
console.log(minValue([])); // null