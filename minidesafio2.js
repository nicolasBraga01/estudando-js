// Escreva uma função chamada ePaisagem que
// recebe  dois argumentos, largura e altura
// de uma imagem(number).
// Retorne true se a imagem estiver no modo 
// paisagem




// INFO 
// No modo paisagem, as dimensões da imagem são
// geralmente mais largas do que altas.

// minha solução
// function ePaisagem(largura, altura){
//     if(largura > altura){
//         return true;
//     }
//     return false;
// }

// console.log(ePaisagem(22,9))

const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1080, 1920))