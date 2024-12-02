/*
Os exercícios de hoje são divididos em interpretação e escrita de código. 
Para os de interpretação, coloque as respostas em comentários de código. 
Já, nos de escrita, lembre-se de imprimir no console os resultados.


█████████████████████████████████████████████████████████████████████████████████████████████████████████

███████ ██   ██ ███████ ██████   ██████ ██  ██████ ██  ██████  ███████     ██████  ███████ 
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██ ██          ██   ██ ██      
█████     ███   █████   ██████  ██      ██ ██      ██ ██    ██ ███████     ██   ██ █████   
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██      ██     ██   ██ ██      
███████ ██   ██ ███████ ██   ██  ██████ ██  ██████ ██  ██████  ███████     ██████  ███████ 

██ ███    ██ ████████ ███████ ██████  ██████  ██████  ███████ ████████  █████   ██████  █████   ██████  
██ ████   ██    ██    ██      ██   ██ ██   ██ ██   ██ ██         ██    ██   ██ ██      ██   ██ ██    ██ 
██ ██ ██  ██    ██    █████   ██████  ██████  ██████  █████      ██    ███████ ██      ███████ ██    ██ 
██ ██  ██ ██    ██    ██      ██   ██ ██      ██   ██ ██         ██    ██   ██ ██      ██   ██ ██    ██ 
██ ██   ████    ██    ███████ ██   ██ ██      ██   ██ ███████    ██    ██   ██  ██████ ██   ██  ██████  


Tente responder os exercícios dessa seção sem executar o código. 
Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado.                                                                                                                                                                                                

█████████████████████████████████████████████████████████████████████████████████████████████████████████

*/




//1. Leia o código abaixo:

let numero = 5

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

/*
    a) Explique o que o código faz. Qual o teste que ele realiza? Ele vê os números pares e impares, os pares imprime no terminal "Passou no teste.", e os impares imprime no 
    terminal "Não passou no teste."

    b) Para que tipos de números ele imprime no console "Passou no teste"? Números pares

    c) Para que tipos de números a mensagem é "Não passou no teste"? Números impares 
*/


//2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

let fruta = "Uva"
let preco 
switch (fruta.toUpperCase()) {
  case "LARANJA":
    preco = 3.5
    break;
  case "MAÇÃ":
    preco = 2.25
    break;
  case "UVA":
    preco = 0.30
    break;
  case "PÊRA":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log(`O preço da fruta ${fruta} é R$ ${preco}`)

/*
    a) Para que serve o código acima? para procurar o preço de várias frutas de forma "automatizada"

    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? O preço da fruta Maçã é 2.25

    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima 
    do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? "O preço da fruta Pêra é 5", pois o break precisa estar ali para o terminal "parar" de ler
*/


//3. Leia o código abaixo:

const num1 = 5
if(num1 > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

//console.log(mensagem)

/*
    a) O que a primeira linha está fazendo? criando uma constante com o valor 5

    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10? se for 10, vai imprimir a mensagem "Esse número passou no teste". 
    Se for -10, não vai imprimir nada

    c) Haverá algum erro no console? Justifique. Sim. 
*/



/*
█████████████████████████████████████████████████████████████████████████████████████████████████████████

███████ ██   ██ ███████ ██████   ██████ ██  ██████ ██  ██████  ███████     ██████  ███████
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██ ██          ██   ██ ██
█████     ███   █████   ██████  ██      ██ ██      ██ ██    ██ ███████     ██   ██ █████
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██      ██     ██   ██ ██
███████ ██   ██ ███████ ██   ██  ██████ ██  ██████ ██  ██████  ███████     ██████  ███████

███████ ███████  ██████ ██████  ██ ████████  █████      ██████  ███████
██      ██      ██      ██   ██ ██    ██    ██   ██     ██   ██ ██
█████   ███████ ██      ██████  ██    ██    ███████     ██   ██ █████
██           ██ ██      ██   ██ ██    ██    ██   ██     ██   ██ ██
███████ ███████  ██████ ██   ██ ██    ██    ██   ██     ██████  ███████

 ██████  ██████  ██████  ██  ██████   ██████
██      ██    ██ ██   ██ ██ ██       ██    ██
██      ██    ██ ██   ██ ██ ██   ███ ██    ██
██      ██    ██ ██   ██ ██ ██    ██ ██    ██
 ██████  ██████  ██████  ██  ██████   ██████

█████████████████████████████████████████████████████████████████████████████████████████████████████████
*/


/*
1. Faça um programa que declare uma variável com a sua idade e imprima no console um teste dizendo se você pode ou não dirigir (apenas maiores de idade).
*/

let idade = 18

if (idade >= 18){
  console.log("Eu posso dirigir")
} else {
  console.log("Eu não posso dirigir")
}

/*
2. Agora pesquise no Google o horário atual no Vietnã. Declare uma variável do tipo string que contenha os valores "manhã", "tarde", "noite" ou "madrugada"
com base no fuso horário do Vietnã. Utilize o bloco if/else para escrever uma mensagem, sendo ela "Bom dia, Vietnã!", "Boa tarde, Vietnã", "Boa noite, Vietã" ou "Boa madrugada, Vietnã", 
dependendo de qual for o seu fuso horário atual.
*/

let horarioVieta = "madrugada"

let horarioVieta1 = 1

let manha = "manhã"
let tarde = "tarde"
let noite = "noite"
let madrugada = "madrugada"

if (horarioVieta1 >= 7 && horarioVieta1 <= 12){
  console.log("Bom dia, Vietnã!")
} else if (horarioVieta1 > 12 && horarioVieta1 <= 18){
  console.log("Boa tarde, Vietnã")
} else if (horarioVieta1 > 18 && horarioVieta1 < 24){
  console.log("Boa noite, Vietã")
} else {
  console.log("Boa madrugada, Vietnã")
}

// OU

if (horarioVieta==manha){
  console.log("Bom dia, Vietnã!")
} else if (horarioVieta==tarde){
  console.log("Boa tarde, Vietnã")
} else if (horarioVieta==noite){
  console.log("Boa noite, Vietã")
} else {
  console.log("Boa madrugada, Vietnã")
}

/*
3. Agora repita o exercício anterior, porém utilizando o bloco Switch/Case e utilizando o fuso horário do Havaí.
*/

let horarioHavai = "manhã"

switch(horarioHavai.toUpperCase()){
  case 'MANHÃ':
    console.log('Bom dia, havai!')
    break
  case 'TARDE':
    console.log('Boa tarde, havai!')
    break
  case 'NOITE':
    console.log('Boa noite, havai!')
    break
  case 'MADRUGADA':
    console.log('Boa madrugada, havai!')
}