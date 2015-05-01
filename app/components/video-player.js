import Ember from 'ember';

export default Ember.Component.extend({
  controls: true,
  currentTime: 0,
  // duration: 10,
  height: 400,
  width: 600,
  loop: false,
  muted: false,
  playbackRate: 1,
  volume: 0,
  isPaused: true,

  actions: {
    playPause: function() {
      this.toggleProperty('isPaused');
    }
  }
});
