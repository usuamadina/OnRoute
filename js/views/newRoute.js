var NewRoute = Backbone.View.extend({

    initialize: function() {
        this.recording = false;
        this.timerClock = null;
        this.timerGps = null;
        this.clockCounter = null;
        this.render();
    },
    startRoute: function() {
        this.model = new Route();
        console.log('startRoute(' + this.model.id + ')');
        // recuperar título de la ruta
        var title = this.$('#txtTitulo').val();
        if (!title || title.length == 0) title = "Default";
        this.model.set("title", title);
        // comenzar grabación de ruta (timers, ...)
        this.recording = true;
        this.clockCounter = 0;
        var self = this;
        this.timerClock = setInterval(function() {
            self.clockCounter++;
            self.render();
        }, 1000);
        this.timerGps = setInterval(function() {
            self.readGps();
        }, 1000);
        // pintar vista
        this.render();
    },

        stopRoute: function() {          
       // console.log('stopRoute(' + this.model.id + ')');
        this.recording = false;
        // parar timers
        clearInterval(this.timerClock);
        clearInterval(this.timerGps);
        // guardar ruta
        this.collection.add(this.model);
        // limpiar modelo
        this.model = null;
        // pintar vista
        this.render();
    },

        readGps: function() {
        // init
        window.inc = typeof(inc) == 'undefined' ? 0.00005 : window.inc;
        window.lat = typeof(lat) == 'undefined' ? 38.695015 : window.lat;
        window.lng = typeof(lng) == 'undefined' ? -0.476049 : window.lng;
        window.dir = typeof(dir) == 'undefined' ? Math.floor((Math.random() * 4)) : window.dir; 
        	// numbers 0, 1, 2, 3(0 up, 1 right, 2, down, 3 left)
            // generate direction (randomly)
            // it is more likely to follow the previous direction
        var newDir = Math.floor((Math.random() * 4)); // number 0,1,2,3
        if (newDir != (dir + 2) % 4) dir = newDir;
        switch (dir) {
            case 0: // up
                lat += inc;
                break;
            case 1: // right
                lng += inc;
                break;
            case 2: // down
                lat -= inc;
                break;
            case 3: // left
                lng -= inc;
                break;
            default:
        }
        var pos = { lat: lat, lng: lng };
        // add new position to the route
        var positions = this.model.get('positions');
        positions.push(pos);
        this.model.set('positions', positions);
    },

        render: function() {
        if (this.recording) {
            this.$('#txtTitulo').val(this.model.get('title')).textinput('refresh');
            // show panel change button text

            this.$('#btGrabar').val('Parar').button('refresh');
            this.$('#lblInfo').text('Guardando ruta ' + this.model.get('title') + ' ...');
            var minutes = parseInt(this.clockCounter / 60);
            var seconds = this.clockCounter % 60;
            var hours = parseInt(minutes / 60);
            minutes = minutes % 60;
            this.$('#lblReloj').text("" + (hours < 10 ? "0" : "") + hours + ":" +
                (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
            this.$('#pnInfo').css('visibility', 'visible');
        } else {
            // hide panel change button text
            
            this.$('#btGrabar').val('Empezar ruta').button('refresh');
            this.$('#pnInfo').css('visibility', 'hidden');

        }
    },

        events: {
        'click #btGrabar': function() {
            if (this.recording) {                
                this.stopRoute();
            }                
            else this.startRoute();
        }
    },
});
