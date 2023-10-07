const carrousel = document.querySelector('#section-actividades .carrousel-container');
const carrouselVertical = document.querySelector('#section-actividades .carrousel-vertical');
const carrouselMarks = document.querySelectorAll('#section-actividades .carrousel-mark');

carrouselVertical.addEventListener('scroll', ()=>{
  itemIndex = Math.floor(carrouselVertical.scrollTop / carrousel.clientHeight);
  carrouselMarks.forEach((e)=>{
    e.classList.remove('active')
  });
  carrouselMarks[itemIndex].classList.add('active');
});