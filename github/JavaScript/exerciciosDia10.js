//1

console.log("Exercicio 1")


let num1 = 7
let num2 = 9

let comparacao = num1 === num2

console.log("Seus numeros sao iguais?")

if (comparacao){
    console.log("Parabens, seus numeros sao iguais")
} else {
    console.log("Seus numeros nao sao iguais")
}
    

// OU


/*if (num1 === num2)){
    console.log("Parabens, seus numeros sao iguais")
}
*/

//2

console.log("Exercicio 2")


let num3 = 4
let num4 = 8

console.log("Seus numeros sao iguais ou diferentes?")

if (num3 === num4){
    console;log("Parabens, seus numeros sao iguais")
} else {
    console.log("Parabens, seus numeros sao diferentes")
}


//3 

console.log("Exercicio 3")


let num5 = 38
let num6 = 82

console.log("Seu numero eh maior, menor ou igual?")

/*
if (num5 > num6){
    console.log(`${num5} eh maior que ${num6}`)
} else if (num5 < num6){
    console.log(`${num5} eh menor que ${num6}`)
} else {
    console.log(`${num5} eh igual à ${num6}`)
}*/

// OU


let maior = num5 > num6
let menor = num5 < num6
let igual = num5 == num6

if (maior){
    console.log(`${num5} eh maior que ${num6}`)
}

if (menor){
    console.log(`${num5} eh menor que ${num6}`)
}

if (igual){
    console.log(`${num5} eh igual à ${num6}`)
}
    

//4

console.log("Exercicio 4")


let pokemon = "bulbasauro"

switch(pokemon){
    case "bulbasauro":
        console.log("Seu pokemon é do tipo planta e veneno")
        break;
    case "squirtlee":
        console.log("Seu pokemons é do tipo água")
        break;
    case "charmander":
        console.log("Seu pokemon é do tipo fogo")
        break
}


//5

console.log("Exercicio 5")


let ensinoMedioConcluido = false
let idade = 18
let cursandoOutraFaculdade = false

/*if (ensinoMedioConcluido && (idade >= 18) && cursandoOutraFaculdade){
    console.log("Parabens, você pode entrar na faculdade")
} else {
    console.log("Voce não pode entrar na faculdade")
}*/

if (ensinoMedioConcluido){
    if(idade >= 18){
        if(!cursandoOutraFaculdade){
            console.log("voce pode realizar sua matricula")
        } else {
            console.log("ta querendo estudar demais")
        } 
    } else {
        console.log("volta pra maternidade criança")
    }
} else {
    console.log("vai terminar a escola primeiro rapa")
}
