var routes = new Routes();

$(document).on('pageinit', '#pgHome', function() {
var viewNewRoute = new NewRoute({collection: routes, el: '#pgHome'});
});

$(document).on('pageinit', '#pgMisRutas', function() {
var viewEditRoute = new EditRoute({collection: routes, el: '#pgEditarRuta'});
var viewListRoutes = new ListRoutes({collection: routes, el: '#pnRutas'});
viewListRoutes.editRoute(viewEditRoute);
});

$(document).on('pageinit', '#pgMapa', function() {
var viewMap = new Map({collection: routes, el: '#pgMapa'});
});