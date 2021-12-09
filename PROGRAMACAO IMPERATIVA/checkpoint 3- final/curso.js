const aluno = require('./construtor');

const listaDeEstudantes = require('./estudantes');

let curso = {
    nomeDoCurso: "Programação Imperativa",
    notaDeAprovacao: 7,
    faltasMax: 5,
    estudantesLista: listaDeEstudantes,
    adicionarAluno: function(aluno) {
        this.estudantesLista.push(aluno)
    },
    verificarAluno: function(aluno) {

        let isaprovado;

        if (
            aluno.falta < this.faltasMax && aluno.calcularMedia() >= this.notaDeAprovacao || aluno.falta == this.faltasMax && aluno.calcularMedia() >= this.notaDeAprovacao * 1.1
        ) {
            isaprovado = true;
        }

        else {
            isaprovado = false;
        }
        return 'O ' +aluno.nome+ ' foi aprovado? '+ isaprovado;
    },
    resultadosAlunos: function(alunos) {
        let arrayResultados = [];

        for(let i = 0; i < alunos.length; i++) {
            arrayResultados[i]= this.verificarAluno(alunos[i])
        }
        return arrayResultados;
    }
};

console.log(curso.estudantesLista[0].calcularMedia());

console.log(curso.estudantesLista);

curso.adicionarAluno(new aluno("Testoso", 2, [10,9,8]))

console.log(curso.verificarAluno(curso.estudantesLista[1]));

console.log(curso.resultadosAlunos(curso.estudantesLista));

/*
Mesa 4
Yasmin Khalaf 
Isabelle de Almeida Leite
Sandyel Gomes Ferreira
André Tenes Machado
Gustavo Martins
*/