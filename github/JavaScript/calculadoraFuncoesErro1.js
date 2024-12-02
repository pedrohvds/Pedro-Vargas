const ask = require("readline-sync");

function obterNumero(mensagem) {
    return Number(ask.question(mensagem));
}

function realizarOperacao(op, num1, num2) {
    switch (op) {
        case 1:
            return num1 + num2; 
        case 2:
            return num1 - num2; 
        case 3:
            return num1 * num2; 
        case 4:
            return num1 / num2; 
        case 5:
            return num1 % num2; 
        default:
            return null;
    }
}

function calculadora() {
    let numero1 = obterNumero("Digite o primeiro numero: ");
    let numero2 = obterNumero("Digite o segundo numero: ");
    let calculadoraFuncionando = true;

    while (calculadoraFuncionando) {
        console.log(`\nSeus numeros sao:\n${numero1}\n${numero2}`);
        let operacao = obterNumero(`___________________________________

Qual operacao voce quer fazer? 

(1) - SOMA
(2) - SUBTRACAO
(3) - MULTIPLICACAO
(4) - DIVISAO
(5) - MOD (RESTO)
(0) - ENCERRAR SISTEMA
(6) - REINSERIR NUMEROS

: `);

        console.clear();

        if (operacao === 0) {
            calculadoraFuncionando = false; 
        } else if (operacao === 6) {
            numero1 = obterNumero("Digite o primeiro numero: ");
            numero2 = obterNumero("Digite o segundo numero: ");
        } else {
            const resultado = realizarOperacao(operacao, numero1, numero2);
            if (resultado !== null) {
                console.log(`Resultado: ${resultado}`);
            } else {
                console.log("Operação inválida.");
            }
        }

        ask.question(`\n^ Resposta ^ \nTecle ENTER para continuar...`);
        console.clear();
    }
}


calculadora();
