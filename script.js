// 1. DATOS: Estructura de datos para los eventos de la línea de tiempo.
const timelineData = [
    {
        year: '2025',
        mainTitle: 'Copa Santa Fe 2025',
        imagePosition: 'center 47.5%',
        imageURL: 'images/2025-2.jpeg', 
        items: [
            { slideTitle: 'Atalaya Club 71 - 68 Sanjustino', content: 'Integrantes: Joaquin Baridón, Juan José Borches, Tomás Casas, Nicolás Castaño, Esteban Celotti, Franco Galleano, Federico Gettig, Nicolás Giraudo, Facundo Maruelli, Gabriel Martín, Juan Ignacio Martino, Luka Rueda, Geronimo Verdaro, Valentino Verdaro, Maximiliano Yanson, Juan Pablo Lupo (DT).' },
        ]
    },
    {
        year: '2025', // Año repetido
        mainTitle: 'Copa 99º Aniversario 2025',
        imagePosition: 'center 20%',
        imageURL: 'images/2025-1.jpg', 
        items: [
            { slideTitle: 'Atalaya Club 61 - 60 Temperley', content: 'Integrantes: Joaquin Baridón, Juan José Borches, Tomás Casas, Nicolás Castaño, Esteban Celotti, Franco Galleano, Federico Gettig, Nicolás Giraudo, Facundo Maruelli, Gabriel Martín, Juan Ignacio Martino, Luka Rueda, Geronimo Verdaro, Valentino Verdaro, Maximiliano Yanson, Juan Pablo Lupo (DT).' },
        ]
    },
    {
        year: '2023',
        mainTitle: 'Copa 95º Aniversario 2023',
        imagePosition: 'center 45%',
        imageURL: 'images/2023.jpg', 
        items: [
            { slideTitle: 'Atalaya Club 88 - 73 Unión y Progreso', content: 'Integrantes: Tomás Casas, Nicolás Castaño, Joaquín Etchevarne, Nicolás Giraudo, Francisco López, Facundo Maruelli, Brian Najnudel, Emanuel Rava, Luka Rueda, Rafael Scaglia, Máximo Sosa, Leandro Yanson, Andrés Malajovich (DT).' }
        ]
    },
    {
        year: '2021',
        mainTitle: 'Superliga Rosarina 2021',
        imagePosition: 'center 60%',
        imageURL: 'images/2021.png', 
        items: [
            { slideTitle: 'Atalaya Club 61 - 56 Sportsmen Unidos', content: 'Integrantes: Bernard Báez, Juan José Borches, Tomás Casas, Nicolás Castaño, Mateo Ceñera, Mateo López, Facundo Maruelli, Santiago Orellano, Emanuel Rava, Luka Rueda, Máximo Sosa, Alejo Suárez, Lautaro Suárez, Mauro Tarragó, Lisandro Villa, Leandro Yanson, Andrés Malajovich (DT).' }
        ]
    },
     {
        year: '2019',
        mainTitle: 'Superliga Rosarina 2019',
        imagePosition: 'center 75%',
        imageURL: 'images/2019.jpg', 
        items: [
            { slideTitle: 'Atalaya Club 79 - 59 Temperley', content: 'Integrantes: Juan José Borches, Alejandro Ettorre, Santiago Giraudo, Mariano Laurido, Facundo Maruelli, Santiago Orellano, Federico Pérez, Emanuel Rava, Lautaro Suárez, Lisandro Villa, Joaquín Villanueva, Leandro Yanson, Maximiliano Yanson, Valentino Zanoni, Mariano Junco (DT).' }
        ]
    },
    {
        year: '2018',
        mainTitle: 'Superliga Rosarina 2018',
        imagePosition: 'center 58%',
        imageURL: 'images/2018.jpeg', 
        items: [
            { slideTitle: 'Atalaya Club 72 - 68 Talleres R.P.B.', content: 'Integrantes: Juan José Borches, Aarón Capra, Alejandro Ettorre, Mariano Laurido, Facundo Maruelli, Santiago Orellano, Emanuel Rava, Joaquín Rios, Lautaro Suárez, Gonzalo Tapatta, Lisandro Villa, Leandro Yanson, Maximiliano Yanson, Mariano Junco (DT).' }
        ]
    },
    {
        year: '2017',
        mainTitle: 'Superliga Rosarina 2017',
        imagePosition: 'center 35%',
        imageURL: 'images/2017.jpg', 
        items: [
            { slideTitle: 'Atalaya Club 57 - 54 El Tala', content: 'Integrantes: Felipe Avataneo, Manuel Bello, Juan José Borches, Aarón Capra, Brandon Gargicevich, Facundo Maruelli, Mauro Moreno, Santiago Orellano, Federico Pérez, Leandro Pugnali, Lautaro Suárez, Leandro Yanson, Maximiliano Yanson, Mariano Junco (DT).' }
        ]
    },
    {
        year: '2017', // Año repetido
        mainTitle: 'Liga Rosarina 2016/17',
        imagePosition: 'center 36%',
        imageURL: 'images/2016-17.jpg', 
        items: [
            { slideTitle: 'Atalaya Club 72 - 60 C.A.O.V.A.', content: 'Integrantes: Felipe Avataneo, Juan José Borches, Brandon Gargicevich, Fabrisio Lasala, Facundo Maruelli, Mauro Moreno, Santiago Orellano, Federico Pérez, Leandro Pugnali, Lautaro Suárez, Leandro Yanson, Maximiliano Yanson, Mariano Junco (DT).' }
        ]
    },
    {
        year: '1997',
        mainTitle: 'Liga Rosarina 1997',
        imagePosition: 'center 15%',
        imageURL: 'images/1997.jpg', 
        items: [
            { slideTitle: 'Atalaya Club 92 - 89 Provincial', content: 'Integrantes: Germán Andersen, Gabriel Bracco, Julio Galván, Mariano García, Sebastián Garnero, Gastón Morange, Martín Moser, Gabriel Paradiso, Gallardo Peca, Mauricio Piva, Leandro Tano, Pablo Vela, Guillermo Pio All (DT).' }
        ]
    }
];

/**
 * Crea y devuelve el elemento de la tarjeta de un evento.
 * @param {object} event - El objeto del evento.
 * @param {number} index - El índice del evento.
 * @param {number} totalEvents - El número total de eventos.
 * @returns {HTMLElement} El elemento del evento.
 */
function createEventCard(event, index, totalEvents) {
    const uniqueId = `event-${event.year}-${index}`;
    const eventDiv = document.createElement('div');
    eventDiv.className = 'timeline-event';
    eventDiv.id = uniqueId;

    const wrapperDiv = document.createElement('div');
    wrapperDiv.className = 'event-content-wrapper';

    const starNumber = totalEvents - index;
    wrapperDiv.innerHTML = `
        <img src="${event.imageURL}" alt="${event.mainTitle}" class="event-image" style="object-position: ${event.imagePosition || 'center'};">
        <h2>${starNumber}★ - ${event.mainTitle}</h2>
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
    return eventDiv;
}

/**
 * Crea y devuelve el marcador de fecha para un evento.
 * @param {object} event - El objeto del evento.
 * @param {number} index - El índice del evento.
 * @returns {HTMLElement} El elemento del marcador de fecha.
 */
function createDateMarker(event, index) {
    const uniqueId = `event-${event.year}-${index}`;
    const labelWrapperDiv = document.createElement('div');
    labelWrapperDiv.className = 'event-label-wrapper';
    labelWrapperDiv.dataset.targetId = uniqueId;
    labelWrapperDiv.dataset.eventYear = uniqueId;

    const yearLabelDiv = document.createElement('div');
    yearLabelDiv.className = 'event-year-label';
    yearLabelDiv.textContent = event.year;

    const pointDiv = document.createElement('div');
    pointDiv.className = 'event-point';
    pointDiv.innerHTML = '&#9733;'; // Estrella

    labelWrapperDiv.appendChild(pointDiv);
    labelWrapperDiv.appendChild(yearLabelDiv);
    return labelWrapperDiv;
}

/**
 * Crea y devuelve el enlace de navegación para un evento.
 * @param {object} event - El objeto del evento.
 * @param {number} index - El índice del evento.
 * @returns {HTMLElement} El elemento <li> del enlace de navegación.
 */
function createNavLink(event, index) {
    const uniqueId = `event-${event.year}-${index}`;
    const navLinkLi = document.createElement('li');
    navLinkLi.className = 'nav-link';
    navLinkLi.dataset.eventYear = uniqueId;
    navLinkLi.innerHTML = `<a href="#${uniqueId}">${event.year}</a>`;
    return navLinkLi;
}

// 2. LÓGICA DE RENDERIZADO
function renderTimeline() {
    const timelineContainer = document.getElementById('timelineContainer');
    const navLinksContainer = document.getElementById('navLinks');
    const dateMarkersContainer = document.getElementById('dateMarkersContainer');

    // OPTIMIZACIÓN: Usar DocumentFragment para minimizar las manipulaciones del DOM.
    const eventsFragment = document.createDocumentFragment();
    const navFragment = document.createDocumentFragment();
    const markersFragment = document.createDocumentFragment();

    if (timelineContainer && navLinksContainer && dateMarkersContainer) {
        const totalEvents = timelineData.length;
        timelineData.forEach((event, index) => {
            // 1. Crear y añadir la tarjeta del evento
            eventsFragment.appendChild(createEventCard(event, index, totalEvents));
            // 2. Crear y añadir el marcador de fecha
            markersFragment.appendChild(createDateMarker(event, index));
            // 3. Crear y añadir el enlace de navegación
            navFragment.appendChild(createNavLink(event, index));
        });

        // Añadir los fragmentos al DOM en una sola operación por contenedor
        timelineContainer.appendChild(eventsFragment);
        navLinksContainer.appendChild(navFragment);
        dateMarkersContainer.appendChild(markersFragment);
    }

    // Configurar los listeners después de que todo el contenido esté en el DOM
    setupEventListeners();
}

// Función de scroll suave personalizada
function smoothScrollTo(container, element, duration = 800) {
    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    const startPosition = container.scrollTop;
    const targetPosition = startPosition + elementRect.top - containerRect.top - (containerRect.height / 2) + (elementRect.height / 2); // Centrar en el contenedor
    
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

// Función de scroll suave para la ventana principal que centra el elemento bajo el nav
function scrollToElementCentered(element, duration = 800) {
    const navHeight = document.querySelector('.top-nav')?.offsetHeight ?? 60; // Altura del nav
    const viewportHeight = window.innerHeight;
    const elementRect = element.getBoundingClientRect();

    // Calcula el punto de scroll para centrar el elemento en el espacio visible
    const targetScrollY = window.pageYOffset + elementRect.top - navHeight - (viewportHeight - navHeight) / 2 + elementRect.height / 2;
    const startPosition = window.pageYOffset;
    let startTime = null;
    const easeInOutQuad = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easeInOutQuad(progress);
        window.scrollTo(0, startPosition + (targetScrollY - startPosition) * easedProgress);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    requestAnimationFrame(animation);
}

/**
 * Configura el Intersection Observer para activar eventos al hacer scroll.
 */
function setupIntersectionObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '-45% 0px -55% 0px', // Ajustado para centrar debajo del nav
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Desactivar cualquier elemento activo
                document.querySelectorAll('.is-active').forEach(el => el.classList.remove('is-active'));

                // Activar el elemento actual y sus componentes asociados
                const uniqueId = entry.target.id;
                const navLink = document.querySelector(`.nav-link[data-event-year="${uniqueId}"]`);
                const dateMarker = document.querySelector(`.event-label-wrapper[data-event-year="${uniqueId}"]`);
                
                entry.target.classList.add('is-active');
                if (navLink) navLink.classList.add('is-active');
                if (dateMarker) {
                    dateMarker.classList.add('is-active');
                    // Centrar el marcador de fecha en su contenedor
                    smoothScrollTo(dateMarker.parentElement, dateMarker);
                }
            }
        });
    }, observerOptions);
    document.querySelectorAll('.timeline-event').forEach(event => observer.observe(event));
}

/**
 * Configura los listeners para los clics en la navegación y los marcadores de fecha.
 */
function setupClickListeners() {
    document.querySelectorAll('.nav-link a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                scrollToElementCentered(targetElement);
            }
        });
    });

    document.querySelectorAll('.event-label-wrapper').forEach(marker => {
        marker.addEventListener('click', function() {
            const targetElement = document.getElementById(this.dataset.targetId);
            if (targetElement) {
                scrollToElementCentered(targetElement);
            }
        });
    });
}

// 3. LÓGICA DE INTERACCIÓN Y ANIMACIÓN
function setupEventListeners() {
    setupIntersectionObserver();
    setupClickListeners();
}

/**
 * Inicializa la página al cargar, posicionando el scroll en el primer evento.
 */
function initializeTimeline() {
    const firstEvent = document.querySelector('.timeline-event');
    if (firstEvent) {
        // Posicionar la ventana en el primer elemento sin animación
        const navHeight = document.querySelector('.top-nav')?.offsetHeight ?? 60;
        const viewportHeight = window.innerHeight;
        const initialScroll = firstEvent.offsetTop - navHeight - (viewportHeight - navHeight) / 2 + firstEvent.offsetHeight / 2;
        window.scrollTo(0, initialScroll);
    }
}

// Punto de entrada principal
document.addEventListener('DOMContentLoaded', function() {
    // Evita que el navegador restaure la posición de scroll anterior al recargar
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    renderTimeline();
    initializeTimeline();
});