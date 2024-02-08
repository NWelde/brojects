const prices = [1,2,3,4,5,6,7,8,9,1,3,5,6,77,123,];

const total = prices.reduce()

function adding(accumlator , element){
    return accumlator + element;
}

console.log(`$${total.fixed(2)}`)
