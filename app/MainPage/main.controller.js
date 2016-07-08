angular.module('app.main')
.controller('MainController', MainController);

MainController.$inject = ['MapService'];
function MainController(MapService) {
    var vm = this;
    activate();

    // activate function runs when controller is instantiated
    // basically an "init" function
    function activate() {
        vm.mapObject = MapService.initializeMap('mapcontainer');
    }
}