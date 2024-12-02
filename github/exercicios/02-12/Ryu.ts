import { BasePersonagem } from "./BasePersonagens";
import { calcularDano } from "./danoUtils";

export class Ryu extends BasePersonagem {
  constructor() {
    super("Ryu", 100, "Japão", "Karate");
  }

  golpeLeve(): number {
    return calcularDano(5, 15, "leve");
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
