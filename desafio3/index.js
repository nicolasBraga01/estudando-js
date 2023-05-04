


function formatarDin(value){
    // Resolve problema das casas decimais e arrendondamento
    value = Math.ceil(value * 100) / 100;
    value = value.toFixed(2)
    return '$' + value
}

function funcionaJS(){
    // puxo o valor de cada uma 
 let bill = Number(document.getElementById('yourBill').value)
 let tipPorcento = document.getElementById('tipInput').value
 let split = document.getElementById('splitInput').value
        // operações matemáticas
 let tipValue = bill * (tipPorcento / 100);
 let billTotal = bill + tipValue ;
 let billEach = billTotal / split;
        //    console.log(billEach);

    document.getElementById('tipPercent').innerHTML =  tipPorcento +'%';
    document.getElementById('tipValue').innerHTML = formatarDin (tipValue);
    document.getElementById('totalWithTip').innerHTML = formatarDin (billTotal);
    document.getElementById('splitValue').innerHTML = split;
    document.getElementById('billEach').innerHTML = formatarDin (billTotal / split);
}
funcionaJS(); 