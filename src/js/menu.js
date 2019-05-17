var gamburger = document.querySelector('.nav-gamburger');
var header = document.querySelector('.header');

gamburger.onclick = function () {
    header.classList.toggle("header-mobile");
    gamburger.classList.toggle("nav-gamburger_active");
}