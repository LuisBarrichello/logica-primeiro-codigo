const database = {
    turmas: [],
    alunos: []
};

new Turma(1, 7)
new Turma(2, 8)
new Turma(3, 6)
new Turma(4, 5)
new Turma(5, 7)
new Turma(6, 8)
new Turma(7, 6)

new Aluno('João', 'Silva', 'joao@exemplo.com', 2, '15/03/2002', '8.5, 7.2, 9.0', 'ativo')
new Aluno('Maria', 'Souza', 'maria@exemplo.com', 1, '10/07/2003', '9.8, 8.0, 7.5', 'ativo')
new Aluno('Pedro', 'Ribeiro', 'pedroribeiro@exemplo.com', 3, '05/11/2002', '6.4, 7.8, 8.2', 'ativo')
new Aluno('Luis', 'Viana', 'luis@exemplo.com', 4, '17/03/2002', '7.4, 8.8, 6.2', 'ativo')
new Aluno('João', 'Santos', 'joao@exemplo.com', 5, '05/07/2003', '8.5, 7.0, 9.8', 'ativo')
new Aluno('Maria', 'Oliveira', 'maria@exemplo.com', 4, '20/01/2002', '9.0, 9.5, 8.2', 'inativo')
new Aluno('Pedro', 'Rodrigues', 'pedrorodrigues@exemplo.com', 3, '15/11/2002', '1.8, 1.5, 1.0', 'inativo')
new Aluno('Camila', 'Lima', 'camila@exemplo.com', 4, '30/09/2001', '1.5, 1.0, 7.3', 'inativo')

console.log(database.alunos);
console.log(database.turmas);

function Turma(idTurma, maximoDeAlunos) {
    if (!new.target) return new Turma(idTurma, maximoDeAlunos);

    this.idTurma = Number(idTurma);
    this.maximoDeAlunos = Number(maximoDeAlunos);
    database.turmas.push(this);
}

function cadastraTurma () {
    try {
        let idTurma = prompt('Digita número de identificação da turma: ');
        idTurma = parseInt(idTurma);
        if(!idTurma) throw new Error('Identificação da turma não pode ser vazio');
        if(database.turmas.length > 10) throw new Error('Máximo de turmas: 10. Não é possível cadastar');
        
        let maximoDeAlunos = prompt('Digita o número de alunos máximo por turma: ')
        if(!maximoDeAlunos) throw new Error('Limite de alunos da turma não pode ser vazio')
        
        maximoDeAlunos = parseInt(maximoDeAlunos);
        if(isNaN(maximoDeAlunos) || maximoDeAlunos > 10 || maximoDeAlunos < 5) {
            throw new Error('Máximo de alunos: 10; e Mínimo de alunos: 5. Digite valor válido')
        }
        
        const turmaExistente = database.turmas.find(turma => turma.idTurma === idTurma);
        console.log(turmaExistente)
        if(turmaExistente) {
            console.log(`Turmas Existentes: `)
            console.log(database.turmas)
            throw new Error('Turma já existente, digite uma turma válida.')
        } else {
            new Turma(idTurma, maximoDeAlunos);
            console.log('Turma cadastrada com sucesso!')
            console.log(database.turmas)
        };
    } catch (error) {
        alert('Erro: ' + error.message);
    }
}

function Aluno (nome, sobrenome, email, idTurma, nascimento, notas, ativo) {
    if (!new.target) return new Aluno(nome, sobrenome, email, idTurma, nascimento, notas, ativo);

    this.nome = nome.charAt(0).toUpperCase() + nome.slice(1);
    this.sobrenome = sobrenome.charAt(0).toUpperCase() + sobrenome.slice(1);
    this.email = email.toLowerCase();
    this.idTurma = idTurma;
    this.nascimento = nascimento;
    this.notas = notas.split(',').map( nota => {
        if(nota > 10) throw new Error('Digite um nota válida, até 10');
        const notasParseNumber = parseFloat(nota);
        return notasParseNumber
        });
    this.ativo = ativo === 'ativo' ? true : false;

    database.alunos.push(this);
}

function verificaIdade(nascimento) {
    let [dia, mes, ano] = nascimento.split('/')
    let anoAtual = new Date().getFullYear()
    let idade = anoAtual - ano;
    if(idade < 16) throw new Error('Idade minima para matricula de 16 anos')
    return Error
}

function cadastraAluno () {
    try {
        let nome = prompt('Digite primeiro nome do aluno: ')
        if(!nome) throw new Error('Nome não pode ser vazio')
        
        let sobrenome = prompt('Digite sobrenome do aluno: ')
        if(!sobrenome) throw new Error('Sobrenome não pode ser vazio')
        
        let email = prompt('Digite e-mail do aluno: ')
        if(!email) throw new Error('E-mail não pode ser vazio')
        for (const aluno of database.alunos) {
            if (aluno.email === email) {
                throw new Error('E-mail já associado a outro aluno');
            }
        }
        
        let turmasExistentesNoBancoDeDados = database.turmas.map(turma => turma.idTurma)
        let idTurma  = prompt(`Digite numero de identificação da turma do aluno, sendo as quais existentes: \n 
        ${turmasExistentesNoBancoDeDados} \n 
        Se turma não existir, cancele cadastro do aluno para cadastrar uma nova turma`);

        idTurma = parseInt(idTurma);

        if(!idTurma) throw new Error('Id da turma não pode ser vazio')
        if(!turmasExistentesNoBancoDeDados.includes(idTurma)) throw new Error('A turma selecionada não existe no sistema.')
        
        let nascimento = prompt(`Digite data de nascimento do aluno: \n
        Exemplo: 01/01/2023`)
        if(!nascimento) throw new Error('Data de nascimento não pode ser vazio')

        verificaIdade(nascimento)
        
        let notas = prompt('Digite as notas do aluno(SEPARADO POR VIRGULA): ')
        if(!notas) throw new Error('Notas não pode ser vazio')
        if(notas.length > 5) throw new Error('Digite no máximo 5 notas');
        
        let ativo = prompt(`O aluno estará ou está ativo? \n Digite 'ativo' ou 'inativo': `)
        if(!ativo) throw new Error('Status da matricula não pode ser vazio')

        return new Aluno(nome, sobrenome, email, idTurma, nascimento, notas, ativo);
    } catch (error) {
        alert('Erro: ' + error.message)
        return
    }
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

    console.log(database.alunos)
}

function atualizaDadosDoAluno(email) {
    try {
        if(email === undefined || email === null) throw new Error('Email do aluno não pode ser vazio')
    } catch (error) {
        console.log(error)
        return;
    }

    const alunoEncontrado = database.alunos.find(aluno => aluno.email === email);
    try {
        if(!alunoEncontrado) throw new Error(`Email não encontrado`)
    } catch (error) {
        alert(error);
        return;
    }

    let propriedadeASerAlterada = prompt(`Digite qual informação deseja alterar, sendo elas: \n nome, sobrenome, email, idTurma, nascimento, notas, ativo`)

    try {
        for (const propriedade in alunoEncontrado) {
            verificaIdade(alunoEncontrado.nascimento)
            if(propriedadeASerAlterada === propriedade && propriedadeASerAlterada !== 'email') {
                alunoEncontrado[propriedade] = prompt(`Digite os dados novos de ${propriedade} do aluno ${alunoEncontrado.nome} ${alunoEncontrado.sobrenome}`)

            } else if (propriedadeASerAlterada === 'email' && propriedade === 'email') {
                let novoEmail = prompt(`Digite os dados novos do e-mail do aluno ${alunoEncontrado.nome} ${alunoEncontrado.sobrenome}`)

                let alunoComEmailCadastrado = database.alunos.find(aluno => aluno.email === novoEmail)

                if(alunoComEmailCadastrado) {
                    throw new Error('Este email já está sendo usado por outro aluno');
                } else {
                    alunoEncontrado.email = novoEmail;
                }
            }
        } 

        if(!propriedadeASerAlterada) throw new Error(`Não encontrado propriedade de deseja alterar!! Chame a função novamente e digite um propriedade valida`)
    } catch (error) {
        console.log(error)
        return
    }

    console.log(alunoEncontrado)
}

function atualizaTurma(idTurma) {
    try {
        if(idTurma === undefined || idTurma === null) throw new Error('Id da turma, nao pode ser vazio')
        
    } catch (error) {
        console.log(error)
        return
    }
    
    const turmaEncontrado = database.turmas.find(turma => turma.idTurma === idTurma)
    
    let novoValorMaximoDeALunos = prompt(`digite valor novo para quantidade de alunos da turma`)
    
    try {
        if(!turmaEncontrado) {
            throw new Error('Turma não encontrada.')
        }
        if(!novoValorMaximoDeALunos) throw new Error(`A quantidade de alunos não pode ser vazia`)
        if(novoValorMaximoDeALunos < 5 
            || novoValorMaximoDeALunos > 10) {
            throw new Error('O código ou máximo alunos está fora do escopo planejado')
        }
    } catch (error) {
            console.log(error)
            return
    }
    
    turmaEncontrado.maximoDeAlunos = parseInt(novoValorMaximoDeALunos)
    console.log(turmaEncontrado)
}

function mostrarAlunoEspecifico(email) {
    let alunoPesquisado = database.alunos.find(aluno => aluno.email === email)
    console.table(alunoPesquisado)
}

function mostraListaDeAlunosCompleta() {
    const listaDeAlunosCompelta = database.alunos;
    console.log(`Lista completa de alunos: `)
    console.table(listaDeAlunosCompelta)
}

function mostraQuatidadeDeTurmas() {
    const quantidadeDeTurmas = database.turmas.length;

    console.log(`A quantidade de turmas existente é: ${quantidadeDeTurmas}`)

}

function calculaMediaDeNotasDoAluno(email) {
    const aluno = database.alunos.find(aluno => aluno.email === email);
    const notas = aluno.notas;

    let media = 0;
    for (let i = 0; i < notas.length; i++) {
        media += notas[i]
    }

    media = media / notas.length
    
    return media.toFixed(2);
}

function mostraMediaDeNotasDoAluno(email) {
    const aluno = database.alunos.find(aluno => aluno.email === email);
    
    console.log(`A média das notas do aluno ${aluno.nome} é ${calculaMediaDeNotasDoAluno(email)}`)
}

function desativaCadastroDoAluno(email) {
    const aluno = database.alunos.find(aluno => aluno.email === email)

    let status = aluno.ativo === true ? 'ativo' : 'inativo'
    let statusDeMudancas = status === 'ativo' ? 'inativar' : 'ativar'

    let confirmacaoDeInativar = confirm(`Aluno ${aluno.nome} está ${status}. Deseja ${statusDeMudancas} o cadastro?`)

    if(confirmacaoDeInativar) {
        aluno.ativo = status === 'ativo' ? false : true
        status = aluno.ativo === true ? 'ativo' : 'inativo'
    }

    console.log(status)
    alert(`O aluno está: ${status}`)
}

function mostraListaDeAlunosAtivos() {
    let lista = database.alunos.filter(aluno => aluno.ativo === true);
    console.log("Lista de alunos ativos:", lista);
}

function mostraListaDeAlunosInativos() {
    let lista = database.alunos.filter(aluno => aluno.ativo === false);
    console.log("Lista de alunos ativos:", lista);
}

function mostraAlunosComMediaEsperada() {
    const alunos = database.alunos;
    let listaAlunosComMediaEsperada = [];
    
    for (const aluno of alunos) {
        const notaMinima = 6;
        let media = calculaMediaDeNotasDoAluno(aluno.email);

        if(media >= notaMinima) listaAlunosComMediaEsperada.push(aluno)
    }

    console.log(`Alunos com a media igual ou acima do esperado: `)
    console.log(listaAlunosComMediaEsperada);

}

function mostraAlunosComMediaAbaixoDoEsperado() {
    const alunos = database.alunos;
    let listaAlunosComMediaAbaixoDoEsperado = [];

    for (const aluno of alunos) {
        const notaMinima = 6;
        let media = calculaMediaDeNotasDoAluno(aluno.email)

        if(media < 6) listaAlunosComMediaAbaixoDoEsperado.push(aluno)
    }

    console.log(`Alunos com a media abaixo do esperado: `);
    console.log(listaAlunosComMediaAbaixoDoEsperado);
}

function mostraQuantidadeDeAlunos() {
    const quantidadeDeAlunos = database.alunos.length;

    console.log(`A quantidade de alunos matriculados é: ${quantidadeDeAlunos}`)
}

function mostraRelatorioCompletoDeAlunos() {
    mostraQuantidadeDeAlunos()
    mostraQuatidadeDeTurmas()
    mostraAlunosComMediaEsperada()
    mostraAlunosComMediaAbaixoDoEsperado()

    console.log(`Alunos com a média calculada:`)
    for (const aluno of database.alunos) {
        let email = aluno.email

        console.log(`Media do aluno ${aluno.nome} ${aluno.sobrenome} da turma ${aluno.idTurma}`)
        console.log(calculaMediaDeNotasDoAluno(email))
    }
}