import { Personagem } from "./Personagem";

export function iniciarBatalha(jogador1: Personagem, jogador2: Personagem) {
  console.log(`${jogador1.getNome()} vs ${jogador2.getNome()}`);

  while (jogador1.getVida() > 0 && jogador2.getVida() > 0) {
    console.log(`${jogador1.getNome()} - Vida: ${jogador1.getVida()}`);
    console.log(`${jogador2.getNome()} - Vida: ${jogador2.getVida()}`);

    const golpe1 = prompt("Jogador 1, escolha seu golpe (1: leve, 2: pesado, 3: especial):");
    const dano1 = golpe1 === "1" ? jogador1.golpeLeve() : golpe1 === "2" ? jogador1.golpePesado() : jogador1.golpeEspecial();
    jogador2.setVida(jogador2.getVida() - dano1);
    console.log(`${jogador1.getNome()} causou ${dano1} de dano em ${jogador2.getNome()}.`);

    if (jogador2.getVida() <= 0) break;

    const golpe2 = prompt("Jogador 2, escolha seu golpe (1: leve, 2: pesado, 3: especial):");
    const dano2 = golpe2 === "1" ? jogador2.golpeLeve() : golpe2 === "2" ? jogador2.golpePesado() : jogador2.golpeEspecial();
    jogador1.setVida(jogador1.getVida() - dano2);
    console.log(`${jogador2.getNome()} causou ${dano2} de dano em ${jogador1.getNome()}.`);
  }

  if (jogador1.getVida() > 0) {
    console.log(`${jogador1.getNome()} venceu a batalha!`);
  } else {
    console.log(`${jogador2.getNome()} venceu a batalha!`);
  }
}
