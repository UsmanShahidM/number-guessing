import * as readline from 'readline';

function getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main(): void {
    const min = 1;
    const max = 100;
    const target = getRandom(min, max);
    let attempts = 0;

    console.log('Welcome to the Number Guessing Game!');
    console.log(`Guess a number between ${min} and ${max}`);

    function ask(): void {
        rl.question('Enter your guess: ', (input: string) => {
            const guess = parseInt(input);
            if (isNaN(guess) || guess < min || guess > max) {
                console.log(`Please enter a number between ${min} and ${max}`);
                ask();
            } else {
                attempts++;
                if (guess === target) {
                    console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
                    rl.close();
                } else if (guess < target) {
                    console.log('Too low! Try again.');
                    ask();
                } else {
                    console.log('Too high! Try again.');
                    ask();
                }
            }
        });
    }
    ask();
}
main();
