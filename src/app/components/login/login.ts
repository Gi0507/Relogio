import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  // Alterne para false quando quiser ocultar a mensagem de erro
  exibirErro: boolean = true; 

  fazerLogin(event: Event): void {
    event.preventDefault();
    // Adicione aqui a lógica de autenticação no futuro
  }
}