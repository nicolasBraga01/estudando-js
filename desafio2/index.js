


function conta() {

    let n1 = Number(document.getElementById('num-one').value)
    let n2 = Number(document.getElementById('num-two').value)
    let total = 0

    if (document.getElementById('box1').checked)
        total = n1 + n2
    else if (document.getElementById('box2').checked)
        total = n1 - n2
    else if (document.getElementById('box3').checked)
        total = n1 * n2
    else
        total = n1 / n2
    document.getElementById('resulTado').innerHTML = ' O resultado é : ' + String(total)
}