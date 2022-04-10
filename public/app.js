(function () {
    'use strict';

    angular
        .module('app', ['ngRoute'])
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                controller: 'HomeController',
                templateUrl: 'home/home.view.html',
                controllerAs: 'vm',
                resolve: {
                    companyloggedIn: function(companySessionService){
                        return companySessionService.sessionSet();
                    }
                }
            })
            
            .when('/home1', {
                controller: 'HomeController',
                templateUrl: 'home/home1.view.html',
                controllerAs: 'vm',
                resolve: {
                    loggedIn: function(sessionService){
                        return sessionService.sessionSet();
                    }
                }
            })

            .when('/', {
                controller: 'LoginController',
                templateUrl: 'login/login.view.html',
                controllerAs: 'vm'
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'register/register.view.html',
                controllerAs: 'vm'
            })

            .when('/message', {
                controller: 'MessageController',
                templateUrl: 'message/message.view.html',
                controllerAs: 'vm',
                resolve: {
                    companyloggedIn: function(companySessionService){
                        return companySessionService.sessionSet();
                    }
                }
            })

            .otherwise({ redirectTo: '/' });
            $locationProvider.html5Mode({
            });
    }
    
})();
