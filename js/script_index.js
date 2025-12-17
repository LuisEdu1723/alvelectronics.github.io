document.addEventListener("DOMContentLoaded", function() {
    const intervalo = 3000; // 3 segundos
    
    const slides = document.querySelectorAll('.slide');
    const indicatorsContainer = document.querySelector('.indicators');
    let currentSlide = 0;
    let intervalId;

    // Crear los indicadores
    slides.forEach((slide, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === 0) {
            indicator.classList.add('active');
        }
        indicatorsContainer.appendChild(indicator);

        // Agregar evento de clic a cada indicador
        indicator.addEventListener('click', () => {
            clearInterval(intervalId); // Detener el intervalo actual
            changeSlide(index);
            intervalId = setInterval(showSlide, intervalo); // Reiniciar el intervalo
        });
    });

    const indicators = document.querySelectorAll('.indicator');

    function changeSlide(index) {
        // Oculta la imagen actual y el indicador actual
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');

        // Cambia al slide seleccionado
        currentSlide = index;

        // Muestra la imagen seleccionada y actualiza el indicador
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }

    function showSlide() {
        // Oculta la imagen actual y el indicador actual
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');

        // Avanza al siguiente slide
        currentSlide = (currentSlide + 1) % slides.length;

        // Muestra la siguiente imagen y actualiza el indicador
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }

    // Muestra la primera imagen al cargar la página
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');

    // Inicia el intervalo para cambiar las imágenes
    intervalId = setInterval(showSlide, intervalo);
});
