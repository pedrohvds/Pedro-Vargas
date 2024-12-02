//1

const filme = {
    diretor: `Peter Jackson`,
    nome: `O Senhor dos Aneis`,
    anoLancamento: 2001,
    elenco: [`Ian McKellen`, `Elijah Wood`, `Orlando Bloom`, `Viggo Mortensen`],
    assistido: true
}

console.log(filme.diretor)
console.log(filme.nome)
console.log(filme.anoLancamento)
console.log(filme[`elenco`])
console.log(filme[`assistido`])


//2

const pessoa = {
    nome: "PH",
    idade: 18,
    generoMusicalPreferido: "Gospel"
}

console.log("O nome da pessoa é", pessoa.nome, "ele tem", pessoa.idade, "anos, e gosta muito de", pessoa.generoMusicalPreferido)


//3

filme.personagens = [`Gandalf`, `Frodo`, `Legolas`, `Aragorn`]

for(let i = 0; i < filme.elenco.length; i++){
    console.log(`${filme.elenco[i]}: ${filme.personagens[i]}`)
}

filme.elenco[0] = "Xuxa"

console.log(filme.diretor)
console.log(filme.nome)
console.log(filme.anoLancamento)
console.log(filme[`elenco`])
console.log(filme[`assistido`])
console.log(filme.personagens)


//4

function criaNovaPessoa(objetoPessoa){
    const novaPessoa = {
        comidaPreferida: ["cigarro", "", ""]
    }
}

