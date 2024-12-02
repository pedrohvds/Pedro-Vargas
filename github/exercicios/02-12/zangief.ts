import { BasePersonagem } from "./BasePersonagens";
import { calcularDano } from "./danoUtils";

export class Zangief extends BasePersonagem {
  constructor() {
    super("Zangief", 100, "Rússia", "Luta Livre");
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
    return calcularDano(35, 50, "especial");
  }
}
