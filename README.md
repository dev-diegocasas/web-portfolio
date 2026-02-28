# CV Online — Portfolio Profesional

Landing page personal para presentar mi perfil como Ingeniero de Desarrollo.  
Diseño minimalista, responsive y optimizado para rendimiento.

🔗 **Demo online:** https://web-portfolio-diego-casas.netlify.app/

---

## 🛠️ Stack

- HTML5 semántico
- **SASS/SCSS** (arquitectura modular con variables, mixins y partials)
- CSS3 compilado (Mobile-First + Custom Properties)
- JavaScript Vanilla
- Responsive Design
- Accesibilidad básica (ARIA + prefers-reduced-motion)

---

## ✨ Características

- Diseño minimalista moderno con sistema de diseño centralizado en SCSS
- Variables SASS como única fuente de verdad para colores, tipografía y espaciado
- Secciones organizadas: Sobre mí, Experiencia, Educación, Certificaciones y Proyectos
- **Sección de proyectos rediseñada** — tarjetas editoriales con índice numérico, imagen contenida y descripción siempre visible
- Navegación responsive con menú hamburguesa
- Optimizado para pantallas grandes (contenido centrado con max-width)
- **Módulo académico** con horario semanal y organigrama diario de actividades
- **Modal de detalle** por materia con salón, docente, modalidad y créditos
- Colores de materias y categorías generados automáticamente con `@each` en SCSS

---

## 📁 Estructura

```
PORTAFOLIO-WEB/
├── CSS/                          ← CSS
│   ├── index.css
│   └── horario.css
├── Images/
│   └── img-portafolio.jpg
├── JS/
│   ├── horario.js
│   └── menu.js
├── scss/                         ← Fuente SASS
│   ├── main.scss                 ← Entry point de index.html
│   ├── horario.scss              ← Entry point de horario.html
│   ├── abstracts/
│   │   ├── _variables.scss       ← Tokens de diseño: colores, fuentes, espaciado
│   │   └── _mixins.scss          ← respond-to(), chip(), card-hover(), etc.
│   ├── base/
│   │   └── _base.scss            ← Reset, CSS vars, animaciones, accesibilidad
│   ├── layout/
│   │   └── _header.scss          ← Header, nav, footer
│   ├── components/
│   │   ├── _hero.scss            ← Sección hero y botones de contacto
│   │   ├── _sections.scss        ← Layout de secciones y perfil
│   │   ├── _cards.scss           ← Tarjetas de experiencia, educación, skills
│   │   └── _projects.scss        ← Galería de proyectos estilo editorial
│   └── pages/
│       └── _horario.scss         ← Módulo académico completo (grid, timeline, modal)
├── horario.html
├── index.html
└── README.md
```

---

## 🎨 Desarrollo con SASS

El proyecto usa **Dart Sass** con la sintaxis moderna `@use` / `@forward`. Los archivos `.css` en `/CSS` son el output compilado y **no deben editarse directamente**.

### Requisitos

- [Node.js](https://nodejs.org) (incluye npm)
- Sass: `npm install -g sass`

### Compilar una vez

```bash
sass scss/main.scss:CSS/index.css scss/horario.scss:CSS/horario.css --style=compressed
```

### Modo watch (recompila automáticamente al guardar)

```bash
sass --watch scss/main.scss:CSS/index.css scss/horario.scss:CSS/horario.css --style=compressed
```

> Deja este comando corriendo en una terminal mientras usas Live Server en VS Code.  
> SASS detecta cambios en `.scss` → compila el `.css` → Live Server recarga el navegador.

### Agregar estilos nuevos

1. Edita o crea el partial `.scss` correspondiente dentro de `scss/`
2. Si es un partial nuevo, impórtalo en `main.scss` o `horario.scss` con `@use`
3. Recompila (o deja el watch activo)

---

## 📅 Módulo Académico (`horario.html`)

Página adicional integrada al portafolio que incluye dos vistas accesibles mediante tabs:

### Horario Semanal
- Grid CSS de 7 columnas (franja horaria + Lunes a Sábado)
- Colores por materia generados con `@each` en `_horario.scss` — sin repetición de código
- Modal emergente al hacer clic en cualquier celda con detalle completo: código, docente, salón, horario, modalidad y créditos
- En móvil se transforma en tarjetas por día con selector interactivo
- Se resalta automáticamente el día actual

### Organigrama Diario
- Timeline vertical con selector de día
- Actividades clasificadas por categoría: Académica, Investigación, Desarrollo Personal, Administrativa y Descanso
- Colores de categorías generados con `@each` — consistentes con las variables SASS
- Animación de aparición escalonada al cambiar de día
- Las clases del horario real aparecen destacadas con badge de aula

---



