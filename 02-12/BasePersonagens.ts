import { Personagem } from "./Personagem";

export class BasePersonagem implements Personagem {
  nome: string;
  vida: number;
  nacionalidade: string;
  estiloLuta: string;
  golpeEspecialUsado: boolean = false;

  constructor(nome: string, vida: number, nacionalidade: string, estiloLuta: string) {
    this.nome = nome;
    this.vida = vida;
    this.nacionalidade = nacionalidade;
    this.estiloLuta = estiloLuta;
  }

  getNome(): string {
    return this.nome;
  }

  setNome(nome: string): void {
    this.nome = nome;
  }

  getVida(): number {
    return this.vida;
  }

  setVida(vida: number): void {
    this.vida = vida;
  }

  getNacionalidade(): string {
    return this.nacionalidade;
  }

  setNacionalidade(nacionalidade: string): void {
    this.nacionalidade = nacionalidade;
  }

  getEstiloLuta(): string {
    return this.estiloLuta;
  }

  setEstiloLuta(estilo: string): void {
    this.estiloLuta = estilo;
  }

  golpeLeve(): number {
    throw new Error("Método não implementado.");
  }

  golpePesado(): number {
    throw new Error("Método não implementado.");
  }

  golpeEspecial(): number {
    if (this.golpeEspecialUsado) {
      throw new Error("Golpe especial já foi usado.");
    }
    this.golpeEspecialUsado = true;
    throw new Error("Método não implementado.");
  }
}
