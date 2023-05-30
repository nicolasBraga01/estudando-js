// switchCase= verifica e executa as intruções

let frutaPredileta = 'banana';

switch (frutaPredileta) {
  case 'pera':
    console.log('errou');
    break
  case 'banana':
    console.log('não foi dessa vez');
    break;
  case 'maça':
    console.log('acertou');
    break;
  default:
    console.log('Passou foi longe');
}
