import { Routes } from '@angular/router';
import { Vitrine } from './vitrine/vitrine';
import { Login } from './login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'vitrine' },
  { path: 'vitrine', component: Vitrine },
  { path: 'login', component: Login },
  { path: '**', redirectTo: 'vitrine' },
];