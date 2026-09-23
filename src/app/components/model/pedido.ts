import { Cliente } from "./cliente";
import { ItemCesta } from "./item-cesta";

export class Pedido {
    cliente: Cliente | undefined;
    itens: ItemCesta[] = [];
    data: string = "";
    valorTotal: number | undefined;
}
