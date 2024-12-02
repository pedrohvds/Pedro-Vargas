import * as readlineSync from "readline-sync";

// Interfaces
interface Produto {
    nome: string;
    preco: number;
    tipo: string;
    calcularValorTotal(): number;
}

interface MetodoDePagamento {
    pagar(valor: number): void;
}

// Classes de Produtos
class Livro implements Produto {
    nome: string;
    preco: number;
    tipo: string = "Livro";

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    calcularValorTotal(): number {
        return this.preco;
    }
}

class Eletronico implements Produto {
    nome: string;
    preco: number;
    tipo: string = "Eletrônico";

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    calcularValorTotal(): number {
        // Aplicando uma taxa de 10% sobre o preço
        return this.preco * 1.1;
    }
}

class Alimento implements Produto {
    nome: string;
    preco: number;
    tipo: string = "Alimentação";

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    calcularValorTotal(): number {
        // Aplicando uma taxa de 5% sobre o preço
        return this.preco * 1.05;
    }
}

// Classes de Métodos de Pagamento
class CartaoDeCredito implements MetodoDePagamento {
    pagar(valor: number): void {
        console.log(`Pagamento de R$${valor.toFixed(2)} realizado com Cartão de Crédito.`);
    }
}

class Pix implements MetodoDePagamento {
    pagar(valor: number): void {
        console.log(`Pagamento de R$${valor.toFixed(2)} realizado via Pix.`);
    }
}

class Dinheiro implements MetodoDePagamento {
    pagar(valor: number): void {
        console.log(`Pagamento de R$${valor.toFixed(2)} realizado em Dinheiro.`);
    }
}

// Sistema de Compras
const carrinho: Produto[] = [];

function comprarProduto(): void {
    console.log("Escolha o tipo de produto:");
    const tipo = readlineSync.question("1. Livro\n2. Eletrônico\n3. Alimentação\n");

    let produto: Produto | null = null;
    const nome = readlineSync.question("Digite o nome do produto: ");
    const preco = parseFloat(readlineSync.question("Digite o preço do produto: "));

    switch (tipo) {
        case "1":
            produto = new Livro(nome, preco);
            break;
        case "2":
            produto = new Eletronico(nome, preco);
            break;
        case "3":
            produto = new Alimento(nome, preco);
            break;
        default:
            console.log("Tipo inválido!");
            return;
    }

    if (produto) {
        carrinho.push(produto);
        console.log(`${produto.nome} adicionado ao carrinho!`);
    }
}

function verCarrinho(): void {
    console.log("\nCarrinho de Compras:");
    if (carrinho.length === 0) {
        console.log("Carrinho está vazio!");
        return;
    }

    let total = 0;
    carrinho.forEach((produto, index) => {
        const valorTotal = produto.calcularValorTotal();
        total += valorTotal;
        console.log(
            `${index + 1}. ${produto.nome} - Tipo: ${produto.tipo} - Preço Total: R$${valorTotal.toFixed(2)}`
        );
    });
    console.log(`Total da Compra: R$${total.toFixed(2)}\n`);
}

function pagar(): void {
    if (carrinho.length === 0) {
        console.log("Carrinho está vazio! Adicione produtos antes de pagar.");
        return;
    }

    const total = carrinho.reduce((acc, produto) => acc + produto.calcularValorTotal(), 0);
    console.log(`Total a pagar: R$${total.toFixed(2)}`);

    const metodo = readlineSync.question("Escolha o método de pagamento:\n1. Cartão de Crédito\n2. Pix\n3. Dinheiro\n");
    let metodoDePagamento: MetodoDePagamento | null = null;

    switch (metodo) {
        case "1":
            metodoDePagamento = new CartaoDeCredito();
            break;
        case "2":
            metodoDePagamento = new Pix();
            break;
        case "3":
            metodoDePagamento = new Dinheiro();
            break;
        default:
            console.log("Método de pagamento inválido!");
            return;
    }

    if (metodoDePagamento) {
        metodoDePagamento.pagar(total);
        console.log("Compra finalizada com sucesso!");
        carrinho.length = 0; // Limpa o carrinho após o pagamento
    }
}

// Menu Principal
function menu(): void {
    while (true) {
        console.log("\nMenu Principal:");
        const opcao = readlineSync.question("1. Comprar Produto\n2. Ver Carrinho\n3. Pagar\n4. Sair\n");

        switch (opcao) {
            case "1":
                comprarProduto();
                break;
            case "2":
                verCarrinho();
                break;
            case "3":
                pagar();
                break;
            case "4":
                console.log("Saindo do sistema. Até logo!");
                return;
            default:
                console.log("Opção inválida!");
        }
    }
}

menu();
