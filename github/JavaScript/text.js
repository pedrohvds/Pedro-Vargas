// Função para calcular o valor do ingresso
function calcularValorIngresso(tipoJogo, etapaJogo, categoria, quantidade) {
    // Valores para jogos domésticos
    const precosDomestico = {
        'SF': [1320, 880, 550, 220],
        'DT': [660, 440, 330, 170],
        'FI': [1980, 1320, 880, 330]
    };

    // Multiplicador para jogos internacionais
    const dolar = 4.10;

    // Verifica se é jogo internacional
    const internacional = tipoJogo === 'IN';

    // Determina o preço com base na etapa e categoria
    let valorUnitario = precosDomestico[etapaJogo][categoria - 1];
    
    if (internacional) {
        valorUnitario *= dolar;
    }

    // Retorna o valor total
    return valorUnitario * quantidade;
}

// Função para exibir o recibo
function exibirRecibo(nome, tipoJogo, etapaJogo, categoria, quantidade) {
    const valorTotal = calcularValorIngresso(tipoJogo, etapaJogo, categoria, quantidade);
    
    console.log("Nome:", nome);
    console.log("Tipo de Jogo:", tipoJogo === 'IN' ? "Internacional" : "Doméstico");
    console.log("Etapa do Jogo:", etapaJogo);
    console.log("Categoria:", categoria);
    console.log("Quantidade de ingressos:", quantidade);
    console.log("Valor total a pagar: R$", valorTotal.toFixed(2));
}

// Exemplo de uso:
const nome = "Pedro Henrique";
const tipoJogo = "IN"; // 'IN' para internacional ou 'DO' para doméstico
const etapaJogo = "FI"; // 'SF' para semifinal, 'DT' para decisão de 3º lugar, 'FI' para final
const categoria = 2; // Categorias de 1 a 4
const quantidade = 2; // Quantidade de ingressos

exibirRecibo(nome, tipoJogo, etapaJogo, categoria, quantidade);
