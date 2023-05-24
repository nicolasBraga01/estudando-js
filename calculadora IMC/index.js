const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  // e = evento de forma abreviada
  e.preventDefault();
  // console.log('passou')
  //   setResultado();

  //pega os valores e transforma em número
  const peso = Number(document.querySelector("#peso").value);
  const altura = Number(document.querySelector("#altura").value);
  console.log(peso,altura)
});

// automatiza a criação de paragrafos
function fazP() {
  const p = document.createElement("p");
  return p;
}
function setResultado(mensagem) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  // cria um elemento do html no javascript
  //   const p = document.createElement("p");

  const p = fazP();

  // adiciona uma classe no elemento que eu criei, oq me dar a possibilidade de formatar pelo css;
  //   p.classList.add("p-resultado");

  //   p.innerHTML = "Verificação ok";

  //   so funciona se tiver essa último parte pois ele diz que o p entrará na div resultado (parte importante)
  resultado.appendChild(p);
}
