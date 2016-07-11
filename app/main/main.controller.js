(function() {
    angular.module('app.main')
        .controller('MainController', MainController);

    MainController.$inject = ['MapService', '$state', 'moment'];
    function MainController(MapService, $state, moment) {
        var vm = this;
        var mapContainerId = 'mapcontainer';
        var defaultLocation = '402 vernet st';
        vm.location = MapService.getCurrentLocation();
        vm.setLocation = _lookupLocation;
        vm.weatherView = _weatherView;

        activate();

        // activate function runs when controller is instantiated
        // basically an "init" function
        function activate() {
            MapService.initializeMap(mapContainerId);
            _lookupLocation(defaultLocation);
        }

        // looks up a location, sets it in the mapcontainer, saves in mapservice
        function _lookupLocation(location) {
            MapService.lookupLocation(location);
        }

        //return unixTime from user input
        function _unixTime(){
            var locationDate = moment(vm.date);
            var locationTime = vm.time.split(":");
            locationDate.hours(locationTime[0]);
            locationDate.minute(locationTime[1]);
            return locationDate.unix();
        }

        // query darksky api for weather data then pass that off
        // to the weather data view
        function _weatherView(){
            var currentLocation = MapService.getCurrentLocation();
            var locationString = currentLocation.long
                + "," + currentLocation.lat
                + "," + _unixTime();
            $state.go('weather', {'location': locationString});
        }

    }
})();