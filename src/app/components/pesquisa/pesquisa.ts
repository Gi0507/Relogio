import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisa',
  standalone: true,
  imports: [CommonModule, FormsModule], // FormsModule necessário para [(ngModel)]
  templateUrl: './pesquisa.html',
  styleUrl: './pesquisa.css'
})
export class Pesquisa {
  termo: string = '';
  private router = inject(Router);

  buscar(): void {
    if (this.termo.trim()) {
      this.router.navigate(['/pesquisa'], { queryParams: { q: this.termo } });
    }
  }
}