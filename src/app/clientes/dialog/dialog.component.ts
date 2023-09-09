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
  ]
})
export class DialogComponent implements OnInit {
  @Output() dialogClosed = new EventEmitter<string>();
  resultados: any[] = [];
  searchQuery: string = '';
  filteredClientes: Info[] = [];
  panelOpenState = false;
  @Input() cards?: Info[];

  constructor(private resultsService: ResultsService, private dialog: MatDialog) {}

  openDialog() {
    this.resultsService.getClientes('').subscribe((data) => {
      console.log(data.results);
      this.filteredClientes = data.results;
      this.dialog.open(ListaClientesComponent, {
        width: '400px',
        data: { clientes: this.filteredClientes }, // Pasar datos al componente de diálogo si es necesario
      });
    });
  }

  ngOnInit(): void {}
}
