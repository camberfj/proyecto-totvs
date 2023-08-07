import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private clientes: any[] = [
    { nombre: 'Amerian Buenos Aires Park'}
  ];

  buscarClientes(search: string): any[] {
    return this.clientes.filter(cliente => cliente.nombre.toLowerCase().includes(search.toLowerCase()));
  }

  constructor() { }
}
