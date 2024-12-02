"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ryu_1 = require("./ryu");
var ken_1 = require("./ken");
var blanka_1 = require("./blanka");
var zangief_1 = require("./zangief");
var honda_1 = require("./honda");
var bisao_1 = require("./bisao");
var cammy_1 = require("./cammy");
var deeJay_1 = require("./deeJay");
var ask = require("readline-sync");
var personagens = [
    new ryu_1.Ryu(),
    new ken_1.Ken(),
    new blanka_1.Blanka(),
    new zangief_1.Zangief(),
    new honda_1.Honda(),
    new bisao_1.Bisao(),
    new cammy_1.Cammy(),
    new deeJay_1.DeeJay(),
];
function escolherPersonagem(jogador) {
    console.log("\nJogador ".concat(jogador, ", escolha seu personagem:"));
    personagens.forEach(function (personagem, index) {
        console.log("".concat(index + 1, ". ").concat(personagem.getNome(), " - ").concat(personagem.getEstiloLuta()));
    });
    var escolha = ask.question("Digite o número do personagem: ") - 1;
    if (escolha < 0 || escolha >= personagens.length) {
        console.log("Escolha inválida! Tente novamente.");
        return escolherPersonagem(jogador);
    }
    return personagens[escolha];
}
function iniciarBatalha(jogador1, jogador2) {
    console.log("\n--- In\u00EDcio da Batalha entre ".concat(jogador1.getNome(), " e ").concat(jogador2.getNome(), " ---"));
    var turno = 1;
    while (jogador1.getVida() > 0 && jogador2.getVida() > 0) {
        var atacante = turno % 2 === 1 ? jogador1 : jogador2;
        var defensor = turno % 2 === 1 ? jogador2 : jogador1;
        console.log("\n\u00C9 a vez de ".concat(atacante.getNome(), ". Escolha seu ataque:"));
        console.log("1. Golpe Leve");
        console.log("2. Golpe Pesado");
        console.log("3. Golpe Especial");
        var escolhaAtaque = Number(ask.question("Digite o numero do ataque: "));
        var dano = void 0;
        try {
            if (escolhaAtaque === 1) {
                dano = atacante.golpeLeve();
                console.log("".concat(atacante.getNome(), " usa Golpe Leve e causa ").concat(dano, " de dano!"));
            }
            else if (escolhaAtaque === 2) {
                dano = atacante.golpePesado();
                console.log("".concat(atacante.getNome(), " usa Golpe Pesado e causa ").concat(dano, " de dano!"));
            }
            else if (escolhaAtaque === 3) {
                dano = atacante.golpeEspecial();
                console.log("".concat(atacante.getNome(), " usa Golpe Especial e causa ").concat(dano, " de dano!"));
            }
            else {
                console.log("Escolha inválida! Turno perdido.");
                turno++;
                continue;
            }
        }
        catch (error) {
            console.log(error.message);
            turno++;
            continue;
        }
        defensor.setVida(defensor.getVida() - dano);
        console.log("".concat(defensor.getNome(), " agora tem ").concat(Math.max(0, defensor.getVida()), " pontos de vida restantes."));
        turno++;
    }
    var vencedor = jogador1.getVida() > 0 ? jogador1 : jogador2;
    console.log("\n--- ".concat(vencedor.getNome(), " \u00E9 o vencedor! ---"));
}
function main() {
    console.log("=== Bem-vindo ao Street Fighter Battle Simulator ===");
    var jogador1 = escolherPersonagem(1);
    var jogador2 = escolherPersonagem(2);
    iniciarBatalha(jogador1, jogador2);
}
main();
