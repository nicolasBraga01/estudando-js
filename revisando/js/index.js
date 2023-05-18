function principal(){
  // retorna o primeiro elemento com tal parâmetro
  const form = document.querySelector('.form');
  const resultado = document.querySelector('resultado');

  const pessoas = [];

  function recebeDados(evento){
    // Impedir que um link abra o URL:
    evento.preventDefault();

    const nome = form.querySelector('#name');
    const senha = form.querySelector('#senha');

    // console.log(nome.value, senha.value);
    
    // empurro para a array
    pessoas.push({
      nome : nome.value,
      senha: senha.value
    })

    // console.log(pessoas)
    resultado = document.getElementById('output').innerHTML = `Seu usuário é: ${nome.value} 
    e sua senha: ${senha.value}`
  }
  // quando clicarem no botão de submit ele vai executar a função recebe dados
  form.addEventListener('submit', recebeDados);
}

principal();