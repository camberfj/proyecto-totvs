import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
   ],
})
export class ListaClientesComponent implements OnInit {
  @Input() resultados: any[] = [];


  constructor(){}
  longText = `Info Cliente:`;




  ngOnInit(): void {}


}

