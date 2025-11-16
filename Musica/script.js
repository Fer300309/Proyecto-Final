// ===== TOGGLE PLAYER =====

function togglePlayer(albumId) {
  // Cerrar todos menos el seleccionado
  document.querySelectorAll(".player").forEach(player => {
    if (player.id !== `player-${albumId}`) {
      player.classList.remove("active");
    }
  });

  // Alternar el reproductor actual
  const player = document.getElementById(`player-${albumId}`);
  player.classList.toggle("active");
}



function playTrack(file, albumId) {
  const audio = document.getElementById(`audio-${albumId}`);
  const vinilo = document.getElementById(`vinilo-${albumId}`);

  // Pausar todos los demás audios
  document.querySelectorAll('audio').forEach(a => {
    if (a !== audio) a.pause();
  });

  // Detener otros vinilos
  document.querySelectorAll('.vinilo').forEach(v => {
    if (v !== vinilo) v.classList.remove('spin');
  });

  // Reproducir el audio actual
  audio.src = file;
  audio.play();

  // Girar vinilo solo del álbum actual
  vinilo.classList.add('spin');

  audio.addEventListener('ended', () => vinilo.classList.remove('spin'));
}


// ===== MENÚ HAMBURGUESA =====
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
});

// ===== MÚSICA DE FONDO =====
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
