/*
Template data:

  - item_type
  - item_show_type
  - item_model

*/

Template.show.helpers({
	'show_item': function() {
		return Template[this.item_type](this.item_model);
	}
});
