const cards = document.querySelectorAll('.card');
let startTimes = [];

for (let card of cards) {
  startTimes = card.querySelectorAll('.starttime-item');
  if (startTimes.length > 4) {
    for (let i = 0; i < startTimes.length; i++) {
      startTimes[3].querySelector('.starttime-btn').textContent = 'ещё...';
      startTimes[3].querySelector('.starttime-btn').classList.add('showMore');
      startTimes[4].classList.add('non-displayed');
    }

    const moreTimeBtn = card.querySelector('.showMore');
    moreTimeBtn.addEventListener('click', () => console.log('click'));
  }
}
