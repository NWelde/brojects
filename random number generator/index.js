document.addEventListener("DOMContentLoaded", function() {
    const rollButton = document.getElementById("randomNumberButton");
    const myLabel = document.getElementById("myLabel");
    const min = 1;
    const max = 6;
    let randomNum;

    if (rollButton && myLabel) {
        rollButton.onclick = function() {
            randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            myLabel.textContent = randomNum;
        };
    } else {
        console.error("Button or label not found");
    }
});