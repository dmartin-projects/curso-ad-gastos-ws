import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Categoria, SelectorCategoria, TamanoArchivoPipe, Tarjeta } from '../public-api';

@Component({
  imports: [Tarjeta, SelectorCategoria],
  template: `
    <gui-tarjeta><h2 tarjeta-titulo>Hola</h2>cuerpo</gui-tarjeta>
    <gui-selector-categoria [opciones]="categorias" [(value)]="elegida" />
  `,
})
class Host {
  categorias: Categoria[] = [
    { id: 1, nombre: 'Súper', color: '#2e7d32' },
    { id: 2, nombre: 'Ocio', color: '#6a1b9a' },
  ];
  elegida: number | null = null;
}

describe('@gastos/ui', () => {
  it('Tarjeta proyecta el título y el cuerpo', async () => {
    const f = TestBed.createComponent(Host);
    await f.whenStable();
    const el = f.nativeElement as HTMLElement;
    expect(el.querySelector('gui-tarjeta header')?.textContent).toBe('Hola');
    expect(el.querySelector('gui-tarjeta section')?.textContent).toBe('cuerpo');
  });

  it('SelectorCategoria: radios nativos con [(value)]', async () => {
    const f = TestBed.createComponent(Host);
    await f.whenStable();
    const radios = (f.nativeElement as HTMLElement).querySelectorAll<HTMLInputElement>('input[type=radio]');
    expect(radios).toHaveLength(2);
    radios[1].click();
    await f.whenStable();
    expect(f.componentInstance.elegida).toBe(2);
  });

  it('tamanoArchivo', () => {
    const p = new TamanoArchivoPipe();
    expect(p.transform(1536)).toBe('1,5 KB');
    expect(p.transform(null)).toBe('');
  });
});
