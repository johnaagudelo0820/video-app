
class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlugins();
  }

  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }

  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  mute() {
    this.media.muted = true;
  }

  unmute() {
    this.media.muted = false;
  }
  
  tooglePlay() {
    if (this.media.paused) {
      this.play();
      return;
    }
    this.pause();
  }
}

export default MediaPlayer;