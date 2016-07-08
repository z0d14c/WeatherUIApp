angular.module('app')
.directive('wuiHeader', wuiHeader);

function wuiHeader() {
    return {
        scope: {},
        templateUrl: './layout/header.html',
        replace: true,
        controller: function(){}
    }
}