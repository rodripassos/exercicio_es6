const alunos = [{nome:'Gustavo', nota: 5},
                {nome:'Maria', nota: 3}, 
                {nome:'João', nota: 9}, 
                {nome: 'Paula', nota: 6}, 
                {nome: 'Francisco', nota: 10}];

                
function filtraAlunosAprovados(aluno) {
    return aluno.nota >= 6;
}

const alunosAprovados = alunos.filter(filtraAlunosAprovados)

for (let resultado of alunosAprovados.values()) {
    let nome = resultado.nome;
    let nota = resultado.nota;
    console.log(`O(a) aluno(a) ${nome} foi aprovado(a) com a nota: ${nota}`);
}


