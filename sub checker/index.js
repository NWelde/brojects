const myCheckBox = document.getElementById("MyCheckBox");
const visaBtn = document.getElementById("visaBtn");
const MasterCardBtn = document.getElementById("MasterCardBtn");

const PayPalBtn = document.getElementById("PayPalBtn");
const mySubmit = document.getElementById("MySubmit");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

mySubmit.onclick = function() {
  if (myCheckBox.checked) {
    subResult.textContent = "You are subscribed";
  } else {
    subResult.textContent = "Not subscribed";
  }

  // Check for the selected payment button using checked property
  if (visaBtn.checked) {
    payResult.textContent = "You are paying with Visa";
  } else if (MasterCardBtn.checked) {
    payResult.textContent = "You are paying with MasterCard";
  } else if (PayPalBtn.checked) {
    payResult.textContent = "You are paying with PayPal";
  } else {
    payResult.textContent = "You must select a payment method";
  }
};