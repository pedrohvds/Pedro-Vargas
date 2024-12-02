"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ask = require('readline-sync');
var Contato_1 = require("./Contato");
var Agenda_1 = require("./Agenda");
var agenda = new Agenda_1.Agenda();
var sustentaMenu = true;
while (sustentaMenu) {
    console.log("\nEscolha uma opção:");
    console.log("1 - Adicionar contato");
    console.log("2 - Remover contato");
    console.log("3 - Listar todos os contatos");
    console.log("4 - Buscar contato");
    console.log("5 - Editar contato");
    console.log("6 - Sair");
    var opcao = Number(ask.question("Digite a opção desejada: "));
    switch (opcao) {
        case 1:
            var nome = ask.question("Digite o nome do contato: ");
            var telefone = ask.question("Digite o telefone do contato: ");
            var email = ask.question("Digite o email do contato: ");
            var novoContato = new Contato_1.Contato(nome, telefone, email);
            agenda.adicionarContato(novoContato);
            console.log("Contato adicionado com sucesso!");
            break;
        case 2:
            var nomeRemover = ask.question("Digite o nome do contato a ser removido: ");
            agenda.removerContato(nomeRemover);
            break;
        case 3:
            console.log("Lista de contatos:");
            agenda.listarContatos();
            break;
        case 4:
            var nomeBuscar = ask.question("Digite o nome do contato a ser buscado: ");
            agenda.buscarContato(nomeBuscar);
            break;
        case 5:
            var nomeEditar = ask.question("Digite o nome do contato a ser editado: ");
            var novoNome = ask.question("Digite o novo nome: ");
            var novoTelefone = ask.question("Digite o novo telefone: ");
            var novoEmail = ask.question("Digite o novo email: ");
            var contatoEditado = new Contato_1.Contato(novoNome, novoTelefone, novoEmail);
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
