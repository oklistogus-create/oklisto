// VIDEO Header
document.addEventListener('DOMContentLoaded', function() {
    const heroVideo = document.querySelector('.hero-video');
    const heroSection = document.getElementById('hero-section');
    
    // Detectar conexión lenta
    if (navigator.connection) {
        const connection = navigator.connection;
        
        // Si es conexión lenta o ahorro de datos activado
        if (connection.saveData || connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
            heroSection.classList.add('no-video');
            heroVideo.pause();
            return;
        }
    }
    
    // Precarga inteligente del video
    heroVideo.addEventListener('loadeddata', function() {
        // Video cargado exitosamente
        heroSection.classList.remove('no-video');
    });
    
    // Si hay error en la carga, mostrar fallback
    heroVideo.addEventListener('error', function() {
        heroSection.classList.add('no-video');
    });
    
    // Forzar carga del poster primero
    if (heroVideo.poster) {
        const img = new Image();
        img.src = heroVideo.poster;
    }
});

        // Mobile menu toggle functionality
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileMenu = document.getElementById('mobileMenu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });