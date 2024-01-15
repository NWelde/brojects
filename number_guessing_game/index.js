const min = 1;
const max = 100;
const numTries = 5; 

const guess = document.getElementById("GuessedNum");
const submit = document.getElementById("submit");
const correctOrWrong = document.getElementById("correctOrWrong");
let triesLeft = numTries;
let num = Math.floor(Math.random() * max + min);

submit.onclick = function() {
    while (triesLeft > 0) {
        let difference = Math.abs(guess.value - num);

        if (difference === 0) {
            correctOrWrong.textContent = "Congratulations! You guessed the number correctly!";
            break; // Exit the loop if the guess is correct
        } else {
            correctOrWrong.textContent = provideFeedback(difference);
            triesLeft--;
            guess.value = "";
            if (triesLeft === 0) {
                correctOrWrong.textContent += " You're out of tries! The number was " + num;
            }
        }
    }
};

function provideFeedback(difference) {
    if (difference <= 10) {
        return "HOT!";
    } else if (difference <= 15) {
        return "WARMER!";
    } else if (difference <= 20) {
        return "WARM!";
    } else if (difference <= 25) {
        return "COLD!";
    } else {
        return "TOO COLD!";
    }
}