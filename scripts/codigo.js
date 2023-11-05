document.addEventListener("DOMContentLoaded", function() {
    var imagenes = document.querySelectorAll(".fade");
    var delay = 0;
  
    imagenes.forEach(function(imagen) {
      setTimeout(function() {
        imagen.classList.add("show");
      }, delay);
      delay += 300; // Ajusta la cantidad de milisegundos de retraso entre las imágenes
    });
  });