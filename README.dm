# 🎓 OmicronDxP Web – Automatización de Pruebas E2E con Cypress

Este proyecto automatiza los principales flujos funcionales del portal OmicronDXP, utilizando 
Cypress como framework de pruebas end-to-end y una arquitectura modular basada en el patrón Page Object Model (POM). 
La estructura de pruebas está organizada por contexto funcional (login, perfil, catálogos, carrito, faltantes, etc.)
para facilitar el mantenimiento y la ejecución segmentada.

Las pruebas incluyen soporte para reportería avanzada con Mochawesome, ejecución por etiquetas (@sanity @smoke 
@regression @critical @happyPath @negative) gracias a @cypress/grep, y se ejecutan en modo headless con el navegador Chrome por defecto.



📦 Dependencias destacadas
Cypress: Framework de automatización principal.
Mochawesome: Generación de reportes detallados en HTML y JSON.
@cypress/grep: Permite ejecutar subconjuntos de pruebas usando etiquetas como:

| Etiqueta      | Descripción                                                               |
| ------------- | ------------------------------------------------------------------------- |
| `@sanity`     | Pruebas básicas para validar que el sistema responde y carga lo esencial. |
| `@smoke`      | Pruebas críticas del flujo principal de negocio.                          |
| `@regression` | Pruebas completas que cubren funcionalidad amplia.                        |
| `@critical`   | Pruebas de funciones esenciales que si fallan, detienen producción.       |
| `@happyPath`  | Flujo ideal, sin errores ni condiciones extremas.                         |
| `@negative`   | Casos con datos inválidos, errores o flujos inesperados.                  |



🚀 Scripts disponibles (package.json)

El proyecto incluye múltiples scripts predefinidos para correr pruebas específicas:

▶️ Ejecuciones generales
npm run cypress:open       # Abre el Test Runner de Cypress
npm run test               # Ejecuta todos los tests en Chrome headless
npm run cy:run:chrome      # Igual que "test", explícitamente en Chrome

▶️ Por módulos / funcionalidades

| 👤 Login                | Script                                |
| ----------------------- | ------------------------------------- |
| Inicio de sesión        | `npm run cy:run:login`                |

| 🧾 Receta               | Script                               |
| ----------------------- | ------------------------------------- |
| Configuración de receta | `npm run cy:run:configuracion_receta` |

| 🧾 Perfil               | Script                                |
| ----------------------- | ------------------------------------- |
| Configuración de receta | `npm run cy:run:configuracion_receta` |
| Direcciones de entrega  | `npm run cy:run:direcciones_entrega`  |
| Datos fiscales          | `npm run cy:run:datos_fiscales`       |

| 📦 Catálogos favoritos | Script                               |
| ---------              | ------------------------------------ |
| Dermazone              | `npm run cy:run:catalogos:dermazone` |
| Reve                   | `npm run cy:run:catalogos:reve`      |
| Bioequal               | `npm run cy:run:catalogos:bioequal`  |
| Bioelite               | `npm run cy:run:catalogos:bioelite`  |

| 🧾 Faltantes           | Fecha     | Script                                     |
| ----------------------- | --------- | ------------------------------------------ |
| MP                      | Con fecha | `npm run cy:run:faltantes:mp:fecha`        |
| MP                      | Sin fecha | `npm run cy:run:faltantes:mp:sinfecha`     |
| Envase                  | Con fecha | `npm run cy:run:faltantes:envase:fecha`    |
| Envase                  | Sin fecha | `npm run cy:run:faltantes:envase:sinfecha` |
| Producto Terminado (PT) | Con fecha | `npm run cy:run:faltantes:pt:fecha`        |
| Producto Terminado (PT) | Sin fecha | `npm run cy:run:faltantes:pt:sinfecha`     |

| Carrito                    | Script                             |
| ---------------------------- | ---------------------------------- |
| General                      | `npm run cy:run:carrito`           |
| Bioelite                     | `npm run cy:run:carrito:bioelite`  |
| Bioequal                     | `npm run cy:run:carrito:bioequal`  |
| Dermazone                    | `npm run cy:run:carrito:dermazone` |
| Reve                         | `npm run cy:run:carrito:reve`      |


▶️  Scripts por etiquetas (@cypress/grep)

| Tipo de prueba  | Etiqueta Cypress | Script                     |
| --------------- | ---------------- | -------------------------- |
| Sanity          | `@sanity`        | `npm run cy:run:sanity`    |
| Smoke           | `@smoke`         | `npm run cy:run:smoke`     |
| Regresión       | `@regression`    | `npm run cy:run:regresion` |
| Crítica         | `@critical`      | `npm run cy:run:critical`  |
| Camino feliz    | `@happyPath`     | `npm run cy:run:happypath` |
| Casos negativos | `@negative`      | `npm run cy:run:negative`  |


📂 Estructura del proyecto

cypress/
├── e2e/
│   ├── carrito/
│   ├── catalogos/
│   ├── faltantes/
│   ├── login/
│   ├── perfil/
│   └── receta/
├── fixtures/
│   ├── infoCarritoCompra/
│   ├── infoCatalogos_favoritos/
│   ├── infoConfiguracion_receta/
│   ├── infoDatos_fiscales/
│   ├── infoDireccion_entrega/
│   ├── infoFaltantes/
│   ├── infoReceta/
│   └── data_general.json
├── support/
│   ├── commands.js
│   └── e2e.js
├── email.js
├── videos/                     # Carpeta donde se guarda la evidencia de pruebas
├── cypress.config.js           # Configuración principal de Cypress
└── package.json                # Dependencias y scripts


👤 Autor
└── Karen Adzuira López Paz