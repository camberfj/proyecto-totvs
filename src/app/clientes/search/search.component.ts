import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ClientesModule } from '../clientes.module';
import { Info } from 'src/app/datos/info';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ListaClientesComponent } from '../lista-clientes/lista-clientes.component';
import { SearchService } from './search.service';
import { ListaClientesService } from '../lista-clientes/listaclientes.service';


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
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,
    MatIconModule,
    MatProgressSpinnerModule,
    ListaClientesComponent,


  ],
})
export class SearchComponent implements OnInit {
  @Input() clientes: any[] = [];
  private searchService: SearchService;
  buscarClientes: () => void;
  searchControl = new FormControl<string | User>('');
  resultados: Observable<User[]>;
  search: string;
  listaClientes: any [] = [];



  constructor(private listaClientesService: ListaClientesService ) {
    this.buscarClientes = () => {
      console.log("Buscando clientes...")
    };
  }

  obtenerInformacionCompartida(){
    const Clientes = this.listaClientesService.obtenerClientes();
    console.log(Clientes);
  }

  listaClientesComponent(){
    this.searchService.buscarClientes();
  }



  ngOnInit() {
  }






}
