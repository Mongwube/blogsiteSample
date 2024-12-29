document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector("#menu-btn");
  const sideMenu = document.querySelector("#menu-side");
  const exMenu = document.querySelector('#ex-menu')
  let x = true;
// function to toggle the menu in javascript
  menuToggle.addEventListener("click", function () {
    sideMenu.classList.toggle("showing");
    exMenu.classList.toggle("showing");
    console.log("I am here");
  });
});

$('.post-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
  });
          