import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { SearchComponent } from './search/search.component';
import { PoModule } from '@po-ui/ng-components';




@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    ClientesRoutingModule

  ],
})
export class ClientesModule { }
