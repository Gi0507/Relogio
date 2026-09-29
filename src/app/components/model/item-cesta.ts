import { Produto } from "./produto";    

export class ItemCesta {

    produto: Produto = new Produto();
    quantidade: number = 1;
    quantity: number|undefined
    precoTotal: number | undefined
    valorTotal: number;
cestaservice: any;

    constructor(produto: Produto) {
        this.produto = produto;
        this.quantity = 1;
        this.precoTotal = produto.promo > 0 ? produto.promo * this.quantity : produto.valor * this.quantity;
        this.valorTotal = this.precoTotal;
        }
    }