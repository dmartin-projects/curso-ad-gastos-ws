import { Component, signal } from '@angular/core';
import { Categoria, SelectorCategoria, TamanoArchivoPipe, Tarjeta } from '@gastos/ui';
import { Grafico } from '@gastos/ui/graficos';
import type { ChartData } from 'chart.js';

/** App "gastos": usa la librería entera, gráficos incluidos. */
@Component({
  selector: 'app-root',
  imports: [Tarjeta, SelectorCategoria, TamanoArchivoPipe, Grafico],
  templateUrl: './app.html',
})
export class App {
  protected readonly categorias: Categoria[] = [
    { id: 1, nombre: 'Súper', color: '#2e7d32' },
    { id: 2, nombre: 'Ocio', color: '#6a1b9a' },
  ];
  protected readonly categoria = signal<number | null>(1);
  protected readonly datos: ChartData = {
    labels: ['Súper', 'Ocio'],
    datasets: [{ data: [320, 85] }],
  };
}
