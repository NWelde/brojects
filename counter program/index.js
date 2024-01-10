let count = 0;
const dec = document.getElementById("dec");
const res = document.getElementById("res");
const inc = document.getElementById("inc");
const countlabel = document.getElementById("lab");

inc.addEventListener("click", function() {
    count++;
    countlabel.textContent = count;
});

dec.addEventListener("click", function() {
    count--;
    countlabel.textContent = count;
});

res.addEventListener("click", function() {
    count = 0;
    countlabel.textContent = count;
})