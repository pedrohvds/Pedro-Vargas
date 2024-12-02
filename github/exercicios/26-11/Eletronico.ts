import { Produto } from "./Produto";

export class Eletronico implements Produto {
    cor: string
    marca: string
    voltagem: number
    valorCusto: number
    valorTransporte: number

    constructor(cor: string, marca: string, voltagem: number, valorCusto: number, valorTransporte: number) {
        this.cor = cor
        this.marca = marca
        this.voltagem = voltagem
        this.valorCusto = valorCusto
        this.valorTransporte = valorTransporte
    }

    calcularValorTotal(): number {
        return this.valorCusto + this.valorTransporte
    }
}
