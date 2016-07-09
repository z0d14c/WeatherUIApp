(function () {
    'use strict';

    angular
        .module('app.maps')
        .factory('MapResource', MapResource);
    var rootUrl = 'https://api.mapbox.com';
    MapResource.$inject = ['$resource'];
    /* @ngInject */
    function MapResource($resource) {
        return $resource(rootUrl, {}, {
            geocode: {
                method: 'GET',
                url: rootUrl + '/geocoding/v5/mapbox.places/:location'
            }
        });
    }
})();
