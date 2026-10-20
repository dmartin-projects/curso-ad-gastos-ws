# Changelog de @gastos/ui

Formato: [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/). Versionado: [SemVer](https://semver.org/lang/es/).

## [0.2.0] - 2026-10-20

### ⚠️ Cambios incompatibles

- `gui-selector-categoria`: el input `categorias` se llama ahora `opciones` (el componente
  se usa también para cuentas y etiquetas). Para actualizar:
  `<gui-selector-categoria [categorias]="lista">` → `<gui-selector-categoria [opciones]="lista">`.

> Mientras la versión empiece por `0.`, SemVer permite cambios incompatibles en una versión
> **menor**: por eso es 0.2.0 y no 1.0.0. A partir de 1.0.0, este cambio exigiría 2.0.0.

## [0.1.0] - 2026-10-20

### Añadido

- `gui-tarjeta`, `gui-selector-categoria` y el pipe `tamanoArchivo`.
- Entry point secundario `@gastos/ui/graficos` con `gui-grafico` (Chart.js como `peerDependency` opcional).
