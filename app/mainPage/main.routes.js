angular.module('app.main')
    .run(appRun);

/* @ngInject */
function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
}

function getStates() {
    return [
        {
            state: 'main',
            config: {
                templateUrl: 'MainPage/main.html',
                url: '/',
                controller: 'MainController',
                controllerAs: 'mainCtrl',
                title: 'WeatherNerdzzz Main Page'
            }
        }
    ];
}