import { Produto } from "./Produto";

export class Alimento implements Produto {
    nome: string
    marca: string
    ingredientes: Array<string>
    valorCusto: number
    valorTransporte: number
    
    constructor(nome: string, marca: string) {
        this.nome = nome
        this.marca = marca
        this.valorCusto = 12783
        this.valorTransporte = 14444
    }

    calcularValorTotal(): number {
        return this.valorCusto + this.valorTransporte
    }
}
