import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';
import { PoModule } from '@po-ui/ng-components';
import { SearchComponent } from './search/search.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    PoModule,
    ClientesRoutingModule,



  ],
})
export class ClientesModule { }
