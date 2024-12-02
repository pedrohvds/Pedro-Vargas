const ask = require("readline-sync")

function calculadora() {
    console.clear()
    let sustentaMenuCalculadora = true
    let numero1 = Number(ask.question("Digite o primeiro numero: "))
    let numero2 = Number(ask.question("Digite o segundo numero: "))

    while (sustentaMenuCalculadora) {
        console.clear()
        menuPrincipal(numero1, numero2)
        let opcaoUsuario = Number(ask.question("Digite uma opcao: "))
        switch (opcaoUsuario) {
            case 1:
                resultado = somar(numero1, numero2)
                console.clear()
                console.log(`${numero1} + ${numero2} = ${resultado}`)
                break
            case 2:
                resultado = subtrair(numero1, numero2)
                console.log(`${numero1} - ${numero2} = ${resultado}`)
                break
            case 3:
                resultado = multiplicar(numero1, numero2)
                console.log(`${numero1} * ${numero2} = ${resultado}`)
                break
            case 4:
                resultado = dividir(numero1, numero2)
                console.log(`${numero1} / ${numero2} = ${resultado}`)
                break
            case 5:
                resultado = restoMod(numero1, numero2)
                console.log(`${numero1} % ${numero2} = ${resultado}`)
                break
            case 0:
                sustentaMenuCalculadora = false
                break
            case 6:
                let novosNumeros = reinserirNumeros()
                numero1 = novosNumeros[0]
                numero2 = novosNumeros[1]
                break
        }
        ask.question(`

Tecla ENTER para continuar...`)
        console.clear()
    }
}

function menuPrincipal(numero1, numero2) {
    console.log(numero1, numero2)
    console.log(`
_______________________________________________        
[1] - soma
[2] - subtracao
[3] - multiplicacao
[4] - divisao
[5] - resto / mod
[6] - reinserir numeros
[0] - REINICIAR THE FUCK SYSTEM / Oppenheimer     `)
}

function somar(num1, num2) {
    return num1 + num2
}

function subtrair(num1, num2) {
    return num1 - num2
}

function multiplicar(num1, num2) {
    return num1 * num2
}

function dividir(num1, num2) {
    return num1 / num2
}

function restoMod(num1, num2) {
    return num1 % num2
}

function reinserirNumeros() {
    console.clear()
    let num1 = Number(ask.question("Digite o primeiro numero: "))
    let num2 = Number(ask.question("Digite o segundo numero: "))
    console.clear()
    return [num1, num2]


}

calculadora()


