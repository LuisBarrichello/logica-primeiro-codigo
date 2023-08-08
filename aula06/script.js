// Ternario
const idade = 19;

//const 



let tituloSecundario = ''

if(apenasLeitura) {
    tituloSecundario = 'Visualizar'
} else {
    tituloSecundario = 'Editar'
}

console.log(tituloSecundario) // Editar



/* Hosting - içar */
console.clear();
//hosting jogar pra cima declaração da variavel
// var a;

try {
    console.log(a) // Undefined
    var a = 'Texto';
    console.log(a)
    
    
    console.clear();
    var b
    console.log(b)
    b = 'Outro texto'
    console.log(b)
    
    console.log(c)
} catch (error) {
    //console.error(error)
}


/* console.log(d) // Cannot access 'd' before initialization
const d = 'Mais texto'
console.log(d)

console.clear()
console.log(e) // Cannot access 'e' before initialization
const e = 'Mais um texto'
console.log(e) */

console.clear();

somar(1 ,2); // Cannot access 'somar' before initialization
const somar = (a, b) => {
    console.log(a + b)
}
somar(1 ,2); // 3


multiplicar(10, 2) // Cannot access 'multiplicar' before initialization
const multiplicar = function(a, b) {
    console.log(a * b)
}
multiplicar(10, 2)


subtrair(5, 3) // 4
function subtrair(a, b) {
    const fixo = 2;
    console.log(a - b + fixo)
};
subtrair(5, 3) // 4



/* FUNCOES */
const minhaFuncao1 = (a,b,c = 2, ...arg) => {
    const [notas] = arg
    console.log({a,b,c, notas})
}
minhaFuncao1('Mateus', 26, 1033, 'notas:2,3,3');


minhaFuncao2(1,2,3)
function minhaFuncao2() {
    // console.log({a,b,c, notas})
    const [a, b, c] = [...arguments]
    console.log({a,b,c})

}