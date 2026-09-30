import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Pesquisa } from './components/pesquisa/pesquisa';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, Pesquisa],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isMenuOpen = false;
isPesquisa: any;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  togglePesquisa():void{
    this.isPesquisa=!!this.isPesquisa;
  }
}