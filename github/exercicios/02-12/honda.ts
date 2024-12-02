import { BasePersonagem } from "./BasePersonagens";
import { calcularDano } from "./danoUtils";

export class Honda extends BasePersonagem {
  constructor() {
    super("Honda", 100, "Japão", "Sumo");
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
    return calcularDano(20, 40, "especial");
  }
}
