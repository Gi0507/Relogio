import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
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