// Importando o readline-sync para interação com o usuário
const readline = require('readline-sync');

// Interface Produtos
class Produtos {
  calcularValorTotal() {
    throw new Error("Método calcularValorTotal() precisa ser implementado.");
  }
}

// Interface MétodosDePagamento
class MetodosDePagamento {
  pagar(valor) {
    throw new Error("Método pagar() precisa ser implementado.");
  }
}

// Classe Livro implementando Produtos
class Livro extends Produtos {
  constructor(nome, preco, quantidade) {
    super();
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    this.tipo = 'Livro';
  }

  calcularValorTotal() {
    return this.preco * this.quantidade;
  }
}

// Classe Eletronico implementando Produtos
class Eletronico extends Produtos {
  constructor(nome, preco, quantidade) {
    super();
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    this.tipo = 'Eletronico';
  }

  calcularValorTotal() {
    return this.preco * this.quantidade * 1.1; // Taxa de 10%
  }
}

// Classe Alimento implementando Produtos
class Alimento extends Produtos {
  constructor(nome, preco, quantidade) {
    super();
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    this.tipo = 'Alimento';
  }

  calcularValorTotal() {
    return this.preco * this.quantidade * 1.2; // Taxa de 20%
  }
}

// Classe CartaoDeCredito implementando MétodosDePagamento
class CartaoDeCredito extends MetodosDePagamento {
  pagar(valor) {
    console.log(`Pagamento de R$${valor.toFixed(2)} realizado com Cartao de Credito.`);
  }
}

// Classe Pix implementando MétodosDePagamento
class Pix extends MetodosDePagamento {
  pagar(valor) {
    console.log(`Pagamento de R$${valor.toFixed(2)} realizado via Pix.`);
  }
}

// Classe Dinheiro implementando MétodosDePagamento
class Dinheiro extends MetodosDePagamento {
  pagar(valor) {
    console.log(`Pagamento de R$${valor.toFixed(2)} realizado em Dinheiro.`);
  }
}

// Carrinho de compras
const carrinho = [];

// Funções do sistema
function comprarProduto() {
  const nome = readline.question("Digite o nome do produto: ");
  const tipo = readline.question("Escolha o tipo de produto (1: Livro, 2: Eletronico, 3: Alimento): ");
  const preco = parseFloat(readline.question("Digite o preco do produto: "));
  const quantidade = parseInt(readline.question("Digite a quantidade: "));

  let produto;

  switch (tipo) {
    case '1':
      produto = new Livro(nome, preco, quantidade);
      break;
    case '2':
      produto = new Eletronico(nome, preco, quantidade);
      break;
    case '3':
      produto = new Alimento(nome, preco, quantidade);
      break;
    default:
      console.log("Tipo de produto invalido.");
      return;
  }

  carrinho.push(produto);
  console.log(`${produto.nome} adicionado ao carrinho.`);
}

function verCarrinho() {
  if (carrinho.length === 0) {
    console.log("O carrinho esta vazio.");
    return;
  }

  let totalCompra = 0;
  console.log("\nCarrinho de Compras:");
  carrinho.forEach((produto, index) => {
    const totalProduto = produto.calcularValorTotal();
    totalCompra += totalProduto;
    console.log(`${index + 1}. ${produto.nome} - ${produto.tipo} - R$${totalProduto.toFixed(2)}`);
  });
  console.log(`Total da compra: R$${totalCompra.toFixed(2)}\n`);
}

function pagar() {
  if (carrinho.length === 0) {
    console.log("O carrinho esta vazio. Adicione produtos antes de pagar.");
    return;
  }

  let totalCompra = 0;
  carrinho.forEach(produto => {
    totalCompra += produto.calcularValorTotal();
  });

  console.log(`\nValor total da compra: R$${totalCompra.toFixed(2)}`);
  const metodo = readline.question("Escolha o método de pagamento (1: Cartao de Credito, 2: Pix, 3: Dinheiro): ");

  let metodoPagamento;

  switch (metodo) {
    case '1':
      metodoPagamento = new CartaoDeCredito();
      break;
    case '2':
      metodoPagamento = new Pix();
      break;
    case '3':
      metodoPagamento = new Dinheiro();
      break;
    default:
      console.log("Método de pagamento invalido.");
      return;
  }

  metodoPagamento.pagar(totalCompra);
  carrinho.length = 0; // Limpa o carrinho após o pagamento
  console.log("Compra finalizada.\n");
}

// Loop principal
while (true) {
  console.log("\nMenu Principal:");
  console.log("1. Comprar Produto");
  console.log("2. Ver Carrinho");
  console.log("3. Pagar");
  console.log("4. Sair");

  const opcao = readline.question("Escolha uma opção: ");

  switch (opcao) {
    case '1':
      comprarProduto();
      break;
    case '2':
      verCarrinho();
      break;
    case '3':
      pagar();
      break;
    case '4':
      console.log("Saindo do sistema...");
      process.exit();
    default:
      console.log("Opcao invalida.");
  }
}
