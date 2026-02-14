# CV Online - Landing Page Profesional

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Landing page profesional para CV de Ingeniero de Desarrollo, diseñada con HTML semántico, CSS mobile-first y JavaScript vanilla. Cumple con todos los requerimientos técnicos especificados.

## 🎨 Características de Diseño

- **Estética**: Minimalista moderna con toques de brutalismo suave
- **Paleta de colores**:
  - Base: Blanco roto (#FAFAF9) y Negro carbón (#1A1A1A)
  - Acento primario: Verde salvia (#6B8E7F)
  - Acento secundario: Terracota suave (#C97C5D)
- **Tipografía distintiva**:
  - Display: DM Serif Display
  - Body: Work Sans
  - Monospace: IBM Plex Mono
- **Animaciones suaves**: Transiciones y efectos de scroll
- **100% Responsive**: Mobile-first design

## 📁 Estructura del Proyecto

```
cv-landing/
├── index.html          # Estructura HTML5 semántica
├── styles.css          # Estilos CSS mobile-first
├── menu.js            # Lógica del menú hamburguesa
├── images/            # Carpeta de imágenes
│   ├── profile.svg    # Foto de perfil placeholder
│   └── README.md      # Instrucciones para imágenes
└── README.md          # Este archivo
```

## 🚀 Despliegue

### Opción 1: Local

1. **Descarga los archivos** en tu computadora
2. **Abre index.html** directamente en tu navegador
3. Listo! El sitio funcionará sin necesidad de servidor

### Opción 2: GitHub Pages (Recomendado)

1. **Crea un repositorio** en GitHub
2. **Sube todos los archivos** del proyecto
3. Ve a **Settings → Pages**
4. Selecciona la rama `main` y carpeta `root`
5. Guarda y espera 1-2 minutos
6. Tu sitio estará en: `https://tuusuario.github.io/nombre-repo/`

### Opción 3: Netlify (Drag & Drop)

1. Ve a [netlify.com](https://www.netlify.com/)
2. **Arrastra la carpeta** completa del proyecto
3. Netlify lo despliega automáticamente
4. Obtienes una URL como: `https://tu-cv-nombre.netlify.app/`

### Opción 4: Vercel

1. Instala Vercel CLI: `npm i -g vercel`
2. En la carpeta del proyecto: `vercel`
3. Sigue las instrucciones en terminal
4. Tu sitio estará desplegado en minutos

## 🎯 Secciones Incluidas

El CV incluye todas las secciones solicitadas:

### 1. **Header**
- Logo/Nombre (AM.)
- Menú de navegación responsive
- Botón hamburguesa para móviles

### 2. **Hero Section**
- ✅ Foto de perfil con marco decorativo
- ✅ Nombre y título profesional
- ✅ Datos de contacto (email, teléfono, LinkedIn, GitHub)

### 3. **Sobre mí**
- ✅ Descripción del perfil profesional

### 4. **Competencias**
- ✅ Competencias técnicas (Frontend, Backend, DevOps)
- ✅ Competencias blandas con iconos

### 5. **Educación**
- ✅ Información académica con fechas
- ✅ Certificaciones

### 6. **Experiencia Laboral**
- ✅ Historial profesional detallado
- ✅ Logros y responsabilidades

### 7. **Proyectos Destacados**
- ✅ Portfolio de proyectos
- ✅ Tecnologías utilizadas
- ✅ Enlaces a demos y código

### 8. **Footer**
- ✅ Derechos reservados
- ✅ Enlaces secundarios

## ✏️ Personalización

### Cambiar Información Personal

Abre `index.html` y modifica:

```html
<!-- Líneas 45-48: Nombre y título -->
<h2 class="hero-title">Tu Nombre</h2>
<p class="hero-subtitle">Tu Título Profesional</p>

<!-- Líneas 51-69: Datos de contacto -->
<a href="mailto:tuemail@ejemplo.com">
```

### Cambiar Foto de Perfil

1. **Prepara tu foto**:
   - Formato: JPG o PNG
   - Tamaño: 500x500px mínimo
   - Peso: < 200KB (optimizada)

2. **Guarda como**: `images/profile.jpg`

3. **Actualiza index.html** (línea 43):
```html
<img src="images/profile.jpg" alt="Tu nombre">
```

### Modificar Colores

Abre `styles.css` y edita las variables CSS (líneas 5-14):

```css
:root {
    --color-bg-primary: #FAFAF9;     /* Color de fondo principal */
    --color-accent-primary: #6B8E7F;  /* Color de acento (verde) */
    --color-accent-secondary: #C97C5D; /* Color secundario (terracota) */
    /* ... más colores */
}
```

### Cambiar Tipografía

**Opción 1: Usar otra fuente de Google Fonts**

1. Ve a [fonts.google.com](https://fonts.google.com/)
2. Selecciona tu fuente favorita
3. Copia el `<link>` en el `<head>` del HTML
4. Actualiza las variables en CSS:

```css
:root {
    --font-display: 'Tu Fuente Display', serif;
    --font-body: 'Tu Fuente Body', sans-serif;
}
```

### Agregar/Eliminar Secciones

Cada sección está claramente delimitada:

```html
<section class="section section-nombre" id="nombre">
    <div class="section-container">
        <!-- Contenido -->
    </div>
</section>
```

Para eliminar una sección:
1. Borra el bloque `<section>` completo
2. Elimina el enlace correspondiente en el menú de navegación

### Modificar Competencias

En `index.html`, busca la sección `section-skills` (línea 103):

```html
<li class="skill-item">
    <span class="skill-name">Nombre Skill</span>
    <span class="skill-level">Nivel</span>
</li>
```

Agrega, elimina o modifica los items según tus habilidades.

### Actualizar Experiencia/Educación

Busca las secciones respectivas y duplica una tarjeta existente:

```html
<article class="experience-card">
    <div class="card-header">
        <div>
            <h3 class="card-title">Título del Puesto</h3>
            <p class="card-company">Nombre Empresa</p>
        </div>
        <span class="card-date">Fecha</span>
    </div>
    <ul class="card-list">
        <li>Logro o responsabilidad 1</li>
        <li>Logro o responsabilidad 2</li>
    </ul>
</article>
```

### Modificar Proyectos

En la sección `section-projects`:

```html
<article class="project-card">
    <div class="project-image">
        <div class="project-tag">Categoría</div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Nombre Proyecto</h3>
        <p class="project-description">Descripción...</p>
        <div class="project-tech">
            <span class="tech-tag">Tecnología 1</span>
            <span class="tech-tag">Tecnología 2</span>
        </div>
        <div class="project-links">
            <a href="URL" class="project-link">Ver proyecto →</a>
            <a href="URL" class="project-link">GitHub →</a>
        </div>
    </div>
</article>
```

## 🛠️ Requisitos Técnicos Cumplidos

### ✅ HTML Semántico
- Uso correcto de etiquetas: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Jerarquía de títulos correcta (h1 → h2 → h3)
- Atributos ARIA para accesibilidad
- Meta tags apropiados

### ✅ CSS Mobile-First
- Diseño responsive desde móvil hacia escritorio
- Breakpoints en 768px y 1200px
- Uso de Flexbox y Grid
- Variables CSS para mantener consistencia
- Animaciones y transiciones suaves

### ✅ JavaScript Vanilla
- Funcionalidad del menú hamburguesa
- Smooth scroll con offset
- Highlight de navegación activa
- Animaciones al scroll (Intersection Observer)
- Efecto parallax sutil
- Sin dependencias externas

### ✅ Responsive Design
- Una columna en móvil
- Grid adaptativo en tablet/desktop
- Menú hamburguesa en móvil, horizontal en desktop
- Imágenes y tipografía escalables
- Touch-friendly (44px mínimo en elementos interactivos)

### ✅ Accesibilidad
- Navegación por teclado
- Etiquetas ARIA
- Contraste de colores adecuado
- Textos alternativos en imágenes
- Soporte para `prefers-reduced-motion`

### ✅ Rendimiento
- Sin frameworks pesados
- Fuentes optimizadas con `preconnect`
- CSS minificable
- JavaScript optimizado con throttling
- Imágenes comprimidas (SVG placeholder)

## 🎨 Paleta de Colores Detallada

```css
Primarios:
#FAFAF9 - Blanco roto (fondo)
#1A1A1A - Negro carbón (texto)

Acentos:
#6B8E7F - Verde salvia
#C97C5D - Terracota suave

Secundarios:
#F5F5F4 - Gris muy claro
#57534E - Gris medio
#78716C - Gris cálido
#E7E5E4 - Bordes
#FFFFFF - Blanco puro
```

## 🌐 Compatibilidad

Probado y funcional en:
- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ Dispositivos móviles iOS y Android

## 📱 Responsive Breakpoints

```css
Mobile:     < 768px   (base)
Tablet:     ≥ 768px   (2 columnas)
Desktop:    ≥ 1200px  (máximo ancho)
```

## 🔧 Solución de Problemas

### Las fuentes no se cargan
- Verifica tu conexión a internet
- Google Fonts requiere conexión activa
- Como alternativa, descarga las fuentes y hostalas localmente

### El menú no funciona
- Verifica que `menu.js` esté en la misma carpeta
- Asegúrate que el script esté al final del `<body>`
- Revisa la consola del navegador (F12) para errores

### Los estilos no se aplican
- Verifica que `styles.css` esté en la misma carpeta
- Limpia el caché del navegador (Ctrl + F5)
- Asegúrate que el link al CSS esté en el `<head>`

### La foto no aparece
- Verifica que la ruta sea correcta: `images/profile.jpg`
- Verifica que la imagen exista en la carpeta
- Revisa permisos del archivo
- Usa el SVG placeholder mientras tanto

## 📄 Licencia

Este proyecto es de código abierto y puede ser usado libremente para crear tu CV personal.

## 🤝 Créditos

**Diseño y Desarrollo**: Plantilla base para CV profesional

**Fuentes**:
- DM Serif Display (Google Fonts)
- Work Sans (Google Fonts)
- IBM Plex Mono (Google Fonts)

---

**¿Necesitas ayuda?** Abre un issue en el repositorio o contacta al desarrollador.

**¿Te gustó el proyecto?** Dale una ⭐ en GitHub!
