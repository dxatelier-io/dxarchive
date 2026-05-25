const clock = document.getElementById('clock');

function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  clock.textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
updateClock();

const quotes = [
  'welcome to DX ✨',
  'internet version of my brain 🧠',
  'some memories deserve a home 💭',
  'digital scrapbook mode 🎀',
  'made with feelings and insomnia 🌙'
];

const quote = document.getElementById('quote');

setInterval(() => {
  const random = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[random];
}, 4000);

const secret = document.querySelector('.secret');

secret.addEventListener('click', () => {
  alert('this folder is still locked 👀');
});

const musicBtn = document.getElementById('musicBtn');

let playing = false;

musicBtn.addEventListener('click', () => {
  playing = !playing;

  if (playing) {
    musicBtn.textContent = '⏸';
  } else {
    musicBtn.textContent = '▶';
  }
});
