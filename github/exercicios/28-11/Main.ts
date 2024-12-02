import { Aluno } from "./Aluno";

const ask = require("readline-sync")

let sustentaMenu: boolean = true

let alunos: Array<Aluno> = []
let classesMagicas: Array<string> = ["Feitiçaria e Encantamentos", "Poções", "Transfiguração", "Defesa Contra as Artes das Trevas", "Herbologia", "Astronomia", "História da Magia", "Cuidado de Criaturas Mágicas", "Voo", "Magia Experimental", "Divinação", "Runas Antigas"]

while (sustentaMenu) {
    console.clear()
    console.log(`
    [1] - Cadastrar novo aluno
    [2] - Ver alunos cadastrados 
    [3] - Editar dados de um aluno
    [4] - Deletar um aluno
    [5] - sair
    `)

    let opcaoUsuario = Number(ask.question(`
Escolha uma opcao: 
`));

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
    console.clear()
    let nomeNovo = ask.question("Digite o nome do aluno: ")
    let idadeNova = Number(ask.question("Digite a idade do aluno: "))
    let nacionalidadeNova = ask.question("Digite a nacionalidade do aluno: ")
    let classeMagicaNova = selecionarClasseMagica()

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
    let alunoNovo = new Aluno(nomeNovo, idadeNova, nacionalidadeNova, classeMagicaNova)
    alunos.push(alunoNovo)

    alunoNovo.sortearCasa();
}



function verAlunosCadastrados() {
    console.clear
    for (let alunoNovo of alunos) {
        console.log("")
        console.log(alunos.indexOf(alunoNovo) + 1)
        console.log(alunoNovo.exibirInformacoes())
    }
    ask.question(`
Tecle ENTER para continuar...
`)
}



function editarDadosDeUmAluno() {
    console.clear();

    verAlunosCadastrados()
    let opcaoUsuario = Number(ask.question("Qual aluno deseja editar? "))
    if (opcaoUsuario > 0 && opcaoUsuario <= alunos.length) {
        let nomeNovo = ask.question("Digite o novo nome do aluno: ")
        let idadeNova = Number(ask.question("Digite a nova idade do aluno: "))
        let nacionalidadeNova = ask.question("Digite a nova nacionalidade do aluno: ")
        let classeMagicaNova
        classeMagicaNova = selecionarClasseMagica()
        alunos[opcaoUsuario - 1].sortearCasa()
        alunos[opcaoUsuario - 1].setNome(nomeNovo)
        alunos[opcaoUsuario - 1].setIdade(idadeNova)
        alunos[opcaoUsuario - 1].setNacionalidade(nacionalidadeNova)
        alunos[opcaoUsuario - 1].setClasseMagica(classeMagicaNova)
    }
    ask.question(`
Tecle ENTER para continuar...
`);
}




function selecionarClasseMagica(): string {
    console.clear();
    console.log("Selecione uma nova classe mágica: ");
    /*classesMagicas.forEach((classe, index) => {
        console.log(`[${index + 1}] - ${classe}`);
    });*/

    for (let classe of classesMagicas) {
        console.log(`[${classesMagicas.indexOf(classe) + 1}] - ${classe}`)
    }

    let opcaoClasse = Number(ask.question("Escolha uma opção: ")) - 1;

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
        ask.question(`
Tecle ENTER para continuar...
        `);
        return;
    }

    console.log("Lista de alunos cadastrados: ");

    /*alunos.forEach((aluno, index) => {
        console.log(`[${index + 1}] - ${aluno.getNome()}`);
    });*/

    for (let aluno of alunos) {
        console.log(`[${alunos.indexOf(aluno) + 1}] - ${aluno.getNome()} - `)
    }

    let indice = Number(ask.question("Digite o número do aluno que deseja deletar: ")) - 1;

    if (indice < 0 || indice >= alunos.length) {
        console.log("Opção inválida.");
        ask.question(`
Tecle ENTER para continuar...
`);
        return;
    }

    let alunoRemovido = alunos.splice(indice, 1)[0];
    console.log(`Aluno ${alunoRemovido.getNome()} removido com sucesso.`);
    ask.question(`
Tecle ENTER para continuar...
`);
}