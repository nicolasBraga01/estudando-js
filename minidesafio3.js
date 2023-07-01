// Escreva uma função que recebe um número e
// retorne o seguinte
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número ñ é divisível por 3 e 5 = Retorna o próprio número
// Checar se é realmente um número = NaN
// use a funçao com numeros de 0 a 100

// Lembrar de procurar um jeito mais "limpo" de resolver
function checkNumber(numero){
    if(numero % 3 === 0 && numero % 5 ===0){
        return 'FizzBuzz'
    }
    if(numero % 3 === 0){
        return 'Fizz'
    }
    if(numero % 5 ===0){
        return 'Buzz'
    }
    if(typeof numero !== 'number'){
        return NaN;
    }
    return numero;
}
console.log(checkNumber('string'))
for( let i=0;i <= 100; i++){
    console.log(i, checkNumber(i))
}