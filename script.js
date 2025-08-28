const carrusel = document.querySelector('.carrusel .imagenes');
const imagenes = document.querySelectorAll('.carrusel img');
const prev = document.querySelector('.carrusel .prev');
const next = document.querySelector('.carrusel .next');
const dots = document.querySelectorAll('.dot');

let index = 0;

function mostrarImagen(i) {
  const ancho = imagenes[0].clientWidth;
  carrusel.style.transform = `translateX(${-ancho * i}px)`;
  dots.forEach((dot, j) => dot.classList.toggle("active", j === i));
}

function nextImage() {
  index = (index < imagenes.length - 1) ? index + 1 : 0;
  mostrarImagen(index);
}

function prevImage() {
  index = (index > 0) ? index - 1 : imagenes.length - 1;
  mostrarImagen(index);
}

next.addEventListener('click', nextImage);
prev.addEventListener('click', prevImage);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    mostrarImagen(index);
  });
});

let autoSlide = setInterval(nextImage, 5000);

document.querySelector(".carrusel").addEventListener("mouseenter", () => clearInterval(autoSlide));
document.querySelector(".carrusel").addEventListener("mouseleave", () => autoSlide = setInterval(nextImage, 5000));

window.addEventListener("resize", () => mostrarImagen(index));
document.addEventListener("DOMContentLoaded", () => mostrarImagen(index));
