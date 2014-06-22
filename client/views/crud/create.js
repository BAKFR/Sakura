
Template.create.helpers({
	'show_item_form': function() {
		return Template[this.item_type + '_form']();
	}
});

Template.create.events({
	'submit form': function(evt) {
		evt.preventDefault();
		evt.target.getElementsByTagName('fieldset')[0].disabled = "disabled";

		var item = {
			name: evt.target.name.value,
			phone: evt.target.phone.value,
			email: evt.target.email.value
		};

		Meteor.call('addContact', item, function(error, result) {
			if (error) {
				//error.reason
				//TODO: traiter le cas d'erreur
			} else {
				Router.go('show', { _id: result });
			}
		});
	}

});
