
function ramdom (min, max){
   const n = Math.random() * (max-min) + min;
   //arrendonda
   return Math.floor(n);
}


const min = 1;
const max = 30;

let rand = ramdom(min, max);
//let rand = 10;

while( rand !== 10){
    rand = ramdom(min, max);
    console.log(rand)
}

console.log('########')

//executa ao menos uma vez 
do{
    //rand = ramdom(min, max);
    console.log(rand)
}while(rand !== 10);