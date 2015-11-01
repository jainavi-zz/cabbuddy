var AppRouter, app_router;

AppRouter = Backbone.Router.extend({
  routes: {
    "*actions": "defaultRoute"
  }
});

app_router = new AppRouter;

app_router.on('route:defaultRoute', function(actions) {
  alert(actions);
});

Backbone.history.start();
