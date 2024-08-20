//FASE DI PREPARAZIONE
//preparo le immagini
const sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp',];

//Recupero gli elemnti dal DOM
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carouselGallery = document.getElementById('gallery');
const thumbGallery = document.getElementById('thumbnails');

//Monto le immagini
let imgs = '';

for (let i = 0; i < sources.length; i++) {
    imgs += `<img alt="game-${i + 1}" src="${sources[i]}">`;
}

//Metto in pagina
carouselGallery.innerHTML = imgs;
thumbGallery.innerHTML = imgs;

//CAROSELLO DINAMICO
let currentActiveImage = 0;

//raccolgo le immagini e rendo visibile
const images = document.querySelectorAll('#carousel img');
images[currentActiveImage].classList.add('active');
const thumb = document.querySelectorAll('#thumbnails img');
thumb[currentActiveImage].classList.add('active');

//effeto hover su immagini non attive
for (let i = 0; i < sources.length; i++) {
    thumb[i].classList.add('choose');
}

thumb[currentActiveImage].classList.remove('choose');


//Reagisco al next
nextButton.addEventListener('click', function () {

    //rimuovo classe active
    images[currentActiveImage].classList.remove('active');
    thumb[currentActiveImage].classList.remove('active');
    thumb[currentActiveImage].classList.add('choose');

    //incremento current active
    currentActiveImage++;

    //verifico di avere ancora immagini in cui scorrere altrimenti ricomincio
    if (currentActiveImage === sources.length) currentActiveImage = 0;

    //aggiungo classe active
    images[currentActiveImage].classList.add('active');
    thumb[currentActiveImage].classList.add('active');
    thumb[currentActiveImage].classList.remove('choose');
}
)

//Reagisco al previous
prevButton.addEventListener('click', function () {

    //rimuovo classe active
    images[currentActiveImage].classList.remove('active');
    thumb[currentActiveImage].classList.remove('active');
    thumb[currentActiveImage].classList.add('choose');

    //decremento current active
    currentActiveImage--;

    //verifico di avere ancora immagini in cui scorrere altrimenti ricomincio
    if (currentActiveImage === -1) currentActiveImage = sources.length - 1;

    //aggiungo classe active
    images[currentActiveImage].classList.add('active');
    thumb[currentActiveImage].classList.add('active');
    thumb[currentActiveImage].classList.remove('choose');
}
)

//seleziono immagine dal thumbnails
for (let i = 0; i < thumb.length; i++) {
    const thumbnail = thumb[i];

    thumbnail.addEventListener('click', function () {

        //rimuovo classe active
        images[currentActiveImage].classList.remove('active');
        thumb[currentActiveImage].classList.remove('active');
        thumb[currentActiveImage].classList.add('choose');

        //incremento current active
        currentActiveImage = i;

        //aggiungo classe active
        images[currentActiveImage].classList.add('active');
        thumb[currentActiveImage].classList.add('active');
        thumb[currentActiveImage].classList.remove('choose');

    }
    )
}