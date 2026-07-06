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
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});


window.addEventListener("resize", () => {
  if (window.innerWidth >= 980) {
    mobileMenu.classList.remove("active");
  }
});
