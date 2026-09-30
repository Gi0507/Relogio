import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    // --- OMINITRIX ---
    {
      codigo: 101,
      nome: 'Omnitrix Special Edition',
      descritivo: 'Edição especial do clássico relógio alienígena com iluminação LED.',
      categoria: 'Especial',
      quantidade: 5,
      valor: 450.00,
      promo: 380.00,
      estrelas: 5,
      imagem: 'relogios/ominitrix/ominitrix.webp'
    },
    {
      codigo: 102,
      nome: 'Omnitrix FX Custom',
      descritivo: 'Modelo customizado com efeitos sonoros e seletores interativos.',
      categoria: 'Especial',
      quantidade: 3,
      valor: 520.00,
      promo: 450.00,
      estrelas: 5,
      imagem: 'relogios/ominitrix/ominitrix2.webp'
    },

    // --- CASIO / G-SHOCK ---
    {
      codigo: 103,
      nome: 'Relógio G-Shock DW-6900',
      descritivo: 'Modelo digital de alta resistência, à prova d\'água até 200m com luz de fundo EL.',
      categoria: 'Masculino',
      quantidade: 10,
      valor: 650.00,
      promo: 520.00,
      estrelas: 5,
      imagem: 'relogios/dw-6900.avif'
    },
    {
      codigo: 104,
      nome: 'Relógio G-Shock G-7900A Red',
      descritivo: 'Cronômetro duplo, gráfico de marés e fases da lua para desportos radicais.',
      categoria: 'Masculino',
      quantidade: 8,
      valor: 580.00,
      promo: 490.00,
      estrelas: 4,
      imagem: 'relogios/g-7900a-4dr_1.png'
    },
    {
      codigo: 105,
      nome: 'Relógio G-Shock GBA-900CB',
      descritivo: 'Conectividade Bluetooth, contador de passos e treino integrado na aplicação.',
      categoria: 'Masculino',
      quantidade: 12,
      valor: 890.00,
      promo: 0,
      estrelas: 4,
      imagem: 'relogios/gba-900CB.avif'
    },
    {
      codigo: 106,
      nome: 'Relógio G-Shock GBA-950',
      descritivo: 'Design desportivo com sensor de aceleração e rastreamento de atividades.',
      categoria: 'Masculino',
      quantidade: 6,
      valor: 920.00,
      promo: 790.00,
      estrelas: 5,
      imagem: 'relogios/gba-950.avif'
    },
    {
      codigo: 107,
      nome: 'Relógio G-Shock Full Metal GMW-B5000',
      descritivo: 'Caixa e bracelete totalmente em aço inoxidável com energia solar e ajuste via rádio.',
      categoria: 'Masculino',
      quantidade: 4,
      valor: 2400.00,
      promo: 2100.00,
      estrelas: 5,
      imagem: 'relogios/gmw5000.avif'
    },

    // --- ROLEX ---
    {
      codigo: 108,
      nome: 'Relógio Rolex Submariner Classic',
      descritivo: 'Ícone dos relógios de mergulho, em aço Oystersteel com bisel cerâmico Cerachrom.',
      categoria: 'Luxo',
      quantidade: 2,
      valor: 15000.00,
      promo: 0,
      estrelas: 5,
      imagem: 'relogios/rolex1.webp'
    },
    {
      codigo: 109,
      nome: 'Relógio Rolex Datejust Premium',
      descritivo: 'Mostrador refinado, movimento automático mecânico e bracelete Jubileu.',
      categoria: 'Luxo',
      quantidade: 3,
      valor: 18500.00,
      promo: 16900.00,
      estrelas: 5,
      imagem: 'relogios/rolex3.webp'
    },
    {
      codigo: 110,
      nome: 'Relógio Rolex Oyster Perpetual',
      descritivo: 'Estilo intemporal em aço inoxidável com mostrador elegante e alta precisão.',
      categoria: 'Luxo',
      quantidade: 5,
      valor: 12800.00,
      promo: 0,
      estrelas: 5,
      imagem: 'relogios/rolex4.webp'
    },
    {
      codigo: 111,
      nome: 'Relógio Rolex Cosmograph Daytona Gold',
      descritivo: 'Cronógrafo lendário com acabamento em ouro e escala taquimétrica gravada.',
      categoria: 'Luxo',
      quantidade: 1,
      valor: 32000.00,
      promo: 29500.00,
      estrelas: 5,
      imagem: 'relogios/rolex5.webp'
    }
  ];

  constructor(
    private cestaService: CestaService,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    const retornoProdutos = this.produtoService.listarProdutos() as any;

    if (retornoProdutos && typeof retornoProdutos.subscribe === 'function') {
      retornoProdutos.subscribe({
        next: (dados: Produto[]) => {
          if (dados && dados.length > 0) {
            this.listaProdutos = dados;
          }
        },
        error: (err: any) => console.error('Erro ao carregar produtos do serviço:', err)
      });
      return;
    }

    if (Array.isArray(retornoProdutos) && retornoProdutos.length > 0) {
      this.listaProdutos = retornoProdutos;
    }
  }

  // Lista base filtrada por categoria e por termo de pesquisa
  get produtosFiltrados(): Produto[] {
    const termo = (this.termoBusca || '').trim().toLowerCase();
    const catAtiva = (this.categoriaAtiva || 'todos').toLowerCase();

    return this.listaProdutos.filter(produto => {
      const catProduto = (produto.categoria || '').toLowerCase();
      const bateuCategoria = catAtiva === 'todos' || catProduto === catAtiva;

      if (!termo) {
        return bateuCategoria;
      }

      const nome = (produto.nome || '').toLowerCase();
      const descritivo = (produto.descritivo || '').toLowerCase();
      const codigo = produto.codigo ? produto.codigo.toString() : '';

      const bateuBusca =
        nome.includes(termo) ||
        descritivo.includes(termo) ||
        codigo.includes(termo);

      return bateuCategoria && bateuBusca;
    });
  }

  alternarPesquisa(): void {
    this.pesquisaAberta = !this.pesquisaAberta;
    if (!this.pesquisaAberta) {
      this.limparPesquisa();
    }
  }

  limparPesquisa(): void {
    this.termoBusca = '';
  }

  // Produtos em Destaque: Apenas itens em promoção (promo > 0)
  get produtosDestaque(): Produto[] {
    return this.produtosFiltrados.filter(produto => produto.promo > 0);
  }

  // Produtos Selecionados: Apenas itens fora de destaque (promo === 0) para não repetir
  get produtosSelecionados(): Produto[] {
    return this.produtosFiltrados.filter(produto => produto.promo === 0);
  }

  filtrarPor(categoria: string): void {
    this.categoriaAtiva = categoria;
  }

  renderizarEstrelas(qtd: number): string {
    return '★'.repeat(qtd) + '☆'.repeat(5 - qtd);
  }

  comprar(relogio: Produto): void {
    this.cestaService.adicionarProduto(relogio);
    alert(`${relogio.nome} foi adicionado à cesta!`);
  }
}