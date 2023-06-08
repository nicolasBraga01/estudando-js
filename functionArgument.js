
// Passando argumentos na função 

function price(){
    let total = 0;

    // n preciso declarar por exemplo price(a, b, c, d)
    for (let value of arguments)
    
    total += value
    return total
}

console.log(price(10,40,30,50,40,10))
// output 180