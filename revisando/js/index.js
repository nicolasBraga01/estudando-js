// Cenas para os próximos cápitulos

function principal() {
  // console.log('teste')
  let pessoas = [];
  let pessoa = {
    nome: document.getElementById("name").value,
    senha: document.getElementById("senha").value,
  };
  function armazena() {
    addEventListener("submit", function () {
      pessoas.push(pessoa.nome);
      pessoas.push(pessoa.senha);
    });
  } 
 
}
let resultado = document.getElementById('output').innerHTML = "";
// falha em repassar os dados , ou talvez armazenar