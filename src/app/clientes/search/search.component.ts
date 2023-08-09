import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Observable} from 'rxjs';
import {NgFor} from '@angular/common';
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
    NgFor,
    MatIconModule,
    MatProgressSpinnerModule,
    ListaClientesComponent,
   ],
})
export class SearchComponent implements OnInit {
  @Input() clientes: any[] = [];
  resultados: any[] = [
        {
            title: 'titulo 1',
            cuerpo: 'cuerpo 1',
            detalles: 'dettalle 1',
            fecha: '01/01/1010',
            imagen: 'urldelaimagen'
        },
     ];
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
