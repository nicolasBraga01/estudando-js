const elementos = [
  { tag: "p", texto: "Frase1" },
  { tag: "div", texto: "Frase2" },
  { tag: "footer", texto: "Frase4" },
  { tag: "section", texto: "Frase5" },
];

// selecionar o container
const container = document.querySelector(".container");
// cria uma div
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  //innsere  e cria as tag
  const tagName = document.createElement(tag);
  //insere o texto
  tagName.innerHTML = texto;

  //maneira alternativa
  //   const textTag = document.createTextNode(texto)
  //     tagName.appendChild(textTag);
  
  //   empurra para dentro da div
  div.appendChild(tagName);
}

// coloca dentro do container
container.appendChild(div);
