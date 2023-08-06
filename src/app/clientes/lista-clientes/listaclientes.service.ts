import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaclientesService {
  private listaClientes: any[] = [];

  agregarClientes(clientes: any[]) {
    this.listaClientes = clientes;
  }

  obtenerClientes() {
    return this.listaClientes;
  }

  constructor() { }
}
