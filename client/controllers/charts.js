angular.module('playlistApp')
    playlistApp.controller('PlaylistController', ['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
        console.log('Playlistcontroller loaded');

        $scope.getCharts = function(){
            $http.get('/api/charts')
            .then(function(response){
                $scope.charts = response.data;
            });
        }

        $scope.addCharts = function(){
            $http.post('/api/charts', $scope.charts)
            .then(function(response){
                window.location.href='#!/charts'
            });
        }
    }]);