
const sectionPricing = document.querySelector('.section-pricing');
const sectionPricingTitles = document.querySelector('.section-pricing__titles');
const mainTitle = document.querySelector('.first-section__title');
const mainTitleText = mainTitle.innerHTML;
const speed = 70;
let i = 0;
mainTitle.innerHTML = '';

typingEffect()

window.onload = () => document.body.classList.add('loaded');

function typingEffect() {
    if (i < mainTitleText.length) {
        mainTitle.innerHTML += mainTitleText.charAt(i);
        i++;
        setTimeout(typingEffect, speed);
    }
}