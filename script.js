// CLOCK

const clock = document.getElementById('clock');

if (clock) {

  function updateClock() {

    const now = new Date();

    const hours = String(
      now.getHours()
    ).padStart(2, '0');

    const minutes = String(
      now.getMinutes()
    ).padStart(2, '0');

    clock.textContent = `${hours}:${minutes}`;

  }

  setInterval(updateClock, 1000);

  updateClock();

}



// QUOTES

const quotes = [

  'welcome to DX ✨',
  'internet version of my brain 🧠',
  'some memories deserve a home 💭',
  'digital scrapbook mode 🎀',
  'made with feelings and insomnia 🌙'

];

const quote = document.getElementById('quote');

if (quote) {

  setInterval(() => {

    const random = Math.floor(
      Math.random() * quotes.length
    );

    quote.textContent = quotes[random];

  }, 4000);

}



// SECRET FOLDER

const secretFolder = document.querySelector('.secret');

if (secretFolder) {

  secretFolder.addEventListener('click', () => {

    const password = prompt(
      'enter password'
    );

    if (!password) return;

    if (
      password.toLowerCase() === 'ixxix'
    ) {

      document.body.classList.add(
        'fade-out'
      );

      setTimeout(() => {

        window.location.href =
          'secret.html';

      }, 500);

    } else {

      alert('wrong password 👀');

    }

  });

}



// GLOBAL MUSIC SYSTEM

const musicBtn =
  document.getElementById('musicBtn');

const bgMusic = new Audio(
  'assets/music/LOCKEDIN.mp3'
);

bgMusic.loop = true;

bgMusic.volume = 0.4;



// restore state

let isPlaying =
  localStorage.getItem(
    'musicPlaying'
  ) === 'true';

const savedTime =
  localStorage.getItem(
    'musicTime'
  );

if (savedTime) {

  bgMusic.currentTime = savedTime;

}



// autoplay if previously playing

window.addEventListener(
  'load',
  async () => {

    if (isPlaying) {

      try {

        await bgMusic.play();

        if (musicBtn) {

          musicBtn.textContent = '⏸';

        }

      } catch (err) {

        console.log(
          'autoplay blocked'
        );

      }

    }

  }
);



// save current time

setInterval(() => {

  localStorage.setItem(
    'musicTime',
    bgMusic.currentTime
  );

}, 1000);



// play / pause

if (musicBtn) {

  musicBtn.addEventListener(
    'click',
    async () => {

      if (bgMusic.paused) {

        try {

          await bgMusic.play();

          musicBtn.textContent = '⏸';

          localStorage.setItem(
            'musicPlaying',
            'true'
          );

        } catch (error) {

          console.log(error);

        }

      } else {

        bgMusic.pause();

        musicBtn.textContent = '▶';

        localStorage.setItem(
          'musicPlaying',
          'false'
        );

      }

    }
  );

}



// LOADING SCREEN

window.addEventListener('load', () => {

  const loader =
    document.querySelector(
      '.loader-wrapper'
    );

  if (loader) {

    setTimeout(() => {

      loader.classList.add(
        'hide-loader'
      );

    }, 1800);

  }

});



// PAGE TRANSITION

const links =
  document.querySelectorAll('a');

links.forEach(link => {

  link.addEventListener(
    'click',
    e => {

      const target =
        link.getAttribute('href');

      if (
        target &&
        !target.startsWith('http') &&
        !target.startsWith('#')
      ) {

        e.preventDefault();

        document.body.classList.add(
          'fade-out'
        );

        setTimeout(() => {

          window.location.href =
            target;

        }, 500);

      }

    }
  );

});



// DARK MODE

const modeBtn =
  document.getElementById('modeBtn');

if (modeBtn) {

  // restore theme

  if (
    localStorage.getItem('theme')
    === 'dark'
  ) {

    document.body.classList.add(
      'dark-mode'
    );

    modeBtn.textContent = '☀️';

  }

  modeBtn.addEventListener(
    'click',
    () => {

      document.body.classList.toggle(
        'dark-mode'
      );

      const dark =
        document.body.classList.contains(
          'dark-mode'
        );

      localStorage.setItem(
        'theme',
        dark ? 'dark' : 'light'
      );

      modeBtn.textContent =
        dark ? '☀️' : '🌙';

    }
  );

}
