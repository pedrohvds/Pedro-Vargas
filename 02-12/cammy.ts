import { BasePersonagem } from "./BasePersonagens";
import { calcularDano } from "./danoUtils";

export class Cammy extends BasePersonagem {
  constructor() {
    super("Cammy", 100, "Reino Unido", "Delta Force");
  }

  golpeLeve(): number {
    return calcularDano(5, 15, "leve");
  }

  golpePesado(): number {
    return calcularDano(15, 25, "pesado");
  }

  golpeEspecial(): number {
    if (this.golpeEspecialUsado) throw new Error("Golpe especial já foi usado.");
    this.golpeEspecialUsado = true;
    return calcularDano(20, 40, "especial");
  }
}
