import Ember from 'ember';

export default Ember.Controller.extend({
    formValues: {
        // priority: '',
        content: '',
    },

    actions: {
        save() {
            const goal = this.store.createRecord('bigThing', {
                name: this.formValues.content,
                finished: false,
                // top5: this.get('model'),
            });
            goal.save();
            goal.set('top5', this.get('model'));
            this.set('formValues', {});
        }
    }
});
