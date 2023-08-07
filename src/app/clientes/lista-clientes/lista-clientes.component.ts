import {Component, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { SearchComponent } from '../search/search.component';
import { ClientesService } from '../clientes.service';


/**
 * @title Card with media size
 */
@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss'],
  standalone: true,
  imports: [MatCardModule],
})
export class ListaClientesComponent implements OnInit {
  clientes: any[] = [];
  search: any;

  constructor(private clientesService: ClientesService){
    this.clientes = [{nombre:'Amerian Buenos Aires Park'}];

  }
  longText = `Info Cliente:`;




  ngOnInit(): void {

  }


}

