




// Array primitiva
const frutas = ['Maça', 'Pera', 'Uva', 'Banana']
console.log(frutas.indexOf('Pêssego'))

// Caso contenha o parâmetro passado ele informe o índice que ele está

// Resposta -1 pq não existe na array


// Array com referências(objetos)
const movies = [
    {id: 1, movieName:'Tarzan'},
    {id: 2, movieName:'Futurama'},
    {id: 3, movieName:'Zumbilândia'},
    {id: 4, movieName:'De Volta para o Futuro'}
]

console.log(movies.find(function(movie){
    return movie.movieName === 'Django Livre'
}))

// undefined pq ñ existe na array

// Array function (function com return incluso )  + fácil de usar
console.log(movies.find(movie => movie.movieName === 'Django Livre'))

/*
Esvaziar Array:
xxx = []
xxx.length = 0
xxx.splice(o, xxx.length)

Concatenar array:
xxx.concat 

Adicionar alguma coisa na array:
xxx.join

Organizar em ordem:
xxx.sort()

Inverter ordem:
xxx.reverse

xxx.every verifica todos os elementos e checa condição (precisa de uma função)

xxx.filter filtra e retorna



*/ 