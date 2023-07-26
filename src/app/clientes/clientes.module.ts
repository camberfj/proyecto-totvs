import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    ListaClientesComponent,
    SearchComponent, SearchComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
