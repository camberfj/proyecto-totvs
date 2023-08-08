import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private clientesEncontradosSource = new BehaviorSubject<any[]>([]);
  clientesEncontrados = this.clientesEncontradosSource.asObservable();

  actualizarClientesEncontrados(clientes: any[]) {
    this.clientesEncontradosSource.next(clientes);
  }

  private clientes: any[] = [
    { nombre: 'Amerian Buenos Aires Park'}
  ];

  buscarClientes(search: string): any[] {
    return this.clientes.filter(cliente => cliente.nombre.toLowerCase().includes(search.toLowerCase()));
  }

  constructor() { }
}
