$(document).ready(function () {
    // Inicializar los sliders con la librería Slick
    $(".slider-container").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // Función para activar un carrusel específico
    function activateSlider(sliderClass) {
        $('.' + sliderClass).slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }

    // Asignar un controlador de clic a los botones de activación
    $('.slider-button').click(function () {
        var sliderClass = $(this).data('slider');
        activateSlider(sliderClass);
    });
});
