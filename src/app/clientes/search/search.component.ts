import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Observable} from 'rxjs';
import {NgFor} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ListaClientesComponent } from '../lista-clientes/lista-clientes.component';
import { Post } from '../models/post';
import { ResultsService } from 'src/app/services/results.service';




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
  @Input() clientes: Post[] = [];
  resultados: Post[] = [];
  search: string;


  constructor(private resultsService: ResultsService) {
    this.buscarClientes = () => {
      console.log("Buscando clientes")
    };
  }


  buscarClientes() {
    if (this.search.trim() !== '') {
      this.resultsService.buscarClientes(this.search).subscribe(resultados => {
        this.resultados = resultados;
      });
      /*const resultados = this.clientesService.buscarClientes(this.search);*/

    } else {
      this.resultados = [];
    }
  }

  ngOnInit() {}


}
