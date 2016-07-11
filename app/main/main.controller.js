(function() {
    angular.module('app.main')
        .controller('MainController', MainController);

    MainController.$inject = ['MapService', '$state'];
    function MainController(MapService, $state) {
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

        function _weatherView(){
            $state.go('weather');
        }

    }
})();