
Template.list.helpers({

	'display_alerts': function() {
		return Deps.nonreactive(window.App.Notifications.display);
	},

	'show_item_head': function() {
		return Template[this.item_type + '_head_table']();
	},

	'show_item_row': function(item_type) {

		this.CRUD = {};
		this.CRUD.actions = Template.CRUD_actions({ _id: this._id });

		return Template[item_type + '_row'](this);
	}
});


Template.list.events({
	'click .delete-link': function(evt) {
		var post = this;

		evt.preventDefault();
		Meteor.call('deleteContactById', post._id + 'e', function(error, result) {
			if (error) {
				window.App.Notifications.addError(error.message);
			} else {
				if (result.warning) {
					window.App.Notifications.addWarning(result.warning);
				}
			}
		});
	}
});
