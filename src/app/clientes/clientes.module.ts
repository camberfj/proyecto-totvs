import { MatDialogModule } from '@angular/material/dialog';
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
import { DialogComponent } from './dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';




@NgModule({
  declarations: [],
  imports: [CommonModule, PoModule, ClientesRoutingModule, FormsModule, MatCardModule, MatButtonModule, MatDialogModule, MatExpansionModule],
  exports: [],
  providers: [ResultsService],
  bootstrap: [AppComponent]
})
export class ClientesModule { }
