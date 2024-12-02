class Mago implements Personagem {
    nome: string;
    vida: number;
    forca: number;
    defesa: number;

    constructor(nome: string, vida: number, forca: number, defesa: number) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.defesa = defesa;
    }

    atacar(inimigo: Personagem): void {
        const dano = Math.max(0, this.forca - inimigo.defesa); // Dano mínimo de 0
        console.log(`${this.nome} atacou ${inimigo.nome} causando ${dano} de dano.`);
        inimigo.perderVida(dano);
    }

    perderVida(dano: number): void {
        this.vida -= dano;
        console.log(`${this.nome} perdeu ${dano} de vida. Vida atual: ${this.vida}`);
    }
}
