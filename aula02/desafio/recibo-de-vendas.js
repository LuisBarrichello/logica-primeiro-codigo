// Em um sistema de vendas é emitido um recibo a cada venda, esse recibo está em formato string com a seguinte estrutura: 
// nome-do-produto1/valor33.5=cupom5;nome-do-produto2/valor4.99=cupom0;nome-do-produto3/valor10=cupom0;...
// As vendas são divididas por ; (ponto e virgula)

// Sendo: 
// nome-do-produto1 até a / (barra) o nome do produto
// valor33.5 o valor do produto até o = (igual)
// cupom5 a porcentagem de desconto do produto após o = (igual)

// Precisamos formatar essa string para obter uma lista de objetos com a seguinte estrutura: 

/* const listaDeProdutosVendidos = [
    { 
        produto: 'Nome do produto formatado', // Nome do produto formatado com a primeira letra maiúscula 
        valor: 99, // Valor do produto
        cupom: 4, // Valor de desconto do produto em porcentagem, nesse caso seria 4%
        quantidade: 1, // A quantidade que esse produto aparece na string
    }
] */

// Extra: 
// Totalização da venda
// Além da lista completa formatada da venda, seria interessante obter a totalização dessa venda para apresentar ao cliente final
// Dado essa importância os seguintes dados devem ser apresentado em um objeto: 
/* const totais = {
    valorTotal: 999, // Valor total da venda
    valorTotalDesconto: 999, // Valor total com desconto
    quantidadeDeProdutos: 999, // Quantidade de produtos na venda
} */

const reciboDeVenda = 'régua/valor3=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;estojo/valor8=cupom0;cola/valor4=cupom0;cola/valor4=cupom0;mochila/valor50=cupom10;lápis/valor0.5=cupom0;cola/valor4=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;tesoura/valor5=cupom0;caneta/valor1=cupom0;cola/valor4=cupom0;estojo/valor8=cupom0;borracha/valor2=cupom0;caderno/valor15=cupom5;lápis/valor0.5=cupom0;lápis/valor0.5=cupom0;tesoura/valor5=cupom0;'

// Boa sorte =D
const produtosVendidos = reciboDeVenda.split(';');
const produtosFiltrados = produtosVendidos.filter((produto) => {
    return produto !== '';
})
const listaDeProdutosVendidos = [];

for (const produto of produtosFiltrados) {
    const [nomeValor, cupomString] = produto.split('=');
    const [nome, valorString] = nomeValor.split('/');
    const valor = parseFloat(valorString.split('valor')[1]);
    const cupom = parseFloat(cupomString.split('cupom')[1]);
    
    const produtosFormatados = {
        nome: nome.charAt(0).toUpperCase() + nome.slice(1),
        valor: valor,
        cupom: cupom,
        quantidade: 1,
    };

    const produtoExistente = listaDeProdutosVendidos.findIndex(
        (item) => item.nome === produtosFormatados.nome && item.valor === produtosFormatados.valor && item.cupom === produtosFormatados.cupom
    );

    if (produtoExistente !== -1) {
        listaDeProdutosVendidos[produtoExistente].quantidade++;
    } else {
        listaDeProdutosVendidos.push(produtosFormatados);
    }
}


let valorTotal = 0;
let valorTotalDoDesconto = 0;
let quantidadeDeProdutos = 0;

listaDeProdutosVendidos.forEach((produto) => {
    valorTotal += produto.valor * produto.quantidade;
    valorTotalDoDesconto += (produto.valor * (produto.cupom / 100)) * produto.quantidade;
})

const totais = {
    valorTotal: valorTotal,
    valorTotalDoDesconto: valorTotalDoDesconto,
    valorTotalDosProdutosComDesconto: valorTotal - valorTotalDoDesconto,
    quantidadeDeProdutos: listaDeProdutosVendidos.length,
};

console.table(listaDeProdutosVendidos)
console.table(totais)