"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePersonagem = void 0;
var BasePersonagem = /** @class */ (function () {
    function BasePersonagem(nome, vida, nacionalidade, estiloLuta) {
        this.golpeEspecialUsado = false;
        this.nome = nome;
        this.vida = vida;
        this.nacionalidade = nacionalidade;
        this.estiloLuta = estiloLuta;
    }
    BasePersonagem.prototype.getNome = function () {
        return this.nome;
    };
    BasePersonagem.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    BasePersonagem.prototype.getVida = function () {
        return this.vida;
    };
    BasePersonagem.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    BasePersonagem.prototype.getNacionalidade = function () {
        return this.nacionalidade;
    };
    BasePersonagem.prototype.setNacionalidade = function (nacionalidade) {
        this.nacionalidade = nacionalidade;
    };
    BasePersonagem.prototype.getEstiloLuta = function () {
        return this.estiloLuta;
    };
    BasePersonagem.prototype.setEstiloLuta = function (estilo) {
        this.estiloLuta = estilo;
    };
    BasePersonagem.prototype.golpeLeve = function () {
        throw new Error("Método não implementado.");
    };
    BasePersonagem.prototype.golpePesado = function () {
        throw new Error("Método não implementado.");
    };
    BasePersonagem.prototype.golpeEspecial = function () {
        if (this.golpeEspecialUsado) {
            throw new Error("Golpe especial já foi usado.");
        }
        this.golpeEspecialUsado = true;
        throw new Error("Método não implementado.");
    };
    return BasePersonagem;
}());
exports.BasePersonagem = BasePersonagem;
