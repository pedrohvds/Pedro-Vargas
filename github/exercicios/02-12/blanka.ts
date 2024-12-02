import { BasePersonagem } from "./BasePersonagens";
import { calcularDano } from "./danoUtils";

export class Blanka extends BasePersonagem {
  constructor() {
    super("Blanka", 100, "Brasil", "Eletrochoque");
  }

  golpeLeve(): number {
    return calcularDano(5, 10, "leve");
  }

  golpePesado(): number {
    return calcularDano(10, 25, "pesado");
  }

  golpeEspecial(): number {
    if (this.golpeEspecialUsado) throw new Error("Golpe especial já foi usado.");
    this.golpeEspecialUsado = true;
    return calcularDano(25, 40, "especial");
  }
}
