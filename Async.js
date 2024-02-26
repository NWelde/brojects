function fun1(callback) {
    setTimeout(() => {
        console.log("Task one complete");
        callback();
    }, 3000);
}

function fun2() {
    console.log("Task 2 complete");
    console.log("Task 3 complete");
    console.log("Task 4 complete");
}

fun1(fun2); // calling fun1 with fun2 as a callback functio