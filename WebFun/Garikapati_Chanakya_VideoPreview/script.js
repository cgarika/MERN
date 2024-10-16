const video = document.querySelector("video");

function startPreview() {
  video.muted = true;
  video.play();
}

function stopPreview() {
  video.pause();
}

video.addEventListener("mouseenter", () => {
  startPreview();
});

video.addEventListener("mouseleave", () => {
  stopPreview();
});
