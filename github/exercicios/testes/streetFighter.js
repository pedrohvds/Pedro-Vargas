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
// Função de cálculo de dano aleatório
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
// Classe Base para Personagens
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
// Classes dos Personagens Específicos
var Ryu = /** @class */ (function (_super) {
    __extends(Ryu, _super);
    function Ryu() {
        return _super.call(this, "Ryu", 100, "Japão", "Karate") || this;
    }
    Ryu.prototype.golpeLeve = function () {
        return calcularDano(5, 15, "leve");
    };
    Ryu.prototype.golpePesado = function () {
        return calcularDano(15, 30, "pesado");
    };
    Ryu.prototype.golpeEspecial = function () {
        if (this.golpeEspecialUsado)
            throw new Error("Golpe especial já foi usado.");
        this.golpeEspecialUsado = true;
        return calcularDano(30, 50, "especial");
    };
    return Ryu;
}(BasePersonagem));
// Classes semelhantes para outros personagens (Ken, Blanka, etc.)
// Por simplicidade, vou mostrar apenas um exemplo adicional.
var Ken = /** @class */ (function (_super) {
    __extends(Ken, _super);
    function Ken() {
        return _super.call(this, "Ken", 100, "EUA", "Karate") || this;
    }
    Ken.prototype.golpeLeve = function () {
        return calcularDano(5, 15, "leve");
    };
    Ken.prototype.golpePesado = function () {
        return calcularDano(15, 30, "pesado");
    };
    Ken.prototype.golpeEspecial = function () {
        if (this.golpeEspecialUsado)
            throw new Error("Golpe especial já foi usado.");
        this.golpeEspecialUsado = true;
        return calcularDano(25, 45, "especial");
    };
    return Ken;
}(BasePersonagem));
// Função Principal - Simulação de Batalha
function iniciarBatalha() {
    var personagens = [new Ryu(), new Ken()]; // Adicione outros personagens aqui.
    console.log("Escolha seu personagem:");
    personagens.forEach(function (personagem, index) {
        console.log("".concat(index + 1, ". ").concat(personagem.getNome()));
    });
    var jogador1Index = parseInt(prompt("Jogador 1, escolha seu personagem:") || "1") - 1;
    var jogador2Index = parseInt(prompt("Jogador 2, escolha seu personagem:") || "2") - 1;
    var jogador1 = personagens[jogador1Index];
    var jogador2 = personagens[jogador2Index];
    console.log("".concat(jogador1.getNome(), " vs ").concat(jogador2.getNome()));
    while (jogador1.getVida() > 0 && jogador2.getVida() > 0) {
        console.log("".concat(jogador1.getNome(), " - Vida: ").concat(jogador1.getVida()));
        console.log("".concat(jogador2.getNome(), " - Vida: ").concat(jogador2.getVida()));
        var golpe1 = prompt("Jogador 1, escolha seu golpe (1: leve, 2: pesado, 3: especial):");
        var dano1 = golpe1 === "1" ? jogador1.golpeLeve() : golpe1 === "2" ? jogador1.golpePesado() : jogador1.golpeEspecial();
        jogador2.setVida(jogador2.getVida() - dano1);
        console.log("".concat(jogador1.getNome(), " causou ").concat(dano1, " de dano em ").concat(jogador2.getNome(), "."));
        if (jogador2.getVida() <= 0)
            break;
        var golpe2 = prompt("Jogador 2, escolha seu golpe (1: leve, 2: pesado, 3: especial):");
        var dano2 = golpe2 === "1" ? jogador2.golpeLeve() : golpe2 === "2" ? jogador2.golpePesado() : jogador2.golpeEspecial();
        jogador1.setVida(jogador1.getVida() - dano2);
        console.log("".concat(jogador2.getNome(), " causou ").concat(dano2, " de dano em ").concat(jogador1.getNome(), "."));
    }
    if (jogador1.getVida() > 0) {
        console.log("".concat(jogador1.getNome(), " venceu a batalha!"));
    }
    else {
        console.log("".concat(jogador2.getNome(), " venceu a batalha!"));
    }
}
// Inicia o jogo
iniciarBatalha();
