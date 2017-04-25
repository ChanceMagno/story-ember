import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('story');
  },
  isAdmin: false,
  actions: {
    makeAdmin() {
      this.set('isAdmin', true);
    }
  }
});
