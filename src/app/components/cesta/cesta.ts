import { Component, PLATFORM_ID, inject } from '@angular/common';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
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
  private cestaService = inject(CestaService); // Injeção de dependência corrigida

  mensagem: string = "";
  valorCesta: number = 0;
  itens: ItemCesta[] = [];

  ngOnInit(): void {
    this.carregarCesta();
  }

  carregarCesta(): void {
    if (isPlatformBrowser(this.platformId)) {
      const cestaJson = localStorage.getItem("cesta");
      if (cestaJson) {
        this.itens = JSON.parse(cestaJson);
      }
    }
    this.calculaTotal();
  }

  calculaTotal(): void {
    this.valorCesta = this.itens.reduce((total, item) => total + (item.valorTotal || 0), 0);
  }

  aumentar(codigo?: number): void {
    if (!codigo) return;
    this.cestaService.alterarQuantidade(codigo, 1);
    this.carregarCesta();
  }

  diminuir(codigo?: number): void {
    if (!codigo) return;
    this.cestaService.alterarQuantidade(codigo, -1);
    this.carregarCesta();
  }

  remover(codigo?: number): void {
    if (codigo === undefined) return;
    this.cestaService.removerItem(codigo);
    this.itens = this.itens.filter(item => item.produto?.codigo !== codigo);
    this.calculaTotal();
  }

  limpar(): void {
    this.cestaService.limparCesta();
    this.itens = [];
    this.calculaTotal();
  }
}