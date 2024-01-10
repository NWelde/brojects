let count = 0;
const dec = document.getElementById("dec");
const res = document.getElementById("res");
const inc = document.getElementById("inc");
const countlabel = document.getElementById("lab");

inc.addEventListener = function(){
    count++;
    countlabel.textContent = count;
}
dec.addEventListener = function(){
    count--;
    countlabel.textContent = count;
}
res.addEventListener = function(){
    count=0;
    countlabel.textContent = count;
}
