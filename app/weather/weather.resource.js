(function () {
    'use strict';

    angular
        .module('app.weather')
        .factory('WeatherResource', WeatherResource);
    WeatherResource.$inject = ['$resource'];
    /* @ngInject */
    function WeatherResource($resource) {
        return $resource("/api/weather/:location", {}, {
            get: {
                method: 'GET'
            }
        });
    }
})();
