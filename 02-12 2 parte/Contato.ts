class Contato {
    private nome: string;
    private telefone: string;
    private email: string;

    constructor(nome: string, telefone: string, email: string) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }


    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    getTelefone(): string {
        return this.telefone;
    }

    setTelefone(telefone: string): void {
        this.telefone = telefone;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }


    editarContato(nome: string, telefone: string, email: string): void {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }

    mostrarContato(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Telefone: ${this.telefone}`);
        console.log(`Email: ${this.email}`);
    }
}

export { Contato };
