import Ember from 'ember';

export default Ember.Controller.extend({
    formValues: {
        // priority: '',
        content: '',
    },

    actions: {
        save() {
            const top5 = this.get('model');
            const goal = this.store.createRecord('goal', {
                name: this.formValues.content,
                finished: false,
            });
            top5.get('goals').addObject(goal);
            goal.save().then(function() {
                return top5.save();
            });
            this.set('formValues', {});
        }
    }
});
