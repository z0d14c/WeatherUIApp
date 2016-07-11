(function () {
    angular.module('app.weather')
        .directive('wuiChart', wuiChart)
        .controller('WeatherChartController', WeatherChartController);
    function wuiChart() {
        return {
            'restrict': 'E',
            'scope': {
                'x': '=',
                'y': '='
            },
            'templateUrl': 'weather/weatherchart.tpl.html',
            'controller': 'WeatherChartController',
            'controllerAs': 'chartCtrl'
        }
    }
    function WeatherChartController($scope, plotly) {
        var trace1 = {
            'x': $scope.x,
            'y': $scope.y,
            'type': 'scatter'
        };

        var layout = {
            'xaxis': {
                'title': 'Hour'
            },
            'yaxis': {
                'title': 'Temp'
            }
        };

        var data = [trace1];

        plotly.newPlot('chartDiv', data, layout);
    }
})();