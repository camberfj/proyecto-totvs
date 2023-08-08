import {Component, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { SearchComponent } from '../search/search.component';
import { ClientesService } from '../clientes.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss'],
  standalone: true,
  imports: [MatCardModule, CommonModule, SearchComponent],
})
export class ListaClientesComponent implements OnInit {
  clientes: any[] = [];
  search: any;
  clientesEncontrados: any[] = [];

  constructor(private clientesService: ClientesService){
    this.clientes = [{nombre:'Amerian Buenos Aires Park'}];

  }
  longText = `Info Cliente:`;




  ngOnInit(): void {
    this.clientesService.clientesEncontrados.subscribe(clientes => {
      this.clientesEncontrados = clientes;
    });
  }

  actualizarClientesEncontrados(resultados: any[]) {
    this.clientesEncontrados = resultados;
  }


}

