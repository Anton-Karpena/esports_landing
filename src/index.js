const next = document.getElementById('btn-next');
const prev = document.getElementById('btn-prev');
const slides = document.querySelectorAll('.slider__slide');
const dots = document.querySelectorAll('.slider__dot');

let index = 0;

const activeSlide = (n) => {
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].classList.remove('active');
  }
  slides[n].classList.add('active');
};

const activeDot = (n) => {
  for (let i = 0; i < dots.length; i += 1) {
    dots[i].classList.remove('active');
  }
  dots[n].classList.add('active');
};

const prepareCurrentSlide = (ind) => {
  activeSlide(ind);
  activeDot(ind);
};

const nextSlide = () => {
  if (index === slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  }
  index += 1;
  prepareCurrentSlide(index);
};

const prevSlide = () => {
  if (index === 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  }
  index -= 1;
  prepareCurrentSlide(index);
};

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

let time = 3600;
const countDown = document.getElementById('timer');

function updateCountDown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  countDown.innerHTML = `Осталось: ${minutes} минут ${seconds} секунд`;
  time -= 1;
}

setInterval(updateCountDown, 1000);
