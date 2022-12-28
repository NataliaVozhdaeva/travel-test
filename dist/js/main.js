const cards = document.querySelectorAll('.card');
const startTimesList = document.querySelector('.starttime');
let startTimes = [];
const moreTimeBtns = document.querySelectorAll('.starttime-item--showmore');
const showHiddenEls = () => {
  for (let i = 3; i < startTimes.length; i++) {
    startTimes[i].classList.toggle('non-displayed');
  }
};

for (let card of cards) {
  startTimes = card.querySelectorAll('.starttime-item');
  if (startTimes.length > 5) {
    showHiddenEls();
  }
}

for (let moreTimeBtn of moreTimeBtns) {
  moreTimeBtn.addEventListener('click', (e) => {
    startTimes =
      e.target.parentNode.parentNode.querySelectorAll('.starttime-item');
    showHiddenEls();
  });
}
