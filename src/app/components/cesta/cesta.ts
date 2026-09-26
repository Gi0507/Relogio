import { Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { ItemCesta } from '../model/item-cesta';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cesta.html',
  styleUrl: './cesta.css'
})
export class Cesta {
  private platformId = inject(PLATFORM_ID);

  mensagem: string = "";
  valorCesta: number = 0;

  itens: ItemCesta[] = [];

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const cestaJson = localStorage.getItem("cesta");
      if (cestaJson != null) {
        this.itens = JSON.parse(cestaJson);
      }
    }
    this.calculaTotal();
  }

  calculaTotal() {
    this.valorCesta = 0;
    for (let obj of this.itens) {
      this.valorCesta += obj.valorTotal;
    }
  }
}