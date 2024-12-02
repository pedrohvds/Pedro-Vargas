"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularDano = calcularDano;
function calcularDano(min, max, tipo) {
    var random = Math.random();
    if (tipo === "leve") {
        return random < 0.7 ? min + Math.random() * (max - min) * 0.5 : min + Math.random() * (max - min);
    }
    else if (tipo === "pesado") {
        return min + Math.random() * (max - min);
    }
    else {
        return random < 0.7 ? max - Math.random() * (max - min) * 0.3 : max;
    }
}
