/*** 	This class implements individual routes		***/

var Route = Backbone.Model.extend({
    initialize: function() {
        if (!this.id) this.set('id', _.uniqueId());
        if (!this.has("positions")) this.set('positions', []);
        if (!this.has("date")) this.set('date', Date());
    },
    defaults: {
        title: 'Undefined',
        visible: 'on',
        color: '#000000',
    },
});
