const h1 = document.querySelector("#conteudo");
const data = new Date();
let diaSemana;
function getdiaSemana(diaSemana) {
  let diaDaSemanaText;

  switch (diaSemana) {
    case 0:
      diaDaSemanaText = "domingo";
      return diaDaSemanaText;
    case 1:
      diaDaSemanaText = "segunda-feira";
      return diaDaSemanaText;
    case 2:
      diaDaSemanaText = "terça-feira";
      return diaDaSemanaText;
    case 3:
      diaDaSemanaText = "quarta-feira";
      return diaDaSemanaText;
    case 4:
      diaDaSemanaText = "quinta-feira";
      return diaDaSemanaText;
    case 5:
      diaDaSemanaText = "sexta-feira";
      return diaDaSemanaText;
    case 6:
      diaDaSemanaText = "sabádo";
      return diaDaSemanaText;
  }
}
function getnomeMes(numeroMes){
  let nomeMes;

  switch (diaSemana) {
    case 0:
      nomeMes = "janeiro";
      return nomeMes;
    case 1:
      nomeMes = "fevereiro";
      return nomeMes;
    case 2:
      nomeMes = "março";
      return nomeMes;
    case 3:
      nomeMes = "abril";
      return nomeMes;
    case 4:
      nomeMes = "maio";
      return nomeMes;
    case 5:
      nomeMes = "junho";
      return nomeMes;
    case 6:
      nomeMes = "julho";
      return nomeMes;
    case 7:
      nomeMes = "agosto";
      return nomeMes;
    case 8:
      nomeMes = "setembro";
      return nomeMes;
    case 9:
      nomeMes = "outubro";
      return nomeMes;
    case 10:
      nomeMes = "novembro";
      return nomeMes;
    case 11:
      nomeMes = "dezembro";
      return nomeMes;
  }
}

function criarData(data) {
  const diaSemana = data.getDay();
  const numeroMes = data.getMonth();
  const nomeDia = getdiaSemana(diaSemana);
  const nomeMes = getnomeMes(numeroMes);
  return (
    `${nomeDia}, ${data.getDate()} do ${data.getMonth()}` +
    ` de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()} `
  );
}

// ajeitar nome do mês , fiz gambiarra para 'resolver' de forma temporaria.
h1.innerHTML = criarData(data);
