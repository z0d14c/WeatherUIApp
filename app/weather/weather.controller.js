(function() {
    angular.module('app.weather')
        .controller('WeatherController', WeatherController);

    // locationInfo resolved from route
    WeatherController.$inject = ['locationInfo', 'MapService', 'WeatherService'];
    function WeatherController(locationInfo, MapService, WeatherService) {
        var vm = this;
        vm.data = locationInfo;
        vm.dayRange = _dayRange(24);
        vm.tableConfig = WeatherService.getTableConfig();
        activate();

        // init function
        function activate() {
            vm.location = MapService.getCurrentLocation();
        }

        // fix to create proper 24 hour range for data display
        function _dayRange(n) {
            var returnArray = [];
            for(var i = 0; i < 24; i++) {
                returnArray.push(i);
            }
            return returnArray;
        }

    }
})();