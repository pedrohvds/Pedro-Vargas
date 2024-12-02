const guerreiro = new Guerreiro("Conan", 100, 30, 20);
const mago = new Mago("Gandalf", 80, 40, 10);

console.log("=== INÍCIO DO COMBATE ===");

while (guerreiro.vida > 0 && mago.vida > 0) {
    guerreiro.atacar(mago);
    if (mago.vida <= 0) {
        console.log(`${mago.nome} foi derrotado! ${guerreiro.nome} venceu!`);
        break;
    }

    mago.atacar(guerreiro);
    if (guerreiro.vida <= 0) {
        console.log(`${guerreiro.nome} foi derrotado! ${mago.nome} venceu!`);
        break;
    }
}

console.log("=== FIM DO COMBATE ===");
