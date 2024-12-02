import { BasePersonagem } from "./BasePersonagens";
import { calcularDano } from "./danoUtils";

export class Bisao extends BasePersonagem {
  constructor() {
    super("Bisão", 100, "Desconhecido", "Psycho Power");
  }

  golpeLeve(): number {
    return calcularDano(10, 20, "leve");
  }

  golpePesado(): number {
    return calcularDano(15, 30, "pesado");
  }

  golpeEspecial(): number {
    if (this.golpeEspecialUsado) throw new Error("Golpe especial já foi usado.");
    this.golpeEspecialUsado = true;
    return calcularDano(30, 50, "especial");
  }
}
