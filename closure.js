function CreateCounter(num){
    
    let count = 0;

    function increment(){
        
        count++;
        console.log(`connt increased to ${count}`)
    
        
    }

    return {increment};
}

const counter = CreateCounter();

counter.increment(10);
counter.increment(11);
counter.increment(12);