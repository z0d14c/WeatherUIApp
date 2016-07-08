// store mapbox config variables here
angular.module('app.maps')
    .service('MapService', MapService);

MapService.$inject = ['mapbox'];
function MapService(mapbox) {
    
    function _initializeMap(elementID){
        var map = L.map(elementID).setView([51.505, -0.09], 13);
        L.tileLayer(mapbox.apiUrl, {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: mapbox.apiID,
            accessToken: mapbox.accessToken
        }).addTo(map);
        return map;
    }

    return {
        initializeMap: _initializeMap
    }
}