import { Component, PLATFORM_ID, inject, OnInit } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { ItemCesta } from '../model/item-cesta';
import { CestaService } from '../../services/cesta.service';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cesta.html',
  styleUrl: './cesta.css'
})
export class Cesta implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private cestaService = inject(CestaService); // Injeção correta do serviço

  mensagem: string = '';
  valorCesta: number = 0;
  itens: ItemCesta[] = [];

  ngOnInit(): void {
    this.carregarCesta();
  }

  carregarCesta(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.itens = this.cestaService.obterItens();
    }
    this.calculaTotal();
  }

  calculaTotal(): void {
    this.valorCesta = this.itens.reduce((acc, item) => acc + (item.valorTotal || 0), 0);
  }

  aumentar(codigo?: number): void {
    if (codigo === undefined) return;
    this.cestaService.alterarQuantidade(codigo, 1);
    this.carregarCesta();
  }

  diminuir(codigo?: number): void {
    if (codigo === undefined) return;
    this.cestaService.alterarQuantidade(codigo, -1);
    this.carregarCesta();
  }

  remover(codigo?: number): void {
    if (codigo === undefined) return;
    this.cestaService.removerItem(codigo);
    this.carregarCesta();
  }

  limpar(): void {
    this.cestaService.limparCesta();
    this.carregarCesta();
  }
}