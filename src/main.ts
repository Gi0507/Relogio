import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';

bootstrapApplication(App, appConfig) // OBRIGATÓRIO: Passa os providers com o roteador
  .catch((err) => console.error(err));