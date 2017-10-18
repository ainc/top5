import Ember from 'ember';

export default Ember.Route.extend({
    session: Ember.inject.service(),
    user: Ember.inject.service(),
    beforeModel: function() {
        return this.get('session').fetch()
        .then(() => {
            return this.get('user').loadCurrentUser();
        })
        .catch(function() {});
    },
    actions: {
        signIn: function(provider) {
            this.get('session').open('firebase', { provider }).then(function(data) {
            });
        },
        signOut: function() {
            this.get('session').close();
        }
    }
});
