
var sectionPricing = document.querySelector('.section-pricing');
var sectionPricingTitles = document.querySelector('.section-pricing__titles');
var mainTitle = document.querySelector('.first-section__title');
var mainTitleText = mainTitle.innerHTML;
var speed = 70;
var i = 0
mainTitle.innerHTML = ''

typingEffect()

window.onload = function () {
    document.body.classList.add('loaded')
};

function typingEffect() {
    if (i < mainTitleText.length) {
        mainTitle.innerHTML += mainTitleText.charAt(i);
        i++;
        setTimeout(typingEffect, speed);
    }
}