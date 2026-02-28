/**
 * horario.js — Módulo Académico
 * Maneja tabs, selector de días, timeline animations
 */

document.addEventListener('DOMContentLoaded', function () {

    /* ==========================================
       1. VIEW TABS — Horario / Organigrama
       ========================================== */
    const viewTabs = document.querySelectorAll('.view-tab');
    const panels = document.querySelectorAll('.panel');

    viewTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const target = this.dataset.target;

            // Update tabs
            viewTabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');

            // Update panels
            panels.forEach(p => p.classList.remove('active'));
            const targetPanel = document.getElementById(target);
            if (targetPanel) {
                targetPanel.classList.add('active');
                // Trigger timeline animation on first show
                if (target === 'panel-organigrama') {
                    triggerTimelineAnimation();
                }
            }
        });
    });

    /* ==========================================
       2. MOBILE SCHEDULE — Day selector
       ========================================== */
    const dayBtns = document.querySelectorAll('.day-btn');
    const dayPanels = document.querySelectorAll('.day-panel');

    dayBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const day = this.dataset.day;

            dayBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            dayPanels.forEach(p => p.classList.remove('active'));
            const target = document.getElementById('day-' + day);
            if (target) target.classList.add('active');
        });
    });

    /* ==========================================
       3. ORGANIGRAMA — Day selector
       ========================================== */
    const orgDayBtns = document.querySelectorAll('.org-day-btn');
    const timelinePanels = document.querySelectorAll('.timeline-panel');

    orgDayBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const day = this.dataset.orgday;

            orgDayBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            timelinePanels.forEach(p => p.classList.remove('active'));
            const target = document.getElementById('org-' + day);
            if (target) {
                target.classList.add('active');
                // Animate new panel's items
                const items = target.querySelectorAll('.tl-item');
                items.forEach(item => item.classList.remove('visible'));
                requestAnimationFrame(() => {
                    items.forEach((item, i) => {
                        setTimeout(() => item.classList.add('visible'), i * 80);
                    });
                });
            }
        });
    });

    /* ==========================================
       4. TIMELINE INTERSECTION OBSERVER
       ========================================== */
    function triggerTimelineAnimation() {
        const activePanel = document.querySelector('.timeline-panel.active');
        if (!activePanel) return;
        const items = activePanel.querySelectorAll('.tl-item');
        items.forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 100);
        });
    }

    // Also observe if panel is already active on load
    const initPanel = document.querySelector('.timeline-panel.active');
    if (initPanel) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    triggerTimelineAnimation();
                    io.disconnect();
                }
            });
        }, { threshold: 0.1 });
        io.observe(initPanel);
    }

    /* ==========================================
       5. MODAL — Detalle de materia
       ========================================== */

    // Color map: chip class → { bg, color, border } (replica los CSS vars)
    const chipColors = {
        'chip-so':  { bg: '#EDF2FF', color: '#3B5BDB', border: '#BAC8FF' },
        'chip-web': { bg: '#F3FCF0', color: '#2F855A', border: '#9AE6B4' },
        'chip-emc': { bg: '#FFF8E1', color: '#C27821', border: '#FFE08A' },
        'chip-ol':  { bg: '#FEF0F9', color: '#9C4178', border: '#F5B8DC' },
        'chip-in':  { bg: '#FFF0EB', color: '#C96B33', border: '#FBBFA3' },
        'chip-leg': { bg: '#F0F4FF', color: '#364FC7', border: '#BAC8FF' },
        'chip-eng': { bg: '#E6FAF8', color: '#0F766E', border: '#81E6D9' },
        'chip-ea':  { bg: '#ECFDF5', color: '#065F46', border: '#6EE7B7' },
    };

    const modal        = document.getElementById('subjectModal');
    const modalClose   = document.getElementById('modalClose');
    const modalTitle   = document.getElementById('modalTitle');
    const modalCodigo  = document.getElementById('modalCodigo');
    const modalSalon   = document.getElementById('modalSalon');
    const modalDocente = document.getElementById('modalDocente');
    const modalHorario = document.getElementById('modalHorario');
    const modalModalidad = document.getElementById('modalModalidad');
    const modalCreditos  = document.getElementById('modalCreditos');
    const modalHeader  = document.getElementById('modalHeader');

    function openModal(cell) {
        const chip = cell.dataset.chip || 'chip-so';
        const colors = chipColors[chip] || chipColors['chip-so'];

        // Populate data
        modalTitle.textContent    = cell.dataset.materia   || '—';
        modalCodigo.textContent   = cell.dataset.codigo    || '—';
        modalSalon.textContent    = cell.dataset.salon     || '—';
        modalDocente.textContent  = cell.dataset.docente   || '—';
        modalHorario.textContent  = cell.dataset.horario   || '—';
        modalModalidad.textContent = cell.dataset.modalidad || '—';
        modalCreditos.textContent = cell.dataset.creditos  || '—';

        // Apply chip color to badge
        modalCodigo.style.background   = colors.bg;
        modalCodigo.style.color        = colors.color;
        modalCodigo.style.borderColor  = colors.border;

        // Tinted header background
        modalHeader.style.background   = colors.bg;
        modalHeader.style.borderBottomColor = colors.border;

        // Update credits color
        document.querySelector('.modal-credits-value').style.color = colors.color;

        // Show
        modal.setAttribute('aria-hidden', 'false');
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';

        // Focus close button for accessibility
        setTimeout(() => modalClose.focus(), 50);
    }

    function closeModal() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Click on class cells (grid + mobile cards)
    const classCells = document.querySelectorAll('.cell.class-cell, .day-class-item[role="button"]');
    classCells.forEach(cell => {
        cell.addEventListener('click', function () { openModal(this); });
        cell.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(this);
            }
        });
    });

    // Close button
    modalClose.addEventListener('click', closeModal);

    // Click outside card
    modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
    });

    // Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });

    /* ==========================================
       6. HIGHLIGHT TODAY'S DAY in grid
       ========================================== */
    const dayNames = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    const today = dayNames[new Date().getDay()];
    const dayHeaders = document.querySelectorAll('.day-header');
    const dayFullNames = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    dayHeaders.forEach((header, i) => {
        if (dayFullNames[i] && dayFullNames[i].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') === today) {
            header.classList.add('today');
        }
    });

    // Auto-select today's day in mobile schedule
    const todayMobileBtn = document.querySelector(`.day-btn[data-day="${today}"]`);
    if (todayMobileBtn) {
        document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.day-panel').forEach(p => p.classList.remove('active'));
        todayMobileBtn.classList.add('active');
        const todayPanel = document.getElementById('day-' + today);
        if (todayPanel) todayPanel.classList.add('active');
    }

    // Auto-select today's day in organigrama
    const todayOrgBtn = document.querySelector(`.org-day-btn[data-orgday="${today}"]`);
    if (todayOrgBtn) {
        document.querySelectorAll('.org-day-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.timeline-panel').forEach(p => p.classList.remove('active'));
        todayOrgBtn.classList.add('active');
        const todayOrgPanel = document.getElementById('org-' + today);
        if (todayOrgPanel) todayOrgPanel.classList.add('active');
    }

    console.log('✓ Módulo académico inicializado');
});
