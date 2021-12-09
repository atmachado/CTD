
const aluno = require('./construtor');

let aluno1=(new aluno("Gustavo", 1, [6,9,8])) 
let aluno2=(new aluno("Andre", 2, [8,9,5]))
let aluno3=(new aluno("Sandyel", 1, [2,9,8]))
let aluno4=(new aluno("Yasmin", 1, [7,7,8]))
let aluno5=(new aluno("Isabelle", 4, [9,9,8]))

let listaDeEstudantes =[aluno1,aluno2,aluno3,aluno4,aluno5];

module.exports = listaDeEstudantes;


/*
Mesa 4
Yasmin Khalaf 
Isabelle de Almeida Leite
Sandyel Gomes Ferreira
André Tenes Machado
Gustavo Martins
*/