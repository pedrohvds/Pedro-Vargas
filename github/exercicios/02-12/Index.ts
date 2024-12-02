import { Ryu } from "./ryu";
import { Ken } from "./ken";
import { Blanka } from "./blanka";
import { Zangief } from "./zangief";
import { Honda } from "./honda";
import { Bisao } from "./bisao";
import { Cammy } from "./cammy";
import { DeeJay } from "./deeJay";
import { Personagem } from "./Personagem";

const ask = require("readline-sync")

const personagens: Personagem[] = [
  new Ryu(),
  new Ken(),
  new Blanka(),
  new Zangief(),
  new Honda(),
  new Bisao(),
  new Cammy(),
  new DeeJay(),
];

function escolherPersonagem(jogador: number): Personagem {
  console.log(`\nJogador ${jogador}, escolha seu personagem:`);
  personagens.forEach((personagem, index) => {
    console.log(`${index + 1}. ${personagem.getNome()} - ${personagem.getEstiloLuta()}`);
  });

  const escolha = ask.question("Digite o número do personagem: ") - 1;

  if (escolha < 0 || escolha >= personagens.length) {
    console.log("Escolha inválida! Tente novamente.");
    return escolherPersonagem(jogador);
  }

  return personagens[escolha];
}

function iniciarBatalha(jogador1: Personagem, jogador2: Personagem) {
  console.log(`\n--- Início da Batalha entre ${jogador1.getNome()} e ${jogador2.getNome()} ---`);

  let turno = 1;

  while (jogador1.getVida() > 0 && jogador2.getVida() > 0) {
    const atacante = turno % 2 === 1 ? jogador1 : jogador2;
    const defensor = turno % 2 === 1 ? jogador2 : jogador1;

    console.log(`\nÉ a vez de ${atacante.getNome()}. Escolha seu ataque:`);
    console.log("1. Golpe Leve");
    console.log("2. Golpe Pesado");
    console.log("3. Golpe Especial");

    const escolhaAtaque = Number(ask.question("Digite o numero do ataque: "));
    let dano: number;

    try {
      if (escolhaAtaque === 1) {
        dano = atacante.golpeLeve();
        console.log(`${atacante.getNome()} usa Golpe Leve e causa ${dano} de dano!`);
      } else if (escolhaAtaque === 2) {
        dano = atacante.golpePesado();
        console.log(`${atacante.getNome()} usa Golpe Pesado e causa ${dano} de dano!`);
      } else if (escolhaAtaque === 3) {
        dano = atacante.golpeEspecial();
        console.log(`${atacante.getNome()} usa Golpe Especial e causa ${dano} de dano!`);
      } else {
        console.log("Escolha inválida! Turno perdido.");
        turno++;
        continue;
      }
    } catch (error) {
      console.log(error.message);
      turno++;
      continue;
    }

    defensor.setVida(defensor.getVida() - dano);

    console.log(
      `${defensor.getNome()} agora tem ${Math.max(0, defensor.getVida())} pontos de vida restantes.`
    );

    turno++;
  }

  const vencedor = jogador1.getVida() > 0 ? jogador1 : jogador2;
  console.log(`\n--- ${vencedor.getNome()} é o vencedor! ---`);
}

function main() {
  console.log("=== Bem-vindo ao Street Fighter Battle Simulator ===");

  const jogador1 = escolherPersonagem(1);
  const jogador2 = escolherPersonagem(2);

  iniciarBatalha(jogador1, jogador2);
}

main();






