angular.module('playlistApp')
    playlistApp.controller('PlaylistController', ['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
        console.log('Playlistcontroller loaded');

        $scope.getArtistes = function(){
            $http.get('/api/artistes').then(function(response){
                $scope.artistes = response.data;
            });
        }

        $scope.addArtistes = function(){
            $http.post('/api/artistes', $scope.charts)
            .then(function(response){
                window.location.href='#!/artistes'
            });
        }
    }]);