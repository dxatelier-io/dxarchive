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

// BACKGROUND MUSIC
const musicBtn = document.getElementById('musicBtn');
const bgMusic = new Audio('LOCKEDIN.mp3');

bgMusic.loop = true;
bgMusic.volume = 0.4;

let playing = false;

musicBtn.addEventListener('click', async () => {
  playing = !playing;

  if (playing) {
    try {
      await bgMusic.play();
      musicBtn.textContent = '⏸';
    } catch (error) {
      console.log('Autoplay blocked by browser');
    }
  } else {
    bgMusic.pause();
    musicBtn.textContent = '▶';
  }
});

// LOADING SCREEN
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader-wrapper');

  setTimeout(() => {
    loader.classList.add('hide-loader');
  }, 1800);
});

// PAGE TRANSITION
const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const target = link.getAttribute('href');

    document.body.classList.add('fade-out');

    setTimeout(() => {
      window.location.href = target;
    }, 500);
  });
});

// DARK MODE
const modeBtn = document.getElementById('modeBtn');

modeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    modeBtn.textContent = '☀️';
  } else {
    modeBtn.textContent = '🌙';
  }
});
