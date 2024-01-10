const imagenes = ['animal.jpg', 'animal1.jpg','animal15.jpg','animal5.jpg','animal6.jpg','animal7.jpg','animal8.jpg','animal9.jpg','animal10.jpg','animal12.jpg','animal13.jpg','animal14.jpg'];
let indiceActual = 0;

function cambiarImagen(direccion) {
  indiceActual += direccion;

  if (indiceActual < 0) {
    indiceActual = imagenes.length - 1;
  } else if (indiceActual >= imagenes.length) {
    indiceActual = 0;
  }

  const imagenCarrusel = document.getElementById('imagenCarrusel');
  imagenCarrusel.style.opacity = 0; // Añadido para iniciar la animación de desvanecimiento

  setTimeout(() => {
    imagenCarrusel.src = imagenes[indiceActual];
    imagenCarrusel.style.opacity = 1; // Añadido para completar la animación de desvanecimiento
  }, 500); // El tiempo aquí debe coincidir con la duración de la transición en el CSS
}

window.onload = function () {
  const imagenCarrusel = document.getElementById('imagenCarrusel');
  imagenCarrusel.src = imagenes[indiceActual];
};
