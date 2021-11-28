const alicia = [23, 69, 32]
const bob = [12, 67, 43]

function encontrarGanhador(a, b) {
    let aliciaPontos = 0;
    let bobPontos = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            aliciaPontos++;
        } else {
            (a[i] < b[i])
            bobPontos++;
        }

    }

    console.log(aliciaPontos);
    console.log(bobPontos);

    if (aliciaPontos > bobPontos) {
        return "Alicia";
    } else if(aliciaPontos > bobPontos){
        return "Empate";
    } else{
        return "Bob";
    }
}
console.log("o ganhador é:" + encontrarGanhador(alicia, bob));

/*
Crie a função digitalHouse() que receberá 2 números como parâmetros. A função deve
imprimir na tela os números de 1 a 100, mas levando em conta os seguintes critérios:
● Se o número a ser impresso for um múltiplo do primeiro parâmetro inserido,
você deve exibir a string Digital em vez do número.
● Se o número a ser impresso for um múltiplo do segundo parâmetro inserido,
você deve exibir a string House em vez disso.
● Se o número a ser imprimir for um múltiplo de ambos os parâmetros, você
deve exibir a string Digital House em vez do número.
*/


function digitalHouse (a, b){

    for(let i=1; i<=10; i++){
        if (i%a==0 & i%b==0) {
            console.log("Digital House")
        }else if (i%a==0) {
            console.log("Digital");
        }else if(i%b==0){
            console.log("House");
        }


    }


}
console.log(digitalHouse(5,10));
