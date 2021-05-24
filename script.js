const isFullScreen = (document.fullscreenEnabled === true) ? "yes" : "no"
document.getElementById('fullscreen-avail').innerHtml = isFullScreen
document.getElementById('fullscreen-btn').addEventListener('click', function(e) {
toggleFullScreen()
})
function toggleFullScreen() {
 let elem = document.querySelector("#content");

  if (!document.fullscreenElement) {
    elem.requestFullscreen().catch(err => {
      alert(`Error attempting to enable full-screen mode: ${err.message} (					${err.name})`);
    });
  } else {
    document.exitFullscreen();
  }
}