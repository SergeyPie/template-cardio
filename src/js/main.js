
var menu = document.querySelector('.nav-gamburger');

var sectionPricing = document.querySelector('.section-pricing');
var sectionPricingTitles = document.querySelector('.section-pricing__titles');


// addFixedTitle(sectionPricing, sectionPricingTitles) 
// window.addEventListener("scroll", function () {
//     addFixedTitle(sectionPricing, sectionPricingTitles) 
// });







// function addFixedTitle(wrapper, elementFixed) {
//     if (wrapper.getBoundingClientRect().top < 0 && wrapper.getBoundingClientRect().bottom > 0) {
//         elementFixed.classList.add('fixed')
//     }
//     else {
//         elementFixed.classList.remove('fixed')
//     }
// }



menu.addEventListener("click", function () {
    var header = document.querySelector('.header');
    header.classList.toggle("header-mobile");
    menu.classList.toggle("nav-gamburger_active");
});