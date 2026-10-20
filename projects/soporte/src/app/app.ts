import { Component } from '@angular/core';
import { Tarjeta } from '@gastos/ui';

/** App "soporte": solo la tarjeta. No importa @gastos/ui/graficos → no debe llevar Chart.js. */
@Component({
  selector: 'app-root',
  imports: [Tarjeta],
  templateUrl: './app.html',
})
export class App {}
