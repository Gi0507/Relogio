import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necessário para o input de busca

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pesquisa.html',
  styleUrl: './pesquisa.css'
})
export class Vitrine {
  pesquisaAberta: boolean = false;
  termoBusca: string = '';

  alternarPesquisa(): void {
    this.pesquisaAberta = !this.pesquisaAberta;
    
    // Opcional: limpa o texto ao fechar
    if (!this.pesquisaAberta) {
      this.termoBusca = '';
    }
  }
}