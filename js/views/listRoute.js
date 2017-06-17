var ListRoutes = Backbone.View.extend({

    initialize: function() {
        var self = this;
        this.collection.on('add', function() { self.render(); });
        this.collection.on('remove', function() { self.render(); });
        this.collection.on('change:title', function() { self.render(); });
        this.render();
    },


    editRoute: function(viewEditRoute) {
        this.viewEditRoute = viewEditRoute;
    },

    openEditRoute: function(e) {
        // recuperar id
        console.log("click openEditRoute");
        var id = $(e.target).attr('id');
        console.log('openEditRoute (' + id + ')');
        this.viewEditRoute.model = this.collection.get(id);
        $(':mobile-pagecontainer').pagecontainer('change', '#pgEditarRuta');
        this.viewEditRoute.render();
    },

    render: function() {
        // limpiar
        this.$el.html('<ul data-role="listview" data-filter="true"></ul>');
        // pintar rutas
        for (var i = 0; i < this.collection.size(); i++) {
            var m = this.collection.at(i);
            var str = '<li><a id="' + m.id + '" href="#">' + m.get('title') + '</a></li>'
            this.$el.find('[data-role="listview"]').append(str);
        }
        this.$el.find('[data-role="listview"]').listview();
    },

      events: {
        'click a':'openEditRoute',     
    }, 
      

});
