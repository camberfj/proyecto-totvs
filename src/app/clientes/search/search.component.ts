import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Observable} from 'rxjs';
import { NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
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
  @Output() searchEvent = new EventEmitter<String>();
  resultados: any[] = [];
  searchQuery: string = '';
  filteredClientes: Post[] = [];


  constructor(private resultsService: ResultsService) {}


    onSearch() {
      this.resultsService.getClientes(this.searchQuery).subscribe(data => {
        this.searchEvent.emit(this.searchQuery);
      })
    }


  ngOnInit() {}


}
