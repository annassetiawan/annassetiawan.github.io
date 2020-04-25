const button = document.querySelector('button');
const image = document.querySelector('.homeimg');

const satu = document.querySelector('.satu');
const dua = document.querySelector('.dua');
const tiga = document.querySelector('.tiga');
const empat = document.querySelector('.empat');

satu.addEventListener('click', function () {
    image.setAttribute('src', './assets/home2.svg')
});

dua.addEventListener('click', function () {
    image.setAttribute('src', './assets/freelance1.svg')
});

tiga.addEventListener('click', function () {
    image.setAttribute('src', './assets/freelance2.svg')
});

empat.addEventListener('click', function () {
    image.setAttribute('src', './assets/freelance3.svg')
});