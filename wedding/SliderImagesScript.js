// Lista de imágenes
const images = [
    { src: 'resources/wedback.jpeg', alt: 'Imagen 1' },
    { src: 'resources/trifuerza.jpeg', alt: 'Imagen 2' },
    { src: 'resources/sheet_background.png', alt: 'Imagen 3' }
];

// Elementos del DOM
const sliderComponent = document.getElementById('slider-component');
const sliderDotsContent = document.getElementById('slider-dots-content');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.p4-modal-close');
const prevBtn = document.querySelector('.p4-modal-prev');
const nextBtn = document.querySelector('.p4-modal-next');

// Generar imágenes y puntos dinámicamente
images.forEach((image, index) => {
    // Crear elemento de imagen
    const imgDiv = document.createElement('div');
    imgDiv.className = `p4-slider-item ${index === 0 ? 'p4-slider-item-active' : ''}`;
    const img = document.createElement('img');
    img.className = 'p4-slider-image';
    img.src = image.src;
    img.alt = image.alt;
    imgDiv.appendChild(img);
    sliderComponent.appendChild(imgDiv);

    // Crear punto (dot)
    const dot = document.createElement('span');
    dot.className = `p4-slider-dot ${index === 0 ? 'p4-slider-dot-active' : ''}`;
    dot.setAttribute('onclick', `currentSlide(${index})`);
    sliderDotsContent.appendChild(dot);

    // Añadir evento click a cada imagen para abrir el modal
    img.addEventListener('click', () => openModal(index));
});

// Funcionalidad del slider
let slideIndex = 0;
let autoSlideInterval;

function showSlides(index) {
    const slides = document.querySelectorAll('.p4-slider-item');
    const dots = document.querySelectorAll('.p4-slider-dot');

    // Ocultar todas las imágenes y remover clase active de los puntos
    slides.forEach(slide => slide.classList.remove('p4-slider-item-active'));
    dots.forEach(dot => dot.classList.remove('p4-slider-dot-active'));

    // Mostrar imagen actual y agregar clase active al punto correspondiente
    slides[index].classList.add('p4-slider-item-active');
    dots[index].classList.add('p4-slider-dot-active');
}

function currentSlide(index) {
    slideIndex = index;
    showSlides(slideIndex);
}

// Cambiar automáticamente de imagen
function autoSlide() {
    autoSlideInterval = setInterval(() => {
        slideIndex = (slideIndex + 1) % images.length;
        showSlides(slideIndex);
    }, 3000);
}

// Iniciar el cambio automático de imagen
autoSlide();

// Abrir el modal
function openModal(index) {
    modal.style.display = 'block';
    modalImage.src = images[index].src;
    slideIndex = index;
    clearInterval(autoSlideInterval);
    disableScroll(); // Deshabilitar scroll del body al abrir el modal
}

// Cerrar el modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    autoSlide();
    enableScroll();
});

// Cambiar de imagen en el modal
prevBtn.addEventListener('click', () => {
    slideIndex = (slideIndex === 0) ? images.length - 1 : slideIndex - 1;
    modalImage.src = images[slideIndex].src;
});

nextBtn.addEventListener('click', () => {
    slideIndex = (slideIndex === images.length - 1) ? 0 : slideIndex + 1;
    modalImage.src = images[slideIndex].src;
});

// Función para deshabilitar el scroll del body
function disableScroll() {
    document.body.style.overflow = 'hidden';
}

// Función para habilitar el scroll del body
function enableScroll() {
    document.body.style.overflow = '';
}