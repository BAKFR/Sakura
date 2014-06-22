
Template.edit.helpers({
    'show_item_form': function() {
        return Template[this.item_type + '_form'](this.item_model);
    }
});

Template.edit.events({
	'submit form': function(evt) {
		evt.preventDefault();
		evt.target.getElementsByTagName('fieldset')[0].disabled = "disabled";

		var item = {
			name: evt.target.name.value,
			phone: evt.target.phone.value,
			email: evt.target.email.value
		};

		var id = this.item_model._id;

		console.log(item);

		Meteor.call('updateContactById', id, item, function(error, result) {
			console.log('test');
			if (error) {
				window.App.Notifications.addError(error.message);
			} else {
				console.log(result);
				Router.go('show', { _id: id });
			}
		});
	}

});
