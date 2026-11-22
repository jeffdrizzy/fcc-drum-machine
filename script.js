const names = {
  Q: 'Heater 1',
  W: 'Heater 2',
  E: 'Heater 3',
  A: 'Heater 4',
  S: 'Clap',
  D: 'Open HH',
  Z: 'Kick n Hat',
  X: 'Kick',
  C: 'Closed HH'
};

const display = document.getElementById('display');

function playPad(key) {
  key = key.toUpperCase();
  if (!names[key]) return;
  const audio = document.getElementById(key);
  if (!audio) return;
  audio.currentTime = 0;
  const playPromise = audio.play();
  if (playPromise) playPromise.catch(() => {});
  display.textContent = names[key];
}

document.querySelectorAll('.drum-pad').forEach(pad => {
  pad.addEventListener('click', () => playPad(pad.querySelector('audio').id));
});

document.addEventListener('keydown', (e) => {
  playPad(e.key);
});
