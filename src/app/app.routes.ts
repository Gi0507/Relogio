import { Routes } from '@angular/router';
import { Vitrine } from './components/vitrine/vitrine';
import { Login } from './components/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'vitrine', pathMatch: 'full' },
  { path: 'vitrine', component: Vitrine },
  { path: 'login', component: Login },
  { path: '**', redirectTo: 'vitrine' },
];