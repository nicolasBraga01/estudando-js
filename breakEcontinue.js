
// o continue quebra o loop (pula), executa até o final.
// o break para o laço.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i of numeros) {
//   if (i === 3) {
//     console.log("pulou o 3");
//     continue;
//   }
//   console.log(i);
//   if(i===7){
//     console.log('7 saindo...')
//     break
//   }
// }
let i = 0
while(i < numeros.length){
  let numero = numeros[i];
    if(numero === 3){
      console.log("pulou o 3");
      i++
      continue
    }
    console.log(numero)
    if(numero === 6){
      console.log('parou###')
      i++
      break
    }
  i++
  // obs sempre concatenar antes do continue ou do break pq se ñ entrará em loop
  // no caso acima se eu n coloca i++ antes do continue o numero sempre seria 3
}

