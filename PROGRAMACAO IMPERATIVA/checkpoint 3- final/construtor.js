function aluno(nomeAluno, faltaAluno, notasAluno) {
    this.nome = nomeAluno;
    this.falta = faltaAluno;
    this.notas = notasAluno;
    this.calcularMedia = function(){
        let somaNotas = this.notas.reduce((acumulador, valor) =>{
            return acumulador+valor;
        });
        return somaNotas/this.notas.length;
    }
    this.somarFaltas = function(){
        return this.faltas=this.faltas+1;
    }
}

module.exports = aluno;

/*
Mesa 4
Yasmin Khalaf 
Isabelle de Almeida Leite
Sandyel Gomes Ferreira
André Tenes Machado
Gustavo Martins
*/