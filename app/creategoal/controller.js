import Ember from 'ember';

export default Ember.Controller.extend({
    formValues: {
        name: '',
        bigThings: [],
        personals: []
    },

    actions: {
        save() {
            const goal = this.store.createRecord('top5', {
                name: this.formValues.name,
                bigThings: [],
                personals: [],
            });
            // debugger;
            goal.get('bigThings').then(function(bigThings) {
                bigThings.addObject(this.store.createRecord({ name: this.formValues.bigThings.bigThing1, finished: false }))
                bigThings.addObject(this.store.createRecord({ name: this.formValues.bigThings.bigThing2, finished: false }))
                bigThings.addObject(this.store.createRecord({ name: this.formValues.bigThings.bigThing3, finished: false }))
                bigThings.addObject(this.store.createRecord({ name: this.formValues.bigThings.bigThing4, finished: false }))
                bigThings.addObject(this.store.createRecord({ name: this.formValues.bigThings.bigThing5, finished: false }))
            });
            goal.save();
            this.set('formValues', {});
            this.transitionToRoute('list');
        }
    }
});
