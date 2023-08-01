
// const array1 = [1,2,3,4] // array1[0] -> 1
// const array2 = [
//     [1,2,3,4],
//     [4,5,5,6],
//     [6,7,8,9],
//     [10, [11, 12]]
// ]

// console.log(array2[0]) // [1,2,3,4],
// console.log(array2[0][0]) // 1
// console.log(array2[1][3]) // 6

// console.log(array2[3][1][0])

// Desenvolver lista de contatos, cada contato deve possuir
// nome, sobrenome, numero
// ordenação

const contatos = [
    { nome: 'Marcos', sobrenome: 'Lins', numero: 123456789 },
    { nome: 'Marcos2', sobrenome: 'Lins2', numero: 123456780 },
    { nome: 'Marcos3', sobrenome: 'Lins3', numero: 123456781 },
    { nome: 'Marcos4', sobrenome: 'Lins4', numero: 123456782 },
]

contatos[4] = { nome: 'Marcos5', sobrenome: 'Lins5', numero: 123456782 },
contatos.push({ nome: 'Marcos6', sobrenome: 'Lins6', numero: 123456782 })

console.log(contatos[0])
console.log(contatos[1])
console.log(contatos[2])

// funcoes/metodos de array
/* forEach
    map
    filter
    reduce
    concat */

/* forEach */
    console.clear();
    console.log(contatos)
contatos.forEach((item, index) => {
    const {nome, sobrenome} = item
    console.log(`${index}:${nome} ${sobrenome}`)

    console.clear();
    const {nome1, ...novoItem} = item
    console.log(novoItem)
    console.log(`${index}:${nome1} ${sobrenome}`)
})


/* map */
console.clear();
const contatosEditados = contatos.map((item, index) => {
    /* const { nome, ...novoItem} = item;
    return novoItem */

    return item.nome === 'Marcos3' ? {
        ...item,
        numero: 123
    } : item
})

console.clear();
console.log(contatosEditados);


/* filter */
console.clear()
const contatosFiltrados = contatos.filter((item, index) => {
    const {sobrenome } = item
    return sobrenome === 'Lins' || sobrenome === 'Lins2'
})

console.log(contatosFiltrados);


console.clear()
/* reduce */

/* const numeros = [1,2,3]

const numero = numeros.reduce((acc, current) => {
    return acc + current
}, 0)

console.log(numero) */


//remover duplicidades
const numeros = [1,2,3,1,5,5,6]

const numerosSerializado = numeros.reduce((acc, current) => {
    return acc.includes(current) ? acc : [...acc, current]
}, [])


console.clear()
console.log(numerosSerializado)

// console.log(numeros.includes(1)) // true
// console.log(numeros.includes(6)) // true
// console.log(numeros.includes(10)) // false
// console.log(numeros.includes(4)) // false


// console.log('Mateus'.includes('Ma')) // true
// console.log('Mateus'.length) // 6
// console.log(numeros.length) // 7
// console.log('Mateus'.split(''))


/* concat */
const numerosExtras = [7,8,9,10]
const novoArray = numeros.concat(numerosExtras, numerosExtras)

const novoCSpread = [...numeros, ...numerosExtras]

console.clear();
console.log({novoArray, novoCSpread})



/* flat */

const multiArray = [numeros, numeros];

console.clear()
console.log(multiArray.flat());