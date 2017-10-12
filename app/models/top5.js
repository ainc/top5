import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  bigThings: DS.hasMany('bigThing', { async: false, inverse: null }),
  personals: DS.hasMany('personal', { async: false, inverse: null })
});
