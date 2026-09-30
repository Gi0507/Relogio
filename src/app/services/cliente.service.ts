import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cliente } from '../components/model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private readonly CHAVE_STORAGE = 'cliente_app_relogios';

  // Subject reativo para emitir alterações do cliente para toda a aplicação
  private clienteSubject = new BehaviorSubject<Cliente | null>(this.obterDoStorage());
  
  // Observable que os componentes podem subscrever
  public cliente$: Observable<Cliente | null> = this.clienteSubject.asObservable();

  constructor() {}

  /**
   * Guarda ou atualiza os dados do cliente no LocalStorage
   */
  guardarCliente(cliente: Cliente): void {
    try {
      const dadosJson = JSON.stringify(cliente);
      localStorage.setItem(this.CHAVE_STORAGE, dadosJson);
      this.clienteSubject.next(cliente); // Notifica os subscritores
    } catch (erro) {
      console.error('Erro ao guardar os dados do cliente no LocalStorage:', erro);
    }
  }

  /**
   * Obtém o cliente atual em memória
   */
  obterCliente(): Cliente | null {
    return this.clienteSubject.value;
  }

  /**
   * Lê os dados guardados diretamente no LocalStorage
   */
  private obterDoStorage(): Cliente | null {
    try {
      const dados = localStorage.getItem(this.CHAVE_STORAGE);
      return dados ? (JSON.parse(dados) as Cliente) : null;
    } catch (erro) {
      console.error('Erro ao ler os dados do cliente no LocalStorage:', erro);
      return null;
    }
  }

  /**
   * Remove os dados do cliente (Logout)
   */
  removerCliente(): void {
    try {
      localStorage.removeItem(this.CHAVE_STORAGE);
      this.clienteSubject.next(null); // Notifica os subscritores que o cliente saiu
    } catch (erro) {
      console.error('Erro ao remover o cliente do LocalStorage:', erro);
    }
  }

  /**
   * Verifica se existe um cliente autenticado/guardado
   */
  estaAutenticado(): boolean {
    return this.obterCliente() !== null;
  }
}