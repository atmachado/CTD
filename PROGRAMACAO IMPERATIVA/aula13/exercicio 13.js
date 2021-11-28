/*A partir de um banco eles entram em contato conosco para criar um aplicativo que possa facilitar o manuseio de informações e facilitar as ações que ele precisa. 
Nosso líder de tecnologia nos pede para pensar em como representar usuários, ou contas bancárias, em vez disso. Cada uma dessas contas tem as seguintes informações:
●	Número da conta (somente números)
●	Tipo de conta (conta corrente ou poupança em $)
●	Saldo em $ (valor apenas)
●	Titular da conta (nome completo)
Com essa informação em mente, somos solicitados a fazer o seguinte.
*/



//1.	Pense na melhor forma de representar tais contas, e por quê? (discutir coma equipe sobre as diferentes estruturas e qual é a mais conveniente)

function contaBancaria (nConta, tConta, sConta, titularConta){
    this.Conta = nConta;
    this.Tipo = tConta;
    this.Saldo = sConta;
    this.titular = titularConta;
}

/*2.Uma vez decidido qual será o tipo de dados para representar as contas das contas, crie uma conta de teste e verifique se as 
propriedades mencionadas acima são criadas corretamente.*/

console.log(new contaBancaria(5486273622,'Conta Corrente',27771,"Abigael Natte"));
console.log(new contaBancaria(1183971869,'Conta Poupança',8675,"Ramon Connell"));

/*3.	Agora que sabemos como representar usuários e suas contas, o cliente nos forneceu uma lista de contas que devemos ser capazes de criar. 
Para isso, devemos gerar uma função construtora que facilite a criação das contas bancárias correspondentes mais rapidamente. */

let contaBancaria1 = {
    "Conta": 5486273622,
    "Tipo": "Conta Corrente",
    "Saldo": 27771,
    "Titular": "Abigael Natte"
}
let strConta1 = JSON.stringify(contaBancaria1);
console.log(strConta1);

/*4.	A partir dos 10 usuários, gere uma lista onde todos eles convergem (lista de objetos)*/


function ContasBancarias(numeroDeConta, tipoDeConta, saldo, titularDaConta) {
    this.numeroDeConta = numeroDeConta;
    this.tipoDeConta = tipoDeConta;
    this.saldo = saldo;
    this.titularDaConta = titularDaConta;
}


let conta0 = new ContasBancarias('5486273622', 'Conta Corrente', 27771, 'Abigael Natte');
let conta1 = new ContasBancarias('1183971869', 'Conta Poupança', 8675, 'Ramon Connell');
let conta2 = new ContasBancarias('9582019689', 'Conta Poupança', 27363, 'Jarret Lafuente');
let conta3 = new ContasBancarias('1761924656', 'Conta Poupança', 32415, 'Ansel Ardley');
let conta4 = new ContasBancarias('7401971607', 'Conta Poupança', 18789, 'Jacki Shurmer');
let conta5 = new ContasBancarias('630841470', 'Conta Corrente', 28776, 'Jobi Mawtus');
let conta6 = new ContasBancarias('4223508636', 'Conta Corrente', 2177, 'Thomasin Latour');
let conta7 = new ContasBancarias('185979521', 'Conta Poupança', 25994, 'Lonnie Verheijden');
let conta8 = new ContasBancarias('3151956165', 'Conta Corrente', 7601, 'Alonso Wannan');
let conta9 = new ContasBancarias('2138105881', 'Conta Poupança', 33196, 'Bendite Huggett');

const cadastroContasBancarias = [conta0, conta1, conta2, conta3, conta4, conta5, conta6, conta7, conta8, conta9];


console.log(cadastroContasBancarias);



