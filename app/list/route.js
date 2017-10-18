import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.findAll('top5', { include: 'bigThings,personals' });
    }
});
