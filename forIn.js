
//For in lê indice e chaves de objetos e arrays

const pessoas = {
  nome: "Nicolas",
  idade: 17,
  sobrenome: "Braga",
};

for (chave in pessoas) {
  console.log(chave, pessoas[chave]);
}

/*
    output:
    nome Nicolas
    idade 17
    sobrenome Braga

*/

for(index in pessoas){
    console.log(pessoas[index])
}

/*
    output:
    Nicolas
    17
    Braga

*/

const frutas = ['maça', 'pera', 'uva'];

for(indice in frutas){
    console.log(frutas[indice])
}

/*
    output:
    maça
    pera
    uva

*/

