(function(){
// store mapbox config variables here
angular.module('app.maps')
.constant('mapbox', {
        'apiUrl': 'https://api.mapbox.com/styles/v1/z0d14c/ciqdckm480001cxnmyxoyxpmy/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiejBkMTRjIiwiYSI6ImNpcWRjZ21hbTAyODhmdG5lbmFrYzgxdnEifQ.QDAfp8HdWxA1EzSMMDmrKw',
        'apiID': 'z0d14c',
        'accessToken': 'pk.eyJ1IjoiejBkMTRjIiwiYSI6ImNpcWRjZ21hbTAyODhmdG5lbmFrYzgxdnEifQ.QDAfp8HdWxA1EzSMMDmrKw'
    });
})();