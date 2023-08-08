import { Component, ViewChild } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  @ViewChild(ListaClientesComponent) listaClientesComponent!: ListaClientesComponent;

  actualizarClientesEncontrados(resultados: any[]) {
    this.listaClientesComponent.actualizarClientesEncontrados(resultados);
  }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) }
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

}
