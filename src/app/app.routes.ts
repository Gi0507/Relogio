import { Routes } from '@angular/router';
import { Vitrine } from './components/vitrine/vitrine';
import { Login } from './components/login/login';
import { Cesta } from './components/cesta/cesta';
import { Cadastro } from './componentss/cadastro/cadastro';

export const routes: Routes = [
  { path: '', component: Vitrine },
  { path: 'login', component: Login },
  { path: 'cesta', component: Cesta },
  { path: 'cadastro', component:Cadastro }
  ];