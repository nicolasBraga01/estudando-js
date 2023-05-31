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

// se eu colocar dentro de uma function eu posso substituir o break por return

// function fruta(frutaPredileta){
//   let frutaPrediletaText;
 
//   switch (frutaPredileta) {
//     case 'pera':
//       frutaPrediletaText = 'acertou';
//      return frutaPrediletaText;
//     case 'banana':
//       frutaPrediletaText = 'Não foi dessa vez';
//       return frutaPrediletaText;
//     case 'maça':
//       frutaPrediletaText = 'Quase lá';
//       return frutaPrediletaText;
//     default:
//       frutaPrediletaText = 'passou foi longe';
//   }

// }

// fruta('banana');
