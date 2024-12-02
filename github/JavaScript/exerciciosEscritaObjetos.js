/* 1. Resolva os passos a seguir: 
    
    a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: */

// Exemplo de entrada
const pessoa = {
    nome: "Vitor Hugo",
    apelidos: ["Vitinho", "Vitão", "Vit"]
}

// Exemplo de saída
"Eu sou Vitor, mas pode me chamar de: Vitinho, Vitão ou Vit"

const pessoa2 = {
    nome: "Peter Parker",
    apelidos: ["miranha", " spider", " porco aranha"]
}

function apresentar(objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos}`)
}

apresentar(pessoa2)

//b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

const pessoa3 = {
    ...pessoa2,
    apelidos: ["homem", " aranha humana", " teiudu"]
}

apresentar(pessoa3)

/*
2. Resolva os passos a seguir: 
    
    a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
*/

const pessoa4 = {
    nome: "Luis Suarez",
    idade: 37,
    profissao: "jogador de futebol"
}

const pessoa5 = {
    nome: "Luis Suarez",
    idade: 37,
    profissao: "jogador de futebol"
}

/*
    b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:
    
    1. O valor de nome
    2. O numero de caracteres do valor nome
    3. O valor de idade
    4. O valor de profissão
    5. O numero de caracteres do valor profissão
*/



/*
3.  Resolva os passos a seguir: 
    
    a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho
    
    b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)
    
    c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados.

    d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 
*/

let carrinho = []

const fruta1 = {
    nome: "Laranja",
    disponibilidade: true
}

const fruta2 = {
    nome: "Tomate",
    disponibilidade: true
}

const fruta3 = {
    nome: "Uva",
    disponibilidade: true
}


