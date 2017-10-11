import Ember from 'ember';

export default Ember.Controller.extend({
    formValues: {
        email: '',
        password: ''
    },
    
    actions: {
        save() {
            this.firebase.auth().createUserWithEmailAndPassword(this.formValues.email, this.formValues.password);
            this.set('formValues', {});
            this.transitionToRoute('index');
        }
    }
});
