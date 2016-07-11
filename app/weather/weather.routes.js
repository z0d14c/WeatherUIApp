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
            templateUrl: 'weatherPage/weather.html',
            url: '/weather',
            controller: 'WeatherController',
            controllerAs: 'weatherCtrl',
            title: 'WeatherNerdzzz Weather Page'
        }
    }
    //{
    //    state: 'weatherChart',
    //    config: {
    //        templateUrl: 'MainPage/main.html',
    //        url: '/',
    //        controller: 'MainController',
    //        controllerAs: 'mainCtrl',
    //        title: 'WeatherNerdzzz Main Page'
    //    }
    //}
    ];
}
})();