angular.module('playlistApp')
    playlistApp.controller('PlaylistController', ['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {

        $scope.getPlaylists = function(){
            $http.get('/api/playlists')
            .then(function(response){
                $scope.playlists = response.data;
            });
        }

        $scope.addPlaylist = function(){
            $http.post('/api/playlists', $scope.playlist)
            .then(function(response){
                window.location.href='#!/playlists'
            });
        }
    }]);
    