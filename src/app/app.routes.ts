import { Routes } from '@angular/router';
import { Vitrine } from './components/vitrine/vitrine';
import { Login } from './components/login/login';

export const routes: Routes = [
  // 1. Redireciona a página inicial (http://localhost:4200/) para a vitrine
  { path: '', redirectTo: 'vitrine', pathMatch: 'full' },
  
  { path: 'vitrine', component: Vitrine },
  { path: 'login', component: Login },
  
  // 2. Opcional: Redireciona qualquer rota inexistente de volta para a vitrine
  { path: '**', redirectTo: 'vitrine' }
];