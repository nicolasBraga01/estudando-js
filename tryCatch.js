
// try (tente executar , usado para testar códigos'perigosos')
// catch (se ñ funcionar faça isso)
// ñ se lança erros para o usuário 

function somar(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){

        throw new TypeError('x e y precisam ser um número')
        // existem vários tipos de erro e vocẽ pode criar o seu
    }
    return x + y;
}

// somar(5,'2')

try{
    console.log(somar(2,1))
    console.log(somar(4, '2'))
}catch(error){
    // console.log(error)
    console.log('alerta ')
}