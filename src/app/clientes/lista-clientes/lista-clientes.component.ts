import {Component, Input, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { SearchComponent } from '../search/search.component';
import { ClientesService } from '../clientes.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss'],
  standalone: true,
  imports: [MatCardModule, CommonModule, SearchComponent],
})
export class ListaClientesComponent implements OnInit {
  @Input() lista: any [];

  constructor(private clientesService: ClientesService){}
  longText = `Info Cliente:`;




  ngOnInit(): void {}




}

