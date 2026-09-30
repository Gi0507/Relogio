import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 1. Import do FormsModule
import { Produto } from '../model/produto';
import { CestaService } from '../../services/cesta.service';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css'
})
export class Vitrine implements OnInit {
  categoriaAtiva: string = 'todos';
  pesquisaAberta: boolean = false;
  termoBusca: string = '';

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
      imagem: 'relogios/g-7900a-4dr_1.png' // Corrigido prefixo assets/
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
      imagem: 'relogios/dw-6900.avif'
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
      imagem: 'relogios/gba-900CB.avif'
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
      imagem: 'relogios/gba-950.avif'
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
      imagem: 'relogio/gmw5000.a'
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
      imagem: 'assets/images/products/product-6.png'
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
      imagem: 'assets/images/products/product-7.png'
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
      imagem: 'assets/images/products/product-1.png'
    }
  ];

  constructor(
    private cestaService: CestaService  ) {}

  ngOnInit(): void {
    
    this.produtoService.listarProdutos().subscribe({
      next: (dados: Produto[]) => this.listaProdutos = dados,
      error: (err: any) => console.error('Erro ao carregar produtos:', err)
    });
    
  }

  get produtosFiltrados(): Produto[] {
    return this.listaProdutos.filter(produto => {
      const bateuCategoria = 
        this.categoriaAtiva === 'todos' || 
        produto.categoria.toLowerCase() === this.categoriaAtiva.toLowerCase();

      const termo = this.termoBusca.trim().toLowerCase();
      const bateuBusca = 
        !termo || 
        produto.nome.toLowerCase().includes(termo) || 
        produto.descritivo.toLowerCase().includes(termo);

      return bateuCategoria && bateuBusca;
    });
  }

  filtrarPor(categoria: string): void {
    this.categoriaAtiva = categoria;
  }

  alternarPesquisa(): void {
    this.pesquisaAberta = !this.pesquisaAberta;
    if (!this.pesquisaAberta) {
      this.termoBusca = '';
    }
  }

  renderizarEstrelas(qtd: number): string {
    return '★'.repeat(qtd) + '☆'.repeat(5 - qtd);
  }

  comprar(relogio: Produto): void {
    this.cestaService.adicionarProduto(relogio);
    alert(`${relogio.nome} foi adicionado à cesta!`);
  }
}