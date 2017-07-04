var playlistApp = angular.module('playlistApp', ['ngRoute']);

playlistApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'PlaylistController',
        templateUrl: 'views/playlists.html'
    });

    $routeProvider.when('/playlist', {
        controller: 'PlaylistController',
        templateUrl: 'views/playlists.html'
    });

    $routeProvider.when('/about', {
        controller: 'PlaylistController',
        templateUrl: 'views/about.html'
    });
});