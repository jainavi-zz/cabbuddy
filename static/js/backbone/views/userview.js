jQuery(function() {
	var UserList = Backbone.View.extend({
		el: '.page',
		initialize: function () {
	        console.log('Login View Initialized');
	    },
		render: function() {
			this.$el.html ('CONTENT SHOULD SHOW HERE');
		}
	});

	if (!window.CB) {
    	window.CB = {};
  	}
  	CB.UserList = UserList;
});
