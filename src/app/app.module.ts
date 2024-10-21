import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { HistorialComponent } from './historial/historial.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    ResultadosComponent,
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
