import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('list', function() {
    this.route('full');
  });
  this.route('creategoal', function() {
    this.route('detail', { path: '/detail/:top5_id' });
  });
  this.route('register');
  // this.route('/');
});

export default Router;
