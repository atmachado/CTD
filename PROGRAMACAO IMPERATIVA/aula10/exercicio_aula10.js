//Micro desafios
//Crie um array que contenha nomes de produtos para compra.

let listaCompras = ["Arroz", "Feijão", "Macarrão", "Açucar"];
console.log(listaCompras);

/*Após isso, exiba no console os resultados das funções relacionadas aos arrays, 
que são: Join, Pop, Push, Shift e Unshift. */

let Compras = listaCompras.join();
console.log("O método JOIN junta elementos de um array");
console.log(listaCompras);

let x = listaCompras.pop();
console.log("O método POP elimina o ultimo elemento de um array");
console.log(listaCompras);
console.log(x);

listaCompras.push("Biscoito");
console.log("O método PUSH Adiciona um ou mais elementos ao final do array");
console.log(listaCompras);

let y = listaCompras.shift();
console.log("O método SHIFT Elimina o primeiro elemento de um array")
console.log(listaCompras);
console.log(y);

listaCompras.unshift(y);
console.log("O método UNSHIFT adiciona um ou mais elementos no inicio do array")
console.log(listaCompras);

