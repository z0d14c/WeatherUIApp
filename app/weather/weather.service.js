(function () {
    angular.module('app.maps')
        .service('WeatherService', WeatherService);

    WeatherService.$inject = ['WeatherResource'];
    function WeatherService(WeatherResource) {
        var dataFields = ['humidity', 'apparentTemperature', 'temperature',
        'precipProbability', 'summary'];
        var dataColumns = [
            'Humidity', 'Apparent Temp. (F)', 'Temp. (F)', 'Precip. Prob.', 'Summary'
        ];
        /*
        * maps weather data from darksky to individual arrays
        * @name _extractWeatherData
        * @function
        * @param locationData {Object} obj containing individual field arrays
        * return {Object} mapped object of relevant weather data
         */
        function _extractWeatherData(locationData) {
            var dataObj = {};
            for(var i=0; i<24; i++) {
                dataFields.forEach(function(key, val) {
                    if(!dataObj[key]) {
                        dataObj[key] = [];
                    }
                    dataObj[key].push(locationData[i][key]);
                });
            }
            return dataObj;
        }

        // hits our api to query darksky for relevant weather data
        // note: have to hit our api first because of CORS
        function _getWeatherData(location){
            return WeatherResource.get({location: location}).$promise;
        }

        // return object of fields and columns
        function _getTableConfig(){
            return {
                'columnNames': dataColumns,
                'columnKeys': dataFields
            }
        }

        return {
            getWeatherData: _getWeatherData,
            extractWeatherData: _extractWeatherData,
            getTableConfig: _getTableConfig
        }
    }
})();