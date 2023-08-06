import {Component, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { SearchComponent } from '../search/search.component';
import { ListaclientesService } from './listaclientes.service';

/**
 * @title Card with media size
 */
@Component({
  selector: 'card-media-size-example',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss'],
  standalone: true,
  imports: [MatCardModule, SearchComponent],
})
export class ListaClientesComponent implements OnInit {
  listaClientes: any[] = [];

  constructor(private listaClientesService: ListaclientesService){}
  longText = `Info Cliente:`;

  obtenerInformacion() {
    const clientes = [{ nombre: 'Amerian Buenos Aires Park'}];
    this.listaClientesService.agregarClientes(clientes);
  }



  ngOnInit(): void {

  }


}

