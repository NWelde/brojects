const  myCheckBox = document.getElementById("MyCheckBox");
const visaBtn = document.getElementById("visaBtn");
const MasterCardBtn = document.getElementById("MasterCardBtn");
const PayPalBtn = document.getElementById("PayPalBtn");
const mySubmit = document.getElementById("MySubmit");
const subResult = document.getElementById("subResult");
const  payResult = document.getElementById("payResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = "you are subscribed";
        }else{
        subResult.textContent = "not subscribed";
    } 
    if(visaBtn.onclick){
        payResult.textContent = "you are paying with visa";
    }
    else if (MasterCardBtn.checked){
        payResult.textContent = "you are paying with mastercard ";
    }
    else if (PayPalBtn.checked){
        payResult.textContent = "you are paying with paypal ";
    }
    else{
        payResult.textContent = "you must select a payment method";
    }
}
//fix this bug  