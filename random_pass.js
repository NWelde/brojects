const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?";

function getRandomCharacterSet(includeSymbols = true) {
  let options = [];
  options.push(lowercaseLetters);
  options.push(uppercaseLetters);
  options.push(numbers);
  if (includeSymbols) {
    options.push(symbols);
  }
  return options[Math.floor(Math.random() * options.length)];
}

function generatePassword(length = 16, includeSymbols = true) {
  let password = "";
  for (let i = 0; i < length; i++) {
    const charSet = getRandomCharacterSet(includeSymbols);
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }
  return password; // Return the complete password
}

console.log(generatePassword(16, true)); // Correctly call the function