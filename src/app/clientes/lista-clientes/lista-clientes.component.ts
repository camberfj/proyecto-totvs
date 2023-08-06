import {Component, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { SearchComponent } from '../search/search.component';
import { ListaClientesService } from './listaclientes.service';

/**
 * @title Card with media size
 */
@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss'],
  standalone: true,
  imports: [MatCardModule, SearchComponent],
})
export class ListaClientesComponent implements OnInit {
  listaClientes: any[] = [];


  constructor(private listaClientesService: ListaClientesService){}
  longText = `Info Cliente:`;

  obtenerInformacion() {
    const clientes = [{ nombre: 'Amerian Buenos Aires Park'}];
    this.listaClientesService.agregarClientes(clientes);
  }



  ngOnInit(): void {

  }


}

