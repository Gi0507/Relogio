export interface Cliente {
  id?: number | string;
  nome: string;
  email: string;
  telefone?: string;
  morada?: string;
  nif?: string;
}