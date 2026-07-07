 const navLinks = document.querySelectorAll('.nav__link');
 const menuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".header-navbar__menus");
const closeBtn = document.querySelector(".mobile-close-btn");


navLinks.forEach((nav)=>{
    nav.addEventListener('click',(event)=>{
      mobileMenu.classList.remove("active");
      navLinks.forEach(link=>link.classList.remove('active'))
      nav.classList.add('active');
    })
  })


menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  document.body.classList.add("scroll-hidden");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  document.body.classList.remove("scroll-hidden");
});


window.addEventListener("resize", () => {
  if (window.innerWidth >= 980) {
    mobileMenu.classList.remove("active");
    document.body.classList.remove("scroll-hidden");
  }
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 600,
  slidesPerView: "auto",
  spaceBetween: 24,
  watchOverflow: false,
  centeredSlides: true,

  breakpoints: {
    768: {
      centeredSlides: false,
    },
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


