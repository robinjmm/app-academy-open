const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber;
let attempts;

function checkGuess(num) {
    if (num > secretNumber) {
        console.log("Too High!");
        return false;
    } else if (num < secretNumber) {
        console.log("Too Low!");
        return false;
    } else {
        console.log("Correct!");
        return true;
    }
}

function askGuess() {
    rl.question("Enter guess: ", (answer) => {
        let result = checkGuess(answer);

        if (result) {
            console.log("You Win!");
            rl.close();
        } else {
            attempts -= 1;
            console.log(`You have ${attempts} attempts left.`);

            if (attempts === 0) {
                console.log("Game Over!");
                rl.close();
            } else {
                askGuess();
            }
        }
    });
}

function randomInRange(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function askRange() {
    rl.question("Enter a max number: ", max => {

        rl.question("Enter a min number: ", min => {

            // make sure min is not greater than the max
            if (Number(min) > Number(max)) {
                console.log("The min cannot be greater than the max");
                askRange();
            } else {
                console.log(`I'm thinking of a number between ${min} and ${max}`);

                secretNumber = randomInRange(Number(min), Number(max));

                askGuess();
            }
        })
    })
}

// askRange();

function askLimit() {
    rl.question("Set the number of attemps: ", numOfAttempts => {
        attempts = numOfAttempts;
        console.log(`You have ${attempts} attempts left.`);
        askRange();
    })
}

askLimit();