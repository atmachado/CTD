//MESA 10

//Em primeiro lugar, vamos praticar as ações mais comuns e necessárias:
//A)
let lista = ["Mesa 1", "Mesa 2", "Mesa 3", "Mesa 4",];
console.log("A.Acessar elementos específicos de um array.(Posição 2)")
console.log("Lista completa: " + lista)
console.log("posição 2: "+ lista[2]);

//B)

//let listaB = ["Mesa 1", "Mesa 2", "Mesa 3", "Mesa 4",];
lista[0] = "Cadeira 1";
lista[1] = "Cadeira 2";
lista[2] = "Cadeira 3";
lista[3] = "Cadeira 4";

console.log("B.Modificar cada um dos elementos de um array e imprimi-los no console");
console.log("Lista completa modificada: " + lista);

//C.Adicionar elementos a um array.

console.log("C.Adicionar elementos a um array.");
lista.push("Cadeira 5","Cadeira 6");
console.log("Lista completa com acrescimo de mais duas posiçõs: "+lista);

//D.Extrair elementos de um array.

console.log("D.Extrair elementos de um array.");
lista.shift();
console.log("Lista Completa sem o primeiro item: " +lista);


//E.Comparar elementos de um array com os elementos de outro.

let loja1 = ["Brama","Skol", "Itaipava", "Schin", "Erdinger"];
let loja2 = ["Brama", "Spaten", "Itaipava", "Heinecken", "Erdinger"];

/*
console.log(array1.includes(array2[0]));
console.log(array1.includes(array2[1]));
console.log(array1.includes(array2[2]));
console.log(array1.includes(array2[3]));
console.log(array1.includes(array2[4]));
*/

console.log(loja1[0]+" tem na loja 1 e na 2?: "+(loja1.includes(loja2[0])));
console.log(loja1[1]+" tem na loja 1 e na 2?: "+(loja1.includes(loja2[1])));
console.log(loja1[2]+" tem na loja 1 e na 2?: "+(loja1.includes(loja2[2])));
console.log(loja1[3]+" tem na loja 1 e na 2?: "+(loja1.includes(loja2[3])));
console.log(loja1[4]+" tem na loja 1 e na 2?: "+(loja1.includes(loja2[4])));

/*
let loja2 = ["Brama","Skol", "Itaipava", "Schin", "Erdinger"];
se(loja2[0] == loja2[1]);
    console. log("Os dados das posições das matrizes são iguais: "+"loja2[0] = "+loja1[0]+ " loja2[2] = " + loja2[2])
mais
        console. log("Os dados das posições das matrizes não são iguais");
    
 */   

