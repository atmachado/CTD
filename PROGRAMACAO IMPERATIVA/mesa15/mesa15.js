const dados = require("./dadosJson");
function ContaBancaria(numero, tipoConta, saldo, titular){
    this.numero = numero;
    this.tipoConta = tipoConta;
    this.saldo = saldo;
    this.titular = titular;
}

let contaCorrente = [];

for(let i =0; i < dados.length; i++){
   contaCorrente.push(new ContaBancaria(dados[i].numero, dados[i].tipoConta, dados[i].saldo, dados[i].titular)) 
}


banco = {
  clientes: contaCorrente,
  consultarcliente: function (titularAcc) {
    return this.clientes.find((obj) => obj.titular === titularAcc);
  },
};

console.log(banco.consultarcliente("Jarret Lafuente"));