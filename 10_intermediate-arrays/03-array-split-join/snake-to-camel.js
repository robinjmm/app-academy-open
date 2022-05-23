// Write a function snakeToCamel that takes in a snake_cased string and returns a PascalCased version of the string.
// snake_case is where each word is separated with underscores (_).
// PascalCase is a string where the first char of each word is capital, all other chars lowercase.

function snakeToCamel(str) {
    let words = str.split("_");
    let newString = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let capitalized = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        newString.push(capitalized);
    }

    return newString.join("");
}

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'