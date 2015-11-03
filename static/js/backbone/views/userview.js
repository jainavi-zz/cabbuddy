jQuery(function() {
	var UserList = Backbone.View.extend({
		el: '#bs-example-navbar-collapse',
		initialize: function () {
	        console.log('Login View Initialized');
	    },
	    events: {
        	'click #sign-in':  'loadSigninDialog',
    	},
		render: function() {
			
		},

		loadSigninDialog: function() {
			console.log ("Avinash")
			$('#signin-modal').modal();
		}
	});

	
	if (!window.CB) {
    	window.CB = {};
  	}
  	CB.UserList = UserList;
});
