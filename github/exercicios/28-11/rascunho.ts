/*
function editarDadosDeUmAluno() {
    console.clear();

    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado para editar.");
        ask.question("Tecle ENTER para continuar...");
        return;
    }

    console.log("Lista de alunos cadastrados:");
    alunos.forEach((aluno, index) => {
        console.log(`[${index + 1}] - ${aluno.getNome()}`);
    });

    let indice = Number(ask.question("Digite o número do aluno que deseja editar: ")) - 1;

    if (indice < 0 || indice >= alunos.length) {
        console.log("Opção inválida.");
        ask.question("Tecle ENTER para continuar...");
        return;
    }

    let alunoSelecionado = alunos[indice];
    let editar = true;

    while (editar) {
        console.clear();
        console.log(`
Editando o aluno: ${alunoSelecionado.getNome()}
[1] - Alterar Nome
[2] - Alterar Idade
[3] - Alterar Nacionalidade
[4] - Alterar Classe Mágica
[5] - Finalizar edição
        `);

        let opcaoEdicao = Number(ask.question("Escolha uma opção: "));

        switch (opcaoEdicao) {
            case 1:
                let novoNome = ask.question("Digite o novo nome: ");
                alunoSelecionado.setNome(novoNome);
                console.log("Nome atualizado com sucesso!");
                break;
            case 2:
                let novaIdade = Number(ask.question("Digite a nova idade: "));
                if (isNaN(novaIdade) || novaIdade <= 0) {
                    console.log("Idade inválida.");
                } else {
                    alunoSelecionado.setIdade(novaIdade);
                    console.log("Idade atualizada com sucesso!");
                }
                break;
            case 3:
                let novaNacionalidade = ask.question("Digite a nova nacionalidade: ");
                alunoSelecionado.setNacionalidade(novaNacionalidade);
                console.log("Nacionalidade atualizada com sucesso!");
                break;
            case 4:
                let novaClasse = selecionarClasseMagica();
                alunoSelecionado.setClasseMagica(novaClasse);
                console.log("Classe mágica atualizada com sucesso!");
                break;
            case 5:
                editar = false;
                console.log("Edição finalizada.");
                break;
            default:
                console.log("Opção inválida.");
        }

        if (editar) ask.question("Tecle ENTER para continuar...");
    }
}

function selecionarClasseMagica(): string {
    console.clear();
    console.log("Selecione uma nova classe mágica:");
    classesMagicas.forEach((classe, index) => {
        console.log(`[${index + 1}] - ${classe}`);
    });

    let opcaoClasse = Number(ask.question("Escolha uma opção: ")) - 1;

    if (opcaoClasse < 0 || opcaoClasse >= classesMagicas.length) {
        console.log("Opção inválida. Mantendo a classe mágica atual.");
        return "";
    }

    return classesMagicas[opcaoClasse];
}
*/


function editarDadosDeUmAluno(){
    verAlunosCadastrados()
    let opcaoUsuario = Number(ask.question("Qual aluno deseja editar?"))
    if(opcaoUsuario > 0 && opcaoUsuario <= alunos.length){
        let nomeNovo = ask.question("Digite o novo nome do aluno")
        alunos[opcaoUsuario - 1].setNome(nomeNovo)
    }
}