import { Produto } from "./produto";    

export class ItemCesta {
    produto: Produto | undefined
    quantity: number|undefined
    precoTotal: number | undefined
}