import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../components/model/cliente';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente.html',
  styleUrl: './cliente.css'
})
export class ClienteComponent implements OnInit {
  cliente: Cliente = {
    nome: '',
    email: '',
    telefone: '',
    morada: '',
    nif: ''
  };

  mensagemSucesso: string = '';

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    // Carrega os dados existentes no localStorage (se houver)
    const clienteGuardado = this.clienteService.obterCliente();
    if (clienteGuardado) {
      this.cliente = { ...clienteGuardado };
    }
  }

  salvar(): void {
    if (!this.cliente.nome || !this.cliente.email) {
      alert('Por favor, preencha pelo menos o Nome e o Email.');
      return;
    }

    this.clienteService.guardarCliente(this.cliente);
    this.mensagemSucesso = 'Dados do cliente guardados com sucesso!';
    
    setTimeout(() => {
      this.mensagemSucesso = '';
    }, 3000);
  }

  limpar(): void {
    this.clienteService.removerCliente();
    this.cliente = {
      nome: '',
      email: '',
      telefone: '',
      morada: '',
      nif: ''
    };
  }
}