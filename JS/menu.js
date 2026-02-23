/**
 * Menu Hamburguesa - Funcionalidad de navegación responsive
 * Maneja la apertura/cierre del menú en dispositivos móviles
 */

document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;
    
    /**
     * Toggle del menú hamburguesa
     */
    menuToggle.addEventListener('click', function() {
        // Toggle de clases activas
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
        
        // Prevenir scroll del body cuando el menú está abierto
        if (mainNav.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
        
        // Actualizar aria-expanded para accesibilidad
        const isExpanded = this.classList.contains('active');
        this.setAttribute('aria-expanded', isExpanded);
        this.setAttribute('aria-label', isExpanded ? 'Cerrar menú' : 'Abrir menú');
    });
    
    /**
     * Cerrar menú al hacer click en un enlace
     */
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
            body.style.overflow = '';
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Abrir menú');
        });
    });
    
    /**
     * Cerrar menú al hacer click fuera del área de navegación
     */
    document.addEventListener('click', function(event) {
        const isClickInsideNav = mainNav.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('active')) {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
            body.style.overflow = '';
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Abrir menú');
        }
    });
    
    /**
     * Cerrar menú con la tecla Escape
     */
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && mainNav.classList.contains('active')) {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('active');
            body.style.overflow = '';
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Abrir menú');
        }
    });
    
    /**
     * Smooth scroll con offset para el header fijo
     */
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Solo aplicar smooth scroll para anclas internas
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.getElementById('header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    /**
     * Highlight del link activo en el scroll
     */
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavOnScroll() {
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Throttle para optimizar el evento scroll
    let isScrolling = false;
    window.addEventListener('scroll', function() {
        if (!isScrolling) {
            window.requestAnimationFrame(function() {
                highlightNavOnScroll();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });
    
    /**
     * Animación de aparición de elementos al hacer scroll
     */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar tarjetas y secciones
    const animatedElements = document.querySelectorAll(
        '.education-card, .experience-card, .project-card, .skill-category, .soft-skill-item'
    );
    
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });
    
    /**
     * Efecto parallax suave en el hero
     */
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroHeight = hero.offsetHeight;
            
            if (scrolled <= heroHeight) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                hero.style.opacity = 1 - (scrolled / heroHeight) * 0.5;
            }
        });
    }
    
    console.log('✓ CV Landing Page cargada correctamente');
});

/**
 * ==========================================
 * CAROUSEL FUNCTIONALITY - Proyectos Destacados
 * ==========================================
 */
document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.querySelectorAll('.indicator');
    const currentSlideSpan = document.getElementById('currentSlide');
    const totalSlidesSpan = document.getElementById('totalSlides');
    
    // Verificar que los elementos existen
    if (!track || !prevBtn || !nextBtn) {
        return;
    }
    
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    
    // Variables para swipe en móvil
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    
    /**
     * Actualizar posición del carrusel
     */
    function updateCarousel(animate = true) {
        const offset = currentIndex * -100;
        
        if (!animate) {
            track.style.transition = 'none';
        } else {
            track.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        }
        
        track.style.transform = `translateX(${offset}%)`;
        
        // Actualizar indicadores
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
        
        // Actualizar contador
        currentSlideSpan.textContent = currentIndex + 1;
        
        // Actualizar estado de botones
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === totalSlides - 1;
    }
    
    /**
     * Ir a slide específico
     */
    function goToSlide(index) {
        if (index < 0) {
            currentIndex = 0;
        } else if (index >= totalSlides) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        updateCarousel();
    }
    
    /**
     * Slide anterior
     */
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }
    
    /**
     * Slide siguiente
     */
    function nextSlide() {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateCarousel();
        }
    }
    
    /**
     * Event Listeners - Botones
     */
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    /**
     * Event Listeners - Indicadores
     */
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    /**
     * Event Listeners - Teclado
     */
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    /**
     * Touch Events - Swipe en móvil
     */
    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        track.style.transition = 'none';
    }, { passive: true });
    
    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        const offset = (currentIndex * -100) + (diff / track.offsetWidth * 100);
        
        track.style.transform = `translateX(${offset}%)`;
    }, { passive: true });
    
    track.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        
        isDragging = false;
        const diff = currentX - startX;
        const threshold = track.offsetWidth * 0.2; // 20% del ancho
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swipe right - slide anterior
                prevSlide();
            } else {
                // Swipe left - slide siguiente
                nextSlide();
            }
        } else {
            // No llegó al threshold, volver a la posición actual
            updateCarousel();
        }
        
        startX = 0;
        currentX = 0;
    });
    
    /**
     * Mouse Events - Drag en desktop (opcional)
     */
    let mouseStartX = 0;
    let mouseCurrentX = 0;
    let isMouseDragging = false;
    
    track.addEventListener('mousedown', (e) => {
        mouseStartX = e.clientX;
        isMouseDragging = true;
        track.style.cursor = 'grabbing';
        track.style.transition = 'none';
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isMouseDragging) return;
        
        mouseCurrentX = e.clientX;
        const diff = mouseCurrentX - mouseStartX;
        const offset = (currentIndex * -100) + (diff / track.offsetWidth * 100);
        
        track.style.transform = `translateX(${offset}%)`;
    });
    
    document.addEventListener('mouseup', (e) => {
        if (!isMouseDragging) return;
        
        isMouseDragging = false;
        track.style.cursor = 'grab';
        
        const diff = mouseCurrentX - mouseStartX;
        const threshold = track.offsetWidth * 0.2;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
        } else {
            updateCarousel();
        }
        
        mouseStartX = 0;
        mouseCurrentX = 0;
    });
    
    // Cursor de drag
    track.style.cursor = 'grab';
    
    /**
     * Auto-play (opcional - comentado por defecto)
     */
    /*
    let autoplayInterval;
    
    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            if (currentIndex < totalSlides - 1) {
                nextSlide();
            } else {
                goToSlide(0); // Volver al inicio
            }
        }, 5000); // Cambiar cada 5 segundos
    }
    
    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }
    
    // Iniciar autoplay
    startAutoplay();
    
    // Pausar en hover
    track.addEventListener('mouseenter', stopAutoplay);
    track.addEventListener('mouseleave', startAutoplay);
    
    // Pausar cuando se usan los controles
    prevBtn.addEventListener('click', () => {
        stopAutoplay();
        startAutoplay();
    });
    
    nextBtn.addEventListener('click', () => {
        stopAutoplay();
        startAutoplay();
    });
    */
    
    // Inicializar carrusel
    updateCarousel(false);
    
    console.log('✓ Carrusel de proyectos inicializado');
});



