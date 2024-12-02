interface Personagem {
    nome: string;
    vida: number;
    forca: number;
    defesa: number;

    atacar(inimigo: Personagem): void;
    perderVida(dano: number): void;
}
