import Ember from 'ember';

export default Ember.Controller.extend({
    formValues: {
        name: '',
        bigThings: [],
        personals: [],
    },

    actions: {
        save() {
            const goal = this.store.createRecord('top5', {
                name: this.formValues.name,
                bigThings: [
                    this.store.createRecord('bigThing', this.formValues.bigThings.bigThing1),
                    this.store.createRecord('bigThing', this.formValues.bigThings.bigThing2),
                    this.store.createRecord('bigThing', this.formValues.bigThings.bigThing3),
                    this.store.createRecord('bigThing', this.formValues.bigThings.bigThing4),
                    this.store.createRecord('bigThing', this.formValues.bigThings.bigThing5),
                ],
                personals: [
                    this.store.createRecord('personal', this.formValues.personals.personal),
                ],
            });
            goal.save();
            this.set('formValues', {});
        }
    }
});
