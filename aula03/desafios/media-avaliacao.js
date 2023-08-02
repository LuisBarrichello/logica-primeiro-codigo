// Média das Avaliações de um Fast-Food

//  Em uma empresa de fast-food, após a refeição, os clientes fazem uma avaliação da loja, com nota de 1 a 5 estrelas. Em determinado dia, foram atendidos exatamente 100 clientes, e as notas obtidas foram:

/* Avaliação   | Total de Clientes
----------- | -----------
1 estrela   | 2
2 estrelas  | 15
3 estrelas  | 18
4 estrelas  | 25
5 estrelas  | 40 */

// Após o fechamento do expediente, o gerente decidiu calcular a nota média das avaliações naquele dia; retorne o valor da nota média considerando o valor fixo de 100 clientes.

let avaliacoesDodia = {
    estrela1: 2,
    estrela2: 15,
    estrela3: 18,
    estrela4: 25,
    estrela5: 40,
}

let somaAvaliacoes = 0;
let pesoTotal = 0;

for (let estrela in avaliacoesDodia) {
    const quantidadeDeAvaliacoes = avaliacoesDodia[estrela];
    const nota = parseInt(estrela.split('estrela')[1]);
    somaAvaliacoes += quantidadeDeAvaliacoes * nota;
    pesoTotal += quantidadeDeAvaliacoes;
}


const mediaPonderada = somaAvaliacoes / pesoTotal

console.log("Nota média das avaliações:", mediaPonderada.toFixed(2));