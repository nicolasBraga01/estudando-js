
const pessoa = {
    nome: 'Nicolas',
    idade: 99,
    corFavorita: 'vermelho',
    endereco:'Av 123 , Casa 3'
}
// Atribuição via desestrututação

// const{nome, idade} = pessoa;

// const {nome: n, corFavorita} = pessoa;
// console.log(n,corFavorita)

// ... = rest parameter
const {nome, ...sobrou} = pessoa;
console.log(sobrou)