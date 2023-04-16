let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

// Toggle navbar starts 

document.querySelector('#dish1').classList.remove('active2');
document.querySelector('#about1').classList.remove('active3');
document.querySelector('#menu1').classList.remove('active4');
document.querySelector('#review1').classList.remove('active5');
document.querySelector('#order1').classList.remove('active6');
document.querySelector('#log1').classList.remove('active7');

document.querySelector('#dish1').onclick = () => {
  document.querySelector('#dish1').classList.toggle('active2');
  document.querySelector('#home1').classList.remove('active1');
  document.querySelector('#about1').classList.remove('active3');
  document.querySelector('#menu1').classList.remove('active4');
  document.querySelector('#review1').classList.remove('active5');
  document.querySelector('#order1').classList.remove('active6');
  document.querySelector('#log1').classList.remove('active7');
}
document.querySelector('#home1').onclick = () => {
  document.querySelector('#dish1').classList.remove('active2');
  document.querySelector('#home1').classList.toggle('active1');
  document.querySelector('#about1').classList.remove('active3');
  document.querySelector('#menu1').classList.remove('active4');
  document.querySelector('#review1').classList.remove('active5');
  document.querySelector('#order1').classList.remove('active6');
  document.querySelector('#log1').classList.remove('active7');
}
document.querySelector('#about1').onclick = () => {
  document.querySelector('#dish1').classList.remove('active2');
  document.querySelector('#home1').classList.remove('active1');
  document.querySelector('#about1').classList.toggle('active3');
  document.querySelector('#menu1').classList.remove('active4');
  document.querySelector('#review1').classList.remove('active5');
  document.querySelector('#order1').classList.remove('active6');
  document.querySelector('#log1').classList.remove('active7');
}
document.querySelector('#menu1').onclick = () => {
  document.querySelector('#dish1').classList.remove('active2');
  document.querySelector('#home1').classList.remove('active1');
  document.querySelector('#about1').classList.remove('active3');
  document.querySelector('#menu1').classList.toggle('active4');
  document.querySelector('#review1').classList.remove('active5');
  document.querySelector('#order1').classList.remove('active6');
  document.querySelector('#log1').classList.remove('active7');
}
document.querySelector('#review1').onclick = () => {
  document.querySelector('#dish1').classList.remove('active2');
  document.querySelector('#home1').classList.remove('active1');
  document.querySelector('#about1').classList.remove('active3');
  document.querySelector('#menu1').classList.remove('active4');
  document.querySelector('#review1').classList.toggle('active5');
  document.querySelector('#order1').classList.remove('active6');
  document.querySelector('#log1').classList.remove('active7');
}
document.querySelector('#order1').onclick = () => {
  document.querySelector('#dish1').classList.remove('active2');
  document.querySelector('#home1').classList.remove('active1');
  document.querySelector('#about1').classList.remove('active3');
  document.querySelector('#menu1').classList.remove('active4');
  document.querySelector('#review1').classList.remove('active5');
  document.querySelector('#order1').classList.toggle('active6');
  document.querySelector('#log1').classList.remove('active7');
}
document.querySelector('#log1').onclick = () => {
  document.querySelector('#dish1').classList.remove('active2');
  document.querySelector('#home1').classList.remove('active1');
  document.querySelector('#about1').classList.remove('active3');
  document.querySelector('#menu1').classList.remove('active4');
  document.querySelector('#review1').classList.remove('active5');
  document.querySelector('#order1').classList.remove('active6');
  document.querySelector('#log1').classList.toggle('active7');
}

// toggle navbar ends 

document.querySelector('#search-icon').onclick = () => {
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay:
  {
    delay: 4000,
    displayOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});