$(document).on('ready', function(){

/* ---- Efectos para posicionarse ---- */
    // Obtenemos la altura total del menú
    var topMenuHeight = $('.menu').outerHeight(true);
    // Lista de items del menu
    var menuItems = $(".menu").find("a");
    // vigila evento click de los items del menú
    // así obtenemos un chido efecto animado de scroll
    menuItems.on("click", function (e) {
        e.preventDefault();
        var href = $(this).attr("href");
        var offsetTop = 0;

        if(href === "#")
            offsetTop = 0;
        else 
            offsetTop = $(href).offset().top - topMenuHeight + 1;
        // Primero detiene la animación anterior y luego le aplica la nueva
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 400);
    });
/* ---- FIN Efectos para posicionarse ---- */


/* ---- Creador de barras de habilidad ---- */
    $(".habilidad").each(function(){
        $(this).append('<div class="barra"></div>'); // Agregamos un nuevo elemento HTML
        var porcentaje = $(this).data("valor"); // Obtenemos el valor de la propiedad 'data-valor'
        $(this).find(".barra").css("width", porcentaje + "%"); // Asignamos tamaño de la barra con CSS in line
    });
/* ---- FIN Creador de barras de habilidad  ---- */


/* ---- Atrapando el evento submit del formulario ---- */
    $("#contacto form").on("submit", function(){
        $.ajax({
            url: $(this).attr("action"),
            type: "POST",
            dataType: "JSON",
            data: $(this).serialize(),
            success: function(respuesta){
                alert(respuesta.guardado);
            }
        });
        return false;
    });
/* ---- Fin de Atrapando el evento submit del formulario ---- */

});