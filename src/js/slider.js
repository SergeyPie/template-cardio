const mySiema = new Siema({
  selector: '.intro-item-tables',
  duration: 600,
  loop: true,
  easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
});
function nextSlide(index, elem) {
  document.querySelector('.intro-item__btn.active').classList.remove('active');
  elem.classList.add('active');
  mySiema.goTo(index);
}
