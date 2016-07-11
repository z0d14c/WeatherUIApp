(function () {
    angular.module('app.maps')
        .service('MapService', MapService);

    MapService.$inject = ['mapbox', 'MapResource', 'leaflet'];
    function MapService(mapbox, MapResource, leaflet) {

        // defaults to mi casa de Tejas
        var currentLocation = {
            long: 32.966519,
            lat: -96.72958,
            name: '402 Vernet St'
        };

        var map;

        // initializes a given map DOM element to a default location
        // @param elementId {String} id of map container div
        // @return map {Object} mapObj
        function _initializeMap(elementID) {
            map = leaflet.map(elementID).setView([currentLocation.long, currentLocation.lat], 13);
            _setTiles();
            return map;
        }

        /*
         * sets map to a given coordinates
         * @name _setMap
         * @function
         * @returns {Object} map object
         */
        function _setMap(long, lat, zoom, name) {
            map.setView([long, lat], zoom);
            currentLocation.long = long;
            currentLocation.lat = lat;
            currentLocation.name = name;
            _setTiles();
        }

        /*
         * calls Leaflet lib function to hit mapbox API for map tiles and apply them
         * to #mapcontainer div
         * @name _setTiles
         * @function
         * @returns {Object} map object
         */
        function _setTiles() {
            leaflet.tileLayer(mapbox.apiUrl, {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                maxZoom: 18,
                id: mapbox.apiID,
                accessToken: mapbox.accessToken
            }).addTo(map);
            return map;
        }

        /*
         * @name _lookupLocation
         * @function
         * @param location {String} location to look up
         * @return {Promise} resolves to json data for location
         */
        function _lookupLocation(location) {
            var plusJoinedLocation = _plusJoin(location);
            return MapResource.geocode({
                'location': plusJoinedLocation + '.json',
                'access_token': mapbox.accessToken
            })
                .$promise
                .then(function (foundLocs) {
                    var found = foundLocs.features[0];
                    var coordinates = found.center;
                    _setMap(coordinates[1], coordinates[0], 13, location);
                });
        }

        // returns current stored location details
        function _getCurrentLocation() {
            return currentLocation;
        }

        // converts a given string to a "+" joined string
        // i.e. '402 vernet st' -> '402+vernet+st'
        // @param location {String} location string to +-join
        function _plusJoin(location) {
            return location.split(" ").join("+");
        }

        return {
            initializeMap: _initializeMap,
            setMap: _setMap,
            lookupLocation: _lookupLocation,
            getCurrentLocation: _getCurrentLocation
        }
    }
})();