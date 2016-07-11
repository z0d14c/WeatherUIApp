describe('MapService', function () {
    var _mapService, _leaflet;

    beforeEach(function () {
        bard.appModule('app');
        bard.appModule('app.maps');
        bard.inject('MapService', 'leaflet');
        _leaflet = leaflet;
        _mapService = MapService;
    });

    // note: testing for some of these functions is a little weird,
    // mainly because a lot of the logic is in Leafletjs and
    // 1. Leaflet is presumably unit-tested itself
    // 2. a lot of the "meat" of the logic is in Leaflet
    // which itself does a bit of both HTTP requests and DOM manipulation,
    // which we try to abstract away from unit tests for the most part.
    // Therefore, I've chosen to think about unit tests in this module
    // as more of checking to "make sure" the right Leaflet functions
    // are being called and the parts of state that concern our app
    // are being mutated rather than writing unit tests for the
    // 3rd party library.
    describe('MapService', function () {
        it('should be created successfully', function () {
            expect(_mapService).not.toEqual(undefined);
        });
        it('should have a default location ', function () {
            var defaultLocation = _mapService.getCurrentLocation();
            expect(defaultLocation.lat).toBeDefined();
            expect(defaultLocation.long).toBeDefined();
            expect(defaultLocation.name).toBeDefined();
        });
    });

    describe('functions -- ', function() {
        // only need to mockservice once, otherwise errors occur
        beforeAll(function () {
            bard.mockService(_leaflet, {
                tileLayer: {
                    addTo: function () {
                    }
                },
                map: {
                    setView: function () {
                        return {
                            setView: function(){}
                        }
                    }
                },
                default: {}
            });
        });
        describe('initializeMap function', function () {
            beforeEach(function () {
                _mapService.initializeMap("mapcontainer");
            });
            it('should call leaflet.map', function () {
                expect(_leaflet.map.called).toEqual(true);
            });
            it('should call leaflet.tileLayer', function () {
                expect(_leaflet.tileLayer.called).toEqual(true);
            });
        });

        describe('getCurrentLocation function ', function () {
            it('should return updated location after its changed', function () {
                _mapService.initializeMap('mapcontainer');
                _mapService.setMap(100, 200, 300, 'testname');
                var currentLocation = _mapService.getCurrentLocation();
                expect(currentLocation.long).toEqual(100);
                expect(currentLocation.lat).toEqual(200);
                expect(currentLocation.name).toEqual('testname');
            });
        });
    });

});