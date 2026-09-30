import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../components/model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  listarProdutos() {
    throw new Error('Method not implemented.');
  }
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/produtos';

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  buscarPorTermo(termo: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}?q=${encodeURIComponent(termo)}`);
  }
}