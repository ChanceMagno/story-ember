import Ember from 'ember';

export default Ember.Component.extend({
  displayEditStory: false,
  actions: {
    editStory() {
      this.set('displayEditStory', true);
      console.log(this.get('displayEditStory'));
    },
    updateStory(params) {
      this.set('displayEditStory', false);
    }
  }
});
