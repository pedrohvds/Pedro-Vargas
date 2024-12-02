// DUPLA: Pedro Henrique Vargas de Souza, Mateus de Avila Metz


const ask = require('readline-sync')

const doadores = []; //Criando um array chamado doadores

function main() {  //Criando uma função para o menu
    let sustentaMenu = true;
    while (sustentaMenu) { // Criando um laço de repetição (while) para manter o menu funcionando
        console.clear();
        console.log(`
===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE ===== 

1. Cadastrar doador
2. Listar doadores
3. Buscar doador por tipo sanguíneo
4. Buscar doador por data da última doação
5. Sair `);
        let opcaousuario = Number(ask.question('Escolha uma opcao: '));
        switch (opcaousuario) {
            case 1:
                cadastrarDoador();
                break;
            case 2:
                listarDoador();
                break;
            case 3:
                buscarDoadorPorTipoSanguíneo();
                break;
            case 4:
                buscarDoadorPorDataDaUltimaDoação();
                break;
            case 5:
                sustentaMenu = false;
                console.log('Saindo do programa...');
                break;
            default:
                console.log('Opcao invalida. Tente novamente.');
                break;
        }
    }
} // Criando um switch case para cada opção listada no menu


function cadastrarDoador() {
    console.clear()
    let novoDoador = {
        nome: ask.question(`Qual o nome do doador? `),
        idade: Number(ask.question(`Qual a idade do doador? `)),
        peso: Number(ask.question(`Qual o peso do doador? `)),
        tipoSanguineo: (ask.question(`Qual o tipo sanguineo do doador? `)).toUpperCase(),
        ultimaDoacao: {
            dia: Number(ask.question(`Qual o dia da ultima doacao? ex: dd/##/#### : `)),
            mes: Number(ask.question(`Qual o mes da ultima doacao? ex: ##/mm/#### : `)),
            ano: Number(ask.question(`Qual o ano da ultima doacao? ex: ##/##/aaaa : `))
        }
    }

    doadores.push(novoDoador);
    console.log(`Doador cadastrado com sucesso!`)
} // Criando uma função que recebe nome, idade, peso, tipo sanguíneo e ultima doação

function listarDoador() {
    console.clear()
    console.log(`--------------------
LISTAGEM DE DOADORES:
--------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------`);
    for (let novoDoador of doadores) {
        console.log(`${novoDoador.nome.padEnd(16)} |  ${novoDoador.idade.toString().padEnd(4)} | ${novoDoador.peso.toString().padEnd(1)}Kg |  ${novoDoador.tipoSanguineo.padEnd(13)} |  ${novoDoador.ultimaDoacao.dia}/${novoDoador.ultimaDoacao.mes}/${novoDoador.ultimaDoacao.ano}`);
    }

    console.log(`-----------------------------------------------------------------`);
    ask.question('Tecle ENTER para continuar...')
} // Criando uma função para imprimir no terminal os dados de todos os doadores

function buscarDoadorPorTipoSanguíneo() {
    console.clear()
    let buscarTipoSanguineo = (ask.question(`Qual o tipo sanguineo que voce quer buscar? `)).toUpperCase()
    console.log(`--------------------
LISTAGEM DE DOADORES:
--------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------`);

    let doadorEncontrado = false

    for (let novoDoador of doadores) {
        if (novoDoador.tipoSanguineo === buscarTipoSanguineo) {
            console.log(`${novoDoador.nome.padEnd(16)} |  ${novoDoador.idade.toString().padEnd(4)} | ${novoDoador.peso.toString().padEnd(1)}Kg |  ${novoDoador.tipoSanguineo.padEnd(13)} |  ${novoDoador.ultimaDoacao.dia}/${novoDoador.ultimaDoacao.mes}/${novoDoador.ultimaDoacao.ano}`);
            doadorEncontrado = true
        }
    }
    if (!doadorEncontrado) {
        console.log(`Nenhum doador encontrado para o tipo sanguíneo "${buscarTipoSanguineo}".`);
    }
    console.log(`-----------------------------------------------------------------`);
    ask.question('Tecle ENTER para continuar...')
} // Criando uma função que busca os doadores pelo tipo sanguíneo, e imprime no terminal

function buscarDoadorPorDataDaUltimaDoação() {
    console.clear()
    console.clear()
    let buscarUltimaDoacao = {
        dia: Number(ask.question(`Qual o dia que voce quer buscar? `).toUpperCase()),
        mes: Number(ask.question(`Qual o mes que voce quer buscar? `).toUpperCase()),
        ano: Number(ask.question(`Qual o ano que voce quer buscar? `).toUpperCase())
    }

    console.log(`--------------------
LISTAGEM DE DOADORES:
--------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------`);

    let doadorEncontrado = false

    for (let novoDoador of doadores) {
        let doadorValido = false
        if (novoDoador.ultimaDoacao.ano < buscarUltimaDoacao.ano) {
            doadorEncontrado = true
            doadorValido = true
        } else if (novoDoador.ultimaDoacao.ano == buscarUltimaDoacao.ano && novoDoador.ultimaDoacao.mes < buscarUltimaDoacao.mes) {
            doadorEncontrado = true
            doadorValido = true
        } else if (novoDoador.ultimaDoacao.ano == buscarUltimaDoacao.ano && novoDoador.ultimaDoacao.mes == buscarUltimaDoacao.mes && novoDoador.ultimaDoacao.dia <= buscarUltimaDoacao.dia) {
            doadorEncontrado = true
            doadorValido = true
        }

        if (doadorValido) {
            console.log(`${novoDoador.nome.padEnd(16)} |  ${novoDoador.idade.toString().padEnd(4)} | ${novoDoador.peso.toString().padEnd(1)}Kg |  ${novoDoador.tipoSanguineo.padEnd(13)} |  ${novoDoador.ultimaDoacao.dia}/${novoDoador.ultimaDoacao.mes}/${novoDoador.ultimaDoacao.ano}`);
        }

    }
    if (!doadorEncontrado) {
        console.log(`Nenhum doador encontrado para a data "${buscarUltimaDoacao.dia}/${buscarUltimaDoacao.mes}/${buscarUltimaDoacao.ano}".`);
    }
    console.log(`-----------------------------------------------------------------`);
    ask.question('Tecle ENTER para continuar...')
} // Criando uma função que imprime todos os doadores com datas anteriores a data que o paciente digitar no terminal

main(); // Chamando a função menu
