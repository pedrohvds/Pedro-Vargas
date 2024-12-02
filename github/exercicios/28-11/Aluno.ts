class Aluno {
    private nome: string
    private idade: number
    private nacionalidade: string
    private casa: string | null
    private classeMagica: string

    constructor(nome: string, idade: number, nacionalidade: string, classeMagica: string) {
        this.nome = nome;
        this.idade = idade;
        this.nacionalidade = nacionalidade;
        this.classeMagica = classeMagica;
    }

    public getNome(): string {
        return this.nome
    }

    public setNome(nomeNovo: string) {
        this.nome = nomeNovo
    }

    public getIdade(): number {
        return this.idade
    }

    public setIdade(idadeNova: number) {
        this.idade = idadeNova
    }

    public getNacionalidade(): string {
        return this.nacionalidade
    }

    public setNacionalidade(nacionalidadeNova: string) {
        this.nacionalidade = nacionalidadeNova
    }

    public getCasa(): string | null {
        return this.casa
    }

    public setCasa(casaNova: string | null) {
        this.casa = casaNova
    }

    public getClasseMagica(): string {
        return this.classeMagica
    }

    public setClasseMagica(classeMagicaNova: string) {
        this.classeMagica = classeMagicaNova
    }

    sortearCasa(): void {
        const casas = ["Grifinória", "Sonserina", "Lufa-Lufa", "Corvinal"];
        this.casa = casas[Math.floor(Math.random() * casas.length)];
    }

    exibirInformacoes(): string {
        return `
Nome: ${this.nome}
Idade: ${this.idade}
Nacionalidade: ${this.nacionalidade}
Casa: ${this.casa ?? "Não sorteada"}
Classe Mágica: ${this.classeMagica}
`;
    }
}

export { Aluno };