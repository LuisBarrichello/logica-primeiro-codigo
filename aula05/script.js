// -- SWITCH faz a comparação estritamente igual (===)

console.log(18 == '18') // true
console.log(18 === '18') // false

const idade = 18;
switch (idade) {
    case 18:
        console.log('18 é number')
        break;
    case '18':
        console.log('18 é string')
        break;
    default:
        console.log('Não registrado :(')
        break;
} // 18 é number

// -- SWITCH não funciona com valores lógico (case)
const numero = 16
switch (numero) {
    case (numero === 18):
        console.log('É 18')
        break;
    case (numero !== 18):
        console.log('Não é 18')
        break;
    default:
        console.log('Inválido')
        break;
} // Inválido // Não utilizar switch nesse caso

// -- Falar sobre esse caso mais tarde.
const booleano = false;
switch (booleano) {
    case false:
        console.log('FALSE')
        break;
    case true:
        console.log('TRUE')
        break;
    default:
        console.log('N/A')
        break;
} // Não é aplicável


// -- Condições que atendem o mesmo case

const cor = '#C00'
let corTraduzida = ''

switch (cor) {
    case 'white':
    case '#111111':
    case 'Branco':       
        corTraduzida = 'Branco'
        break;
    case 'black':
    case '#000000':
        corTraduzida = 'Preto'
        break;
    case 'red':
    case '#C00':
    case '#C00000':        
        corTraduzida = 'Vermelho'
        break;
    default:
        corTraduzida = 'N/A'
        break;
}

// console.log('mateus,ana,joão'.split(',')) // ['mateus', 'ana', 'joão']
// console.log([''].split()) // Cannot read properties of undefined (reading 'split')



console.log(corTraduzida)
console.clear()


// -- INPUT do usuário
// Recuperando dados com o prompt
let aluno = {}

// const recuperaDados = () => {
//     const nome = prompt('Informe seu nome: ')
//     const turma = prompt('Informe sua turma: ', '1033')
//     const notas = prompt('Informe suas notas separado por virgula: ')

//     return { nome, turma, notas }
// }

// Usuário cancelou, não informou os dados:
// while(!aluno.nome){ // enquanto for true
//     const { nome, turma, notas } = recuperaDados()

//     if(nome && turma && notas){
//         aluno = {
//             nome,
//             turma,
//             // notas: notas.split(',').map((nota) => Number(nota)) // point full
//             notas: notas.split(',').map(Number) // point free
//         }
//     }
// }

console.log(aluno)

// --------
// TRY CATCH

let mensagem = ''
try{
    console.log(frutas) // is not defined
    mensagem = '// Deu tudo certo :)'
}catch(erro){
    // console.error(erro)
    mensagem = '// Deu tudo errado :('
}finally{
    console.log(mensagem) // sempre executa
}

console.clear();

// try{
//     // if(false){
//     //     throw 'Uma mensagem de erro bem bacana'
//     // }

//     console.log('Continua executando')

//     // throw 'Ocorreu um erro!'
//     throw {
//         mensagem: 'Mensagem do erro.',
//         codigo: 778,
//         data: new Date(),
//     }
//     console.log('Não executa')
// }catch(erro){
//     console.log(erro)
// }


try {
    throw new Error(JSON.stringify({
        mensagem: 'Deu erro.'
    }))

    throw new Error('Deu errado.')
}catch(erro){
    // console.log(erro.message)
    // console.log(erro.stack)
    // console.log(erro.name)
    console.log(JSON.parse(erro.message))
}