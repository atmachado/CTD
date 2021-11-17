/*
Começamos a partir de nossa variedade de filmes, que tínhamos o seguinte:

e nos pediram para passar todos os elementos para letras maiúsculas, o que
na época tínhamos feito de forma &quot;manual&quot;. Vamos movê-lo para uma maneira mais
automática usando loops.

let peliculas = [&quot;star wars&quot;, &quot;totoro&quot;,  &quot;rocky&quot;, &quot;pulp fiction&quot;,  &quot;la
vida es bella&quot;]

function convertirAMayusculas(array){
  array[0] = array[0].toUpperCase()
  array[1] = array[1].toUpperCase()
  array[2] = array[2].toUpperCase()
  array[3] = array[3].toUpperCase()
  array[4] = array[4].toUpperCase()
  return array

*/
/*
let arrayNome = ["Marcos","João", "Fulano","Ciclano"];


console.log(arrayNome.length);
for (let j = 0; j < arrayNome.length; j++){
    console.log(j,"-",arrayNome[j]);
}
*/

let filmes = ["star war", "totoro", "rocky", "pulp fiction", "a vida é bela"]

function newArray(matriz) {
   
    let newArray = []
    for (let i = 0; i < matriz.lenght; i++) {
        newArray. push(matriz[i]. toUpperCase())
        
    }
return newArray
}

console.log(filmes)
/*
let animations = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"]

função joinArrays(array1, array2 ) {
    deixarletedItem  = array2. Pop();
 para (let i = 0; i < array2. comprimento; i++) {
     array1. empurrar(array2[i ])
 }

 conjunto de retorno1 ;
}

console. log(joinArrays(filmes, animações))

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4]
const europeScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]

função compareRatings(ásia, europa ) {
    para (i = 0; i < ásia. comprimento; i++) {
        console. log(ásia[i] === europa[i])
    }
}

comparaRatings(asiaScores, europeScores )
*/