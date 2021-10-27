//micro desafio 1
function teste1(x,y){
    return y - x
}

teste1(10,40)
// Resposta: não vai retornar resultado porque não foi pedido para exibir o resultado

//micro desafio 2
function teste2(x,y){
    return x*2
    console.log(x)
    return x/2
}

teste2(10);
// Resposta: console log está dentro do return, ele precisa estar antes

//Funções Simples:

//1-Crie uma função que converta polegadas em centímetros. 
//Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

function converter_pol_cm (cm){
return cm * 2.54;

}
console.log(converter_pol_cm(5));

//2-Crie uma função que receba uma string e a converta em um URL.
//ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

function funcaojs (nome){
    return "http://"+nome+".com.br"
}
console.log (funcaojs("digitalhouse"));

//3-Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

function string (frase){
    return frase+"!"
}
console.log (string("Exercicios em pouco tempo"));

//4-Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

function calcao (anos){
    return anos*7;

}
console.log (calcao(10));

//5-Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
function timeJob (salario){
    return salario/30;
}
console.log(timeJob(900));

//6-Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. 
//Em seguida, execute a função, testando diferentes valores. 

function imc (peso,alt){
    return peso / (alt*alt)
}
console.log("O IMC de João é de:"+imc(120,1.90))
console.log("O IMC de Maria é de:"+imc(70,1.70))
console.log("O IMC de Pedro é de:"+imc(90,1.80))

//7-Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
//Investigue o que o método de .toUpperCase() faz.
function converter (texto){
        return (texto);
        
}
console.log (converter("finalmente consegui!!").toUpperCase());

//8-Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
//Dica: Isso te ajudará a entender o que o operador typeof faz.

function tipoDados (dados){
    return typeof dados;
}
console.log (tipoDados(1234));

//9-Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
//Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.

function circulo (raio){
    return (Math.PI *2)* raio;

}
console.log (circulo(2))
