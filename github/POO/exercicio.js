/*

// 1

// Definindo a classe cachorro (sem construtor)
class cachorro {
    // Método latir ("AU AU")
    latir() {
        console.log("Au!Au!")
    }
    // Método aniversário que aumenta a idade do cachorro em 1 ano
    aniversario() {
        this.idade += 1 // Aumenta a idade do cachorro
    }
}
// Criando uma instância da classe cachorro
const meuCachorro = new cachorro()
meuCachorro.nome = "Scooby" // Definindo o nome diretamente
meuCachorro.idade = 6 // Definindo a idade diretamente 

// Chamando o método latir

meuCachorro.latir()
meuCachorro.aniversario()

//Imprimindo 
console.log(`idade da ${meuCachorro.nome} é ${meuCachorro.idade}`)

//2

class lampada {
    ligar() {
        this.estado = "ligada"
        console.log("A lâmpada está desligada")
    }
    desligar() {
        this.estado = "desligada"
        console.log("A lâmpada está desligada")
    }
}

const minhaLampada = new lampada()
minhaLampada.cor = "amarela"

minhaLampada.ligar()
minhaLampada.desligar()

//3

class pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade + " anos"
    }

    hello() {
        console.log(`
    Olá meu nome é ${this.nome} e tenho ${this.idade}`)
    }
}

const pessoa1 = new pessoa("Pedro Henrique", 18)
pessoa1.hello()

//4

class produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    calculoTotal() {
        console.log(`Produto: ${this.nome}
Preço: R$${this.preco}
Quantidade: ${this.quantidade}
O total da sua compra foi de R$${this.quantidade * this.preco}`)
    }
}

const produto1 = new produto(`Hamburguer`, 35, 4)
produto1.calculoTotal()

*/

//6

/*

class transporte {
    constructor(nome) {
        this.nome = nome
    }
    // Método mover
    mover() {
        console.log("Este transporte está se movendo!")
    }
}

class carro extends transporte {
    mover() {
        console.log(`O carro está dirigindo na estrada`)
    }
}

class aviao extends transporte {
    mover() {
        console.log(`O avião está voando no céu`)
    }
}
// instâncias de carro e avião

const meuCarro = new carro(`fusca do imortal tricolor`)
const meuAviao = new aviao(`boeing 456`)

// chamar o método mover() para cada instância
meuCarro.mover()
meuAviao.mover()

*/

// 7

/*

class veiculo {
    constructor(velocidade) {
        this.velocidade = velocidade //a propriedade velocidade é definida no contrutor
    }
    // criando método para acelerar
    acelerar() {
        this.velocidade += 10 // aumenta a velocidade em 10km/h
        console.log(`Velocidade atual ${this.velocidade} km/h`)
    }
}

// classe filho carro que herda de veiculo
class carro extends veiculo{
    constructor(velocidade){
        super(velocidade) // chama o construtor da classe veiculo para inicializar velocidade
    }
    buzinar(){
        console.log("Buzinando! ")
    }    
}

// criando uma instância de "carro" com velocidade inicial 70km/h
const carro1  = new carro(70)
carro1.acelerar()
carro1.buzinar()



// 6.1

class treinoBase {
    constructor(exercicio, duracao, dificuldade) {
        this.exercicio = exercicio
        this.duracao = duracao
        this.dificuldade = dificuldade
    }
    treinar() {
        console.log(`O Ordeli irá treinar ${this.exercicio} durante ${this.duracao} séculos, o nível de dificuldade é ${this.dificuldade}`)
    }
}

const meuTreino = new treinoBase("agachamento", "432,3", "impossível")
meuTreino.treinar()

// 7

class conta {
    #saldo = -61896435839145694 // privado
    constructor(nome) {
        this.nome = nome
    }


    // método publico para adicionar saldo

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor
            return `Depósito de R$${valor} realizado`
        }
        return `Valor inválido`
    }

    //Método público para acessar o saldo

    obterSaldo() {
        return `O saldo é de R$${this.#saldo}`
    }
}

const minhaConta = new conta(`Pedro Henrique`)
minhaConta.depositar(99994729109439449)
console.log(minhaConta.obterSaldo())



//8

class pessoa {
    #nome
    #idade
    constructor(nome, idade) {
        this.#nome = nome
        this.#idade = idade
    }
    obterNome() {
        return this.#nome
    }
    obterIdade() {
        return this.#idade
    }
    alternarIdade(novaIdade) {
        if(novaIdade >= 0){
            this.#idade = novaIdade
        } else {
            console.log(`idade inválida`)
        }
    }
}

const minhaPessoa = new pessoa("Pedro Henrique", 18)

console.log(minhaPessoa.obterNome())
console.log(minhaPessoa.obterIdade())

minhaPessoa.alternarIdade(92)

console.log(minhaPessoa.obterIdade())

*/
