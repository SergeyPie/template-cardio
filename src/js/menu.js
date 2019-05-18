const gamburger = document.querySelector('.nav-gamburger');
const header = document.querySelector('.header');

gamburger.onclick = () => {
    header.classList.toggle("header-mobile");
    gamburger.classList.toggle("nav-gamburger_active");
}

header.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});