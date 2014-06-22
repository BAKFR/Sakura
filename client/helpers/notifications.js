
window.App = window.App || {};

window.App.Notifications = {

	init: function() {
		Session.set('notifications', {
			info: [],
			success:  [],
			warning: [],
			error: []
		});
	},

	addInfo: function(msg) {
		var notifs = Session.get('notifications');
		notifs.info.push(msg);
		Session.set('notifications', notifs);
	},

	addSuccess: function(msg) {
		var notifs = Session.get('notifications');
		notifs.success.push(msg);
		Session.set('notifications', notifs);
	},

	addWarning: function(msg) {
		var notifs = Session.get('notifications');
		notifs.warning.push(msg);
		Session.set('notifications', notifs);
	},

	addError: function(msg) {
		var notifs = Session.get('notifications');
		notifs.error.push(msg);
		Session.set('notifications', notifs);
	},

	display: function() {
		var result = '';
		var i;
		var alerts = Session.get('notifications');

		if (alerts.error.length) {
			result += '<div class="alert alert-danger" >';
			for (i = 0; i < alerts.error.length; i++) {
				result += '<p>' + alerts.error[i] + '</p>';
			}
			result += '</div>';
		}
		if (alerts.warning.length) {
			result += '<div class="alert alert-warning" >';
			for (i = 0; i < alerts.warning.length; i++) {
				result += '<p>' + alerts.warning[i] + '</p>';
			}
			result += '</div>';
		}
		if (alerts.success.length) {
			result += '<div class="alert alert-success" >';
			for (i = 0; i < alerts.success.length; i++) {
				result += '<p>' + alerts.success[i] + '</p>';
			}
			result += '</div>';
		}
		if (alerts.info.length) {
			result += '<div class="alert alert-info" >';
			for (i = 0; i < alerts.info.length; i++) {
				result += '<p>' + alerts.info[i] + '</p>';
			}
			result += '</div>';
		}

		window.App.Notifications.init();
		return result;
	}
};
