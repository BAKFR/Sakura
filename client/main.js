
/*

On subscribe toutes les souscriptions
générales (setings, messages users, ...)


// Settings
Meteor.subscribe('settings', function(){
  // runs once after settings have loaded
  Session.set('settingsLoaded',true);
  analyticsInit();
});


On peut définir des variables de sessin avec
Session.set('key', value);
*/


window.App = window.App || {};



window.App.Notifications.init();

Meteor.startup(function() {
	console.log("Startup");

//	App.router = new Router();
//	Backbone.history.start({pushState: true});

});
