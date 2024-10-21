import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: `./historial.component.html`,
  styleUrls: [`./historial.component.css`]
})
export class HistorialComponent {
  @Input() historial: string[] = [];
  @Output() onTerminoSeleccionado = new EventEmitter<string>();

  repetirBusqueda(termino: string) {
    this.onTerminoSeleccionado.emit(termino);  // Emite el término seleccionado
  }
}
