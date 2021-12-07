const pessoasDados = require('./dados')

//a maior e a menor altura do grupo
function maiorAltura(array) {
    let altura = [] //array vazia
    for (let i = 0; i < array.length; i++) { //percorre o banco de dados
        
        altura.push(array[i].altura)// lança os dados no array
    }
    return `A pessoa mais alta tem: ${Math.max(...altura)} e a pessoa mais baixa tem: ${Math.min(...altura)}`
    } 



//a média de altura das mulheres
function mulherMaisAlta(array) {
    let alturaMulher = [] //array vazia
    let mediaAltura = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i].sexo == "F") {
            alturaMulher.push(Number(array[i].altura))
        }
    }
let sum = alturaMulher.reduce((acc, num) => acc + num, 0)

return `A mulher mais alta tem: ${mediaAltura = sum / alturaMulher.length} m`
}


//o número de homens
function homensQtd(array) {
    
    return `A lista apresenta ${array.filter((i) => i.sexo == "M").length} homens.`
}



console.log(maiorAltura(pessoasDados))
console.log(mulherMaisAlta(pessoasDados))
console.log(homensQtd(pessoasDados))
