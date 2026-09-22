import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Vitrine } from './components/vitrine/vitrine';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,Vitrine],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}