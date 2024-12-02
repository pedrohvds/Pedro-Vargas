export interface Personagem {
  nome: string;
  vida: number;
  nacionalidade: string;
  estiloLuta: string;

  getNome(): string;
  setNome(nome: string): void;
  getVida(): number;
  setVida(vida: number): void;
  getNacionalidade(): string;
  setNacionalidade(nacionalidade: string): void;
  getEstiloLuta(): string;
  setEstiloLuta(estilo: string): void;

  golpeLeve(): number;
  golpePesado(): number;
  golpeEspecial(): number;
}
