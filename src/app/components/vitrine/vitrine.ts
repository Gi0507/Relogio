import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css'
})
export class Vitrine {
  categoriaAtiva: string = 'todos';

  // Catálogo completo de relógios masculinos e femininos
  listaProdutos: Produto[] = [
    // --- MASCULINOS ---
    {
      codigo: 101,
      nome: 'Relógio Chrono Steel Black',
      descritivo: 'Caixa em aço inoxidável e pulseira de metal com cronógrafo funcional.',
      categoria: 'Masculino',
      quantidade: 10,
      valor: 550.00,
      promo: 420.00,
      estrelas: 5,
      imagem: 'images/products/product-1.png'
    },
    {
      codigo: 102,
      nome: 'Relógio Executive Gold Automático',
      descritivo: 'Mecanismo automático aparente com mostrador esqueleto e acabamento dourado.',
      categoria: 'Masculino',
      quantidade: 6,
      valor: 890.00,
      promo: 750.00,
      estrelas: 4,
      imagem: 'images/products/product-2.png'
    },
    {
      codigo: 103,
      nome: 'Relógio Vintage Cognac Leather',
      descritivo: 'Estilo clássico com pulseira em couro legítimo marrom e caixa bronze.',
      categoria: 'Masculino',
      quantidade: 12,
      valor: 460.00,
      promo: 0,
      estrelas: 4,
      imagem: 'images/products/product-3.png'
    },
    {
      codigo: 104,
      nome: 'Relógio Tactical Sport Digital',
      descritivo: 'Resistente à água até 100m, alarme, cronômetro e iluminação noturna.',
      categoria: 'Masculino',
      quantidade: 15,
      valor: 320.00,
      promo: 260.00,
      estrelas: 5,
      imagem: 'images/products/product-4.png'
    },

    // --- FEMININOS ---
    {
      codigo: 201,
      nome: 'Relógio Elegance Rose Gold',
      descritivo: 'Design ultrafino com mostrador de madrepérola e detalhes em cristal.',
      categoria: 'Feminino',
      quantidade: 8,
      valor: 520.00,
      promo: 410.00,
      estrelas: 5,
      imagem: 'images/products/product-5.png'
    },
    {
      codigo: 202,
      nome: 'Relógio Charm Silver Diamond',
      descritivo: 'Pulseira estilo bracelete prateada com aplicação de zircônias.',
      categoria: 'Feminino',
      quantidade: 5,
      valor: 680.00,
      promo: 590.00,
      estrelas: 4,
      imagem: 'images/products/product-6.png'
    },
    {
      codigo: 203,
      nome: 'Relógio Minimalist Blush Leather',
      descritivo: 'Mostrador rosé minimalista com pulseira de couro rosa quartzo.',
      categoria: 'Feminino',
      quantidade: 14,
      valor: 350.00,
      promo: 0,
      estrelas: 4,
      imagem: 'images/products/product-7.png'
    },
    {
      codigo: 204,
      nome: 'Relógio Mesh Gold Deluxe',
      descritivo: 'Pulseira em malha de aço ajustável com banho a ouro 18k.',
      categoria: 'Feminino',
      quantidade: 7,
      valor: 610.00,
      promo: 490.00,
      estrelas: 5,
      imagem: 'images/products/product-1.png'
    }
  ];
relogio: any;

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
}