const ask = require("readline-sync")

function calculadora(){
    console.clear()
let calculadoraFuncionando = true
let numero1 = Number(ask.question("Digite o primeiro numero: "))
let numero2 = Number(ask.question("Digite o segundo numero: "))

while(calculadoraFuncionando){
        console.clear()
        console.log(`
Seus numeros sao: 

${numero1}
${numero2}`)

    console.clear()
    switch (operacao){
        case 1:
                resultado = somar(numero1+numero2)
                console.clear()

        break
        case 2:
                console.log(numero1 - numero2)
        break
        case 3:
                console.log(numero1 * numero2)
        break
        case 4:
                console.log(numero1 / numero2)
        break
        case 5:
                console.log(numero1 % numero2)
        break
        case 0: 
            calculadoraFuncionando = false
        break
        case 6:
                numero1 = Number(ask.question("Digite o primeiro numero: "))
                numero2 = Number(ask.question("Digite o segundo numero: "))
        break
        default:
        }
        ask.question(` 
^ Resposta ^ 

Tecle ENTER para continuar...`)
        

    }
}

function menuPrincipal(){
    console.logask.question(`
___________________________________

Qual operacao voce quer fazer? 
        
(1) - SOMA
(2) - SUBTRACAO
(3) - MULTIPLICACAO
(4) - DIVISAO
(5) - MOD (RESTO)
(6) - REINSERIR NUMEROS
(0) - ENCERRAR SISTEMA
        
: `)
}

function somar(num1, num2){
    return num1+num2
}

function subtrair(num1, num2){
        return num1-num2
}

function somar(num1, num2){
    return num1+num2
}

function somar(num1, num2){
        return num1+num2
}

function somar(num1, num2){
        return num1+num2
}

function somar(num1, num2){
        return num1+num2
}

calculadora()