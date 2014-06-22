

Template.contact_form.created = function() {

};

Template.contact_form.helpers({
	'legend': function() {
		return this.name || 'Nouveau contact';
	}
});
