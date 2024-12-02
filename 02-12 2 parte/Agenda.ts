import { Contato } from './Contato';

class Agenda {
    private contatos: Contato[] = [];


    adicionarContato(contato: Contato): void {
        this.contatos.push(contato);
    }


    removerContato(nome: string): void {
        const index = this.contatos.findIndex(contato => contato.getNome() === nome);
        if (index !== -1) {
            this.contatos.splice(index, 1);
            console.log(`Contato ${nome} removido.`);
        } else {
            console.log(`Contato ${nome} não encontrado.`);
        }
    }


    listarContatos(): void {
        if (this.contatos.length === 0) {
            console.log("Nenhum contato cadastrado.");
        } else {
            this.contatos.forEach(contato => contato.mostrarContato());
        }
    }


    buscarContato(nome: string): void {
        const contato = this.contatos.find(contato => contato.getNome() === nome);
        if (contato) {
            contato.mostrarContato();
        } else {
            console.log(`Contato ${nome} não encontrado.`);
        }
    }


    editarContato(nome: string, novoContato: Contato): void {
        const index = this.contatos.findIndex(contato => contato.getNome() === nome);
        if (index !== -1) {
            this.contatos[index] = novoContato;
            console.log(`Contato ${nome} atualizado.`);
        } else {
            console.log(`Contato ${nome} não encontrado.`);
        }
    }
}

export { Agenda };
