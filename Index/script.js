// ==== MENÚ HAMBURGUESA ====
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
});

// ==== MÚSICA DE FONDO ====
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
let isPlaying = true;

// Reproduce automáticamente
music.play();

musicBtn.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    musicBtn.classList.add('paused');
  } else {
    music.play();
    musicBtn.classList.remove('paused');
  }
  isPlaying = !isPlaying;
});