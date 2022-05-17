// Write a function goodbye(name) that takes in a string name and returns a string saying "bye" to that name. 
function goodbye(name) {
    return `Bye ${name}`;
}

console.log(goodbye("Daniel")); // => "Bye Daniel."
console.log(goodbye("Mark")); // => "Bye Mark."
console.log(goodbye("Beyonce")); // => "Bye Beyonce."


// Write a function plusFive that takes in a number as an argument and returns the sum of that number and 5.
function plusFive(num) {
    return num + 5;
}

console.log(plusFive(10));  // => 15
console.log(plusFive(2));   // => 7
console.log(plusFive(-8));  // => -3


// We have provided a function named isCool. 
// The isCool function will take a string argument and console.log and return a sentence saying that the given string "is cool!". 
// Call the isCool function with the arguments listed below.
function isCool(string) {
    let coolSentence = string + " is cool!"
    console.log(coolSentence)
    return coolSentence
}

// Call the above function passing in the below arguments:
// Music
// JavaScript
// The world

isCool("Music");
isCool("JavaScript");
isCool("The world");


// Write a method averageOfTwo(num1, num2) that returns the average of two numbers.
function averageOfTwo(num1, num2) {
    return (num1 + num2) / 2;
}

console.log(averageOfTwo(3, 7)); // => 5.0
console.log(averageOfTwo(16, 5)); // => 10.5
console.log(averageOfTwo(2, 7.5)); // => 4.75


// Write a function hello that takes in a string and prints out "Hello, " followed by the string.
function hello(str) {
    console.log("Hello, " + str);
}

hello("cat"); // prints "Hello, cat"
hello("Helen"); // prints "Hello, Helen"
hello("Sting"); // prints "Hello, Sting"


// Write a method divideByThree(num) that returns the passed in number argument divided by three.
function divideByThree(num) {
    return num / 3;
}

console.log(divideByThree(9)); // => 3.0
console.log(divideByThree(15)); // => 5.0
console.log(divideByThree(98)); // => 32.666666666666664


// Write a function whisper that takes in a string and returns a "whispered" version of that string.
function whisper(str) {
    return "..." + str.toLowerCase() + "...";
}

console.log(whisper("Hey Buddy")); // => "...hey buddy..."
console.log(whisper("YEA! that was fun")); // => "...yea! that was fun..."


// Write a function averageOfFour(num1, num2, num3, num4) that takes in four numbers.
// The function should return the average of all of the numbers.
function averageOfFour(num1, num2, num3, num4) {
    return (num1 + num2 + num3 + num4) / 4;
}

console.log(averageOfFour(10, 10, 15, 5)); // => 10
console.log(averageOfFour(3, 10, 11, 4)); // => 7
console.log(averageOfFour(1, 2, 3, 4)); // => 2.5


// Write a function yell that takes in a string and returns a "yelled" version of that string.
function yell(str) {

    return str.toUpperCase() + "!!!";
}

console.log(yell("I want to go to the store")); // => "I WANT TO GO TO THE STORE!!!"
console.log(yell("Time to program")); // => "TIME TO PROGRAM!!!"


// Write a function echo that takes in a string and console.logs that string "echo-ized".
function echo(string) {
    console.log(string.toUpperCase() + " ... " + string + " ... " + string.toLowerCase());
}

echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
echo("hey"); // => prints "HEY ... hey ... hey"
echo("JUMp"); // => prints "JUMP ... JUMp ... jump"