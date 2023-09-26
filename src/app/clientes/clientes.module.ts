import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';
import { PoModule } from '@po-ui/ng-components';
import { ResultsService } from '../services/results.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { ContainerDialogComponent } from './container-dialog/container-dialog.component';




@NgModule({
  declarations: [ContainerDialogComponent,],
  imports: [
    CommonModule,
    PoModule,
    ClientesRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatToolbarModule,
  ],
  exports: [],
  providers: [ResultsService],
  bootstrap: [AppComponent]
})
export class ClientesModule { }
