function togglePlayer(albumId) {
  // Ocultar todos los reproductores excepto el seleccionado
  document.querySelectorAll(".player").forEach(player => {
    if (player.id !== `player-${albumId}`) {
      player.style.display = "none";
    }
  });

  // Alternar el reproductor actual
  const player = document.getElementById(`player-${albumId}`);
  const isVisible = player.style.display === "flex";
  player.style.display = isVisible ? "none" : "flex";
}

function playTrack(file, albumId) {
  const audio = document.getElementById(`audio-${albumId}`);
  const vinilo = document.getElementById(`vinilo-${albumId}`);

  // Pausar todos los demás audios
  document.querySelectorAll("audio").forEach(a => {
    if (a !== audio) a.pause();
  });

  // Detener otros vinilos
  document.querySelectorAll(".vinilo").forEach(v => {
    if (v !== vinilo) v.classList.remove("spin");
  });

  // Reproducir el audio actual
  audio.src = file;
  audio.play();

  // Girar vinilo solo del álbum actual
  vinilo.classList.add("spin");

  // Detener giro al terminar
  audio.addEventListener("ended", () => vinilo.classList.remove("spin"));
}
