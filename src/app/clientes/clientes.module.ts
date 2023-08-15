import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';
import { PoModule } from '@po-ui/ng-components';
import { SearchComponent } from './search/search.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ResultsService } from '../services/results.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [],
  imports: [CommonModule, PoModule, ClientesRoutingModule, FormsModule, MatCardModule],
  exports: [],
  providers: [ResultsService],
  bootstrap: [AppComponent]
})
export class ClientesModule { }
