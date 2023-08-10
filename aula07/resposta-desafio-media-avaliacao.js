
// ## Média das Avaliações de um Fast-Food
 
// #### Em uma empresa de fast-food, após a refeição, os clientes fazem uma avaliação da loja, com nota de 1 a 5 estrelas. Em determinado dia, foram atendidos exatamente 100 clientes, e as notas obtidas foram:

// &nbsp; 
// Avaliação   | Total de Clientes
// ----------- | -----------
// 1 estrela   | 2
// 2 estrelas  | 15
// 3 estrelas  | 18
// 4 estrelas  | 25
// 5 estrelas  | 40
 
// &nbsp;
// - Após o fechamento do expediente, o gerente decidiu calcular a nota média das avaliações naquele dia;
//  retorne o valor da nota média considerando o valor fixo de 100 clientes.

// chave: valor
// número de estrelas: quantidade de clientes

const avaliacoes = {
    1: 2,
    2: 15,
    3: 18,
    4: 25,
    5: 40
}

let somaNotas = 0;
let totalClientes = 0;

for (const nota in avaliacoes){
    const quantidadeClientes = avaliacoes[nota]
    somaNotas += parseInt(nota) * quantidadeClientes
    totalClientes += quantidadeClientes
}

// console.log(totalClientes)
const mediaAvaliacoes = somaNotas / totalClientes

console.log(`A média de avaliação é: ${mediaAvaliacoes.toFixed(2)}`)
// A média de avaliação é: 3.86


// const array = [1,2,3,4]

// // for-of apenas array retorna valor
// // for-in array e objeto retorna o índice / propriedade

// for(const nota of array){
//     console.log(nota) // valor
// }


// for(const total of Object.values(avaliacoes)){
//     console.log(total) // valor
// }

// console.log(Object.values(avaliacoes))
// console.log(Object.entries(avaliacoes))

// for(const item of Object.entries(avaliacoes)){
//     console.clear()
//     console.log(item)

//     const [nota, totalClientes] = item
//     console.log(nota, totalClientes)
// }

// console.log(mediaAvaliacoes)

// console.log(avaliacoes)

// const prop = 1
// const aluno = {
//     [prop]: 'Mateus'
// } // atribuição propriedade / number

// console.log(aluno)