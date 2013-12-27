require('./vendor/firebase');
var Backbone = require('./bower_components/backbone/backbone');
window.Backbone = Backbone;
window._ = require('underscore');
require('./bower_components/backfire/backbone-firebase');

module.exports = window.Backbone;