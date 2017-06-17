$(document).one('pageshow', '#pgMapa', function(e, data) {
    // obtener altura del contenedor
    var header = $("#pgMapa").find("div[data-role='header']:visible");
    var footer = $("#pgMapa").find("div[data-role='footer']:visible");
    var content = $("#pgMapa").find("div.ui-content:visible");
    var viewport_height = $(window).height();
    var content_height = viewport_height - header.outerHeight() - footer.outerHeight();
    if ((content.outerHeight() - header.outerHeight() - footer.outerHeight()) <=
        viewport_height) {
        content_height -= (content.outerHeight() - content.height());
    }
    $('#pnMapa').height(content_height);
    // crear mapa    
});

var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('pnMapa'), {
        center: {
            lat: 43.3186188,
            lng: -1.9860118000000284
        },
        zoom: 18
    });
}
