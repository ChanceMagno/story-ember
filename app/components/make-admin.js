import Ember from 'ember';

export default Ember.Component.extend({
  isAdmin: false,
  actions: {
    makeAdmin() {
      this.sendAction('makeAdmin')
      // this.set('isAdmin', true);
    }
  }
});
