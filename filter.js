let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let evennum = num.filter(iseven);

console.log(evennum);

function iseven(number) { // Use `number` for clarity
  return number % 2 === 0; // Check the passed number's evenness
}

