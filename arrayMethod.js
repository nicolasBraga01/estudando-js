




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