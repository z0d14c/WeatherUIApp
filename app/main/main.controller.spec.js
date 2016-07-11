describe('MainController', function() {
    var controller, _mapService, scope;

    beforeEach(function () {
        bard.appModule('app');
        bard.appModule('app.main');
        bard.inject('$controller', '$rootScope', 'MapService');
        _mapService = MapService;
        scope = $rootScope.$new();
        bard.mockService(_mapService, {
           default: {}
        });
        controller = $controller('MainController', {$scope: scope});
    });

    describe('MainController', function () {
        it('should be created successfully', function () {
            expect(controller).not.toEqual(undefined);
        });
        it('should call initializeMap function', function () {
            expect(_mapService.initializeMap.calledOnce).toEqual(true);
        });
    });
});