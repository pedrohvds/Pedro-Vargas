const ask = require('readline-sync');

let moradores = [];
let objetosRoubados = [];

function main() {
    let sustentaMenu = true;
    while (sustentaMenu) {
        console.clear();
        console.log(`
[1] - Cadastrar novo morador
[2] - Visualizar moradores
[3] - Cadastrar novo objeto
[4] - Visualizar objetos
[5] - Nova rodada (escolher ladrao)
[6] - Investigar ladrao
[0] - Sair
        `);
        let opcaousuario = Number(ask.question('Escolha uma opcao: '));

        switch (opcaousuario) {
            case 1:
                cadastrarMoradores();
                break;
            case 2:
                visualizarMoradores();
                break;
            case 3:
                cadastrarObjeto();
                break;
            case 4:
                visualizarObjetosRoubados();
                break;
            case 5:
                escolherLadrao();
                break;
            case 6:
                investigarLadrao();
                break;
            case 0:
                sustentaMenu = false;
                console.log('Saindo do programa...');
                break;
            default:
                console.log('Opcao invalida. Tente novamente.');
                break;
        }
    }
}

function cadastrarMoradores() {
    console.clear();
    let nomeMorador = ask.question('Digite o nome do morador: ');
    let novoMorador = {
        nome: nomeMorador,
        ehLadrao: false,
        objetoRoubado: null
    };
    moradores.push(novoMorador);
    console.clear();
    ask.question('Morador cadastrado. Tecle ENTER para continuar...');
}

function cadastrarObjeto() {
    console.clear();
    let objeto = ask.question('Digite o nome do objeto: ');
    objetosRoubados.push(objeto);
    console.clear();
    ask.question('Objeto cadastrado. Tecle ENTER para continuar...');
}

function escolherLadrao() {
    if (moradores.length > 0 && objetosRoubados.length > 0) {
        moradores.forEach(morador => {
            morador.ehLadrao = false
            morador.objetoRoubado = null
        })
        let numMoradorAleatorio = Math.floor(Math.random() * moradores.length);
        moradores[numMoradorAleatorio].ehLadrao = true


        let numObjetoAleatorio = Math.floor(Math.random() * objetosRoubados.length)
        moradores[numMoradorAleatorio].objetoRoubado = objetosRoubados[numObjetoAleatorio]

        console.clear()
        ask.question('Uma nova rodada foi criada. Tecle ENTER para continuar...')
    } else {
        console.clear()
        ask.question('E necessario ter moradores e objetos cadastrados antes de escolher um ladrao. Tecle ENTER para continuar...')
    }
}

function visualizarMoradores() {
    console.clear();
    if (moradores.length > 0) {
        moradores.forEach(morador => {
            console.log(`Nome: ${morador.nome}`)
            console.log(`Ladrao: ${morador.ehLadrao ? 'Sim' : 'Nao'}`)
            console.log(`Objeto Roubado: ${morador.objetoRoubado ? morador.objetoRoubado : 'Nenhum'}`)
            console.log('_____________________')
        });
        ask.question('Tecle ENTER para continuar...')
        ask.question('Nao ha moradores cadastrados. Tecle ENTER para continuar...');
    }
}

function visualizarObjetosRoubados() {
    console.clear();
    if (objetosRoubados.length > 0) {
        objetosRoubados.forEach(objeto => {
            console.log(`Nome: ${objeto}`);
            console.log('_____________________');
        });
        ask.question('Tecle ENTER para continuar...');
    } else {
        ask.question('Nao ha objetos cadastrados. Tecle ENTER para continuar...');
    }
}

function investigarLadrao() {
    let culpado = moradores.find(morador => morador.ehLadrao);
    if (culpado) {
        console.clear();
        console.log(`O ladrao e: ${culpado.nome}`);
        console.log(`Objeto roubado: ${culpado.objetoRoubado}`);
        ask.question('Tecle ENTER para continuar...');
    } else {
        console.clear();
        ask.question('Nenhum ladrao foi escolhido ainda. Tecle ENTER para continuar...');
    }
}

main();
