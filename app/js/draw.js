/**
 * Created by pglah on 23.10.2017.
 */
// Initialise the FeatureGroup to store editable layers
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

/**
 * Enables the user to draw certain features on the map
 * @type {{edit: {featureGroup: *}, draw: {polyline: {shapeOptions: {color: string}}, polygon: {showArea: boolean, allowIntersection: boolean, drawError: {color: string, message: string}, shapeOptions: {color: string}}, circle: {shapeOptions: {color: string}}, rectangle: {shapeOptions: {color: string}}}}} draw options
 */
var drawOptions = {
    edit: {
        featureGroup: drawnItems
    },
    draw: {
        polyline: false,
        polygon:false,
        circle: false,
        marker:false,
        rectangle: {
            shapeOptions: {
                color: '#4c4cff'
            }
        }
    }
};


var editOnly = {
    edit: {
        featureGroup: drawnItems
    },
    draw: false
};




var drawControl = new L.Control.Draw(drawOptions);
var drawControlEditOnly = new L.Control.Draw(editOnly);
L.drawLocal.draw.toolbar.buttons.rectangle = 'Show the area you are interested in.';


map.addControl(drawControl);


// if a shape is drawn, add it to the layer
map.on('draw:created', function (e) {
    var layer = e.layer;
    layer.addTo(drawnItems);
    drawControl.remove(map);
    drawControlEditOnly.addTo(map);
});

map.on('draw:deleted', function (e){
    check = drawnItems.getLayers().length;
    if(check===0){
        drawControlEditOnly.remove(map);
        drawControl.addTo(map);
    }
});

var coordinates = function () {
    map.on('draw:created', function (e) {
        var layer = e.layer;
        var latlon = layer.getLatLngs();
        console.log(latlon);

    });
};
