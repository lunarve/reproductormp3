const tracks = [
  {
    title: "Bajo las Cenizas, el Fuego",
    src: "media/Bajo%20las%20Cenizas,%20el%20Fuego.mp3",
  },
  {
    title: "Eco de la Tierra",
    src: "media/Eco%20de%20la%20Tierra.mp3",
  },
  {
    title: "El Silencio Tras el Nombre",
    src: "media/El%20Silencio%20Tras%20el%20Nombre.mp3",
  },
  {
    title: "Eres el Camino",
    src: "media/Eres%20el%20Camino.mp3",
  },
  {
    title: "Pulso del Ser",
    src: "media/Pulso%20del%20Ser.mp3",
  },
];

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const trackName = document.getElementById('track-name');

let current = 0;

function loadTrack(index) {
  audio.src = tracks[index].src;
  trackName.textContent = tracks[index].title;
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

// Cargar la primera pista al inicio
loadTrack(current);
