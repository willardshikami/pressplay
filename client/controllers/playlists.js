angular.module('playlistApp')
    playlistApp.controller('PlaylistController', ['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
        console.log('Playlistcontroller loaded');

        $scope.getPlaylists = function(){
            $http.get('/api/playlists')
            .then(function(response){
                $scope.playlists = response.data;
            });
        }

        $scope.addPlaylists = function(){
            $http.post('/api/playlists', $scope.playlist)
            .then(function(response){
                window.location.href='#!/playlists'
            });
        }
    }]);