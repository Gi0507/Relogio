import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Importa o array de rotas

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes) // <-- OBRIGATÓRIO para ativar o roteamento
  ]
};