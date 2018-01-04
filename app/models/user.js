import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    user: Ember.inject.service(),
    // name: Ember.computed('user', function() {
    //     const user = this.get('user');
    //     const profile = user.getBasicProfile();
    //     return profile.getName();
    // }),
    // top5s: DS.hasMany('top5'),
});
