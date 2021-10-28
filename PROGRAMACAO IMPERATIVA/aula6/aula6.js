//calculadora - nivel I
//1.Crie um arquivo calculadora.js que terá as diferentes operações  para realizar.
//2.Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.

function adicionar(a,b) {
    
    return (a+b);

}

//3.Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.
function subtracao(a,b) {
    
    return (a-b);

}

//4.Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.
function multiplicacao(a,b) {
    
    return (a*b);

}

//Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.
function divisao(a,b) {
    
    return (a/b);

}


/*calculadora - nivel II
1.No seu arquivo calculadora.js,  a partir das 4 funções feitas anteriormente, 
crie um console.log no qual você irá colocar uma string para indicar que abaixo dela você começará a testar as funções, por exemplo:
console.log ("-------------- Teste de Operações / Calculadora --------------")*/

console.log ("-------------- Teste de Operações / Calculadora --------------");

//2.Execute a função que soma e a função que subtrai, passando quaisquer dois números como argumentos. Mostrar resultados no console.

console.log(adicionar (10,5));
console.log(subtracao (10,5));

//3.Execute a função que multiplica, passando quaisquer dois números como argumentos. Mostre o resultado no console.

console.log(multiplicacao (10,5));

//4.Execute a função que faz divisão, passando quaisquer dois números como argumentos. Mostre o resultado no console.

console.log(divisao (10,5));

//5.Execute a função que faz divisão, passando agora o número zero como um dos dois argumentos. Mostre o resultado no console.

console.log(divisao (0,0));

//Calculadora - Nível III - Funções Extras
//1.Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
//Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado do parâmetro inserido em power().

function quadradoDoNumero (x){
    return multiplicacao(x,x)
}
console.log(quadradoDoNumero (5));   

/*2.Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.*/

function mediaDeTresNumeros (x,y,z){
    return ((x+y+z)/3);
}
console.log(mediaDeTresNumeros(1,2,3))

/*3.Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá 
retornar x% de totalPorcentagem. 
Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300). 

Importante: calculaPorcentagem() você precisará usar algumas funções criadas anteriormente em nossa calculadora.*/

function calculaPorcentagem (a,b){
    return ((a*b)/100)+"%";

}
console.log (calculaPorcentagem(300,15))

/*Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação
ao segundo parâmetro.
Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).*/

function geradorDePorcentagem (a,b){
    return ((a/b)*100)+"%";
}
console.log (geradorDePorcentagem(2,200))

/*Parabéns, conseguimos aplicar e entender conceitos que vão nos servir ao longo de nossa carreira, 
agora temos que pensar em melhorias para nossa Calculadora com o conhecimento que iremos adquirir no futuro.*/

