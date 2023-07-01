function mostrarHora() {
  let data = new Date();
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}
// configurar um intervalo de tempo para que tal funçao seja executada
const timer = setInterval(function () {
  console.log(mostrarHora());
}, 1000);

// para um intervalo, executa apenas uma vez

setTimeout(function () {
  clearInterval(timer);
}, 3000);

setTimeout(function () {
  console.log("Olá mundo");
}, 4000);
