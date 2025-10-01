// 1. DATOS: Mantenemos los datos de los eventos.
const timelineData = [
    {
        year: '2025',
        mainTitle: 'Copa Santa Fe 2025',
        imageURL: 'https://picsum.photos/650/250?random=1', 
        items: [
            { slideTitle: 'Atalaya Club 71 - 68 Sanjustino', content: 'Integrantes: Joaquin Baridon, Juan Jose Borches, Tomas Casas, Nicolas Castaño, Esteban Celotti, Franco Galleano, Federico Gettig, Nicolas Giraudo, Facundo Maruelli, Gabriel Martin, Juan Martino, Luka Rueda, Geronimo Verdaro, Valentino Verdaro, Maximiliano Yanson, Juan Pablo Lupo (DT).' },
        ]
    },
    {
        year: '2025', // Año repetido
        mainTitle: 'Copa 99º Aniversario 2025',
        imageURL: 'https://picsum.photos/650/250?random=2', 
        items: [
            { slideTitle: 'Atalaya Club 61 - 60 Temperley', content: 'Integrantes: Joaquin Baridon, Juan Jose Borches, Tomas Casas, Nicolas Castaño, Esteban Celotti, Franco Galleano, Federico Gettig, Nicolas Giraudo, Facundo Maruelli, Gabriel Martin, Juan Martino, Luka Rueda, Geronimo Verdaro, Valentino Verdaro, Maximiliano Yanson, Juan Pablo Lupo (DT).' },
        ]
    },
    {
        year: '2023',
        mainTitle: 'Copa 95º Aniversario 2023',
        imageURL: 'https://picsum.photos/650/250?random=3', 
        items: [
            { slideTitle: 'Atalaya Club 88 - 73 Unión y Progreso', content: 'Integrantes: Tomas Casas, Nicolas Castaño, Joaquin Etchevarne, Nicolas Giraudo, Francisco Lopez, Facundo Maruelli, Brian Najnudel, Emanuel Rava, Luka Rueda, Rafael Scaglia, Maximo Sosa, Leandro Yanson, Andres Malajovich (DT).' }
        ]
    },
    {
        year: '2021',
        mainTitle: 'Superliga Rosarina 2021',
        imageURL: 'https://picsum.photos/650/250?random=4', 
        items: [
            { slideTitle: 'Atalaya Club 61 - 56 Sportsmen Unidos', content: 'Integrantes: Bernard Baez, Juan Jose Borches, Tomas Casas, Nicolas Castaño, Mateo Ceñera, Mateo Lopez, Facundo Maruelli, Santiago Orellano, Emanuel Rava, Luka Rueda, Maximo Sosa, Alejo Suarez, Lautaro Suarez, Mauro Tarrago, Lisandro Villa, Leandro Yanson, Andres Malajovich (DT).' }
        ]
    },
     {
        year: '2019',
        mainTitle: 'Superliga Rosarina 2019',
        imageURL: 'https://picsum.photos/650/250?random=5', 
        items: [
            { slideTitle: 'Atalaya Club 79 - 59 Temperley', content: 'Integrantes: Juan Jose Borches, Alejandro Ettorre, Santiago Giraudo, Mariano Laurido, Facundo Maruelli, Santiago Orellano, Federico Perez, Emanuel Rava, Lautaro Suarez, Lisandro Villa, Joaquín Villanueva, Leandro Yanson, Maximiliano Yanson, Valentino Zanoni, Mariano Junco (DT).' }
        ]
    },
    {
        year: '2018',
        mainTitle: 'Superliga Rosarina 2018',
        imageURL: 'https://picsum.photos/650/250?random=6', 
        items: [
            { slideTitle: 'Atalaya Club 72 - 68 Talleres R.P.B.', content: 'Integrantes: Juan Jose Borches, Aaron Capra, Alejandro Ettorre, Mariano Laurido, Facundo Maruelli, Santiago Orellano, Emanuel Rava, Joaquin Rios, Lautaro Suarez, Gonzalo Tapatta, Lisandro Villa, Leandro Yanson, Maximiliano Yanson, Mariano Junco (DT).' }
        ]
    },
    {
        year: '2017',
        mainTitle: 'Superliga Rosarina 2017',
        imageURL: 'https://picsum.photos/650/250?random=7', 
        items: [
            { slideTitle: 'Atalaya Club 57 - 54 El Tala', content: 'Integrantes: Felipe Avataneo, Manuel Bello, Juan Jose Borches, Aaron Capra, Brandon Gargicevich, Facundo Maruelli, Mauro Moreno, Santiago Orellano, Federico Perez, Leandro Pugnali, Lautaro Suarez, Leandro Yanson, Maximiliano Yanson, Mariano Junco (DT).' }
        ]
    },
    {
        year: '2017', // Año repetido
        mainTitle: 'Liga Rosarina 2016/17',
        imageURL: 'https://picsum.photos/650/250?random=8', 
        items: [
            { slideTitle: 'Atalaya Club 72 - 60 C.A.O.V.A.', content: 'Integrantes: Felipe Avataneo, Juan Jose Borches, Brandon Gargicevich, Fabrisio Lasala, Facundo Maruelli, Mauro Moreno, Santiago Orellano, Federico Perez, Leandro Pugnali, Lautaro Suarez, Leandro Yanson, Maximiliano Yanson, Mariano Junco (DT).' }
        ]
    },
    {
        year: '1997',
        mainTitle: 'Liga Rosarina 1997',
        imageURL: 'https://picsum.photos/650/250?random=9', 
        items: [
            { slideTitle: 'Atalaya Club 92 - 89 Provincial', content: 'Integrantes: German Andersen, Gabriel Bracco, Julio Galvan, Mariano Garcia, Sebastian Garnero, Gaston Morange, Martin Moser, Gabriel Paradiso, Gallardo Peca, Mauricio Piva, Leandro Tano, Pablo Vela, Guillermo Pio All (DT).' }
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

    const totalEvents = timelineData.length;
    timelineData.forEach((event, index) => {
        const uniqueId = `event-${event.year}-${index}`; // Crear un ID único
        
        // --- 1. Crear la tarjeta de contenido ---
        const eventDiv = document.createElement('div');
        eventDiv.className = 'timeline-event';
        eventDiv.id = uniqueId;
        
        const wrapperDiv = document.createElement('div');
        wrapperDiv.className = 'event-content-wrapper';
        
        const starNumber = totalEvents - index; // Calcula el número de estrella (1 para el más antiguo)
        wrapperDiv.innerHTML = `
            <img src="${event.imageURL}" alt="${event.mainTitle}" class="event-image">
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

// Función de scroll suave para la ventana principal que centra el elemento bajo el nav
function scrollToElementCentered(element, duration = 800) {
    const navHeight = document.querySelector('.top-nav')?.offsetHeight || 60; // Altura del nav
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
// 3. LÓGICA DE INTERACCIÓN Y ANIMACIÓN
function setupEventListeners() {
    // Intersection Observer para activar eventos al hacer scroll
    const events = document.querySelectorAll('.timeline-event');
    const observerOptions = {
        root: null,
        rootMargin: '-45% 0px -55% 0px', // Ajustado para centrar debajo del nav
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
                scrollToElementCentered(targetElement);
            }
        });
    });

    // Clics en los marcadores de fecha
    document.querySelectorAll('.event-label-wrapper').forEach(marker => {
        marker.addEventListener('click', function() {
            const targetElement = document.getElementById(this.dataset.targetId);
            if (targetElement) {
                scrollToElementCentered(targetElement);
            }
        });
    });
}

// Punto de entrada principal cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    renderTimeline();

    // Activar el primer evento por defecto al cargar
    const firstEvent = document.querySelector('.timeline-event');
    if (firstEvent) {
        // Posicionar la ventana en el primer elemento sin animación
        const navHeight = document.querySelector('.top-nav')?.offsetHeight || 60;
        const viewportHeight = window.innerHeight;
        const initialScroll = firstEvent.offsetTop - navHeight - (viewportHeight - navHeight) / 2 + firstEvent.offsetHeight / 2;
        window.scrollTo(0, initialScroll);

        // Activar las clases correspondientes
        const uniqueId = firstEvent.id;
        const firstNavLink = document.querySelector(`.nav-link[data-event-year="${uniqueId}"]`);
        const firstMarker = document.querySelector(`.event-label-wrapper[data-event-year="${uniqueId}"]`);
        
        // El observer se encargará de añadir la clase 'is-active' al cargar
    } else {
        window.scrollTo(0, 0);
    }
});