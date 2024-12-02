// Interface Personagem
interface Personagem {
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
  
  // Função de cálculo de dano aleatório
  function calcularDano(min: number, max: number, tipo: "leve" | "pesado" | "especial"): number {
    const random = Math.random();
    if (tipo === "leve") {
      return random < 0.7 ? min + Math.random() * (max - min) * 0.5 : min + Math.random() * (max - min);
    } else if (tipo === "pesado") {
      return min + Math.random() * (max - min);
    } else {
      return random < 0.7 ? max - Math.random() * (max - min) * 0.3 : max;
    }
  }
  
  // Classe Base para Personagens
  class BasePersonagem implements Personagem {
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
  
  // Classes dos Personagens Específicos
  class Ryu extends BasePersonagem {
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
  
  // Classes semelhantes para outros personagens (Ken, Blanka, etc.)
  // Por simplicidade, vou mostrar apenas um exemplo adicional.
  
  class Ken extends BasePersonagem {
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
  
  // Função Principal - Simulação de Batalha
  function iniciarBatalha() {
    const personagens = [new Ryu(), new Ken()]; // Adicione outros personagens aqui.
    
    console.log("Escolha seu personagem:");
    personagens.forEach((personagem, index) => {
      console.log(`${index + 1}. ${personagem.getNome()}`);
    });
  
    const jogador1Index = parseInt(prompt("Jogador 1, escolha seu personagem:") || "1") - 1;
    const jogador2Index = parseInt(prompt("Jogador 2, escolha seu personagem:") || "2") - 1;
  
    const jogador1 = personagens[jogador1Index];
    const jogador2 = personagens[jogador2Index];
  
    console.log(`${jogador1.getNome()} vs ${jogador2.getNome()}`);
    while (jogador1.getVida() > 0 && jogador2.getVida() > 0) {
      console.log(`${jogador1.getNome()} - Vida: ${jogador1.getVida()}`);
      console.log(`${jogador2.getNome()} - Vida: ${jogador2.getVida()}`);
      
      const golpe1 = prompt("Jogador 1, escolha seu golpe (1: leve, 2: pesado, 3: especial):");
      const dano1 = golpe1 === "1" ? jogador1.golpeLeve() : golpe1 === "2" ? jogador1.golpePesado() : jogador1.golpeEspecial();
      jogador2.setVida(jogador2.getVida() - dano1);
      console.log(`${jogador1.getNome()} causou ${dano1} de dano em ${jogador2.getNome()}.`);
      
      if (jogador2.getVida() <= 0) break;
  
      const golpe2 = prompt("Jogador 2, escolha seu golpe (1: leve, 2: pesado, 3: especial):");
      const dano2 = golpe2 === "1" ? jogador2.golpeLeve() : golpe2 === "2" ? jogador2.golpePesado() : jogador2.golpeEspecial();
      jogador1.setVida(jogador1.getVida() - dano2);
      console.log(`${jogador2.getNome()} causou ${dano2} de dano em ${jogador1.getNome()}.`);
    }
  
    if (jogador1.getVida() > 0) {
      console.log(`${jogador1.getNome()} venceu a batalha!`);
    } else {
      console.log(`${jogador2.getNome()} venceu a batalha!`);
    }
  }
  
  // Inicia o jogo
  iniciarBatalha();
  