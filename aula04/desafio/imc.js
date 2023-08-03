/* Exercício: Calculadora de Índice de Massa Corporal (IMC)

Descrição:
A tarefa é criar uma calculadora de IMC usando variáveis. O IMC é uma medida que relaciona o peso e a altura de uma pessoa para avaliar se ela está abaixo do peso, no peso normal, com sobrepeso ou obesa. A fórmula do IMC é: IMC = peso / (altura * altura).

Instruções:

Peça ao usuário que informe seu peso (em kg) e sua altura (em metros).

Utilize variáveis para armazenar esses valores.

Calcule o IMC usando a fórmula fornecida.

Com base no resultado, informe ao usuário em qual faixa de IMC ele se encontra, de acordo com a tabela abaixo:

Abaixo do peso: IMC < 18.5
Peso normal: 18.5 <= IMC < 24.9
Sobrepeso: 25 <= IMC < 29.9
Obesidade: IMC >= 30 */

function calcularIMC(e){
    e.preventDefault()   
    
    const peso = parseFloat(document.getElementById("peso").value)
    const altura = parseFloat(document.getElementById("altura").value)
    
    const imc = peso / (altura * altura);

    if (imc < 18.5) {
        return alert('Abaixo do peso');
    } else if (imc >= 18.5 && imc <= 24.9) {
        return alert('Peso normal');
    } else if (imc >= 25 && imc < 29.9) {
        return alert('Sobrepeso');
    } else if (imc >= 30){
        return alert('Obesidade')
    }
}

const button = document.getElementById('button')
button.addEventListener("click", calcularIMC);