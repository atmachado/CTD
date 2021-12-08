/*
Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.
Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
*/
// a média das idades das pessoas que responderam ótimo;
const dados2 = require('./entrega/dados2');

function mediaIdades(arr) {
    const listaArray1 = arr.filter(usuario => usuario.opniao === 3);
    const idade = listaArray1.reduce((a, b) => a + b.idade, 0) / listaArray1.length;
    return ("A média de idade das pessoas que responderam ótimo foi: " + idade);
}
console.log(mediaIdades(dados2));


// a quantidade de pessoas que responderam regular;
function quantRegular(arr) {
    const listaArray2 = arr.filter(usuario => usuario.opniao === 1);
    return listaArray2.length + " pessoas responderam regular.";
}

console.log(quantRegular(dados2));

// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
function quantBom(arr) {
    const listaArray3 = arr.filter(usuario => usuario.opniao === 2);
    return (((listaArray3.length * 100) / dados2.length) + "% da pessoas responderam bom.");

}

console.log(quantBom(dados2));
