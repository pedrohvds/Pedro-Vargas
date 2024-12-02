"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Aluno_1 = require("./Aluno");
var ask = require("readline-sync");
var sustentaMenu = true;
var alunos = [];
var classesMagicas = ["Feitiçaria e Encantamentos", "Poções", "Transfiguração", "Defesa Contra as Artes das Trevas", "Herbologia", "Astronomia", "História da Magia", "Cuidado de Criaturas Mágicas", "Voo", "Magia Experimental", "Divinação", "Runas Antigas"];
while (sustentaMenu) {
    console.clear();
    console.log("\n    [1] - Cadastrar novo aluno\n    [2] - Ver alunos cadastrados \n    [3] - Editar dados de um aluno\n    [4] - Deletar um aluno\n    [5] - sair\n    ");
    var opcaoUsuario = Number(ask.question("Escolha uma opcao: "));
    switch (opcaoUsuario) {
        case 1:
            cadastrarAluno();
            break;
        case 2:
            verAlunosCadastrados();
            break;
        case 3:
            editarDadosDeUmAluno();
            break;
        case 4:
            deletarUmAluno();
            break;
        case 5:
            sustentaMenu = false;
            console.log('Saindo do programa...');
            break;
    }
}
function cadastrarAluno() {
    console.clear();
    var nomeNovo = ask.question("Digite o nome do aluno: ");
    var idadeNova = Number(ask.question("Digite a idade do aluno: "));
    var nacionalidadeNova = ask.question("Digite a nacionalidade do aluno: ");
    var classeMagicaNova = selecionarClasseMagica();
    /*let sustentaClasse: boolean = true
    
    while (sustentaClasse) {
        console.clear()
        console.log(`
        [1] - Feitiçaria e Encantamentos
        [2] - Poções
        [3] - Transfiguração
        [4] - Defesa Contra as Artes das Trevas
        [5] - Herbologia
        [6] - Astronomia
        [7] - História da Magia
        [8] - Cuidado de Criaturas Mágicas
        [9] - Voo
        [10] - Magia Experimental
        [11] - Divinação
        [12] - Runas Antigas
        `)
        
        let opcaoUsuario = Number(ask.question("Escolha a sua classe: "));
        
        classeMagicaNova = classesMagicas[opcaoUsuario - 1]
        
        sustentaClasse = false
    } */
    var alunoNovo = new Aluno_1.Aluno(nomeNovo, idadeNova, nacionalidadeNova, classeMagicaNova);
    alunos.push(alunoNovo);
    alunoNovo.sortearCasa();
}
function verAlunosCadastrados() {
    console.clear;
    for (var _i = 0, alunos_1 = alunos; _i < alunos_1.length; _i++) {
        var alunoNovo = alunos_1[_i];
        console.log(alunos.indexOf(alunoNovo) + 1);
        console.log(alunoNovo.exibirInformacoes());
    }
    ask.question('Tecle ENTER para continuar...');
}
function editarDadosDeUmAluno() {
    console.clear();
    verAlunosCadastrados();
    var opcaoUsuario = Number(ask.question("Qual aluno deseja editar?"));
    if (opcaoUsuario > 0 && opcaoUsuario <= alunos.length) {
        var nomeNovo = ask.question("Digite o novo nome do aluno: ");
        var idadeNova = Number(ask.question("Digite a nova idade do aluno: "));
        var nacionalidadeNova = ask.question("Digite a nova nacionalidade do aluno: ");
        var classeMagicaNova = void 0;
        classeMagicaNova = selecionarClasseMagica();
        alunos[opcaoUsuario - 1].sortearCasa();
        alunos[opcaoUsuario - 1].setNome(nomeNovo);
        alunos[opcaoUsuario - 1].setIdade(idadeNova);
        alunos[opcaoUsuario - 1].setNacionalidade(nacionalidadeNova);
        alunos[opcaoUsuario - 1].setClasseMagica(classeMagicaNova);
    }
    ask.question("Tecle ENTER para continuar...");
}
function selecionarClasseMagica() {
    console.clear();
    console.log("Selecione uma nova classe mágica:");
    /*classesMagicas.forEach((classe, index) => {
        console.log(`[${index + 1}] - ${classe}`);
    });*/
    for (var _i = 0, classesMagicas_1 = classesMagicas; _i < classesMagicas_1.length; _i++) {
        var classe = classesMagicas_1[_i];
        console.log("[".concat(classesMagicas.indexOf(classe) + 1, "] - ").concat(classe));
    }
    var opcaoClasse = Number(ask.question("Escolha uma opção: ")) - 1;
    if (opcaoClasse < 0 || opcaoClasse >= classesMagicas.length) {
        console.log("Opção inválida. Mantendo a classe mágica atual.");
        return "";
    }
    return classesMagicas[opcaoClasse];
}
function deletarUmAluno() {
    console.clear();
    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado para deletar.");
        ask.question("Tecle ENTER para continuar...");
        return;
    }
    console.log("Lista de alunos cadastrados:");
    /*alunos.forEach((aluno, index) => {
        console.log(`[${index + 1}] - ${aluno.getNome()}`);
    });*/
    for (var _i = 0, alunos_2 = alunos; _i < alunos_2.length; _i++) {
        var aluno = alunos_2[_i];
        console.log("[".concat(alunos.indexOf(aluno) + 1, "] - ").concat(aluno.getNome(), " - "));
    }
    var indice = Number(ask.question("Digite o número do aluno que deseja deletar: ")) - 1;
    if (indice < 0 || indice >= alunos.length) {
        console.log("Opção inválida.");
        ask.question("Tecle ENTER para continuar...");
        return;
    }
    var alunoRemovido = alunos.splice(indice, 1)[0];
    console.log("Aluno ".concat(alunoRemovido.getNome(), " removido com sucesso."));
    ask.question("Tecle ENTER para continuar...");
}
