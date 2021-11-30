const next = document.getElementById('btn-next');
const prev = document.getElementById('btn-prev');
const slides = document.querySelectorAll('.slider__slide');
const dots = document.querySelectorAll('.slider__dot');

let slideCounter = 0;
let dotsCounter = 0;
let index = 0;

const activeSlide = (n) => {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[n].classList.add('active');
};

const activeDot = (n) => {
  dots.forEach((dot) => dot.classList.remove('active'));
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
  } else {
    index += 1;
    prepareCurrentSlide(index);
  }
};

const prevSlide = () => {
  if (index === 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index -= 1;
    prepareCurrentSlide(index);
  }
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

const matchesButton = document.getElementById('matches');
const battlesButton = document.getElementById('battles');
const matches = document.getElementById('matchesList');
const battles = document.getElementById('battlesList');

const matchesBox = document.querySelector('.card__matches-wrapper');
const matchesCards = document.querySelectorAll('.card-bet');
const battlesBox = document.querySelector('.card__battles-wrapper');
const battlesCards = document.querySelectorAll('.card-battle');

const prevCard = document.getElementById('prevCard');
const nextCard = document.getElementById('nextCard');
const cardsDots = document.querySelectorAll('.schedule__actions-dot');

const matchCardSize = matchesCards[0].clientWidth;
const battleCardSize = battlesCards[0].clientWidth;

matchesBox.style.transform = `translateX(${-matchCardSize * slideCounter}px)`;
battlesBox.style.transform = `translateX(${-battleCardSize * slideCounter}px)`;

const selectActiveDot = () => {
  cardsDots.forEach((dot) => dot.classList.remove('active'));
  cardsDots[dotsCounter].classList.add('active');
};

nextCard.addEventListener('click', () => {
  if (slideCounter >= matchesCards.length - 1) {
    return;
  }

  if (slideCounter >= battlesCards.length - 1) {
    return;
  }

  if (matches.classList.contains('active')) {
    matchesBox.style.transition = 'transform 0.3s ease-in-out';
    slideCounter += 1;
    matchesBox.style.transform = `translateX(${-matchCardSize * slideCounter}px)`;
  }

  if (battles.classList.contains('active')) {
    battlesBox.style.transition = 'transform 0.3s ease-in-out';
    slideCounter += 1;
    battlesBox.style.transform = `translateX(${-battleCardSize * slideCounter}px)`;
  }

  if (dotsCounter < 4) {
    dotsCounter += 1;
    selectActiveDot();
  } else {
    dotsCounter = 0;
    selectActiveDot();
  }
});

prevCard.addEventListener('click', () => {
  if (slideCounter <= 0) {
    return;
  }

  if (slideCounter <= 0) {
    return;
  }

  if (matches.classList.contains('active')) {
    matchesBox.style.transition = 'transform 0.3s ease-in-out';
    slideCounter -= 1;
    matchesBox.style.transform = `translateX(${-matchCardSize * slideCounter}px)`;
  }

  if (battles.classList.contains('active')) {
    battlesBox.style.transition = 'transform 0.3s ease-in-out';
    slideCounter -= 1;
    battlesBox.style.transform = `translateX(${-battleCardSize * slideCounter}px)`;
  }

  if (dotsCounter > 0) {
    dotsCounter -= 1;
    selectActiveDot();
  } else {
    dotsCounter = 4;
    selectActiveDot();
  }
});

const showMatches = () => {
  battles.classList.remove('active');
  matches.classList.add('active');
  dotsCounter = 0;
  selectActiveDot();
  slideCounter = 0;
};

const showBattles = () => {
  matches.classList.remove('active');
  battles.classList.add('active');
  dotsCounter = 0;
  selectActiveDot();
  slideCounter = 0;
};

matchesButton.addEventListener('click', showMatches);
battlesButton.addEventListener('click', showBattles);
