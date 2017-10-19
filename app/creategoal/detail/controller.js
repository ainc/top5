import Ember from 'ember';

export default Ember.Controller.extend({
    formValues: {
        // priority: '',
        content: '',
    },

    actions: {
        save() {
            // if (this.formValues.priority == 'bigThing') {
                const goal = this.store.createRecord('bigThing', {
                    name: this.formValues.content,
                    finished: false,
                });
                goal.save();
                this.set('formvalues', {});
            // }
        }
    }
});
