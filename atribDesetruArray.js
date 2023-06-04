
//               0  1  2  3  4  5  6
const numeros = [1, 2, 3, 4, 5, 6, 7]

/*
 ... = rest parameter ou seja:
  Se o último argumento nomeado de uma função
  tiver prefixo com ..., ele irá se tornar um array
  em que os elemento de 0 (inclusive) até theArgs.length (exclusivo)
  são disponibilizados pelos argumentos atuais passados à função.
*/
const [a, b, c, ...resto] = numeros;

// console.log([a,b,c]);

console.log(resto)
// output 4, 5, 6, 7

//                 0  1  2     0  1  2    0  1  2
const numeros2 = [[1, 2, 3] , [4, 5, 6], [7, 8, 9]]

// eu estou dizendo que a array vão ser dividas em blocos
const [grupo1, grupo2, grupo3] = numeros2;

// console.log([grupo1, grupo2, grupo3])

// pego o bloco 2 no indice 2
console.log(grupo2[2])
// output 6

