
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'not_found'
});


Router.map(function() {

    this.route('home', {
        path: '/'
    });

    this.route('about', {
        path: '/about'
    });


	this.route('list', {
		path: '/list',

		waitOn: function() {
			return Meteor.subscribe('contacts');
		},

		data: function() {
			return {
				item_type: 'contact',
				item_show_type: 'Contacts',
				items: Contacts.find()
			};
		}

	});

	this.route('create', {
		path: '/create',

		data: function() {
			return {
				item_type: 'contact',
				item_show_type: 'Contacts'
			};
		}
	});

	this.route('show', {
		path: '/show/:_id',

		waitOn: function() {
			return Meteor.subscribe('contacts');
		},

		data: function() {
			return {
				item_type: 'contact',
				item_show_type: 'Contacts',
				item_model: Contacts.findOne({_id: this.params._id})
			};
		}
	});

	this.route('edit', {
		path: '/edit/:_id',

		waitOn: function() {
			return Meteor.subscribe('contacts');
		},

		data: function() {
			return {
				item_type: 'contact',
				item_show_type: 'Contacts',
				item_model: Contacts.findOne({_id: this.params._id})
			};
		}
	});

	this.route('delete');
});
