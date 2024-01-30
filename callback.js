function sayhi(){
  console.log("this text was displayed after 3 seconds ")
}
function callback1(callback){
  setTimeout(callback, 3000); 
}

callback1(sayhi);

console.log("this was text was desplayed immediatley ")