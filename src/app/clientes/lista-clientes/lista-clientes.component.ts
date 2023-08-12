import {Component, Input, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { SearchComponent } from '../search/search.component';
import { CommonModule } from '@angular/common';
import { Post } from '../models/post';
import { ResultsService } from 'src/app/services/results.service';


@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss'],
  standalone: true,
  imports: [MatCardModule, CommonModule, SearchComponent],
})
export class ListaClientesComponent implements OnInit {
  @Input() lista: Post [];
  clientes: Post []

  constructor(private resultsService: ResultsService){}
  longText = `Info Cliente:`;




  ngOnInit(): void {
    console.log(this.lista);
  }




}

