// script.js - Versión con Dropdown y Pantallas de Detalle

// Hacer mostrarPantalla global para que pueda ser llamada desde HTML
window.mostrarPantalla = function(pantallaId) {
    // ========== ELEMENTOS DE NAVEGACIÓN ==========
    const navInicio = document.getElementById('nav-inicio');
    const navDefinicion = document.getElementById('nav-definicion');
    const navEspecies = document.getElementById('nav-especies');
    const navEspeciesAnimales = document.getElementById('nav-especies-animales');
    const navEspeciesPlantas = document.getElementById('nav-especies-plantas');
    const navLlegada = document.getElementById('nav-llegada');
    const navImpacto = document.getElementById('nav-impacto');
    const navPrevencion = document.getElementById('nav-prevencion');

    // Pantallas
    const pantallaInicio = document.getElementById('pantalla-inicio');
    const pantallaDefinicion = document.getElementById('pantalla-definicion');
    const pantallaEspeciesAnimales = document.getElementById('pantalla-especies-animales');
    const pantallaEspeciesPlantas = document.getElementById('pantalla-especies-plantas');
    const pantallaLlegada = document.getElementById('pantalla-llegada');
    const pantallaImpacto = document.getElementById('pantalla-impacto');
    const pantallaPrevencion = document.getElementById('pantalla-prevencion');
    
    // Pantallas de detalle
    const pantallaDetallePezLeon = document.getElementById('pantalla-detalle-pezleon');
    const pantallaDetallePezSargento = document.getElementById('pantalla-detalle-pezsargento');
    const pantallaDetalleTilapia = document.getElementById('pantalla-detalle-tilapia');
    const pantallaDetalleCaracolAfricano = document.getElementById('pantalla-detalle-caracolafricano');
    const pantallaDetalleHormigaLoca = document.getElementById('pantalla-detalle-hormigaloca');
    const pantallaDetalleGecko = document.getElementById('pantalla-detalle-gecko');
    const pantallaDetalleCoqui = document.getElementById('pantalla-detalle-coqui');
    const pantallaDetallePajaC = document.getElementById('pantalla-detalle-pajac');
    const pantallaDetalleTulipan = document.getElementById('pantalla-detalle-tulipan');
    const pantallaDetalleJacinto = document.getElementById('pantalla-detalle-jacinto');

    // Ocultar todas las pantallas
    const pantallas = [
        pantallaInicio, pantallaDefinicion, pantallaEspeciesAnimales,
        pantallaEspeciesPlantas, pantallaLlegada, pantallaImpacto, pantallaPrevencion,
        pantallaDetallePezLeon, pantallaDetallePezSargento, pantallaDetalleTilapia, 
        pantallaDetalleCaracolAfricano, pantallaDetalleHormigaLoca, pantallaDetalleGecko, 
        pantallaDetalleCoqui, pantallaDetallePajaC, pantallaDetalleJacinto, pantallaDetalleTulipan
    ];
    
    pantallas.forEach(p => {
        if (p) {
            p.classList.add('pantalla-oculta');
            p.classList.remove('pantalla-activa');
        }
    });

    // Remover clase activa de navegación
    const navs = [navInicio, navDefinicion, navEspecies, navLlegada, navImpacto, navPrevencion, navEspeciesAnimales, navEspeciesPlantas];
    navs.forEach(n => {
        if (n) n.classList.remove('nav-activo');
    });

    // Mostrar la pantalla seleccionada
    let pantallaMostrar;
    switch(pantallaId) {
        case 'inicio':
            pantallaMostrar = pantallaInicio;
            navInicio?.classList.add('nav-activo');
            break;
        case 'definicion':
            pantallaMostrar = pantallaDefinicion;
            navDefinicion?.classList.add('nav-activo');
            break;
        case 'especies-animales':
            pantallaMostrar = pantallaEspeciesAnimales;
            navEspeciesAnimales?.classList.add('nav-activo');
            if (navEspecies) navEspecies.classList.add('nav-activo');
            break;
        case 'especies-plantas':
            pantallaMostrar = pantallaEspeciesPlantas;
            navEspeciesPlantas?.classList.add('nav-activo');
            if (navEspecies) navEspecies.classList.add('nav-activo');
            break;
        case 'llegada':
            pantallaMostrar = pantallaLlegada;
            navLlegada?.classList.add('nav-activo');
            break;
        case 'impacto':
            pantallaMostrar = pantallaImpacto;
            navImpacto?.classList.add('nav-activo');
            break;
        case 'prevencion':
            pantallaMostrar = pantallaPrevencion;
            navPrevencion?.classList.add('nav-activo');
            break;
        case 'detalle-pezleon':
            pantallaMostrar = pantallaDetallePezLeon;
            break;
        case 'detalle-pezsargento':
            pantallaMostrar = pantallaDetallePezSargento;
            break;
        case 'detalle-tilapia':
            pantallaMostrar = pantallaDetalleTilapia;
            break;
        case 'detalle-caracolafricano':
            pantallaMostrar = pantallaDetalleCaracolAfricano;
            break;
        case 'detalle-hormigaloca':
            pantallaMostrar = pantallaDetalleHormigaLoca;
            break;
        case 'detalle-gecko':
            pantallaMostrar = pantallaDetalleGecko;
            break;
        case 'detalle-coqui':
            pantallaMostrar = pantallaDetalleCoqui;
            break;
        case 'detalle-pajac':
            pantallaMostrar = pantallaDetallePajaC;
            break;
        case 'detalle-jacinto':
            pantallaMostrar = pantallaDetalleJacinto;
            break;
        case 'detalle-tulipan':
            pantallaMostrar = pantallaDetalleTulipan;
            break;
        default:
            pantallaMostrar = pantallaInicio;
            navInicio?.classList.add('nav-activo');
    }

    if (pantallaMostrar) {
        pantallaMostrar.classList.remove('pantalla-oculta');
        pantallaMostrar.classList.add('pantalla-activa');
        animarTarjetas(pantallaMostrar);
    }
}

// Función para animar tarjetas
function animarTarjetas(contenedor) {
    if (!contenedor) return;
    const tarjetas = contenedor.querySelectorAll('.enterprise-card, .invasive-topic-grid .enterprise-card');
    tarjetas.forEach((card, index) => {
        if (!card.dataset.animado) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.3s ease';
            card.dataset.animado = 'true';
        }
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 50 * (index + 1));
    });
}

// Función para mostrar detalle de especie
window.mostrarDetalleEspecie = function(especieId) {
    window.mostrarPantalla(especieId);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // ========== ELEMENTOS DE NAVEGACIÓN ==========
    const navInicio = document.getElementById('nav-inicio');
    const navDefinicion = document.getElementById('nav-definicion');
    const navEspecies = document.getElementById('nav-especies');
    const navEspeciesAnimales = document.getElementById('nav-especies-animales');
    const navEspeciesPlantas = document.getElementById('nav-especies-plantas');
    const navLlegada = document.getElementById('nav-llegada');
    const navImpacto = document.getElementById('nav-impacto');
    const navPrevencion = document.getElementById('nav-prevencion');

    // ========== EVENTOS DE NAVEGACIÓN ==========
    navInicio?.addEventListener('click', (e) => {
        e.preventDefault();
        window.mostrarPantalla('inicio');
    });
    
    navDefinicion?.addEventListener('click', (e) => {
        e.preventDefault();
        window.mostrarPantalla('definicion');
    });
    
    /* navEspecies?.addEventListener('click', (e) => {
        e.preventDefault();
        window.mostrarPantalla('especies-animales');
    }); */
    
    navEspeciesAnimales?.addEventListener('click', (e) => {
        e.preventDefault();
        window.mostrarPantalla('especies-animales');
    });
    
    navEspeciesPlantas?.addEventListener('click', (e) => {
        e.preventDefault();
        window.mostrarPantalla('especies-plantas');
    });
    
    navLlegada?.addEventListener('click', (e) => {
        e.preventDefault();
        window.mostrarPantalla('llegada');
    });
    
    navImpacto?.addEventListener('click', (e) => {
        e.preventDefault();
        window.mostrarPantalla('impacto');
    });
    
    navPrevencion?.addEventListener('click', (e) => {
        e.preventDefault();
        window.mostrarPantalla('prevencion');
    });

    // ========== ASIGNAR EVENTOS A BOTONES "VER MÁS" ==========
    function asignarEventosABotones() {
        document.querySelectorAll('.card-button').forEach((boton) => {
            // Remover eventos anteriores para evitar duplicados
            boton.removeEventListener('click', manejarClickVerMas);
            boton.addEventListener('click', manejarClickVerMas);
        });
    }

    function manejarClickVerMas(e) {
        e.preventDefault();
        
        // Encontrar la tarjeta contenedora
        const card = e.target.closest('.enterprise-card');
        if (!card) return;
        
        // Identificar la especie por el título
        const titulo = card.querySelector('h3')?.textContent || '';
        
        if (titulo.includes('Pez León')) {
            window.mostrarDetalleEspecie('detalle-pezleon');
        } else if (titulo.includes('Pez Sargento')) {
            window.mostrarDetalleEspecie('detalle-pezsargento');
        } else if (titulo.includes('Tilapia')) {
            window.mostrarDetalleEspecie('detalle-tilapia');
        } else if (titulo.includes('Caracol Gigante Africano')) {
            window.mostrarDetalleEspecie('detalle-caracolafricano');
        } else if (titulo.includes('Hormiga Loca')) {
            window.mostrarDetalleEspecie('detalle-hormigaloca');
        } else if (titulo.includes('Gecko Casero Común')) {
            window.mostrarDetalleEspecie('detalle-gecko');
        } else if (titulo.includes('Rana Coquí Antillana')) {
            window.mostrarDetalleEspecie('detalle-coqui');
        } else if (titulo.includes('Paja Canalera')) {
            window.mostrarDetalleEspecie('detalle-pajac');
        } else if (titulo.includes('Jacinto')) {
            window.mostrarDetalleEspecie('detalle-jacinto');
        } else if (titulo.includes('Tulipán Africano')) {
            window.mostrarDetalleEspecie('detalle-tulipan');
        } else {
            alert('Detalle de ' + titulo + ' en construcción');
        }
    }

    // Asignar eventos iniciales
    asignarEventosABotones();

    // ========== MODAL DE DEFINICIÓN ==========
    const modal = document.getElementById("miModal");
    const btnAbrir = document.getElementById("botonAbrir");
    const btnCerrar = document.querySelector(".cerrar-modal");

    if (btnAbrir && modal) {
        btnAbrir.onclick = function() {
            modal.style.display = "flex";
            document.body.style.overflow = "hidden";
        }

        const cerrarModal = () => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }

        if (btnCerrar) btnCerrar.onclick = cerrarModal;

        window.onclick = function(event) {
            if (event.target === modal) cerrarModal();
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape") cerrarModal();
        });
    }


    // ========== DROPDOWN ESPECIES (SOLO CLICK) ==========
    const dropdown = document.getElementById('nav-especies-dropdown');
    const btnEspecies = document.getElementById('nav-especies');

    btnEspecies?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); // evita cierre inmediato
        dropdown.classList.toggle('activo');
    });

    // Cerrar dropdown al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('activo');
        }
    });

    // Cerrar dropdown al seleccionar una opción
    document.getElementById('nav-especies-animales')?.addEventListener('click', () => {
        dropdown.classList.remove('activo');
    });

    document.getElementById('nav-especies-plantas')?.addEventListener('click', () => {
        dropdown.classList.remove('activo');
    });
    // ========== INICIALIZAR MOSTRANDO LA PANTALLA DE INICIO ==========
    window.mostrarPantalla('inicio');
});


