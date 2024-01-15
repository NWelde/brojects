const guess = document.getElementById("GuessedNum");
const submit = document.getElementById("submit");
const correctOrWrong = document.getElementById("correctOrWrong");
const Num = Math.random();


submit.onclick = function(){
    let diffrence = Math.abs(guess - Num);
    if (diffrence === 0){
        correctOrWrong.textContent = "Congratulations! you the number  correctly "
    }
    else if(diffrence === 10){
        correctOrWrong.textContent = "HOT!";
    }
    else if(diffrence === 15){
        correctOrWrong.textContent = "WARMER! ";

    }
    else if(diffrence === 20){
        correctOrWrong.textContent = "WARM! ";
    }
    else if(diffrence === 25 )
    correctOrWrong.textContent = "COLD! ";
     else if(diffrence > 25)
     correctOrWrong.textContent = "TO COLD! ";
}