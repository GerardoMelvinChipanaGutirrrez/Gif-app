import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: `./resultados.component.html`,
  styleUrls: [`./resultados.component.css`]
})
export class ResultadosComponent {
  @Input() resultados: any[] = [];  // Definición de la propiedad de entrada
}
