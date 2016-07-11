(function() {
    angular.module('app.weather')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = ['locationInfo', 'WeatherService'];
    function WeatherController(locationInfo, WeatherService) {
        var vm = this;
        vm.data = locationInfo;
        vm.dayRange = _dayRange(24);
        vm.tableConfig = WeatherService.getTableConfig();
        activate();

        // init function
        function activate() {
            console.log('vm.data ', vm.data);
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