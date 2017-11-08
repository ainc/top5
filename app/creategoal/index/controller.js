import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),

    formValues: {
        timeframe: '',
    },

    actions: {
        save() {
            const top5 = this.store.createRecord('top5', {
                name: this.session.content.currentUser.displayName,
                user: this.session.content.uid,
                timeframe: this.formValues.timeframe,
            });
            top5.save();
            this.set('formValues', {});
            this.transitionToRoute('creategoal.detail', top5.id);
        }
    }
});
