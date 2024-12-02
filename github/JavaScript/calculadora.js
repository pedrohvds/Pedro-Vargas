const ask = require("readline-sync")

let numero1 = ask.question("Digite o primeiro numero: ")
let numero2 = ask.question("Digite o segundo numero: ")

numero1 = Number(numero1)
numero2 = Number(numero2)

let calculadoraFuncionando = true

while(calculadoraFuncionando){
        console.log(`
Seus numeros sao: 

${numero1}
${numero2}`)
    let operacao = ask.question(`___________________________________

Qual operacao voce quer fazer? 

(1) - SOMA
(2) - SUBTRACAO
(3) - MULTIPLICACAO
(4) - DIVISAO
(5) - MOD (RESTO)
(0) - ENCERRAR SISTEMA
(6) - REINSERIR NUMEROS

: `)
    operacao = Number(operacao)
    console.clear()
    switch (operacao){
        case 1:
                console.log(numero1 + numero2)
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
        console.clear()

    }


 


