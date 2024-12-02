const ask = require("readline-sync")

// 1. 
// Crie um array 'time' com os nomes ["Pedro", "Carlos", "Vinícius Júnior", "Guiñazu", "Roberto Carlos", "Ronaldinho Gaúcho"]. Verifique se "Roberto Carlos" está no array. Se sim, converta 
//o nome do Roberto Carlos para maiúscula e adicione "PERNA DE FUGUETE" ao final do nome de Roberto Carlos. Depois imprima todo o Array na tela.

let time = ["Pedro", "Carlos", "Vinícius Júnior", "Guiñazu", "Roberto Carlos", "Ronaldinho Gaúcho"]

if(time.includes("Roberto Carlos")){
    time[time.indexOf('Roberto Carlos')] = time[time.indexOf('Roberto Carlos')].toUpperCase() + ' PERNA DE FUGUETE'
    console.log(time)
}

// 2. Pokemon
// Crie um array 'pokemons' com os nomes ["Bulbasaur", "Charmander", "Eevee", "Totodyle"]. Adicione "Squirtle" ao início, remova o último Pokémon, e verifique se "Pikachu" está no array. 
//Se não estiver, adicione "Pikachu" ao final.

let pokemons = ["Bulbasaur", "Charmander", "Eevee", "Totodyle"]

pokemons.splice(0, 0, ("Squirtle"))

pokemons.pop()

if (!pokemons.includes("Pikachu")){
    pokemons.push("Pikachu")
}

console.log(pokemons)

// 3. 
// Crie um array 'agentes' com os nomes ["Sage", "Jett", "Phoenix"]. Verifique se "Jett" está no array, descubra seu índice (pesquise como fazer isso se necessário) e substitua por "Raze". 
//Retorne o array modificado.

let agentes = ["Sage", "Jett", "Phoenix"]

/*if (agentes.includes("Jett")){
    console.log(agentes.indexOf("Jett"))
    agentes.splice(1, 1, ("Raze"))
}*/

if (agentes.includes("Jett")){
    agentes[agentes.indexOf("Jett")] = "Raze"
}

console.log(agentes)

// 4.
// Crie um array 'grifinoria' com os nomes ["Hermione", "Ron", "Neville"]. Remova o primeiro nome, adicione "Harry" ao início, e verifique se "Ron" está no array. Se sim, retorne todos os 
//nomes em maiúsculas.

let grifinoria = ["Hermione", "Ron", "Neville"]

grifinoria.splice(0, 1, ("Harry"))

if (grifinoria.includes("Ron")){
    grifinoria = grifinoria.map(nome => nome.toUpperCase())
}

console.log(grifinoria)

/* 5.
Você foi contratado pelo governo imperial para criar um sistema que gerencie a produção e distribuição de especiarias em Arrakis. O sistema deve permitir que o usuário insira o nome do 
líder da operação, o tipo de operação (CO para coleta, EX para extração, TR para transporte), e a quantidade de especiaria coletada em toneladas. Dependendo do tipo de operação e da quantidade 
de especiaria, o sistema deve calcular o valor total de lucro esperado, considerando os seguintes fatores:

    - Operações de coleta (CO) têm um lucro de 1000 solaris por tonelada.
    - Operações de extração (EX) têm um lucro de 2000 solaris por tonelada, mas se a quantidade for superior a 50 toneladas, o lucro por tonelada aumenta para 2500 solaris.
    - Operações de transporte (TR) têm um lucro de 1500 solaris por tonelada, mas se a quantidade for inferior a 20 toneladas, há uma taxa adicional de 500 solaris por tonelada.

O sistema deve imprimir o nome do líder, o tipo de operação, a quantidade de especiaria e o lucro total esperado.
*/

/*const ask = require("readline-sync")

const lider = ask.question("Qual o nome do lider da operacao? ")
const tipoOperacao = ask.question("Qual o tipo de operacao voce quer fazer? ")
const quantidade = Number(ask.question("Qual a quantidade de especiaras voce quer? "))

function calcularLucro(lider, tipoOperacao, quantidade) {
    let lucroTotal = 0;
    
    switch (tipoOperacao) {
        case 'CO':
            lucroTotal = quantidade * 1000;
            break;
        
        case 'EX':
            if (quantidade > 50) {
                lucroTotal = quantidade * 2500;
            } else {
                lucroTotal = quantidade * 2000;
            }
            break;
        
        case 'TR':
            if (quantidade < 20) {
                lucroTotal = quantidade * (1500 + 500);
            } else {
                lucroTotal = quantidade * 1500;
            }
            break;
        
        default:
            console.log("Tipo de operação inválido.");
            return;
    }

    
    console.log(`Líder da Operação: ${lider}`);
    console.log(`Tipo de Operação: ${tipoOperacao}`);
    console.log(`Quantidade de Especiaria: ${quantidade} toneladas`);
    console.log(`Lucro Total Esperado: ${lucroTotal} solaris`);
}


calcularLucro(lider, tipoOperacao, quantidade);

console.log(`A missao de ${tipoOperacao} liderada por ${nomeLiderOperacao} operou ${quantidade} toneladas de especiaria e lucrou ${lucro} solaris.`)

*/

// 6.
// Crie uma string 'nome' com o valor "  Alvo Dumbledore  ". Remova os espaços, transforme o nome para maiúsculas e retorne a quantidade de caracteres do nome.

let nome = "  Alvo Dumbledore  "
//nome = nome.trim()
//nome = nome.toUpperCase()
console.log(nome, nome.length)

console.log(nome.trim().toUpperCase(), nome.trim().length)

//7.
// Crie um array 'naves' com os nomes ["X-Wing", "TIE Fighter", "Millennium Falcon"]. Remova a última nave, adicione "Star Destroyer" ao início do array, e verifique se "TIE Fighter" está no 
//array.

let naves = ["X-Wing", "TIE Fighter", "Millennium Falcon"]

naves.pop()
naves.unshift("Star Destroyer")
console.log(naves)
if (naves.includes("TIE Fighter")){
    console.log("TIE Fighter esta incluso no array")
} else {
    console.log("TIE Fighter nao esta incluso no array")
}

/*8.
Você foi contratado pela WOOHP para criar um sistema de planejamento de missões. Para cada missão, os detalhes incluem o nome da espiã, o tipo de missão (RE para resgate, IN para infiltração, 
DE para desativação) e o nível de risco da missão (AL para alto, ME para médio, BA para baixo). Dependendo da combinação do tipo de missão e do nível de risco, o sistema deve determinar o tempo
estimado de conclusão e a quantidade de gadgets necessários:

    - Missões de resgate (RE) com alto risco (AL) levam 5 horas e requerem 4 gadgets, missões de risco médio (ME) levam 3 horas e requerem 3 gadgets, e de baixo risco (BA) levam 2 horas com 2 gadgets.
    - Missões de infiltração (IN) sempre levam 4 horas, mas o número de gadgets depende do risco: 5 gadgets para AL, 3 para ME e 2 para BA.
    - Missões de desativação (DE) têm um tempo fixo de 6 horas, independentemente do risco, mas o número de gadgets é 3 para AL, 2 para ME e 1 para BA.

O sistema deve imprimir o nome da espiã, o tipo de missão, o nível de risco, o tempo estimado de conclusão e a quantidade de gadgets necessários.
*/

/*let nomeEspia = ask.question("Qual o nome da espia? ")
let tipoMissao = asl.question("Qual o tipo da missao?  RE IN ou DE: ")
let nivelRisco = ask.question("Qual o risco da missao? AL, ME ou BA: ")
let tempoEstimado 
let gadgetsNecessarios

switch(tipoMissao.toUpperCase()){
    case 'RE':
        if (nivelRisco.toUpperCase() === 'AL'){
            tempoEstimado = 5
            gadgetsNecessarios = 4
        } else if (nivelRisco.toUpperCase() === 'ME'){
            tempoEstimado = 3
            gadgetsNecessarios = 3
        } else if (nivelRisco.toUpperCase() === 'BA'){
            tempoEstimado = 2
            gadgetsNecessarios = 2
        } else {
            console.log("risco invalido, falha no sistema")
        } break
    case 'IN':
        tempoEstimado = 4
        if (nivelRisco.toUpperCase() === 'AL'){
            gadgetsNecessarios = 4
        } else if (nivelRisco.toUpperCase() === 'ME'){
            gadgetsNecessarios = 3
        } else if (nivelRisco.toUpperCase() === 'BA'){
            gadgetsNecessarios = 2
        } else {
            console.log("risco invalido, falha no sistema")
        } break
    case 'DE':
        tempoEstimado = 6
        if (nivelRisco.toUpperCase() === 'AL'){
            gadgetsNecessarios = 3
        } else if (nivelRisco.toUpperCase() === 'ME'){
            gadgetsNecessarios = 2
        } else if (nivelRisco.toUpperCase() === 'BA'){
            gadgetsNecessarios = 1
        } else {
            console.log("risco invalido, falha no sistema")
        } break
    default:
        console.log("tipo de missao invalido, falha no sistema")
}

console.log(`${nomeEspia} foi numa missao de ${tipoMissao} de risco ${nivelRisco}. A missao durou ${tempoEstimado} horas e utilizou ${gadgetsNecessarios} gadgets.`)

*/
/*9.
Descrição do problema: Você foi contratado para desenvolver um sistema que organize e distribua missões ninjas em Konoha. Cada missão tem um líder ninja, um tipo de missão (A para missões de 
rank A, B para missões de rank B, C para missões de rank C), e uma região de destino (NV para nas vilas, FL para florestas, MO para montanhas). Dependendo da combinação de tipo de missão e 
região, o sistema deve determinar a dificuldade da missão e o pagamento total:

    - Missões de rank A nas vilas (NV) têm uma dificuldade "Alta" e um pagamento de 5000 ryous, nas florestas (FL) a dificuldade é "Muito Alta" e o pagamento é de 7000 ryous, e nas montanhas (MO) a dificuldade é "Extrema" com um pagamento de 10000 ryous.
    - Missões de rank B nas vilas têm uma dificuldade "Média" e um pagamento de 3000 ryous, nas florestas a dificuldade é "Alta" e o pagamento é de 5000 ryous, e nas montanhas a dificuldade é "Muito Alta" com um pagamento de 7000 ryous.
    - Missões de rank C nas vilas têm uma dificuldade "Baixa" e um pagamento de 1000 ryous, nas florestas a dificuldade é "Média" e o pagamento é de 3000 ryous, e nas montanhas a dificuldade é "Alta" com um pagamento de 5000 ryous.

O sistema deve imprimir o nome do líder ninja, o tipo de missão, a região, a dificuldade e o pagamento total.
*/

let nomeLider = ask.question("Quem eh o lider da missao? ")
let tipoMissao1 = ask.question("Qual o tipo da missao? A, B ou C: ")
let destino = ask.question("Qual o destino da missao? NV, FL ou MO: ")
let dificuldade
let pagamento

switch (tipoMissao1.toUpperCase()) {
    case 'A' :
        if (destino.toUpperCase() === 'NV'){
            dificuldade = "Alta"
            pagamento = 5000
        } else if (destino.toUpperCase() === 'FL'){
            dificuldade = "Muito alta"
            pagamento = 7000
        } else if (destino.toUpperCase() === 'MO'){
            dificuldade = "Extrema"
            pagamento = 10000
        } else {
            console.log("Destino invalido, falha no sistema")
        } 
        break
    case 'B' :
        if (destino.toUpperCase() === 'NV'){
            dificuldade = "Media"
            pagamento = 3000
        } else if (destino.toUpperCase() === 'FL'){
            dificuldade = "Alta"
            pagamento = 5000
        } else if (destino.toUpperCase() === 'MO'){
            dificuldade = "Muito alta"
            pagamento = 7000
        } else {
            console.log("Destino invalido, falha no sistema")
        } 
        break
    case 'C' :
        if (destino.toUpperCase() === 'NV'){
            dificuldade = "Baixa"
            pagamento = 1000
        } else if (destino.toUpperCase() === 'FL'){
            dificuldade = "Media"
            pagamento = 3000
        } else if (destino.toUpperCase() === 'MO'){
            dificuldade = "Alta"
            pagamento = 5000
        } else {
            console.log("Destino invalido, falha no sistema")
        } 
        break
    default:
        console.log("Rank invalido, falha no sistema")
}

let destinoCompleto
if(destino.toUpperCase() === 'NV'){
    destinoCompleto = 'Vilas'
} else if(destino.toUpperCase() === 'FL'){
    destinoCompleto = 'Florestas'
} else if(destino.toUpperCase() === 'MO'){
    destinoCompleto = 'Montanhas'
}

console.log(`${nomeLider} liderou uma missao de rank ${tipoMissao1} nas ${destinoCompleto}, de dificuldade ${dificuldade}, e ganhou um pagamento de ${pagamento} ryous`)


