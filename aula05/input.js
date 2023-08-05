// -- INPUT do usuário
// Recuperando dados com o prompt
let aluno = {}

const recuperaDados = () => {
    const nome = prompt('Informe seu nome: ')
    const turma = prompt('Informe sua turma: ', '1033')
    const notas = prompt('Informe suas notas separado por virgula: ')

    return { nome, turma, notas }
}

// Usuário cancelou, não informou os dados:
while(!aluno.nome){ // enquanto for true
    const { nome, turma, notas } = recuperaDados()

    if(nome && turma && notas){
        aluno = {
            nome,
            turma,
            // notas: notas.split(',').map((nota) => Number(nota)) // point full
            notas: notas.split(',').map(Number) // point free
        }
    }
}

console.log(aluno)