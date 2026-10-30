// Carrossel de Vídeos
class VideoCarousel {
    constructor() {
        this.carousel = document.getElementById('carousel');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.indicatorsContainer = document.getElementById('indicators');
        this.videos = document.querySelectorAll('.carousel-item');
        this.currentIndex = 0;
        this.autoplayTimeout = null;
        this.isTransitioning = false;

        this.init();
    }

    init() {
        this.createIndicators();
        this.setupEventListeners();
        this.updateCarousel();
        this.setupSwipeGestures();
        this.startAutoplay();

        // Pause autoplay ao hover
        this.carousel.addEventListener('mouseenter', () => this.stopAutoplay());
        this.carousel.addEventListener('mouseleave', () => this.startAutoplay());
    }

    createIndicators() {
        this.videos.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.className = 'indicator' + (index === 0 ? ' active' : '');
            indicator.setAttribute('role', 'tab');
            indicator.setAttribute('aria-selected', index === 0);
            indicator.addEventListener('click', () => this.goToSlide(index));
            this.indicatorsContainer.appendChild(indicator);
        });
    }

    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => {
            this.previousSlide();
        });
        this.nextBtn.addEventListener('click', () => {
            this.nextSlide();
        });

        // Navegação por teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previousSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
    }

    setupSwipeGestures() {
        let startX = 0;
        let endX = 0;

        this.carousel.addEventListener('touchstart', (e) => {
            startX = e.changedTouches[0].screenX;
            this.stopAutoplay();
        }, false);

        this.carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].screenX;
            this.handleSwipe();
            this.startAutoplay();
        }, false);
    }

    handleSwipe() {
        if (startX - endX > 50) {
            this.nextSlide();
        } else if (endX - startX > 50) {
            this.previousSlide();
        }
    }

    nextSlide() {
        if (this.isTransitioning) return;
        this.currentIndex = (this.currentIndex + 1) % this.videos.length;
        this.updateCarousel();
        this.resetAutoplay();
    }

    previousSlide() {
        if (this.isTransitioning) return;
        this.currentIndex = (this.currentIndex - 1 + this.videos.length) % this.videos.length;
        this.updateCarousel();
        this.resetAutoplay();
    }

    goToSlide(index) {
        if (this.isTransitioning || index === this.currentIndex) return;
        this.currentIndex = index;
        this.updateCarousel();
        this.resetAutoplay();
    }

    updateCarousel() {
        this.isTransitioning = true;
        const offset = -this.currentIndex * 100;
        this.carousel.style.transform = `translateX(${offset}%)`;

        // Atualizar indicadores
        document.querySelectorAll('.indicator').forEach((ind, index) => {
            const isActive = index === this.currentIndex;
            ind.classList.toggle('active', isActive);
            ind.setAttribute('aria-selected', isActive);
        });

        // Play/pause de vídeos
        this.videos.forEach((video, index) => {
            if (index === this.currentIndex) {
                // Remover mudo para audiovisual (opcional - comentado por padrão)
                // video.muted = false;
                video.play().catch(() => {
                    // Autoplay pode ser bloqueado
                });
            } else {
                video.pause();
            }
        });

        setTimeout(() => {
            this.isTransitioning = false;
        }, 600);
    }

    startAutoplay() {
        this.autoplayTimeout = setTimeout(() => {
            this.nextSlide();
        }, 8000);
    }

    stopAutoplay() {
        clearTimeout(this.autoplayTimeout);
    }

    resetAutoplay() {
        this.stopAutoplay();
        this.startAutoplay();
    }
}

// Galeria de Fotos com Modal
class PhotoGallery {
    constructor() {
        this.gallery = document.getElementById('gallery');
        this.modal = document.getElementById('modal');
        this.modalImage = document.getElementById('modalImage');
        this.closeModalBtn = document.getElementById('closeModal');
        this.galleryItems = document.querySelectorAll('.gallery-item');
        this.currentPhotoIndex = 0;

        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                this.currentPhotoIndex = index;
                this.openModal(img.src, img.alt);
            });
        });

        this.closeModalBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.closeModal();
        });

        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });

        // Fechar modal com tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
            // Navegação no modal
            if (this.modal.classList.contains('active')) {
                if (e.key === 'ArrowLeft') this.previousPhoto();
                if (e.key === 'ArrowRight') this.nextPhoto();
            }
        });

        // Swipe no modal
        let startX = 0;
        this.modal.addEventListener('touchstart', (e) => {
            startX = e.changedTouches[0].screenX;
        });

        this.modal.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].screenX;
            if (startX - endX > 50) this.nextPhoto();
            if (endX - startX > 50) this.previousPhoto();
        });
    }

    openModal(src, alt) {
        this.modalImage.src = src;
        this.modalImage.alt = alt;
        this.modal.classList.add('active');
        this.modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.classList.remove('active');
        this.modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
    }

    nextPhoto() {
        this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.galleryItems.length;
        const img = this.galleryItems[this.currentPhotoIndex].querySelector('img');
        this.modalImage.src = img.src;
        this.modalImage.alt = img.alt;
    }

    previousPhoto() {
        this.currentPhotoIndex = (this.currentPhotoIndex - 1 + this.galleryItems.length) % this.galleryItems.length;
        const img = this.galleryItems[this.currentPhotoIndex].querySelector('img');
        this.modalImage.src = img.src;
        this.modalImage.alt = img.alt;
    }
}

// Inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new VideoCarousel();
    new PhotoGallery();

    // Efeito de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Intersection Observer para animações de entrada
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInScale 0.6s ease forwards';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.gallery-item').forEach(item => {
        observer.observe(item);
    });
});

