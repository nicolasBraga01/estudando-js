

const colors = ['Green', 'Yellow', 'Purple', 'Blue', 'Red']
const btn = document.getElementById('btn')

// retorna o primeiro seletor correspondente
const color = document.querySelector('#cor')

// "escuta o html" e executa
btn.addEventListener('click', function() {

    const randomColor = getRandomColor()

    // mexe no css
    document.body.style.background = colors[randomColor]
    color.textContent = colors[randomColor]

})

function getRandomColor() {
    // retornar números inteiros
    return Math.floor(Math.random() * colors.length)
}