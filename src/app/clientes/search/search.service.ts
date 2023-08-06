import { Injectable } from '@angular/core';
import { ClientesModule } from '../clientes.module';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private clientes: ClientesModule[];

  constructor() {
    this.clientes = [];
  }

  buscarClientes() {
    // Lógica para buscar clientes
    console.log("Buscando clientes...");
  }
}
