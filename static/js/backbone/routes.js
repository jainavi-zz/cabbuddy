var AppRouter, app_router;

AppRouter = Backbone.Router.extend({
  routes: {
    "*actions": "defaultRoute"
  }
});

app_router = new AppRouter;

app_router.on('route:defaultRoute', function(actions) {
	$(document).ready(function() {
		new CB.UserList().render();
	});
});

Backbone.history.start();
