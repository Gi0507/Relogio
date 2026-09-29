import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../components/model/produto'; // Aponta para a pasta onde está a sua classe Produto

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  // Endereço onde o json-server roda a lista de produtos
  private API_URL = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) {}

  listarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.API_URL);
    
  }
}