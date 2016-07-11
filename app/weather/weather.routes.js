(function() {
    angular.module('app.weather')
    .run(appRun);

    /* @ngInject */
function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
}

function getStates() {
    return [
    {
        state: 'weather',
        config: {
            templateUrl: 'weather/weather.html',
            url: '/weather/:location', //:location is a string LAT,LONG,TIME
            controller: 'WeatherController',
            controllerAs: 'weatherCtrl',
            title: 'WeatherNerdzzz Data Page',
            resolve: {
                'locationInfo': function(WeatherService, $stateParams) {
                    return WeatherService.getWeatherData($stateParams.location).then(function(data) {
                        return WeatherService.extractWeatherData(data.hourly.data);
                    });
                }
            }
        }
    }
    ];
}
})();