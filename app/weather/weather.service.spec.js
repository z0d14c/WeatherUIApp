describe('WeatherService', function () {
    var _weatherService;

    beforeEach(function () {
        bard.appModule('app');
        bard.appModule('app.weather');
        bard.inject('WeatherService');
        _weatherService = WeatherService;
    });

    describe('getTableConfig function', function() {
       it('should return a set of columns/field values', function() {
          var tableConfig =  _weatherService.getTableConfig();
           expect(tableConfig.columnNames.length).toBeGreaterThan(0);
           expect(tableConfig.columnKeys.length).toBeGreaterThan(0);
       });
    });

    describe('extractWeatherData function ', function() {
        var tableConfig, mockWeatherData, parsedData;
        beforeEach(function() {
            tableConfig =  _weatherService.getTableConfig();
            jasmine.getJSONFixtures().fixturesPath = 'base/e2e-tests/data/';
            mockWeatherData = getJSONFixture('weather.json');
            parsedData = _weatherService.extractWeatherData(mockWeatherData.hourly.data);
        });
        it('should have defined parsedData', function() {
            expect(parsedData).toBeDefined();
        });
        it('should have 24 length data for each column', function() {
            Object(tableConfig.columnKeys).forEach(function(key) {
                expect(parsedData[key].length).toEqual(24);
            });
        });
    });

});