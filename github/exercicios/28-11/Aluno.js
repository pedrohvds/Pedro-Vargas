"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var Aluno = /** @class */ (function () {
    function Aluno(nome, idade, nacionalidade, classeMagica) {
        this.nome = nome;
        this.idade = idade;
        this.nacionalidade = nacionalidade;
        this.classeMagica = classeMagica;
    }
    Aluno.prototype.getNome = function () {
        return this.nome;
    };
    Aluno.prototype.setNome = function (nomeNovo) {
        this.nome = nomeNovo;
    };
    Aluno.prototype.getIdade = function () {
        return this.idade;
    };
    Aluno.prototype.setIdade = function (idadeNova) {
        this.idade = idadeNova;
    };
    Aluno.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    Aluno.prototype.setNacionalidade = function (nacionalidadeNova) {
        this.nacionalidade = nacionalidadeNova;
    };
    Aluno.prototype.getCasa = function () {
        return this.casa;
    };
    Aluno.prototype.setCasa = function (casaNova) {
        this.casa = casaNova;
    };
    Aluno.prototype.getClasseMagica = function () {
        return this.classeMagica;
    };
    Aluno.prototype.setClasseMagica = function (classeMagicaNova) {
        this.classeMagica = classeMagicaNova;
    };
    Aluno.prototype.sortearCasa = function () {
        var casas = ["Grifinória", "Sonserina", "Lufa-Lufa", "Corvinal"];
        this.casa = casas[Math.floor(Math.random() * casas.length)];
    };
    Aluno.prototype.exibirInformacoes = function () {
        var _a;
        return "\nNome: ".concat(this.nome, "\nIdade: ").concat(this.idade, "\nNacionalidade: ").concat(this.nacionalidade, "\nCasa: ").concat((_a = this.casa) !== null && _a !== void 0 ? _a : "Não sorteada", "\nClasse M\u00E1gica: ").concat(this.classeMagica, "\n");
    };
    return Aluno;
}());
exports.Aluno = Aluno;
