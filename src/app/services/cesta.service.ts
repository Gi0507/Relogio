import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ItemCesta } from '../components/model/item-cesta';
import { Produto } from '../components/model/produto';

@Injectable({
  providedIn: 'root'
})
export class CestaService {
  private platformId = inject(PLATFORM_ID);
  private chaveStorage = 'cesta';

  obterItens(): ItemCesta[] {
    if (isPlatformBrowser(this.platformId)) {
      const cestaJson = localStorage.getItem(this.chaveStorage);
      return cestaJson ? JSON.parse(cestaJson) : [];
    }
    return [];
  }

  salvarItens(itens: ItemCesta[]): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.chaveStorage, JSON.stringify(itens));
    }
  }

  // Método que faltava na classe
  adicionarProduto(produto: Produto, quantidade: number = 1): void {
    const itens = this.obterItens();
    const itemExistente = itens.find(i => i.produto?.codigo === produto.codigo);

    if (itemExistente) {
      itemExistente.quantity = (itemExistente.quantity || 0) + quantidade;
      itemExistente.valorTotal = itemExistente.quantity * (produto.valor || 0);
    } else {
      itens.push({
        produto: produto,
        quantity: quantidade,
        valorTotal: quantidade * (produto.valor || 0),
        quantidade: 0,
        precoTotal: undefined,
        cestaservice: undefined
      });
    }

    this.salvarItens(itens);
  }

  alterarQuantidade(codigo: number, delta: number): void {
    const itens = this.obterItens();
    const item = itens.find(i => i.produto?.codigo === codigo);
    if (item) {
      item.quantity = (item.quantity || 1) + delta;
      if (item.quantity <= 0) {
        this.removerItem(codigo);
        return;
      }
      item.valorTotal = item.quantity * (item.produto?.valor || 0);
      this.salvarItens(itens);
    }
  }

  removerItem(codigo: number): void {
    let itens = this.obterItens();
    itens = itens.filter(i => i.produto?.codigo !== codigo);
    this.salvarItens(itens);
  }

  limparCesta(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.chaveStorage);
    }
  }
}