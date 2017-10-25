/**
 * Created by pglah on 23.10.2017.
 */

var map = L.map('map');
var myLayer;

$(window).on("resize", function () { $("#map").height($(window).height()); map.invalidateSize(); }).trigger("resize");


window.onload = function () {


    map.setView([43.83, 4.35], 6);


    /**
     * Leaflet functions which builds the map with layers and menu to fade in or out polygon
     * Source: https://jsfiddle.net/adegbelo/yrvja9p9/
     * @param event
     */

        //

    var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);





};
