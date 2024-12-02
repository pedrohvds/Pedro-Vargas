import { Produto } from "./Produto";

export class Livro implements Produto {
    capa: String
    autor: String
    titulo: String
    valorCusto: number
    comissaoAutor: number

    constructor(autor: string, titulo: string) {
        
        this.autor = autor
        this.titulo = titulo
        this.valorCusto = 15
        this.comissaoAutor = 5
    }

    calcularValorTotal(): number {
        return this.valorCusto + this.comissaoAutor
    }
}
