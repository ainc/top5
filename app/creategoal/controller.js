import Ember from 'ember';

export default Ember.Controller.extend({
    formValues: {
        name: '',
    },

    actions: {
        save() {
            const goal = this.store.createRecord('top5', this.formValues);
            goal.save();
            this.set('formValues', {});
        }
    }
});
