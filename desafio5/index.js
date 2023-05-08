
alert('Boa sorte');

let valorComputer, valorUser, tentativas;
const valoresUser=[];
function init(){
    // cena para os próximos cápitulos
}
function inputBox(){
    const campo = Number(document.getElementById('inputBox').value);
    valoresUser.push(campo); 
    document.getElementById('array').innerHTML = valoresUser;
    document.getElementById('inputBox').innerHTML=valorUser;
    let tenta = valoresUser.length
    document.getElementById('tenta').innerHTML = tenta;
}
