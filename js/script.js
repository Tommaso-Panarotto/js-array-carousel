//FASE DI PREPARAZIONE
//preparo le immagini
const sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp',];

//Recupero gli elemnti dal DOM
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carouselGallery = document.getElementById('gallery');

//Monto le immagini
let imgs = '';

for (let i = 0; i < sources.length; i++) {
    imgs += `<img alt="game-${i + 1}" src="${sources[i]}">`
}

//Metto in pagina
carouselGallery.innerHTML = imgs;