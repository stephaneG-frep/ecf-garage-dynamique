const burger = document.querySelector('.burger')
const menu = document.querySelector('.navigation')
const items = document.querySelectorAll('.navigation li')

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})

items.forEach(item => {
    item.addEventListener('click', ()=> {
        menu.classList.remove('active')
        burger.classList.remove('active')
    })
})


let image_slider = document.getElementsByClassName('image_slider');

let etape = 0;
let nbr_image = image_slider.length;
let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

function enleverActiveImages() {
    for(let i = 0; i < nbr_image; i ++) {
        image_slider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function() {
    etape++;
    if(etape >= nbr_image){
        etape = 0;
    }
    enleverActiveImages();
    image_slider[etape].classList.add('active');
})
precedent.addEventListener('click', function() {
    etape--;
    if(etape < 0){
        etape = nbr_image - 1;
    }
    enleverActiveImages();
    image_slider[etape].classList.add('active');
})
setInterval(function() {
    etape++;
    if(etape >= nbr_image){
        etape = 0;
    }
    enleverActiveImages();
    image_slider[etape].classList.add('active');
}, 4000)