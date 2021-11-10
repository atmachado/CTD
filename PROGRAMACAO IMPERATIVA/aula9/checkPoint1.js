/*Olá, você foi contratado para executar este projeto. 
É importante que você analise, entenda o pedido do cliente e desenvolva
conforme solicitado. 
Veja abaixo os requisitos do projeto:

Precisamos desenvolver um menu para um microondas super veloz, 
onde teremos 5 opções de comida com seus respectivos tempos 
pré-definidos. 

1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de 
acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.

- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, 
o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: 
"Prato pronto, bom apetite!!!".

*/

function microondas(tempo,comida) {
 
let pipocaTempo = 10;
let macarraoTempo = 8;
let carneTempo = 15;
let feijaoTempo = 12;
let brigadeiroTempo = 8;

let pipocaNome = "Pipoca";
let macarraoNome = "Macarrão";
let carneNome = "Carne";
let feijaoNome = "Feijão";
let brigadeiroNome = "Brigadeiro";


if(
    (comida == pipocaNome && (tempo == pipocaTempo || (tempo > pipocaTempo && tempo < pipocaTempo *2))) ||
    (comida == macarraoNome && (tempo == macarraoTempo || (tempo > macarraoTempo && tempo < macarraoTempo *2))) ||
    (comida == carneNome && (tempo == carneTempo || (tempo > carneTempo && tempo < carneTempo *2))) ||
    (comida == feijaoNome && (tempo == feijaoTempo || (tempo > feijaoTempo && tempo < feijaoTempo *2))) ||
    (comida == brigadeiroNome && (tempo == brigadeiroTempo || (tempo > brigadeiroTempo && tempo < brigadeiroTempo *2)))){
    
        console.log("Prato pronto, bom apetite !!");
    
} else if (

    //(comida == carneNome && (tempo >= carneTempo *2 || (tempo > carneTempo && tempo < carneTempo *3))) ||

    (comida == pipocaNome && (tempo >= pipocaTempo *2 && tempo < pipocaTempo *3)) ||
    (comida == macarraoNome && (tempo >= macarraoTempo *2 && tempo < macarraoTempo *3)) ||
    (comida == carneNome && (tempo >= carneTempo *2 && tempo < carneTempo *3)) ||
    (comida == feijaoNome && (tempo >= feijaoTempo *2 && tempo < feijaoTempo *3)) ||
    (comida == brigadeiroNome && (tempo >= brigadeiroTempo *2 && tempo < brigadeiroTempo *3)))
    {
        console.log("Sua comida queimou !!");
    
} else if (
    (comida == pipocaNome && tempo < pipocaTempo) ||
    (comida == macarraoNome && tempo < macarraoTempo) ||
    (comida == carneNome && tempo < carneTempo) ||
    (comida == feijaoNome && tempo < feijaoTempo) ||
    (comida == brigadeiroNome && tempo < brigadeiroTempo)
){
    console.log("Tempo insulficiente !!")

} else if (
    (comida == pipocaNome && tempo >= pipocaTempo *3) ||
    (comida == macarraoNome && tempo >= macarraoTempo *3) ||
    (comida == carneNome && tempo >= carneTempo *3) ||
    (comida == feijaoNome && tempo >= feijaoTempo *3) ||
    (comida == brigadeiroNome && tempo >= brigadeiroTempo *3)
) {
    console.log("KABUMMMMM !!")

} else if (

    (comida == pipocaNome && tempo < pipocaTempo) ||
    (comida == macarraoNome && tempo < macarraoTempo) ||
    (comida == carneNome && tempo < carneTempo) ||
    (comida == feijaoNome && tempo < feijaoTempo) ||
    (comida == brigadeiroNome && tempo < brigadeiroTempo))
    {
        console.log("Tempo insulficiente")

}else 
        console.log("Prato inexistente")
    {
}
    
}

//teste prato inexistente
microondas(45,"Jiló")
//teste tempo insuficiente (tempo inferior ao padrão)
microondas(9,"Pipoca")
microondas(7,"Macarrão")
microondas(14,"Carne")
microondas(11,"Feijão")
microondas(7,"Brigadeiro")
//teste comida queimada (tempo 2x do padrão)
microondas(20,"Pipoca")
microondas(16,"Macarrão")
microondas(30,"Carne")
microondas(24,"Feijão")
microondas(16,"Brigadeiro")
//teste KABUMMM (tempo 3x do padrão)
microondas(30,"Pipoca")
microondas(24,"Macarrão")
microondas(45,"Carne")
microondas(36,"Feijão")
microondas(24,"Brigadeiro")
//teste bom apetite (tempo igual padrão)
microondas(10,"Pipoca")
microondas(8,"Macarrão")
microondas(15,"Carne")
microondas(12,"Feijão")
microondas(8,"Brigadeiro")
