/****	This class defines a route collection ****/
var Routes= Backbone.Collection.extend({
    model: Route,
    initialize: function() {
        this.on("add", function(model, col, opt) {
            console.log('Routes:add ' + model.id);
        });
        this.on("remove", function(model, col, opt) {
            console.log('Routes:remove ' + model.id);
        });
        this.on("change", function(model, opt) {
            console.log('Routes:change ' + model.id);
        });
    }
});
