// 1. DATOS: Mantenemos los datos de los eventos.
const timelineData = [
    {
        year: '2025',
        mainTitle: 'Futuro Sostenible y Expansión Global',
        imageURL: 'https://picsum.photos/650/250?random=1', 
        items: [
            { slideTitle: 'Nuevos Campus', content: 'Inauguración de nuevos campus en Asia y Europa, expandiendo nuestra presencia global.' },
        ]
    },
    {
        year: '2025', // Año repetido
        mainTitle: 'Alianza Estratégica Tecnológica',
        imageURL: 'https://picsum.photos/650/250?random=2', 
        items: [
            { slideTitle: 'Colaboración con Tech Corp', content: 'Firma de un acuerdo histórico para desarrollar laboratorios de inteligencia artificial de última generación.' },
        ]
    },
    {
        year: '2023',
        mainTitle: 'Premio Nobel de Medicina',
        imageURL: 'https://picsum.photos/650/250?random=3', 
        items: [
            { slideTitle: 'Investigación Revolucionaria', content: 'Un equipo de la universidad es galardonado con el Premio Nobel por su trabajo pionero en terapia génica.' },
        ]
    },
    {
        year: '2021',
        mainTitle: 'Lanzamiento de Plataforma Híbrida',
        imageURL: 'https://picsum.photos/650/250?random=4', 
        items: [
            { slideTitle: 'Modelo "Flex-Learn"', content: 'Implementación de un nuevo modelo de aprendizaje que combina clases presenciales y en línea de forma fluida.' },
        ]
    },
     {
        year: '2019',
        mainTitle: 'Centenario de la Universidad',
        imageURL: 'https://picsum.photos/650/250?random=5', 
        items: [
            { slideTitle: 'Celebraciones y Eventos', content: 'Un año completo de celebraciones para conmemorar los 100 años de historia, impacto y excelencia académica.' }
        ]
    },
    {
        year: '2018',
        mainTitle: 'Inauguración del Centro de Artes',
        imageURL: 'https://picsum.photos/650/250?random=6', 
        items: [
            { slideTitle: 'Un Nuevo Escenario', content: 'Se abre un moderno centro para teatro, danza y música, fomentando la creatividad en el campus.' }
        ]
    },
    {
        year: '2017',
        mainTitle: 'Campeonato Nacional Deportivo',
        imageURL: 'https://picsum.photos/650/250?random=7', 
        items: [
            { slideTitle: 'Victoria Histórica', content: 'El equipo de baloncesto gana el campeonato nacional, un hito para el deporte universitario.' }
        ]
    },
    {
        year: '2017', // Año repetido
        mainTitle: 'Programa de Becas Globales',
        imageURL: 'https://picsum.photos/650/250?random=8', 
        items: [
            { slideTitle: 'Acceso a la Educación', content: 'Lanzamiento de un ambicioso programa de becas para estudiantes internacionales de bajos recursos.' }
        ]
    },
    {
        year: '1997',
        mainTitle: 'Lanzamiento del Primer Sitio Web',
        imageURL: 'https://picsum.photos/650/250?random=9', 
        items: [
            { slideTitle: 'Presencia Digital', content: 'La universidad estrena su primer sitio web oficial, abriendo un nuevo canal de comunicación con el mundo.' }
        ]
    }
];

// 2. LÓGICA DE RENDERIZADO (Optimizada con DocumentFragment)
function renderTimeline() {
    const container = document.getElementById('timelineContainer');
    const navLinksContainer = document.getElementById('navLinks');
    const dateMarkersContainer = document.getElementById('dateMarkersContainer');

    // OPTIMIZACIÓN: Usar DocumentFragment para minimizar las manipulaciones del DOM.
    const eventsFragment = document.createDocumentFragment();
    const navFragment = document.createDocumentFragment();
    const markersFragment = document.createDocumentFragment();

    timelineData.forEach((event, index) => {
        const uniqueId = `event-${event.year}-${index}`; // Crear un ID único
        
        // --- 1. Crear la tarjeta de contenido ---
        const eventDiv = document.createElement('div');
        eventDiv.className = 'timeline-event';
        eventDiv.id = uniqueId;
        
        const wrapperDiv = document.createElement('div');
        wrapperDiv.className = 'event-content-wrapper';
        
        wrapperDiv.innerHTML = `
            <img src="${event.imageURL}" alt="${event.mainTitle}" class="event-image">
            <h2>${event.mainTitle}</h2>
        `;
        const sliderContainer = document.createElement('div');
        sliderContainer.className = 'horizontal-slider';
        event.items.forEach(item => {
            const sliderItem = document.createElement('div');
            sliderItem.className = 'slider-item';
            sliderItem.innerHTML = `
                <h4>${item.slideTitle}</h4>
                <p>${item.content}</p>
            `;
            sliderContainer.appendChild(sliderItem);
        });
        wrapperDiv.appendChild(sliderContainer);
        eventDiv.appendChild(wrapperDiv);
        eventsFragment.appendChild(eventDiv); // Añadir al fragmento

        // --- 2. Crear el marcador de fecha ---
        const labelWrapperDiv = document.createElement('div');
        labelWrapperDiv.className = 'event-label-wrapper';
        labelWrapperDiv.dataset.targetId = uniqueId;
        labelWrapperDiv.dataset.eventYear = uniqueId;

        const yearLabelDiv = document.createElement('div');
        yearLabelDiv.className = 'event-year-label';
        yearLabelDiv.textContent = event.year;

        const pointDiv = document.createElement('div');
        pointDiv.className = 'event-point';
        pointDiv.innerHTML = '&#9733;';

        labelWrapperDiv.appendChild(pointDiv);
        labelWrapperDiv.appendChild(yearLabelDiv);
        markersFragment.appendChild(labelWrapperDiv); // Añadir al fragmento

        // --- 3. Crear el enlace de navegación ---
        const navLinkLi = document.createElement('li');
        navLinkLi.className = 'nav-link';
        navLinkLi.dataset.eventYear = uniqueId;
        navLinkLi.innerHTML = `<a href="#${uniqueId}">${event.year}</a>`;
        navFragment.appendChild(navLinkLi); // Añadir al fragmento
    });

    // Añadir los fragmentos al DOM en una sola operación por contenedor
    container.appendChild(eventsFragment);
    navLinksContainer.appendChild(navFragment);
    dateMarkersContainer.appendChild(markersFragment);

    // Configurar los listeners después de que todo el contenido esté en el DOM
    setupEventListeners();
}

// Función de scroll suave personalizada
function smoothScrollTo(container, element, duration = 800) {
    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    const startPosition = container.scrollTop;
    const targetPosition = startPosition + elementRect.top - containerRect.top - (containerRect.height / 2) + (elementRect.height / 2);
    
    let startTime = null;
    const easeInOutQuad = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easeInOutQuad(progress);
        container.scrollTop = startPosition + (targetPosition - startPosition) * easedProgress;
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }
    requestAnimationFrame(animation);
}

// 3. LÓGICA DE INTERACCIÓN Y ANIMACIÓN
function setupEventListeners() {
    // Intersection Observer para activar eventos al hacer scroll
    const events = document.querySelectorAll('.timeline-event');
    const observerOptions = {
        root: null, 
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.is-active').forEach(el => el.classList.remove('is-active'));
                const uniqueId = entry.target.id;
                const navLink = document.querySelector(`.nav-link[data-event-year="${uniqueId}"]`);
                const dateMarker = document.querySelector(`.event-label-wrapper[data-event-year="${uniqueId}"]`);
                entry.target.classList.add('is-active');
                if (navLink) navLink.classList.add('is-active');
                if (dateMarker) {
                    const dateContainer = document.getElementById('dateMarkersContainer');
                    dateMarker.classList.add('is-active');
                    smoothScrollTo(dateContainer, dateMarker);
                }
            }
        });
    }, observerOptions);
    events.forEach(event => observer.observe(event));

    // Clics en la barra de navegación
    document.querySelectorAll('.nav-link a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });

    // Clics en los marcadores de fecha
    document.querySelectorAll('.event-label-wrapper').forEach(marker => {
        marker.addEventListener('click', function() {
            const targetElement = document.getElementById(this.dataset.targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });
}

// Punto de entrada principal cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    renderTimeline();

    // Activar el primer evento por defecto al cargar
    const firstEvent = document.querySelector('.timeline-event');
    if (firstEvent) {
        const uniqueId = firstEvent.id;
        const firstNavLink = document.querySelector(`.nav-link[data-event-year="${uniqueId}"]`);
        const firstMarker = document.querySelector(`.event-label-wrapper[data-event-year="${uniqueId}"]`);
        firstEvent.classList.add('is-active');
        if (firstNavLink) firstNavLink.classList.add('is-active');
        if (firstMarker) firstMarker.classList.add('is-active');
    }
});