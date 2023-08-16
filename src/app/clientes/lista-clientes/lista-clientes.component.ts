import {Component, Input, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ResultsService } from 'src/app/services/results.service';


@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss'],
  standalone: true,
  imports: [MatCardModule, CommonModule],
})
export class ListaClientesComponent implements OnInit {
  @Input() resultados: any[] = [];


  constructor(private resultsService: ResultsService){}
  longText = `Info Cliente:`;




  ngOnInit(): void {
   /* this.resultsService.getClientes('').subscribe(data => {
      this.resultados = data;
      this.filteredClientes = data;

      console.log(this.resultados);
    })*/

  }






}

