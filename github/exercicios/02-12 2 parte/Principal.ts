const ask = require('readline-sync');
import { Contato } from './Contato';
import { Agenda } from './Agenda';

const agenda = new Agenda();

let sustentaMenu = true;

while (sustentaMenu) {
    console.log("\nEscolha uma opção:");
    console.log("1 - Adicionar contato");
    console.log("2 - Remover contato");
    console.log("3 - Listar todos os contatos");
    console.log("4 - Buscar contato");
    console.log("5 - Editar contato");
    console.log("6 - Sair");

    const opcao = Number(ask.question("Digite a opção desejada: "));

    switch (opcao) {
        case 1:
            const nome = ask.question("Digite o nome do contato: ");
            const telefone = ask.question("Digite o telefone do contato: ");
            const email = ask.question("Digite o email do contato: ");
            const novoContato = new Contato(nome, telefone, email);
            agenda.adicionarContato(novoContato);
            console.log("Contato adicionado com sucesso!");
            break;
        case 2:
            const nomeRemover = ask.question("Digite o nome do contato a ser removido: ");
            agenda.removerContato(nomeRemover);
            break;
        case 3:
            console.log("Lista de contatos:");
            agenda.listarContatos();
            break;
        case 4:
            const nomeBuscar = ask.question("Digite o nome do contato a ser buscado: ");
            agenda.buscarContato(nomeBuscar);
            break;
        case 5:
            const nomeEditar = ask.question("Digite o nome do contato a ser editado: ");
            const novoNome = ask.question("Digite o novo nome: ");
            const novoTelefone = ask.question("Digite o novo telefone: ");
            const novoEmail = ask.question("Digite o novo email: ");
            const contatoEditado = new Contato(novoNome, novoTelefone, novoEmail);
            agenda.editarContato(nomeEditar, contatoEditado);
            break;
        case 6:
            sustentaMenu = false;
            console.log("Saindo do sistema...");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }
}
