"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(capa, autor, titulo, valorCusto, comissaoAutor) {
        this.capa = capa;
        this.autor = autor;
        this.titulo = titulo;
        this.valorCusto = valorCusto;
        this.comissaoAutor = comissaoAutor;
    }
    Livro.prototype.calcularValorTotal = function () {
        return this.valorCusto + this.comissaoAutor;
    };
    return Livro;
}());
exports.Livro = Livro;
