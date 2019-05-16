
var menu = document.querySelector('.nav-gamburger');

menu.addEventListener("click", function () {
  var header = document.querySelector('.header');

  header.classList.toggle("header-mobile");
  menu.classList.toggle("nav-gamburger_active");
});