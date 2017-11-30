import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  goals: DS.hasMany('goal'),
  // personals: DS.hasMany('personal', { async: true }),
  // user: DS.attr('string'),
  timeframe: DS.attr('string'),
});
