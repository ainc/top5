import DS from 'ember-data';

export default DS.Model.extend({
    top5: DS.belongsTo('top5'),
    name: DS.attr(),
    finished: DS.attr('boolean')
});
