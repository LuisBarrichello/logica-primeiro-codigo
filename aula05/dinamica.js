// -- INPUT do usuário
// Recuperando dados com o prompt

// Ojetivo: fazer todas validações possiveis para evitar erros no input
let aluno = null;

const recuperaDados = () => {

    try {
        const nome = prompt('Informe seu nome: ')
        if(!nome) throw new Error('Nome não pode ser vazio')
        
        const turma = prompt('Informe sua turma: ', '1033')
        const turmaN = Number(turma)
        if(!turmaN) throw new Error('Turma não pode ser vazio')
        
        const notasInput = prompt('Informe suas notas separado por virgula: ')
        if(!notasInput) throw new Error('Notas não pode ser vazio')

        const notas = notasInput.split(',').map(nota => {

            if(nota > 10) throw new Error('Digite um nota válida, até 10');

            const notasParse = Number(nota.trim())
            console.log(notasParse)
            if(isNaN(notasParse)) {
                throw new Error('Digite um número válido para a nota, separado por virgulas');
            }
            return notasParse;
        }) 

        return { nome, turma, notas }

    } catch (error) {
        alert('Erro: ' + error.message)
        return recuperaDados();
    }
}

// Usuário cancelou, não informou os dados:
while(!aluno){ // enquanto for true
    const data = recuperaDados()

    if(data) {
        aluno = {
            nome: data.nome,
            turma: data.turma,
            // notas: notas.split(',').map((nota) => Number(nota)) // point full
            notas: data.notas // point free
        }
    } else {
        break; // Encerrar o loop se o usuário cancelar
    }
}

console.table(aluno)