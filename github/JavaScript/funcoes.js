const ask = require("readline-sync")



function imprimirOlaMundo() {
    console.log("Ola mundo!")
}

imprimirOlaMundo()



function imprimirNome(nome) {
    console.log(`Olá ${nome}`)
}

imprimirNome("Pedro")
imprimirNome("João")
imprimirNome("Carlos")



let numero1 = Number(ask.question("Digite o primeiro numero: "))
let numero2 = Number(ask.question("Digite p segundo numero: "))

function somaNumeros(numero1, numero2) {
    let soma = numero1 + numero2
    return soma
}

console.log(somaNumeros(numero1, numero2))



let numeros = [1, 4, 14, 76, 7, 9]


function divisaoPorDois(arrayDeNumeros) {
    let doisElementos = []
    doisElementos.push(arrayDeNumeros[0] / 2)
    doisElementos.push(arrayDeNumeros[numeros.length - 1] / 2)
    return doisElementos
}

console.log(divisaoPorDois(numeros))

