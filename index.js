const video = document.querySelector("#video");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");

play.addEventListener("click", playVideo);
pause.addEventListener("click", pauseVideo);
backward.addEventListener("click", backwardVideo);
forward.addEventListener("click", forwardVideo);

function playVideo() {
  video.play();
  play.hidden = true;
  pause.hidden = false;
}

function pauseVideo() {
  video.pause();
  play.hidden = false;
  pause.hidden = true;
}
function backwardVideo() {
  //video.currentTime = video.currentTime - 10;
  video.currentTime -= 10;
  console.log("retroceder 10 segundos", video.currentTime);
}
function forwardVideo() {
  video.currentTime = video.currentTime + 10;
  console.log("adelantar 10 segundos", video.currentTime);
}

const progress = document.querySelector("#progress");
video.addEventListener("loadedmetadata", handleLoaded);
video.addEventListener("timeupdate", handleTimeUpdate);

function handleLoaded() {
  progress.max = video.duration;
  console.log("kakkak", video.duration);
}

function handleTimeUpdate() {
  progress.value = video.currentTime;
}

progress.addEventListener("input", handleInput);
function handleInput() {
  video.currentTime = progress.value;
  console.log(progress.value);
}
