const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const trackName = document.getElementById('track-name');

let current = 0;
const tracks = [
  'assets/tracks/track1.mp3',
  'assets/tracks/track2.mp3'
];

function loadTrack(index) {
  audio.src = tracks[index];
  trackName.textContent = tracks[index].split('/').pop();
}

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '⏸️';
  } else {
    audio.pause();
    playBtn.textContent = '▶️';
  }
});

nextBtn.addEventListener('click', () => {
  current = (current + 1) % tracks.length;
  loadTrack(current);
  audio.play();
});

prevBtn.addEventListener('click', () => {
  current = (current - 1 + tracks.length) % tracks.length;
  loadTrack(current);
  audio.play();
});

loadTrack(current);
