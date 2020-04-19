import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('video')
const button = document.querySelector('#playButton')
const muteButton = document.querySelector('#muteButton');

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});
button.onclick = () => { player.tooglePlay() }
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute()
    return
  }
  player.mute()
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message)
  })
}