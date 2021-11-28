
/*Objetivo
Vamos realizar uma série de práticas que nos ajudarão a entender a funcionalidade e 
praticidade que os módulos trazem aos nossos programa*/



/*1)Em um arquivo.js, crie uma função (ou várias). Pode ser uma função que adicione dois 
parâmetros ou qualquer operação que você deseje.*/

/*2)Modifique seu arquivo para que seja um módulo que exporte a função criada na etapa anterior. 
Lembre-se de usar a palavra reservada correta.*/

/*Em outro arquivo JavaScript (arquivo2.js), dentro da mesma pasta de trabalho, solicite o módulo que você exportou.*/

/*Verifique se sua função funciona corretamente.*/

const divisao = require("./modulos/divisao"); 
console.log(divisao(5,3).toPrecision(3));


