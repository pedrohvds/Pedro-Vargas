import { BasePersonagem } from "./BasePersonagens";
import { calcularDano } from "./danoUtils";

export class DeeJay extends BasePersonagem {
  constructor() {
    super("Dee Jay", 100, "Jamaica", "Kickboxing");
  }

  golpeLeve(): number {
    return calcularDano(5, 10, "leve");
  }

  golpePesado(): number {
    return calcularDano(10, 20, "pesado");
  }

  golpeEspecial(): number {
    if (this.golpeEspecialUsado) throw new Error("Golpe especial já foi usado.");
    this.golpeEspecialUsado = true;
    return calcularDano(30, 50, "especial");
  }
}
