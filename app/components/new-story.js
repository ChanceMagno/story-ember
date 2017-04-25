import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveStory() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        img: this.get('img'),
        text: this.get('text')
      };
      this.sendAction('saveStory', params);
    }
  }
});
