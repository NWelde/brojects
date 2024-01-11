let input = document.getElementById("NumToBeTested");
let result = document.getElementById("result");
let submit = document.getElementById("mySubmit");

submit.onclick = function() {
    let inputValue = parseInt(input.value);

    if (inputValue <= 1) {
        result.textContent = "false";
    } else {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(inputValue); i++) {
            if (inputValue % i === 0) {
                // If the number is divisible, it's not prime
                isPrime = false;
                break;
            }
        }

        result.textContent = isPrime.toString();
    }
};
