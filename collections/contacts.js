Contacts = new Meteor.Collection('contacts');

Meteor.methods({

	addContact: function(contact) {
		return Contacts.insert(contact);

		//Soit je fait un thorw Meteor.Error();
		//Soit je retourne ce que je veut.
	},

	_deleteContactById: function(id) {
		var result = {};

		nb_removed = Contacts.remove(id);
		if (nb_removed === 0) {
			result.warning = "Aucun élément n'a été supprimé. Peut-être l'élément sélectionné n'existe pas ou plus ?";
		}
		return result;
	},

	updateContactById: function(id, contact) {
		return Contacts.update(id, contact);
	}
});
