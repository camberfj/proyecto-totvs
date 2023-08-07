import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ListaClientesComponent } from '../lista-clientes/lista-clientes.component';
import { ClientesService } from '../clientes.service';


export interface User {
  name: string;
  title?: string;

}




/**
 * @title Display value autocomplete
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    NgFor,
    MatIconModule,
    MatProgressSpinnerModule,



  ],
})
export class SearchComponent implements OnInit {
  @Input() clientes: any[] = [];
  resultados: any[] = [];
  search: string;



  constructor(private clientesService: ClientesService) {
    this.buscarClientes = () => {
      console.log("Buscando clientes...")
    };
  }


  buscarClientes() {
    this.resultados = this.clientesService.buscarClientes(this.search);
  }



  ngOnInit() {}






}
