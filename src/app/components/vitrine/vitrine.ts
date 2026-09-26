import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css'
})
export class Vitrine implements OnInit {
  listaProdutos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.listarProdutos().subscribe({
      next: (dados) => this.listaProdutos = dados,
      error: (err) => console.error('Erro ao carregar produtos do banco local:', err)
    });
  }

  // Retorna os produtos filtrados conforme a aba selecionada
  get produtosFiltrados(): Produto[] {
    if (this.categoriaAtiva === 'todos') {
      return this.listaProdutos;
    }
    return this.listaProdutos.filter(p => p.categoria.toLowerCase() === this.categoriaAtiva);
  }

  // Altera a categoria ativa do filtro
  filtrarPor(categoria: string): void {
    this.categoriaAtiva = categoria;
  }

  // Gera o texto visual de estrelas
  renderizarEstrelas(qtd: number): string {
    return '★'.repeat(qtd) + '☆'.repeat(5 - qtd);
  }
  addcesta(produto: Produto): void {
  }
}