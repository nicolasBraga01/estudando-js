
// desafio colocar a cor de fundo no body nos paragrafos

const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

// metodo do navegador
const estilosBody = getComputedStyle(document.body);

const backgroundColor = estilosBody.backgroundColor;

console.log(backgroundColor);   

for(let p of ps){
     p.style.color = 'white';  
     p.style.backgroundColor = backgroundColor;  
}    