import { Component } from '@angular/core';
import { GiphyService } from './giphy.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="contnt-app">
        <div class="contnt-info">       
          <div class="logo">
            <h1>Gifsapp</h1>
          </div>
          <app-historial [historial]="historial" (onTerminoSeleccionado)="realizarBusqueda($event)"></app-historial>
        </div>
        <div class="contnt-gifs">
          <app-buscador (onBuscar)="realizarBusqueda($event)"></app-buscador>
          <app-resultados [resultados]="resultados"></app-resultados>
        </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  historial: string[] = [];  // Almacena el historial de búsquedas
  resultados: any[] = [];  // Almacena los resultados de la búsqueda

  constructor(private giphyService: GiphyService) {}

  realizarBusqueda(termino: string) {
    if (!this.historial.includes(termino)) {
      this.historial.push(termino);  // Agrega el término al historial si no está ya
    }

    this.buscarEnGiphy(termino);  // Llama al método correcto
  }

  buscarEnGiphy(termino: string) {
    this.giphyService.buscarGifs(termino).subscribe(
      (response: any) => {  // Añadido el tipo 'any' a 'response'
        this.resultados = response.data;  // Actualiza los resultados con la respuesta de la API
        console.log(this.resultados);  // Muestra los resultados en la consola para verificar
      },
      (error: any) => {  // Añadido el tipo 'any' a 'error'
        console.error('Error al buscar GIFs:', error);
      }
    );
  }
}
