const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
    // e = evento de forma abreviada
  e.preventDefault();
  // console.log('passou')
  setResultado();
});

function setResultado(mensagem) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  // cria um elemento do html no javascript
  const p = document.createElement("p");

  // adiciona uma classe no elemento que eu criei, oq me dar a possibilidade de formatar pelo css;
  p.classList.add("p-resultado");

  p.innerHTML = "Verificação ok";

  //   so funciona se tiver essa último parte pois ele diz que o p entrará na div resultado (parte importante)
  resultado.appendChild(p);
}
