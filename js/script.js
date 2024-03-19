
// activate the website hamburger icon and navigation
const hamburger = document.querySelector("#icon");
const nav = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("bx-x");
  nav.classList.toggle("active");
});

// hide mobile navigation after clicking a link or clicking outside
 document.onclick = function (n) {
  if (n.target.id !== "icon" && n.target.id !== "mobile-menu") {
    hamburger.classList.remove("bx-x");
    nav.classList.remove("active");
  }
};  


// adding sticky animation to the navigation
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", scrollY > 0);
});



// Customer Opinion Swiper
var opinionSwiper = new Swiper(".slide-content", {
  slidesPerView: 2,
  spaceBetween: 50,
  fade: true,
  grabCursor: true,
  slidesPerGroupSkip: 1,
  loop: false,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

// Set the color of navigation buttons for customer opinion swiper to brown
var nextOpinionButton = document.querySelector(".swiper-button-next");
var prevOpinionButton = document.querySelector(".swiper-button-prev");
nextOpinionButton.style.color = "#a68e76";
prevOpinionButton.style.color = "#a68e76";



////////////////////////////////////////////
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});
 
previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});