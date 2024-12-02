const ask = require("readline-sync")

/*let i = 0 
while (i < 10){
    console.log(i)
    i++
}

//

let estomago = 0;

while (estomago < 100) {
    console.log("Quero comer mais coxinhas"); 
    estomago = estomago + 10;
}

//            

let inputUsuario
let soma = 0

while(inputUsuario !== 0){
    inputUsuario = Number(ask.question("Digite um nomero: "))
    soma = soma + inputUsuario
}

console.log(soma)
*/
/*for(let i = 0; i < 10; i++){
    console.log(i)
}
*/
let numeros = [11, 15, 18, 14, 12, 13]
let maiorNumero = 0

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > maiorNumero){
        maiorNumero = numeros[i]
    }
}

console.log(`O maior numero eh ${maiorNumero}`)

let frase = ["Oi", "sumido", "tudo", "bem?", "Saudades", "kk"]

let fraseConcatenada = ""

for(let palavra of frase){
    fraseConcatenada = fraseConcatenada + palavra + " "
}

console.log(fraseConcatenada)


