'use strict';

/**
 * @ngdoc overview
 * @name SmbDashboard
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */

// Example to require lodash
// This is resolved and bundled by browserify
//
// var _ = require( 'lodash' );

angular.module( 'SmbDashboard', [
  'ionic',
  'ngCordova',
  'ngResource'
] )
.run( [
  '$ionicPlatform',

  function( $ionicPlatform )
  {

  $ionicPlatform.ready(function() {
    // save to use plugins here
  });

  // add possible global event handlers here

} ] )

.config( [
  '$httpProvider',
  '$stateProvider',
  '$urlRouterProvider',

  function( $httpProvider, $stateProvider, $urlRouterProvider )
  {
    // register $http interceptors, if any. e.g.
    // $httpProvider.interceptors.push('interceptor-name');

    // Application routing
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/main.html',
        controller: 'MainController'
      })
      .state('app.home', {
        url: '/home',
        cache: true,
        views: {
          'home-tab': {
            templateUrl: 'templates/views/home.html',
            controller: 'HomeController'
          }
        }
      })
      .state('app.settings', {
        url: '/settings',
        cache: true,
        views: {
          'settings-tab': {
            templateUrl: 'templates/views/settings.html',
            controller: 'SettingsController'
          }
        }
      })
      .state('app.orders', {
        url: '/orders',
        cache: true,
        views: {
          'home-tab': {
            templateUrl: 'templates/views/orders.html',
            controller: 'SettingsController'
          }
        }
      })
      .state('app.redemptions', {
        url: '/redemptions',
        cache: true,
        views: {
          'home-tab': {
            templateUrl: 'templates/views/settings.html',
            controller: 'SettingsController'
          }
        }
      })
      .state('app.feeds', {
        url: '/feeds',
        cache: true,
        views: {
          'feeds-tab': {
            templateUrl: 'templates/views/feeds.html',
            controller: 'SettingsController'
          }
        }
      })
      .state('app.header', {
        url: '/header',
        cache: true,
        views: {
          'header-tab': {
            templateUrl: 'templates/views/header.html',
            controller: 'SettingsController'.
             OnEnter: function() {
                console.log('On Enter');
              },
              OnExit: function() {
                console.log('On Exit');
              }
          }
        }
      })
      .state('app.components', {
        url: '/components',
        cache: false,
        views: {
          'components-tab': {
            templateUrl: 'templates/views/compoments.html',
            controller: 'SettingsController'
          }
        }
      });


    // redirects to default route for undefined routes
    $urlRouterProvider.otherwise('/app/home');
  }
] )

// Angular module controllers
//
.controller( 'MainController',     require( './controllers/mainController'     ) )
.controller( 'HomeController',     require( './controllers/homeController'     ) )
.controller( 'SettingsController', require( './controllers/settingsController' ) )

// Angular module services
//
.factory( 'ExampleService',        require( './services/ExampleService' ) )
.factory( 'ApiService',            require( './services/ApiService'     ) )
;
