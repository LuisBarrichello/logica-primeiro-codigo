/* Valores  Tipos nativos*/

/* Booleano
String
Number
Object
Undefined
Null */

/* var name = 'Luís';
var idade = 21

var nome = 'Luís', idade = 21; */
/* 
var sobrenome = nome = 'Viana'; */

/*var b; 
var a = b, c = 6
console.log(a)
console.log(b)
console.log(c) */

/* console. log(typeof true) // boolean
console. log(typeof false) // boolean */

// console.log(typeOf null)

/* var nome = 'Luís';
console.log(nome[0]);console.log(nome.charAt(0));console.log(nome.length); */


/* Operador de atribuição 
    Operador Aritmeticos:
    +. -, /, *, %

    Operadores lógicos aritmeticos: < > <= >=
*/

// Operadores de coerção

// +, -

// console.log(typeof b) // number 
// console.log(-b) // -10 
// console.log(+a) // 10 


/* var True = true // 1
var Flase = false // 0
console.log(!!1) // true
console.log(!!0) // false */


// Operadores de coerção

// +, -

// console.log(typeof b) // number 
// console.log(-b) // -10 
// console.log(+a) // 10 

// var True = true // 1
// var False = false // 0 

// console.log(!!1) // true
// console.log(!!0) // false

// console.log(+True) // 1
// console.log(+False) // 0
// console.log(-True) // -1
// console.log(-False) // 0

// var a = '10'
// var b = parseInt(a)
// var c = '10.98'
// var d = parseFloat(c)

// console.log(a, b) // '10' 10

// console.log(typeof d) // number
// console.log(typeof b) // number

// console.log(Number(a)) // 10
// console.log(Number(c)) // 10.98



/* Operadores logicos
&& || ! */

var e = true;
var f = false;

console.log(e && f) // false
console.log(e || f) //true
console.log(!e) //false
console.log(!f) //true


/* Operador Ternario */
/* condicao ? true : false */

/* var ehMaiorDe16 = false;
var temIngresso = true

var podeEntrar = (ehMaiorDe16 || temIngresso) ? 'Pode entrar =D' : 'Não pdoe entrar =D'; // 'Pode entrar =D'
var podeEntrar = (ehMaiorDe16 && temIngresso) ? 'Pode entrar =D' : 'Não pdoe entrar =D';// Não pdoe entrar =D'

 */


// falsy
// 0, "", null, undefined, [], NaN, false

/* console.log(!!0)
console.log(!!null)
console.log(!!undefined)
console.log(!![1].length) 
console.log(!!NaN)
console.log(!!false) */


// operador de coalescência
// ??

/* console.log(0 || 'teste')
console.log(0 ?? 'teste') */

// operador de coalescência
// ??

// console.log(0 || 'teste') // true
// console.log(0 ?? 'teste') // 

// var a = undefined || 'teste1'
// var b = "" || 'teste2'
// var c = NaN || 'teste3'
// var d = 0 || 'teste4'

// console.log(a) // teste1 
// console.log(a) // teste2
// console.log(a) // teste2
// console.log(b) // undefined
// console.log(c) // undefined
// console.log(d) // undefined

var numeros = [1, 2, 3, 4, 5]
var frutas = ['banana', 'limão', 'melancia']
console.log(numeros.length) //5
console.log(numeros[2]) //3
console.log(frutas[3]) // undefined
console.log(frutas[2]) // melancia
console.log() // 

frutas.push('caqui');
frutas.pop();
frutas.unshift('morango');
frutas.shift();




// desestruturação

var frutaNova = 'morango'
frutas.push(frutaNova)

var banana = frutas[0]
var limao = frutas[1]

var [_, fruta] = frutas

var frutasNovas = [...frutas]

// console.log(frutas[0]) // banana
// console.log(frutas[1]) // limão
console.log(banana, limao)
console.log(primeiraFruta, segundaFruta)



/* Objetos */
var aluno = {
    matricula: 123456,
    nome: 'Mateus',
    idade: 26,
    turma: '1033'
}
console.log(aluno)

/* desestruturação obj*/
var aluno1 = {
    matricula: 123456,
    nome: 'Mateus',
    idade: 26,
    turma: '1033'
}
console.log(aluno1.matricula)
console.log(aluno1.nome)

aluno1.nota = 10;
console.log(aluno1.nota)
var { matricula } = aluno

var alunos = [aluno, aluno1];