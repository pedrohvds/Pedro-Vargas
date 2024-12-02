const ask = require("readline-sync")

import { Livro } from "./Livro";
import { Alimento } from "./Alimento";
import { Produto } from "./Produto";

let carrinho: Array<Produto>

function comprarProduto(produtoNovo: Produto): void{
    carrinho.push(produtoNovo)
}

function verCarrinho(): void {
    console.clear()
    for(let produto of carrinho){
        console.log(`${produto.nome}............${produto.calcularValorTotal()}`)
    }
}

function pagarCarrinho(): void{
    console.log("Pagamento efetuado, carrinho vazio")
    carrinho = []
}

let sustentaMenu: boolean = true

while (sustentaMenu) {
    console.clear()
    console.log(`
    [1] - Comprar produto
    [2] - Ver carrinho
    [3] - Efetuar pagamento
    [4] - Sair
    `)

    let opcaoUsuario = Number(ask.question("Escolha uma opção: "));

    switch (opcaoUsuario) {
        case 1:
            //comprarProduto
            console.clear
            console.log(`
Qual produto voce quer comprar?

[1] - Livro
[2] - Alimento
`)
        let opcaoProduto = Number(ask.question("Digite o numero do tipo de produto que voce quer comprar"))
        switch (opcaoProduto){
            case 1:
                let nomeLivro: string = ask.question("Digite o nome do livro: ")
                let autorLivro: string = ask.question("Digite o autor do livro: ")
                let livroComprado = new Livro (nomeLivro, autorLivro)
                comprarProduto(livroComprado)
                ask.question("Livro adicionado ao carinho, tecle ENTER para continuar...")
                break;
            case 2:
                let nomeAlimento: string = ask.question("Digite o nome do alimento: ")
                let marcaAlimento: string = ask.question("Digite a marca do alimento: ")
                let alimentoComprado = new Livro (nomeAlimento, marcaAlimento)
                comprarProduto(alimentoComprado)
                ask.question("Alimento adicionado ao carinho, tecle ENTER para continuar...")
        }
            break;
        case 2:
            
            break;
        case 3:
            pagar();
            break;
        case 4:
            console.log("Saindo do sistema. Até logo!");
            return;
        default:
            console.log("Opção inválida!");
    }
}


menu();
