import { Injectable } from '@angular/core';
import { Produto } from '../components/model/produto';
import { ItemCesta } from '../components/model/item-cesta';

@Injectable({
  providedIn: 'root'
})
export class CestaService {
  private itens: ItemCesta[] = [];

  constructor() {

    // Carrega os itens salvos no navegador ao abrir o site
    const dadosSalvos = localStorage.getItem('cesta');
    if (dadosSalvos) {
      this.itens = JSON.parse(dadosSalvos);
    }
  }

  // --- AQUI ESTÁ A FUNÇÃO ADICIONAR PRODUTO ---
  adicionarProduto(produto: Produto): void {
    // Verifica se o relógio já está na cesta
    const itemExistente = this.itens.find(item => item.produto.codigo === produto.codigo);

    if (itemExistente) {
      // Se já existir, aumenta apenas a quantidade
      itemExistente.quantidade++;
    } else {
      // Se não existir, adiciona como um novo item
      this.itens.push({ produto, quantidade: 1 });
    }

    // Salva a lista atualizada no localStorage
    localStorage.setItem('cesta', JSON.stringify(this.itens));
  }

  // Retorna os produtos que estão na cesta
  obterItens(): ItemCesta[] {
    return this.itens;
  }
}