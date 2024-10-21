import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: `./buscador.component.html`,
  styleUrls: [`./buscador.component.css`]
})
export class BuscadorComponent {
  terminoBusqueda: string = ''; 
  @Output() onBuscar = new EventEmitter<string>();

  buscar() {
    const termino = this.terminoBusqueda.trim();
    if (termino) {
      this.onBuscar.emit(termino);
      this.terminoBusqueda = '';  // Limpiar el input después de buscar
    }
  }
}
