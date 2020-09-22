var instance = new vidbg('.video', {
  mp4: 'video/world.mp4', // URL or relative path to MP4 video
  webm: 'video/world.webpm', // URL or relative path to webm video
  poster: 'image/poster.jpg', // URL or relative path to fallback image
  overlay: false, // Boolean to display the overlay or not
});
let rellax;

function rocketRellax() {
  if (document.body.clientWidth > 576) {
    if (!rellax) {
      rellax = new Rellax('.rocket__image');
    }
  } else if (rellax) {
    rellax.destroy();
    rellax = null;
  }
}
rocketRellax()
window.addEventListener('resize', () => {
  rocketRellax()
});
var instance = new vidbg('.video', {
  mp4: 'video/world.mp4', // URL or relative path to MP4 video
  webm: 'video/world.webpm', // URL or relative path to webm video
  poster: 'image/poster.jpg', // URL or relative path to fallback image
  overlay: false, // Boolean to display the overlay or not
});
AOS.init();