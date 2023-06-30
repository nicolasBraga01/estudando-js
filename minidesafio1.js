// Escreva uma função que recebe dois números e retorne o maior deles

// minha resolução
// function maiorNumber(valor1, valor2){
//    if(valor1 > valor2){
//     return valor1;
//    }else{
//     return valor2;
//    }
// }
// console.log(maiorNumber(67, 477))

// #################################

// function maiorNumber(valor1, valor2){
//     if(valor1 > valor2){
//      return valor1;
//     }
//     // não precisa do else pois se a condiçao do bloco acima for falsa ele ja sai da funcão
//      return valor2;
    
//  }

//  function maiorNumber(valor1, valor2){
//     // FORMA REDUZIDA DE FAZER

//     // Se valor 1 for maior que valor2 retorne valor1 se ñ retorne valor 2
//     return valor1 > valor2 ? valor1 : valor2;
    
//  }

// usando arrowfunction 
const maxNumber = (x, y) => x > y ? x:y;
// ñ utilizei o return porque ja fica explícito
console.log(maxNumber(223, 22))