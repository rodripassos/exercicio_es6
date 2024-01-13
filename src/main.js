const alunos = [['Gustavo', 5], ['Maria', 3], ['João', 9], ['Paula', 6], ['Francisco', 10]];

const alunos2 = alunos.map(function(itemAtual) {
    
    itemAtual = {
        nome: itemAtual[0],
        nota: itemAtual[1]
    }
    return itemAtual;
})

class Aprovado {
    constructor(nomeDoAluno, notaDoAluno) {
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }

    passou() {
        if (this.nota >= 6) { 
        console.log(`O(a) aluno(a) ${this.nome} foi aprovado(a) com a nota: ${this.nota}`);
        }
    }
        
}

for (let resultado of alunos2.values()) {
    let nome = resultado.nome;
    let nota = resultado.nota;
    let aprovado = new Aprovado(nome, nota)
    aprovado.passou();
}


