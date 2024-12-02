"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zangief = void 0;
var BasePersonagens_1 = require("./BasePersonagens");
var danoUtils_1 = require("./danoUtils");
var Zangief = /** @class */ (function (_super) {
    __extends(Zangief, _super);
    function Zangief() {
        return _super.call(this, "Zangief", 100, "Rússia", "Luta Livre") || this;
    }
    Zangief.prototype.golpeLeve = function () {
        return (0, danoUtils_1.calcularDano)(5, 15, "leve");
    };
    Zangief.prototype.golpePesado = function () {
        return (0, danoUtils_1.calcularDano)(15, 30, "pesado");
    };
    Zangief.prototype.golpeEspecial = function () {
        if (this.golpeEspecialUsado)
            throw new Error("Golpe especial já foi usado.");
        this.golpeEspecialUsado = true;
        return (0, danoUtils_1.calcularDano)(35, 50, "especial");
    };
    return Zangief;
}(BasePersonagens_1.BasePersonagem));
exports.Zangief = Zangief;
