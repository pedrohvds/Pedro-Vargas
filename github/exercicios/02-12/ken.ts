import { BasePersonagem } from "./BasePersonagens";
import { calcularDano } from "./danoUtils";

export class Ken extends BasePersonagem {
  constructor() {
    super("Ken", 100, "EUA", "Karate");
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
    return calcularDano(25, 45, "especial");
  }
}
