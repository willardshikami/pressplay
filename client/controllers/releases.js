angular.module('playlistApp')
    playlistApp.controller('PlaylistController', ['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
        console.log('Playlistcontroller loaded');

        $scope.getReleases = function(){
            $http.get('/api/releases')
            .then(function(response){
                $scope.releases = response.data;
            });
        }

        $scope.addReleases = function(){
            $http.post('/api/releases', $scope.releases)
            .then(function(response){
                window.location.href='#!/releases'
            });
        }
    }]);
    