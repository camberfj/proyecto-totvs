import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
    ListaClientesComponent,
   ],
})
export class SearchComponent implements OnInit {
  @Input() clientes: any[] = [];
  resultados: any[] = [];
  search: string;


  @Output() clientesEncontrado: EventEmitter<any[]> = new EventEmitter<any[]>();


  constructor(private clientesService: ClientesService) {
    this.buscarClientes = () => {
      console.log("Buscando clientes")
    };
  }


  buscarClientes() {
    if (this.search.trim() !== '') {
      const resultados = this.clientesService.buscarClientes(this.search);
      this.clientesService.actualizarClientesEncontrados(resultados);
    } else {
      this.resultados = [];
    }

  }



  ngOnInit() {}






}
