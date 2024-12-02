"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agenda = void 0;
var Agenda = /** @class */ (function () {
    function Agenda() {
        this.contatos = [];
    }
    Agenda.prototype.adicionarContato = function (contato) {
        this.contatos.push(contato);
    };
    Agenda.prototype.removerContato = function (nome) {
        var index = this.contatos.findIndex(function (contato) { return contato.getNome() === nome; });
        if (index !== -1) {
            this.contatos.splice(index, 1);
            console.log("Contato ".concat(nome, " removido."));
        }
        else {
            console.log("Contato ".concat(nome, " n\u00E3o encontrado."));
        }
    };
    Agenda.prototype.listarContatos = function () {
        if (this.contatos.length === 0) {
            console.log("Nenhum contato cadastrado.");
        }
        else {
            this.contatos.forEach(function (contato) { return contato.mostrarContato(); });
        }
    };
    Agenda.prototype.buscarContato = function (nome) {
        var contato = this.contatos.find(function (contato) { return contato.getNome() === nome; });
        if (contato) {
            contato.mostrarContato();
        }
        else {
            console.log("Contato ".concat(nome, " n\u00E3o encontrado."));
        }
    };
    Agenda.prototype.editarContato = function (nome, novoContato) {
        var index = this.contatos.findIndex(function (contato) { return contato.getNome() === nome; });
        if (index !== -1) {
            this.contatos[index] = novoContato;
            console.log("Contato ".concat(nome, " atualizado."));
        }
        else {
            console.log("Contato ".concat(nome, " n\u00E3o encontrado."));
        }
    };
    return Agenda;
}());
exports.Agenda = Agenda;
