import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { Info } from 'src/app/datos/info';
import { ResultsService } from 'src/app/services/results.service';
import { ListaClientesComponent } from '../lista-clientes/lista-clientes.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    ListaClientesComponent,
  ]
})
export class DialogComponent implements OnInit {
  /*@Output() dialogClosed = new EventEmitter<string>();*/
  searchQuery: string = '';
  filteredClientes: Info[] = [];
  panelOpenState = false;
  @Input() tarjetas: any[];

  constructor(private resultsService: ResultsService, private dialog: MatDialog) {}

  openDialog() {
    this.resultsService.getClientes(this.searchQuery).subscribe((data) => {
      console.log(data.results);
      this.filteredClientes = data.results;
      this.dialog.open(ListaClientesComponent, {
        width: '300px',
        data: { clientes: this.filteredClientes },
      });
    });
  }

  ngOnInit(): void {}
}
