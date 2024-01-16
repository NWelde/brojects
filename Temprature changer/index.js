const tempInput = document.getElementById("temp");
const CelsiusToFah = document.getElementById("CelsiusToFah");
const FahToCelsius = document.getElementById("FahToCelsius");
const submit = document.getElementById("submit");
const feedBack = document.getElementById("feedBack");

submit.onclick = function() {
  let inputValue = parseFloat(tempInput.value);

  // Check for valid input before calculations
  if (isNaN(inputValue)) {
    feedBack.textContent = "Please enter a valid number.";
    return; // Exit the function if input is invalid
  }

  let C, F; // Declare variables inside the function

  if (FahToCelsius.checked) {
    C = (inputValue - 32) * 5 / 9;
    feedBack.textContent = C + " degrees Celsius";
  } else if (CelsiusToFah.checked) {
    F = (inputValue + 32) * 9 / 5;
    feedBack.textContent = F + " degrees Fahrenheit";
  } else {
    alert("Please select a conversion option.");
  }
};
