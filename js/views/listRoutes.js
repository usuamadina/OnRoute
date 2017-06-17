var ListRoute = Backbone.View.extend({


    initialize: function() {
        var self = this;
        this.collection.on('add', function() { self.render(); });
        this.collection.on('remove', function() { self.render(); });
        this.collection.on('change:title', function() { self.render(); });
        this.render();
    }

        render: function() {
        // limpiar
        this.$el.html('<ul datarole=" listview " datafilter=" true "></ul>');
        // pintar rutas
        for (var i = 0; i < this.collection.size(); i++) {
            var m = this.collection.at(i);
            var str = '<li><a id="' + m.id + '" href="#">' + m.get('title') + '</a></li>'
            this.$el.find('[datarole="listview "]').append(str);
        }
        this.$el.find('[datarole="listview "]').listview();
    }


        editRoute: function(visitEditRoute) {
        this.visitEditRoute = visitEditRoute;
    }

    openEditRoute: function(e) {
        // recuperar id
        var id = $(e.target).attr('id');
        console.log('openEditRoute (' + id + ')');
        this.visitEditRoute.model = this.collection.get(id);
        $(':mobilepagecontainer').
        pagecontainer('change', '#pgeditRoute');
        this.visitEditRoute.render();
    }

        events: {
        'click a': 'openEditRoute'
    }



});
