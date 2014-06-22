
Meteor.publish('contacts', function() {
	var contacts = Contacts.find();
	return contacts;
});
