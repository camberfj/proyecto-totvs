import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { SearchComponent } from '../search/search.component';

/**
 * @title Card with media size
 */
@Component({
  selector: 'card-media-size-example',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss'],
  standalone: true,
  imports: [MatCardModule, SearchComponent],
})
export class ListaClientesComponent {
  longText = `Amerian Buenos Aires Park`;
}

