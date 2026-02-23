# CV Online — Portfolio Profesional

Landing page personal para presentar mi perfil como Ingeniero de Desarrollo.  
Diseño minimalista, responsive y optimizado para rendimiento.

🔗 **Demo online:** https://web-portfolio-diego-casas.netlify.app/

---

## 🛠️ Stack

- HTML5 semántico  
- CSS3 (Mobile-First + Variables CSS)  
- JavaScript Vanilla  
- Responsive Design  
- Accesibilidad básica (ARIA + prefers-reduced-motion)

---

## ✨ Características

- Diseño minimalista moderno
- Sistema de diseño con variables CSS
- Secciones organizadas: Sobre mí, Experiencia, Educación, Certificaciones y Proyectos
- Overlay interactivo en proyectos
- Navegación responsive con menú hamburguesa
- Optimizado para pantallas grandes (contenido centrado con max-width)
- **Módulo académico** con horario semanal y organigrama diario de actividades
- **Modal de detalle** por materia con salón, docente, modalidad y créditos
- **Carrusel de proyectos** con soporte para swipe en móvil y drag en desktop

---

## 📁 Estructura

```
/
PORTAFOLIO-WEB/
├── CSS/
│   ├── horario.css
│   └── index.css
├── Images/
│   └── img-portafolio.jpg
├── JS/
│   ├── horario.js
│   └── menu.js
├── horario.html
├── index.html
└── README.md
```

---

## 📅 Módulo Académico (`horario.html`)

Página adicional integrada al portafolio que incluye dos vistas accesibles mediante tabs:

### Horario Semanal
- Grid CSS de 7 columnas (franja horaria + Lunes a Sábado)
- Cada materia con identidad visual diferenciada por color mediante variables CSS
- Modal emergente al hacer clic en cualquier celda con detalle completo: código, docente, salón, horario, modalidad y créditos
- En móvil se transforma en tarjetas por día con selector interactivo; las tarjetas también abren el modal
- Se resalta automáticamente el día actual

### Organigrama Diario
- Timeline vertical con selector de día
- Actividades clasificadas por categoría: Académica, Investigación, Desarrollo Personal, Administrativa y Descanso
- Cada categoría con identidad visual propia
- Animación de aparición escalonada al cambiar de día
- Las clases del horario real aparecen destacadas con badge de aula

---

## 🚀 Deploy

Desplegado mediante **Netlify Drop**.  
El proyecto es completamente estático, no requiere backend ni dependencias.

---

## 🎨 Personalización

La configuración principal se encuentra en:

- `:root` en `styles.css` → colores, tipografías y sistema de diseño
- `index.html` → contenido, proyectos y datos personales
- `horario.html` → datos de materias (atributos `data-*` en cada celda/tarjeta)
- `css/horario.css` → variables de color por materia y categoría de actividad
