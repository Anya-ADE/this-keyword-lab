const swatches = document.querySelectorAll('.swatch');

function applySwatch() {
  const color = this.dataset.color;
  this.style.backgroundColor = color;
}

swatches.forEach(swatch => {
    swatch.addEventListener('click', applySwatch);
});