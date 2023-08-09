const database = {
    turmas: [],
    alunos: []
};

new Turma(1, 7)
new Turma(2, 8)
new Turma(3, 6)
new Turma(4, 5)

new Aluno('João', 'Silva', 'joao@example.com', 2, '15/03/2002', '8.5, 7.2, 9.0', 'ativo')
new Aluno('Maria', 'Souza', 'maria@example.com', 1, '10/07/2003', '9.8, 8.0, 7.5', 'ativo')
new Aluno('Pedro', 'Ribeiro', 'pedro@example.com', 3, '05/11/2002', '6.4, 7.8, 8.2', 'ativo')
new Aluno('Luis', 'Viana', 'luis@example.com', 4, '17/03/2002', '7.4, 8.8, 6.2', 'ativo')
new Aluno('João', 'Santos', 'joao@example.com', 5, '05/07/2003', '8.5, 7.0, 9.8', 'ativo')
new Aluno('Maria', 'Oliveira', 'maria@example.com', 4, '20/01/2002', '9.0, 9.5, 8.2', 'inativo')
new Aluno('Pedro', 'Rodrigues', 'pedro@example.com', 3, '15/11/2002', '7.8, 6.5, 7.0', 'ativo')
new Aluno('Camila', 'Lima', 'camila@example.com', 4, '30/09/2001', '6.5, 8.0, 7.3', 'ativo')

console.log(database.alunos)

function Turma(idTurma, maximo) {
    if (!new.target) { // 
        return new Turma(idTurma, Aluno);
    };
    
    this.idTurma = Number(idTurma);
    this.maximo = Number(maximo);
    database.turmas.push(this);
}

function cadastraTurma (idTurma, maximo) {
    try {
        idTurma = prompt('Digita número de identificação da turma: ')
        if(!idTurma) throw new Error('Identificação da turma não pode ser vazio') 
        
        if(database.turmas.length > 10) {
            throw new Error('Máximo de turmas: 10. Não é possível cadastar')
        }
        
        database.turmas.forEach(turma => {
            if(turma.idTurma === idTurma) {
                throw new Error('Turma já existente, digite uma turma válida.')
            }
        })

        console.log(database.turmas)

        maximo = prompt('Digita o número de alunos máximo por turma: ')
        if(!maximo) throw new Error('Limite de alunos da turma não pode ser vazio')

        maximo = parseInt(maximo);
            if(isNaN(maximo) ||maximo > 10 || maximo < 5) {
                throw new Error('Máximo de alunos: 10; e Mínimo de alunos: 5. Digite valor válido')
            }
    } catch (error) {
        alert('Erro: ' + error.message);
    }

    /* const continuarCadastrar = confirm('Deseja cadastrar outra turma?');
    if(continuarCadastrar) cadastraTurma(); */

    return new Turma(idTurma, maximo)
}



function Aluno (nome, sobrenome, email, idTurma, nascimento, notas, ativo) {
    if (!new.target) { // 
        return new Aluno(nome, sobrenome, email, idTurma, nascimento, notas, ativo);
    };

    this.nome = nome.charAt(0).toUpperCase() + nome.slice(1);
    this.sobrenome = sobrenome.charAt(0).toUpperCase() + sobrenome.slice(1);
    this.email = email.toLowerCase();
    this.idTurma = Number(idTurma);
    this.nascimento = nascimento;
    this.notas = notas.split(',').map( nota => {
        if(nota > 10) throw new Error('Digite um nota válida, até 10');
        const notasParseNumber = Number(nota)
        return notasParseNumber
    });
    this.ativo = ativo === 'ativo' ? true : false;

    database.alunos.push(this);
}

function cadastraAluno (nome, sobrenome, email, idTurma, nascimento, notas, ativo) {
    
    try {
        nome = prompt('Digite primeiro nome do aluno: ')
        if(!nome) throw new Error('Nome não pode ser vazio')
        
        sobrenome = prompt('Digite sobrenome do aluno: ')
        if(!sobrenome) throw new Error('Sobrenome não pode ser vazio')
        
        email = prompt('Digite e-mail do aluno: ')
        if(!email) throw new Error('E-mail não pode ser vazio')
        
        idTurma  = prompt('Digite numero de identificação da turma do aluno: ') 
        if(!idTurma) throw new Error('Id da turma não pode ser vazio')

        nascimento = prompt('Digite data de nascimento do aluno: ')
        if(!nascimento) throw new Error('Data de nascimento não pode ser vazio')
        
        notas = prompt('Digite as notas do aluno(SEPARADO POR VIRGULA): ')
        if(!notas) throw new Error('Notas não pode ser vazio')
        
        ativo = prompt(`O aluno está ativo? \n Digite 'ativo' ou 'inativo': `)
        if(!ativo) throw new Error('Status da matricula não pode ser vazio')
    } catch (error) {
        alert('Erro: ' + error.message)
    }
    
    return new Aluno(nome, sobrenome, email, idTurma, nascimento, notas, ativo);
}

function removeAluno(email) {
    let alunoParaRemover = database.alunos.findIndex(aluno =>  {
        return aluno.email === email
    })

    if(alunoParaRemover !== -1) {
        database.alunos.splice(alunoParaRemover, 1);
        alert('Aluno removido com sucesso!')
    } else {
        alert('Aluno não encontrado.')
    }
}

function atualizaDadosDoAluno() {

}

function mostrarAlunoEspecifico(email) {
    let alunoPesquisado = database.alunos.find(aluno => aluno.email === email)

    console.log(alunoPesquisado)
}

function mostraListaDeAlunosCompleta() {
    
}

function mostraQuatidadeDeTurmas() {

}