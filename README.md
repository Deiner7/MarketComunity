#  MarketComunity

MarketComunity es un proyecto web enfocado en la **compra, venta y donación de ropa de segunda mano**, promoviendo el consumo responsable y la colaboración dentro de una comunidad.

Actualmente el proyecto se encuentra en una **fase de maquetación frontend**, sin funcionalidades de backend, pero con una estructura clara, limpia y preparada para escalar en el futuro.

---

##  Objetivo del proyecto

El objetivo principal de MarketComunity es servir como base para una plataforma donde los usuarios puedan:

- Comprar ropa de segunda mano
- Vender ropa que ya no utilizan
- Donar ropa a personas que lo necesiten
- Navegar de forma intuitiva y organizada

Este proyecto tiene un enfoque **educativo**, aplicando buenas prácticas de desarrollo web, código limpio y organización profesional del proyecto.

---

##  Estructura del proyecto

```text
MarketComunity/
├── css/
│   ├── base.css           → Estilos base, reset y variables globales
│   ├── layout.css         → Estructura general (header, main, footer)
│   ├── components.css     → Componentes reutilizables (botones, cards, formularios)
│   └── pages/
│       ├── home.css        → Estilos específicos de la página de inicio
│       ├── catalogo.css    → Estilos de la página de catálogo
│       ├── donar.css       → Estilos de la página de donación
│       ├── vender.css      → Estilos de la página de venta
│       └── nosotros.css    → Estilos de la página “Nosotros”
│
├── js/
│   └── main.js            → JavaScript principal (modal de inicio de sesión)
│
├── pages/
│   ├── catalogo.html      → Página de catálogo
│   ├── donar.html         → Página de donación
│   ├── vender.html        → Página de venta
│   └── nosotros.html      → Página informativa del proyecto
│
├── img/                   → Imágenes e íconos del sitio
├── index.html             → Página principal
└── README.md              → Documentación del proyecto

