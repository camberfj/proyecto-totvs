import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ClientesModule } from '../clientes.module';
import { ResultadoService } from 'src/app/services/resultado.service';
import { Info } from 'src/app/datos/info';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ListaClientesComponent } from '../lista-clientes/lista-clientes.component';
import { SearchService } from './search.service';
import { ListaclientesService } from '../lista-clientes/listaclientes.service';

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
  resultado: Info [] = [];
  interval:any;



  constructor(private resultadoService: ResultadoService, searchService: SearchService, listaClientesService: ListaclientesService ) {
    this.searchService = searchService;
    this.buscarClientes = () => {
      // Lógica para buscar clientes
      console.log("Buscando clientes...")
    };
  }

  obtenerClientes(){
    const clientes = this.listaClientesService.obtenerClientes();
    console.log(clientes);
  }

  listaClientesComponent(){
    this.searchService.buscarClientes();
  }



  ngOnInit() {
  }






}
