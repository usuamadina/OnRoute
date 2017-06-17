var EditRoute = Backbone.View.extend({

    render: function() {
        this.$('#txtEditarTitulo').val(this.model.get('title')).textinput('refresh');
        this.$('#txtEditarFecha').val(this.model.get('date')).textinput('refresh');
        this.$('#txtEditarColor').val(this.model.get('color')).textinput('refresh');
        this.$('#txtEditarVisualizar').val(this.model.get('visible')).flipswitch('refresh');
    },
    


    events: {
        'change #txtEditarTitulo': function() {
            this.model.set('title', this.$('#txtEditarTitulo').val());
        },
        'change #txtEditarColor': function() {
            this.model.set('color', this.$('#txtEditarColor').val());
        },
        'change #txtEditarVisualizar': function() {
            this.model.set('visible', this.$('#txtEditarVisualizar').val());
        },
        'click #btBorrar': function() {
            this.collection.remove(this.model);
            $(':mobile-pagecontainer').pagecontainer('change', '#pgMisRutas');
        }
    },

});
