import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('story', params.story_id);
  },
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
