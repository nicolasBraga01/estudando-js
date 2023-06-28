// for of retorna o valor , geralmente usado com iteráveis(array, string)

const nome = ["Nicolas", "Braga"];

for (let valor of nome) {
  console.log(valor);
}

// chama uma funnçao para cada elemento da matriz , essa funnção pode por exemplo retorna o valor , indice , array pertencente
nome.forEach(function (valor, indice) {
  console.log(valor, indice);
});
